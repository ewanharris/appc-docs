Ext.data.JsonP['ReadCallbackArgs']({"tagname":"class","name":"ReadCallbackArgs","extends":"ErrorResponse","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.7","iphone 1.7","ipad 1.7","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Stream/Stream.yml"},"private":null,"id":"class-ReadCallbackArgs","members":{"cfg":[],"property":[{"name":"bytesProcessed","tagname":"property","owner":"ReadCallbackArgs","meta":{},"id":"property-bytesProcessed"},{"name":"code","tagname":"property","owner":"ReadCallbackArgs","meta":{"description":["<p>Error code will be 0 if <code>success</code> is <code>true</code>, nonzero otherwise. If the error\nwas generated by the operating system, that system's error value is used.\nOtherwise, this value will be -1.</p>"],"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0","mobileweb 3.1.0"]},"id":"property-code"},{"name":"error","tagname":"property","owner":"ReadCallbackArgs","meta":{"description":["<p>Will be undefined if <code>success</code> is <code>true</code>.</p>"],"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0","mobileweb 3.1.0"]},"id":"property-error"},{"name":"errorDescription","tagname":"property","owner":"ReadCallbackArgs","meta":{"deprecated":{"version":"3.1.0","text":""}},"id":"property-errorDescription"},{"name":"errorState","tagname":"property","owner":"ReadCallbackArgs","meta":{"deprecated":{"version":"3.1.0","text":""},"platform":["android 1.7"]},"id":"property-errorState"},{"name":"source","tagname":"property","owner":"ReadCallbackArgs","meta":{},"id":"property-source"},{"name":"success","tagname":"property","owner":"ReadCallbackArgs","meta":{"description":["<p>Returns <code>true</code> if request succeeded, <code>false</code> otherwise.</p>"],"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0","mobileweb 3.1.0"]},"id":"property-success"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":107901,"files":[{"filename":"titanium.js","href":"titanium.html#ReadCallbackArgs"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.7</li><li class='platform-iphone'\n        title='iPhone'>1.7</li><li class='platform-ipad'\n        title='iPad'>1.7</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["ErrorResponse","ReadCallbackArgs"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.7'>Android 1.7</li><li class='platform-iphone' title='iPhone since Titanium SDK 1.7'>iPhone 1.7</li><li class='platform-ipad' title='iPad since Titanium SDK 1.7'>iPad 1.7</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/ErrorResponse' rel='ErrorResponse' class='docClass'>ErrorResponse</a></div><div class='subclass'> &gt; <strong>ReadCallbackArgs</strong></div></div></div><div class='doc-contents'><p>Argument passed to the read callback when an asynchronous <a href=\"#!/api/Titanium.Stream-method-read\" rel=\"Titanium.Stream-method-read\" class=\"docClass\">read</a> operation\nfinishes.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>1.7</li><li class='platform-iphone'\n        title='iPhone'>1.7</li><li class='platform-ipad'\n        title='iPad'>1.7</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-bytesProcessed' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-bytesProcessed' class='name not-expandable'>bytesProcessed</a><span> : Number</span></div><div class='description'><div class='short'><p>Number of bytes processed, or -1 in the event of an error or end of stream.</p>\n\n</div><div class='long'><p>Number of bytes processed, or -1 in the event of an error or end of stream.</p>\n\n</div></div></div><div id='property-code' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-code' class='name expandable'>code</a><span> : Number</span></div><div class='description'><div class='short'>Error code. ...</div><div class='long'><p>Error code. Returns 0 if <code>success</code> is <code>true</code>.</p>\n\n<p><p>Error code will be 0 if <code>success</code> is <code>true</code>, nonzero otherwise. If the error\nwas generated by the operating system, that system's error value is used.\nOtherwise, this value will be -1.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.1.0</li></ul><p>Overrides: <a href='#!/api/ErrorResponse-property-code' rel='ErrorResponse-property-code' class='docClass'>ErrorResponse.code</a></p></div></div></div><div id='property-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-error' class='name not-expandable'>error</a><span> : String</span></div><div class='description'><div class='short'><p>Error message, if any returned.</p>\n\n</div><div class='long'><p>Error message, if any returned.</p>\n\n<p><p>Will be undefined if <code>success</code> is <code>true</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.1.0</li></ul><p>Overrides: <a href='#!/api/ErrorResponse-property-error' rel='ErrorResponse-property-error' class='docClass'>ErrorResponse.error</a></p></div></div></div><div id='property-errorDescription' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-errorDescription' class='name expandable'>errorDescription</a><span> : String</span><strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Text description of the error. ...</div><div class='long'><p>Text description of the error.</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 3.1.0 \n</p>\n        </div>\n</div></div></div><div id='property-errorState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-errorState' class='name expandable'>errorState</a><span> : Number</span><strong class='deprecated signature' >deprecated</strong></div><div class='description'><div class='short'>Whether an error was encountered. ...</div><div class='long'><p>Whether an error was encountered. Set to 1 in the case of an error, 0\notherwise.</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> since 3.1.0 \n</p>\n        </div>\n<ul class='platforms'><li class='platform-android'\n        title='Android'>1.7</li></ul></div></div></div><div id='property-source' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-source' class='name not-expandable'>source</a><span> : <a href=\"#!/api/Titanium.IOStream\" rel=\"Titanium.IOStream\" class=\"docClass\">Titanium.IOStream</a></span></div><div class='description'><div class='short'><p>Stream being read.</p>\n\n</div><div class='long'><p>Stream being read.</p>\n\n</div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='ReadCallbackArgs'>ReadCallbackArgs</span></div><a href='#!/api/ReadCallbackArgs-property-success' class='name not-expandable'>success</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Indicates if the operation succeeded.</p>\n\n</div><div class='long'><p>Indicates if the operation succeeded.</p>\n\n<p><p>Returns <code>true</code> if request succeeded, <code>false</code> otherwise.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.1.0</li></ul><p>Overrides: <a href='#!/api/ErrorResponse-property-success' rel='ErrorResponse-property-success' class='docClass'>ErrorResponse.success</a></p></div></div></div></div></div></div></div>"});