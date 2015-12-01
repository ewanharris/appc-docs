Ext.data.JsonP['Alloy_Controller_UI']({"tagname":"class","name":"Alloy.Controller.UI","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"editurl":"https://github.com/appcelerator/alloy/edit/master/docs/apidoc/controller.js"},"private":null,"id":"class-Alloy.Controller.UI","members":{"cfg":[],"property":[],"method":[{"name":"create","tagname":"method","owner":"Alloy.Controller.UI","meta":{"since":["1.2.0"]},"id":"method-create"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"controller.js","href":"controller.html#Alloy-Controller-UI"},{"filename":"alloy.js","href":"alloy.html#Alloy-Controller-UI"}],"html_meta":{"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>Provides convenience methods for working with Titanium UI objects.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.Controller.UI'>Alloy.Controller.UI</span></div><a href='#!/api/Alloy.Controller.UI-method-create' class='name expandable'>create</a>( <span class='pre'>apiName, opts</span> ) : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a>/<a href=\"#!/api/Alloy.Controller\" rel=\"Alloy.Controller\" class=\"docClass\">Alloy.Controller</a></div><div class='description'><div class='short'>Creates a Titanium UI object with the specified styles. ...</div><div class='long'><p>Creates a Titanium UI object with the specified styles.</p>\n\n<h4>Example</h4>\n\n<p>The following creates a new <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">View</a> object and assigns the \"dialog\"\nTSS class (defined elsewhere) to the view, and finally adds it to main window.</p>\n\n<pre><code>var view = $.UI.create(\"View\", {\n    classes: 'dialog'\n});\n$.index.add(view);\n</code></pre>\n<h3>Since 1.2.0</h3><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>apiName</span> : String<div class='sub-desc'><p>Name of the Titanium object to create. This can either be the full class\nname, such as <code>Ti.UI.Button</code>, or the XML element, such as <code>Button</code>.</p>\n</div></li><li><span class='pre'>opts</span> : <a href=\"#!/api/AlloyStyleDict\" rel=\"AlloyStyleDict\" class=\"docClass\">AlloyStyleDict</a><div class='sub-desc'><p>Dictionary of styles to apply. <code>opts</code> may also contain any additional properties you would like to apply directly the created Titanium object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a>/<a href=\"#!/api/Alloy.Controller\" rel=\"Alloy.Controller\" class=\"docClass\">Alloy.Controller</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});