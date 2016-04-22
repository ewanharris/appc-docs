Ext.data.JsonP['Global_JSON']({"tagname":"class","name":"Global.JSON","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8","windowsphone 4.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Global/JSON/JSON.yml"},"private":null,"id":"class-Global.JSON","members":{"cfg":[],"property":[],"method":[{"name":"parse","tagname":"method","owner":"Global.JSON","meta":{"description":["<p>The <code>parse</code> method throws a SyntaxError exception if the text cannot be parsed.</p>\n\n<p>The optional reviver parameter is a function that can filter and\ntransform the results. It receives each of the keys and values,\nand its return value is used instead of the original value.\nIf it returns what it received, then the structure is not modified.\nIf it returns undefined then the member is deleted.</p> \n<h3>Examples</h3>\n<h4>Parse with Reviver Function</h4>\n<pre><code>The following example parses the text, converting  values that look like ISO date strings into Date objects.\nmyData = JSON.parse(text, function (key, value) { var a; if (typeof value === 'string') { a = /^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:\\.\\d*)?)Z$/.exec(value); if (a) { return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6])); } } return value; });</code></pre>"]},"id":"method-parse"},{"name":"stringify","tagname":"method","owner":"Global.JSON","meta":{"description":["<p>When an object value is found, if the object contains a toJSON\nmethod, its toJSON method is called and the result is\nstringified. A toJSON method does not serialize: it returns the\nvalue represented by the name/value pair that should be serialized,\nor undefined if nothing should be serialized. The toJSON method\nis passed the key associated with the value, and <code>this</code> is\nbound to the value.</p>\n\n<p>For example, this would serialize Dates as ISO strings.</p>\n\n<pre><code>Date.prototype.toJSON = function (key) {\n    function f(n) {\n        // Format integers to have at least two digits.\n        return n &lt; 10 ? '0' + n : n;\n    }\n\n    return this.getUTCFullYear()   + '-' +\n         f(this.getUTCMonth() + 1) + '-' +\n         f(this.getUTCDate())      + 'T' +\n         f(this.getUTCHours())     + ':' +\n         f(this.getUTCMinutes())   + ':' +\n         f(this.getUTCSeconds())   + 'Z';\n};\n</code></pre>\n\n<p>You can provide an optional replacer function. It is passed the\nkey and value of each member, with <code>this</code> bound to the containing\nobject. The value that is returned from your function is\nserialized. If your function returns undefined, then the member will\nbe excluded from the serialization.</p>\n\n<p>If the replacer parameter is an array of strings, then it is\nused to select the members to be serialized. It filters the results\nsuch that only members with keys listed in the replacer array are\nstringified.</p>\n\n<p>Values that do not have JSON representations, such as undefined or\nfunctions, will not be serialized. Such values in objects are\ndropped; in arrays they are replaced with null. You can use\na replacer function to replace those with JSON values.</p>\n\n<p>JSON.stringify(undefined) returns undefined.</p>\n\n<p>The optional space parameter produces a stringification of the\nvalue that is filled with line breaks and indentation to make it\neasier to read.</p>\n\n<p>If the space parameter is a non-empty string, then that string is\nused for indentation. If the space parameter is a number, then\neach level is indented by the specified number of spaces. </p> \n<h3>Examples</h3>\n<h4>Formatting with a Replacer Function</h4>\n<p>The following example produces a readable version of a Titanium event object, \nomitting the <code>source</code> and <code>type</code> properties and adding whitespace for readability:</p>\n\n<pre><code>JSON.stringify(evt, function(key, value) {\n    if(key === 'source' || key === 'type') {\n        return undefined;\n    } else {\n        return value;\n    }\n}, 2));\n</code></pre>"]},"id":"method-stringify"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":24585,"files":[{"filename":"titanium.js","href":"titanium.html#Global-JSON"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Global JSON object providing the <a href=\"#!/api/Global.JSON-method-parse\" rel=\"Global.JSON-method-parse\" class=\"docClass\">parse</a> and <a href=\"#!/api/Global.JSON-method-stringify\" rel=\"Global.JSON-method-stringify\" class=\"docClass\">stringify</a> methods.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-parse' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.JSON'>Global.JSON</span></div><a href='#!/api/Global.JSON-method-parse' class='name expandable'>parse</a>( <span class='pre'>text, reviver</span> ) : Object</div><div class='description'><div class='short'>Parses a JSON text to produce an object or array. ...</div><div class='long'><p>Parses a JSON text to produce an object or array.</p>\n\n<p><p>The <code>parse</code> method throws a SyntaxError exception if the text cannot be parsed.</p>\n\n\n\n\n<p>The optional reviver parameter is a function that can filter and\ntransform the results. It receives each of the keys and values,\nand its return value is used instead of the original value.\nIf it returns what it received, then the structure is not modified.\nIf it returns undefined then the member is deleted.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Parse with Reviver Function</h4>\n\n\n<pre><code>The following example parses the text, converting  values that look like ISO date strings into Date objects.\nmyData = JSON.parse(text, function (key, value) { var a; if (typeof value === 'string') { a = /^(\\d{4})-(\\d{2})-(\\d{2})T(\\d{2}):(\\d{2}):(\\d{2}(?:\\.\\d*)?)Z$/.exec(value); if (a) { return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6])); } } return value; });</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>text</span> : String<div class='sub-desc'><p>JSON text to parse.</p>\n\n</div></li><li><span class='pre'>reviver</span> : Callback<div class='sub-desc'><p>Function to filter and transform the results.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stringify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global.JSON'>Global.JSON</span></div><a href='#!/api/Global.JSON-method-stringify' class='name expandable'>stringify</a>( <span class='pre'>value, [replacer], [space]</span> ) : String</div><div class='description'><div class='short'>Produces a JSON text from a JavaScript value. ...</div><div class='long'><p>Produces a JSON text from a JavaScript value.</p>\n\n<p><p>When an object value is found, if the object contains a toJSON\nmethod, its toJSON method is called and the result is\nstringified. A toJSON method does not serialize: it returns the\nvalue represented by the name/value pair that should be serialized,\nor undefined if nothing should be serialized. The toJSON method\nis passed the key associated with the value, and <code>this</code> is\nbound to the value.</p>\n\n\n\n\n<p>For example, this would serialize Dates as ISO strings.</p>\n\n\n\n\n<pre><code>Date.prototype.toJSON = function (key) {\n    function f(n) {\n        // Format integers to have at least two digits.\n        return n &lt; 10 ? '0' + n : n;\n    }\n\n    return this.getUTCFullYear()   + '-' +\n         f(this.getUTCMonth() + 1) + '-' +\n         f(this.getUTCDate())      + 'T' +\n         f(this.getUTCHours())     + ':' +\n         f(this.getUTCMinutes())   + ':' +\n         f(this.getUTCSeconds())   + 'Z';\n};\n</code></pre>\n\n\n\n\n<p>You can provide an optional replacer function. It is passed the\nkey and value of each member, with <code>this</code> bound to the containing\nobject. The value that is returned from your function is\nserialized. If your function returns undefined, then the member will\nbe excluded from the serialization.</p>\n\n\n\n\n<p>If the replacer parameter is an array of strings, then it is\nused to select the members to be serialized. It filters the results\nsuch that only members with keys listed in the replacer array are\nstringified.</p>\n\n\n\n\n<p>Values that do not have JSON representations, such as undefined or\nfunctions, will not be serialized. Such values in objects are\ndropped; in arrays they are replaced with null. You can use\na replacer function to replace those with JSON values.</p>\n\n\n\n\n<p>JSON.stringify(undefined) returns undefined.</p>\n\n\n\n\n<p>The optional space parameter produces a stringification of the\nvalue that is filled with line breaks and indentation to make it\neasier to read.</p>\n\n\n\n\n<p>If the space parameter is a non-empty string, then that string is\nused for indentation. If the space parameter is a number, then\neach level is indented by the specified number of spaces. </p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Formatting with a Replacer Function</h4>\n\n\n<p>The following example produces a readable version of a Titanium event object, \nomitting the <code>source</code> and <code>type</code> properties and adding whitespace for readability:</p>\n\n\n\n\n<pre><code>JSON.stringify(evt, function(key, value) {\n    if(key === 'source' || key === 'type') {\n        return undefined;\n    } else {\n        return value;\n    }\n}, 2));\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>Any JavaScript value, usually an object or array.</p>\n\n</div></li><li><span class='pre'>replacer</span> : Callback/Array&lt;String&gt; (optional)<div class='sub-desc'><p>Determines how object values are stringified for objects. See main text for usage.</p>\n\n</div></li><li><span class='pre'>space</span> : Number/String (optional)<div class='sub-desc'><p>Specifies how nested structures are indented. If it is a number, it specifies the number of spaces to indent at each level. If it is a string (such as '\\t' or '&amp;nbsp;'), it specifies the characters used to indent at each level.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});