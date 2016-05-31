Ext.data.JsonP['APS_Performance_for_Android']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>APS Performance for Android</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43298720\" class=\"content\">\n            <h1>APS Performance for Android</h1>\n    <p>\n    </p>\n    <div class=\"confbox admonition admonition-warning aui-message problem shadowed information-macro\">\n            <div class=\"title\">Pro or Enterprise Subscription Required</div>\n        \n    <p>\nThis Appcelerator Platform feature requires a Pro or Enterprise Subscription.    </p>\n    </div>\n    \n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-UsingAppceleratorPerformance\">Using Appcelerator Performance</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-SetupYourProject\">Setup Your Project</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-CreateaBreadcrumbTrail\">Create a Breadcrumb Trail</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-AddUserMetadata\">Add User Metadata</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-LogAnException\">Log An Exception</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-AllowtheUsertoOpt-Out\">Allow the User to Opt-Out</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-CheckforaCrash\">Check for a Crash</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/APS_Performance_for_Android-section-43298720_APSPerformanceforAndroid-FurtherReading\">Further Reading</a>    </p>\n</li></ul>    <p>\nThis page describes how to use the Appcelerator Platform Service Performance (APS) for native Android applications, built with Java and the Android APIs.    </p>\n    <div class=\"confbox panel panel\">\n            <div class=\"title\">Not developing a native Android application with Java?</div>\n        <p>\nSee the following topics to use the Appcelerator Performance Service on other platforms:    </p>\n    <p>\n        <img src=\"images/download/attachments/43298720/ios_icon.png\" alt=\"images/download/attachments/43298720/ios_icon.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nFor native iOS applications built with Objective-C, see <a class=\"document-link \" href=\"#!/guide/APS_Performance_for_iOS\">APS Performance for iOS</a>.    </p>\n    <p>\n        <img src=\"images/download/attachments/43298720/titanium_icon.png\" alt=\"images/download/attachments/43298720/titanium_icon.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nFor Titanium Applications, see <a class=\"document-link \" href=\"#!/guide/Appcelerator_Performance_Management\">Appcelerator Performance Management</a>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43298720_APSPerformanceforAndroid-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nThe Appcelerator Performance service, powered by Crittercism, monitors your application's health, crashes and overall performance. Using Appcelerator Performance, developers are able to analyze crash reports to see why applications crashed and focus on the specific problems on user feedback.    </p>\n    <p>\nThis topic covers how to use the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/android/com/appcelerator/aps/APSPerformance.html\" target=\"_blank\">APSPerformance API</a>.  For information about using the Performance Dashboard, see <a class=\"document-link \" href=\"#!/guide/Managing_Client_Applications-section-43298774_ManagingClientApplications-PerformanceTab\">Application Details Screen: Performance Tab</a>.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nWhen you log into the Appcelerator Performance dashboard, you may encounter a gray navigation bar across the top, right below the Appcelerator Platform service navigation bar, and an orange &quot;Contact us!&quot; pop-up when you navigate to certain areas of the dashboard. These items are for Crittercism customers using native SDKs and are invalid for Appcelerator mobile applications.    </p>\n    <p>\nFor support with Appcelerator Performance, visit <a class=\"external-link external-link\" href=\"http://support.appcelerator.com\" target=\"_blank\">http://support.appcelerator.com</a>.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"43298720_APSPerformanceforAndroid-UsingAppceleratorPerformance\">\n        <h2 class=\"heading \"><span>Using Appcelerator Performance</span></h2>\n    <p>\nTo use the Appcelerator Performance service, add the APS library to your project, then use the APSPerformance API to add breadcrumbs, user metadata and exception handling code to log events leading up to a crash.  Login to the Appcelerator Dashboard and use the Appcelerator Performance dashboard to monitor application performance and analyze crash reports.    </p>\n    <div class=\"section section-3 \" id=\"43298720_APSPerformanceforAndroid-SetupYourProject\">\n        <h3 class=\"heading \"><span>Setup Your Project</span></h3>\n    <p>\nTo integrate the Performance service with a new or existing Android application:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nGo to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a> and create a new native Android application.    </p>\n</li><li class=\" \">    <p>\nDownload the Services SDK and get your Performance application key.    </p>\n</li><li class=\" \">    <p>\nUnpack the Services SDK ZIP file.    </p>\n</li><li class=\" \">    <p>\nCopy the  <tt class=\" \">appcelerator-sdk-android-&lt;VERSION&gt;.jar</tt>  to the  <tt class=\" \">lib</tt>  folder of your Android project.    </p>\n</li><li class=\" \">    <p>\nModify the project's  <tt class=\" \">AndroidManifest.xml</tt>  file to include the following permissions:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">AndroidManifest.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;?xml version=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\"> encoding=</code><code class=\"string\">\"utf-8\"</code><code class=\"plain\">?&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;manifest xmlns:android=</code><code class=\"string\">\"http://schemas.android.com/apk/res/android\"</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">package</code><code class=\"plain\">=</code><code class=\"string\">\"com.appcelerator.sample\"</code></div>\n<div class=\"line\"><code class=\"plain\">    android:versionCode=</code><code class=\"string\">\"1\"</code></div>\n<div class=\"line\"><code class=\"plain\">    android:versionName=</code><code class=\"string\">\"1.0\"</code><code class=\"plain\"> &gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Add these permissions to enable Performance --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_NETWORK_STATE\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.ACCESS_WIFI_STATE\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.INTERNET\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Optional permissions </code><code class=\"keyword\">for</code><code class=\"plain\"> advanced reporting --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.GET_TASKS\"</code><code class=\"plain\"> /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;uses-permission android:name=</code><code class=\"string\">\"android.permission.READ_LOGS\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/manifest&gt;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nAdd the following import statements to the main Activity of the project:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">MainActivity.java</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.appcelerator.aps.APSServiceManager;</code></div>\n<div class=\"line\"><code class=\"keyword\">import</code><code class=\"plain\"> com.appcelerator.aps.APSPerformance;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nIn the main Activity's <tt class=\" \">onCreate()</tt> method, enable the service by calling the APSServiceManager's <tt class=\" \">enable()</tt> method.  Pass the method the application context as the first argument and the APS application key as the second argument.  This provides basic app monitoring and crash reporting services.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">void</code><code class=\"plain\"> onCreate() {</code></div>\n<div class=\"line\"><code class=\"plain\">    APSServiceManager.getInstance().enable(getApplicationContext(), </code><code class=\"string\">\"APP_KEY\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">} </code></div>\n</div>\n</div>    <div class=\"confbox admonition admonition-tip aui-message success shadowed information-macro\">\n        \n    <p class=\"diff-block-target diff-block-context\">\nTo get your APS App key:    </p>\n<ol class=\" \"><li class=\"diff-block-target diff-block-context \">    <p>\nGo to the <a class=\"external-link external-link\" href=\"https://platform.appcelerator.com/\" target=\"_blank\">Appcelerator Dashboard</a>.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nSelect your application from the <strong class=\" \">Apps</strong> drop-down menu.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nClick the <strong class=\" \">Overview</strong> tab.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nClick the <strong class=\" \">Services</strong> button.    </p>\n</li><li class=\"diff-block-target diff-block-context \">    <p>\nClick <strong class=\" \">Show Key</strong> under the Analytics, Performance and Cloud section.    </p>\n</li></ol>    </div>\n    \n</li></ol>    <p>\nThe Android application can now make additional method calls using the <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/android/com/appcelerator/aps/APSPerformance.html\" target=\"_blank\">APSPerformance class</a>.  Before making API calls to the APSPerformance class, you need to retrieve a shared instance using the <tt class=\" \">getInstance()</tt> method.  Make APSPerformance API calls using the shared instance.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298720_APSPerformanceforAndroid-CreateaBreadcrumbTrail\">\n        <h3 class=\"heading \"><span>Create a Breadcrumb Trail</span></h3>\n    <p>\nTo make it easier to track the events leading up to a crash, use the <tt class=\" \">leaveBreadcrumb()</tt> method to add breadcrumbs in your code.  Place breadcrumbs near events and application state changes to track problematic paths that can lead to an application crash.  Append variables to your breadcrumbs to track their state.  For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">static</code><code class=\"plain\"> </code><code class=\"keyword\">int</code><code class=\"plain\"> alphaCB (</code><code class=\"keyword\">int</code><code class=\"plain\"> value) {</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().leaveBreadcrumb(</code><code class=\"string\">\"enter alphaCB:\"</code><code class=\"plain\"> + value);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">//do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().leaveBreadcrumb(</code><code class=\"string\">\"exit alphaCB:\"</code><code class=\"plain\"> + result);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> result;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"keyword\">public</code><code class=\"plain\"> </code><code class=\"keyword\">static</code><code class=\"plain\"> </code><code class=\"keyword\">int</code><code class=\"plain\"> betaCB (</code><code class=\"keyword\">int</code><code class=\"plain\"> value) {</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().leaveBreadcrumb(</code><code class=\"string\">\"enter betaCB:\"</code><code class=\"plain\"> + value);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().leaveBreadcrumb(</code><code class=\"string\">\"exit betaCB:\"</code><code class=\"plain\"> + result);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> result;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"keyword\">switch</code><code class=\"plain\"> (state) {</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().leaveBreadcrumb(</code><code class=\"string\">\"switch:\"</code><code class=\"plain\"> + state);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> x : </code></div>\n<div class=\"line\"><code class=\"plain\">        alphaCB(</code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">case</code><code class=\"plain\"> y :</code></div>\n<div class=\"line\"><code class=\"plain\">        alphaCB(</code><code class=\"value\">2</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        betaCB(</code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">default</code><code class=\"plain\"> :</code></div>\n<div class=\"line\"><code class=\"plain\">        alphaCB(</code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">        betaCB(</code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nThese breadcrumbs are collected and passed to the Appcelerator Performance service.  To view the breadcrumbs, in the Appcelerator Performance dashboard, when viewing a specific application, click either <strong class=\" \">Crash Reports </strong>or <strong class=\" \">Handled Exceptions</strong>.  In the list of crashes or handled errors in the right pane, click on the crash or error to view its details.  Click the <strong class=\" \">Breadcrumbs</strong> tab to view the breadcrumb trails leading up to the crash or error.    </p>\n    <p>\nThe most recent 100 breadcrumbs are displayed before the crash occurred.  A breadcrumb can be up to 140 characters.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298720_APSPerformanceforAndroid-AddUserMetadata\">\n        <h3 class=\"heading \"><span>Add User Metadata</span></h3>\n    <p>\nUse the <tt class=\" \">setUsername()</tt> and <tt class=\" \">setMetadata()</tt> methods to differentiate users of your application when viewing reports on the Appcelerator Performance dashboard.  For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">boolean</code><code class=\"plain\"> status = login(username);</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (status) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets the username</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().setUsername(username);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets some user state metadata for tracking errors</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().setMetadata(</code><code class=\"string\">\"lastLogin\"</code><code class=\"plain\">, datetime);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">// Track the user's state</code></div>\n<div class=\"line\"><code class=\"plain\">APSPerformance.getInstance().setMetadata(</code><code class=\"string\">\"gameLevel\"</code><code class=\"plain\">, </code><code class=\"value\">0</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">APSPerformance.getInstance().setMetadata(</code><code class=\"string\">\"gameLevel\"</code><code class=\"plain\">, </code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// do some stuff...</code></div>\n<div class=\"line\"><code class=\"plain\">APSPerformance.getInstance().setMetadata(</code><code class=\"string\">\"gameLevel\"</code><code class=\"plain\">, </code><code class=\"value\">2</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\nThe username appears with the crash or error reports. By default, a guest profile is created to differentiate users if a username is not specified.  To retrieve this unique identifier, use the  <tt class=\" \">getUniqueIdentifier()</tt> method.    </p>\n    <p>\nTo access the user metadata, either click on a username in a crash or error report to open a detailed view, or in the Appcelerator Peformance dashboard, when viewing a specific application, click <strong class=\" \">Search by User</strong> in the left pane then in the right pane, enter a user's name to find information about them.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298720_APSPerformanceforAndroid-LogAnException\">\n        <h3 class=\"heading \"><span>Log An Exception</span></h3>\n    <p>\nYou can track handled exceptions in your application by passing a Java Exception object to the <tt class=\" \">logHandledException()</tt> method, which can help identify and analyze potential errors and hot spots.  For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">try</code><code class=\"plain\"> {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">throw</code><code class=\"plain\"> Exception(</code><code class=\"string\">\"FATAL ERROR!\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">catch</code><code class=\"plain\"> (exception) {</code></div>\n<div class=\"line\"><code class=\"plain\">    APSPerformance.getInstance().logHandledException(exception);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nException logs are useful for tracking crashes in third-party SDKs, code that syncs data between services, or detecting bad data that is returned from a server.    </p>\n    <p>\nTo view handled errors, in the Appcelerator Peformance dashboard, when viewing a specific application, click <strong class=\" \">Handled Exceptions</strong> in the left pane.  A list of handled errors and statistics appears in the right pane.  Click an error to view it in more detail.    </p>\n    <p>\nAppcelerator Performance limits the logging of handled exceptions to one per minute. Up to five  exceptions are buffered and are subsequently sent after the one minute limit.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43298720_APSPerformanceforAndroid-AllowtheUsertoOpt-Out\">\n        <h3 class=\"heading \"><span>Allow the User to Opt-Out</span></h3>\n    <p>\nUse the <tt class=\" \">setOptOutStatus()</tt> method to allow the user <u class=\" \">NOT</u> to send any information to the Appcelerator Performance service.  Passing <tt class=\" \">true</tt> to this method disables sending data to Appcelerator Performance.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Disable sending data to Appcelerator Performance</code></div>\n<div class=\"line\"><code class=\"plain\">APSPerformance.getInstance().setOptOutStatus(</code><code class=\"keyword\">true</code><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"43298720_APSPerformanceforAndroid-CheckforaCrash\">\n        <h3 class=\"heading \"><span>Check for a Crash</span></h3>\n    <p>\n    <span style=\"color: #484848;\">\nUse the     </span>\n <tt class=\" \">didCrashOnLastAppLoad()</tt>     <span style=\"color: #484848;\">\n method to check if the application crashed in a previous session. If the method returns     </span>\ntrue    <span style=\"color: #484848;\">\n, the application crashed on the last session.  Note that if <tt class=\" \">setOptOutStatus()</tt> is set to true, this method always returns false.    </span>\n    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (APSPerformance.getInstance().didCrashOnLastAppLoad()){</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Application crashed on the last load</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Do something...</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\n    <span style=\"color: #484848;\">\n <br/>     </span>\n    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43298720_APSPerformanceforAndroid-FurtherReading\">\n        <h2 class=\"heading \"><span>Further Reading</span></h2>\n    <p>\nFor complete API information, see <a class=\"external-link external-link\" href=\"http://docs.appcelerator.com/aps-sdk-apidoc/latest/android/com/appcelerator/aps/APSPerformance.html\" target=\"_blank\">APSPerformance API</a>.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43298720\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"APS Performance for Android"});