<?xml version="1.0" encoding="ISO-8859-1"?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="es" xml:lang="es"><head>
<meta content="text/html; charset=ISO-8859-1" http-equiv="Content-Type" />
<!--
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
              This file is generated from xml source: DO NOT EDIT
        XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
      -->
<title>beos - Servidor HTTP Apache Versi?n 2.2</title>
<link href="../style/css/manual.css" rel="stylesheet" media="all" type="text/css" title="Main stylesheet" />
<link href="../style/css/manual-loose-100pc.css" rel="alternate stylesheet" media="all" type="text/css" title="No Sidebar - Default font size" />
<link href="../style/css/manual-print.css" rel="stylesheet" media="print" type="text/css" /><link rel="stylesheet" type="text/css" href="../style/css/prettify.css" />
<script src="../style/scripts/prettify.min.js" type="text/javascript">
</script>

<link href="../images/favicon.ico" rel="shortcut icon" /><link href="http://httpd.apache.org/docs/current/mod/beos.html" rel="canonical" /></head>
<body>
<div id="page-header">
<p class="menu"><a href="../mod/">M?dulos</a> | <a href="../mod/directives.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa de este sitio web</a></p>
<p class="apache">Versi?n 2.2 del Servidor HTTP Apache</p>
<img alt="" src="../images/feather.gif" /></div>
<div class="up"><a href="./"><img title="&lt;-" alt="&lt;-" src="../images/left.gif" /></a></div>
<div id="path">
<a href="http://www.apache.org/">Apache</a> &gt; <a href="http://httpd.apache.org/">Servidor HTTP</a> &gt; <a href="http://httpd.apache.org/docs/">Documentaci?n</a> &gt; <a href="../">Versi?n 2.2</a> &gt; <a href="./">M?dulos</a></div>
<div id="page-content">
<div class="retired"><h4>Please note</h4>
            <p> This document refers to a legacy release (<strong>2.2</strong>) of Apache httpd. The active release (<strong>2.4</strong>) is documented <a href="http://httpd.apache.org/docs/current">here</a>. If you have not already upgraded, please follow <a href="http://httpd.apache.org/docs/current/upgrading.html">this link</a> for more information.</p>
        <p>You may follow <a href="http://httpd.apache.org/docs/current/mod/beos.html">this link</a> to go to the current version of this document.</p></div><div id="preamble"><h1>MPM de Apache beos</h1>
<div class="toplang">
<p><span>Idiomas disponibles: </span><a href="../de/mod/beos.html" hreflang="de" rel="alternate" title="Deutsch">&nbsp;de&nbsp;</a> |
<a href="../en/mod/beos.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/beos.html" title="Espa?ol">&nbsp;es&nbsp;</a> |
<a href="../ko/mod/beos.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a></p>
</div>
<div class="outofdate">Esta traducci?n podr?a estar
            obsoleta. Consulte la versi?n en ingl?s de la
            documentaci?n para comprobar si se han producido cambios
            recientemente.</div>
<table class="module"><tr><th><a href="module-dict.html#Description">Descripci?n:</a></th><td>Este m?dulo de muiltiprocesamiento est?
optimizado para BeOS.</td></tr>
<tr><th><a href="module-dict.html#Status">Estado:</a></th><td>MPM</td></tr>
<tr><th><a href="module-dict.html#ModuleIdentifier">Identificador de M?dulos:</a></th><td>mpm_beos_module</td></tr>
<tr><th><a href="module-dict.html#SourceFile">Fichero de C?digo Fuente:</a></th><td>beos.c</td></tr></table>
<h3>Resumen de contenidos</h3>

    <p>Este m?dulo de muiltiprocesamiento (MMP)
      es el que usa por defecto para BeOS. Usa un
      ?nico proceso de control que crea hebras para atender las
      peticiones.</p>
</div>
<div id="quickview"><h3 class="directives">Directivas</h3>
<ul id="toc">
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#coredumpdirectory">CoreDumpDirectory</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#group">Group</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#listen">Listen</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#listenbacklog">ListenBacklog</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#maxclients">MaxClients</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#maxmemfree">MaxMemFree</a></li>
<li><img alt="" src="../images/down.gif" /> <a href="#maxrequestsperthread">MaxRequestsPerThread</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#maxsparethreads">MaxSpareThreads</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#minsparethreads">MinSpareThreads</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#pidfile">PidFile</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#receivebuffersize">ReceiveBufferSize</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#scoreboardfile">ScoreBoardFile</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#sendbuffersize">SendBufferSize</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#startthreads">StartThreads</a></li>
<li><img alt="" src="../images/right.gif" /> <a href="mpm_common.html#user">User</a></li>
</ul>
<h3>Consulte tambi?n</h3>
<ul class="seealso">
<li><a href="../bind.html">Configurar las direcciones y los
puertos que usa Apache</a></li>
</ul><ul class="seealso"><li><a href="#comments_section">Comentarios</a></li></ul></div>

