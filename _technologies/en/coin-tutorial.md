---
permalink: /tutorial/currency/
title: Blockchain Currency Tutorial
subtitle: Design and build a crypto-currency in a day
priority: 1
summary: >

---

This tutorial will demonstrate how to leverage a Cryptonomex blockchain toolkit to build your own crypto currency complete with a basic user interface. While
many platforms have native support for issuing tokens, this example builds the token system from scratch in Javascript using only a thin wrapper on a [WebSocket](https://www.websocket.org/) interface.

The heart of Flux architecture is user actions. These actions get included into the blockchain and are *dispatched* to your application via a websocket callback.

<center>
<img src="https://facebook.github.io/flux/img/flux-simple-f8-diagram-with-client-action-1300w.png" width="75%" />
</center>

<br/>

Actions are passed to your application in the form of a JSON object that
contains all of the information about who signed the action, when they signed it, when it was published, its global sequence number, and any tags associated
with it.  For the purpose of a currency, there is only a single action type: `transfer`. Our application will subscribe to all actions tagged with both `transfer`
and `mycoin`. The `transfer` operation only requires 3 fields:`to`,`from`, and `amount`.

Example of Action Object:
{% highlight json %}
{
  "tags": ["transfer","mycoin"],
  "data": {
     "from" : "FROM_PUBLIC_KEY", 
     "to" : "TO_PUBLIC_KEY", 
     "amount" : 0
  },
  "signatures" : { "FROM_PUBLIC_KEY" : "HEX_SIGNATURE" }
}
{% endhighlight js %}

After defining the only action our application requires, we can begin an implementation of our application as a simple Javascript class that
stores state within an [Immutable JS Map](https://facebook.github.io/immutable-js/docs/#/Map) rather than a SQL database.

{% highlight javascript %}
class MyCoinApp {
  /** 
    The constructor defines the initial state of your application. This is like the
    genesis block of Bitcoin. For this demonstration we will assume all of the coins start
    out belonging to a single individual.
   */
  constructor() {
    let initial_balance = 1000000;
    let initial_owner   = "INITIAL_OWNER_PUBLIC_KEY";

    /** the content of state will automatically be saved and restored between application restarts */
    this.state = Immutable.Map();
    this.state = this.state.set( initial_owner, initial_balance ); 
  }

  /**
    This method will be called every time an action has been permanently committed to
    the blockchain log. The `action` argument contains a object similar to the one described
    above. This method should return true if the action was accepted by the application, otherwise
    it should return false to indicate that the action was ignored. If the action was ignored then
    the state should not change.
  */ 
  onAction( action ) => {
    /** validate action internal preconditions */
    if( !action.hasTags( 'transfer', 'mycoin' ) return false;
    if( !Cryptonomex.isPublicKey( actiona.data.from ) ) return false;
    if( !Cryptonomex.isPublicKey( actiona.data.to ) ) return false;
    if( action.data.amount <= 0 ) return;

    /** validate that the action is valid within the context of current application state */
    let from_initial_balance = this.getBalance( action.data.from );
    let to_initial_balance   = this.getBalance( action.data.to );
    if( !action.isAuthorizedBy( action.data.from ) ) return false;
    if( action.data.amount > from_initial_balance ) return false;

    /** update the application state, could be replaced with a SQL query */
    this.state = this.state.withMutations( state => {
       state.set( action.data.from, from_initial_balance - action.data.amount );
       state.set( action.data.to, to_initial_balance + action.data.amount );
    });
    return true;
  }

  /** helper method for getting state, could be replaced with a SQL query. Methods declared on your
      application may be called by the browser to fetch data about application state.
  */
  getBalance( owner_key ) => { 
     let balance = this.state.get( owner_key );
     return balance === undefined ? balance : 0;
  }
}
{% endhighlight %}

The example above leverages some helper functions (e.g. `isPublicKey') that are provided as part of the Cryptonomex toolkit.

After defining your application you can deploy it via Node.js using the application wrapper.

{% highlight javascript %}
import Cryptonomex from "cryptonomex"
import MyCoinApp from "MyCoinApp"

let websocket_api_port = 3333;
/**
   This call will wrap your application and connect to the blockchain server. It will automatically save
   your applications state between runs. While subscribed it will call onAction() for every action that
   gets included in the blockchain. Methods exposed by MyCoinApp will be available in the Browser via
   JSON RPC requests. Any data within your application state is automatically available in the Browser.
 */
let application = new BlockchainApplication( "MyCoinApp", 
                                             new MyCoinApp, 
                                             "datadir" );
application.subscribeToBlockchain( "localhost:2222" );
application.listen( websocket_api_port );

{% endhighlight %}


## Creating a Web Interface for Your Application

For the purpose of this demonstration we will use React.JS to build a basic interface. The interface needs to show the 
user's balance and allow them to transfer funds other users.

{% highlight javascript %}
import React from "react";
import Wallet from "Cryptonomex/Wallet"
import Blockchain from "Cryptonomex/Blockchain"

class TransferForm extends React.Component {

   /** When this component is mounted it needs to subscribe to notifications of any changes 
     * in the application state. When a balance changes, this.onUpdate() will be called which
     * will trigger the component to re-render.
     */
   componentWillMount()  {
      Blockchain.onChange( "MyCoinApp", this, this.onUpdate.bind(this) );
      this.setState( { balance: Blockchain.getAppState( "MyCoinApp", next_props.from ) } );
   }

   /**
    * If the component changes the "from" property, the state must be updated by querying
    * the server to find out what the value of state[next_props.from] is. The Blockchain
    * maintains a cache of application state and will return undefined until a response from
    * the server is received.
    */ 
   componentWillReceiveProps( next_props ) {
      this.setState( { balance: Blockchain.getAppState( "MyCoinApp", next_props.from ) } );
   }

   /** Any time application state changes this method is called so the component can update
    *  its internal state from the Blockchain cache and rerender if necessary.
    */
   onUpdate() {
      this.setState( { balance: Blockchain.getAppState( "MyCoinApp", this.props.from ) } );
   }

   /** When the component unmounts we can unsubscribe from updates. */
   componentWillUnmount() {
      Blockchain.onChange( "MyCoinApp", this, null );
   }

   /** This method is called when the transfer form is submitted. */
   onTransfer( e ) {
      e.preventDefault();
      let to = this.refs.to.trim();
      let amount = this.refs.amount.trim();
      let from = this.props.from;

      /** This method will create an action, sign it, broadcast it, and return a 
        promise that will return after the action has been processed by the MyCoinApp.

        Broadcast action takes 3 arguments: an array of tags, a data payload, and an
        array of public keys that should sign the action. 
      */
      Wallet.broadcastAction( ["transfer","mycoin"], { from, to, amount }, [from] )
            .then( (action) => {
               this.setState( {error:null} ); 
            }).catch( (error) => {
               this.setState( {error} ); 
            });
   }

   /** Render a minimal form that displays the users account key, balance, and transfer form. */ 
   render() {
      return (
        <form onSubmit={this.onTransfer.bind(this)} >
           <div><span>Initial Balance: {this.props.balance} MYCOIN</span> </div>
           <div><span>From: </span> <input type="text" value={this.props.from} ref="from" /></div>
           <input type="text" placeholder="To Key" ref="to" /><br/>
           <input type="text" placeholder="0" ref="amount" /><br/>
           <input type="submit" value="Transfer" />
           <div>{this.state.error}</div>
        </form>
      )
   }
};
{% endhighlight %}

This is the root component of the Application. If the user is logged in, then it
renders the TransferForm, otherwise it will ask the user for their username/password
or ask them to create a new account.

{% highlight javascript %}
class MyCoinSite extends React.Component {
   render() {
     let wallet_data = Wallet.getData();
     return <LoginComponent>
               <TransferForm account={wallet_data.owner_key} balance={blockchain}/>
            </LoginComponent>
   }
};

export default LoginComponent
{% endhighlight %}


