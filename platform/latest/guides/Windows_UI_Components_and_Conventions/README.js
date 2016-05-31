Ext.data.JsonP['Windows_UI_Components_and_Conventions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Windows UI Components and Conventions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43309475\" class=\"content\">\n            <h1>Windows UI Components and Conventions</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_UI_Components_and_Conventions-section-43309475_WindowsUIComponentsandConventions-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_UI_Components_and_Conventions-section-43309475_WindowsUIComponentsandConventions-BackButton\">Back Button</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_UI_Components_and_Conventions-section-43309475_WindowsUIComponentsandConventions-CommandBar\">Command Bar</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_UI_Components_and_Conventions-section-43309475_WindowsUIComponentsandConventions-AssetQualifiers\">Asset Qualifiers</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43309475_WindowsUIComponentsandConventions-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nIn this section, you will learn some of the user interface and user experience components that are specific to Windows.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43309475_WindowsUIComponentsandConventions-BackButton\">\n        <h2 class=\"heading \"><span>Back Button</span></h2>\n    <p>\nWindows phones have a hardware back button allowing you to go to the previous opened window.  However, Windows tablets do not have a hardware back button.  If you rely on the back button for navigation, you will need to implement a navigation element, such as a software back button, for Windows tablets if you choose to support it.    </p>\n    <p>\nTo distinguish between the Windows Phone OS and Windows OS, the <tt class=\" \">Titanium.Platform.osname</tt> property will return <tt class=\" \">windowsphone</tt> if the application is running on a Windows Phone device or <tt class=\" \">windowsstore</tt> if the application is running on a device running the Windows OS.    </p>\n    <p>\nIn Alloy, use the <tt class=\" \">formFactor</tt> attribute to distinguish between a phone (set to <tt class=\" \">handheld</tt>) or tablet (set to <tt class=\" \">tablet</tt>).    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Button formFactor=</code><code class=\"string\">\"tablet\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"closeWindow\"</code><code class=\"plain\">&gt;Back&lt;/Button&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nAs of 5.0.0 of the SDK, you can create an event that can prevent accidental closure of the app due to hitting the back button to many times.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow(</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ </code><code class=\"comments\">// some code... }</code></div>\n<div class=\"line\"><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// more code</code></div>\n<div class=\"line\"><code class=\"plain\">win.addEventListener(</code><code class=\"string\">\"windows:back\"</code><code class=\"plain\">, function()</code></div>\n<div class=\"line\"><code class=\"plain\">\t{ alert(</code><code class=\"string\">\"Back pressed\"</code><code class=\"plain\">); }</code></div>\n<div class=\"line\"><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43309475_WindowsUIComponentsandConventions-CommandBar\">\n        <h2 class=\"heading \"><span>Command Bar</span></h2>\n    <p>\nThe command bar displays a row of buttons the user can tap to invoke additional functionality with your application (similar to the Action Bar in Android or Toolbar in iOS).  On a phone, the command bar always appears at the bottom of the application, and on a tablet, the user needs to tap the More icon (<tt class=\" \">[...]</tt>) to reveal the command bar.  If you are testing locally on your Windows computer, right-click on the application to reveal the command bar.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows Phone app    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows Store app    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>\nButtons are centered    </p>\n</li><li class=\" \">    <p>\nRoom for only four buttons    </p>\n</li><li class=\" \">    <p>\nCommand bar is always present    </p>\n</li></ul>    <p>\n        <img src=\"images/download/attachments/43309475/wp_commandbar.PNG\" alt=\"images/download/attachments/43309475/wp_commandbar.PNG\" class=\"confluence-embedded-image\"/>\n            </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>\nButtons are right-aligned    </p>\n</li><li class=\" \">    <p>\nRoom for more than four buttons    </p>\n</li><li class=\" \">    <p>\nCommand bar must be revealed by the user    </p>\n</li></ul>    <p>\n        <img src=\"images/download/attachments/43309475/ws_commandbar.png\" alt=\"images/download/attachments/43309475/ws_commandbar.png\" class=\"confluence-embedded-image\"/>\n            </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n    </p>\n    <p>\nTo create a command bar:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nCreate buttons and separator objects using the following methods:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Windows-method-createAppBarButton\">Titanium.UI.Windows.createAppBarButton()</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Windows-method-createAppBarToggleButton\">Titanium.UI.Windows.createAppBarToggleButton()</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Windows-method-createAppBarSeparator\">Titanium.UI.Windows.createAppBarSeparator()</a> &ndash; note that separators only appear for Windows Store apps (for the tablet)    </p>\n</li></ul></li><li class=\" \">    <p>\nPass an array of button and separator objects to the <tt class=\" \">items</tt> property when creating a command bar with the <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Windows-method-createCommandBar\">Titanium.UI.Windows.createCommandBar()</a> method.  Note that on the phone only four buttons can be displayed.    </p>\n</li><li class=\" \">    <p>\nAdd the command bar to a <a class=\"external-link external-link\" href=\"#!/api/Titanium.UI.Window\">Titanium.UI.Window</a> object.    </p>\n</li></ol><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var backButton = Ti.UI.Windows.createAppBarButton({</code></div>\n<div class=\"line\"><code class=\"plain\">        icon: Ti.UI.Windows.SystemIcon.BACK</code></div>\n<div class=\"line\"><code class=\"plain\">    }),</code></div>\n<div class=\"line\"><code class=\"plain\">    likeButton = Ti.UI.Windows.createAppBarToggleButton({</code></div>\n<div class=\"line\"><code class=\"plain\">        icon: Ti.UI.Windows.SystemIcon.LIKEDISLIKE</code></div>\n<div class=\"line\"><code class=\"plain\">    }),</code></div>\n<div class=\"line\"><code class=\"plain\">    forwardButton = Titanium.UI.Windows.createAppBarButton({</code></div>\n<div class=\"line\"><code class=\"plain\">        icon: Ti.UI.Windows.SystemIcon.FORWARD</code></div>\n<div class=\"line\"><code class=\"plain\">    }),</code></div>\n<div class=\"line\"><code class=\"plain\">    commandBar = Ti.UI.Windows.createCommandBar({</code></div>\n<div class=\"line\"><code class=\"plain\">        items: [backButton, likeButton, forwardButton]</code></div>\n<div class=\"line\"><code class=\"plain\">    }),</code></div>\n<div class=\"line\"><code class=\"plain\">    win = Ti.UI.createWindow();</code></div>\n<div class=\"line\"><code class=\"plain\">win.add(commandBar);</code></div>\n<div class=\"line\"><code class=\"plain\">win.open();</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43309475_WindowsUIComponentsandConventions-AssetQualifiers\">\n        <h2 class=\"heading \"><span>Asset Qualifiers</span></h2>\n    <p>\nWindows provides different qualifiers to select which assets to use.  The qualifiers can be used to support devices with different screen sizes, contrast themes, layout directions, languages, regions, etc.    </p>\n    <p>\nFor information about using qualifiers, see <a class=\"document-link \" href=\"#!/guide/Windows_Asset_Qualifiers\">Windows Asset Qualifiers</a>.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43309475\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Windows UI Components and Conventions"});