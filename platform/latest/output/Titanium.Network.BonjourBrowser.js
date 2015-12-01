Ext.data.JsonP['Titanium_Network_BonjourBrowser']({"tagname":"class","name":"Titanium.Network.BonjourBrowser","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 1.2.0","ipad 1.2.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Network/BonjourBrowser.yml","description":["<p>Use the {@link Titanium.Network#method-createBonjourBrowser} method to create a <code>BonjourBrowser</code> instance.</p>\n\n<p>If your application publishes Bonjour services itself, that service will be discovered \nby the browser if necessary; be prepared to perform a check if you do not want to list \nlocal services as available.  Bonjour service browsing is an asynchronous operation, \nmeaning that you should be extremely careful when caching values from the <code>services</code> \nproperty returned by the <code>updatedServices</code> event.  In particular, if you maintain a \nlocal copy of available services and a user tries to connect to one, you should be prepared \nto handle failures gracefully; the next <code>updatedServices</code> event should provide the new \nservices list, but you should not rely on it being delivered before user input.  When \na window which uses Bonjour browsing is closed, if you do not want to continue searching, \nyou must call the stop() method.</p>"]},"private":null,"id":"class-Titanium.Network.BonjourBrowser","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"domain","tagname":"property","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"property-domain"},{"name":"isSearching","tagname":"property","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"property-isSearching"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"},{"name":"serviceType","tagname":"property","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"property-serviceType"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getDomain","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-getDomain"},{"name":"getIsSearching","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-getIsSearching"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getServiceType","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-getServiceType"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"search","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-search"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setDomain","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-setDomain"},{"name":"setIsSearching","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-setIsSearching"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setServiceType","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-setServiceType"},{"name":"stopSearch","tagname":"method","owner":"Titanium.Network.BonjourBrowser","meta":{},"id":"method-stopSearch"}],"event":[{"name":"updatedServices","tagname":"event","owner":"Titanium.Network.BonjourBrowser","meta":{"deprecated":{"text":"3.0.0 Renamed to [updatedservices](Titanium.Network.BonjourBrowser.updatedservices)\n(all lowercase)."}},"id":"event-updatedServices"},{"name":"updatedservices","tagname":"event","owner":"Titanium.Network.BonjourBrowser","meta":{"platform":["iphone 3.0.0","ipad 3.0.0"]},"id":"event-updatedservices"}],"css_var":[],"css_mixin":[]},"linenr":99188,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-Network-BonjourBrowser"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.2.0</li><li class='platform-ipad'\n        title='iPad'>1.2.0</li></ul>","editurl":null,"description":"<p><p>Use the <a href=\"#!/api/Titanium.Network-method-createBonjourBrowser\" rel=\"Titanium.Network-method-createBonjourBrowser\" class=\"docClass\">Titanium.Network.createBonjourBrowser</a> method to create a <code>BonjourBrowser</code> instance.</p>\n\n\n\n\n<p>If your application publishes Bonjour services itself, that service will be discovered \nby the browser if necessary; be prepared to perform a check if you do not want to list \nlocal services as available.  Bonjour service browsing is an asynchronous operation, \nmeaning that you should be extremely careful when caching values from the <code>services</code> \nproperty returned by the <code>updatedServices</code> event.  In particular, if you maintain a \nlocal copy of available services and a user tries to connect to one, you should be prepared \nto handle failures gracefully; the next <code>updatedServices</code> event should provide the new \nservices list, but you should not rely on it being delivered before user input.  When \na window which uses Bonjour browsing is closed, if you do not want to continue searching, \nyou must call the stop() method.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Network.BonjourBrowser"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 1.2.0'>iPhone 1.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 1.2.0'>iPad 1.2.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.Network.BonjourBrowser</strong></div></div></div><div class='doc-contents'><p>A browser for the discovery and retrieval of Bonjour services available on the network.</p>\n\n<p><p>Use the <a href=\"#!/api/Titanium.Network-method-createBonjourBrowser\" rel=\"Titanium.Network-method-createBonjourBrowser\" class=\"docClass\">Titanium.Network.createBonjourBrowser</a> method to create a <code>BonjourBrowser</code> instance.</p>\n\n\n\n\n<p>If your application publishes Bonjour services itself, that service will be discovered \nby the browser if necessary; be prepared to perform a check if you do not want to list \nlocal services as available.  Bonjour service browsing is an asynchronous operation, \nmeaning that you should be extremely careful when caching values from the <code>services</code> \nproperty returned by the <code>updatedServices</code> event.  In particular, if you maintain a \nlocal copy of available services and a user tries to connect to one, you should be prepared \nto handle failures gracefully; the next <code>updatedServices</code> event should provide the new \nservices list, but you should not rely on it being delivered before user input.  When \na window which uses Bonjour browsing is closed, if you do not want to continue searching, \nyou must call the stop() method.</p>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.2.0</li><li class='platform-ipad'\n        title='iPad'>1.2.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-domain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-property-domain' class='name not-expandable'>domain</a><span> : String</span></div><div class='description'><div class='short'><p>The domain the browser is searching in</p>\n\n</div><div class='long'><p>The domain the browser is searching in</p>\n\n</div></div></div><div id='property-isSearching' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-property-isSearching' class='name not-expandable'>isSearching</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Whether or not the browser is currently searching</p>\n\n</div><div class='long'><p>Whether or not the browser is currently searching</p>\n\n</div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div><div id='property-serviceType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-property-serviceType' class='name not-expandable'>serviceType</a><span> : String</span></div><div class='description'><div class='short'><p>The type of the service the browser searches for</p>\n\n</div><div class='long'><p>The type of the service the browser searches for</p>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDomain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-getDomain' class='name expandable'>getDomain</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the domain property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Network.BonjourBrowser-property-domain\" rel=\"Titanium.Network.BonjourBrowser-property-domain\" class=\"docClass\">domain</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getIsSearching' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-getIsSearching' class='name expandable'>getIsSearching</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the isSearching property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Network.BonjourBrowser-property-isSearching\" rel=\"Titanium.Network.BonjourBrowser-property-isSearching\" class=\"docClass\">isSearching</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getServiceType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-getServiceType' class='name expandable'>getServiceType</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the serviceType property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Network.BonjourBrowser-property-serviceType\" rel=\"Titanium.Network.BonjourBrowser-property-serviceType\" class=\"docClass\">serviceType</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-search' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-search' class='name expandable'>search</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Conduct a search for Bonjour services matching the type and domain specified during creation ...</div><div class='long'><p>Conduct a search for Bonjour services matching the type and domain specified during creation</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setDomain' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-setDomain' class='name expandable'>setDomain</a>( <span class='pre'>domain</span> )</div><div class='description'><div class='short'>Sets the value of the domain property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Network.BonjourBrowser-property-domain\" rel=\"Titanium.Network.BonjourBrowser-property-domain\" class=\"docClass\">domain</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>domain</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setIsSearching' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-setIsSearching' class='name expandable'>setIsSearching</a>( <span class='pre'>isSearching</span> )</div><div class='description'><div class='short'>Sets the value of the isSearching property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Network.BonjourBrowser-property-isSearching\" rel=\"Titanium.Network.BonjourBrowser-property-isSearching\" class=\"docClass\">isSearching</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isSearching</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setServiceType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-setServiceType' class='name expandable'>setServiceType</a>( <span class='pre'>serviceType</span> )</div><div class='description'><div class='short'>Sets the value of the serviceType property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Network.BonjourBrowser-property-serviceType\" rel=\"Titanium.Network.BonjourBrowser-property-serviceType\" class=\"docClass\">serviceType</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>serviceType</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-stopSearch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-method-stopSearch' class='name expandable'>stopSearch</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Halt an ongoing search ...</div><div class='long'><p>Halt an ongoing search</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-updatedServices' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-event-updatedServices' class='name expandable'>updatedServices</a><strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Fired when the discovered services list is updated ...</div><div class='long'><p>Fired when the discovered services list is updated</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> <p>3.0.0 Renamed to <a href=\"Titanium.Network.BonjourBrowser.updatedservices\">updatedservices</a>\n(all lowercase).</p>\n</p>\n        </div>\n<h3 class=\"pa\">Properties</h3><ul><li><span class='pre'>services</span> : String<div class='sub-desc'><p>An array of BonjourService objects corresponding to currently available services.  If you cache this value, including using it as table data, be aware that it could become out of date at any time due to the asynchronous nature of Bonjour service discovery.</p>\n\n</div></li><li><span class='pre'>bubbles</span> : Boolean<div class='sub-desc'><p>True if the event will try to bubble up if possible.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>cancelBubble</span> : Boolean<div class='sub-desc'><p>Set to true to stop the event from bubbling.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>source</span> : Object<div class='sub-desc'><p>Source object that fired the event.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-mobileweb' title='Mobile Web' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Name of the event fired.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-mobileweb' title='Mobile Web' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li></ul></div></div></div><div id='event-updatedservices' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.Network.BonjourBrowser'>Titanium.Network.BonjourBrowser</span></div><a href='#!/api/Titanium.Network.BonjourBrowser-event-updatedservices' class='name expandable'>updatedservices</a></div><div class='description'><div class='short'>Fired when the discovered services list is updated ...</div><div class='long'><p>Fired when the discovered services list is updated</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Properties</h3><ul><li><span class='pre'>services</span> : String<div class='sub-desc'><p>An array of BonjourService objects corresponding to currently available services.  If you cache this value, including using it as table data, be aware that it could become out of date at any time due to the asynchronous nature of Bonjour service discovery.</p>\n\n</div></li><li><span class='pre'>bubbles</span> : Boolean<div class='sub-desc'><p>True if the event will try to bubble up if possible.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>cancelBubble</span> : Boolean<div class='sub-desc'><p>Set to true to stop the event from bubbling.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li></ul></div></li><li><span class='pre'>source</span> : Object<div class='sub-desc'><p>Source object that fired the event.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-mobileweb' title='Mobile Web' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li><li><span class='pre'>type</span> : String<div class='sub-desc'><p>Name of the event fired.</p>\n\n<ul class=\"platforms\"><li class='platform-android' title='Android' >&nbsp;</li><li class='platform-iphone' title='iPhone' >&nbsp;</li><li class='platform-ipad' title='iPad' >&nbsp;</li><li class='platform-mobileweb' title='Mobile Web' >&nbsp;</li><li class='platform-windowsphone' title='Windows Phone' >&nbsp;</li></ul></div></li></ul></div></div></div></div></div></div></div>"});