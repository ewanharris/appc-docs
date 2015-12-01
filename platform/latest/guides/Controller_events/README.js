Ext.data.JsonP['Controller_events']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Controller events</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845685\" class=\"content\">\n            <h1>Controller events</h1>\n    <p>\nDemonstrates using <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Events\" target=\"_blank\">Backbone events</a> to communicate between view-controllers.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n            <div class=\"title\">App Folder Location</div>\n        \n    <p>\nalloy/test/apps/<strong class=\" \">basics/controller_events</strong>    </p>\n    </div>\n    \n    <p>\n        <img src=\"images/download/attachments/41845685/controller-event.png\" alt=\"images/download/attachments/41845685/controller-event.png\" class=\"confluence-embedded-image\" width=\"250\"/>\n        </p>\n    <p>\nThe main XML view consists of a TextField and two buttons, labeled &quot;Fire Event&quot; and &quot;Remove Listener&quot;. When the user clicks &quot;Fire Event&quot; the required CustomView view-controller uses the Backbone library's <tt class=\" \">trigger()</tt> method to generate an event named <strong class=\" \">someEvent. </strong>The event object includes a field named <tt class=\" \">message</tt> field that contains the text entered in the TextField.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/CustomView.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function fireEvent(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">  $.trigger(</code><code class=\"string\">'someEvent'</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">    message:$.text.value</code></div>\n<div class=\"line\"><code class=\"plain\">  });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nThe main application view-controller binds a callback function named <strong class=\" \">handler</strong> to the <tt class=\" \">someEvent</tt> event, and displays the message enter in the TextField. It also provides a button that un-binds the handler from the same event.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/index.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function handler(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">  alert(</code><code class=\"string\">'got this from custom event: '</code><code class=\"plain\">+e.message);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function removeListener() {</code></div>\n<div class=\"line\"><code class=\"plain\">  $.requiredController.off(</code><code class=\"string\">'someEvent'</code><code class=\"plain\">, handler);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">$.requiredController.on(</code><code class=\"string\">'someEvent'</code><code class=\"plain\">, handler);</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845685_Controllerevents-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/backbone/0.9.2/#Events\" target=\"_blank\">Backbone Events guide</a>    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845685\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Controller events"});