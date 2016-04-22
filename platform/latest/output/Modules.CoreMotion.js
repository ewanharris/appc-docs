Ext.data.JsonP['Modules_CoreMotion']({"tagname":"class","name":"Modules.CoreMotion","extends":"Titanium.Module","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 3.3.0","ipad 3.3.0"],"editurl":"https://github.com/appcelerator-modules/ti.coremotion/edit/master/apidoc/CoreMotion.yml","description":["<p>The Core Motion module provides access to Apple's CoreMotion APIs. The Core Motion module provides support\nfor monitoring various hardware sensors on iOS devices, such as the accelerometer, gyroscope, and\nmagnetometer. The Core Motion module allows you to access the metrics provided by these sensors.</p>\n\n<p>For instruction and examples of using the Core Motion Module, see the\n<a href=\"http://docs.appcelerator.com/titanium/latest/#!/guide/Core_Motion_Module\">Core Motion Module guide</a>.</p>\n\n<h3>Requirements</h3>\n\n<p>This module only works with devices running iOS 7 and later. Not all devices have the same hardware sensors,\nso all features may not be available for all devices. Be sure to use the API to check the device\nfor the existence of a feature.</p>\n\n<p>You can only test the Core Motion module on a device. The Core Motion API cannot be tested on the iOS\nsimulator.</p>\n\n<p>Some features may require permission to use \"Motion Activity\". iOS requires the user's approval to\nuse the \"Motion Activity\" permission. When the application uses the Core Motion API for the first\ntime, iOS prompts the user to either approve or deny access to the Core Motion features of the\ndevice. The user can change the permission settings with <strong>Settings</strong> > <strong>Privacy</strong>.</p>\n\n<h3>Getting Started</h3>\n\n<p>Once you have <a href=\"#!/guide/Using_a_Module\">installed</a> the module and added it as a depedency,\nuse <code>require()</code> to access it from JavaScript:</p>\n\n<pre><code>var CoreMotion = require(\"ti.coremotion\");\n\nThe `CoreMotion` variable is a reference to the Module object.  Use this reference to make\nsubsequent calls to the CoreMotion Module API. The following example shows the step counting\nAPI of `CoreMotion`.\n\nvar pedometer = CoreMotion.createPedometer();\n\n// This code checks to see if the device can gather step counting data\nif (pedometer.isStepCountingAvailable()) {\n    // If it can, it starts the step counter and outputs the data to the console\n    pedometer.startPedometerUpdates(function(e){\n        Ti.API.info(JSON.stringify(e));\n    });\n} else {\n    Ti.API.warn('This device does not support counting steps.');\n}\n</code></pre>\n\n<h3>Sample Application</h3>\n\n<p>The module ZIP file contains a Core Motion sample applications in <code>example/app.js</code>.</p>\n\n<h3>Further Reading</h3>\n\n<ul>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/_index.html\">iOS Developer Library: Core Motion Framework Reference</a></li>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/motion_event_basics/motion_event_basics.html\">iOS Developer Library: Motion Events</a></li>\n</ul>"]},"private":null,"id":"class-Modules.CoreMotion","members":{"cfg":[],"property":[{"name":"ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL"},{"name":"ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL"},{"name":"ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL"},{"name":"ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL"},{"name":"ERROR_DEVICE_REQUIRES_MOVEMENT","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_DEVICE_REQUIRES_MOVEMENT"},{"name":"ERROR_INVALID_PARAMETER","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_INVALID_PARAMETER"},{"name":"ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED"},{"name":"ERROR_MOTION_ACTIVITY_NOT_AVAILABLE","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_MOTION_ACTIVITY_NOT_AVAILABLE"},{"name":"ERROR_MOTION_ACTIVITY_NOT_ENTITLED","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_MOTION_ACTIVITY_NOT_ENTITLED"},{"name":"ERROR_NULL","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_NULL"},{"name":"ERROR_TRUE_NORTH_NOT_AVAILABLE","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_TRUE_NORTH_NOT_AVAILABLE"},{"name":"ERROR_UNKNOWN","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-ERROR_UNKNOWN"},{"name":"MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH"},{"name":"MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW"},{"name":"MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM"},{"name":"MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED"},{"name":"MOTION_ACTIVITY_CONFIDENCE_HIGH","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MOTION_ACTIVITY_CONFIDENCE_HIGH"},{"name":"MOTION_ACTIVITY_CONFIDENCE_LOW","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MOTION_ACTIVITY_CONFIDENCE_LOW"},{"name":"MOTION_ACTIVITY_CONFIDENCE_MEDIUM","tagname":"property","owner":"Modules.CoreMotion","meta":{"readonly":true},"id":"property-MOTION_ACTIVITY_CONFIDENCE_MEDIUM"},{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"property-apiName"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"property-lifecycleContainer"}],"method":[{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0","windowsphone 4.1.0"]},"id":"method-getApiName"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-getLifecycleContainer"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0","windowsphone 4.1.0"]},"id":"method-setLifecycleContainer"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":19699,"files":[{"filename":"titanium.js","href":"titanium.html#Modules-CoreMotion"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul>","editurl":null,"description":"<p><p>The Core Motion module provides access to Apple's CoreMotion APIs. The Core Motion module provides support\nfor monitoring various hardware sensors on iOS devices, such as the accelerometer, gyroscope, and\nmagnetometer. The Core Motion module allows you to access the metrics provided by these sensors.</p>\n\n\n\n\n<p>For instruction and examples of using the Core Motion Module, see the\n<a href=\"http://docs.appcelerator.com/titanium/latest/#!/guide/Core_Motion_Module\">Core Motion Module guide</a>.</p>\n\n\n\n\n<h3>Requirements</h3>\n\n\n\n\n<p>This module only works with devices running iOS 7 and later. Not all devices have the same hardware sensors,\nso all features may not be available for all devices. Be sure to use the API to check the device\nfor the existence of a feature.</p>\n\n\n\n\n<p>You can only test the Core Motion module on a device. The Core Motion API cannot be tested on the iOS\nsimulator.</p>\n\n\n\n\n<p>Some features may require permission to use \"Motion Activity\". iOS requires the user's approval to\nuse the \"Motion Activity\" permission. When the application uses the Core Motion API for the first\ntime, iOS prompts the user to either approve or deny access to the Core Motion features of the\ndevice. The user can change the permission settings with <strong>Settings</strong> > <strong>Privacy</strong>.</p>\n\n\n\n\n<h3>Getting Started</h3>\n\n\n\n\n<p>Once you have <a href=\"#!/guide/Using_a_Module\">installed</a> the module and added it as a depedency,\nuse <code>require()</code> to access it from JavaScript:</p>\n\n\n\n\n<pre><code>var CoreMotion = require(\"ti.coremotion\");\n\nThe `CoreMotion` variable is a reference to the Module object.  Use this reference to make\nsubsequent calls to the CoreMotion Module API. The following example shows the step counting\nAPI of `CoreMotion`.\n\nvar pedometer = CoreMotion.createPedometer();\n\n// This code checks to see if the device can gather step counting data\nif (pedometer.isStepCountingAvailable()) {\n    // If it can, it starts the step counter and outputs the data to the console\n    pedometer.startPedometerUpdates(function(e){\n        Ti.API.info(JSON.stringify(e));\n    });\n} else {\n    Ti.API.warn('This device does not support counting steps.');\n}\n</code></pre>\n\n\n\n\n<h3>Sample Application</h3>\n\n\n\n\n<p>The module ZIP file contains a Core Motion sample applications in <code>example/app.js</code>.</p>\n\n\n\n\n<h3>Further Reading</h3>\n\n\n\n\n<ul>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/_index.html\">iOS Developer Library: Core Motion Framework Reference</a></li>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/motion_event_basics/motion_event_basics.html\">iOS Developer Library: Motion Events</a></li>\n</ul>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.Module","Modules.CoreMotion"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 3.3.0'>iPhone 3.3.0</li><li class='platform-ipad' title='iPad since Titanium SDK 3.3.0'>iPad 3.3.0</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <a href='#!/api/Titanium.Module' rel='Titanium.Module' class='docClass'>Titanium.Module</a></div><div class='subclass'> &gt; <strong>Modules.CoreMotion</strong></div></div></div><div class='doc-contents'><p>Allows Titanium client applications to access Apple's CoreMotion APIs.</p>\n\n<p><p>The Core Motion module provides access to Apple's CoreMotion APIs. The Core Motion module provides support\nfor monitoring various hardware sensors on iOS devices, such as the accelerometer, gyroscope, and\nmagnetometer. The Core Motion module allows you to access the metrics provided by these sensors.</p>\n\n\n\n\n<p>For instruction and examples of using the Core Motion Module, see the\n<a href=\"http://docs.appcelerator.com/titanium/latest/#!/guide/Core_Motion_Module\">Core Motion Module guide</a>.</p>\n\n\n\n\n<h3>Requirements</h3>\n\n\n\n\n<p>This module only works with devices running iOS 7 and later. Not all devices have the same hardware sensors,\nso all features may not be available for all devices. Be sure to use the API to check the device\nfor the existence of a feature.</p>\n\n\n\n\n<p>You can only test the Core Motion module on a device. The Core Motion API cannot be tested on the iOS\nsimulator.</p>\n\n\n\n\n<p>Some features may require permission to use \"Motion Activity\". iOS requires the user's approval to\nuse the \"Motion Activity\" permission. When the application uses the Core Motion API for the first\ntime, iOS prompts the user to either approve or deny access to the Core Motion features of the\ndevice. The user can change the permission settings with <strong>Settings</strong> > <strong>Privacy</strong>.</p>\n\n\n\n\n<h3>Getting Started</h3>\n\n\n\n\n<p>Once you have <a href=\"#!/guide/Using_a_Module\">installed</a> the module and added it as a depedency,\nuse <code>require()</code> to access it from JavaScript:</p>\n\n\n\n\n<pre><code>var CoreMotion = require(\"ti.coremotion\");\n\nThe `CoreMotion` variable is a reference to the Module object.  Use this reference to make\nsubsequent calls to the CoreMotion Module API. The following example shows the step counting\nAPI of `CoreMotion`.\n\nvar pedometer = CoreMotion.createPedometer();\n\n// This code checks to see if the device can gather step counting data\nif (pedometer.isStepCountingAvailable()) {\n    // If it can, it starts the step counter and outputs the data to the console\n    pedometer.startPedometerUpdates(function(e){\n        Ti.API.info(JSON.stringify(e));\n    });\n} else {\n    Ti.API.warn('This device does not support counting steps.');\n}\n</code></pre>\n\n\n\n\n<h3>Sample Application</h3>\n\n\n\n\n<p>The module ZIP file contains a Core Motion sample applications in <code>example/app.js</code>.</p>\n\n\n\n\n<h3>Further Reading</h3>\n\n\n\n\n<ul>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/CoreMotion/Reference/CoreMotion_Reference/_index.html\">iOS Developer Library: Core Motion Framework Reference</a></li>\n<li><a href=\"https://developer.apple.com/library/ios/documentation/EventHandling/Conceptual/EventHandlingiPhoneOS/motion_event_basics/motion_event_basics.html\">iOS Developer Library: Motion Events</a></li>\n</ul>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>3.3.0</li><li class='platform-ipad'\n        title='iPad'>3.3.0</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL' class='name expandable'>ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_CORRECTED_Z_VERTICAL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Describes the same reference frame as\nATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL\nexcept that the magnetometer, w...</div><div class='long'><p>Describes the same reference frame as\n<a href=\"#!/api/Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL\" rel=\"Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL\" class=\"docClass\">ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL</a>\nexcept that the magnetometer, when available and calibrated, is used to\nimprove long-term yaw accuracy. Using this constant instead of\n<a href=\"#!/api/Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL\" rel=\"Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL\" class=\"docClass\">ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL</a>\nresults in increased CPU usage.</p>\n\n</div></div></div><div id='property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL' class='name expandable'>ATTITUDE_REFERENCE_FRAME_X_ARBITRARY_Z_VERTICAL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Describes a reference frame in which the Z axis is vertical and the X axis points\nin an arbitrary direction in the ho...</div><div class='long'><p>Describes a reference frame in which the Z axis is vertical and the X axis points\nin an arbitrary direction in the horizontal plane.</p>\n\n</div></div></div><div id='property-ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL' class='name expandable'>ATTITUDE_REFERENCE_FRAME_X_MAGNETIC_NORTH_Z_VERTICAL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Describes a reference frame in which the Z axis is vertical and the X axis points\ntoward magnetic north. ...</div><div class='long'><p>Describes a reference frame in which the Z axis is vertical and the X axis points\ntoward magnetic north. Note that using this reference frame may require device\nmovement to calibrate the magnetometer.</p>\n\n</div></div></div><div id='property-ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL' class='name expandable'>ATTITUDE_REFERENCE_FRAME_X_TRUE_NORTH_Z_VERTICAL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Describes a reference frame in which the Z axis is vertical and the X axis points\ntoward true north. ...</div><div class='long'><p>Describes a reference frame in which the Z axis is vertical and the X axis points\ntoward true north. Note that using this reference frame may require device movement\nto calibrate the magnetometer. It also requires the location to be available in order\nto calculate the difference between magnetic and true north.</p>\n\n</div></div></div><div id='property-ERROR_DEVICE_REQUIRES_MOVEMENT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_DEVICE_REQUIRES_MOVEMENT' class='name not-expandable'>ERROR_DEVICE_REQUIRES_MOVEMENT</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The device must move for a sampling of motion data to occur.</p>\n\n</div><div class='long'><p>The device must move for a sampling of motion data to occur.</p>\n\n</div></div></div><div id='property-ERROR_INVALID_PARAMETER' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_INVALID_PARAMETER' class='name not-expandable'>ERROR_INVALID_PARAMETER</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>An invalid parameter was specified.</p>\n\n</div><div class='long'><p>An invalid parameter was specified.</p>\n\n</div></div></div><div id='property-ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED' class='name not-expandable'>ERROR_MOTION_ACTIVITY_NOT_AUTHORIZED</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The app is not currently authorized to use motion activity support.</p>\n\n</div><div class='long'><p>The app is not currently authorized to use motion activity support.</p>\n\n</div></div></div><div id='property-ERROR_MOTION_ACTIVITY_NOT_AVAILABLE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_MOTION_ACTIVITY_NOT_AVAILABLE' class='name not-expandable'>ERROR_MOTION_ACTIVITY_NOT_AVAILABLE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Motion activity support is not available on the current device.</p>\n\n</div><div class='long'><p>Motion activity support is not available on the current device.</p>\n\n</div></div></div><div id='property-ERROR_MOTION_ACTIVITY_NOT_ENTITLED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_MOTION_ACTIVITY_NOT_ENTITLED' class='name not-expandable'>ERROR_MOTION_ACTIVITY_NOT_ENTITLED</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The app is missing a required entitlement.</p>\n\n</div><div class='long'><p>The app is missing a required entitlement.</p>\n\n</div></div></div><div id='property-ERROR_NULL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_NULL' class='name not-expandable'>ERROR_NULL</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>No error.</p>\n\n</div><div class='long'><p>No error.</p>\n\n</div></div></div><div id='property-ERROR_TRUE_NORTH_NOT_AVAILABLE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_TRUE_NORTH_NOT_AVAILABLE' class='name expandable'>ERROR_TRUE_NORTH_NOT_AVAILABLE</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>True north is not available on this device. ...</div><div class='long'><p>True north is not available on this device. This usually indicates that the device's location is not yet available.</p>\n\n</div></div></div><div id='property-ERROR_UNKNOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-ERROR_UNKNOWN' class='name not-expandable'>ERROR_UNKNOWN</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>An unknown error occurred.</p>\n\n</div><div class='long'><p>An unknown error occurred.</p>\n\n</div></div></div><div id='property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH' class='name not-expandable'>MAGNETIC_FIELD_CALIBRATION_ACCURACY_HIGH</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The accuracy of the magnetic field calibration is high.</p>\n\n</div><div class='long'><p>The accuracy of the magnetic field calibration is high.</p>\n\n</div></div></div><div id='property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW' class='name not-expandable'>MAGNETIC_FIELD_CALIBRATION_ACCURACY_LOW</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The accuracy of the magnetic field calibration is low.</p>\n\n</div><div class='long'><p>The accuracy of the magnetic field calibration is low.</p>\n\n</div></div></div><div id='property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM' class='name not-expandable'>MAGNETIC_FIELD_CALIBRATION_ACCURACY_MEDIUM</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The accuracy of the magnetic field calibration is medium.</p>\n\n</div><div class='long'><p>The accuracy of the magnetic field calibration is medium.</p>\n\n</div></div></div><div id='property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED' class='name not-expandable'>MAGNETIC_FIELD_CALIBRATION_ACCURACY_UNCALIBRATED</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The magnetic field estimate is not calibrated.</p>\n\n</div><div class='long'><p>The magnetic field estimate is not calibrated.</p>\n\n</div></div></div><div id='property-MOTION_ACTIVITY_CONFIDENCE_HIGH' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MOTION_ACTIVITY_CONFIDENCE_HIGH' class='name not-expandable'>MOTION_ACTIVITY_CONFIDENCE_HIGH</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Confidence is high.</p>\n\n</div><div class='long'><p>Confidence is high.</p>\n\n</div></div></div><div id='property-MOTION_ACTIVITY_CONFIDENCE_LOW' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MOTION_ACTIVITY_CONFIDENCE_LOW' class='name not-expandable'>MOTION_ACTIVITY_CONFIDENCE_LOW</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Confidence is low.</p>\n\n</div><div class='long'><p>Confidence is low.</p>\n\n</div></div></div><div id='property-MOTION_ACTIVITY_CONFIDENCE_MEDIUM' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Modules.CoreMotion'>Modules.CoreMotion</span></div><a href='#!/api/Modules.CoreMotion-property-MOTION_ACTIVITY_CONFIDENCE_MEDIUM' class='name not-expandable'>MOTION_ACTIVITY_CONFIDENCE_MEDIUM</a><span> : Number</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>Confidence is good.</p>\n\n</div><div class='long'><p>Confidence is good.</p>\n\n</div></div></div><div id='property-apiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getApiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li><li class='platform-windowsphone'\n        title='Window Phone'>4.1.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});