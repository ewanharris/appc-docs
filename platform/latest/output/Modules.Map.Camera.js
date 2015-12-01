Ext.data.JsonP['Modules_Map_Camera']({"tagname":"class","name":"Modules.Map.Camera","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 3.2.0","ipad 3.2.0"],"editurl":"https://github.com/appcelerator-modules/ti.map/edit/master/%MODULE_PATH%","description":["<p>Applying a camera to a map has the effect of giving the map a 3D-like appearance.\nYou can use a camera to rotate the map so that it is oriented to match the user's\nheading or to apply a pitch angle to tilt the plane of the map.</p>\n\n<p>If the app is run on pre iOS 7, camera functionality will not be available.\nAfter creating a <code>Camera</code> object, it can be applied to the map by setting the <code>camera</code> property of the \n{@link Modules.Map.View map view}.</p>\n\n<p>Use the {@link Modules.Map#method-createCamera} method to create a camera.</p>\n\n<p>If <code>altitude</code>, <code>eyeCoordinate</code>, and <code>centerCoordinate</code> are passed in on creation, a camera will be\nreturned using the specified viewing angle information.</p>"]},"private":null,"id":"class-Modules.Map.Camera","members":{"cfg":[],"property":[{"name":"altitude","tagname":"property","owner":"Modules.Map.Camera","meta":{},"id":"property-altitude"},{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"centerCoordinate","tagname":"property","owner":"Modules.Map.Camera","meta":{},"id":"property-centerCoordinate"},{"name":"eyeCoordinate","tagname":"property","owner":"Modules.Map.Camera","meta":{"description":["<p>If the value for this parameter is equal to the value in the <code>centerCoordinate</code> parameter, \nthe map is displayed as if the camera is looking straight down. If this point is offset \nfrom the <code>centerCoordinate</code> value, the map is displayed with an appropriate heading and pitch angle.</p>"]},"id":"property-eyeCoordinate"},{"name":"heading","tagname":"property","owner":"Modules.Map.Camera","meta":{"description":["<p>The value 0 means that the top edge of the map view corresponds to true north. \nThe value 90 means the top of the map is pointing due east. The value 180 means \nthe top of the map points due south, and so on.</p>"]},"id":"property-heading"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"},{"name":"pitch","tagname":"property","owner":"Modules.Map.Camera","meta":{"description":["<p>A value of 0 results in a camera pointed straight down at the map. Angles greater than \n0 result in a camera that is pitched toward the horizon by the specified number of degrees.\nThe value in this property may be clamped to a maximum value to maintain map readability.\nThere is no fixed maximum value, though, because the actual maximum value is dependent on\nthe current altitude of the camera.</p>"]},"id":"property-pitch"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getAltitude","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-getAltitude"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getCenterCoordinate","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-getCenterCoordinate"},{"name":"getEyeCoordinate","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-getEyeCoordinate"},{"name":"getHeading","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-getHeading"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getPitch","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-getPitch"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setAltitude","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-setAltitude"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setCenterCoordinate","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-setCenterCoordinate"},{"name":"setEyeCoordinate","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-setEyeCoordinate"},{"name":"setHeading","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-setHeading"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setPitch","tagname":"method","owner":"Modules.Map.Camera","meta":{},"id":"method-setPitch"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":5673,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-Map-Camera"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul>","editurl":null,"description":"<p><p>Applying a camera to a map has the effect of giving the map a 3D-like appearance.\nYou can use a camera to rotate the map so that it is oriented to match the user's\nheading or to apply a pitch angle to tilt the plane of the map.</p>\n\n\n\n\n<p>If the app is run on pre iOS 7, camera functionality will not be available.\nAfter creating a <code>Camera</code> object, it can be applied to the map by setting the <code>camera</code> property of the \n<a href=\"#!/api/Modules.Map.View\" rel=\"Modules.Map.View\" class=\"docClass\">map view</a>.</p>\n\n\n\n\n<p>Use the <a href=\"#!/api/Modules.Map-method-createCamera\" rel=\"Modules.Map-method-createCamera\" class=\"docClass\">Modules.Map.createCamera</a> method to create a camera.</p>\n\n\n\n\n<p>If <code>altitude</code>, <code>eyeCoordinate</code>, and <code>centerCoordinate</code> are passed in on creation, a camera will be\nreturned using the specified viewing angle information.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Modules.Map.Camera"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 3.2.0'>iPhone 3.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.2.0'>iPad 3.2.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Modules.Map.Camera</strong></div></div></div><div class='doc-contents'><p>A camera object defines a point above the map's surface from which to view the map. Available in iOS 7.0 and later.</p>\n\n<p><p>Applying a camera to a map has the effect of giving the map a 3D-like appearance.\nYou can use a camera to rotate the map so that it is oriented to match the user's\nheading or to apply a pitch angle to tilt the plane of the map.</p>\n\n\n\n\n<p>If the app is run on pre iOS 7, camera functionality will not be available.\nAfter creating a <code>Camera</code> object, it can be applied to the map by setting the <code>camera</code> property of the \n<a href=\"#!/api/Modules.Map.View\" rel=\"Modules.Map.View\" class=\"docClass\">map view</a>.</p>\n\n\n\n\n<p>Use the <a href=\"#!/api/Modules.Map-method-createCamera\" rel=\"Modules.Map-method-createCamera\" class=\"docClass\">Modules.Map.createCamera</a> method to create a camera.</p>\n\n\n\n\n<p>If <code>altitude</code>, <code>eyeCoordinate</code>, and <code>centerCoordinate</code> are passed in on creation, a camera will be\nreturned using the specified viewing angle information.</p>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-altitude' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-property-altitude' class='name not-expandable'>altitude</a><span> : Number</span></div><div class='description'><div class='short'><p>The altitude above the ground, measured in meters.</p>\n\n</div><div class='long'><p>The altitude above the ground, measured in meters.</p>\n\n</div></div></div><div id='property-apiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-centerCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-property-centerCoordinate' class='name not-expandable'>centerCoordinate</a><span> : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a></span></div><div class='description'><div class='short'><p>The coordinate point on which the map should be centered.</p>\n\n</div><div class='long'><p>The coordinate point on which the map should be centered.</p>\n\n</div></div></div><div id='property-eyeCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-property-eyeCoordinate' class='name expandable'>eyeCoordinate</a><span> : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a></span></div><div class='description'><div class='short'>The coordinate point at which to place the camera. ...</div><div class='long'><p>The coordinate point at which to place the camera. Only used on creation when <code>altitude</code> \nand <code>centerCoordinate</code> are also provided. Setting this property at anytime other time will\nhave no effect.</p>\n\n<p><p>If the value for this parameter is equal to the value in the <code>centerCoordinate</code> parameter, \nthe map is displayed as if the camera is looking straight down. If this point is offset \nfrom the <code>centerCoordinate</code> value, the map is displayed with an appropriate heading and pitch angle.</p>\n\n</p></div></div></div><div id='property-heading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-property-heading' class='name not-expandable'>heading</a><span> : Number</span></div><div class='description'><div class='short'><p>The heading of the camera (measured in degrees) relative to true north.</p>\n\n</div><div class='long'><p>The heading of the camera (measured in degrees) relative to true north.</p>\n\n<p><p>The value 0 means that the top edge of the map view corresponds to true north. \nThe value 90 means the top of the map is pointing due east. The value 180 means \nthe top of the map points due south, and so on.</p>\n\n</p></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div><div id='property-pitch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-property-pitch' class='name not-expandable'>pitch</a><span> : Number</span></div><div class='description'><div class='short'><p>The viewing angle of the camera, measured in degrees.</p>\n\n</div><div class='long'><p>The viewing angle of the camera, measured in degrees.</p>\n\n<p><p>A value of 0 results in a camera pointed straight down at the map. Angles greater than \n0 result in a camera that is pitched toward the horizon by the specified number of degrees.\nThe value in this property may be clamped to a maximum value to maintain map readability.\nThere is no fixed maximum value, though, because the actual maximum value is dependent on\nthe current altitude of the camera.</p>\n\n</p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getAltitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-getAltitude' class='name expandable'>getAltitude</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the altitude property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Camera-property-altitude\" rel=\"Modules.Map.Camera-property-altitude\" class=\"docClass\">altitude</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCenterCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-getCenterCoordinate' class='name expandable'>getCenterCoordinate</a>( <span class='pre'></span> ) : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a></div><div class='description'><div class='short'>Gets the value of the centerCoordinate property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Camera-property-centerCoordinate\" rel=\"Modules.Map.Camera-property-centerCoordinate\" class=\"docClass\">centerCoordinate</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEyeCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-getEyeCoordinate' class='name expandable'>getEyeCoordinate</a>( <span class='pre'></span> ) : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a></div><div class='description'><div class='short'>Gets the value of the eyeCoordinate property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Camera-property-eyeCoordinate\" rel=\"Modules.Map.Camera-property-eyeCoordinate\" class=\"docClass\">eyeCoordinate</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-getHeading' class='name expandable'>getHeading</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the heading property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Camera-property-heading\" rel=\"Modules.Map.Camera-property-heading\" class=\"docClass\">heading</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPitch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-getPitch' class='name expandable'>getPitch</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the value of the pitch property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Map.Camera-property-pitch\" rel=\"Modules.Map.Camera-property-pitch\" class=\"docClass\">pitch</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setAltitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-setAltitude' class='name expandable'>setAltitude</a>( <span class='pre'>altitude</span> )</div><div class='description'><div class='short'>Sets the value of the altitude property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Camera-property-altitude\" rel=\"Modules.Map.Camera-property-altitude\" class=\"docClass\">altitude</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>altitude</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setCenterCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-setCenterCoordinate' class='name expandable'>setCenterCoordinate</a>( <span class='pre'>centerCoordinate</span> )</div><div class='description'><div class='short'>Sets the value of the centerCoordinate property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Camera-property-centerCoordinate\" rel=\"Modules.Map.Camera-property-centerCoordinate\" class=\"docClass\">centerCoordinate</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>centerCoordinate</span> : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setEyeCoordinate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-setEyeCoordinate' class='name expandable'>setEyeCoordinate</a>( <span class='pre'>eyeCoordinate</span> )</div><div class='description'><div class='short'>Sets the value of the eyeCoordinate property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Camera-property-eyeCoordinate\" rel=\"Modules.Map.Camera-property-eyeCoordinate\" class=\"docClass\">eyeCoordinate</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eyeCoordinate</span> : <a href=\"#!/api/MapPointType\" rel=\"MapPointType\" class=\"docClass\">MapPointType</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setHeading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-setHeading' class='name expandable'>setHeading</a>( <span class='pre'>heading</span> )</div><div class='description'><div class='short'>Sets the value of the heading property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Camera-property-heading\" rel=\"Modules.Map.Camera-property-heading\" class=\"docClass\">heading</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>heading</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setPitch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Map.Camera'>Modules.Map.Camera</span></div><a href='#!/api/Modules.Map.Camera-method-setPitch' class='name expandable'>setPitch</a>( <span class='pre'>pitch</span> )</div><div class='description'><div class='short'>Sets the value of the pitch property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Map.Camera-property-pitch\" rel=\"Modules.Map.Camera-property-pitch\" class=\"docClass\">pitch</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pitch</span> : Number<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});