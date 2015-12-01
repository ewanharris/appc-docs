Ext.data.JsonP['Modules_CoreMotion_MotionActivity']({"tagname":"class","name":"Modules.CoreMotion.MotionActivity","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.2.0","ipad 5.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.coremotion/edit/master/%MODULE_PATH%"},"private":null,"id":"class-Modules.CoreMotion.MotionActivity","members":{"cfg":[],"property":[],"method":[{"name":"isActivityAvailable","tagname":"method","owner":"Modules.CoreMotion.MotionActivity","meta":{},"id":"method-isActivityAvailable"},{"name":"queryActivity","tagname":"method","owner":"Modules.CoreMotion.MotionActivity","meta":{"description":["<p>This method runs asynchronously, returning immediately and delivering the results \nto the specified callback. The system stores only the last seven days worth of \nactivity data at most. If there are no samples for the specified range of time, \nan error object with the code {@link Modules.CoreMotion#property-ERROR_UNKNOWN} is passed to the \ncallback.</p>"]},"id":"method-queryActivity"},{"name":"startActivityUpdates","tagname":"method","owner":"Modules.CoreMotion.MotionActivity","meta":{"description":["<p>This method initiates the tracking of motion data asynchronously. \nUpon calling this method, the motion activity manager executes the \ncallback, reporting the current motion in effect for the device. \nAfter that, the motion activity manager executes the callback only \nwhen the motion data changes.</p>\n\n<p>The callback is executed on a best effort basis and updates are not \ndelivered while your app is suspended. If updates arrived while your \napp was suspended, the last update is delivered to your app when it \nresumes execution. To get all of the updates that occurred while your \napp was suspended, use the {@link Modules.CoreMotion.MotionActivity#method-queryActivity} method.</p>\n\n<p>Upon starting activity updates, the motion activity manager reports \nchanges to its callback until you call the {@link Modules.CoreMotion.MotionActivity#method-stopActivityUpdates} \nmethod. If you call this method again with a new callback, the activity \nmanager stops delivering updates to the old callback and delivers them \nto the new callback instead.</p>"]},"id":"method-startActivityUpdates"},{"name":"stopActivityUpdates","tagname":"method","owner":"Modules.CoreMotion.MotionActivity","meta":{},"id":"method-stopActivityUpdates"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":24902,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-CoreMotion-MotionActivity"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.2.0'>iPhone 5.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 5.2.0'>iPad 5.2.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Allows Titanium client applications to access CoreMotion's MotionActivity APIs.</p>\n\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-isActivityAvailable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.MotionActivity'>Modules.CoreMotion.MotionActivity</span></div><a href='#!/api/Modules.CoreMotion.MotionActivity-method-isActivityAvailable' class='name expandable'>isActivityAvailable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns a Boolean indicating whether motion activity data is available on the current device. ...</div><div class='long'><p>Returns a Boolean indicating whether motion activity data is available on the current device.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-queryActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.MotionActivity'>Modules.CoreMotion.MotionActivity</span></div><a href='#!/api/Modules.CoreMotion.MotionActivity-method-queryActivity' class='name expandable'>queryActivity</a>( <span class='pre'>args, callback</span> )</div><div class='description'><div class='short'>Gathers and returns historical motion activity data for the specified time period. ...</div><div class='long'><p>Gathers and returns historical motion activity data for the specified time period.</p>\n\n<p><p>This method runs asynchronously, returning immediately and delivering the results \nto the specified callback. The system stores only the last seven days worth of \nactivity data at most. If there are no samples for the specified range of time, \nan error object with the code <a href=\"#!/api/Modules.CoreMotion-property-ERROR_UNKNOWN\" rel=\"Modules.CoreMotion-property-ERROR_UNKNOWN\" class=\"docClass\">Modules.CoreMotion.ERROR_UNKNOWN</a> is passed to the \ncallback.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/CoreMotionQueryActivityArgs\" rel=\"CoreMotionQueryActivityArgs\" class=\"docClass\">CoreMotionQueryActivityArgs</a><div class='sub-desc'><p>An object of arguments</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CoreMotionActivityQueryDataWithSuccess\" rel=\"CoreMotionActivityQueryDataWithSuccess\" class=\"docClass\">CoreMotionActivityQueryDataWithSuccess</a>&gt;<div class='sub-desc'><p>The callback to execute with the results.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-startActivityUpdates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.MotionActivity'>Modules.CoreMotion.MotionActivity</span></div><a href='#!/api/Modules.CoreMotion.MotionActivity-method-startActivityUpdates' class='name expandable'>startActivityUpdates</a>( <span class='pre'>callback</span> )</div><div class='description'><div class='short'>Starts the delivery of current motion activity updates to your app. ...</div><div class='long'><p>Starts the delivery of current motion activity updates to your app.</p>\n\n<p><p>This method initiates the tracking of motion data asynchronously. \nUpon calling this method, the motion activity manager executes the \ncallback, reporting the current motion in effect for the device. \nAfter that, the motion activity manager executes the callback only \nwhen the motion data changes.</p>\n\n\n\n\n<p>The callback is executed on a best effort basis and updates are not \ndelivered while your app is suspended. If updates arrived while your \napp was suspended, the last update is delivered to your app when it \nresumes execution. To get all of the updates that occurred while your \napp was suspended, use the <a href=\"#!/api/Modules.CoreMotion.MotionActivity-method-queryActivity\" rel=\"Modules.CoreMotion.MotionActivity-method-queryActivity\" class=\"docClass\">queryActivity</a> method.</p>\n\n\n\n\n<p>Upon starting activity updates, the motion activity manager reports \nchanges to its callback until you call the <a href=\"#!/api/Modules.CoreMotion.MotionActivity-method-stopActivityUpdates\" rel=\"Modules.CoreMotion.MotionActivity-method-stopActivityUpdates\" class=\"docClass\">stopActivityUpdates</a> \nmethod. If you call this method again with a new callback, the activity \nmanager stops delivering updates to the old callback and delivers them \nto the new callback instead.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CoreMotionActivityData\" rel=\"CoreMotionActivityData\" class=\"docClass\">CoreMotionActivityData</a>&gt;<div class='sub-desc'><p>The method to be called when there is an update.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-stopActivityUpdates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.MotionActivity'>Modules.CoreMotion.MotionActivity</span></div><a href='#!/api/Modules.CoreMotion.MotionActivity-method-stopActivityUpdates' class='name expandable'>stopActivityUpdates</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stops the delivery of motion activity updates to your app. ...</div><div class='long'><p>Stops the delivery of motion activity updates to your app.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});