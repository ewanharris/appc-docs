Ext.data.JsonP['Titanium_App_iOS_BackgroundService']({"tagname":"class","name":"Titanium.App.iOS.BackgroundService","extends":"Titanium.Proxy","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["iphone 1.5","ipad 1.5"],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/App/iOS/BackgroundService.yml","description":["<p>A background service is created by {@link Titanium.App.iOS#method-registerBackgroundService}.  </p>\n\n<p>At creation, a local URL to a JavaScript file must be defined. The code it contains is executed \neach time the application is no longer in the foreground, along with all other services that have \nbeen registered in the same way. When this happens, all background services continue to run until \none of the following occurs:</p>\n\n<ul>\n<li>A service is stopped with the <code>stop</code> method.</li>\n<li>The application resumes, at which points all background services are stopped.</li>\n<li>The OS terminates the service for one of the reasons discussed in \n\"Background Service Limitations\", below.</li>\n</ul>\n\n<p>A background service can invoke a {@link Titanium.App.iOS.LocalNotification}, which prompts users via \na dialog to return to the application and provides a button that brings it back into the \nforeground.</p>\n\n<h4>Background Service Limitations</h4>\n\n<p>A background service is subject to limitations imposed by the operating system, such as</p>\n\n<ul>\n<li>The OS limits the total amount of time a background service can run for after the application \nis paused, typically to no more than 10 minutes.</li>\n<li>The OS may terminate the background service at any point to reclaim resources.</li>\n</ul> \n<h3>Examples</h3>\n<h4>Background Services Example</h4>\n<p>Two background services are registered in the following application.</p>\n\n<p>The first service logs a message every time the application is paused and then is stopped to \nrelease the service from memory. The service is not unregistered, and so will continue to be \ninvoked.</p>\n\n<p>The second creates an application property where it stores a run count value. For the first 4 \ntimes the application is paused, a local notification is invoked that gives the user the \nopportunity to bring the application back to the foreground. Once the run count reaches 5, \nthe service is unregistered and is not invoked again until the application is relaunched.</p>\n\n<h4>app.js</h4>\n\n<pre><code>var win1 = Ti.UI.createWindow({  \n  title:'Background Services Example',\n  backgroundColor:'#4186cd',\n  modal:true\n});\n\nTi.API.info('Registering background services');\nvar service = Ti.App.iOS.registerBackgroundService({url:'bg-service1.js'});\nvar service2 = Ti.App.iOS.registerBackgroundService({url:'bg-service2.js'});\nTi.API.info('*** Press home button to pause application ***');\n\nwin1.open();\n</code></pre>\n\n<h4>bg-service1.js</h4>\n\n<pre><code>Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory. ');\nTi.App.currentService.stop();\n\nvar listener = Ti.App.currentService.addEventListener('stop',function(){\n  Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed again on next pause');\n  Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always necessary to explicitly stop a service');\n});\n</code></pre>\n\n<h4>bg-service2.js</h4>\n\n<pre><code>var count = Ti.App.Properties.getInt('bg-svc2-count', 0);\n\nif (count &gt; 4){\n  // reset count after 4 invocations\n  count = 0;\n}\n\ncount++;\n\nTi.App.Properties.setInt('bg-svc2-count', count);\n\nTi.API.info('bg-service2 has been run ' + count + ' times');\n\nif (count &gt; 4){\n  Ti.App.currentService.unregister();\n  var finalNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: As service has been invoked more than 4 times, it has been unregistered and will NOT run again. Relaunch the app to re-register it',\n    date:new Date(new Date().getTime() + 1000) // 1 second after unregister\n  });   \n} else {\n  var curNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: has been invoked ' + count + ' times. It is still registered and will run again when the app is transitioned to the background',\n    date:new Date(new Date().getTime() + 1000) // 1 second after pause\n  });   \n}\n</code></pre>"]},"private":null,"id":"class-Titanium.App.iOS.BackgroundService","members":{"cfg":[],"property":[{"name":"apiName","tagname":"property","owner":"Titanium.Proxy","meta":{"readonly":true,"description":["<p>The value of this property is the fully qualified name of the API. For example, {@link Titanium.UI.Button Button}\nreturns <code>Ti.UI.Button</code>.</p>"],"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"property-apiName"},{"name":"bubbleParent","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"property-bubbleParent"},{"name":"lifecycleContainer","tagname":"property","owner":"Titanium.Proxy","meta":{"description":["<p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>"],"platform":["android 3.6.0"]},"id":"property-lifecycleContainer"},{"name":"url","tagname":"property","owner":"Titanium.App.iOS.BackgroundService","meta":{"creationOnly":[null]},"id":"property-url"}],"method":[{"name":"addEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-addEventListener"},{"name":"applyProperties","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>"],"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0","mobileweb 3.0.0"]},"id":"method-applyProperties"},{"name":"fireEvent","tagname":"method","owner":"Titanium.Proxy","meta":{},"id":"method-fireEvent"},{"name":"getApiName","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.2.0","iphone 3.2.0","ipad 3.2.0","mobileweb 3.2.0"]},"id":"method-getApiName"},{"name":"getBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-getBubbleParent"},{"name":"getLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-getLifecycleContainer"},{"name":"getUrl","tagname":"method","owner":"Titanium.App.iOS.BackgroundService","meta":{},"id":"method-getUrl"},{"name":"removeEventListener","tagname":"method","owner":"Titanium.Proxy","meta":{"description":["<p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>"]},"id":"method-removeEventListener"},{"name":"setBubbleParent","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.0.0","iphone 3.0.0","ipad 3.0.0"]},"id":"method-setBubbleParent"},{"name":"setLifecycleContainer","tagname":"method","owner":"Titanium.Proxy","meta":{"platform":["android 3.6.0"]},"id":"method-setLifecycleContainer"},{"name":"setUrl","tagname":"method","owner":"Titanium.App.iOS.BackgroundService","meta":{},"id":"method-setUrl"},{"name":"stop","tagname":"method","owner":"Titanium.App.iOS.BackgroundService","meta":{},"id":"method-stop"},{"name":"unregister","tagname":"method","owner":"Titanium.App.iOS.BackgroundService","meta":{},"id":"method-unregister"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":53860,"files":[{"filename":"titanium.js","href":"titanium.html#Titanium-App-iOS-BackgroundService"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.5</li><li class='platform-ipad'\n        title='iPad'>1.5</li></ul>","editurl":null,"description":"<p><p>A background service is created by <a href=\"#!/api/Titanium.App.iOS-method-registerBackgroundService\" rel=\"Titanium.App.iOS-method-registerBackgroundService\" class=\"docClass\">Titanium.App.iOS.registerBackgroundService</a>.  </p>\n\n\n\n\n<p>At creation, a local URL to a JavaScript file must be defined. The code it contains is executed \neach time the application is no longer in the foreground, along with all other services that have \nbeen registered in the same way. When this happens, all background services continue to run until \none of the following occurs:</p>\n\n\n\n\n<ul>\n<li>A service is stopped with the <code>stop</code> method.</li>\n<li>The application resumes, at which points all background services are stopped.</li>\n<li>The OS terminates the service for one of the reasons discussed in \n\"Background Service Limitations\", below.</li>\n</ul>\n\n\n\n\n<p>A background service can invoke a <a href=\"#!/api/Titanium.App.iOS.LocalNotification\" rel=\"Titanium.App.iOS.LocalNotification\" class=\"docClass\">Titanium.App.iOS.LocalNotification</a>, which prompts users via \na dialog to return to the application and provides a button that brings it back into the \nforeground.</p>\n\n\n\n\n<h4>Background Service Limitations</h4>\n\n\n\n\n<p>A background service is subject to limitations imposed by the operating system, such as</p>\n\n\n\n\n<ul>\n<li>The OS limits the total amount of time a background service can run for after the application \nis paused, typically to no more than 10 minutes.</li>\n<li>The OS may terminate the background service at any point to reclaim resources.</li>\n</ul>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Background Services Example</h4>\n\n\n<p>Two background services are registered in the following application.</p>\n\n\n\n\n<p>The first service logs a message every time the application is paused and then is stopped to \nrelease the service from memory. The service is not unregistered, and so will continue to be \ninvoked.</p>\n\n\n\n\n<p>The second creates an application property where it stores a run count value. For the first 4 \ntimes the application is paused, a local notification is invoked that gives the user the \nopportunity to bring the application back to the foreground. Once the run count reaches 5, \nthe service is unregistered and is not invoked again until the application is relaunched.</p>\n\n\n\n\n<h4>app.js</h4>\n\n\n\n\n<pre><code>var win1 = Ti.UI.createWindow({  \n  title:'Background Services Example',\n  backgroundColor:'#4186cd',\n  modal:true\n});\n\nTi.API.info('Registering background services');\nvar service = Ti.App.iOS.registerBackgroundService({url:'bg-service1.js'});\nvar service2 = Ti.App.iOS.registerBackgroundService({url:'bg-service2.js'});\nTi.API.info('*** Press home button to pause application ***');\n\nwin1.open();\n</code></pre>\n\n\n\n\n<h4>bg-service1.js</h4>\n\n\n\n\n<pre><code>Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory. ');\nTi.App.currentService.stop();\n\nvar listener = Ti.App.currentService.addEventListener('stop',function(){\n  Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed again on next pause');\n  Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always necessary to explicitly stop a service');\n});\n</code></pre>\n\n\n\n\n<h4>bg-service2.js</h4>\n\n\n\n\n<pre><code>var count = Ti.App.Properties.getInt('bg-svc2-count', 0);\n\nif (count &gt; 4){\n  // reset count after 4 invocations\n  count = 0;\n}\n\ncount++;\n\nTi.App.Properties.setInt('bg-svc2-count', count);\n\nTi.API.info('bg-service2 has been run ' + count + ' times');\n\nif (count &gt; 4){\n  Ti.App.currentService.unregister();\n  var finalNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: As service has been invoked more than 4 times, it has been unregistered and will NOT run again. Relaunch the app to re-register it',\n    date:new Date(new Date().getTime() + 1000) // 1 second after unregister\n  });   \n} else {\n  var curNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: has been invoked ' + count + ' times. It is still registered and will run again when the app is transitioned to the background',\n    date:new Date(new Date().getTime() + 1000) // 1 second after pause\n  });   \n}\n</code></pre>\n\n</p>"},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Titanium.Proxy","Titanium.App.iOS.BackgroundService"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-iphone' title='iPhone since Titanium SDK 1.5'>iPhone 1.5</li><li class='platform-ipad' title='iPad since Titanium SDK 1.5'>iPad 1.5</li></ul></div><div class='hierarchy'><div class='classes'><div class='subclass'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='docClass'>Titanium.Proxy</a></div><div class='subclass'> &gt; <strong>Titanium.App.iOS.BackgroundService</strong></div></div></div><div class='doc-contents'><p>A service that runs when the application is placed in the background.</p>\n\n<p><p>A background service is created by <a href=\"#!/api/Titanium.App.iOS-method-registerBackgroundService\" rel=\"Titanium.App.iOS-method-registerBackgroundService\" class=\"docClass\">Titanium.App.iOS.registerBackgroundService</a>.  </p>\n\n\n\n\n<p>At creation, a local URL to a JavaScript file must be defined. The code it contains is executed \neach time the application is no longer in the foreground, along with all other services that have \nbeen registered in the same way. When this happens, all background services continue to run until \none of the following occurs:</p>\n\n\n\n\n<ul>\n<li>A service is stopped with the <code>stop</code> method.</li>\n<li>The application resumes, at which points all background services are stopped.</li>\n<li>The OS terminates the service for one of the reasons discussed in \n\"Background Service Limitations\", below.</li>\n</ul>\n\n\n\n\n<p>A background service can invoke a <a href=\"#!/api/Titanium.App.iOS.LocalNotification\" rel=\"Titanium.App.iOS.LocalNotification\" class=\"docClass\">Titanium.App.iOS.LocalNotification</a>, which prompts users via \na dialog to return to the application and provides a button that brings it back into the \nforeground.</p>\n\n\n\n\n<h4>Background Service Limitations</h4>\n\n\n\n\n<p>A background service is subject to limitations imposed by the operating system, such as</p>\n\n\n\n\n<ul>\n<li>The OS limits the total amount of time a background service can run for after the application \nis paused, typically to no more than 10 minutes.</li>\n<li>The OS may terminate the background service at any point to reclaim resources.</li>\n</ul>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Background Services Example</h4>\n\n\n<p>Two background services are registered in the following application.</p>\n\n\n\n\n<p>The first service logs a message every time the application is paused and then is stopped to \nrelease the service from memory. The service is not unregistered, and so will continue to be \ninvoked.</p>\n\n\n\n\n<p>The second creates an application property where it stores a run count value. For the first 4 \ntimes the application is paused, a local notification is invoked that gives the user the \nopportunity to bring the application back to the foreground. Once the run count reaches 5, \nthe service is unregistered and is not invoked again until the application is relaunched.</p>\n\n\n\n\n<h4>app.js</h4>\n\n\n\n\n<pre><code>var win1 = Ti.UI.createWindow({  \n  title:'Background Services Example',\n  backgroundColor:'#4186cd',\n  modal:true\n});\n\nTi.API.info('Registering background services');\nvar service = Ti.App.iOS.registerBackgroundService({url:'bg-service1.js'});\nvar service2 = Ti.App.iOS.registerBackgroundService({url:'bg-service2.js'});\nTi.API.info('*** Press home button to pause application ***');\n\nwin1.open();\n</code></pre>\n\n\n\n\n<h4>bg-service1.js</h4>\n\n\n\n\n<pre><code>Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory. ');\nTi.App.currentService.stop();\n\nvar listener = Ti.App.currentService.addEventListener('stop',function(){\n  Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed again on next pause');\n  Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always necessary to explicitly stop a service');\n});\n</code></pre>\n\n\n\n\n<h4>bg-service2.js</h4>\n\n\n\n\n<pre><code>var count = Ti.App.Properties.getInt('bg-svc2-count', 0);\n\nif (count &gt; 4){\n  // reset count after 4 invocations\n  count = 0;\n}\n\ncount++;\n\nTi.App.Properties.setInt('bg-svc2-count', count);\n\nTi.API.info('bg-service2 has been run ' + count + ' times');\n\nif (count &gt; 4){\n  Ti.App.currentService.unregister();\n  var finalNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: As service has been invoked more than 4 times, it has been unregistered and will NOT run again. Relaunch the app to re-register it',\n    date:new Date(new Date().getTime() + 1000) // 1 second after unregister\n  });   \n} else {\n  var curNotif = Ti.App.iOS.scheduleLocalNotification({\n    alertBody:'bg-service2: has been invoked ' + count + ' times. It is still registered and will run again when the app is transitioned to the background',\n    date:new Date(new Date().getTime() + 1000) // 1 second after pause\n  });   \n}\n</code></pre>\n\n</p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.5</li><li class='platform-ipad'\n        title='iPad'>1.5</li></ul></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-apiName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-apiName' class='name not-expandable'>apiName</a><span> : String</span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'><p>The name of the API that this proxy corresponds to.</p>\n\n</div><div class='long'><p>The name of the API that this proxy corresponds to.</p>\n\n<p><p>The value of this property is the fully qualified name of the API. For example, <a href=\"#!/api/Titanium.UI.Button\" rel=\"Titanium.UI.Button\" class=\"docClass\">Button</a>\nreturns <code>Ti.UI.Button</code>.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul></div></div></div><div id='property-bubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-bubbleParent' class='name expandable'>bubbleParent</a><span> : Boolean</span></div><div class='description'><div class='short'>Indicates if the proxy will bubble an event to its parent. ...</div><div class='long'><p>Indicates if the proxy will bubble an event to its parent.</p>\n\n<p><p>Some proxies (most commonly views) have a relationship to other proxies, often\nestablished by the add() method. For example, for a button added to a window, a\nclick event on the button would bubble up to the window. Other common parents are\ntable sections to their rows, table views to their sections, and scrollable views\nto their views. Set this property to false to disable the bubbling to the proxy's parent.</p>\n\n</p><p>Default: true</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul></div></div></div><div id='property-lifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-property-lifecycleContainer' class='name not-expandable'>lifecycleContainer</a><span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span></div><div class='description'><div class='short'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n</div><div class='long'><p>The Window or TabGroup whose Activity lifecycle should be triggered on the proxy.</p>\n\n<p><p>If this property is set to a Window or TabGroup, then the corresponding Activity lifecycle event callbacks\nwill also be called on the proxy. Proxies that require the activity lifecycle will need this property set\nto the appropriate containing Window or TabGroup.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul></div></div></div><div id='property-url' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.App.iOS.BackgroundService'>Titanium.App.iOS.BackgroundService</span></div><a href='#!/api/Titanium.App.iOS.BackgroundService-property-url' class='name expandable'>url</a><span> : String</span><strong class='creationOnly signature' >Creation-Only</strong></div><div class='description'><div class='short'>A local URL to a JavaScript file containing the code to run in the background. ...</div><div class='long'><p>A local URL to a JavaScript file containing the code to run in the background.</p>\n\n<p>Default: none</p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addEventListener' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Adds the specified callback as an event listener for the named event. ...</div><div class='long'><p>Adds the specified callback as an event listener for the named event.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to invoke when the event is fired.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-applyProperties' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-applyProperties' class='name expandable'>applyProperties</a>( <span class='pre'>props</span> )</div><div class='description'><div class='short'>Applies the properties to the proxy. ...</div><div class='long'><p>Applies the properties to the proxy.</p>\n\n<p><p>Properties are supplied as a dictionary. Each key-value pair in the object is applied to the proxy such that\nmyproxy[key] = value.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of properties to apply.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fireEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>name, event</span> )</div><div class='description'><div class='short'>Fires a synthesized event to any registered listeners. ...</div><div class='long'><p>Fires a synthesized event to any registered listeners.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>event</span> : <a href=\"#!/api/Dictionary\" rel=\"Dictionary\" class=\"docClass\">Dictionary</a><div class='sub-desc'><p>A dictionary of keys and values to add to the <a href=\"#!/api/Titanium.Event\" rel=\"Titanium.Event\" class=\"docClass\">Titanium.Event</a> object sent to the listeners.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-getApiName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getApiName' class='name expandable'>getApiName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the apiName property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-apiName\" rel=\"Titanium.Proxy-property-apiName\" class=\"docClass\">apiName</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.2.0</li><li class='platform-iphone'\n        title='iPhone'>3.2.0</li><li class='platform-ipad'\n        title='iPad'>3.2.0</li><li class='platform-mobileweb'\n        title='Mobile Web'>3.2.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getBubbleParent' class='name expandable'>getBubbleParent</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Gets the value of the bubbleParent property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-getLifecycleContainer' class='name expandable'>getLifecycleContainer</a>( <span class='pre'></span> ) : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></div><div class='description'><div class='short'>Gets the value of the lifecycleContainer property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.App.iOS.BackgroundService'>Titanium.App.iOS.BackgroundService</span></div><a href='#!/api/Titanium.App.iOS.BackgroundService-method-getUrl' class='name expandable'>getUrl</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Gets the value of the url property. ...</div><div class='long'><p>Gets the value of the <a href=\"#!/api/Titanium.App.iOS.BackgroundService-property-url\" rel=\"Titanium.App.iOS.BackgroundService-property-url\" class=\"docClass\">url</a> property.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'>name, callback</span> )</div><div class='description'><div class='short'>Removes the specified callback as an event listener for the named event. ...</div><div class='long'><p>Removes the specified callback as an event listener for the named event.</p>\n\n<p><p>Multiple listeners can be registered for the same event, so the \n<code>callback</code> parameter is used to determine which listener to remove. </p>\n\n\n\n\n<p>When adding a listener, you must save a reference to the callback function\nin order to remove the listener later:</p>\n\n\n\n\n<pre><code>var listener = function() { Ti.API.info(\"Event listener called.\"); }\nwindow.addEventListener('click', listener);\n</code></pre>\n\n\n\n\n<p>To remove the listener, pass in a reference to the callback function:</p>\n\n\n\n\n<pre><code>window.removeEventListener('click', listener);\n</code></pre>\n\n</p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>Name of the event.</p>\n\n</div></li><li><span class='pre'>callback</span> : Callback&lt;Object&gt;<div class='sub-desc'><p>Callback function to remove. Must be the same function passed to <code>addEventListener</code>.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setBubbleParent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setBubbleParent' class='name expandable'>setBubbleParent</a>( <span class='pre'>bubbleParent</span> )</div><div class='description'><div class='short'>Sets the value of the bubbleParent property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-bubbleParent\" rel=\"Titanium.Proxy-property-bubbleParent\" class=\"docClass\">bubbleParent</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.0.0</li><li class='platform-iphone'\n        title='iPhone'>3.0.0</li><li class='platform-ipad'\n        title='iPad'>3.0.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bubbleParent</span> : Boolean<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setLifecycleContainer' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Titanium.Proxy' rel='Titanium.Proxy' class='defined-in docClass'>Titanium.Proxy</a></div><a href='#!/api/Titanium.Proxy-method-setLifecycleContainer' class='name expandable'>setLifecycleContainer</a>( <span class='pre'>lifecycleContainer</span> )</div><div class='description'><div class='short'>Sets the value of the lifecycleContainer property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.Proxy-property-lifecycleContainer\" rel=\"Titanium.Proxy-property-lifecycleContainer\" class=\"docClass\">lifecycleContainer</a> property.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>3.6.0</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>lifecycleContainer</span> : <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>/<a href=\"#!/api/Titanium.UI.TabGroup\" rel=\"Titanium.UI.TabGroup\" class=\"docClass\">Titanium.UI.TabGroup</a><div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-setUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.App.iOS.BackgroundService'>Titanium.App.iOS.BackgroundService</span></div><a href='#!/api/Titanium.App.iOS.BackgroundService-method-setUrl' class='name expandable'>setUrl</a>( <span class='pre'>url</span> )</div><div class='description'><div class='short'>Sets the value of the url property. ...</div><div class='long'><p>Sets the value of the <a href=\"#!/api/Titanium.App.iOS.BackgroundService-property-url\" rel=\"Titanium.App.iOS.BackgroundService-property-url\" class=\"docClass\">url</a> property.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>New value for the property.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.App.iOS.BackgroundService'>Titanium.App.iOS.BackgroundService</span></div><a href='#!/api/Titanium.App.iOS.BackgroundService-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stops the service from running during the current background session to conserve resources. ...</div><div class='long'><p>Stops the service from running during the current background session to conserve resources.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-unregister' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Titanium.App.iOS.BackgroundService'>Titanium.App.iOS.BackgroundService</span></div><a href='#!/api/Titanium.App.iOS.BackgroundService-method-unregister' class='name expandable'>unregister</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Unregisters the background service. ...</div><div class='long'><p>Unregisters the background service.</p>\n\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});