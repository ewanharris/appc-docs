Ext.data.JsonP['Titanium_Accelerometer']({"tagname":"class","name":"Titanium.Accelerometer","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8","windowsphone 4.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Accelerometer/Accelerometer.yml","description":["<p>An accelerometer is a hardware unit integrated into a mobile device, that detects when the \ndevice has moved, and returns its new orientation in a three-dimensional space. With its \nsingle <code>update</code> event, this module provides an interface to access the output positional data.</p>\n\n<p>An accelerometer needs to be switched on in order for it to report to the operating system, \nwhich consumes a lot of power that will deplete the battery over time. This is why it is \nrecommended that the accelerometer is switched off when not in use.</p>\n\n<p>The accelerometer may be switched on and off by simply adding and removing the <code>update</code> \nevent listener function. See the example for a demonstration.</p> \n<h3>Examples</h3>\n<h4>Basic Accelerometer Event</h4>\n<p>Adds an accelerometer update event listener, and displays the x, y and z axis in the \nwindow when the device is moved. On Android, the accelerometer is switched off and on when \nthe application is paused and resumed.</p>\n\n<pre><code>var win = Ti.UI.createWindow({\n  backgroundColor: 'white',\n  exitOnClose:true,\n  layout: 'vertical'\n});\n\nopts = {\n  color:'black',\n  font:{fontSize:20},\n  text:'-',\n  top:20, left:10,\n  width:300\n};\nvar labelTimestamp = Ti.UI.createLabel(opts);\nwin.add(labelTimestamp);\nvar labelx = Ti.UI.createLabel(opts);\nwin.add(labelx);\nvar labely = Ti.UI.createLabel(opts);\nwin.add(labely);\nvar labelz = Ti.UI.createLabel(opts);\nwin.add(labelz);\nwin.open();\n\nvar accelerometerCallback = function(e) {\n  labelTimestamp.text = 'timestamp: ' + e.timestamp;\n  labelx.text = 'x: ' + e.x;\n  labely.text = 'y: ' + e.y;\n  labelz.text = 'z: ' + e.z;\n};\n\nif (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 ){\n  alert('Accelerometer does not work on a virtual device');\n} else {\n  Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n  if (Ti.Platform.name === 'android'){\n    Ti.Android.currentActivity.addEventListener('pause', function(e) {\n      Ti.API.info(\"removing accelerometer callback on pause\");\n      Ti.Accelerometer.removeEventListener('update', accelerometerCallback);\n    });\n    Ti.Android.currentActivity.addEventListener('resume', function(e) {\n      Ti.API.info(\"adding accelerometer callback on resume\");\n      Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n    });\n  }\n}\n</code></pre>"]},"private":null,"id":"class-Titanium.Accelerometer","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0","windowsphone 4.1.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","windowsphone 4.1.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[{"name":"update","tagname":"event","owner":"Titanium.Accelerometer","meta":{},"id":"event-update"}],"css_var":[],"css_mixin":[]},"linenr":35335,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Accelerometer"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","editurl":null,"description":"<p><p>An accelerometer is a hardware unit integrated into a mobile device, that detects when the \ndevice has moved, and returns its new orientation in a three-dimensional space. With its \nsingle <code>update</code> event, this module provides an interface to access the output positional data.</p>\n\n\n\n\n<p>An accelerometer needs to be switched on in order for it to report to the operating system, \nwhich consumes a lot of power that will deplete the battery over time. This is why it is \nrecommended that the accelerometer is switched off when not in use.</p>\n\n\n\n\n<p>The accelerometer may be switched on and off by simply adding and removing the <code>update</code> \nevent listener function. See the example for a demonstration.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Basic Accelerometer Event</h4>\n\n\n<p>Adds an accelerometer update event listener, and displays the x, y and z axis in the \nwindow when the device is moved. On Android, the accelerometer is switched off and on when \nthe application is paused and resumed.</p>\n\n\n\n\n<pre><code>var win = Ti.UI.createWindow({\n  backgroundColor: 'white',\n  exitOnClose:true,\n  layout: 'vertical'\n});\n\nopts = {\n  color:'black',\n  font:{fontSize:20},\n  text:'-',\n  top:20, left:10,\n  width:300\n};\nvar labelTimestamp = Ti.UI.createLabel(opts);\nwin.add(labelTimestamp);\nvar labelx = Ti.UI.createLabel(opts);\nwin.add(labelx);\nvar labely = Ti.UI.createLabel(opts);\nwin.add(labely);\nvar labelz = Ti.UI.createLabel(opts);\nwin.add(labelz);\nwin.open();\n\nvar accelerometerCallback = function(e) {\n  labelTimestamp.text = 'timestamp: ' + e.timestamp;\n  labelx.text = 'x: ' + e.x;\n  labely.text = 'y: ' + e.y;\n  labelz.text = 'z: ' + e.z;\n};\n\nif (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 ){\n  alert('Accelerometer does not work on a virtual device');\n} else {\n  Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n  if (Ti.Platform.name === 'android'){\n    Ti.Android.currentActivity.addEventListener('pause', function(e) {\n      Ti.API.info(\"removing accelerometer callback on pause\");\n      Ti.Accelerometer.removeEventListener('update', accelerometerCallback);\n    });\n    Ti.Android.currentActivity.addEventListener('resume', function(e) {\n      Ti.API.info(\"adding accelerometer callback on resume\");\n      Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n    });\n  }\n}\n</code></pre>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium.Accelerometer"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium.Accelerometer</strong></div></div></div><div class='doc-contents'><p>The top-level Accelerometer module, used to determine the device's physical position.</p>\n\n<p><p>An accelerometer is a hardware unit integrated into a mobile device, that detects when the \ndevice has moved, and returns its new orientation in a three-dimensional space. With its \nsingle <code>update</code> event, this module provides an interface to access the output positional data.</p>\n\n\n\n\n<p>An accelerometer needs to be switched on in order for it to report to the operating system, \nwhich consumes a lot of power that will deplete the battery over time. This is why it is \nrecommended that the accelerometer is switched off when not in use.</p>\n\n\n\n\n<p>The accelerometer may be switched on and off by simply adding and removing the <code>update</code> \nevent listener function. See the example for a demonstration.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Basic Accelerometer Event</h4>\n\n\n<p>Adds an accelerometer update event listener, and displays the x, y and z axis in the \nwindow when the device is moved. On Android, the accelerometer is switched off and on when \nthe application is paused and resumed.</p>\n\n\n\n\n<pre><code>var win = Ti.UI.createWindow({\n  backgroundColor: 'white',\n  exitOnClose:true,\n  layout: 'vertical'\n});\n\nopts = {\n  color:'black',\n  font:{fontSize:20},\n  text:'-',\n  top:20, left:10,\n  width:300\n};\nvar labelTimestamp = Ti.UI.createLabel(opts);\nwin.add(labelTimestamp);\nvar labelx = Ti.UI.createLabel(opts);\nwin.add(labelx);\nvar labely = Ti.UI.createLabel(opts);\nwin.add(labely);\nvar labelz = Ti.UI.createLabel(opts);\nwin.add(labelz);\nwin.open();\n\nvar accelerometerCallback = function(e) {\n  labelTimestamp.text = 'timestamp: ' + e.timestamp;\n  labelx.text = 'x: ' + e.x;\n  labely.text = 'y: ' + e.y;\n  labelz.text = 'z: ' + e.z;\n};\n\nif (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 ){\n  alert('Accelerometer does not work on a virtual device');\n} else {\n  Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n  if (Ti.Platform.name === 'android'){\n    Ti.Android.currentActivity.addEventListener('pause', function(e) {\n      Ti.API.info(\"removing accelerometer callback on pause\");\n      Ti.Accelerometer.removeEventListener('update', accelerometerCallback);\n    });\n    Ti.Android.currentActivity.addEventListener('resume', function(e) {\n      Ti.API.info(\"adding accelerometer callback on resume\");\n      Ti.Accelerometer.addEventListener('update', accelerometerCallback);\n    });\n  }\n}\n</code></pre>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-update' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Accelerometer'>Titanium.Accelerometer</span></div><a href='#!/api/Titanium.Accelerometer-event-update' class='name expandable'>update</a></div><div class='description'><div class='short'>Fired when the accelerometer changes. ...</div><div class='long'><p>Fired when the accelerometer changes.</p>\n\n<h3 class=\"pa\">Properties</h3><ul><li><span class='pre'>timestamp</span> : String<div class='sub-desc'><p>Reference timestamp since the previous change. This is not a valid timestamp and should \nsimply be used to determine the number of milliseconds between events.</p>\n\n</div></li><li><span class='pre'>y</span> : String<div class='sub-desc'><p>Current <code>y</code> axis of the device.</p>\n\n</div></li><li><span class='pre'>x</span> : String<div class='sub-desc'><p>Current <code>x</code> axis of the device.</p>\n\n</div></li><li><span class='pre'>z</span> : String<div class='sub-desc'><p>Current <code>z</code> axis of the device.</p>\n\n</div></li><li><span class='pre'>bubbles</span> : Boolean<div class='sub-desc'><p>True if the event will try to bubble up if possible.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>cancelBubble</span> : Boolean<div class='sub-desc'><p>Set to true to stop the event from bubbling.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>source</span> : Object<div class='sub-desc'><p>Source object that fired the event.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-mobileweb' title='Mobile Web' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Name of the event fired.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-mobileweb' title='Mobile Web' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li></ul></div></div></div></div></div></div></div>"});