<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <head>
        <link rel="stylesheet" href="css/roadmap.css"/>
      </head>
      <body>
        <div><h1>BitShares 2.0 Roadmap</h1></div>
        <xsl:for-each select="areas/area">
          <table>
            <caption><xsl:value-of select="name"/></caption>
            <thead>
              <tr>
                <th id="th1" scope="col">Title</th>
                <th id="th2" scope="col">Status</th>
                <th id="th3" scope="col">Overlap</th>
                <th id="th4" scope="col">Estimated Cost</th>
                <th id="th5" scope="col">Worker Proposal</th>
                <th id="th6" scope="col">Contractor</th>
                <th id="th7" scope="col">Links</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="items/item">
                <tr>
                  <xsl:attribute name="class">
                    <xsl:choose>
                      <xsl:when test="@done &gt; 0">done</xsl:when>
                      <xsl:otherwise></xsl:otherwise>
                    </xsl:choose>
                  </xsl:attribute>
                  <th id="td1" scope="row"><xsl:value-of select="title"/></th>
                  <td id="td2"><xsl:value-of select="status"/></td>
                  <td id="td3">
                    <xsl:attribute name="class">
                      <xsl:choose>
                        <xsl:when test="(@done &lt;= 0) and (overlap = 'Y')">alert</xsl:when>
                        <xsl:when test="(@done &lt;= 0) and (overlap = '?')">warn</xsl:when>
                        <xsl:otherwise></xsl:otherwise>
                      </xsl:choose>
                    </xsl:attribute>
                    <xsl:value-of select="overlap"/>
                  </td>
                  <td id="td4"><xsl:value-of select="cost"/></td>
                  <td id="td5"><xsl:value-of select="worker"/></td>
                  <td id="td6">
                    <a>
                      <xsl:attribute name="href">
                        <xsl:value-of select="contractor/url"/>
                      </xsl:attribute>
                      <xsl:value-of select="contractor/name"/>
                    </a>
                  </td>
                  <td id="td7">
                    <div class="links">
                      <xsl:for-each select="links/link">
                        <span class="link">
                          <a>
                            <xsl:attribute name="href">
                              <xsl:value-of select="url"/>
                            </xsl:attribute>
                            <xsl:value-of select="label"/>
                          </a>
                        </span>
                      </xsl:for-each>
                    </div>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
