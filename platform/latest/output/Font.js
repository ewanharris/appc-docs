Ext.data.JsonP['Font']({"tagname":"class","name":"Font","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Font.yml","description":["<p>Available fonts vary by platform and device. On iOS, font support depends on the OS\nversion. On Android, font support depends on the OS version <strong>and</strong> device manufacturer.</p>\n\n<p>Note that to update the font used by a UI component, you must set the object's <code>font</code>\nproperty, like this:</p>\n\n<pre><code>myLabel.font = {\n    fontSize: 24,\n    fontFamily: myFontName\n}\n</code></pre>\n\n<p>Changing the <code>font</code> object after assigning it does not reliably affect the underlying UI\ncomponent:</p>\n\n<pre><code>// This may not work as expected\nmyLabel.font.fontSize = 24;\n</code></pre>\n\n<h4>Custom Fonts</h4>\n\n<p>Custom TrueType (.ttf) or OpenType (.otf) fonts may be embedded in an application on iOS and\nAndroid. (Note that you must have redistribution rights on the fonts you ship.)</p>\n\n<p>In Alloy applications, custom fonts must be placed in a \"fonts\" folder in the platform-specific assets folder (<strong>app/assets/android/fonts</strong>, for example).\nIn classic Titanium applications, custom fonts must be placed in the <strong>Resources/fonts</strong> directory.</p>\n\n<p>For an example of using custom fonts, see <a href=\"http://docs.appcelerator.com/platform/#!/guide/Custom_Fonts\">Custom Fonts</a>.</p>"]},"private":null,"id":"class-Font","members":{"cfg":[],"property":[{"name":"fontFamily","tagname":"property","owner":"Font","meta":{"description":["<p>This can be the name of a font family (for example, \"Helvetica\" or \"DroidSans\") the base\nname of the font file (for example, \"Droid_sans.ttf\"), or the font's PostScript name. The\nvalue you specify also depends on the platform you are targeting.</p>\n\n<ul>\n<li><p>On Android specify the font file name without its file extension (.otf or .ttf).\nFor example, if you were using the \"Burnstown Dam\" font whose file name is\nnamed <code>burnstown_dam.ttf</code>, then you specify <code>fontFamily: 'burnstown_dam'</code>.</p></li>\n<li><p>On iOS you use the font's <a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Custom_Fonts-section-29004935_CustomFonts-Findingafont%27sPostScriptname\">PostScript name</a>.\nFor example, the PostScript name for Burnstown Dam is \"BurnstownDam-Regular so you'd specify: <code>fontFamily: 'BurnstownDam-Regular'</code>.</p></li>\n</ul>\n\n<p>For an example of using a custom font, see <a href=\"http://docs.appcelerator.com/platform/#!/guide/Custom_Fonts\">Custom Fonts</a>.</p>\n\n<p>Notes:</p>\n\n<ul>\n<li>Available fonts differ by platform.</li>\n<li>If the requested family name does not match an existing font, the default font family is used.</li>\n<li>On Android, the generic names \"sans-serif,\" \"serif,\" and \"monospace\" (or \"monospaced\")\nare mapped to system fonts. On iOS, only \"monospace\" is supported.</li>\n</ul>"]},"id":"property-fontFamily"},{"name":"fontSize","tagname":"property","owner":"Font","meta":{"description":["<p>On iOS and Mobile Web, font sizes are always specified in typographical points\n(not to be confused with the Apple \"points\" used for other measurements on iOS).</p>\n\n<p>On Android the default font sizing is in pixels, but the size can also\ninclude a unit specifier. Supported units and their specifiers are:</p>\n\n<ul>\n<li>pixels (px)</li>\n<li>typographical points (pt)</li>\n<li>density-independent pixels (dp or dip)</li>\n<li>millimeters (mm)</li>\n<li>inches (in)</li>\n</ul>\n\n<p>For example, \"16dp\" specifies a size of 16 density-independent pixels.</p>\n\n<p>iOS ignores any unit specifier after the size value.</p>"]},"id":"property-fontSize"},{"name":"fontStyle","tagname":"property","owner":"Font","meta":{"platform":["iphone 0.8","ipad 0.8"]},"id":"property-fontStyle"},{"name":"fontWeight","tagname":"property","owner":"Font","meta":{"description":["<p>The \"semibold\" weight is recognized on iOS only.</p>"]},"id":"property-fontWeight"},{"name":"textStyle","tagname":"property","owner":"Font","meta":{"description":["<p>Use one of the TEXT_STYLE constants from {@link Titanium.UI} to set the font to a predefined system font.\nWhen this property is set to a valid value, all other font properties are ignored. Avaliable on iOS 7 and above.</p> \n\n<p>This API can be assigned the following constants:<ul>\n <li> {@link Titanium.UI#property-TEXT_STYLE_HEADLINE}\n <li> {@link Titanium.UI#property-TEXT_STYLE_SUBHEADLINE}\n <li> {@link Titanium.UI#property-TEXT_STYLE_BODY}\n <li> {@link Titanium.UI#property-TEXT_STYLE_FOOTNOTE}\n <li> {@link Titanium.UI#property-TEXT_STYLE_CAPTION1}\n <li> {@link Titanium.UI#property-TEXT_STYLE_CAPTION2}\n</ul></p>"],"platform":["iphone 3.2.0","ipad 3.2.0"]},"id":"property-textStyle"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":141342,"files":[{"filename":"titanium.js","href":"titanium.html#Font"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"description":"<p><p>Available fonts vary by platform and device. On iOS, font support depends on the OS\nversion. On Android, font support depends on the OS version <strong>and</strong> device manufacturer.</p>\n\n\n\n\n<p>Note that to update the font used by a UI component, you must set the object's <code>font</code>\nproperty, like this:</p>\n\n\n\n\n<pre><code>myLabel.font = {\n    fontSize: 24,\n    fontFamily: myFontName\n}\n</code></pre>\n\n\n\n\n<p>Changing the <code>font</code> object after assigning it does not reliably affect the underlying UI\ncomponent:</p>\n\n\n\n\n<pre><code>// This may not work as expected\nmyLabel.font.fontSize = 24;\n</code></pre>\n\n\n\n\n<h4>Custom Fonts</h4>\n\n\n\n\n<p>Custom TrueType (.ttf) or OpenType (.otf) fonts may be embedded in an application on iOS and\nAndroid. (Note that you must have redistribution rights on the fonts you ship.)</p>\n\n\n\n\n<p>In Alloy applications, custom fonts must be placed in a \"fonts\" folder in the platform-specific assets folder (<strong>app/assets/android/fonts</strong>, for example).\nIn classic Titanium applications, custom fonts must be placed in the <strong>Resources/fonts</strong> directory.</p>\n\n\n\n\n<p>For an example of using custom fonts, see <a href=\"http://docs.appcelerator.com/platform/#!/guide/Custom_Fonts\">Custom Fonts</a>.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>An abstract datatype for specifying a text font.</p>\n\n<p><p>Available fonts vary by platform and device. On iOS, font support depends on the OS\nversion. On Android, font support depends on the OS version <strong>and</strong> device manufacturer.</p>\n\n\n\n\n<p>Note that to update the font used by a UI component, you must set the object's <code>font</code>\nproperty, like this:</p>\n\n\n\n\n<pre><code>myLabel.font = {\n    fontSize: 24,\n    fontFamily: myFontName\n}\n</code></pre>\n\n\n\n\n<p>Changing the <code>font</code> object after assigning it does not reliably affect the underlying UI\ncomponent:</p>\n\n\n\n\n<pre><code>// This may not work as expected\nmyLabel.font.fontSize = 24;\n</code></pre>\n\n\n\n\n<h4>Custom Fonts</h4>\n\n\n\n\n<p>Custom TrueType (.ttf) or OpenType (.otf) fonts may be embedded in an application on iOS and\nAndroid. (Note that you must have redistribution rights on the fonts you ship.)</p>\n\n\n\n\n<p>In Alloy applications, custom fonts must be placed in a \"fonts\" folder in the platform-specific assets folder (<strong>app/assets/android/fonts</strong>, for example).\nIn classic Titanium applications, custom fonts must be placed in the <strong>Resources/fonts</strong> directory.</p>\n\n\n\n\n<p>For an example of using custom fonts, see <a href=\"http://docs.appcelerator.com/platform/#!/guide/Custom_Fonts\">Custom Fonts</a>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fontFamily' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Font'>Font</span></div><a href='#!/api/Font-property-fontFamily' class='name expandable'>fontFamily</a><span> : String</span></div><div class='description'><div class='short'>Specifies the font family or specific font to use. ...</div><div class='long'><p>Specifies the font family or specific font to use.</p>\n\n<p><p>This can be the name of a font family (for example, \"Helvetica\" or \"DroidSans\") the base\nname of the font file (for example, \"Droid_sans.ttf\"), or the font's PostScript name. The\nvalue you specify also depends on the platform you are targeting.</p>\n\n\n\n\n<ul>\n<li><p>On Android specify the font file name without its file extension (.otf or .ttf).\nFor example, if you were using the \"Burnstown Dam\" font whose file name is\nnamed <code>burnstown_dam.ttf</code>, then you specify <code>fontFamily: 'burnstown_dam'</code>.</p></li>\n<li><p>On iOS you use the font's <a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Custom_Fonts-section-29004935_CustomFonts-Findingafont%27sPostScriptname\">PostScript name</a>.\nFor example, the PostScript name for Burnstown Dam is \"BurnstownDam-Regular so you'd specify: <code>fontFamily: 'BurnstownDam-Regular'</code>.</p></li>\n</ul>\n\n\n\n\n<p>For an example of using a custom font, see <a href=\"http://docs.appcelerator.com/platform/#!/guide/Custom_Fonts\">Custom Fonts</a>.</p>\n\n\n\n\n<p>Notes:</p>\n\n\n\n\n<ul>\n<li>Available fonts differ by platform.</li>\n<li>If the requested family name does not match an existing font, the default font family is used.</li>\n<li>On Android, the generic names \"sans-serif,\" \"serif,\" and \"monospace\" (or \"monospaced\")\nare mapped to system fonts. On iOS, only \"monospace\" is supported.</li>\n</ul>\n\n</p><p>Default: Uses the default system font.</p></div></div></div><div id='property-fontSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Font'>Font</span></div><a href='#!/api/Font-property-fontSize' class='name expandable'>fontSize</a><span> : Number/String</span></div><div class='description'><div class='short'>Font size, in platform-dependent units. ...</div><div class='long'><p>Font size, in platform-dependent units.</p>\n\n<p><p>On iOS and Mobile Web, font sizes are always specified in typographical points\n(not to be confused with the Apple \"points\" used for other measurements on iOS).</p>\n\n\n\n\n<p>On Android the default font sizing is in pixels, but the size can also\ninclude a unit specifier. Supported units and their specifiers are:</p>\n\n\n\n\n<ul>\n<li>pixels (px)</li>\n<li>typographical points (pt)</li>\n<li>density-independent pixels (dp or dip)</li>\n<li>millimeters (mm)</li>\n<li>inches (in)</li>\n</ul>\n\n\n\n\n<p>For example, \"16dp\" specifies a size of 16 density-independent pixels.</p>\n\n\n\n\n<p>iOS ignores any unit specifier after the size value.</p>\n\n</p><p>Default: 15px</p></div></div></div><div id='property-fontStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Font'>Font</span></div><a href='#!/api/Font-property-fontStyle' class='name expandable'>fontStyle</a><span> : String</span></div><div class='description'><div class='short'>Font style. ...</div><div class='long'><p>Font style. Valid values are \"italic\" or \"normal\".</p>\n\n<p>Default: normal</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li></ul></div></div></div><div id='property-fontWeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Font'>Font</span></div><a href='#!/api/Font-property-fontWeight' class='name expandable'>fontWeight</a><span> : String</span></div><div class='description'><div class='short'>Font weight. ...</div><div class='long'><p>Font weight. Valid values are \"bold\" or \"normal\".</p>\n\n<p><p>The \"semibold\" weight is recognized on iOS only.</p>\n\n</p><p>Default: normal</p></div></div></div><div id='property-textStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Font'>Font</span></div><a href='#!/api/Font-property-textStyle' class='name expandable'>textStyle</a><span> : String</span></div><div class='description'><div class='short'>The text style for the font. ...</div><div class='long'><p>The text style for the font.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 7.0 and later \n</p>\n\n<p><p>Use one of the TEXT_STYLE constants from <a href=\"#!/api/Titanium.UI\" rel=\"Titanium.UI\" class=\"docClass\">Titanium.UI</a> to set the font to a predefined system font.\nWhen this property is set to a valid value, all other font properties are ignored. Avaliable on iOS 7 and above.</p>\n\n\n<p></p>\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI-property-TEXT_STYLE_HEADLINE\" rel=\"Titanium.UI-property-TEXT_STYLE_HEADLINE\" class=\"docClass\">Titanium.UI.TEXT_STYLE_HEADLINE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-TEXT_STYLE_SUBHEADLINE\" rel=\"Titanium.UI-property-TEXT_STYLE_SUBHEADLINE\" class=\"docClass\">Titanium.UI.TEXT_STYLE_SUBHEADLINE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-TEXT_STYLE_BODY\" rel=\"Titanium.UI-property-TEXT_STYLE_BODY\" class=\"docClass\">Titanium.UI.TEXT_STYLE_BODY</a>\n <li> <a href=\"#!/api/Titanium.UI-property-TEXT_STYLE_FOOTNOTE\" rel=\"Titanium.UI-property-TEXT_STYLE_FOOTNOTE\" class=\"docClass\">Titanium.UI.TEXT_STYLE_FOOTNOTE</a>\n <li> <a href=\"#!/api/Titanium.UI-property-TEXT_STYLE_CAPTION1\" rel=\"Titanium.UI-property-TEXT_STYLE_CAPTION1\" class=\"docClass\">Titanium.UI.TEXT_STYLE_CAPTION1</a>\n <li> <a href=\"#!/api/Titanium.UI-property-TEXT_STYLE_CAPTION2\" rel=\"Titanium.UI-property-TEXT_STYLE_CAPTION2\" class=\"docClass\">Titanium.UI.TEXT_STYLE_CAPTION2</a>\n</li></li></li></li></li></li></ul></p>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li></ul></div></div></div></div></div></div></div>"});