Ext.data.JsonP['Titanium_UI_Clipboard']({"tagname":"class","name":"Titanium.UI.Clipboard","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.5","iphone 1.5","ipad 1.5","mobileweb 1.8","windowsphone 4.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Clipboard/Clipboard.yml","description":["<p>The Clipboard is a temporary data store, used to save a single item of data that may then \nbe accessed by the user using UI copy and paste interactions within an app or between apps.</p>\n\n<p>On iOS and Mobile Web, the module's <code>*Data()</code> methods enable multiple representations of the \nsame data item to be stored together with their respective \n<a href=\"http://en.wikipedia.org/wiki/Internet_media_type\">MIME type</a> to describe their format. For \nexample, <code>'text'</code> and <code>'text/plain'</code> for text, and <code>'image/jpg'</code> and <code>'image/png'</code> for an image.</p>\n\n<p>When working with text, either the <code>*Data()</code> methods may be used with a <code>'text/plain'</code> type, or \nthe <code>*Text()</code> methods without the need to specify the type.</p>\n\n<p>Android currently only supports text type of data to be stored. </p>\n\n<h4>Clipboard Data Types</h4>\n\n<p>The <code>*Text()</code> methods are equivalent to calling <code>*Data()</code> with a <code>'text'</code> or <code>'text/plain'</code> \ntype. These work with plain Unicode strings. </p>\n\n<p>An image is stored using the <code>'image'</code> type, or an explicit image MIME type, and is returned as \na {@link Titanium.Blob} (binary) type. </p>\n\n<p>A URL is stored with the <code>'url'</code> or <code>'text/uri-list'</code> type, and is returned as a string. </p>\n\n<p>Any data type that is specified but not correctly mapped to a clipboard type by the system is \nretrieved as a {@link Titanium.Blob} type. </p> \n<h3>Examples</h3>\n<h4>Copy Text to the Clipboard</h4>\n<p>Clear the clipboard and output the resulting empty clipboard to console. </p>\n\n<p>Then, store the string, \"hello\", to the clipboard and output it from the clipboard to the \nconsole. </p>\n\n<pre><code>Ti.API.info('Deleting all text in Clipboard');\nTi.UI.Clipboard.clearText();\nTi.API.info('Clipboard.getText(): ' + Ti.UI.Clipboard.getText()); // returns empty string on Android and undefined on iOS\nTi.API.info('Set text Clipboard to hello');\nTi.UI.Clipboard.setText('hello');\nTi.API.info('Clipboard.hasText(), should be true: ' + Ti.UI.Clipboard.hasText()); // returns true on Android and 1 on iOS\nTi.API.info('Clipboard.getText(), should be hello: ' + Ti.UI.Clipboard.getText());\n</code></pre>"]},"private":null,"id":"class-Titanium.UI.Clipboard","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"clearData","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{"description":["<p>On Android, identical to <code>clearText</code> method.</p>"]},"id":"method-clearData"},{"name":"clearText","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{"description":["<p>This method deletes any data saved using the <code>setText</code> method, or that has a <code>text</code> or \n<code>text/plain</code> MIME type.</p>"]},"id":"method-clearText"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getData","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{},"id":"method-getData"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getText","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{},"id":"method-getText"},{"name":"hasData","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{},"id":"method-hasData"},{"name":"hasText","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{},"id":"method-hasText"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setData","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{"description":["<p>This method will overwrite any existing data for the specified MIME type. </p>\n\n<p>Note that the clipboard is intended to store only one item of data at a time. This method \nenables different representations/formats of a data item to be saved.</p>"]},"id":"method-setData"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setText","tagname":"method","owner":"Titanium.UI.Clipboard","meta":{"description":["<p>This method will overwrite any existing text data.</p>"]},"id":"method-setText"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":131144,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-UI-Clipboard"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.5</li><li class='platform-iphone'\n        title='iPhone'>1.5</li><li class='platform-ipad'\n        title='iPad'>1.5</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","editurl":null,"description":"<p><p>The Clipboard is a temporary data store, used to save a single item of data that may then \nbe accessed by the user using UI copy and paste interactions within an app or between apps.</p>\n\n\n\n\n<p>On iOS and Mobile Web, the module's <code>*Data()</code> methods enable multiple representations of the \nsame data item to be stored together with their respective \n<a href=\"http://en.wikipedia.org/wiki/Internet_media_type\">MIME type</a> to describe their format. For \nexample, <code>'text'</code> and <code>'text/plain'</code> for text, and <code>'image/jpg'</code> and <code>'image/png'</code> for an image.</p>\n\n\n\n\n<p>When working with text, either the <code>*Data()</code> methods may be used with a <code>'text/plain'</code> type, or \nthe <code>*Text()</code> methods without the need to specify the type.</p>\n\n\n\n\n<p>Android currently only supports text type of data to be stored. </p>\n\n\n\n\n<h4>Clipboard Data Types</h4>\n\n\n\n\n<p>The <code>*Text()</code> methods are equivalent to calling <code>*Data()</code> with a <code>'text'</code> or <code>'text/plain'</code> \ntype. These work with plain Unicode strings. </p>\n\n\n\n\n<p>An image is stored using the <code>'image'</code> type, or an explicit image MIME type, and is returned as \na <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a> (binary) type. </p>\n\n\n\n\n<p>A URL is stored with the <code>'url'</code> or <code>'text/uri-list'</code> type, and is returned as a string. </p>\n\n\n\n\n<p>Any data type that is specified but not correctly mapped to a clipboard type by the system is \nretrieved as a <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a> type. </p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Copy Text to the Clipboard</h4>\n\n\n<p>Clear the clipboard and output the resulting empty clipboard to console. </p>\n\n\n\n\n<p>Then, store the string, \"hello\", to the clipboard and output it from the clipboard to the \nconsole. </p>\n\n\n\n\n<pre><code>Ti.API.info('Deleting all text in Clipboard');\nTi.UI.Clipboard.clearText();\nTi.API.info('Clipboard.getText(): ' + Ti.UI.Clipboard.getText()); // returns empty string on Android and undefined on iOS\nTi.API.info('Set text Clipboard to hello');\nTi.UI.Clipboard.setText('hello');\nTi.API.info('Clipboard.hasText(), should be true: ' + Ti.UI.Clipboard.hasText()); // returns true on Android and 1 on iOS\nTi.API.info('Clipboard.getText(), should be hello: ' + Ti.UI.Clipboard.getText());\n</code></pre>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Titanium.UI.Clipboard"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.5'>Android 1.5</li><li class='platform-iphone' title='iPhone since Titanium SDK 1.5'>iPhone 1.5</li><li class='platform-ipad' title='iPad since Titanium SDK 1.5'>iPad 1.5</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Titanium.UI.Clipboard</strong></div></div></div><div class='doc-contents'><p>A module used for accessing clipboard data.</p>\n\n<p><p>The Clipboard is a temporary data store, used to save a single item of data that may then \nbe accessed by the user using UI copy and paste interactions within an app or between apps.</p>\n\n\n\n\n<p>On iOS and Mobile Web, the module's <code>*Data()</code> methods enable multiple representations of the \nsame data item to be stored together with their respective \n<a href=\"http://en.wikipedia.org/wiki/Internet_media_type\">MIME type</a> to describe their format. For \nexample, <code>'text'</code> and <code>'text/plain'</code> for text, and <code>'image/jpg'</code> and <code>'image/png'</code> for an image.</p>\n\n\n\n\n<p>When working with text, either the <code>*Data()</code> methods may be used with a <code>'text/plain'</code> type, or \nthe <code>*Text()</code> methods without the need to specify the type.</p>\n\n\n\n\n<p>Android currently only supports text type of data to be stored. </p>\n\n\n\n\n<h4>Clipboard Data Types</h4>\n\n\n\n\n<p>The <code>*Text()</code> methods are equivalent to calling <code>*Data()</code> with a <code>'text'</code> or <code>'text/plain'</code> \ntype. These work with plain Unicode strings. </p>\n\n\n\n\n<p>An image is stored using the <code>'image'</code> type, or an explicit image MIME type, and is returned as \na <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a> (binary) type. </p>\n\n\n\n\n<p>A URL is stored with the <code>'url'</code> or <code>'text/uri-list'</code> type, and is returned as a string. </p>\n\n\n\n\n<p>Any data type that is specified but not correctly mapped to a clipboard type by the system is \nretrieved as a <a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a> type. </p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Copy Text to the Clipboard</h4>\n\n\n<p>Clear the clipboard and output the resulting empty clipboard to console. </p>\n\n\n\n\n<p>Then, store the string, \"hello\", to the clipboard and output it from the clipboard to the \nconsole. </p>\n\n\n\n\n<pre><code>Ti.API.info('Deleting all text in Clipboard');\nTi.UI.Clipboard.clearText();\nTi.API.info('Clipboard.getText(): ' + Ti.UI.Clipboard.getText()); // returns empty string on Android and undefined on iOS\nTi.API.info('Set text Clipboard to hello');\nTi.UI.Clipboard.setText('hello');\nTi.API.info('Clipboard.hasText(), should be true: ' + Ti.UI.Clipboard.hasText()); // returns true on Android and 1 on iOS\nTi.API.info('Clipboard.getText(), should be hello: ' + Ti.UI.Clipboard.getText());\n</code></pre>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>1.5</li><li class='platform-iphone'\n        title='iPhone'>1.5</li><li class='platform-ipad'\n        title='iPad'>1.5</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-clearData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-clearData' class='name expandable'>clearData</a>( <span class='pre'>[type]</span> )</div><div class='description'><div class='short'>Deletes data of the specified MIME type stored in the clipboard. ...</div><div class='long'><p>Deletes data of the specified MIME type stored in the clipboard. If MIME type omitted, all \ndata is deleted.</p>\n\n<p><p>On Android, identical to <code>clearText</code> method.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>MIME type. Ignored on Android.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-clearText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-clearText' class='name expandable'>clearText</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Deletes all text data stored in the clipboard. ...</div><div class='long'><p>Deletes all text data stored in the clipboard.</p>\n\n<p><p>This method deletes any data saved using the <code>setText</code> method, or that has a <code>text</code> or \n<code>text/plain</code> MIME type.</p>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-getData' class='name expandable'>getData</a>( <span class='pre'>type</span> ) : String/<a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></div><div class='description'><div class='short'>Gets data of the specified MIME type stored in the clipboard. ...</div><div class='long'><p>Gets data of the specified MIME type stored in the clipboard.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>MIME type. Must be text type on Android.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/<a href=\"#!/api/Titanium.Blob\" rel=\"Titanium.Blob\" class=\"docClass\">Titanium.Blob</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-getText' class='name expandable'>getText</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets text data stored in the clipboard. ...</div><div class='long'><p>Gets text data stored in the clipboard.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-hasData' class='name expandable'>hasData</a>( <span class='pre'>type</span> ) : Boolean</div><div class='description'><div class='short'>Indicates whether any data of the specified MIME type is stored in the clipboard. ...</div><div class='long'><p>Indicates whether any data of the specified MIME type is stored in the clipboard.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>MIME type. Must be text type on Android.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-hasText' class='name expandable'>hasText</a>( <span class='pre'></span> ) : Boolean/Number</div><div class='description'><div class='short'>Indicates whether any text data is stored in the clipboard. ...</div><div class='long'><p>Indicates whether any text data is stored in the clipboard.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean/Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-setData' class='name expandable'>setData</a>( <span class='pre'>type, data</span> )</div><div class='description'><div class='short'>Stores data of the specified MIME type in the clipboard. ...</div><div class='long'><p>Stores data of the specified MIME type in the clipboard.</p>\n\n<p><p>This method will overwrite any existing data for the specified MIME type. </p>\n\n\n\n\n<p>Note that the clipboard is intended to store only one item of data at a time. This method \nenables different representations/formats of a data item to be saved.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>MIME type. Must be text type on Android.</p>\n\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>New item of data.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setText' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.UI.Clipboard'>Titanium.UI.Clipboard</span></div><a href='#!/api/Titanium.UI.Clipboard-method-setText' class='name expandable'>setText</a>( <span class='pre'>text</span> )</div><div class='description'><div class='short'>Stores text data in the clipboard. ...</div><div class='long'><p>Stores text data in the clipboard.</p>\n\n<p><p>This method will overwrite any existing text data.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>New item of data.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});