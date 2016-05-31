Ext.data.JsonP['Attribute']({"tagname":"class","name":"Attribute","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.6.0","iphone 3.6.0","ipad 3.6.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Attribute.yml","description":["<p>Attributes are added to the {@link Titanium.UI.AttributedString} object to create\nstyled text. The attribute is a JavaScript Object containing three properties:\n<code>type</code>, <code>value</code> and <code>range</code>.</p>"]},"private":null,"id":"class-Attribute","members":{"cfg":[],"property":[{"name":"range","tagname":"property","owner":"Attribute","meta":{"description":["<p>This specifies the range of text to apply the property to, as an array of two numbers: <code>[from, length]</code>.</p>"]},"id":"property-range"},{"name":"type","tagname":"property","owner":"Attribute","meta":{"description":["<p>On Android, only the following constants are supported\nTitanium.UI.ATTRIBUTE_FONT, Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,\nTitanium.UI.ATTRIBUTE_BACKGROUND_COLOR, Titanium.UI.ATTRIBUTE_STRIKETHROUGH_STYLE,\nTitanium.UI.ATTRIBUTE_UNDERLINES_STYLE, Titanium.UI.ATTRIBUTE_LINK, \nTitanium.UI.ATTRIBUTE_UNDERLINE_COLOR</p>\n\n<p>ON iOS, Titanium.UI.ATTRIBUTE_LINK only supported on {@link Titanium.UI.TextArea}, with\neditable set to false and autoLink enabled.</p> \n\n<p>This API can be assigned the following constants:<ul>\n <li> {@link Titanium.UI#property-ATTRIBUTE_FONT}\n <li> {@link Titanium.UI#property-ATTRIBUTE_FOREGROUND_COLOR}\n <li> {@link Titanium.UI#property-ATTRIBUTE_BACKGROUND_COLOR}\n <li> {@link Titanium.UI#property-ATTRIBUTE_STRIKETHROUGH_STYLE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_UNDERLINES_STYLE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_LINK}\n <li> {@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_COLOR}\n <li> {@link Titanium.UI.iOS#property-ATTRIBUTE_LIGATURE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_KERN}\n <li> {@link Titanium.UI#property-ATTRIBUTE_STROKE_COLOR}\n <li> {@link Titanium.UI#property-ATTRIBUTE_STROKE_WIDTH}\n <li> {@link Titanium.UI#property-ATTRIBUTE_SHADOW}\n <li> {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION}\n <li> {@link Titanium.UI#property-ATTRIBUTE_TEXT_EFFECT}\n <li> {@link Titanium.UI#property-ATTRIBUTE_BASELINE_OFFSET}\n <li> {@link Titanium.UI#property-ATTRIBUTE_STRIKETHROUGH_COLOR}\n <li> {@link Titanium.UI#property-ATTRIBUTE_OBLIQUENESS}\n <li> {@link Titanium.UI#property-ATTRIBUTE_EXPANSION}\n <li> {@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK}\n</ul></p>"]},"id":"property-type"},{"name":"value","tagname":"property","owner":"Attribute","meta":{"description":["<p>The <code>value</code> parameter depends on the <code>type</code> parameter. For example, to\nuse the foreground color on the text you would use {@link Titanium.UI#property-ATTRIBUTE_FOREGROUND_COLOR}\nfor the <code>type</code> and a color value for the <code>value</code>:</p>\n\n<pre><code>{\n    type: Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR,\n    value: '#DDD',\n    range: [0, 100]\n}\n</code></pre>\n\n<p>On IOS, if you use {@link Titanium.UI#property-ATTRIBUTE_UNDERLINES_STYLE} or {@link Titanium.UI#property-ATTRIBUTE_STRIKETHROUGH_STYLE},\nyou must use one or more of these constants:</p>\n\n<ul>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_NONE}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_THICK}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_DOUBLE}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_PATTERN_SOLID}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_PATTERN_DOT}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_PATTERN_DASH}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_BY_WORD}</li>\n</ul>\n\n<p>These can be combined:</p>\n\n<pre><code>{\n    type: Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE,\n    value: Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE | Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH,\n    range: [0, 100]\n}\n</code></pre>\n\n<p>On IOS, if you use the {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION}, you must use one or more of\nthese constants:</p>\n\n<ul>\n<li>{@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_EMBEDDING}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_OVERRIDE}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_NATURAL}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT}</li>\n</ul>\n\n<p>These can also be combined the same way as the underline styles.</p>\n\n<p>On IOS, if you use the {@link Titanium.UI#property-ATTRIBUTE_SHADOW}, the <code>value</code> must be a JavaScript object containing\nany of the <code>offset</code>, <code>blurRadius</code> or <code>color</code> properties:</p>\n\n<pre><code>{\n    offset: {\n        width: 10,\n        height: 10\n    },\n    blurRadius: 10,\n    color: 'red'\n}\n</code></pre>\n\n<p>On IOS, if you use the {@link Titanium.UI#property-ATTRIBUTE_TEXT_EFFECT}, you must use the only supported iOS 7 constant\n{@link Titanium.UI#property-ATTRIBUTE_LETTERPRESS_STYLE}.</p>\n\n<p>On IOS, if you use the {@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK}, you must use one of\nthese constants:</p>\n\n<ul>\n<li>{@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK_BY_CLIPPING}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL}</li>\n<li>{@link Titanium.UI#property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE}</li>\n</ul>\n\n<p>These can also be combined the same way as the underline styles.</p> \n\n<p>This API can be assigned the following constants:<ul>\n <li> {@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_NONE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_THICK}\n <li> {@link Titanium.UI#property-ATTRIBUTE_UNDERLINE_STYLE_DOUBLE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_EMBEDDING}\n <li> {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_OVERRIDE}\n <li> {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_NATURAL}\n <li> {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT}\n <li> {@link Titanium.UI#property-ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT}\n <li> {@link Titanium.UI#property-ATTRIBUTE_LETTERPRESS_STYLE}\n</ul></p>"]},"id":"property-value"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":132471,"files":[{"filename":"titanium.js","href":"titanium.html#Attribute"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-iphone'\n        title='iPhone'>3.6.0</li><li class='platform-ipad'\n        title='iPad'>3.6.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>Attributes are added to the <a href=\"#!/api/Titanium.UI.AttributedString\" rel=\"Titanium.UI.AttributedString\" class=\"docClass\">Titanium.UI.AttributedString</a> object to create\nstyled text. The attribute is a JavaScript Object containing three properties:\n<code>type</code>, <code>value</code> and <code>range</code>.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.6.0'>Android 3.6.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.6.0'>iPhone 3.6.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.6.0'>iPad 3.6.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>An abstract datatype for specifying an attributed string attribute.</p>\n\n<p><p>Attributes are added to the <a href=\"#!/api/Titanium.UI.AttributedString\" rel=\"Titanium.UI.AttributedString\" class=\"docClass\">Titanium.UI.AttributedString</a> object to create\nstyled text. The attribute is a JavaScript Object containing three properties:\n<code>type</code>, <code>value</code> and <code>range</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-iphone'\n        title='iPhone'>3.6.0</li><li class='platform-ipad'\n        title='iPad'>3.6.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-range' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Attribute'>Attribute</span></div><a href='#!/api/Attribute-property-range' class='name not-expandable'>range</a><span> : Number[]</span></div><div class='description'><div class='short'><p>Attribute range.</p>\n\n</div><div class='long'><p>Attribute range.</p>\n\n<p><p>This specifies the range of text to apply the property to, as an array of two numbers: <code>[from, length]</code>.</p>\n\n</p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Attribute'>Attribute</span></div><a href='#!/api/Attribute-property-type' class='name not-expandable'>type</a><span> : Number</span></div><div class='description'><div class='short'><p>Attribute to apply to the text.</p>\n\n</div><div class='long'><p>Attribute to apply to the text.</p>\n\n<p><p>On Android, only the following constants are supported\n<a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_FONT\" rel=\"Titanium.UI-property-ATTRIBUTE_FONT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_FONT</a>, <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR</a>,\n<a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_BACKGROUND_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_BACKGROUND_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR</a>, <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_STRIKETHROUGH_STYLE</a>,\n<a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE</a>, <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINK\" rel=\"Titanium.UI-property-ATTRIBUTE_LINK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINK</a>, \n<a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_COLOR</a></p>\n\n\n\n\n<p>ON iOS, <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINK\" rel=\"Titanium.UI-property-ATTRIBUTE_LINK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINK</a> only supported on <a href=\"#!/api/Titanium.UI.TextArea\" rel=\"Titanium.UI.TextArea\" class=\"docClass\">Titanium.UI.TextArea</a>, with\neditable set to false and autoLink enabled.</p>\n\n\n<p></p>\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_FONT\" rel=\"Titanium.UI-property-ATTRIBUTE_FONT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_FONT</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_BACKGROUND_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_BACKGROUND_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_BACKGROUND_COLOR</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_STRIKETHROUGH_STYLE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINK\" rel=\"Titanium.UI-property-ATTRIBUTE_LINK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINK</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_COLOR</a>\n <li> <a href=\"#!/api/Titanium.UI.iOS-property-ATTRIBUTE_LIGATURE\" rel=\"Titanium.UI.iOS-property-ATTRIBUTE_LIGATURE\" class=\"docClass\">Titanium.UI.iOS.ATTRIBUTE_LIGATURE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_KERN\" rel=\"Titanium.UI-property-ATTRIBUTE_KERN\" class=\"docClass\">Titanium.UI.ATTRIBUTE_KERN</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_STROKE_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_STROKE_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_STROKE_COLOR</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_STROKE_WIDTH\" rel=\"Titanium.UI-property-ATTRIBUTE_STROKE_WIDTH\" class=\"docClass\">Titanium.UI.ATTRIBUTE_STROKE_WIDTH</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_SHADOW\" rel=\"Titanium.UI-property-ATTRIBUTE_SHADOW\" class=\"docClass\">Titanium.UI.ATTRIBUTE_SHADOW</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_TEXT_EFFECT\" rel=\"Titanium.UI-property-ATTRIBUTE_TEXT_EFFECT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_TEXT_EFFECT</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_BASELINE_OFFSET\" rel=\"Titanium.UI-property-ATTRIBUTE_BASELINE_OFFSET\" class=\"docClass\">Titanium.UI.ATTRIBUTE_BASELINE_OFFSET</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_STRIKETHROUGH_COLOR</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_OBLIQUENESS\" rel=\"Titanium.UI-property-ATTRIBUTE_OBLIQUENESS\" class=\"docClass\">Titanium.UI.ATTRIBUTE_OBLIQUENESS</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_EXPANSION\" rel=\"Titanium.UI-property-ATTRIBUTE_EXPANSION\" class=\"docClass\">Titanium.UI.ATTRIBUTE_EXPANSION</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK</a>\n</li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></li></ul></p>\n\n</p></div></div></div><div id='property-value' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Attribute'>Attribute</span></div><a href='#!/api/Attribute-property-value' class='name not-expandable'>value</a><span> : Number</span></div><div class='description'><div class='short'><p>Attribute value.</p>\n\n</div><div class='long'><p>Attribute value.</p>\n\n<p><p>The <code>value</code> parameter depends on the <code>type</code> parameter. For example, to\nuse the foreground color on the text you would use <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR</a>\nfor the <code>type</code> and a color value for the <code>value</code>:</p>\n\n\n\n\n<pre><code>{\n    type: <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" rel=\"Titanium.UI-property-ATTRIBUTE_FOREGROUND_COLOR\" class=\"docClass\">Titanium.UI.ATTRIBUTE_FOREGROUND_COLOR</a>,\n    value: '#DDD',\n    range: [0, 100]\n}\n</code></pre>\n\n\n\n\n<p>On IOS, if you use <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE</a> or <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_STRIKETHROUGH_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_STRIKETHROUGH_STYLE</a>,\nyou must use one or more of these constants:</p>\n\n\n\n\n<ul>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_NONE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_NONE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_NONE</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_THICK\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_THICK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_THICK</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_DOUBLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_DOUBLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_SOLID\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_SOLID\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_SOLID</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DOT\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DOT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DOT</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH_DOT_DOT</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_BY_WORD\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_BY_WORD\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_BY_WORD</a></li>\n</ul>\n\n\n\n\n<p>These can be combined:</p>\n\n\n\n\n<pre><code>{\n    type: <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINES_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINES_STYLE</a>,\n    value: <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE</a> | <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_PATTERN_DASH\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_PATTERN_DASH</a>,\n    range: [0, 100]\n}\n</code></pre>\n\n\n\n\n<p>On IOS, if you use the <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION</a>, you must use one or more of\nthese constants:</p>\n\n\n\n\n<ul>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_EMBEDDING\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_EMBEDDING\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_OVERRIDE\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_OVERRIDE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_NATURAL\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_NATURAL\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_NATURAL</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT</a></li>\n</ul>\n\n\n\n\n<p>These can also be combined the same way as the underline styles.</p>\n\n\n\n\n<p>On IOS, if you use the <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_SHADOW\" rel=\"Titanium.UI-property-ATTRIBUTE_SHADOW\" class=\"docClass\">Titanium.UI.ATTRIBUTE_SHADOW</a>, the <code>value</code> must be a JavaScript object containing\nany of the <code>offset</code>, <code>blurRadius</code> or <code>color</code> properties:</p>\n\n\n\n\n<pre><code>{\n    offset: {\n        width: 10,\n        height: 10\n    },\n    blurRadius: 10,\n    color: 'red'\n}\n</code></pre>\n\n\n\n\n<p>On IOS, if you use the <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_TEXT_EFFECT\" rel=\"Titanium.UI-property-ATTRIBUTE_TEXT_EFFECT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_TEXT_EFFECT</a>, you must use the only supported iOS 7 constant\n<a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LETTERPRESS_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_LETTERPRESS_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LETTERPRESS_STYLE</a>.</p>\n\n\n\n\n<p>On IOS, if you use the <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK</a>, you must use one of\nthese constants:</p>\n\n\n\n\n<ul>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_WORD_WRAPPING</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_CHAR_WRAPPING</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_CLIPPING\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_CLIPPING\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_CLIPPING</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_HEAD</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_TAIL</a></li>\n<li><a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE\" rel=\"Titanium.UI-property-ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LINE_BREAK_BY_TRUNCATING_MIDDLE</a></li>\n</ul>\n\n\n\n\n<p>These can also be combined the same way as the underline styles.</p>\n\n\n<p></p>\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_NONE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_NONE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_NONE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_SINGLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_SINGLE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_THICK\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_THICK\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_THICK</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_DOUBLE\" rel=\"Titanium.UI-property-ATTRIBUTE_UNDERLINE_STYLE_DOUBLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_UNDERLINE_STYLE_DOUBLE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_EMBEDDING\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_EMBEDDING\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_EMBEDDING</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_OVERRIDE\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_OVERRIDE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_OVERRIDE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_NATURAL\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_NATURAL\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_NATURAL</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_LEFT_TO_RIGHT</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT\" rel=\"Titanium.UI-property-ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT\" class=\"docClass\">Titanium.UI.ATTRIBUTE_WRITING_DIRECTION_RIGHT_TO_LEFT</a>\n <li> <a href=\"#!/api/Titanium.UI-property-ATTRIBUTE_LETTERPRESS_STYLE\" rel=\"Titanium.UI-property-ATTRIBUTE_LETTERPRESS_STYLE\" class=\"docClass\">Titanium.UI.ATTRIBUTE_LETTERPRESS_STYLE</a>\n</li></li></li></li></li></li></li></li></li></li></ul></p>\n\n</p></div></div></div></div></div></div></div>"});