Ext.data.JsonP['Titanium_Platform_Android']({"tagname":"class","name":"Titanium.Platform.Android","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.8.2"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Platform/Android/Android.yml"},"private":null,"id":"class-Titanium.Platform.Android","members":{"cfg":[],"property":[{"name":"API_LEVEL","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true,"description":["<p>See the official Android Developers documentation for more information about \n<a href=\"http://developer.android.com/guide/appendix/api-levels.html\">API levels</a>.</p>"]},"id":"property-API_LEVEL"},{"name":"PHYSICAL_SIZE_CATEGORY_LARGE","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true,"description":["<p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_LARGE\">large screen sizes</a></p>"]},"id":"property-PHYSICAL_SIZE_CATEGORY_LARGE"},{"name":"PHYSICAL_SIZE_CATEGORY_NORMAL","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true,"description":["<p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_NORMAL\">normal screen sizes</a></p>"]},"id":"property-PHYSICAL_SIZE_CATEGORY_NORMAL"},{"name":"PHYSICAL_SIZE_CATEGORY_SMALL","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true,"description":["<p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_SMALL\">small screen sizes</a></p>"]},"id":"property-PHYSICAL_SIZE_CATEGORY_SMALL"},{"name":"PHYSICAL_SIZE_CATEGORY_UNDEFINED","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true,"description":["<p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_UNDEFINED\">undefined screen sizes</a></p>"]},"id":"property-PHYSICAL_SIZE_CATEGORY_UNDEFINED"},{"name":"PHYSICAL_SIZE_CATEGORY_XLARGE","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true,"description":["<p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_XLARGE\">extra large screen sizes</a></p>"]},"id":"property-PHYSICAL_SIZE_CATEGORY_XLARGE"},{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"},{"name":"physicalSizeCategory","tagname":"property","owner":"Titanium.Platform.Android","meta":{"readonly":true},"id":"property-physicalSizeCategory"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getPhysicalSizeCategory","tagname":"method","owner":"Titanium.Platform.Android","meta":{},"id":"method-getPhysicalSizeCategory"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":104908,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Platform-Android"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.8.2</li></ul>","editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium.Platform.Android"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.8.2'>Android 1.8.2</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium.Platform.Android</strong></div></div></div><div class='doc-contents'><p>The Android-specific Platform module, used to access the device's platform-related functionality.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>1.8.2</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-API_LEVEL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-API_LEVEL' class='name not-expandable'>API_LEVEL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Android API level identifier of the Operating System.</p>\n\n</div><div class='long'><p>Android API level identifier of the Operating System.</p>\n\n<p><p>See the official Android Developers documentation for more information about \n<a href=\"http://developer.android.com/guide/appendix/api-levels.html\">API levels</a>.</p>\n\n</p></div></div></div><div id='property-PHYSICAL_SIZE_CATEGORY_LARGE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_LARGE' class='name not-expandable'>PHYSICAL_SIZE_CATEGORY_LARGE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Constant to indicate that the physical size category of the current device/emulator is large</p>\n\n</div><div class='long'><p>Constant to indicate that the physical size category of the current device/emulator is large</p>\n\n<p><p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_LARGE\">large screen sizes</a></p>\n\n</p></div></div></div><div id='property-PHYSICAL_SIZE_CATEGORY_NORMAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_NORMAL' class='name not-expandable'>PHYSICAL_SIZE_CATEGORY_NORMAL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Constant to indicate that the physical size category of the current device/emulator is normal</p>\n\n</div><div class='long'><p>Constant to indicate that the physical size category of the current device/emulator is normal</p>\n\n<p><p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_NORMAL\">normal screen sizes</a></p>\n\n</p></div></div></div><div id='property-PHYSICAL_SIZE_CATEGORY_SMALL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_SMALL' class='name not-expandable'>PHYSICAL_SIZE_CATEGORY_SMALL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Constant to indicate that the physical size category of the current device/emulator is small</p>\n\n</div><div class='long'><p>Constant to indicate that the physical size category of the current device/emulator is small</p>\n\n<p><p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_SMALL\">small screen sizes</a></p>\n\n</p></div></div></div><div id='property-PHYSICAL_SIZE_CATEGORY_UNDEFINED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_UNDEFINED' class='name not-expandable'>PHYSICAL_SIZE_CATEGORY_UNDEFINED</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Constant to indicate that the physical size category of the current device/emulator is undefined</p>\n\n</div><div class='long'><p>Constant to indicate that the physical size category of the current device/emulator is undefined</p>\n\n<p><p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_UNDEFINED\">undefined screen sizes</a></p>\n\n</p></div></div></div><div id='property-PHYSICAL_SIZE_CATEGORY_XLARGE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_XLARGE' class='name not-expandable'>PHYSICAL_SIZE_CATEGORY_XLARGE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Constant to indicate that the physical size category of the current device/emulator is extra large</p>\n\n</div><div class='long'><p>Constant to indicate that the physical size category of the current device/emulator is extra large</p>\n\n<p><p>See the official Android Developers documentation for more information about\n<a href=\"http://developer.android.com/reference/android/content/res/Configuration.html#SCREENLAYOUT_SIZE_XLARGE\">extra large screen sizes</a></p>\n\n</p></div></div></div><div id='property-apiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-physicalSizeCategory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-property-physicalSizeCategory' class='name expandable'>physicalSizeCategory</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>The physical size category of the Android device or emulator. ...</div><div class='long'><p>The physical size category of the Android device or emulator. </p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_LARGE\" rel=\"Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_LARGE\" class=\"docClass\">PHYSICAL_SIZE_CATEGORY_LARGE</a>\n <li> <a href=\"#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_NORMAL\" rel=\"Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_NORMAL\" class=\"docClass\">PHYSICAL_SIZE_CATEGORY_NORMAL</a>\n <li> <a href=\"#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_SMALL\" rel=\"Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_SMALL\" class=\"docClass\">PHYSICAL_SIZE_CATEGORY_SMALL</a>\n <li> <a href=\"#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_UNDEFINED\" rel=\"Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_UNDEFINED\" class=\"docClass\">PHYSICAL_SIZE_CATEGORY_UNDEFINED</a>\n <li> <a href=\"#!/api/Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_XLARGE\" rel=\"Titanium.Platform.Android-property-PHYSICAL_SIZE_CATEGORY_XLARGE\" class=\"docClass\">PHYSICAL_SIZE_CATEGORY_XLARGE</a>\n</li></li></li></li></li></ul></p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPhysicalSizeCategory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Platform.Android'>Titanium.Platform.Android</span></div><a href='#!/api/Titanium.Platform.Android-method-getPhysicalSizeCategory' class='name expandable'>getPhysicalSizeCategory</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the physicalSizeCategory property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Platform.Android-property-physicalSizeCategory\" rel=\"Titanium.Platform.Android-property-physicalSizeCategory\" class=\"docClass\">physicalSizeCategory</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});