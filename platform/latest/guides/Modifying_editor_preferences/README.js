Ext.data.JsonP['Modifying_editor_preferences']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Modifying editor preferences</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083267\" class=\"content\">\n            <h1>Modifying editor preferences</h1>\n    <div class=\"section section-2 \" id=\"30083267_Modifyingeditorpreferences-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Modifying_editor_preferences-section-30083267_Modifyingeditorpreferences-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Modifying_editor_preferences-section-30083267_Modifyingeditorpreferences-SmartTypingPairs\">Smart Typing Pairs</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Modifying_editor_preferences-section-30083267_Modifyingeditorpreferences-ModifyingtheBuilt-InBundles\">Modifying the Built-In Bundles</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Modifying_editor_preferences-section-30083267_Modifyingeditorpreferences-Example\">Example</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083267_Modifyingeditorpreferences-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nThis page describes how to modify or customize some editor settings in Studio. Some editor settings can be modified in preferences, and can be further modified by editing a Ruble. Follow the directions below to further customize settings.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083267_Modifyingeditorpreferences-SmartTypingPairs\">\n        <h2 class=\"heading \"><span>Smart Typing Pairs</span></h2>\n    <p>\nSmart typing pairs is when you type a character such as ' or (, and it auto-inserts the matching ' or ).    </p>\n    <div class=\"section section-3 \" id=\"30083267_Modifyingeditorpreferences-ModifyingtheBuilt-InBundles\">\n        <h3 class=\"heading \"><span>Modifying the Built-In Bundles</span></h3>\n<ol class=\" \"><li class=\" \">    <p>\nFind the bundle that represents the editor you are interested in. If it's a HTML-based editor (like PHP), you'll want to edit the HTML ruble.    </p>\n</li><li class=\" \">    <p>\nSelect the menu item <strong class=\" \">Commands &gt; Bundle Name &gt; Edit this Bundle</strong>. It will create a project in your workspace with the contents of that bundle.    </p>\n</li><li class=\" \">    <p>\nOpen up the bundle project, and find the <strong class=\" \">bundle.rb</strong> file.    </p>\n</li><li class=\" \">    <p>\nEdit (or add) the <strong class=\" \">smart_typing_pairs</strong> section.    </p>\n</li><li class=\" \">    <p>\nSave the file. Your new settings should be in effect.    </p>\n</li></ol>    </div>\n    <div class=\"section section-3 \" id=\"30083267_Modifyingeditorpreferences-Example\">\n        <h3 class=\"heading \"><span>Example</span></h3>\n    <p>\nAs an example, we remove the auto-character insertion of quotes inb the HTML/PHP editors, but leave parens and braces alone.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nSelect menu &quot;Commands &gt; HTML &gt; Edit this bundle.&quot;    </p>\n</li><li class=\" \">    <p>\nOpen the file HTML / bundle.rb. searching for the following:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">   smart_typing_pairs[</code><code class=\"string\">\"text.html meta.tag - punctuation.definition.tag.begin\"</code><code class=\"plain\">] = [</code><code class=\"string\">'\"'</code><code class=\"plain\">, </code><code class=\"string\">'\"'</code><code class=\"plain\">, </code><code class=\"string\">'('</code><code class=\"plain\">, </code><code class=\"string\">')'</code><code class=\"plain\">, </code><code class=\"string\">'{'</code><code class=\"plain\">, </code><code class=\"string\">'}'</code><code class=\"plain\">, </code><code class=\"string\">'['</code><code class=\"plain\">, </code><code class=\"string\">']'</code><code class=\"plain\">, </code><code class=\"string\">\"'\"</code><code class=\"plain\">, </code><code class=\"string\">\"'\"</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">   ...</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nEdit the smart_typing_pairs property to use the new key command to the following:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">   smart_typing_pairs[</code><code class=\"string\">\"text.html meta.tag - punctuation.definition.tag.begin\"</code><code class=\"plain\">] = [</code><code class=\"string\">'('</code><code class=\"plain\">, </code><code class=\"string\">')'</code><code class=\"plain\">, </code><code class=\"string\">'{'</code><code class=\"plain\">, </code><code class=\"string\">'}'</code><code class=\"plain\">, </code><code class=\"string\">'['</code><code class=\"plain\">, </code><code class=\"string\">']'</code><code class=\"plain\">]</code></div>\n<div class=\"line\"><code class=\"plain\">   ...</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nSave the file. The update should work as expected.    </p>\n</li></ol>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083267\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Modifying editor preferences"});