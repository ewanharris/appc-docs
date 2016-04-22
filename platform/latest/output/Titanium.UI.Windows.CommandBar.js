Ext.data.JsonP['Titanium_UI_Windows_CommandBar']({"tagname":"class","name":"Titanium.UI.Windows.CommandBar","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["windowsphone 4.1.0"],"description":["<p>The command bar displays a row of buttons used to indicate additional actions the user can\nperform. For Windows Store applications, right-click on the application to reveal the command\nbar.</p>\n\n<p>To create a command bar, first create buttons and separator objects using the following methods:</p>\n\n<ul>\n<li>{@link Titanium.UI.Windows#method-createAppBarButton Titanium.UI.Windows.createAppBarButton()}</li>\n<li>{@link Titanium.UI.Windows#method-createAppBarToggleButton Titanium.UI.Windows.createAppBarToggleButton()}</li>\n<li>{@link Titanium.UI.Windows#method-createAppBarSeparator Titanium.UI.Windows.createAppBarSeparator()} --\nonly appears on Windows Store applications.</li>\n</ul>\n\n<p>Then, pass an array of button and separator objects to the <code>items</code> property when creating a\ncommand bar with the {@link Titanium.UI.Windows#method-createCommandBar Titanium.UI.Windows.createCommandBar()}\nmethod.</p>\n\n<p>Finally, add the command bar to a Titanium.UI.Window object.</p>\n\n<pre><code>var backButton = Ti.UI.Windows.createAppBarButton({\n        icon: Ti.UI.Windows.SystemIcon.BACK\n    }),\n    likeButton = Ti.UI.Windows.createAppBarToggleButton({\n        icon: Ti.UI.Windows.SystemIcon.LIKEDISLIKE\n    }),\n    forwardButton = Titanium.UI.Windows.createAppBarButton({\n        icon: Ti.UI.Windows.SystemIcon.FORWARD\n    }),\n    commandBar = Ti.UI.Windows.createCommandBar({\n        items: [backButton, likeButton, forwardButton]\n    }),\nwin = Ti.UI.createWindow();\nwin.add(commandBar);\nwin.open();\n</code></pre>"]},"private":null,"id":"class-Titanium.UI.Windows.CommandBar","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"items","tagname":"property","owner":"Titanium.UI.Windows.CommandBar","meta":{"description":["<p>Add {@link Titanium.UI.Windows.AppBarButton} and {@link Titanium.UI.Windows.AppBarToggleButton} objects\nas well as separators created with the {@link Titanium.UI.Windows#method-createAppBarSeparator} method.</p>\n\n<p>On Windows Phone applications, up to four items may be added.  If more than four items are added,\nonly the first four items will appear.</p>"]},"id":"property-items"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getItems","tagname":"method","owner":"Titanium.UI.Windows.CommandBar","meta":{},"id":"method-getItems"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setItems","tagname":"method","owner":"Titanium.UI.Windows.CommandBar","meta":{},"id":"method-setItems"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":232589,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-UI-Windows-CommandBar"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","description":"<p><p>The command bar displays a row of buttons used to indicate additional actions the user can\nperform. For Windows Store applications, right-click on the application to reveal the command\nbar.</p>\n\n\n\n\n<p>To create a command bar, first create buttons and separator objects using the following methods:</p>\n\n\n\n\n<ul>\n<li><a href=\"#!/api/Titanium.UI.Windows-method-createAppBarButton\" rel=\"Titanium.UI.Windows-method-createAppBarButton\" class=\"docClass\">Titanium.UI.Windows.createAppBarButton()</a></li>\n<li><a href=\"#!/api/Titanium.UI.Windows-method-createAppBarToggleButton\" rel=\"Titanium.UI.Windows-method-createAppBarToggleButton\" class=\"docClass\">Titanium.UI.Windows.createAppBarToggleButton()</a></li>\n<li><a href=\"#!/api/Titanium.UI.Windows-method-createAppBarSeparator\" rel=\"Titanium.UI.Windows-method-createAppBarSeparator\" class=\"docClass\">Titanium.UI.Windows.createAppBarSeparator()</a> --\nonly appears on Windows Store applications.</li>\n</ul>\n\n\n\n\n<p>Then, pass an array of button and separator objects to the <code>items</code> property when creating a\ncommand bar with the <a href=\"#!/api/Titanium.UI.Windows-method-createCommandBar\" rel=\"Titanium.UI.Windows-method-createCommandBar\" class=\"docClass\">Titanium.UI.Windows.createCommandBar()</a>\nmethod.</p>\n\n\n\n\n<p>Finally, add the command bar to a <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> object.</p>\n\n\n\n\n<pre><code>var backButton = Ti.UI.Windows.createAppBarButton({\n        icon: Ti.UI.Windows.SystemIcon.BACK\n    }),\n    likeButton = Ti.UI.Windows.createAppBarToggleButton({\n        icon: Ti.UI.Windows.SystemIcon.LIKEDISLIKE\n    }),\n    forwardButton = <a href=\"#!/api/Titanium.UI.Windows-method-createAppBarButton\" rel=\"Titanium.UI.Windows-method-createAppBarButton\" class=\"docClass\">Titanium.UI.Windows.createAppBarButton</a>({\n        icon: Ti.UI.Windows.SystemIcon.FORWARD\n    }),\n    commandBar = Ti.UI.Windows.createCommandBar({\n        items: [backButton, likeButton, forwardButton]\n    }),\nwin = Ti.UI.createWindow();\nwin.add(commandBar);\nwin.open();\n</code></pre>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium.UI.Windows.CommandBar"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium.UI.Windows.CommandBar</strong></div></div></div><div class='doc-contents'><p>A Windows application bar located at the bottom of the window.</p>\n\n<p><p>The command bar displays a row of buttons used to indicate additional actions the user can\nperform. For Windows Store applications, right-click on the application to reveal the command\nbar.</p>\n\n\n\n\n<p>To create a command bar, first create buttons and separator objects using the following methods:</p>\n\n\n\n\n<ul>\n<li><a href=\"#!/api/Titanium.UI.Windows-method-createAppBarButton\" rel=\"Titanium.UI.Windows-method-createAppBarButton\" class=\"docClass\">Titanium.UI.Windows.createAppBarButton()</a></li>\n<li><a href=\"#!/api/Titanium.UI.Windows-method-createAppBarToggleButton\" rel=\"Titanium.UI.Windows-method-createAppBarToggleButton\" class=\"docClass\">Titanium.UI.Windows.createAppBarToggleButton()</a></li>\n<li><a href=\"#!/api/Titanium.UI.Windows-method-createAppBarSeparator\" rel=\"Titanium.UI.Windows-method-createAppBarSeparator\" class=\"docClass\">Titanium.UI.Windows.createAppBarSeparator()</a> --\nonly appears on Windows Store applications.</li>\n</ul>\n\n\n\n\n<p>Then, pass an array of button and separator objects to the <code>items</code> property when creating a\ncommand bar with the <a href=\"#!/api/Titanium.UI.Windows-method-createCommandBar\" rel=\"Titanium.UI.Windows-method-createCommandBar\" class=\"docClass\">Titanium.UI.Windows.createCommandBar()</a>\nmethod.</p>\n\n\n\n\n<p>Finally, add the command bar to a <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> object.</p>\n\n\n\n\n<pre><code>var backButton = Ti.UI.Windows.createAppBarButton({\n        icon: Ti.UI.Windows.SystemIcon.BACK\n    }),\n    likeButton = Ti.UI.Windows.createAppBarToggleButton({\n        icon: Ti.UI.Windows.SystemIcon.LIKEDISLIKE\n    }),\n    forwardButton = <a href=\"#!/api/Titanium.UI.Windows-method-createAppBarButton\" rel=\"Titanium.UI.Windows-method-createAppBarButton\" class=\"docClass\">Titanium.UI.Windows.createAppBarButton</a>({\n        icon: Ti.UI.Windows.SystemIcon.FORWARD\n    }),\n    commandBar = Ti.UI.Windows.createCommandBar({\n        items: [backButton, likeButton, forwardButton]\n    }),\nwin = Ti.UI.createWindow();\nwin.add(commandBar);\nwin.open();\n</code></pre>\n\n</p><ul class='platforms'><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-items' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Windows.CommandBar'>Titanium.UI.Windows.CommandBar</span></div><a href='#!/api/Titanium.UI.Windows.CommandBar-property-items' class='name not-expandable'>items</a><span> : Object[]</span></div><div class='description'><div class='short'><p>Items to display in the command bar.</p>\n\n</div><div class='long'><p>Items to display in the command bar.</p>\n\n<p><p>Add <a href=\"#!/api/Titanium.UI.Windows.AppBarButton\" rel=\"Titanium.UI.Windows.AppBarButton\" class=\"docClass\">Titanium.UI.Windows.AppBarButton</a> and <a href=\"#!/api/Titanium.UI.Windows.AppBarToggleButton\" rel=\"Titanium.UI.Windows.AppBarToggleButton\" class=\"docClass\">Titanium.UI.Windows.AppBarToggleButton</a> objects\nas well as separators created with the <a href=\"#!/api/Titanium.UI.Windows-method-createAppBarSeparator\" rel=\"Titanium.UI.Windows-method-createAppBarSeparator\" class=\"docClass\">Titanium.UI.Windows.createAppBarSeparator</a> method.</p>\n\n\n\n\n<p>On Windows Phone applications, up to four items may be added.  If more than four items are added,\nonly the first four items will appear.</p>\n\n</p></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Windows.CommandBar'>Titanium.UI.Windows.CommandBar</span></div><a href='#!/api/Titanium.UI.Windows.CommandBar-method-getItems' class='name expandable'>getItems</a>( <span class='pre'></span> ) : Object[]</div><div class='description'><div class='short'>Gets the value of the items property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.UI.Windows.CommandBar-property-items\" rel=\"Titanium.UI.Windows.CommandBar-property-items\" class=\"docClass\">items</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object[]</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Windows.CommandBar'>Titanium.UI.Windows.CommandBar</span></div><a href='#!/api/Titanium.UI.Windows.CommandBar-method-setItems' class='name expandable'>setItems</a>( <span class='pre'>items</span> )</div><div class='description'><div class='short'>Sets the value of the items property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.UI.Windows.CommandBar-property-items\" rel=\"Titanium.UI.Windows.CommandBar-property-items\" class=\"docClass\">items</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Array&lt;Object&gt;<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});