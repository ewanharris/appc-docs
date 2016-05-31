Ext.data.JsonP['Modules_CoreMotion_Magnetometer']({"tagname":"class","name":"Modules.CoreMotion.Magnetometer","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.2.0","ipad 5.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.coremotion/edit/master/apidoc/Magnetometer.yml"},"private":null,"id":"class-Modules.CoreMotion.Magnetometer","members":{"cfg":[],"property":[],"method":[{"name":"getMagnetometerData","tagname":"method","owner":"Modules.CoreMotion.Magnetometer","meta":{"description":["<p>An app that is receiving magnetometer data after calling \n{@link Modules.CoreMotion.Magnetometer#method-startMagnetometerUpdates} with no callback, needs to periodically\ncheck the value returned by this method and process the magnetometer data.</p>"]},"id":"method-getMagnetometerData"},{"name":"isMagnetometerActive","tagname":"method","owner":"Modules.CoreMotion.Magnetometer","meta":{"description":["<p>Indicates whether {@link Modules.CoreMotion.Magnetometer#method-startMagnetometerUpdates} has been called since \n<Modules.CoreMotion.stopMagnetometerUpdates>.</p>"]},"id":"method-isMagnetometerActive"},{"name":"isMagnetometerAvailable","tagname":"method","owner":"Modules.CoreMotion.Magnetometer","meta":{},"id":"method-isMagnetometerAvailable"},{"name":"setMagnetometerUpdateInterval","tagname":"method","owner":"Modules.CoreMotion.Magnetometer","meta":{},"id":"method-setMagnetometerUpdateInterval"},{"name":"startMagnetometerUpdates","tagname":"method","owner":"Modules.CoreMotion.Magnetometer","meta":{"description":["<p>If a callback is passed to this method, it will be called whenever there is an update.\nThe frequency of these updates can be controlled using the \n{@link Modules.CoreMotion.Magnetometer#method-setMagnetometerUpdateInterval} method. If no callback is passed, \nthe magnetometer data can be accessed using the {@link Modules.CoreMotion.Magnetometer#method-getMagnetometerData} \nmethod. You must call {@link Modules.CoreMotion.Magnetometer#method-stopMagnetometerUpdates} when you no \nlonger want your app to process magnetometer updates.</p>"]},"id":"method-startMagnetometerUpdates"},{"name":"stopMagnetometerUpdates","tagname":"method","owner":"Modules.CoreMotion.Magnetometer","meta":{},"id":"method-stopMagnetometerUpdates"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":26874,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-CoreMotion-Magnetometer"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.2.0'>iPhone 5.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 5.2.0'>iPad 5.2.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Allows Titanium client applications to access CoreMotion's Magnetometer APIs.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getMagnetometerData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.Magnetometer'>Modules.CoreMotion.Magnetometer</span></div><a href='#!/api/Modules.CoreMotion.Magnetometer-method-getMagnetometerData' class='name expandable'>getMagnetometerData</a>( <span class='pre'></span> ) : <a href=\"#!/api/CoreMotionMagnetometerData\" rel=\"CoreMotionMagnetometerData\" class=\"docClass\">CoreMotionMagnetometerData</a></div><div class='description'><div class='short'>Returns the latest sample of magnetometer data. ...</div><div class='long'><p>Returns the latest sample of magnetometer data.</p>\n\n<p><p>An app that is receiving magnetometer data after calling \n<a href=\"#!/api/Modules.CoreMotion.Magnetometer-method-startMagnetometerUpdates\" rel=\"Modules.CoreMotion.Magnetometer-method-startMagnetometerUpdates\" class=\"docClass\">startMagnetometerUpdates</a> with no callback, needs to periodically\ncheck the value returned by this method and process the magnetometer data.</p>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/CoreMotionMagnetometerData\" rel=\"CoreMotionMagnetometerData\" class=\"docClass\">CoreMotionMagnetometerData</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isMagnetometerActive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.Magnetometer'>Modules.CoreMotion.Magnetometer</span></div><a href='#!/api/Modules.CoreMotion.Magnetometer-method-isMagnetometerActive' class='name expandable'>isMagnetometerActive</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns a Boolean indicating whether magnetometer updates are currently happening. ...</div><div class='long'><p>Returns a Boolean indicating whether magnetometer updates are currently happening.</p>\n\n<p><p>Indicates whether <a href=\"#!/api/Modules.CoreMotion.Magnetometer-method-startMagnetometerUpdates\" rel=\"Modules.CoreMotion.Magnetometer-method-startMagnetometerUpdates\" class=\"docClass\">startMagnetometerUpdates</a> has been called since \n<Modules.CoreMotion.stopMagnetometerUpdates>.</Modules></p>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isMagnetometerAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.Magnetometer'>Modules.CoreMotion.Magnetometer</span></div><a href='#!/api/Modules.CoreMotion.Magnetometer-method-isMagnetometerAvailable' class='name expandable'>isMagnetometerAvailable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns a Boolean indicating whether a magnetometer is available on the device. ...</div><div class='long'><p>Returns a Boolean indicating whether a magnetometer is available on the device.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMagnetometerUpdateInterval' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.Magnetometer'>Modules.CoreMotion.Magnetometer</span></div><a href='#!/api/Modules.CoreMotion.Magnetometer-method-setMagnetometerUpdateInterval' class='name expandable'>setMagnetometerUpdateInterval</a>( <span class='pre'>interval</span> )</div><div class='description'><div class='short'>The interval in milliseconds, for providing magnetometer updates to the callback. ...</div><div class='long'><p>The interval in milliseconds, for providing magnetometer updates to the callback.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : Number<div class='sub-desc'><p>The interval in milliseconds</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-startMagnetometerUpdates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.Magnetometer'>Modules.CoreMotion.Magnetometer</span></div><a href='#!/api/Modules.CoreMotion.Magnetometer-method-startMagnetometerUpdates' class='name expandable'>startMagnetometerUpdates</a>( <span class='pre'>[callback]</span> )</div><div class='description'><div class='short'>Starts magnetometer updates. ...</div><div class='long'><p>Starts magnetometer updates.</p>\n\n<p><p>If a callback is passed to this method, it will be called whenever there is an update.\nThe frequency of these updates can be controlled using the \n<a href=\"#!/api/Modules.CoreMotion.Magnetometer-method-setMagnetometerUpdateInterval\" rel=\"Modules.CoreMotion.Magnetometer-method-setMagnetometerUpdateInterval\" class=\"docClass\">setMagnetometerUpdateInterval</a> method. If no callback is passed, \nthe magnetometer data can be accessed using the <a href=\"#!/api/Modules.CoreMotion.Magnetometer-method-getMagnetometerData\" rel=\"Modules.CoreMotion.Magnetometer-method-getMagnetometerData\" class=\"docClass\">getMagnetometerData</a> \nmethod. You must call <a href=\"#!/api/Modules.CoreMotion.Magnetometer-method-stopMagnetometerUpdates\" rel=\"Modules.CoreMotion.Magnetometer-method-stopMagnetometerUpdates\" class=\"docClass\">stopMagnetometerUpdates</a> when you no \nlonger want your app to process magnetometer updates.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CoreMotionMagnetometerDataWithSuccess\" rel=\"CoreMotionMagnetometerDataWithSuccess\" class=\"docClass\">CoreMotionMagnetometerDataWithSuccess</a>&gt; (optional)<div class='sub-desc'><p>The method to be called when there is an update.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-stopMagnetometerUpdates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.Magnetometer'>Modules.CoreMotion.Magnetometer</span></div><a href='#!/api/Modules.CoreMotion.Magnetometer-method-stopMagnetometerUpdates' class='name expandable'>stopMagnetometerUpdates</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stops magnetometer updates. ...</div><div class='long'><p>Stops magnetometer updates.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});