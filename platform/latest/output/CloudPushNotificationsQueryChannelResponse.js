Ext.data.JsonP['CloudPushNotificationsQueryChannelResponse']({"tagname":"class","name":"CloudPushNotificationsQueryChannelResponse","extends":"CloudResponse","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Modules/Cloud/PushNotifications/PushNotifications.yml"},"private":null,"id":"class-CloudPushNotificationsQueryChannelResponse","members":{"cfg":[],"property":[{"name":"code","tagname":"property","owner":"CloudResponse","meta":{"description":["<p>Only included if <code>error</code> is true.</p>"]},"id":"property-code"},{"name":"error","tagname":"property","owner":"CloudResponse","meta":{"description":["<p>Returns <code>true</code> if request failed.</p>"]},"id":"property-error"},{"name":"message","tagname":"property","owner":"CloudResponse","meta":{"description":["<p>Only included if <code>error</code> is <code>true</code>.</p>"]},"id":"property-message"},{"name":"meta","tagname":"property","owner":"CloudResponse","meta":{"description":["<p>Only included if 'success' is 'true'.</p>"]},"id":"property-meta"},{"name":"push_channels","tagname":"property","owner":"CloudPushNotificationsQueryChannelResponse","meta":{"description":["<p>Only included if <code>success</code> is <code>true</code>.</p>"]},"id":"property-push_channels"},{"name":"success","tagname":"property","owner":"CloudResponse","meta":{"description":["<p>Returns <code>true</code> if request succeeded.</p>"]},"id":"property-success"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":32271,"files":[{"filename":"titanium.js","href":"titanium.html#CloudPushNotificationsQueryChannelResponse"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["CloudResponse","CloudPushNotificationsQueryChannelResponse"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/CloudResponse' rel='CloudResponse' class='docClass'>CloudResponse</a></div><div class='subclass'> &gt; <strong>CloudPushNotificationsQueryChannelResponse</strong></div></div></div><div class='doc-contents'><p>Argument passed to the callback when a request finishes successfully.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-code' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CloudResponse' rel='CloudResponse' class='defined-in docClass'>CloudResponse</a></div><a href='#!/api/CloudResponse-property-code' class='name not-expandable'>code</a><span> : Number</span></div><div class='description'><div class='short'><p>Error code, if any returned.</p>\n\n</div><div class='long'><p>Error code, if any returned.</p>\n\n<p><p>Only included if <code>error</code> is true.</p>\n\n</p></div></div></div><div id='property-error' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CloudResponse' rel='CloudResponse' class='defined-in docClass'>CloudResponse</a></div><a href='#!/api/CloudResponse-property-error' class='name not-expandable'>error</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Indicates whether the request failed.</p>\n\n</div><div class='long'><p>Indicates whether the request failed.</p>\n\n<p><p>Returns <code>true</code> if request failed.</p>\n\n</p></div></div></div><div id='property-message' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CloudResponse' rel='CloudResponse' class='defined-in docClass'>CloudResponse</a></div><a href='#!/api/CloudResponse-property-message' class='name not-expandable'>message</a><span> : String</span></div><div class='description'><div class='short'><p>Error message, if any returned.</p>\n\n</div><div class='long'><p>Error message, if any returned.</p>\n\n<p><p>Only included if <code>error</code> is <code>true</code>.</p>\n\n</p></div></div></div><div id='property-meta' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CloudResponse' rel='CloudResponse' class='defined-in docClass'>CloudResponse</a></div><a href='#!/api/CloudResponse-property-meta' class='name not-expandable'>meta</a><span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a></span></div><div class='description'><div class='short'><p>Meta data, if any returned.</p>\n\n</div><div class='long'><p>Meta data, if any returned.</p>\n\n<p><p>Only included if 'success' is 'true'.</p>\n\n</p></div></div></div><div id='property-push_channels' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CloudPushNotificationsQueryChannelResponse'>CloudPushNotificationsQueryChannelResponse</span></div><a href='#!/api/CloudPushNotificationsQueryChannelResponse-property-push_channels' class='name not-expandable'>push_channels</a><span> : String[]</span></div><div class='description'><div class='short'><p>Array of <code>push_channel</code> names, if any exist.</p>\n\n</div><div class='long'><p>Array of <code>push_channel</code> names, if any exist.</p>\n\n<p><p>Only included if <code>success</code> is <code>true</code>.</p>\n\n</p></div></div></div><div id='property-success' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CloudResponse' rel='CloudResponse' class='defined-in docClass'>CloudResponse</a></div><a href='#!/api/CloudResponse-property-success' class='name not-expandable'>success</a><span> : Boolean</span></div><div class='description'><div class='short'><p>Indicates whether the request succeeded.</p>\n\n</div><div class='long'><p>Indicates whether the request succeeded.</p>\n\n<p><p>Returns <code>true</code> if request succeeded.</p>\n\n</p></div></div></div></div></div></div></div>"});