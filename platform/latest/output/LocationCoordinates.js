Ext.data.JsonP['LocationCoordinates']({"tagname":"class","name":"LocationCoordinates","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 0.8","iphone 0.8","ipad 0.8","mobileweb 1.8"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/Geolocation/Geolocation.yml"},"private":null,"id":"class-LocationCoordinates","members":{"cfg":[],"property":[{"name":"accuracy","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-accuracy"},{"name":"altitude","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-altitude"},{"name":"altitudeAccuracy","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-altitudeAccuracy"},{"name":"floor","tagname":"property","owner":"LocationCoordinates","meta":{"platform":["iphone 3.6.0","ipad 3.6.0"]},"id":"property-floor"},{"name":"heading","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-heading"},{"name":"latitude","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-latitude"},{"name":"longitude","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-longitude"},{"name":"speed","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-speed"},{"name":"timestamp","tagname":"property","owner":"LocationCoordinates","meta":{},"id":"property-timestamp"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":79760,"files":[{"filename":"titanium.js","href":"titanium.html#LocationCoordinates"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 0.8'>Android 0.8</li><li class='platform-iphone' title='iPhone since Titanium SDK 0.8'>iPhone 0.8</li><li class='platform-ipad' title='iPad since Titanium SDK 0.8'>iPad 0.8</li><li class='platform-mobileweb' title='Mobile Web since Titanium SDK 1.8'>Mobile Web 1.8</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Simple object holding the data for a location update.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>0.8</li><li class='platform-iphone'\n        title='iPhone'>0.8</li><li class='platform-ipad'\n        title='iPad'>0.8</li><li class='platform-mobileweb'\n        title='Mobile Web'>1.8</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-accuracy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-accuracy' class='name not-expandable'>accuracy</a><span> : Number</span></div><div class='description'><div class='short'><p>Accuracy of the location update, in meters.</p>\n\n</div><div class='long'><p>Accuracy of the location update, in meters.</p>\n\n</div></div></div><div id='property-altitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-altitude' class='name not-expandable'>altitude</a><span> : Number</span></div><div class='description'><div class='short'><p>Altitude of the location update, in meters.</p>\n\n</div><div class='long'><p>Altitude of the location update, in meters.</p>\n\n</div></div></div><div id='property-altitudeAccuracy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-altitudeAccuracy' class='name not-expandable'>altitudeAccuracy</a><span> : Number</span></div><div class='description'><div class='short'><p>Vertical accuracy of the location update, in meters.</p>\n\n</div><div class='long'><p>Vertical accuracy of the location update, in meters.</p>\n\n</div></div></div><div id='property-floor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-floor' class='name expandable'>floor</a><span> : <a href=\"#!/api/LocationCoordinatesFloor\" rel=\"LocationCoordinatesFloor\" class=\"docClass\">LocationCoordinatesFloor</a></span></div><div class='description'><div class='short'>The floor of the building on which the user is located. ...</div><div class='long'><p>The floor of the building on which the user is located. Available in iOS 8.0 and later.</p>\n\n\n\n\n<p> <b>Requires:</b> \niOS 8.0 and later \n</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.6.0</li><li class='platform-ipad'\n        title='iPad'>3.6.0</li></ul></div></div></div><div id='property-heading' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-heading' class='name expandable'>heading</a><span> : Number</span></div><div class='description'><div class='short'>Compass heading, in degrees. ...</div><div class='long'><p>Compass heading, in degrees. May be unknown if device is not moving. On \niOS, a negative value indicates that the heading data is not valid.</p>\n\n</div></div></div><div id='property-latitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-latitude' class='name not-expandable'>latitude</a><span> : Number</span></div><div class='description'><div class='short'><p>Latitude of the location update, in decimal degrees.</p>\n\n</div><div class='long'><p>Latitude of the location update, in decimal degrees.</p>\n\n</div></div></div><div id='property-longitude' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-longitude' class='name not-expandable'>longitude</a><span> : Number</span></div><div class='description'><div class='short'><p>Longitude of the location update, in decimal degrees.</p>\n\n</div><div class='long'><p>Longitude of the location update, in decimal degrees.</p>\n\n</div></div></div><div id='property-speed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-speed' class='name expandable'>speed</a><span> : Number</span></div><div class='description'><div class='short'>Current speed in meters/second. ...</div><div class='long'><p>Current speed in meters/second. On iOS, a negative value indicates that the \nheading data is not valid.</p>\n\n</div></div></div><div id='property-timestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='LocationCoordinates'>LocationCoordinates</span></div><a href='#!/api/LocationCoordinates-property-timestamp' class='name not-expandable'>timestamp</a><span> : Number</span></div><div class='description'><div class='short'><p>Timestamp for this location update, in milliseconds.</p>\n\n</div><div class='long'><p>Timestamp for this location update, in milliseconds.</p>\n\n</div></div></div></div></div></div></div>"});