Ext.data.JsonP['DecodeStringDict']({"tagname":"class","name":"DecodeStringDict","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Codec/Codec.yml"},"private":null,"id":"class-DecodeStringDict","members":{"cfg":[],"property":[{"name":"charset","tagname":"property","owner":"DecodeStringDict","meta":{},"id":"property-charset"},{"name":"length","tagname":"property","owner":"DecodeStringDict","meta":{},"id":"property-length"},{"name":"position","tagname":"property","owner":"DecodeStringDict","meta":{},"id":"property-position"},{"name":"source","tagname":"property","owner":"DecodeStringDict","meta":{},"id":"property-source"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":69435,"files":[{"filename":"titanium.js","href":"titanium.html#DecodeStringDict"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Named parameters for <a href=\"#!/api/Titanium.Codec-method-decodeString\" rel=\"Titanium.Codec-method-decodeString\" class=\"docClass\">Titanium.Codec.decodeString</a>.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-charset' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DecodeStringDict'>DecodeStringDict</span></div><a href='#!/api/DecodeStringDict-property-charset' class='name expandable'>charset</a><span> : String</span></div><div class='description'><div class='short'>Character set to use when encoding this string to bytes. ...</div><div class='long'><p>Character set to use when encoding this string to bytes.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.Codec-property-CHARSET_ASCII\" rel=\"Titanium.Codec-property-CHARSET_ASCII\" class=\"docClass\">Titanium.Codec.CHARSET_ASCII</a>\n <li> <a href=\"#!/api/Titanium.Codec-property-CHARSET_ISO_LATIN_1\" rel=\"Titanium.Codec-property-CHARSET_ISO_LATIN_1\" class=\"docClass\">Titanium.Codec.CHARSET_ISO_LATIN_1</a>\n <li> <a href=\"#!/api/Titanium.Codec-property-CHARSET_UTF8\" rel=\"Titanium.Codec-property-CHARSET_UTF8\" class=\"docClass\">Titanium.Codec.CHARSET_UTF8</a>\n <li> <a href=\"#!/api/Titanium.Codec-property-CHARSET_UTF16\" rel=\"Titanium.Codec-property-CHARSET_UTF16\" class=\"docClass\">Titanium.Codec.CHARSET_UTF16</a>\n <li> <a href=\"#!/api/Titanium.Codec-property-CHARSET_UTF16BE\" rel=\"Titanium.Codec-property-CHARSET_UTF16BE\" class=\"docClass\">Titanium.Codec.CHARSET_UTF16BE</a>\n <li> <a href=\"#!/api/Titanium.Codec-property-CHARSET_UTF16LE\" rel=\"Titanium.Codec-property-CHARSET_UTF16LE\" class=\"docClass\">Titanium.Codec.CHARSET_UTF16LE</a>\n</li></li></li></li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.Codec-property-CHARSET_UTF8\" rel=\"Titanium.Codec-property-CHARSET_UTF8\" class=\"docClass\">Titanium.Codec.CHARSET_UTF8</a></p></div></div></div><div id='property-length' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DecodeStringDict'>DecodeStringDict</span></div><a href='#!/api/DecodeStringDict-property-length' class='name expandable'>length</a><span> : Number</span></div><div class='description'><div class='short'>Number of bytes to decode. ...</div><div class='long'><p>Number of bytes to decode.</p>\n\n<p>Default: Length of `source`</p></div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DecodeStringDict'>DecodeStringDict</span></div><a href='#!/api/DecodeStringDict-property-position' class='name expandable'>position</a><span> : Number</span></div><div class='description'><div class='short'>Index in the source buffer of the first byte of data to decode. ...</div><div class='long'><p>Index in the <code>source</code> buffer of the first byte of data to decode.</p>\n\n<p>Default: 0</p></div></div></div><div id='property-source' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='DecodeStringDict'>DecodeStringDict</span></div><a href='#!/api/DecodeStringDict-property-source' class='name not-expandable'>source</a><span> : <a href=\"#!/api/Titanium.Buffer\" rel=\"Titanium.Buffer\" class=\"docClass\">Titanium.Buffer</a></span></div><div class='description'><div class='short'><p>Buffer to decode.</p>\n\n</div><div class='long'><p>Buffer to decode.</p>\n\n</div></div></div></div></div></div></div>"});