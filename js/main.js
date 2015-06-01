

//  Dynamic grid columns with Twitter Bootstrap


$(document).on("ready", function() {
  $.each(['xs', 'sm', 'md', 'lg'], function(idx, gridSize) {
    $('.col-' + gridSize + '-auto:first').parent().each(function() {
      //we count the number of childrens with class col-md-6
      var numberOfCols = $(this).children('.col-' + gridSize + '-auto').length;
      if (numberOfCols > 0 && numberOfCols < 13) {
        minSpan = Math.floor(12 / numberOfCols);
        remainder = (12 % numberOfCols);
        $(this).children('.col-' + gridSize + '-auto').each(function(idx, col) {
          var width = minSpan;
          if (remainder > 0) {
            width += 1;
            remainder--;
          }
          $(this).addClass('col-' + gridSize + '-' + width);
        });
      }
    });
  });
});



// Affix Sub Nav - r-sidebar


$('#subnav').affix({
  offset: {
          top: 240
        }

});




// Autohiding Top Nav 


;(function($, window, document, undefined) {
  var pluginName = 'autoHidingNavbar',
      $window = $(window),
      $document = $(document),
      _scrollThrottleTimer = null,
      _resizeThrottleTimer = null,
      _throttleDelay = 70,
      _lastScrollHandlerRun = 0,
      _previousScrollTop = null,
      _windowHeight = $window.height(),
      _visible = true,
      _hideOffset,
      defaults = {
        disableAutohide: false,
        showOnUpscroll: true,
        showOnBottom: true,
        hideOffset: 'auto', // "auto" means the navbar height
        animationDuration: 200
      };

  function AutoHidingNavbar(element, options) {
    this.element = $(element);
    this.settings = $.extend({}, defaults, options);
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  function hide(autoHidingNavbar) {
    if (!_visible) {
      return;
    }

    autoHidingNavbar.element.addClass('navbar-hidden').animate({
      top: -autoHidingNavbar.element.height()
    }, {
      queue: false,
      duration: autoHidingNavbar.settings.animationDuration
    });

    $('.dropdown.open .dropdown-toggle', autoHidingNavbar.element).dropdown('toggle');

    _visible = false;
  }

  function show(autoHidingNavbar) {
    if (_visible) {
      return;
    }

    autoHidingNavbar.element.removeClass('navbar-hidden').animate({
      top: 0
    }, {
      queue: false,
      duration: autoHidingNavbar.settings.animationDuration
    });
    _visible = true;
  }

  function detectState(autoHidingNavbar) {
    var scrollTop = $window.scrollTop(),
        scrollDelta = scrollTop - _previousScrollTop;

    _previousScrollTop = scrollTop;

    if (scrollDelta < 0) {
      if (_visible) {
        return;
      }

      if (autoHidingNavbar.settings.showOnUpscroll || scrollTop <= _hideOffset) {
        show(autoHidingNavbar);
      }
    }
    else if (scrollDelta > 0) {
      if (!_visible) {
        if (autoHidingNavbar.settings.showOnBottom && scrollTop + _windowHeight === $document.height()) {
          show(autoHidingNavbar);
        }
        return;
      }

      if (scrollTop >= _hideOffset) {
        hide(autoHidingNavbar);
      }
    }

  }

  function scrollHandler(autoHidingNavbar) {
    if (autoHidingNavbar.settings.disableAutohide) {
      return;
    }

    _lastScrollHandlerRun = new Date().getTime();

    detectState(autoHidingNavbar);
  }

  function bindEvents(autoHidingNavbar) {
    $document.on('scroll.' + pluginName, function() {
      if (new Date().getTime() - _lastScrollHandlerRun > _throttleDelay) {
        scrollHandler(autoHidingNavbar);
      }
      else {
        clearTimeout(_scrollThrottleTimer);
        _scrollThrottleTimer = setTimeout(function() {
          scrollHandler(autoHidingNavbar);
        }, _throttleDelay);
      }
    });

    $window.on('resize.' + pluginName, function() {
      clearTimeout(_resizeThrottleTimer);
      _resizeThrottleTimer = setTimeout(function() {
        _windowHeight = $window.height();
      }, _throttleDelay);
    });
  }

  function unbindEvents() {
    $document.off('.' + pluginName);

    $window.off('.' + pluginName);
  }

  AutoHidingNavbar.prototype = {
    init: function() {
      this.elements = {
        navbar: this.element
      };

      this.setDisableAutohide(this.settings.disableAutohide);
      this.setShowOnUpscroll(this.settings.showOnUpscroll);
      this.setShowOnBottom(this.settings.showOnBottom);
      this.setHideOffset(this.settings.hideOffset);
      this.setAnimationDuration(this.settings.animationDuration);

      _hideOffset = this.settings.hideOffset === 'auto' ? this.element.height() : this.settings.hideOffset;
      bindEvents(this);

      return this.element;
    },
    setDisableAutohide: function(value) {
      this.settings.disableAutohide = value;
      return this.element;
    },
    setShowOnUpscroll: function(value) {
      this.settings.showOnUpscroll = value;
      return this.element;
    },
    setShowOnBottom: function(value) {
      this.settings.showOnBottom = value;
      return this.element;
    },
    setHideOffset: function(value) {
      this.settings.hideOffset = value;
      return this.element;
    },
    setAnimationDuration: function(value) {
      this.settings.animationDuration = value;
      return this.element;
    },
    show: function() {
      show(this);
      return this.element;
    },
    hide: function() {
      hide(this);
      return this.element;
    },
    destroy: function() {
      unbindEvents(this);
      show(this);
      $.data(this, 'plugin_' + pluginName, null);
      return this.element;
    }
  };

  $.fn[pluginName] = function(options) {
    var args = arguments;

    if (options === undefined || typeof options === 'object') {
      return this.each(function() {
        if (!$.data(this, 'plugin_' + pluginName)) {
          $.data(this, 'plugin_' + pluginName, new AutoHidingNavbar(this, options));
        }
      });
    } else if (typeof options === 'string' && options[0] !== '_' && options !== 'init') {
      var returns;

      this.each(function() {
        var instance = $.data(this, 'plugin_' + pluginName);

        if (instance instanceof AutoHidingNavbar && typeof instance[options] === 'function') {
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
      });

      return returns !== undefined ? returns : this;
    }

  };

})(jQuery, window, document);



// particles frontpage


/* ---- particles.js config ---- */

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#000000"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#FFFFFF"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});



// Reading time

;(function ($, window, document, undefined) {
  
  var pluginName = "readingTime";
  
  var defaults = {
    bubble: '#scrollbubble'
  };

  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this.scroll_timer = null;
    this._defaults = defaults;
    this._name = pluginName;
    this.init();
  }

  Plugin.prototype = {
    init: function () {
      $(window).scroll($.proxy(this.updateTime, this));
      $('<div id="scrollbubble"></div>').appendTo("body");
      $('<style>#scrollbubble{display:none;position:fixed;bottom:20px;right:20px;z-index:500;background-color:#F0F0F0;color:#808080;border-radius:3px;font-family:Georgia;font-size:12px;text-transform:uppercase;letter-spacing:1px;padding:10px 20px}#scrollbubble:after{content:" ";position:absolute;top:50%;right:-8px;height:0;width:0;margin-top:-4px;border:4px solid transparent;border-left-color:#F0F0F0}</style>').appendTo('body');
    },
    updateTime: function () {
      var total_reading_time = 0,
        bubble = $(this.options.bubble),
        post_content = $(this.element);
      var viewportHeight = $(window).height(),
       scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
       progress = $(window).scrollTop() / ($(document).height() - viewportHeight),
       distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - bubble.height() / 2;
      var total_reading_time = this.calculate_total_time_words(post_content, this.element) / 60;
      var total_reading_time_remaining = Math.ceil(total_reading_time - (total_reading_time * progress));
      var text = '';

      if(total_reading_time_remaining > 1) {
        text = total_reading_time_remaining + ' minutes left';
      } else if(progress >= 1) {
        text = 'Thanks for reading';
      } else if (total_reading_time_remaining <= 1) {
        text = '1 minute left';
      }

      bubble
        .text(text)
        .fadeIn(500);

      // Fade out the annotation after 1 second of no scrolling.
      if (this.scroll_timer !== null) {
        clearTimeout(this.scroll_timer);
      }

      this.scroll_timer = setTimeout(function() {
        bubble.fadeOut();
      }, 1500);
    },
    calculate_total_time_words: function(post_content, element){
      var total = 0;
      post_content.each(function() {
        total += Math.round(60*$(element).text().split(' ').length/200); // 200 = number of words per minute
      });

      return total;
    }
  };

  $.fn[pluginName] = function (options) {
    return this.each(function () {
      if (!$.data(this, "plugin_" + pluginName)) {
        $.data(this, "plugin_" + pluginName, new Plugin(this, options));
      }
    });
  };
})(jQuery, window, document);

