Ext.data.JsonP['CommonJS_XML']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>CommonJS XML</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845648\" class=\"content\">\n            <h1>CommonJS XML</h1>\n    <p>\nDemonstrates using CommonJS modules to create UI components in an Alloy XML view.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App folder location</div>\n        \n    <p>\n<i class=\" \">alloy</i>/test/apps/advanced/commonjs_xml    </p>\n    </div>\n    \n    <p>\n        <img src=\"images/download/attachments/41845648/common_js.png\" alt=\"images/download/attachments/41845648/common_js.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nThe sample app's <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/master/test/apps/advanced/commonjs_xml/lib/specialView.js\" target=\"_blank\">specialView.js</a> file defines a CommonJS module that exports two functions: <tt class=\" \">createView</tt> and <tt class=\" \">createMassiveCreateView</tt>. Each of these functions return a <a class=\"document-link unresolved\" href=\"#!/guide/CommonJS_XML\">View</a> object.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/lib/specialView.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var _ = require(</code><code class=\"string\">'alloy/underscore'</code><code class=\"plain\">)._;</code></div>\n<div class=\"line\"><code class=\"plain\">exports.createView = function(args) {</code></div>\n<div class=\"line\"><code class=\"plain\">\targs = args || {};</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar specialStyle = _.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tbackgroundColor: </code><code class=\"string\">'#111'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\theight: </code><code class=\"string\">'50dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\twidth: </code><code class=\"string\">'50dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttop: </code><code class=\"string\">'10dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tleft: </code><code class=\"string\">'10dp'</code></div>\n<div class=\"line\"><code class=\"plain\">\t}, args);</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">return</code><code class=\"plain\"> Ti.UI.createView(specialStyle);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">exports.createMassiveGreenView = function(args) {</code></div>\n<div class=\"line\"><code class=\"plain\">\targs = args || {};</code></div>\n<div class=\"line\"><code class=\"plain\">\tvar specialStyle = _.extend({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tbackgroundColor: </code><code class=\"string\">'#0f0'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\theight: </code><code class=\"string\">'200dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\twidth: </code><code class=\"string\">'200dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\ttop: </code><code class=\"string\">'10dp'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tleft: </code><code class=\"string\">'10dp'</code></div>\n<div class=\"line\"><code class=\"plain\">\t}, args);</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">return</code><code class=\"plain\"> Ti.UI.createView(specialStyle);</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <p>\nThe application's main <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/master/test/apps/advanced/commonjs_xml/views/index.xml\" target=\"_blank\">index.xml</a> view shows the two ways to declaratively create instances of these views in an XML file.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAdd a <tt class=\" \">&lt;Module/&gt;</tt> element whose <tt class=\" \">module</tt> attribute specifies the base name of the CommonJS module file, relative to the project's <tt class=\" \">libs/</tt> folder.    </p>\n</li><li class=\" \">    <p>\nLastly, you can declare the desired view by adding a an XML element whose name matches the base name of the view constructor function, minus the &quot;create&quot; prefix. In this example, the <tt class=\" \">&lt;MassiveGreenView/&gt;</tt> element automatically calls the <tt class=\" \">createMassiveGreenView()</tt> function.    </p>\n</li></ul>    <p>\nBy default, the module's <strong class=\" \">createView()</strong> method is invoked on the module to get the desired view. You can also specify a custom function to invoke with the the <tt class=\" \">method</tt> attribute of the &lt;Module/&gt; element.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;Window backgroundColor=</code><code class=\"string\">\"#fff\"</code><code class=\"plain\"> layout=</code><code class=\"string\">\"horizontal\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;!--</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tThe </code><code class=\"string\">'specialView'</code><code class=\"plain\"> module's exported </code><code class=\"string\">\"createView\"</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tfunction is automatically invoked.</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t--&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Module module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;!-- We can use ids and classes to apply styles from TSS --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Module module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> id=</code><code class=\"string\">\"redOne\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Module module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">\"blue\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Module module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">\"bigger blue\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;!-- and it also supports inline properties as well --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Module module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> left=</code><code class=\"string\">\"50dp\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;!--</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tWe can specify an explicit </code><code class=\"string\">\"method\"</code><code class=\"plain\"> to be used to create the UI</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tcomponent, in </code><code class=\"keyword\">this</code><code class=\"plain\"> </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"string\">'createMassiveGreenView'</code><code class=\"plain\">. </code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tAlso, since these all </code><code class=\"keyword\">return</code><code class=\"plain\"> a valid Titanium proxy object, you can</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tfurther nest Titanium proxy objects inside of them, as shown below.</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t--&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;Module module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> method=</code><code class=\"string\">\"createMassiveGreenView\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"doClick\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;Label&gt;click me&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/Module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;!--</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tFinally, we can declare the module as an XML element, without having to specify the</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t</code><code class=\"string\">'method'</code><code class=\"plain\"> parameter.</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t--&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;MassiveGreenView module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"doClick\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t&lt;Label&gt;or click me!&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;/MassiveGreenView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t&lt;View module=</code><code class=\"string\">\"specialView\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"doClick\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">\t&lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845648_CommonJSXML-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/CommonJS_XML\">Library Code and CommonJS Modules</a>    </p>\n</li></ul>    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845648\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"CommonJS XML"});