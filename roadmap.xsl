<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
	<xsl:template match="/">
		<div class="title">BitShares 2.0 Roadmap</div>
		<xsl:variable name="timestamp" select="root/timestamp" />
		<div class="timestamp">Last update <xsl:value-of select="concat(substring($timestamp,9,2),'-',substring($timestamp,6,2),'-',substring($timestamp,1,4))" /></div>
		<table class="table">
			<thead>
				<tr>
					<th id="th1">Name</th>
					<th id="th2">Status</th>
					<th id="th3">Overlap</th>
					<th id="th4">Estimated Cost</th>
					<th id="th5">Estimated Time</th>
					<th id="th6">Worker Proposal</th>
					<th id="th7">Contractor</th>
					<th id="th8">Escrow</th>
					<th id="th9">Links</th>
				</tr>
			</thead>
			<tbody>
				<xsl:for-each select="root/areas/area">
					<tr>
						<td class="caption" colspan="9">
							<xsl:value-of select="name" />
						</td>
					</tr>
					<xsl:for-each select="items/item">
						<tr>
							<xsl:attribute name="class">
								<xsl:choose>
									<xsl:when test="@progress=1.0">done</xsl:when>
									<xsl:when test="@funded='Y'">funded</xsl:when>
								</xsl:choose>
							</xsl:attribute>
							<td id="td1">
								<xsl:value-of select="name" />
							</td>
							<td id="td2">
								<xsl:value-of select="status" />
							</td>
							<td id="td3">
								<xsl:attribute name="class">
									<xsl:choose>
										<xsl:when test="@progress=0 and @overlap='Y'">highlightTop</xsl:when>
										<xsl:when test="@progress=0 and @overlap!='N'">highlightMed</xsl:when>
									</xsl:choose>
								</xsl:attribute>
								<xsl:value-of select="@overlap" />
							</td>
							<td id="td4">
								<xsl:if test="contractor/cost!=''">
									<xsl:value-of select="concat(contractor/cost/@unit,' ',format-number(contractor/cost,'###,###'))" />
								</xsl:if>
								<xsl:if test="escrow/cost!=''">
									<xsl:value-of select="concat(' ','+',' ',escrow/cost/@unit,' ',format-number(escrow/cost,'###,###'))" />
								</xsl:if>
							</td>
							<td id="td5">
								<xsl:value-of select="time" />
							</td>
							<td id="td6">
								<xsl:value-of select="worker" />
							</td>
							<td id="td7">
								<a class="entity label btn-warning">
									<xsl:attribute name="href">
										<xsl:value-of select="contractor/url" />
									</xsl:attribute>
									<xsl:value-of select="contractor/name" />
								</a>
							</td>
							<td id="td8">
								<a class="entity label btn-info">
									<xsl:attribute name="href">
										<xsl:value-of select="escrow/url" />
									</xsl:attribute>
									<xsl:value-of select="escrow/name" />
								</a>
							</td>
							<td id="td9">
								<xsl:for-each select="links/link">
									<a class="link label btn-info" style="margin-right:4px;">
										<xsl:attribute name="href">
											<xsl:value-of select="url" />
										</xsl:attribute>
										<xsl:value-of select="label" />
									</a>
								</xsl:for-each>
							</td>
						</tr>
					</xsl:for-each>
				</xsl:for-each>
			</tbody>
		</table>
	</xsl:template>
</xsl:stylesheet>