<div class="top"><a href="#page-header"><img alt="top" src="../images/up.gif" /></a></div>
<div class="directive-section"><h2><a name="MaxRequestsPerThread" id="MaxRequestsPerThread">MaxRequestsPerThread</a> <a name="maxrequestsperthread" id="maxrequestsperthread">Directiva</a></h2>
<table class="directive">
<tr><th><a href="directive-dict.html#Description">Descripci?n:</a></th><td>Limita el n?mero de peticiones que una hebra (thread) puede
atender durante su vida</td></tr>
<tr><th><a href="directive-dict.html#Syntax">Sintaxis:</a></th><td><code>MaxRequestsPerThread <var>number</var></code></td></tr>
<tr><th><a href="directive-dict.html#Default">Valor por defecto:</a></th><td><code>MaxRequestsPerThread 0</code></td></tr>
<tr><th><a href="directive-dict.html#Context">Contexto:</a></th><td>server config</td></tr>
<tr><th><a href="directive-dict.html#Status">Estado:</a></th><td>MPM</td></tr>
<tr><th><a href="directive-dict.html#Module">M?dulo:</a></th><td>beos</td></tr>
</table>
    <p>La directiva <code class="directive">MaxRequestsPerThread</code> fija
    el n?mero m?ximo de peticiones que una hebra del
    servidor puede atender durante su vida. Despues de atender
    <code class="directive">MaxRequestsPerThread</code> peticiones, la hebra
    termina. Si el l?mite fijado en <code class="directive">MaxRequestsPerThread</code> es <code>0</code>, entonces la
    hebra puede atender peticiones indefinidamente.</p>

    <p>Fijar la directiva <code class="directive">MaxRequestsPerThread</code>
    a un l?mite distinto de cero ofrece dos benefcios
    fundamentales:</p>

    <ul>
      <li>limita la cantidad de memoria que puede consumir una hebra
      si hay una filtraci?n (accidental) de memoria;</li>

      <li>poniendo un l?mite a la vida de las hebras, se ayuda a
      reducir el n?mero de hebras cuando se reduce la carga de
      trabajo en el servidor.</li>
    </ul>

    <div class="note"><h3>Nota:</h3> <p>Para peticiones <code class="directive"><a href="../mod/core.html#keepalive">KeepAlive</a></code>, solo la primera
      petici?n se tiene en cuenta para este l?mite. De hecho, en este
      caso el l?mite se impone sobre el n?mero m?ximo
      de <em>conexiones</em> por hebra.</p>
    </div>

</div>
</div>
<div class="bottomlang">
<p><span>Idiomas disponibles: </span><a href="../de/mod/beos.html" hreflang="de" rel="alternate" title="Deutsch">&nbsp;de&nbsp;</a> |
<a href="../en/mod/beos.html" hreflang="en" rel="alternate" title="English">&nbsp;en&nbsp;</a> |
<a href="../es/mod/beos.html" title="Espa?ol">&nbsp;es&nbsp;</a> |
<a href="../ko/mod/beos.html" hreflang="ko" rel="alternate" title="Korean">&nbsp;ko&nbsp;</a></p>
</div><div class="top"><a href="#page-header"><img src="../images/up.gif" alt="top" /></a></div><div class="section"><h2><a id="comments_section" name="comments_section">Comentarios</a></h2><div class="warning"><strong>Notice:</strong><br />This is not a Q&amp;A section. Comments placed here should be pointed towards suggestions on improving the documentation or server, and may be removed again by our moderators if they are either implemented or considered invalid/off-topic. Questions on how to manage the Apache HTTP Server should be directed at either our IRC channel, #httpd, on Freenode, or sent to our <a href="http://httpd.apache.org/lists.html">mailing lists</a>.</div>
<script type="text/javascript"><!--//--><![CDATA[//><!--
var comments_shortname = 'httpd';
var comments_identifier = 'http://httpd.apache.org/docs/2.2/mod/beos.html';
(function(w, d) {
    if (w.location.hostname.toLowerCase() == "httpd.apache.org") {
        d.write('<div id="comments_thread"><\/div>');
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = 'https://comments.apache.org/show_comments.lua?site=' + comments_shortname + '&page=' + comments_identifier;
        (d.getElementsByTagName('head')[0] || d.getElementsByTagName('body')[0]).appendChild(s);
    }
    else { 
        d.write('<div id="comments_thread">Comments are disabled for this page at the moment.<\/div>');
    }
})(window, document);
//--><!]]></script></div><div id="footer">
<p class="apache">Copyright 2017 The Apache Software Foundation.<br />Licencia bajo los t?rminos de la <a href="http://www.apache.org/licenses/LICENSE-2.0">Apache License, Version 2.0</a>.</p>
<p class="menu"><a href="../mod/">M?dulos</a> | <a href="../mod/directives.html">Directivas</a> | <a href="http://wiki.apache.org/httpd/FAQ">Preguntas Frecuentes</a> | <a href="../glossary.html">Glosario</a> | <a href="../sitemap.html">Mapa de este sitio web</a></p></div><script type="text/javascript"><!--//--><![CDATA[//><!--
if (typeof(prettyPrint) !== 'undefined') {
    prettyPrint();
}
//--><!]]></script>
</body></html>