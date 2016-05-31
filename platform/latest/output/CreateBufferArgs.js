Ext.data.JsonP['CreateBufferArgs']({"tagname":"class","name":"CreateBufferArgs","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.7","iphone 1.7","ipad 1.7","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Titanium.yml"},"private":null,"id":"class-CreateBufferArgs","members":{"cfg":[],"property":[{"name":"byteOrder","tagname":"property","owner":"CreateBufferArgs","meta":{},"id":"property-byteOrder"},{"name":"length","tagname":"property","owner":"CreateBufferArgs","meta":{},"id":"property-length"},{"name":"type","tagname":"property","owner":"CreateBufferArgs","meta":{},"id":"property-type"},{"name":"value","tagname":"property","owner":"CreateBufferArgs","meta":{},"id":"property-value"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":111862,"files":[{"filename":"titanium.js","href":"titanium.html#CreateBufferArgs"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.7</li><li class='platform-iphone'\n        title='iPhone'>1.7</li><li class='platform-ipad'\n        title='iPad'>1.7</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.7'>Android 1.7</li><li class='platform-iphone' title='iPhone since Titanium SDK 1.7'>iPhone 1.7</li><li class='platform-ipad' title='iPad since Titanium SDK 1.7'>iPad 1.7</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Arguments to be passed to createBuffer</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>1.7</li><li class='platform-iphone'\n        title='iPhone'>1.7</li><li class='platform-ipad'\n        title='iPad'>1.7</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-byteOrder' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CreateBufferArgs'>CreateBufferArgs</span></div><a href='#!/api/CreateBufferArgs-property-byteOrder' class='name expandable'>byteOrder</a><span> : Number</span></div><div class='description'><div class='short'>The byte order of this buffer. ...</div><div class='long'><p>The byte order of this buffer.</p>\n\n<p>Default: The OS native byte order is used by default. See <a href=\"#!/api/Titanium.Codec-method-getNativeByteOrder\" rel=\"Titanium.Codec-method-getNativeByteOrder\" class=\"docClass\">Titanium.Codec.getNativeByteOrder</a></p></div></div></div><div id='property-length' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CreateBufferArgs'>CreateBufferArgs</span></div><a href='#!/api/CreateBufferArgs-property-length' class='name expandable'>length</a><span> : Number</span></div><div class='description'><div class='short'>The length of the buffer. ...</div><div class='long'><p>The length of the buffer.</p>\n\n<p>Default: 0, unless `value` is specified, in which case the length of the encoded data is used.</p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CreateBufferArgs'>CreateBufferArgs</span></div><a href='#!/api/CreateBufferArgs-property-type' class='name expandable'>type</a><span> : String</span></div><div class='description'><div class='short'>The type of data encoding to use with value. ...</div><div class='long'><p>The type of data encoding to use with <code>value</code>.</p>\n\n<p>Default: <a href=\"#!/api/Titanium.Codec-property-CHARSET_UTF8\" rel=\"Titanium.Codec-property-CHARSET_UTF8\" class=\"docClass\">Titanium.Codec.CHARSET_UTF8</a> if `value` is a String, If `value` is a Number, this argument is required</p></div></div></div><div id='property-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CreateBufferArgs'>CreateBufferArgs</span></div><a href='#!/api/CreateBufferArgs-property-value' class='name expandable'>value</a><span> : String/Number</span></div><div class='description'><div class='short'>An initial value which will be encoded and placed in the buffer. ...</div><div class='long'><p>An initial value which will be encoded and placed in the buffer. If value is a Number, type must also be set. (this is simply a convenient way of calling <a href=\"#!/api/Titanium.Codec-method-encodeString\" rel=\"Titanium.Codec-method-encodeString\" class=\"docClass\">Titanium.Codec.encodeString</a> or <a href=\"#!/api/Titanium.Codec-method-encodeNumber\" rel=\"Titanium.Codec-method-encodeNumber\" class=\"docClass\">Titanium.Codec.encodeNumber</a> and placing the encoded value in the returned buffer.)</p>\n\n</div></div></div></div></div></div></div>"});