Ext.data.JsonP['Windows_Runtime_Direct_API_Access']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Windows Runtime Direct API Access</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43315893\" class=\"content\">\n            <h1>Windows Runtime Direct API Access</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-Usage\">Usage</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-RequireaClass\">Require a Class</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-Enumerations\">Enumerations</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-EventHandling\">Event Handling</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-AsyncReturnTypes\">Async Return Types</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Windows_Runtime_Direct_API_Access-section-43315893_WindowsRuntimeDirectAPIAccess-MixWinRTAPIswithTitaniumAPIs\">Mix WinRT APIs with Titanium APIs</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nFor the Windows Platform, the Titanium SDK allows you to directly use the Windows Runtime (WinRT) C++ APIs in your project's JavaScript files.  The Titanium SDK will scan your JavaScript files to see if it uses any of the WinRT APIs and will create C++ wrappers and add any dependencies.  The Windows Runtime C#, VB and JavaScript APIs are not supported as well as the Windows 10 APIs.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nThe first time you build a project that includes WinRT APIs, the first build will be slow (will take several minutes). Subsequent builds should be faster even if you add more WinRT classes.    </p>\n    </div>\n    \n    <p>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-Usage\">\n        <h2 class=\"heading \"><span>Usage</span></h2>\n    <p>\nTo use a Windows API, you must first require in the class, then you can invoke its APIs.  For most APIs, you can directly use the API name without any modification.    </p>\n    <p>\nBefore using an API make sure it can be supported first.  Open the <a class=\"external-link external-link\" href=\"https://msdn.microsoft.com/en-us/library/windows/apps/br211369.aspx\" target=\"_blank\">API reference</a> for the API you want to use.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nCheck if it is supported in C++.  In the <i class=\" \">Syntax</i> section at the top of the API reference, the tabbed group should contain a C++ tab.    </p>\n</li><li class=\" \">    <p>\nCheck that the minimum API version is at least Windows 8 or 8.1. At the bottom of the API reference, check for a <i class=\" \">Requirements (Windows 8.x and Windows Phone 8.x)</i> section.    </p>\n</li><li class=\" \">    <p>\nCheck if the API supports only Windows Phone or only Windows.  Some APIs may only support one platform.  Check the platform in the application before invoking the API.    </p>\n</li></ol>    <div class=\"section section-3 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-RequireaClass\">\n        <h3 class=\"heading \"><span>Require a Class</span></h3>\n    <p>\nTo include a WinRT C++ class, pass the fully qualified class name to the <tt class=\" \">require()</tt> method.  Do not pass variables or concatenated strings that evaluate to the class name to the <tt class=\" \">require()</tt> call.  The Titanium SDK looks specifically for any string literals that start with <tt class=\" \">Windows.</tt> in order to include the class when building the application.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// WILL WORK</code></div>\n<div class=\"line\"><code class=\"plain\">var win = require(</code><code class=\"string\">'Windows.UI.Xaml.Window'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// WILL NOT WORK</code></div>\n<div class=\"line\"><code class=\"plain\">var window_class = </code><code class=\"string\">'Windows.UI.Xaml.Window'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    win = require(win_class);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">var windows_ui_xaml_ns = </code><code class=\"string\">'Windows.UI.Xaml'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    win = require(windows_ui_xaml_ns + </code><code class=\"string\">'Window'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\nAfter requiring in the class, you can invoke API calls:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Window = require(</code><code class=\"string\">'Windows.UI.Xaml.Window'</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    TextBlock = require(</code><code class=\"string\">'Windows.UI.Xaml.Controls.TextBlock'</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    window = Window.Current,</code></div>\n<div class=\"line\"><code class=\"plain\">    text = </code><code class=\"keyword\">new</code><code class=\"plain\"> TextBlock();</code></div>\n<div class=\"line\"><code class=\"plain\">text.Text = </code><code class=\"string\">\"Click me, please!\"</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"comments\">// For enum values, you do not need to require in the class</code></div>\n<div class=\"line\"><code class=\"comments\">// See the next section</code></div>\n<div class=\"line\"><code class=\"plain\">text.TextAlignment = Windows.UI.Xaml.TextAlignment.Center;</code></div>\n<div class=\"line\"><code class=\"plain\">text.VerticalAlignment = Windows.UI.Xaml.VerticalAlignment.Center;</code></div>\n<div class=\"line\"><code class=\"plain\">text.HorizontalAlignment = Windows.UI.Xaml.HorizontalAlignment.Center;</code></div>\n<div class=\"line\"><code class=\"plain\">text.FontSize = </code><code class=\"value\">60</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">window.Content = text;</code></div>\n<div class=\"line\"><code class=\"plain\">window.Activate();</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-Enumerations\">\n        <h3 class=\"heading \"><span>Enumerations</span></h3>\n    <p>\nEnumerations in WinRT are exposed automatically for you when you require any API that may use that enumeration. For example, the <tt class=\" \">Windows.UI.Xaml.TextAlignment</tt>, <tt class=\" \">Windows.UI.Xaml.VerticalAlignment</tt> and <tt class=\" \">Windows.UI.Xaml.HorizontalAlignment</tt> enum values will automatically be included when you require <tt class=\" \">Windows.UI.Xaml.Controls.TextBlock</tt>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var TextBlock = require(</code><code class=\"string\">'Windows.UI.Xaml.Controls.TextBlock'</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    text = </code><code class=\"keyword\">new</code><code class=\"plain\"> TextBlock();</code></div>\n<div class=\"line\"><code class=\"plain\">text.TextAlignment = Windows.UI.Xaml.TextAlignment.Center;</code></div>\n<div class=\"line\"><code class=\"plain\">text.VerticalAlignment = Windows.UI.Xaml.VerticalAlignment.Center;</code></div>\n<div class=\"line\"><code class=\"plain\">text.HorizontalAlignment = Windows.UI.Xaml.HorizontalAlignment.Center;</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-EventHandling\">\n        <h3 class=\"heading \"><span>Event Handling</span></h3>\n    <p>\nEvent handling follows the JavaScript syntax by adding and removing event handlers with the <tt class=\" \">addEventListener()</tt> and <tt class=\" \">removeEventListener()</tt> methods rather than the C++ syntax.    </p>\n    <p>\nIn C++, you would create an event handler and assign it to an event property of a Windows object or class.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">DO NOT USE C++ Syntax</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">click_event_ = component-&gt;Tapped += ref </code><code class=\"keyword\">new</code><code class=\"plain\"> TappedEventHandler([</code><code class=\"keyword\">this</code><code class=\"plain\">, ctx](Platform::Object^ sender, TappedRoutedEventArgs^ e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// do something</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nIn JavaScript, invoke the <tt class=\" \">addEventListener()</tt> method on the Windows object or class, and pass the event name and event handler to the method.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Use JavaScript Syntax</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">component.addEventListener(</code><code class=\"string\">'Tapped'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// do something</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-AsyncReturnTypes\">\n        <h3 class=\"heading \"><span>Async Return Types</span></h3>\n    <p>\nSome of the WinRT APIs return asynchronous return types, such as <tt class=\" \">Windows.Foundation.IAsyncAction</tt>, <tt class=\" \">Windows.Foundation.IAsyncActionWithProgress</tt>, <tt class=\" \">Windows.Foundation.IAsyncOperation</tt>, and <tt class=\" \">Windows.Foundation.IAsyncOperationWithProgress</tt>.    </p>\n    <p>\nFor methods that return an asynchronous return type, the operation will be wrapped in a <a class=\"external-link external-link\" href=\"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise\" target=\"_blank\">JavaScript Promise object</a>.  In a promise, when a deferred or asynchronous job completes, it passes its value on to a fulfilled or rejected function, where it can be evaluated by the functions and chained to other promises.    </p>\n    <p>\nAfter invoking the method, chain either the <tt class=\" \">then(fulfilledFunction, rejectedFunction)</tt> or <tt class=\" \">catch(rejectedFunction)</tt> method to the invoked WinRT method to handle the response after the operation completes.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var PathIO = require(</code><code class=\"string\">'Windows.Storage.PathIO'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">PathIO.ReadTextAsync(</code><code class=\"string\">'ms-appdata:///somefile.txt'</code><code class=\"plain\">).then(</code></div>\n<div class=\"line\"><code class=\"plain\">    function (content) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(content);</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    function (err) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(</code><code class=\"string\">'It failed!'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43315893_WindowsRuntimeDirectAPIAccess-MixWinRTAPIswithTitaniumAPIs\">\n        <h3 class=\"heading \"><span>Mix WinRT APIs with Titanium APIs</span></h3>\n    <p>\nYou can mix and match WinRT and Titanium APIs together. You can call Titanium APIs from a native event callback, or call Native APIs inside a callback registered with Titanium APIs.    </p>\n    <p>\nYou can also mix and match Titanium.UI.View and its subclasses with any WinRT API expecting a <tt class=\" \">Windows.UI.Xaml.UIElement</tt>. For example, you can create a Titanium Window or View object, then add a native UI element, such as a <a class=\"external-link external-link\" href=\"https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.xaml.controls.tooltip.aspx\" target=\"_blank\">Tooltip</a>, which the Titanium SDK has equivalent API for, to it. Or you can generate a complex layout using the WinRT APIs, then add Titanium Labels, Buttons or Views to it.    </p>\n    <p>\nWe have not yet made the full APIs as seamless as possible. One example is the Titanium SDK can convert between JavaScript and C++ arrays and collections, but explicit native types that are collection subclasses are treated like normal native types and not like a basic array or vector. So if you have a native collection type, such as <tt class=\" \">UIElementCollection</tt>, you cannot simply treat it as if it is a normal JavaScript array and invoke JavaScript array methods on it. You will need to use the WinRT APIs to manipulate it.    </p>\n    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43315893\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Windows Runtime Direct API Access"});