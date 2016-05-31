Ext.data.JsonP['Using_JavaScript_Libraries']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Using JavaScript Libraries</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083088\" class=\"content\">\n            <h1>Using JavaScript Libraries</h1>\n    <p>\n<strong class=\" \">Contents</strong>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Using_JavaScript_Libraries-section-30083088_UsingJavaScriptLibraries-Accessingyourprojects\">Accessing your projects</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Using_JavaScript_Libraries-section-30083088_UsingJavaScriptLibraries-Addingadocumentedlibraryforcodeassist\">Adding a documented library for code assist</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Using_JavaScript_Libraries-section-30083088_UsingJavaScriptLibraries-Viewingcodeassist(usingjQueryasanexample)\">Viewing code assist (using jQuery as an example)</a>    </p>\n</li></ul>    <p>\nThis walkthrough will instruct you how to create a new web project and get started with your coding using a pre-documented JavaScript library. For this example we will use jQuery.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nThe library you are using must have either a <a class=\"document-link \" href=\"#!/guide/JSCA_1.0_Specification\">JSCA 1.0 Specification</a> file, be documented using the <a class=\"document-link \" href=\"#!/guide/ScriptDoc_(SDOC)_2.0_Specification\">ScriptDoc</a> spec, be documented using <a class=\"external-link external-link\" href=\"http://weblogs.asp.net/bleroy/archive/2007/04/23/the-format-for-javascript-doc-comments.aspx\" target=\"_blank\">VSDoc</a> for JavaScript, or have a <a class=\"document-link \" href=\"#!/guide/ScriptDoc_XML_(SDOCML)_2.0_Specification\">Aptana Studio 2.X</a> code assist XML file. If using the Studio 2.X XML code assist file, you need to change the file extension to .sdocml.    </p>\n    </div>\n    \n    <div class=\"section section-2 \" id=\"30083088_UsingJavaScriptLibraries-Accessingyourprojects\">\n        <h2 class=\"heading \"><span>Accessing your projects</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nClick the <strong class=\" \">Project Explorer</strong> tab to view your Studio projects.    </p>\n</li><li class=\" \">    <p>\nCreate a new Web project.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nFrom the Studio <strong class=\" \">File</strong> menu, select <strong class=\" \">New &gt; Project...</strong><br/>The <strong class=\" \">New Project</strong> wizard opens.    </p>\n</li><li class=\" \">    <p>\nOn the <strong class=\" \">New Project</strong> wizard, select <strong class=\" \">Web Project</strong>.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Next</strong> button.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Project name:</strong> field, type a name for your new project.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Next</strong> button.    </p>\n</li><li class=\" \">    <p>\nFrom the <strong class=\" \">Project Template</strong> list, select a default template for the project if you like.    </p>\n</li><li class=\" \">    <p>\nClick the <strong class=\" \">Finish</strong> button. Studio creates a new web project, with several files, depending on the project template you selected.    </p>\n</li></ol></li></ol>    <div class=\"confbox panel panel\">\n        <p>\nThis will create a new web project, but unlike Studio 2, most templates do not drop in a default set of JavaScript files for library support, as they quickly become outdated. Instead, download the library you are insterested in using, and drag and drop the files in to your project as appropriate.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083088_UsingJavaScriptLibraries-Addingadocumentedlibraryforcodeassist\">\n        <h2 class=\"heading \"><span>Adding a documented library for code assist</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nFind a library you are interested in. Some examples are listed here: <a class=\"document-link \" href=\"#!/guide/JavaScript_Library_Support\">JavaScript Library Support</a>    </p>\n</li><li class=\" \">    <p>\nSave it to your disk, and then drag it into your project. It does not matter where in the project it sits, so you can create a new folder for files like this if you like.    </p>\n</li></ol>    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\n    </p>\n    <p>\nThe project must be some type of web project: Web, PHP, Python, Ruby, Rails. You can confirm that here by checking the project nature: <a class=\"document-link \" href=\"#!/guide/Importing_an_Existing_Project\">Importing an Existing Project</a>    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"30083088_UsingJavaScriptLibraries-Viewingcodeassist(usingjQueryasanexample)\">\n        <h2 class=\"heading \"><span>Viewing code assist (using jQuery as an example)</span></h2>\n<ol class=\" \"><li class=\" \">    <p>\nAdd the file from: <a class=\"external-link external-link\" href=\"https://raw.github.com/aptana/javascript-jquery.ruble/master/support/jquery.1.4.2.sdocml\" target=\"_blank\">https://raw.github.com/aptana/javascript-jquery.ruble/master/support/jquery.1.4.2.sdocml</a>. Make sure to save it with the .sdocml extension.    </p>\n</li><li class=\" \">    <p>\nIf you do not have a JavaScript file in your project, create a new one by selecting <strong class=\" \">File</strong> menu, select <strong class=\" \">New &gt; File...</strong> and typing 'sample.js' or a different name if you prefer. Select <strong class=\" \">Finish</strong>.    </p>\n</li><li class=\" \">    <p>\nIn your <strong class=\" \">sample.js</strong> file, add the following snippet:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">$(document).ready(function(){});</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nInside that, add the following line: <tt class=\" \">$(&quot;p&quot;)</tt>    </p>\n<ol class=\" \"><li class=\" \">    <p>\nWhile entering that selector you should have seen documentation come up for how to use the <tt class=\" \">$</tt> function.    </p>\n</li></ol></li><li class=\" \">    <p>\nNow insert your cursor just after &quot;<tt class=\" \">$(&quot;p&quot;)</tt>&quot; and type <tt class=\" \">.ad</tt> and press <strong class=\" \">ctrl+space</strong>.<br/>Code Assist displays a list of jQuery functions that begin with the letters &quot;ad&quot; (e.g. add, addClass, etc). Use Code Assist to help you code.    </p>\n</li><li class=\" \">    <p>\nStart coding.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nAs you type, notice that Code Assist is now active for the jQuery objects and functions that you use.    </p>\n</li><li class=\" \">    <p>\nPress <strong class=\" \">ctrl+space</strong> at any time to activate Code Assist.    </p>\n</li></ol></li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083088\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Using JavaScript Libraries"});