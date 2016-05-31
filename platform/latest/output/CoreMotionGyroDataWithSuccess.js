Ext.data.JsonP['CoreMotionGyroDataWithSuccess']({"tagname":"class","name":"CoreMotionGyroDataWithSuccess","extends":"CoreMotionGyroData","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 3.3.0","ipad 3.3.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.coremotion/edit/master/apidoc/CoreMotion.yml"},"private":null,"id":"class-CoreMotionGyroDataWithSuccess","members":{"cfg":[],"property":[{"name":"code","tagname":"property","owner":"CoreMotionGyroDataWithSuccess","meta":{"readonly":true,"description":["<p>See <code>ERROR</code> constants for possible values.</p>"]},"id":"property-code"},{"name":"error","tagname":"property","owner":"CoreMotionGyroDataWithSuccess","meta":{"readonly":true},"id":"property-error"},{"name":"rotationRate","tagname":"property","owner":"CoreMotionGyroData","meta":{"readonly":true},"id":"property-rotationRate"},{"name":"success","tagname":"property","owner":"CoreMotionGyroDataWithSuccess","meta":{"readonly":true},"id":"property-success"},{"name":"timestamp","tagname":"property","owner":"CoreMotionLogItem","meta":{"readonly":true,"description":["<p>The time stamp is the amount of time in milliseconds since the phone booted.</p>"]},"id":"property-timestamp"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":24474,"files":[{"filename":"titanium.js","href":"titanium.html#CoreMotionGyroDataWithSuccess"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["CoreMotionLogItem","CoreMotionGyroData","CoreMotionGyroDataWithSuccess"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 3.3.0'>iPhone 3.3.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.3.0'>iPad 3.3.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/CoreMotionLogItem' rel='CoreMotionLogItem' class='docClass'>CoreMotionLogItem</a></div><div class='subclass'> &gt; <a href='#!/api/CoreMotionGyroData' rel='CoreMotionGyroData' class='docClass'>CoreMotionGyroData</a></div><div class='subclass'> &gt; <strong>CoreMotionGyroDataWithSuccess</strong></div></div></div><div class='doc-contents'><p>Dictionary passed to the callback of the <a href=\"#!/api/Modules.CoreMotion.Gyroscope-method-startGyroUpdates\" rel=\"Modules.CoreMotion.Gyroscope-method-startGyroUpdates\" class=\"docClass\">Gyroscope.startGyroUpdates()</a> method.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-code' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionGyroDataWithSuccess'>CoreMotionGyroDataWithSuccess</span></div><a href='#!/api/CoreMotionGyroDataWithSuccess-property-code' class='name not-expandable'>code</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>An error code describing the error if there was one.</p>\n\n</div><div class='long'><p>An error code describing the error if there was one.</p>\n\n<p><p>See <code>ERROR</code> constants for possible values.</p>\n\n</p></div></div></div><div id='property-error' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionGyroDataWithSuccess'>CoreMotionGyroDataWithSuccess</span></div><a href='#!/api/CoreMotionGyroDataWithSuccess-property-error' class='name not-expandable'>error</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>An error message describing the error if there was one.</p>\n\n</div><div class='long'><p>An error message describing the error if there was one.</p>\n\n</div></div></div><div id='property-rotationRate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionGyroData' rel='CoreMotionGyroData' class='defined-in docClass'>CoreMotionGyroData</a></div><a href='#!/api/CoreMotionGyroData-property-rotationRate' class='name not-expandable'>rotationRate</a><span> : <a href=\"#!/api/CoreMotionRotationRate\" rel=\"CoreMotionRotationRate\" class=\"docClass\">CoreMotionRotationRate</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The rotation rate measured by the gyroscope.</p>\n\n</div><div class='long'><p>The rotation rate measured by the gyroscope.</p>\n\n</div></div></div><div id='property-success' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CoreMotionGyroDataWithSuccess'>CoreMotionGyroDataWithSuccess</span></div><a href='#!/api/CoreMotionGyroDataWithSuccess-property-success' class='name not-expandable'>success</a><span> : Boolean</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>A Boolean indicating if the operation was successful or not.</p>\n\n</div><div class='long'><p>A Boolean indicating if the operation was successful or not.</p>\n\n</div></div></div><div id='property-timestamp' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/CoreMotionLogItem' rel='CoreMotionLogItem' class='defined-in docClass'>CoreMotionLogItem</a></div><a href='#!/api/CoreMotionLogItem-property-timestamp' class='name not-expandable'>timestamp</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The time when the logged item is valid.</p>\n\n</div><div class='long'><p>The time when the logged item is valid.</p>\n\n<p><p>The time stamp is the amount of time in milliseconds since the phone booted.</p>\n\n</p></div></div></div></div></div></div></div>"});