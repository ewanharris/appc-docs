Ext.data.JsonP['Alloy_Collections']({"tagname":"class","name":"Alloy.Collections","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"editurl":"https://github.com/appcelerator/alloy/edit/master/docs/apidoc/collection.js"},"private":null,"id":"class-Alloy.Collections","members":{"cfg":[],"property":[],"method":[{"name":"instance","tagname":"method","owner":"Alloy.Collections","meta":{},"id":"method-instance"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"collection.js","href":"collection.html#Alloy-Collections"},{"filename":"alloy.js","href":"alloy2.html#Alloy-Collections"}],"html_meta":{"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>Class to access or create collections.</p>\n\n<p>Collections can either be created in markup or programmatically in the controller.</p>\n\n<p>To create collections in markup use a <code>&lt;Collection/&gt;</code> element. For\nmore information see <a href=\"#!/guide/Alloy_XML_Markup-section-35621528_AlloyXMLMarkup-CollectionElement\">Collection Element</a>\nin the Alloy developer guide.</p>\n\n<p>In the controller code:</p>\n\n<ul>\n<li> To create a local instance, use the <a href=\"#!/api/Alloy-method-createCollection\" rel=\"Alloy-method-createCollection\" class=\"docClass\">Alloy.createCollection</a> method.</li>\n<li> To create a global singleton instance, use the <a href=\"#!/api/Alloy.Collections-method-instance\" rel=\"Alloy.Collections-method-instance\" class=\"docClass\">Alloy.Collections.instance</a> method.</li>\n</ul>\n\n\n<p>Previously created collections through markup or using the <code><a href=\"#!/api/Alloy.Collections-method-instance\" rel=\"Alloy.Collections-method-instance\" class=\"docClass\">instance()</a></code> method\nare directly accessed as properties of the <code><a href=\"#!/api/Alloy.Collections\" rel=\"Alloy.Collections\" class=\"docClass\">Alloy.Collections</a></code> namespace,\nusing either the name of the model JavaScript file for singletons\nor the ID name for local instances.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-instance' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.Collections'>Alloy.Collections</span></div><a href='#!/api/Alloy.Collections-method-instance' class='name expandable'>instance</a>( <span class='pre'>name</span> ) : Backbone.Collection</div><div class='description'><div class='short'>Creates a singleton instance of a Collection based on the given model, or\nreturns an existing instance if one has alr...</div><div class='long'><p>Creates a singleton instance of a Collection based on the given model, or\nreturns an existing instance if one has already been created.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>the name of the base model for the collection</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Backbone.Collection</span><div class='sub-desc'><p>An Alloy Collection object singleton</p>\n</div></li></ul></div></div></div></div></div></div></div>"});