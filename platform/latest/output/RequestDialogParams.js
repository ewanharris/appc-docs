Ext.data.JsonP['RequestDialogParams']({"tagname":"class","name":"RequestDialogParams","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 4.0.0","iphone 4.0.0","ipad 4.0.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.facebook/edit/master/apidoc/Facebook.yml"},"private":null,"id":"class-RequestDialogParams","members":{"cfg":[],"property":[{"name":"actionType","tagname":"property","owner":"RequestDialogParams","meta":{"platform":["android 5.0.0","iphone 5.0.0","ipad 5.0.0"]},"id":"property-actionType"},{"name":"data","tagname":"property","owner":"RequestDialogParams","meta":{},"id":"property-data"},{"name":"filters","tagname":"property","owner":"RequestDialogParams","meta":{"platform":["android 5.0.0","iphone 5.0.0","ipad 5.0.0"]},"id":"property-filters"},{"name":"message","tagname":"property","owner":"RequestDialogParams","meta":{},"id":"property-message"},{"name":"objectID","tagname":"property","owner":"RequestDialogParams","meta":{"platform":["android 5.0.0","iphone 5.0.0","ipad 5.0.0"]},"id":"property-objectID"},{"name":"recipientSuggestions","tagname":"property","owner":"RequestDialogParams","meta":{"platform":["android 5.0.0","iphone 5.0.0","ipad 5.0.0"]},"id":"property-recipientSuggestions"},{"name":"recipients","tagname":"property","owner":"RequestDialogParams","meta":{"platform":["android 5.0.0","iphone 5.0.0","ipad 5.0.0"]},"id":"property-recipients"},{"name":"title","tagname":"property","owner":"RequestDialogParams","meta":{},"id":"property-title"},{"name":"to","tagname":"property","owner":"RequestDialogParams","meta":{"removed":{"version":"5.0.0","text":""}},"id":"property-to"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":14637,"files":[{"filename":"titanium.js","href":"titanium.html#RequestDialogParams"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>4.0.0</li><li class='platform-iphone'\n        title='iPhone'>4.0.0</li><li class='platform-ipad'\n        title='iPad'>4.0.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 4.0.0'>Android 4.0.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 4.0.0'>iPhone 4.0.0</li><li class='platform-ipad' title='iPad since Titanium SDK 4.0.0'>iPad 4.0.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Parameters to pass to <a href=\"#!/api/Modules.Facebook-method-presentSendRequestDialog\" rel=\"Modules.Facebook-method-presentSendRequestDialog\" class=\"docClass\">presentSendRequestDialog()</a> method.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>4.0.0</li><li class='platform-iphone'\n        title='iPhone'>4.0.0</li><li class='platform-ipad'\n        title='iPad'>4.0.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-actionType' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-actionType' class='name expandable'>actionType</a><span> : Number</span></div><div class='description'><div class='short'>The nature of the request. ...</div><div class='long'><p>The nature of the request. Required if objectID is set.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Modules.Facebook-property-ACTION_TYPE_NONE\" rel=\"Modules.Facebook-property-ACTION_TYPE_NONE\" class=\"docClass\">Modules.Facebook.ACTION_TYPE_NONE</a>\n <li> <a href=\"#!/api/Modules.Facebook-property-ACTION_TYPE_SEND\" rel=\"Modules.Facebook-property-ACTION_TYPE_SEND\" class=\"docClass\">Modules.Facebook.ACTION_TYPE_SEND</a>\n <li> <a href=\"#!/api/Modules.Facebook-property-ACTION_TYPE_ASK_FOR\" rel=\"Modules.Facebook-property-ACTION_TYPE_ASK_FOR\" class=\"docClass\">Modules.Facebook.ACTION_TYPE_ASK_FOR</a>\n <li> <a href=\"#!/api/Modules.Facebook-property-ACTION_TYPE_TURN\" rel=\"Modules.Facebook-property-ACTION_TYPE_TURN\" class=\"docClass\">Modules.Facebook.ACTION_TYPE_TURN</a>\n</li></li></li></li></ul></p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.0.0</li><li class='platform-iphone'\n        title='iPhone'>5.0.0</li><li class='platform-ipad'\n        title='iPad'>5.0.0</li></ul></div></div></div><div id='property-data' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-data' class='name not-expandable'>data</a><span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a></span></div><div class='description'><div class='short'><p>Additional data to send with the request object.</p>\n\n</div><div class='long'><p>Additional data to send with the request object.</p>\n\n</div></div></div><div id='property-filters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-filters' class='name expandable'>filters</a><span> : Number</span></div><div class='description'><div class='short'>The set of friends someone sees if a multi-friend selector is shown. ...</div><div class='long'><p>The set of friends someone sees if a multi-friend selector is shown.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Modules.Facebook-property-FILTER_NONE\" rel=\"Modules.Facebook-property-FILTER_NONE\" class=\"docClass\">Modules.Facebook.FILTER_NONE</a>\n <li> <a href=\"#!/api/Modules.Facebook-property-FILTER_APP_USERS\" rel=\"Modules.Facebook-property-FILTER_APP_USERS\" class=\"docClass\">Modules.Facebook.FILTER_APP_USERS</a>\n <li> <a href=\"#!/api/Modules.Facebook-property-FILTER_APP_NON_USERS\" rel=\"Modules.Facebook-property-FILTER_APP_NON_USERS\" class=\"docClass\">Modules.Facebook.FILTER_APP_NON_USERS</a>\n</li></li></li></ul></p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.0.0</li><li class='platform-iphone'\n        title='iPhone'>5.0.0</li><li class='platform-ipad'\n        title='iPad'>5.0.0</li></ul></div></div></div><div id='property-message' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-message' class='name not-expandable'>message</a><span> : String</span></div><div class='description'><div class='short'><p>Message to send with the request.</p>\n\n</div><div class='long'><p>Message to send with the request.</p>\n\n</div></div></div><div id='property-objectID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-objectID' class='name expandable'>objectID</a><span> : String</span></div><div class='description'><div class='short'>The Open Graph object ID of the object being sent. ...</div><div class='long'><p>The Open Graph object ID of the object being sent. Required if actionType is set.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.0.0</li><li class='platform-iphone'\n        title='iPhone'>5.0.0</li><li class='platform-ipad'\n        title='iPad'>5.0.0</li></ul></div></div></div><div id='property-recipientSuggestions' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-recipientSuggestions' class='name expandable'>recipientSuggestions</a><span> : Arra[]</span></div><div class='description'><div class='short'>An array of user IDs that will be included in the dialog as the first suggested friends. ...</div><div class='long'><p>An array of user IDs that will be included in the dialog as the first suggested friends. Cannot be used together with filters.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.0.0</li><li class='platform-iphone'\n        title='iPhone'>5.0.0</li><li class='platform-ipad'\n        title='iPad'>5.0.0</li></ul></div></div></div><div id='property-recipients' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-recipients' class='name not-expandable'>recipients</a><span> : Arra[]</span></div><div class='description'><div class='short'><p>Array of pre-selected facebook ids.</p>\n\n</div><div class='long'><p>Array of pre-selected facebook ids.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>5.0.0</li><li class='platform-iphone'\n        title='iPhone'>5.0.0</li><li class='platform-ipad'\n        title='iPad'>5.0.0</li></ul></div></div></div><div id='property-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-title' class='name not-expandable'>title</a><span> : String</span></div><div class='description'><div class='short'><p>Title of request.</p>\n\n</div><div class='long'><p>Title of request.</p>\n\n</div></div></div><div id='property-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='RequestDialogParams'>RequestDialogParams</span></div><a href='#!/api/RequestDialogParams-property-to' class='name not-expandable'>to</a><span> : Arra[]</span><strong class='removed signature' >removed</strong></div><div class='description'><div class='short'><p>Array of pre-selected facebook ids.</p>\n\n</div><div class='long'><p>Array of pre-selected facebook ids.</p>\n\n        <div class='signature-box removed'>\n        <p>This property has been <strong>removed</strong> since 5.0.0</p>\n        \n\n        </div>\n</div></div></div></div></div></div></div>"});