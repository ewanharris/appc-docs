Ext.data.JsonP['Global']({"tagname":"class","name":"Global","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8","windowsphone 4.1.0"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Global/Global.yml","description":["<p>Titanium provides a number of global built-in objects, detailed below. </p>\n\n<h4>JSON</h4>\n\n<p>Titanium provides a built-in {@link Global.JSON JSON} object two functions, <code>parse</code> and <code>stringify</code>.</p>\n\n<h4>String Utilities</h4>\n\n<p>Titanium includes several extra utility functions for formatting text, attached to the\nglobal {@link Global.String String} object.</p>\n\n<h4>console</h4>\n\n<p>Titanium provides {@link Global.console console} support familiar to many javascript developers\nfor logging at the toplevel, in addition to the {@link Titanium.API} logging facilities.</p>\n\n<h4>Timers</h4>\n\n<p>Titanium has built-in support for one-off and repeating timers:</p>\n\n<ul>\n<li><p>Use {@link Global#method-setTimeout setTimeout} to start a one-off timer.</p></li>\n<li><p>Use {@link Global#method-setInterval setInterval} to start a repeating timer.</p></li>\n</ul>\n\n<h4>Alert</h4>\n\n<p>Titanium has a built-in convenience function {@link Global#method-alert alert} which can be used as an alias \nfor the {@link Titanium.UI.AlertDialog AlertDialog} module.</p>\n\n<h4>Locale</h4>\n\n<p>The <code>L</code> macro can also be used as an alias for the {@link Titanium.Locale#method-getString} method.</p>"]},"private":null,"id":"class-Global","members":{"cfg":[],"property":[],"method":[{"name":"L","tagname":"method","owner":"Global","meta":{},"id":"method-L"},{"name":"alert","tagname":"method","owner":"Global","meta":{"description":["<p>This function is a shortcut for creating and displaying an \n{@link Titanium.UI.AlertDialog alert dialog}. For example, the following two statements produce \nthe same result.</p>\n\n<pre><code>alert('Danger, Will Robinson!');\n\nTi.UI.createAlertDialog({ message: 'Danger, Will Robinson!' }).show();\n</code></pre>\n\n<p>Note that unlike a web browser-based version of <code>alert</code>, the method is asynchronous. However, \nonly one alert dialog will be visible and modal at a time.</p>\n\n<p>Be aware that this method may be removed in the future.</p>"]},"id":"method-alert"},{"name":"clearInterval","tagname":"method","owner":"Global","meta":{},"id":"method-clearInterval"},{"name":"clearTimeout","tagname":"method","owner":"Global","meta":{},"id":"method-clearTimeout"},{"name":"decodeURIComponent","tagname":"method","owner":"Global","meta":{"description":["<p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/encodeURIComponent\">encodeURIComponent</a> \nand <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/decodeURIComponent\">decodeURIComponent</a>.</p>"],"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"]},"id":"method-decodeURIComponent"},{"name":"encodeURIComponent","tagname":"method","owner":"Global","meta":{"description":["<p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/encodeURIComponent\">encodeURIComponent</a> \nand <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/decodeURIComponent\">decodeURIComponent</a>.</p>"],"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"]},"id":"method-encodeURIComponent"},{"name":"require","tagname":"method","owner":"Global","meta":{"description":["<p>The <code>require</code> function takes a module identifier as its argument and returns an object with \nreferences to the module's exported symbols.</p>\n\n<h4>Native Titanium Module</h4>\n\n<p>To load a native Titanium module:</p>\n\n<ol>\n<li>Install the module to the project or copy it to the Titanium SDK home directory.</li>\n<li>Add the module as a dependency to the project by modifying the <code>modules</code> section of the <code>tiapp.xml</code> file.</li>\n<li>Initialize the module with the <code>require</code> method by passing the module ID to the method.</li>\n</ol>\n\n<p>For detailed instructions, refer to\n<a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Using_a_Module\">Using a Module</a>.</p>\n\n<h4>CommonJS Module</h4>\n\n<p>To load a local CommonJS module, place the CommonJS module in the <code>Resources</code> directory of\nyour project. Pass the <code>require</code> method the path to the file without the <code>Resources</code>\ndirectory, platform-specific directory and the <code>.js</code> extension.</p>\n\n<p>Note that the appropriate <em>platform-specific</em> <code>Resources</code> subdirectory is merged into the \nmain <code>Resources</code> directory at build time. For example, suppose the following files exist.</p>\n\n<ul>\n<li><code>Resources/app.js</code></li>\n<li><code>Resources/ui/MainWindow.js</code></li>\n<li><code>Resources/iphone/ui/TaskWindow.js</code></li>\n<li><code>Resources/android/ui/TaskWindow.js</code></li>\n</ul>\n\n<p>The appropriate <code>TaskWindow.js</code> file is moved into the <code>Resources/ui</code> directory of the \nbuilt application. To include both the MainWindow module and the platform-specific \nTaskWindow module from any JavaScript file in the project:</p>\n\n<pre><code> // load main window module from ui subdirectory\n var mainWindow = require('ui/MainWindow');\n\n // load platform-specific task window module\n var taskWindow = require('ui/TaskWindow'); \n</code></pre>\n\n<p>For more information, see the Official CommonJS website about \n<a href=\"http://wiki.commonjs.org/wiki/Modules/1.1\">CommonJS Modules/1.1 Specification</a>.</p>\n\n<h4>Alloy</h4>\n\n<p>For Alloy, place the CommonJS modules in the <code>app/lib</code> directory of your Alloy project,\nthen load the module with the <code>require</code> method without the <code>app/lib</code> path and <code>.js</code>\nextension.</p>\n\n<p>Starting with Alloy 1.5.0, you can add platform-specific directories to the <code>app/lib</code> directory.\nDo not include the platform-specific directory when referencing the CommonJS module.</p>\n\n<p>For example, a module file <code>app/lib/android/myModule/module.js</code> may be loaded by\n<code>app/controllers/index.js</code> using:</p>\n\n<pre><code>require('myModule/module');\n</code></pre>\n\n<h4>Android</h4>\n\n<p>Additionally, on Android, an absolute path to a module may be specified using a path\nseparator (<code>/</code>) at the beginning of the path.</p>\n\n<p>For example, a module file <code>Resources/myModule/module.js</code> may be required by\n<code>Resources/example/example.js</code> using either of the following:</p>\n\n<pre><code>require('../myModule/module')\nrequire ('/myModule/module')\n</code></pre> \n<h3>Examples</h3>\n<h4>Require a Native Module</h4>\n<p>To load a native module with the ID <code>com.mycompany.module</code>:</p>\n\n<pre><code>var module = require('com.mycompany.module');\n</code></pre><h4>Require a JavaScript Module</h4>\n<p><code>myModule.js</code>:</p>\n\n<pre><code>exports.message = \"hello world\";\n</code></pre>\n\n<p><code>app.js</code>:</p>\n\n<pre><code>var myModule = require('myModule');\nalert(myModule.message);\n</code></pre>"]},"id":"method-require"},{"name":"setInterval","tagname":"method","owner":"Global","meta":{"description":["<p>Note that although the interval is not guaranteed to be exact, the interval between calls \nwill be no less than the specified delay.</p>\n\n<p>Returns a unique timer identifier that can be passed to {@link Global#method-clearInterval clearInterval} \nto cancel this timer.</p>\n\n<p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/DOM/window.setInterval\">setInterval</a>.</p> \n<h3>Examples</h3>\n<h4>Update a label once every second, and stop at 10 seconds</h4>\n<pre><code>var count = 0;\nvar timer = setInterval(function(){\n    count++;\n    label.text = \"count: \" + count;\n    if (count == 10) {\n        clearInterval(timer);\n    }\n}, 1000);</code></pre>"]},"id":"method-setInterval"},{"name":"setTimeout","tagname":"method","owner":"Global","meta":{"description":["<p>Note that although the timeout is not guaranteed to be exact, the delay before the\nfunction is invoked will be no less than the specified delay.</p>\n\n<p>Returns a unique timer identifier that can be passed to {@link Global#method-clearTimeout clearTimeout} \nto cancel this timer.</p>\n\n<p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/DOM/window.setTimeout\">setTimeout</a>.</p> \n<h3>Examples</h3>\n<h4>Execute a function in 500 milliseconds</h4>\n<pre><code>setTimeout(function(){\n    Ti.API.debug('Called using setTimeout');\n}, 500);</code></pre>"]},"id":"method-setTimeout"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":24248,"files":[{"filename":"titanium.js","href":"titanium.html#Global"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul>","editurl":null,"description":"<p><p>Titanium provides a number of global built-in objects, detailed below. </p>\n\n\n\n\n<h4>JSON</h4>\n\n\n\n\n<p>Titanium provides a built-in <a href=\"#!/api/Global.JSON\" rel=\"Global.JSON\" class=\"docClass\">JSON</a> object two functions, <code>parse</code> and <code>stringify</code>.</p>\n\n\n\n\n<h4>String Utilities</h4>\n\n\n\n\n<p>Titanium includes several extra utility functions for formatting text, attached to the\nglobal <a href=\"#!/api/Global.String\" rel=\"Global.String\" class=\"docClass\">String</a> object.</p>\n\n\n\n\n<h4>console</h4>\n\n\n\n\n<p>Titanium provides <a href=\"#!/api/Global.console\" rel=\"Global.console\" class=\"docClass\">console</a> support familiar to many javascript developers\nfor logging at the toplevel, in addition to the <a href=\"#!/api/Titanium.API\" rel=\"Titanium.API\" class=\"docClass\">Titanium.API</a> logging facilities.</p>\n\n\n\n\n<h4>Timers</h4>\n\n\n\n\n<p>Titanium has built-in support for one-off and repeating timers:</p>\n\n\n\n\n<ul>\n<li><p>Use <a href=\"#!/api/Global-method-setTimeout\" rel=\"Global-method-setTimeout\" class=\"docClass\">setTimeout</a> to start a one-off timer.</p></li>\n<li><p>Use <a href=\"#!/api/Global-method-setInterval\" rel=\"Global-method-setInterval\" class=\"docClass\">setInterval</a> to start a repeating timer.</p></li>\n</ul>\n\n\n\n\n<h4>Alert</h4>\n\n\n\n\n<p>Titanium has a built-in convenience function <a href=\"#!/api/Global-method-alert\" rel=\"Global-method-alert\" class=\"docClass\">alert</a> which can be used as an alias \nfor the <a href=\"#!/api/Titanium.UI.AlertDialog\" rel=\"Titanium.UI.AlertDialog\" class=\"docClass\">AlertDialog</a> module.</p>\n\n\n\n\n<h4>Locale</h4>\n\n\n\n\n<p>The <code>L</code> macro can also be used as an alias for the <a href=\"#!/api/Titanium.Locale-method-getString\" rel=\"Titanium.Locale-method-getString\" class=\"docClass\">Titanium.Locale.getString</a> method.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li><li class='platform-windowsphone' title='Windows Phone since Titanium SDK 4.1.0'>Windows Phone 4.1.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>The APIs that reside in the global scope, which may be called without a namespace prefix.</p>\n\n<p><p>Titanium provides a number of global built-in objects, detailed below. </p>\n\n\n\n\n<h4>JSON</h4>\n\n\n\n\n<p>Titanium provides a built-in <a href=\"#!/api/Global.JSON\" rel=\"Global.JSON\" class=\"docClass\">JSON</a> object two functions, <code>parse</code> and <code>stringify</code>.</p>\n\n\n\n\n<h4>String Utilities</h4>\n\n\n\n\n<p>Titanium includes several extra utility functions for formatting text, attached to the\nglobal <a href=\"#!/api/Global.String\" rel=\"Global.String\" class=\"docClass\">String</a> object.</p>\n\n\n\n\n<h4>console</h4>\n\n\n\n\n<p>Titanium provides <a href=\"#!/api/Global.console\" rel=\"Global.console\" class=\"docClass\">console</a> support familiar to many javascript developers\nfor logging at the toplevel, in addition to the <a href=\"#!/api/Titanium.API\" rel=\"Titanium.API\" class=\"docClass\">Titanium.API</a> logging facilities.</p>\n\n\n\n\n<h4>Timers</h4>\n\n\n\n\n<p>Titanium has built-in support for one-off and repeating timers:</p>\n\n\n\n\n<ul>\n<li><p>Use <a href=\"#!/api/Global-method-setTimeout\" rel=\"Global-method-setTimeout\" class=\"docClass\">setTimeout</a> to start a one-off timer.</p></li>\n<li><p>Use <a href=\"#!/api/Global-method-setInterval\" rel=\"Global-method-setInterval\" class=\"docClass\">setInterval</a> to start a repeating timer.</p></li>\n</ul>\n\n\n\n\n<h4>Alert</h4>\n\n\n\n\n<p>Titanium has a built-in convenience function <a href=\"#!/api/Global-method-alert\" rel=\"Global-method-alert\" class=\"docClass\">alert</a> which can be used as an alias \nfor the <a href=\"#!/api/Titanium.UI.AlertDialog\" rel=\"Titanium.UI.AlertDialog\" class=\"docClass\">AlertDialog</a> module.</p>\n\n\n\n\n<h4>Locale</h4>\n\n\n\n\n<p>The <code>L</code> macro can also be used as an alias for the <a href=\"#!/api/Titanium.Locale-method-getString\" rel=\"Titanium.Locale-method-getString\" class=\"docClass\">Titanium.Locale.getString</a> method.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-L' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-L' class='name expandable'>L</a>( <span class='pre'>key, [hint]</span> ) : String</div><div class='description'><div class='short'>An alias for Titanium.Locale.getString. ...</div><div class='long'><p>An alias for <a href=\"#!/api/Titanium.Locale-method-getString\" rel=\"Titanium.Locale-method-getString\" class=\"docClass\">Titanium.Locale.getString</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>Key used to lookup the localized string.</p>\n\n</div></li><li><span class='pre'>hint</span> : String (optional)<div class='sub-desc'><p>Text to return if <code>key</code> is not found.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Localized string defined by <code>key</code>, or value of <code>hint</code> otherwise.</p>\n</div></li></ul></div></div></div><div id='method-alert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-alert' class='name expandable'>alert</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Displays a pop-up alert dialog with the passed in message. ...</div><div class='long'><p>Displays a pop-up alert dialog with the passed in <code>message</code>.</p>\n\n<p><p>This function is a shortcut for creating and displaying an \n<a href=\"#!/api/Titanium.UI.AlertDialog\" rel=\"Titanium.UI.AlertDialog\" class=\"docClass\">alert dialog</a>. For example, the following two statements produce \nthe same result.</p>\n\n\n\n\n<pre><code>alert('Danger, Will Robinson!');\n\nTi.UI.createAlertDialog({ message: 'Danger, Will Robinson!' }).show();\n</code></pre>\n\n\n\n\n<p>Note that unlike a web browser-based version of <code>alert</code>, the method is asynchronous. However, \nonly one alert dialog will be visible and modal at a time.</p>\n\n\n\n\n<p>Be aware that this method may be removed in the future.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : String<div class='sub-desc'><p>Alert message.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-clearInterval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-clearInterval' class='name expandable'>clearInterval</a>( <span class='pre'>timerId</span> )</div><div class='description'><div class='short'>Cancels an interval timer. ...</div><div class='long'><p>Cancels an interval timer.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timerId</span> : Number<div class='sub-desc'><p>Unique timer identifier returned by <a href=\"#!/api/Global-method-setInterval\" rel=\"Global-method-setInterval\" class=\"docClass\">setInterval</a>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-clearTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-clearTimeout' class='name expandable'>clearTimeout</a>( <span class='pre'>timerId</span> )</div><div class='description'><div class='short'>Cancels a one-time timer. ...</div><div class='long'><p>Cancels a one-time timer.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timerId</span> : Number<div class='sub-desc'><p>Unique timer identifier returned by <a href=\"#!/api/Global-method-setTimeout\" rel=\"Global-method-setTimeout\" class=\"docClass\">setTimeout</a>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-decodeURIComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-decodeURIComponent' class='name expandable'>decodeURIComponent</a>( <span class='pre'>encodedURI</span> ) : String</div><div class='description'><div class='short'>Replaces each escape sequence in the specified string, created using the encodedURI \nmethod, with the character that ...</div><div class='long'><p>Replaces each escape sequence in the specified string, created using the <code>encodedURI</code> \nmethod, with the character that it represents. </p>\n\n<p><p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/encodeURIComponent\">encodeURIComponent</a> \nand <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/decodeURIComponent\">decodeURIComponent</a>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>encodedURI</span> : String<div class='sub-desc'><p>Text that optionally contains encoded escape sequences.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Decoded string.</p>\n</div></li></ul></div></div></div><div id='method-encodeURIComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-encodeURIComponent' class='name expandable'>encodeURIComponent</a>( <span class='pre'>string</span> ) : String</div><div class='description'><div class='short'>Replaces each special character in the specified string with the equivalent URI escape \nsequence. ...</div><div class='long'><p>Replaces each special character in the specified string with the equivalent URI escape \nsequence. Useful for encoding URIs.</p>\n\n<p><p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/encodeURIComponent\">encodeURIComponent</a> \nand <a href=\"https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/decodeURIComponent\">decodeURIComponent</a>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : String<div class='sub-desc'><p>Text that optionally contains special characters.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Encoded string.</p>\n</div></li></ul></div></div></div><div id='method-require' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-require' class='name expandable'>require</a>( <span class='pre'>moduleId</span> ) : Object</div><div class='description'><div class='short'>Loads either a native Titanium module or a CommonJS module. ...</div><div class='long'><p>Loads either a native Titanium module or a CommonJS module.</p>\n\n<p><p>The <code>require</code> function takes a module identifier as its argument and returns an object with \nreferences to the module's exported symbols.</p>\n\n\n\n\n<h4>Native Titanium Module</h4>\n\n\n\n\n<p>To load a native Titanium module:</p>\n\n\n\n\n<ol>\n<li>Install the module to the project or copy it to the Titanium SDK home directory.</li>\n<li>Add the module as a dependency to the project by modifying the <code>modules</code> section of the <code>tiapp.xml</code> file.</li>\n<li>Initialize the module with the <code>require</code> method by passing the module ID to the method.</li>\n</ol>\n\n\n\n\n<p>For detailed instructions, refer to\n<a href=\"http://docs.appcelerator.com/platform/latest/#!/guide/Using_a_Module\">Using a Module</a>.</p>\n\n\n\n\n<h4>CommonJS Module</h4>\n\n\n\n\n<p>To load a local CommonJS module, place the CommonJS module in the <code>Resources</code> directory of\nyour project. Pass the <code>require</code> method the path to the file without the <code>Resources</code>\ndirectory, platform-specific directory and the <code>.js</code> extension.</p>\n\n\n\n\n<p>Note that the appropriate <em>platform-specific</em> <code>Resources</code> subdirectory is merged into the \nmain <code>Resources</code> directory at build time. For example, suppose the following files exist.</p>\n\n\n\n\n<ul>\n<li><code>Resources/app.js</code></li>\n<li><code>Resources/ui/MainWindow.js</code></li>\n<li><code>Resources/iphone/ui/TaskWindow.js</code></li>\n<li><code>Resources/android/ui/TaskWindow.js</code></li>\n</ul>\n\n\n\n\n<p>The appropriate <code>TaskWindow.js</code> file is moved into the <code>Resources/ui</code> directory of the \nbuilt application. To include both the MainWindow module and the platform-specific \nTaskWindow module from any JavaScript file in the project:</p>\n\n\n\n\n<pre><code> // load main window module from ui subdirectory\n var mainWindow = require('ui/MainWindow');\n\n // load platform-specific task window module\n var taskWindow = require('ui/TaskWindow'); \n</code></pre>\n\n\n\n\n<p>For more information, see the Official CommonJS website about \n<a href=\"http://wiki.commonjs.org/wiki/Modules/1.1\">CommonJS Modules/1.1 Specification</a>.</p>\n\n\n\n\n<h4>Alloy</h4>\n\n\n\n\n<p>For Alloy, place the CommonJS modules in the <code>app/lib</code> directory of your Alloy project,\nthen load the module with the <code>require</code> method without the <code>app/lib</code> path and <code>.js</code>\nextension.</p>\n\n\n\n\n<p>Starting with Alloy 1.5.0, you can add platform-specific directories to the <code>app/lib</code> directory.\nDo not include the platform-specific directory when referencing the CommonJS module.</p>\n\n\n\n\n<p>For example, a module file <code>app/lib/android/myModule/module.js</code> may be loaded by\n<code>app/controllers/index.js</code> using:</p>\n\n\n\n\n<pre><code>require('myModule/module');\n</code></pre>\n\n\n\n\n<h4>Android</h4>\n\n\n\n\n<p>Additionally, on Android, an absolute path to a module may be specified using a path\nseparator (<code>/</code>) at the beginning of the path.</p>\n\n\n\n\n<p>For example, a module file <code>Resources/myModule/module.js</code> may be required by\n<code>Resources/example/example.js</code> using either of the following:</p>\n\n\n\n\n<pre><code>require('../myModule/module')\nrequire ('/myModule/module')\n</code></pre>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Require a Native Module</h4>\n\n\n<p>To load a native module with the ID <code>com.mycompany.module</code>:</p>\n\n\n\n\n<pre><code>var module = require('com.mycompany.module');\n</code></pre>\n\n\n<h4>Require a JavaScript Module</h4>\n\n\n<p><code>myModule.js</code>:</p>\n\n\n\n\n<pre><code>exports.message = \"hello world\";\n</code></pre>\n\n\n\n\n<p><code>app.js</code>:</p>\n\n\n\n\n<pre><code>var myModule = require('myModule');\nalert(myModule.message);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>moduleId</span> : String<div class='sub-desc'><p>Native module ID or local path to a JavaScript file <em>minus</em> the <code>.js</code> extension.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>Exported <code>exports</code> object of the required module.</p>\n</div></li></ul></div></div></div><div id='method-setInterval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-setInterval' class='name expandable'>setInterval</a>( <span class='pre'>function, delay</span> ) : Number</div><div class='description'><div class='short'>Executes a function repeatedly with a fixed time delay between each call to that function. ...</div><div class='long'><p>Executes a function repeatedly with a fixed time delay between each call to that function.</p>\n\n<p><p>Note that although the interval is not guaranteed to be exact, the interval between calls \nwill be no less than the specified delay.</p>\n\n\n\n\n<p>Returns a unique timer identifier that can be passed to <a href=\"#!/api/Global-method-clearInterval\" rel=\"Global-method-clearInterval\" class=\"docClass\">clearInterval</a> \nto cancel this timer.</p>\n\n\n\n\n<p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/DOM/window.setInterval\">setInterval</a>.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Update a label once every second, and stop at 10 seconds</h4>\n\n\n<pre><code>var count = 0;\nvar timer = setInterval(function(){\n    count++;\n    label.text = \"count: \" + count;\n    if (count == 10) {\n        clearInterval(timer);\n    }\n}, 1000);</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>function</span> : Callback<div class='sub-desc'><p>Function to call.</p>\n\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p>Time in milliseconds to wait between calls to function.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Unique timer identifier.</p>\n</div></li></ul></div></div></div><div id='method-setTimeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Global'>Global</span></div><a href='#!/api/Global-method-setTimeout' class='name expandable'>setTimeout</a>( <span class='pre'>function, delay</span> ) : Number</div><div class='description'><div class='short'>Executes code or a function after a delay. ...</div><div class='long'><p>Executes code or a function after a delay.</p>\n\n<p><p>Note that although the timeout is not guaranteed to be exact, the delay before the\nfunction is invoked will be no less than the specified delay.</p>\n\n\n\n\n<p>Returns a unique timer identifier that can be passed to <a href=\"#!/api/Global-method-clearTimeout\" rel=\"Global-method-clearTimeout\" class=\"docClass\">clearTimeout</a> \nto cancel this timer.</p>\n\n\n\n\n<p>For more information, see the MDN website for \n<a href=\"https://developer.mozilla.org/en/DOM/window.setTimeout\">setTimeout</a>.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Execute a function in 500 milliseconds</h4>\n\n\n<pre><code>setTimeout(function(){\n    Ti.API.debug('Called using setTimeout');\n}, 500);</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>function</span> : Callback<div class='sub-desc'><p>Code or function to call.</p>\n\n</div></li><li><span class='pre'>delay</span> : Number<div class='sub-desc'><p>Time in milliseconds to wait before the function is called.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>Unique timer identifier.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});