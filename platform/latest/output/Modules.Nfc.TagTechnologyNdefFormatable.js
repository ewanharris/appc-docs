Ext.data.JsonP['Modules_Nfc_TagTechnologyNdefFormatable']({"tagname":"class","name":"Modules.Nfc.TagTechnologyNdefFormatable","extends":"Modules.Nfc.TagTechnology","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 1.1.0"],"editurl":"https://github.com/appcelerator-modules/ti.nfc/edit/master/apidoc/TagTechnology.yml","description":["<p>Use the {@link Modules.Nfc#method-createTagTechnologyNdefFormatable} method to create this tag technology.</p>\n\n<p>See also:\n<a href=\"http://developer.android.com/reference/android/nfc/tech/NdefFormatable.html\">NdefFormatable</a></p>"]},"private":null,"id":"class-Modules.Nfc.TagTechnologyNdefFormatable","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"},{"name":"tag","tagname":"property","owner":"Modules.Nfc.TagTechnology","meta":{"description":["<p>When a tag is discovered, a {@link Modules.Nfc.NfcTag} proxy is created and passed as a property to the <code>onNdefDiscovered</code>, <code>onTagDiscovered</code>, or\n<code>onTechDiscovered</code> callback (see {@link NdefDiscovered}).</p>"]},"id":"property-tag"}],"method":[{"name":"close","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-close"},{"name":"connect","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{"description":["<p>Only one Tag Technology proxy can be connected to a Tag at a time.</p>"]},"id":"method-connect"},{"name":"format","tagname":"method","owner":"Modules.Nfc.TagTechnologyNdefFormatable","meta":{},"id":"method-format"},{"name":"formatReadOnly","tagname":"method","owner":"Modules.Nfc.TagTechnologyNdefFormatable","meta":{},"id":"method-formatReadOnly"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"getTag","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-getTag"},{"name":"isConnected","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-isConnected"},{"name":"isValid","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-isValid"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"},{"name":"setTag","tagname":"method","owner":"Modules.Nfc.TagTechnology","meta":{},"id":"method-setTag"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":21506,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-Nfc-TagTechnologyNdefFormatable"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>1.1.0</li></ul>","editurl":null,"description":"<p><p>Use the <a href=\"#!/api/Modules.Nfc-method-createTagTechnologyNdefFormatable\" rel=\"Modules.Nfc-method-createTagTechnologyNdefFormatable\" class=\"docClass\">Modules.Nfc.createTagTechnologyNdefFormatable</a> method to create this tag technology.</p>\n\n\n\n\n<p>See also:\n<a href=\"http://developer.android.com/reference/android/nfc/tech/NdefFormatable.html\">NdefFormatable</a></p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Modules.Nfc.TagTechnology","Modules.Nfc.TagTechnologyNdefFormatable"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 1.1.0'>Android 1.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='docClass'>Modules.Nfc.TagTechnology</a></div><div class='subclass'> &gt; <strong>Modules.Nfc.TagTechnologyNdefFormatable</strong></div></div></div><div class='doc-contents'><p>Provide access to NDEF format operations on a <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a>.</p>\n\n<p><p>Use the <a href=\"#!/api/Modules.Nfc-method-createTagTechnologyNdefFormatable\" rel=\"Modules.Nfc-method-createTagTechnologyNdefFormatable\" class=\"docClass\">Modules.Nfc.createTagTechnologyNdefFormatable</a> method to create this tag technology.</p>\n\n\n\n\n<p>See also:\n<a href=\"http://developer.android.com/reference/android/nfc/tech/NdefFormatable.html\">NdefFormatable</a></p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>1.1.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-tag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-property-tag' class='name not-expandable'>tag</a><span> : <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a></span></div><div class='description'><div class='short'><p>The tag technology that has been discovered.</p>\n\n</div><div class='long'><p>The tag technology that has been discovered.</p>\n\n<p><p>When a tag is discovered, a <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a> proxy is created and passed as a property to the <code>onNdefDiscovered</code>, <code>onTagDiscovered</code>, or\n<code>onTechDiscovered</code> callback (see <a href=\"#!/api/NdefDiscovered\" rel=\"NdefDiscovered\" class=\"docClass\">NdefDiscovered</a>).</p>\n\n</p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-close' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-close' class='name expandable'>close</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Disable I/O operations to the tag and release resources. ...</div><div class='long'><p>Disable I/O operations to the tag and release resources.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Enable I/O operations to the tag. ...</div><div class='long'><p>Enable I/O operations to the tag.</p>\n\n<p><p>Only one Tag Technology proxy can be connected to a Tag at a time.</p>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-format' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Nfc.TagTechnologyNdefFormatable'>Modules.Nfc.TagTechnologyNdefFormatable</span></div><a href='#!/api/Modules.Nfc.TagTechnologyNdefFormatable-method-format' class='name expandable'>format</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Format a tag as NDEF, and write a Modules.Nfc.NdefMessage. ...</div><div class='long'><p>Format a tag as NDEF, and write a <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a>.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a><div class='sub-desc'><p>The NDEF message to write after formatting, can be null.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-formatReadOnly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.Nfc.TagTechnologyNdefFormatable'>Modules.Nfc.TagTechnologyNdefFormatable</span></div><a href='#!/api/Modules.Nfc.TagTechnologyNdefFormatable-method-formatReadOnly' class='name expandable'>formatReadOnly</a>( <span class='pre'>message</span> )</div><div class='description'><div class='short'>Formats a tag as NDEF, write a Modules.Nfc.NdefMessage, and make read-only. ...</div><div class='long'><p>Formats a tag as NDEF, write a <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a>, and make read-only.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>message</span> : <a href=\"#!/api/Modules.Nfc.NdefMessage\" rel=\"Modules.Nfc.NdefMessage\" class=\"docClass\">Modules.Nfc.NdefMessage</a><div class='sub-desc'><p>The NDEF message to write after formatting</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-getTag' class='name expandable'>getTag</a>( <span class='pre'></span> ) : <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a></div><div class='description'><div class='short'>Gets the value of the tag property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Modules.Nfc.TagTechnology-property-tag\" rel=\"Modules.Nfc.TagTechnology-property-tag\" class=\"docClass\">tag</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isConnected' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-isConnected' class='name expandable'>isConnected</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns true if connect has completed, and close has not been called, and the tag is not known to be out of range. ...</div><div class='long'><p>Returns true if connect has completed, and close has not been called, and the tag is not known to be out of range.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isValid' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-isValid' class='name expandable'>isValid</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if this tag technology was successfully obtained. ...</div><div class='long'><p>Return true if this tag technology was successfully obtained.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setTag' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Modules.Nfc.TagTechnology' rel='Modules.Nfc.TagTechnology' class='defined-in docClass'>Modules.Nfc.TagTechnology</a></div><a href='#!/api/Modules.Nfc.TagTechnology-method-setTag' class='name expandable'>setTag</a>( <span class='pre'>tag</span> )</div><div class='description'><div class='short'>Sets the value of the tag property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Modules.Nfc.TagTechnology-property-tag\" rel=\"Modules.Nfc.TagTechnology-property-tag\" class=\"docClass\">tag</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tag</span> : <a href=\"#!/api/Modules.Nfc.NfcTag\" rel=\"Modules.Nfc.NfcTag\" class=\"docClass\">Modules.Nfc.NfcTag</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});