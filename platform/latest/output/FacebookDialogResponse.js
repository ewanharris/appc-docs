Ext.data.JsonP['FacebookDialogResponse']({"tagname":"class","name":"FacebookDialogResponse","extends":"ErrorResponse","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 3.1.0","iphone 3.1.0","ipad 3.1.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.facebook/edit/master/%MODULE_PATH%","removed":{"version":"4.0.0","text":""},"description":["<p>The <code>success</code> and <code>cancelled</code> properties may not be reliable for dialogs. In the event\nthat the user canceled the dialog, the <code>result</code> field is <code>undefined</code>.</p>"]},"private":null,"id":"class-FacebookDialogResponse","members":{"cfg":[],"property":[{"name":"cancelled","tagname":"property","owner":"FacebookDialogResponse","meta":{},"id":"property-cancelled"},{"name":"code","tagname":"property","owner":"ErrorResponse","meta":{"description":["<p>Error code will be 0 if <code>success</code> is <code>true</code>, nonzero otherwise. If the error\nwas generated by the operating system, that system's error value is used.\nOtherwise, this value will be -1.</p>"]},"id":"property-code"},{"name":"error","tagname":"property","owner":"ErrorResponse","meta":{"description":["<p>Will be undefined if <code>success</code> is <code>true</code>.</p>"]},"id":"property-error"},{"name":"result","tagname":"property","owner":"FacebookDialogResponse","meta":{},"id":"property-result"},{"name":"success","tagname":"property","owner":"ErrorResponse","meta":{"description":["<p>Returns <code>true</code> if request succeeded, <code>false</code> otherwise.</p>"]},"id":"property-success"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":12686,"files":[{"filename":"titanium.js","href":"titanium.html#FacebookDialogResponse"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"removed":"        <div class='signature-box removed'>\n        <p>This class has been <strong>removed</strong> since 4.0.0</p>\n        \n\n        </div>\n","description":"<p><p>The <code>success</code> and <code>cancelled</code> properties may not be reliable for dialogs. In the event\nthat the user canceled the dialog, the <code>result</code> field is <code>undefined</code>.</p>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["ErrorResponse","FacebookDialogResponse"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 3.1.0'>Android 3.1.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 3.1.0'>iPhone 3.1.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.1.0'>iPad 3.1.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/ErrorResponse' rel='ErrorResponse' class='docClass'>ErrorResponse</a></div><div class='subclass'> &gt; <strong>FacebookDialogResponse</strong></div></div></div><div class='doc-contents'><p>Argument passed to the dialog callback when a dialog is completed or canceled.</p>\n\n        <div class='signature-box removed'>\n        <p>This class has been <strong>removed</strong> since 4.0.0</p>\n        \n\n        </div>\n<p><p>The <code>success</code> and <code>cancelled</code> properties may not be reliable for dialogs. In the event\nthat the user canceled the dialog, the <code>result</code> field is <code>undefined</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li><li class='platform-iphone'\n        title='iPhone'>3.1.0</li><li class='platform-ipad'\n        title='iPad'>3.1.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-cancelled' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FacebookDialogResponse'>FacebookDialogResponse</span></div><a href='#!/api/FacebookDialogResponse-property-cancelled' class='name not-expandable'>cancelled</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Indicates if the user canceled the dialog.</p>\n\n</div><div class='long'><p>Indicates if the user canceled the dialog.</p>\n\n</div></div></div><div id='property-code' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/ErrorResponse' rel='ErrorResponse' class='defined-in docClass'>ErrorResponse</a></div><a href='#!/api/ErrorResponse-property-code' class='name expandable'>code</a><span> : Number</span></div><div class='description'><div class='short'>Error code. ...</div><div class='long'><p>Error code. Returns 0 if <code>success</code> is <code>true</code>.</p>\n\n<p><p>Error code will be 0 if <code>success</code> is <code>true</code>, nonzero otherwise. If the error\nwas generated by the operating system, that system's error value is used.\nOtherwise, this value will be -1.</p>\n\n</p></div></div></div><div id='property-error' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/ErrorResponse' rel='ErrorResponse' class='defined-in docClass'>ErrorResponse</a></div><a href='#!/api/ErrorResponse-property-error' class='name not-expandable'>error</a><span> : String</span></div><div class='description'><div class='short'><p>Error message, if any returned.</p>\n\n</div><div class='long'><p>Error message, if any returned.</p>\n\n<p><p>Will be undefined if <code>success</code> is <code>true</code>.</p>\n\n</p></div></div></div><div id='property-result' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='FacebookDialogResponse'>FacebookDialogResponse</span></div><a href='#!/api/FacebookDialogResponse-property-result' class='name expandable'>result</a><span> : String</span></div><div class='description'><div class='short'>If successful, returns the JSON response containing the post_id of the new post. ...</div><div class='long'><p>If successful, returns the JSON response containing the <code>post_id</code> of the new post.\nIf the user canceled the dialog, the results is undefined.</p>\n\n</div></div></div><div id='property-success' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/ErrorResponse' rel='ErrorResponse' class='defined-in docClass'>ErrorResponse</a></div><a href='#!/api/ErrorResponse-property-success' class='name not-expandable'>success</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Indicates if the operation succeeded.</p>\n\n</div><div class='long'><p>Indicates if the operation succeeded.</p>\n\n<p><p>Returns <code>true</code> if request succeeded, <code>false</code> otherwise.</p>\n\n</p></div></div></div></div></div></div></div>"});