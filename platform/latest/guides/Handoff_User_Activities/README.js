Ext.data.JsonP['Handoff_User_Activities']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Handoff User Activities</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43315116\" class=\"content\">\n            <h1>Handoff User Activities</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-DeviceSetup\">Device Setup</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-ShareanActivity\">Share an Activity</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-MonitortheActivity\">Monitor the Activity</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-UpdatetheActivity\">Update the Activity</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-ContinuetheActivity\">Continue the Activity</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-TesttheSample\">Test the Sample</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Handoff_User_Activities-section-43315116_HandoffUserActivities-Reference\">Reference</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"43315116_HandoffUserActivities-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nStarting with iOS 8.0 and Titanium SDK 5.0, you can use the Handoff feature to transfer a user activity from one device to another.  Handoff lets you start using an application, such as editing a document, on one device, then transfer to another device to continue working on it.  Both devices will need to share the same iCloud account and Wi-Fi connection as well as be Bluetooth enabled.    </p>\n    <p>\nNote that you can only test handoff on device. You cannot test handoff on the iOS simulator.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43315116_HandoffUserActivities-DeviceSetup\">\n        <h2 class=\"heading \"><span>Device Setup</span></h2>\n    <p>\nTo use handoff, both devices must:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nBe logged into the same iCloud account    </p>\n</li><li class=\" \">    <p>\nBe on the same Wi-Fi network    </p>\n</li><li class=\" \">    <p>\nHave Bluetooth enabled    </p>\n</li><li class=\" \">    <p>\nHave Handoff enabled    </p>\n</li></ul>    <p>\nFor detailed instructions, see <a class=\"external-link external-link\" href=\"https://support.apple.com/en-us/HT204681\" target=\"_blank\">Apple Support: Use Continuity to connect your iPhone, iPad, iPod touch, and Mac</a>.    </p>\n    <p>\nTo test if Handoff is working, open Safari on one device and navigate to a specific web page.  On the other device, go to the locked screen.  You should see a Safari icon in the bottom-left corner.  Tap on the Safari icon and swipe up.  Safari should open to the same web page.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43315116_HandoffUserActivities-ShareanActivity\">\n        <h2 class=\"heading \"><span>Share an Activity</span></h2>\n    <p>\nTo share an Activity, create an UserActivity object and set it as the current activity.  You will also need to register the activity in the plist section of the <tt class=\" \">tiapp.xml</tt> file to use it.    </p>\n    <p>\nTo create an Activity, use the Titanium.App.iOS.createUserActivity() method.  Pass the method a dictionary with following properties defined.  The <tt class=\" \">activityType</tt> property is the only required property.    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">activityType</tt>: developer-defined string used as the activity type for the user activity.  The activity type must be registered in the plist section of the <tt class=\" \">tiapp.xml</tt> file to use it.    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">eligibleForHandOff</tt>: set to <tt class=\" \">true</tt> to allow the activity to be handed off to another device.  Default is true.<strong class=\" \">  Requires iOS 9.0 or later.</strong>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">eligibleForPublicIndexing</tt>: set to <tt class=\" \">true</tt> to allow the activity to be indexed publicly allowing it to be search by all users.  Must also set the <tt class=\" \">requiredUserInfoKey</tt> or <tt class=\" \">webpageURL</tt> properties. Default is false.<strong class=\" \">  Requires iOS 9.0 or later.</strong>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">eligibleForSearch</tt>: set to <tt class=\" \">true</tt> to allow the activity to be added to the on-device index. Default is false.<strong class=\" \">  Requires iOS 9.0 or later.</strong>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">expirationDate</tt>: date that the activity expires in the format: <tt class=\" \">yyyy-MM-ddTHH:mm:ss.SSS+0000</tt>.  If not set, the OS will determine the expiration time.    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">keywords</tt>: array of strings that a user can use to find the activity in Spotlight.  You can also use the UserActivity object's <tt class=\" \">addContentAttributeSet()</tt> method to add indexable content.  <strong class=\" \">Both APIs require iOS 9.0 or later.</strong>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">requiredUserInfoKey</tt>: array of keys that need to be sent in the <tt class=\" \">userInfo</tt> object.  <strong class=\" \">Requires iOS 9.0 or later.</strong>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">title</tt>: user-visible title for the activity, such as a document name or webpage URL.    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">userInfo</tt>: object of key-value pairs to send with the activity    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">webpageURL</tt>: if a suitable application is not found on the device, loads the specified web page and continues the activity in the browser.  Only supports the <tt class=\" \">http://</tt> and <tt class=\" \">https://</tt> protocols.  Any other protocol will throw an error.    </p>\n</li></ul>    <p>\nOnce you are ready to share the activity, use the <tt class=\" \">supported</tt> property to check if the user activity is supported by the application, then invoke its <tt class=\" \">becomeCurrent()</tt> method to indicate that the activity is in use by the current device.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var activity =  Ti.App.iOS.createUserActivity({</code></div>\n<div class=\"line\"><code class=\"plain\">    activityType:</code><code class=\"string\">'com.foo.message'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    title:</code><code class=\"string\">'Handoff Messenger'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    userInfo:{</code></div>\n<div class=\"line\"><code class=\"plain\">        msg: </code><code class=\"string\">'Tag! You\\'re it!'</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\">(!activity.supported){</code></div>\n<div class=\"line\"><code class=\"plain\">    alert(</code><code class=\"string\">'activity is not supported'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">} </code><code class=\"keyword\">else</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    activity.becomeCurrent();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nBefore using the activity, you will need to register each activity type in the <tt class=\" \">plist</tt> section of the <tt class=\" \">tiapp.xml</tt> file.  Under the <tt class=\" \">&lt;dict&gt;</tt> element in the <tt class=\" \">&lt;ios&gt;&lt;plist&gt;</tt> elements, add the <tt class=\" \">NSUserActivityTypes</tt> key with the value set to an array of strings, where each string is the <tt class=\" \">activityType</tt> property that you want the application to support.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;key&gt;NSUserActivityTypes&lt;/key&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;string&gt;com.foo.message&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">          &lt;string&gt;com.foo.bar&lt;/string&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/array&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">      &lt;/dict&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/plist&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/ios&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n</div>    <div class=\"section section-3 \" id=\"43315116_HandoffUserActivities-MonitortheActivity\">\n        <h3 class=\"heading \"><span>Monitor the Activity</span></h3>\n    <p>\nListen for the <a class=\"external-link external-link\" href=\"#!/api/Titanium.App.iOS.UserActivity-event-useractivitywascontinued\"> <tt class=\" \">useractivitywascontinued</tt> </a>event to determine when the user activity was handed off to another device. The event will be passed the <tt class=\" \">activityType</tt>, <tt class=\" \">title</tt>, <tt class=\" \">userInfo</tt> and <tt class=\" \">webpageURL</tt> properties that were set on the user activity.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">activity.addEventListener(</code><code class=\"string\">'useractivitywascontinued'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">'Activity moved to a different device.'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43315116_HandoffUserActivities-UpdatetheActivity\">\n        <h3 class=\"heading \"><span>Update the Activity</span></h3>\n    <p>\n<i class=\" \">Every time</i> something happens that requires the activity's state to be updated before it could be handed off, set the UserActivity object's <tt class=\" \">needsSave</tt> property to <tt class=\" \">true</tt>. Listen for the <tt class=\" \">useractivitywillsave</tt> event to actually update the activity state or content, such as saving changes to an API. This event is triggered at the discretion of iOS and when you call <tt class=\" \">becomCurrent()</tt>. The event will be passed the current <tt class=\" \">activityType</tt>, <tt class=\" \">title</tt>, <tt class=\" \">userInfo</tt> and <tt class=\" \">webpageURL</tt> properties. After the event is fired, iOS will reset the <tt class=\" \">needsSave</tt> property to false.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">activity.addEventListener(</code><code class=\"string\">'useractivitywillsave'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    Ti.API.info(</code><code class=\"string\">'Updating content...'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Every time the activity needs to be updated set:</code></div>\n<div class=\"line\"><code class=\"plain\">activity.needsSave = </code><code class=\"keyword\">true</code><code class=\"plain\">;</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43315116_HandoffUserActivities-ContinuetheActivity\">\n        <h2 class=\"heading \"><span>Continue the Activity</span></h2>\n    <p>\nTo continue the activity on another paired device, listen for the <tt class=\" \">Ti.App.iOS</tt> module's <tt class=\" \">continueactivity</tt>event. The handoff event will be passed the <tt class=\" \">activityType</tt>, <tt class=\" \">title</tt>, <tt class=\" \">userInfo</tt> and <tt class=\" \">webpageURL</tt> properties that were set on the user activity. Use the passed information to continue the activity.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Ti.App.iOS.addEventListener(</code><code class=\"string\">'continueactivity'</code><code class=\"plain\">, function(e){</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (e.activityType === </code><code class=\"string\">'com.foo.message'</code><code class=\"plain\"> &amp;&amp; e.userInfo.msg) {</code></div>\n<div class=\"line\"><code class=\"plain\">        alert(e.userInfo.msg);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"43315116_HandoffUserActivities-TesttheSample\">\n        <h2 class=\"heading \"><span>Test the Sample</span></h2>\n    <p>\nTo test the code above, make sure you have both iOS devices setup as described in the &quot;Device Setup&quot; section.  Copy and paste both <tt class=\" \">app.js</tt> snippets to one file and add the <tt class=\" \">NSUserActivityTypes</tt> key to the <tt class=\" \">tiapp.xml</tt>.  Run the project on two iOS devices.    </p>\n    <p>\nBefore launching the application, have the lock screen on for the first device, then on the second device, launch the application.  On the lock screen of the first device, the application icon should appear in the bottom-left corner.    </p>\n    <p>\n        <img src=\"images/download/attachments/43315116/lockscreen.png\" alt=\"images/download/attachments/43315116/lockscreen.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nTap the icon and drag up to open the application on the first device.  You should see an alert dialog with the message: &quot;Tag! You're it!&quot;    </p>\n    <p>\n        <img src=\"images/download/attachments/43315116/tagyouareit.png\" alt=\"images/download/attachments/43315116/tagyouareit.png\" class=\"confluence-embedded-image\" width=\"500\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43315116_HandoffUserActivities-Reference\">\n        <h2 class=\"heading \"><span>Reference</span></h2>\n    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/Handoff/HandoffFundamentals/HandoffFundamentals.html#//apple_ref/doc/uid/TP40014338\" target=\"_blank\">iOS Developer Library: Handoff Programming Guide</a>    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43315116\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Handoff User Activities"});