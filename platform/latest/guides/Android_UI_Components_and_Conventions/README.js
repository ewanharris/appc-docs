Ext.data.JsonP['Android_UI_Components_and_Conventions']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Android UI Components and Conventions</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004929\" class=\"content\">\n            <h1>Android UI Components and Conventions</h1>\n    <div class=\"section section-2 \" id=\"29004929_AndroidUIComponentsandConventions-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>\nIn this section, you will examine some of the user interface and user experience components that are specific to Android. In addition, we'll see how these can be leveraged in a cross platform manner via the Titanium API.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"29004929_AndroidUIComponentsandConventions-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\nAndroid has a number of features that make it distinct from iOS and other mobile platforms. Among these are the hardware buttons, such as the menu and back buttons, and &quot;toast&quot; notifications. Users expect apps to take advantage of these components and to be used in their conventional ways. Let's look at each of these to see how you can use them in your Titanium apps.    </p>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-AndroidActionBar\">\n        <h3 class=\"heading \"><span>Android Action Bar</span></h3>\n    <p>\nThe Android Action Bar is a reserved portion of the window used for branding, navigation controls and application-wide actions. Using the action bar requires Android 3.0 and later <i class=\" \"><strong class=\" \">and</strong></i> Titanium SDK 3.0 and later.    </p>\n    <p>\nFor details on using the action bar, see <a class=\"document-link \" href=\"#!/guide/Android_Action_Bar\">Android Action Bar</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-AndroidMenus\">\n        <h3 class=\"heading \"><span>Android Menus</span></h3>\n    <p>\nAndroid devices have a hardware or software button that is used to display a menu of options. In native Android, every <a class=\"external-link external-link\" href=\"http://developer.android.com/reference/android/app/Activity.html\" target=\"_blank\">Activity</a> can have an associated menu. In Titanium, every <a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview-section-29004888_AndroidPlatformOverview-Heavyweightandlightweightwindows\">&quot;heavyweight&quot; window</a> can have its own menu, as all heavyweight windows having a corresponding Android Activity. Because of the menu's association with the underlying Activity, it is created in a special Android-specific Activity event called <tt class=\" \">onCreateOptionsMenu</tt>. Below we see how a basic Android menu is declared using Titanium.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Associated directly with an activity</code></div>\n<div class=\"line\"><code class=\"plain\">activity = Ti.Android.currentActivity;</code></div>\n<div class=\"line\"><code class=\"plain\">activity.onCreateOptionsMenu = function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var menu = e.menu;</code></div>\n<div class=\"line\"><code class=\"plain\">    var menuItem = menu.add({ title: </code><code class=\"string\">\"Item 1\"</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">    menuItem.setIcon(</code><code class=\"string\">\"item1.png\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    menuItem.addEventListener(</code><code class=\"string\">\"click\"</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// do something when the menu item is tapped</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"comments\">// or with your heavyweight window, set here with navBarHidden</code></div>\n<div class=\"line\"><code class=\"plain\">var win = Titanium.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">\tnavBarHidden: </code><code class=\"keyword\">false</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tactivity : {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tonCreateOptionsMenu : function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tvar menu = e.menu;</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tvar menuItem = menu.add({ title : </code><code class=\"string\">'Item 1'</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tmenuItem.setIcon(</code><code class=\"string\">\"item1.png\"</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\tmenuItem.addEventListener(</code><code class=\"string\">'click'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t\t</code><code class=\"comments\">// do something when the menu item is tapped</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t\t});</code></div>\n<div class=\"line\"><code class=\"plain\">\t\t}</code></div>\n<div class=\"line\"><code class=\"plain\">\t}</code></div>\n</div>\n</div>    <p>\nIf you're writing a cross-platform app, you would want to wrap the first of the above code-snippets in platform-detection code. iOS knows nothing of activities and could throw an error. The second of the above examples will run just fine on iOS. iOS will ignore the <tt class=\" \">activity</tt> property of the window (actually, it would create a custom property for the object and set it to <tt class=\" \">null</tt>).    </p>\n    <p>\nOn Android 3.0 and later, menu items can appear on the action bar. See <a class=\"document-link \" href=\"#!/guide/Android_Action_Bar\">Android Action Bar</a> for details.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-AndroidBackButton\">\n        <h3 class=\"heading \"><span>Android Back Button</span></h3>\n    <p>\nAs with the Menu button, the Android Back button is associated with Activities or heavyweight windows. Users expect when they tap the Back button, that they'll &quot;page back&quot; through the stack of open windows. In addition, users will often use the Back button to exit or pause your app. For this reason, you may find it beneficial to handle presses of the Back button to clean up your app and the resources it may be utilizing.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// must be a heavyweight window to capture the androidback event</code></div>\n<div class=\"line\"><code class=\"comments\">// so set something like fullscreen:false</code></div>\n<div class=\"line\"><code class=\"plain\">var win = Ti.UI.createWindow({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle:</code><code class=\"string\">'Hello world'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor:</code><code class=\"string\">'#fff'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tfullscreen:</code><code class=\"keyword\">false</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">win.addEventListener(</code><code class=\"string\">'androidback'</code><code class=\"plain\">,function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// do something</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nPrior to Release 3.0, the <tt class=\" \">androidback</tt> event was named <tt class=\" \">android:back</tt>. The older name is now deprecated.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-AndroidLabels\">\n        <h3 class=\"heading \"><span>Android Labels</span></h3>\n    <p>\nTitanium Labels have the ability to use inline HTML, as well as embedded links, on Android. You can include simple formatting HTML within a label and Android will render it properly. To do so, you use the <tt class=\" \">html</tt> property rather than the <tt class=\" \">text</tt> property. This is pretty handy for cross-platform apps so that you can provide platform-specific label text.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var label = Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\thtml: </code><code class=\"string\">'Testing &lt;b&gt;bold&lt;/b&gt; &lt;i&gt;italic&lt;/i&gt; text'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext: </code><code class=\"string\">'This is for iOS'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop:</code><code class=\"value\">125</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight:</code><code class=\"value\">50</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth:</code><code class=\"string\">'100%'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nAndroid also will &quot;linkify&quot; text within your labels. Given the following, the user could tap on the email address to open their mail client; tap the phone number to open the dialer; tap the URL to open their browser; or tap the address to open Maps.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var lbl = Ti.UI.createLabel({</code></div>\n<div class=\"line\"><code class=\"plain\">\tautoLink : Ti.UI.AUTOLINK_ALL, </code><code class=\"comments\">// Prior to SDK 3.0, Ti.UI.Android.LINKIFY_ALL</code></div>\n<div class=\"line\"><code class=\"plain\">\tleft : </code><code class=\"value\">5</code><code class=\"plain\">, top : </code><code class=\"value\">5</code><code class=\"plain\">, right : </code><code class=\"value\">5</code><code class=\"plain\">, height : </code><code class=\"value\">100</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tbackgroundColor : </code><code class=\"string\">'#222'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttext : </code><code class=\"string\">'Contact\\n test@test.com\\n 817-555-5555\\n http://bit.ly\\n 440 Bernardo Ave, Mountain View, CA'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nThe linkification options include:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">Ti.UI.AUTOLINK_ALL (Ti.UI.Android.LINKIFY_ALL)</tt> &ndash; linkify all possible forms of links    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Ti.UI.AUTOLINK_EMAIL_ADDRESSES (Ti.UI.Android.LINKIFY_EMAIL_ADDRESSES)</tt> &ndash; linkify just email addresses    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Ti.UI.AUTOLINK_MAP_ADDRESSES (Ti.UI.Android.LINKIFY_MAP_ADDRESSES)</tt> &ndash; linkify just map addresses    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Ti.UI.AUTOLINK_PHONE_NUMBERS</tt> (<tt class=\" \">Ti.UI.Android.LINKIFY_PHONE_NUMBERS</tt>) &ndash; linkify just phone numbers    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Ti.UI.AUTOLINK_URLS</tt> (<tt class=\" \">Ti.UI.Android.LINKIFY_WEB_URLS</tt>) &ndash; linkify just Web addresses    </p>\n</li></ul>    <p>\nThe constants shown in parenthesis are the constants used prior to SDK 3.0. The constants listed first should be used in SDK 3.0 and later.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-ToastNotifications\">\n        <h3 class=\"heading \"><span>Toast Notifications</span></h3>\n    <p>\nAndroid enables simple &quot;toast&quot; style notifications. These are short messages that briefly float over all other content in your app, disappearing a short time later. You can create such notifications in Titanium by using the <tt class=\" \">Ti.UI.createNotification() method</tt> as shown here:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var n = Ti.UI.createNotification({message:</code><code class=\"string\">\"Howdy folks\"</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">n.duration = Ti.UI.NOTIFICATION_DURATION_LONG;</code></div>\n<div class=\"line\"><code class=\"comments\">// Also valid is NOTIFICATION_DURATION_SHORT</code></div>\n<div class=\"line\"><code class=\"comments\">// Optionally, set the X &amp; Y Offsets, by default</code></div>\n<div class=\"line\"><code class=\"plain\">n.offsetX = </code><code class=\"value\">100</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">n.offsetY = </code><code class=\"value\">75</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"comments\">// display the toast message</code></div>\n<div class=\"line\"><code class=\"plain\">n.show();</code></div>\n</div>\n</div>    <p>\n        <img src=\"images/download/attachments/29004929/not2.png\" alt=\"images/download/attachments/29004929/not2.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-StatusBarNotifications\">\n        <h3 class=\"heading \"><span>Status Bar Notifications</span></h3>\n    <p>\nThe Android status bar provides a central location for application and system notifications. Titanium enables you to post messages to the Status bar (sometimes referred to as the Notification bar) via the <tt class=\" \">Titanium.Android.Notification</tt> module. To do so, you'll need to explore the Android-specific world of Intents, PendingIntents, and Activities. We won't go deep into those concepts in this guide, but here's a taste of what can be done:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Need an Intent to define what will happen when user taps the notification message</code></div>\n<div class=\"line\"><code class=\"comments\">// In this case, it will open the Dialer ready to dial a fictitious number</code></div>\n<div class=\"line\"><code class=\"plain\">var intent = Ti.Android.createIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">\taction: Ti.Android.ACTION_DIAL,</code></div>\n<div class=\"line\"><code class=\"plain\">    data: </code><code class=\"string\">\"tel:8175551212\"</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// Create a PendingIntent to tie together the Activity and Intent</code></div>\n<div class=\"line\"><code class=\"plain\">var pending = Titanium.Android.createPendingIntent({</code></div>\n<div class=\"line\"><code class=\"plain\">    activity: Titanium.Android.currentActivity,</code></div>\n<div class=\"line\"><code class=\"plain\">    intent: intent,</code></div>\n<div class=\"line\"><code class=\"plain\">    type: Titanium.Android.PENDING_INTENT_FOR_ACTIVITY,</code></div>\n<div class=\"line\"><code class=\"plain\">    flags: Titanium.Android.FLAG_UPDATE_CURRENT</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// Here's the notification now</code></div>\n<div class=\"line\"><code class=\"plain\">var notification = Titanium.Android.createNotification({</code></div>\n<div class=\"line\"><code class=\"plain\">        icon: </code><code class=\"value\">0x7f020000</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        contentTitle: </code><code class=\"string\">'Dial Now!'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tcontentText : </code><code class=\"string\">'817-555-1212'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        contentIntent: pending</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// Send the Notification to the manager, the digit is an ID you could use to later cancel the notification</code></div>\n<div class=\"line\"><code class=\"plain\">Titanium.Android.NotificationManager.notify(</code><code class=\"value\">1</code><code class=\"plain\">, notification);</code></div>\n</div>\n</div>    <p>\n        <img src=\"images/download/attachments/29004929/status1.png\" alt=\"images/download/attachments/29004929/status1.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n             <img src=\"images/download/attachments/29004929/status2.png\" alt=\"images/download/attachments/29004929/status2.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n        </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-Nine-PatchImages\">\n        <h3 class=\"heading \"><span>Nine-Patch Images</span></h3>\n    <p>\nA nine-patch image is a PNG image with regions specified as stretchable or not stretchable.  For example, if you have an image with a logo centered against a solid background, you can create a nine-patch image with the area around the logo as stretchable.  If the image needs to be stretched for a larger device, the solid background color will be stretched, leaving the logo untouched.  Nine-patch images are a good solution to support Android devices with different screen sizes and densities.    </p>\n    <p>\nTo create a nine-patch image, you can either use the Android NDK draw9patch tool or a graphics editor.  If you are using a graphics editor, create a one-pixel transparent or white border around your PNG image, then change the top and left border to black pixels where you want the image to stretch.  You can optionally change the right and bottom border to black pixels to indicate extra padding areas.  For more information, refer to the <a class=\"external-link external-link\" href=\"http://developer.android.com/tools/help/draw9patch.html\" target=\"_blank\">Android Draw 9-Patch help tutorial</a> for directions on using the draw9patch tool or refer to the <a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/graphics/2d-graphics.html#nine-patch\" target=\"_blank\">Android nine-patch image specification</a> for information on creating a nine-patch image in a graphics editor.    </p>\n    <p>\nName the file with the extension <tt class=\" \">.9.png</tt>, for example, <tt class=\" \">Resources/images/myimage.9.png</tt>.    </p>\n    <p>\nTo use a nine-patch image, reference the image in your code like you would a regular image without the <tt class=\" \">.9</tt> part of the extension, for example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">    backgroundImage: </code><code class=\"string\">'/images/myimage.png'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\n    <span style=\"color: #484848;\">\nNine-patch images only work as background images. For example, you can use a nine-patch image to set an ImageView's <tt class=\" \">backgroundImage</tt> property but not the <tt class=\" \">image</tt> property.    </span>\n    </p>\n    <p>\n    <span style=\"color: #484848;\">\nThe project should be cleaned to ensure that the files are correctly copied to the project.    </span>\n    </p>\n    <p>\n    <span style=\"color: #000000;\">\nHands-on Practice    </span>\n    </p>\n    <div class=\"section section-4 \" id=\"29004929_AndroidUIComponentsandConventions-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>\nIn this activity, you will manage the hardware Back button so that the first time it's tapped, a full-screen view will be closed and after that your app will be closed.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004929_AndroidUIComponentsandConventions-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>\nCreate a new Titanium Mobile project.    </p>\n</li><li class=\" \">    <p>\nDelete the contents of app.js and create a new one to these specifications:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIt should contain a single, heavyweight window, which should have a red background. Set the <tt class=\" \">exitOnClose:true</tt> property on that window.    </p>\n</li><li class=\" \">    <p>\nThe window should contain a label with the text &quot;Tap the Android Back button to close the app&quot;. Set that label's font color to black so that it's visible.    </p>\n</li><li class=\" \">    <p>\nThe window should contain a view that fills 90% of the window. The view should have a white background.    </p>\n</li><li class=\" \">    <p>\nThe view should contain a label with the text &quot;Tap the Android Back button to close this white view and show the underlying red window&quot;. Set that label's font color to black so that it's visible.    </p>\n</li></ul></li><li class=\" \">    <p>\nWrite a function that when called will hide the view and remove the <tt class=\" \">androidback</tt> event listener from the window.    </p>\n</li><li class=\" \">    <p>\nAdd an event listener to the window so that when the <tt class=\" \">androidback</tt> event fires, your custom function is called.    </p>\n</li><li class=\" \">    <p>\nMake sure to add the labels to the window and view, and add the view to the window. Make sure to open the window at the end of your code.    </p>\n</li><li class=\" \">    <p>\nBuild the app for the Android emulator or for a device.    </p>\n</li><li class=\" \">    <p>\nWith the white view showing, tap the Back button. The view should close. Tap Back again and the app should close.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004929_AndroidUIComponentsandConventions-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/3.5_android_UI.zip\" target=\"_blank\">Finished code</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Android_Platform_Overview\">Android Platform Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://developer.android.com/guide/topics/ui/index.html\" target=\"_blank\">Android developer docs: User interface</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004929_AndroidUIComponentsandConventions-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>\nIn this section, you learned the basics of Android-specific user interface and experience. These features included hardware buttons, flexible labels, and notifications. In the final section of this chapter, we'll explore the platform specific features of iOS.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004929\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Android UI Components and Conventions"});