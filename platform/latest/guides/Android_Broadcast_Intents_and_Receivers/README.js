Ext.data.JsonP['Android_Broadcast_Intents_and_Receivers']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Android Broadcast Intents and Receivers</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43287851\" class=\"content\">\n            <h1>Android Broadcast Intents and Receivers</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-SendaBroadcast\">Send a Broadcast</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-CreateaBroadcastIntent\">Create a Broadcast Intent</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-SendaBroadcast.1\">Send a Broadcast</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-SendaBroadcastwithaPermission\">Send a Broadcast with a Permission</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-MonitoraBroadcast\">Monitor a Broadcast</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Broadcast_Intents_and_Receivers-section-43287851_AndroidBroadcastIntentsandReceivers-FurtherReading\">Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nIn Android, the OS or an application can send out a broadcast message that can be monitored by any application.  Some broadcasts require a special permission to be set in the application in order to monitor it.  For example, the Android OS sends out broadcast messages about the device, such as if the device has a low battery or changes to airplane mode, while an application can send out a custom broadcast message.    </p>\n    <p>\nThe application can use broadcast receivers to monitor system events from the Android OS as well as custom broadcasts sent by other applications.  The application will need to know the name of the broadcast actions in order to monitor them.  Note that Titanium only supports programmatically creating and registering broadcast receivers.  Titanium does not support declaring a receiver in the Android manifest.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-SendaBroadcast\">\n        <h2 class=\"heading \"><span>Send a Broadcast</span></h2>\n    <p>\nTo send a broadcast, create an intent using the <tt class=\" \">Titanium.Android.createBroadcastIntent()</tt> method.  Pass the intent object to the current activity's <tt class=\" \">sendBroadcast()</tt> or <tt class=\" \">sendBroadcastWithPermission()</tt> method.    </p>\n    <div class=\"section section-3 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-CreateaBroadcastIntent\">\n        <h3 class=\"heading \"><span>Create a Broadcast Intent</span></h3>\n    <p>\nTo create a broadcast intent, pass the <tt class=\" \">Titanium.Android.createBroadcastIntent()</tt> method an object with its <tt class=\" \">action</tt> property set to a string describing the action that took place.  Use a reverse domain name scheme in order to avoid potential conflicts with other applications.    </p>\n    <p>\nTo send extra data with the intent, use the intent's <tt class=\" \">putExtra()</tt> method to add data.  For details, see <a class=\"document-link \" href=\"#!/guide/Android_Intents-section-43287298_AndroidIntents-AddExtraData\">Android Intents: Add Extra Data</a>.    </p>\n    <p>\nThe application can also create an explicit intent to send the broadcast to a specific application or application activity.  Specify the intent object's <tt class=\" \">className</tt> and <tt class=\" \">packageName</tt> properties, or the <tt class=\" \">url</tt> property, but not both.  For details, see <a class=\"document-link \" href=\"#!/guide/Android_Intents-section-43287298_AndroidIntents-CreateanExplicitIntent\">Android Intents: Create an Explicit Intent</a>.    </p>\n    <p>\nThe following example creates a broadcast intent and adds extra data to be passed on to the application or activity.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createBroadcastIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: </code><code class=\"string\">'com.appcelerator.action.ALERT'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">intent.putExtra(Ti.Android.EXTRA_TEXT, </code><code class=\"string\">'Download update'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-SendaBroadcast.1\">\n        <h3 class=\"heading \"><span>Send a Broadcast</span></h3>\n    <p>\nTo send a broadcast, pass the Intent object to the current activity's <tt class=\" \">sendBroadcast()</tt> method.  Use the <tt class=\" \">Titanium.Android.currentActivity</tt> property to get a reference to the application's current activity.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ti.Android.currentActivity.sendBroadcast(intent);</code></div>\n</div>\n</div>    <p>\nAny application that has a registered broadcast receiver listening to <tt class=\" \">com.appcelerator.action.ALERT</tt> action will be notified.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-SendaBroadcastwithaPermission\">\n        <h3 class=\"heading \"><span>Send a Broadcast with a Permission</span></h3>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n        \n    <p>\nInstead of sending a broadcast with a permission, you can create an explicit intent (described in the <i class=\" \">Create a Broadcast Intent</i> section) to send the broadcast to a specific application if you know the package name and class name of the application.    </p>\n    </div>\n    \n    <p>\nTo restrict which application can receive the broadcast, send a broadcast with a permission:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nCreate the broadcast intent.    </p>\n</li><li class=\" \">    <p>\nDeclare the permission in the Android manifest section of the <tt class=\" \">tiapp.xml</tt> file using the <tt class=\" \">&lt;permission&gt;</tt> element with the <tt class=\" \">android:name</tt> attribute set to the name of the action.    </p>\n</li><li class=\" \">    <p>\nPass the Intent object and permission to the <tt class=\" \">sendBroadcastWithPermission()</tt> method.    </p>\n</li></ol>    <p>\nIn order to receive the broadcast, the receiving application needs to declare that it can use the permission in the Android manifest section of the <tt class=\" \">tiapp.xml</tt>.    </p>\n    <p>\nThe example below takes the previous example and adds a permission to it.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- Declare the permission --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;android&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        \t&lt;permission android:name=</code><code class=\"string\">\"com.appcelerator.action.ALERT\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/android&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createBroadcastIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    action: </code><code class=\"string\">'com.appcelerator.action.ALERT'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">intent.putExtra(Ti.Android.EXTRA_TEXT, </code><code class=\"string\">'Download update'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Android.currentActivity.sendBroadcastWithPermission(intent, </code><code class=\"string\">'com.appcelerator.action.ALERT'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-MonitoraBroadcast\">\n        <h2 class=\"heading \"><span>Monitor a Broadcast</span></h2>\n    <p>\nTo monitor a broadcast, the application needs to create a broadcast receive and register the broadcast receive with the OS.  Use the <tt class=\" \">Titanium.Android.createBroadcastReceiver()</tt> method to create a broadcast receiver, then register it with the  <tt class=\" \">Titanium.Android.registerBroadcastReceiver()</tt> method.  Note that to receive some broadcasts, the application will need to declare the correct permission in Android manifest section of the <tt class=\" \">tiapp.xml</tt> file.    </p>\n    <p>\n<strong class=\" \">To create a broadcast receiver</strong>, pass the <tt class=\" \">Titanium.Android.createBroadcastReceiver()</tt> method a dictionary object with the one of the following properties defined, but not both:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">onReceived</tt>: Assign a callback function to handle the broadcast.  The callback function is passed an object with its <tt class=\" \">intent</tt> property set to the Intent that created the broadcast.    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">url</tt>: Assign to the URL of a JavaScript file to handle the broadcast.  Note that the JavaScript file does have any context passed to it, so it will not know the intent that created the broadcast.    </p>\n</li></ul>    <p>\n<strong class=\" \">To register a broadcast receiver</strong>, pass the <tt class=\" \">Titanium.Android.registerBroadcastReceiver()</tt> method a <tt class=\" \">BroadcastReceiver</tt> object as the first parameter and an array of actions to monitor as the second parameter.  Android system broadcasts are declared as <tt class=\" \">Titanium.Android.ACTION_*</tt> constants.  Note that not all actions are system broadcasts.    </p>\n    <p>\n<strong class=\" \">To unregister a broadcast receiver</strong>, pass the <tt class=\" \">Titanium.Android.unregisterBroadcastReceiver()</tt> method a <tt class=\" \">BroadcastReceiver</tt> object to unregister it to stop monitoring a broadcast.    </p>\n    <p>\n<strong class=\" \">To monitor a broadcast that requires a special permission</strong>, declare the <tt class=\" \">&lt;uses-permission&gt;</tt> element in the Android manifest section of the <tt class=\" \">tiapp.xml</tt> file for each broadcast that uses a special permission.    </p>\n    <p>\n    </p>\n    <p>\nThe example below registers a broadcast receiver to monitor if the device's screen is turned on or off.  The broadcast is a system event sent by the Android OS.  If the screen is turned off then back on, the application displays an alert dialog.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> showAlert = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"keyword\">var</code><code class=\"plain\"> broadcastReceiver = Ti.Android.createBroadcastReceiver({</code></div>\n<div class=\"line\"><code class=\"plain\">\tonReceived : </code><code class=\"keyword\">function</code><code class=\"plain\">(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t</code><code class=\"keyword\">switch</code><code class=\"plain\"> (e.intent.action) {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">case</code><code class=\"plain\"> Ti.Android.ACTION_SCREEN_OFF:</code></div>\n<div class=\"line\"><code class=\"plain\">                showAlert = </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">case</code><code class=\"plain\"> Ti.Android.ACTION_SCREEN_ON:</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">if</code><code class=\"plain\"> (showAlert) {</code></div>\n<div class=\"line\"><code class=\"plain\">                    alert(</code><code class=\"string\">\"Peek-a-boo!\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">                    showAlert = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t    }</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Android.registerBroadcastReceiver(broadcastReceiver, [Ti.Android.ACTION_SCREEN_OFF, Ti.Android.ACTION_SCREEN_ON]);</code></div>\n</div>\n</div>    <p>\n    </p>\n    <p>\nThe example below registers a broadcast receiver to monitor the broadcast sent with permission from the example in <i class=\" \">Send a Broadcast with a Permission.</i>    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- Declare that the application uses the permission --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;android&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        \t&lt;uses-permission android:name=</code><code class=\"string\">\"com.appcelerator.action.ALERT\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/manifest&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/android&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var broadcastReceiver = Ti.Android.createBroadcastReceiver({</code></div>\n<div class=\"line\"><code class=\"plain\">    onReceived : function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        var intent = e.intent,</code></div>\n<div class=\"line\"><code class=\"plain\">            message;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (intent.hasExtra(Ti.Android.EXTRA_TEXT) &amp;&amp; (message = intent.getStringExtra(Ti.Android.EXTRA_TEXT))) {</code></div>\n<div class=\"line\"><code class=\"plain\">            alert(message);</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Ti.Android.registerBroadcastReceiver(broadcastReceiver, [</code><code class=\"string\">'com.appcelerator.action.ALERT'</code><code class=\"plain\">]);\t</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43287851_AndroidBroadcastIntentsandReceivers-FurtherReading\">\n        <h2 class=\"heading \"><span>Further Reading</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"#!/api/Titanium.Android\">Titanium.Android API Reference</a>    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43287851\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Android Broadcast Intents and Receivers"});