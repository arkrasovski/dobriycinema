<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <html>
            <body>
                <h1>Films list</h1>
                <p>The number of films: <xsl:value-of select="count(//film)"/></p>
                <table>
                    <xsl:apply-templates select="//film[session/@seats &gt;=10]"/>
                </table>

                <h1>Films of LyatskiyStudio </h1>
                <table>
                    <xsl:apply-templates select="//film[.//@studio='LyatskiyCinema']"/>
                </table>

                <h1>Short films</h1>
                <table>
                    <xsl:apply-templates select="//film[.//@duration &lt;= 90]"/>
                </table>
                <h1>Films of <xsl:value-of select="//@name"/></h1>
                <table>
                    <xsl:apply-templates select="//film"/>
                </table>
            </body>
        </html>
    </xsl:template>
    <xsl:template match="film[session/@seats &gt;=10]">
        <tr><td><xsl:value-of select="@name"/></td><td><xsl:value-of select="@rating"/></td></tr>
    </xsl:template>
    <xsl:template match="film[.//@studio='LyatskiyCinema']">
        <tr><td><xsl:value-of select="@name"/></td><td><xsl:value-of select="@rating"/></td></tr>
    </xsl:template>
    <xsl:template match="film[.//@duration &lt;= 90]">
        <tr><td><xsl:value-of select="@name"/></td><td><xsl:value-of select="@rating"/></td>
            </tr>

    </xsl:template>
    <xsl:template match="film">
        <tr><td><xsl:value-of select="@name"/></td><td><xsl:value-of select="@rating"/></td>
           </tr>

    </xsl:template>
</xsl:stylesheet>

