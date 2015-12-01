Ext.data.JsonP['Modules_CoreMotion_StepCounter']({"tagname":"class","name":"Modules.CoreMotion.StepCounter","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 5.2.0","ipad 5.2.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator-modules/ti.coremotion/edit/master/%MODULE_PATH%","deprecated":{"text":"5.2.0 This API was deprecated by Apple in iOS 7 and is only available for backward compatibility \nwith older versions of this module. It will be removed in the next release. Please use \n<Modules.CoreMotion.Pedometer> API instead, which provides the same functionality including \nnew properties like `floorCount` and `distance`."}},"private":null,"id":"class-Modules.CoreMotion.StepCounter","members":{"cfg":[],"property":[],"method":[{"name":"isStepCountingAvailable","tagname":"method","owner":"Modules.CoreMotion.StepCounter","meta":{},"id":"method-isStepCountingAvailable"},{"name":"queryStepCount","tagname":"method","owner":"Modules.CoreMotion.StepCounter","meta":{"description":["<p>The system stores only the last seven days worth of step data at most. \nIf there are no samples for the specified range of time, a value of 0 is passed to the callback.</p>"]},"id":"method-queryStepCount"},{"name":"startStepCountingUpdates","tagname":"method","owner":"Modules.CoreMotion.StepCounter","meta":{"description":["<p>This method initiates tracking of the user's steps and calls the callback \nperiodically to deliver the results. When you call this method, the step counter \nresets the current step count value to 0 and begins counting. Each time the step \ncounter records the number of steps in the stepCounts parameter, it executes the \nspecified callback. For example, if stepCounts is 100, it would send updates \nat 100 steps, 200 steps, 300 steps, and so on. The number of steps reported to your \nhandler is always the total number of steps since you called this method.</p>\n\n<p>The callback is executed on a best effort basis each time the step count \nthreshold is exceeded. If your app is suspended when the threshold is exceeded, \nthe callback is not executed. When your app resumes, the callback is not executed \nuntil the threshold is exceeded again.</p>\n\n<p>To stop the delivery of step-counting updates, call the \n{@link Modules.CoreMotion.StepCounter#method-stopStepCountingUpdates} method. </p>"]},"id":"method-startStepCountingUpdates"},{"name":"stopStepCountingUpdates","tagname":"method","owner":"Modules.CoreMotion.StepCounter","meta":{"description":["<p>Call this method to stop the delivery of updates that you started by calling \nthe <Modules.CoreMotion.startStepCountingUpdates> method. This method does not \nstop queries started using the {@link Modules.CoreMotion.StepCounter#method-queryStepCount} method.</p>"]},"id":"method-stopStepCountingUpdates"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":25190,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-CoreMotion-StepCounter"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null,"deprecated":"        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> <p>5.2.0 This API was deprecated by Apple in iOS 7 and is only available for backward compatibility\nwith older versions of this module. It will be removed in the next release. Please use\n&lt;<a href=\"#!/api/Modules.CoreMotion.Pedometer\" rel=\"Modules.CoreMotion.Pedometer\" class=\"docClass\">Modules.CoreMotion.Pedometer</a>> API instead, which provides the same functionality including\nnew properties like <code>floorCount</code> and <code>distance</code>.</p>\n</p>\n        </div>\n"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 5.2.0'>iPhone 5.2.0</li><li class='platform-ipad' title='iPad since Titanium SDK 5.2.0'>iPad 5.2.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Allows Titanium client applications to access CoreMotion's (deprecated) StepCounter APIs.</p>\n\n        <div class='signature-box deprecated'>\n        <p><strong>deprecated</strong> <p>5.2.0 This API was deprecated by Apple in iOS 7 and is only available for backward compatibility\nwith older versions of this module. It will be removed in the next release. Please use\n&lt;<a href=\"#!/api/Modules.CoreMotion.Pedometer\" rel=\"Modules.CoreMotion.Pedometer\" class=\"docClass\">Modules.CoreMotion.Pedometer</a>> API instead, which provides the same functionality including\nnew properties like <code>floorCount</code> and <code>distance</code>.</p>\n</p>\n        </div>\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>5.2.0</li><li class='platform-ipad'\n        title='iPad'>5.2.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-isStepCountingAvailable' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.StepCounter'>Modules.CoreMotion.StepCounter</span></div><a href='#!/api/Modules.CoreMotion.StepCounter-method-isStepCountingAvailable' class='name expandable'>isStepCountingAvailable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns a Boolean indicating whether step-counting support is available on the current device. ...</div><div class='long'><p>Returns a Boolean indicating whether step-counting support is available on the current device.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-queryStepCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.StepCounter'>Modules.CoreMotion.StepCounter</span></div><a href='#!/api/Modules.CoreMotion.StepCounter-method-queryStepCount' class='name expandable'>queryStepCount</a>( <span class='pre'>args, callback</span> )</div><div class='description'><div class='short'>Gathers and returns historical step count data for the specified time period. ...</div><div class='long'><p>Gathers and returns historical step count data for the specified time period.</p>\n\n<p><p>The system stores only the last seven days worth of step data at most. \nIf there are no samples for the specified range of time, a value of 0 is passed to the callback.</p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/CoreMotionQueryStepCountArgs\" rel=\"CoreMotionQueryStepCountArgs\" class=\"docClass\">CoreMotionQueryStepCountArgs</a><div class='sub-desc'><p>An object of arguments</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CoreMotionStepCountingQueryDataWithSuccess\" rel=\"CoreMotionStepCountingQueryDataWithSuccess\" class=\"docClass\">CoreMotionStepCountingQueryDataWithSuccess</a>&gt;<div class='sub-desc'><p>The callback to execute with the results.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-startStepCountingUpdates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.StepCounter'>Modules.CoreMotion.StepCounter</span></div><a href='#!/api/Modules.CoreMotion.StepCounter-method-startStepCountingUpdates' class='name expandable'>startStepCountingUpdates</a>( <span class='pre'>args, callback</span> )</div><div class='description'><div class='short'>Starts the delivery of current step-counting data to your app. ...</div><div class='long'><p>Starts the delivery of current step-counting data to your app.</p>\n\n<p><p>This method initiates tracking of the user's steps and calls the callback \nperiodically to deliver the results. When you call this method, the step counter \nresets the current step count value to 0 and begins counting. Each time the step \ncounter records the number of steps in the stepCounts parameter, it executes the \nspecified callback. For example, if stepCounts is 100, it would send updates \nat 100 steps, 200 steps, 300 steps, and so on. The number of steps reported to your \nhandler is always the total number of steps since you called this method.</p>\n\n\n\n\n<p>The callback is executed on a best effort basis each time the step count \nthreshold is exceeded. If your app is suspended when the threshold is exceeded, \nthe callback is not executed. When your app resumes, the callback is not executed \nuntil the threshold is exceeded again.</p>\n\n\n\n\n<p>To stop the delivery of step-counting updates, call the \n<a href=\"#!/api/Modules.CoreMotion.StepCounter-method-stopStepCountingUpdates\" rel=\"Modules.CoreMotion.StepCounter-method-stopStepCountingUpdates\" class=\"docClass\">stopStepCountingUpdates</a> method. </p>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : <a href=\"#!/api/CoreMotionStartStepCountingArgs\" rel=\"CoreMotionStartStepCountingArgs\" class=\"docClass\">CoreMotionStartStepCountingArgs</a><div class='sub-desc'><p>An object of arguments</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;<a href=\"#!/api/CoreMotionStepCountingDataWithSuccess\" rel=\"CoreMotionStepCountingDataWithSuccess\" class=\"docClass\">CoreMotionStepCountingDataWithSuccess</a>&gt;<div class='sub-desc'><p>The callback to execute with the results.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-stopStepCountingUpdates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion.StepCounter'>Modules.CoreMotion.StepCounter</span></div><a href='#!/api/Modules.CoreMotion.StepCounter-method-stopStepCountingUpdates' class='name expandable'>stopStepCountingUpdates</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stops the delivery of step-counting updates to your app. ...</div><div class='long'><p>Stops the delivery of step-counting updates to your app.</p>\n\n<p><p>Call this method to stop the delivery of updates that you started by calling \nthe <Modules.CoreMotion.startStepCountingUpdates> method. This method does not \nstop queries started using the <a href=\"#!/api/Modules.CoreMotion.StepCounter-method-queryStepCount\" rel=\"Modules.CoreMotion.StepCounter-method-queryStepCount\" class=\"docClass\">queryStepCount</a> method.</Modules></p>\n\n</p><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});