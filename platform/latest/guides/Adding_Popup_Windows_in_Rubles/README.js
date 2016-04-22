Ext.data.JsonP['Adding_Popup_Windows_in_Rubles']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Adding Popup Windows in Rubles</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083227\" class=\"content\">\n            <h1>Adding Popup Windows in Rubles</h1>\n    <div class=\"section section-2 \" id=\"30083227_AddingPopupWindowsinRubles-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Popup_Windows_in_Rubles-section-30083227_AddingPopupWindowsinRubles-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Popup_Windows_in_Rubles-section-30083227_AddingPopupWindowsinRubles-Openingapopupwindowtoselectfromalistofelements\">Opening a popup window to select from a list of elements</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Adding_Popup_Windows_in_Rubles-section-30083227_AddingPopupWindowsinRubles-Openingapopupwindowforuserinput\">Opening a popup window for user input</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083227_AddingPopupWindowsinRubles-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nIn this recipe we show how a Ruble command can open a popup window for user input.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083227_AddingPopupWindowsinRubles-Openingapopupwindowtoselectfromalistofelements\">\n        <h2 class=\"heading \"><span>Opening a popup window to select from a list of elements</span></h2>\n    <p>\nHere, we select from a list of projects and use the output of the choice to insert different snippets to the editor.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">\"Copy Scope\"</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding = </code><code class=\"string\">\"CONTROL+SHIFT+COMMAND+C\"</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :none</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :insert_as_snippet</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke {</code></div>\n<div class=\"line\"><code class=\"plain\">    choice = Ruble.choose(</code><code class=\"string\">\"Projects:\"</code><code class=\"plain\">, [</code><code class=\"string\">\"project 1\"</code><code class=\"plain\">,</code><code class=\"string\">\"project 2\"</code><code class=\"plain\">, </code><code class=\"string\">\"project 3\"</code><code class=\"plain\">], :title =&gt; </code><code class=\"string\">\"Project Selector\"</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> choice</code></div>\n<div class=\"line\"><code class=\"plain\">    when </code><code class=\"value\">1</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">\"snippet for project 1\"</code></div>\n<div class=\"line\"><code class=\"plain\">    when </code><code class=\"value\">2</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">\"snippet for project 2\"</code></div>\n<div class=\"line\"><code class=\"plain\">    when </code><code class=\"value\">3</code></div>\n<div class=\"line\"><code class=\"plain\">      </code><code class=\"string\">\"snippet for project 3\"</code></div>\n<div class=\"line\"><code class=\"plain\">    end</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div>    <p>\nThe popup will look like the following:    </p>\n    <p>\n        <img src=\"images/download/attachments/30083227/project_selection.png\" alt=\"images/download/attachments/30083227/project_selection.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083227_AddingPopupWindowsinRubles-Openingapopupwindowforuserinput\">\n        <h2 class=\"heading \"><span>Opening a popup window for user input</span></h2>\n    <p>\nHere, we open a pop window to prompt for user input, store the output into a local variable &quot;name&quot; and output it as a snippet.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">command </code><code class=\"string\">\"Copy Scope\"</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |cmd|</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.key_binding = </code><code class=\"string\">\"CONTROL+SHIFT+COMMAND+C\"</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.input = :none</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.output = :insert_as_snippet</code></div>\n<div class=\"line\"><code class=\"plain\">  cmd.invoke {</code></div>\n<div class=\"line\"><code class=\"plain\">    name = Ruble::UI.request_string(</code></div>\n<div class=\"line\"><code class=\"plain\">    :title =&gt; </code><code class=\"string\">\"User Name\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    :</code><code class=\"keyword\">default</code><code class=\"plain\"> =&gt; </code><code class=\"string\">\"guest\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    :prompt =&gt; </code><code class=\"string\">\"Please insert user name:\"</code></div>\n<div class=\"line\"><code class=\"plain\">    )</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div>    <p>\nThe popup will look like the following:    </p>\n    <p>\n        <img src=\"images/download/attachments/30083227/username_popup.png\" alt=\"images/download/attachments/30083227/username_popup.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083227\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Adding Popup Windows in Rubles"});