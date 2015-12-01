Ext.data.JsonP['iCloud_Services']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>iCloud Services</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"40927727\" class=\"content\">\n            <h1>iCloud Services</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-Introduction\">Introduction</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-AppleBestPractices\">Apple Best Practices</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-SetupaDistributionProfilewithiCloudServices\">Setup a Distribution Profile with iCloud Services</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-RegisteranAppID\">Register an App ID</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-DisableiCloudBackup\">Disable iCloud Backup</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-PerformaManualBackup\">Perform a Manual Backup</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-TestRestoringaniCloudBackup\">Test Restoring an iCloud Backup</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/iCloud_Services-section-40927727_iCloudServices-FurtherReadingandReferences\">Further Reading and References</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"40927727_iCloudServices-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nTitanium applications running on iOS devices can backup data to Apple's iCloud service.  By default, iOS schedules to backup application data to iCloud once a day if the device is plugged in, inactive and has an internet connection.  Only files saved in the <tt class=\" \">applicationDataDirectory</tt> and <tt class=\" \">applicationSupportDirectory</tt> directories are saved unless you specifically set the <tt class=\" \">remoteBackup</tt> property on the file to false.  Files in the Resources (app bundle), Cache and tmp directories are not backed up.  If you want to backup a file to iCloud, make sure it is in the data directory.    </p>\n    <p>\nTo use iCloud's backup feature, you need to setup a distribution profile with iCloud services enabled, then package your application using the distribution profile.    </p>\n    <div class=\"section section-3 \" id=\"40927727_iCloudServices-AppleBestPractices\">\n        <h3 class=\"heading \"><span>Apple Best Practices</span></h3>\n    <p>\nApple recommends that only files created by users or data that cannot be recreated by the application should be backed up, to save time uploading data and iCloud storage space.  Use the application's data directory (called the <tt class=\" \">Document</tt> directory in the iOS filesystem) to store user data and critical files.    </p>\n    <p>\nIf a file can be downloaded or recreated by the application, the application should disable backing up that file.  Apple recommends using the application support directory (called the <tt class=\" \">Library/Application Support</tt> directory in the iOS filesystem) to store downloaded content and data that the application can recreate.  Since, by default, files in the application support directory are backed up, you need to explicitly disable backing them up if needed.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40927727_iCloudServices-SetupaDistributionProfilewithiCloudServices\">\n        <h2 class=\"heading \"><span>Setup a Distribution Profile with iCloud Services</span></h2>\n    <p>\nTo use the iCloud service, you need to create a Distribution Profile, which requires a Distribution Certificate and an App ID with iCloud services enabled.  If you have created a Distribution Profile before, the only difference is you need to create an Explicit App ID with the iCloud services enabled.    </p>\n    <div class=\"section section-3 \" id=\"40927727_iCloudServices-RegisteranAppID\">\n        <h3 class=\"heading \"><span>Register an App ID</span></h3>\n    <p>\nYou need to register an App ID for your application.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog in to the <a class=\"external-link external-link\" href=\"https://developer.apple.com/membercenter/\" target=\"_blank\">Apple Developer Member Center</a> as the Team Agent or Admin.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Certificates, Identifiers &amp; Profiles</strong>.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Identifiers</strong>, then click the add (<strong class=\" \">+</strong>) button near the top-right corner.    </p>\n</li><li class=\" \">    <p>\nUnder <strong class=\" \">App ID Description</strong>, enter a value in the <strong class=\" \">Name</strong> field.    </p>\n</li><li class=\" \">    <p>\nSelect the <strong class=\" \">App ID Prefix</strong> to use. (You cannot use a Wildcard App ID for an application with push notifications.)    </p>\n</li><li class=\" \">    <p>\nIn the the <strong class=\" \">App ID Suffix</strong> section, select <strong class=\" \">Explicit App ID</strong> and enter your application's ID. This is the value of the <tt class=\" \">&lt;id&gt;</tt> element in your project's <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>\nUnder <strong class=\" \">App Services</strong>, check the <strong class=\" \">iCloud</strong> checkbox.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Continue</strong>, <strong class=\" \">Submit</strong>, and <strong class=\" \">Done</strong> to complete the process.    </p>\n</li></ol>    <p>\nAfter creating your App ID, follow the directions from <a class=\"document-link \" href=\"#!/guide/Distributing_iOS_apps\">Distributing iOS apps</a> to create your Distribution Certificate and Distribution Profile, then use the certificate and profile to package your application.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"40927727_iCloudServices-DisableiCloudBackup\">\n        <h2 class=\"heading \"><span>Disable iCloud Backup</span></h2>\n    <p>\nBy default, files in the <tt class=\" \">applicationDataDirectory</tt> and <tt class=\" \">applicationSupportDirectory</tt> directories are backed up to iCloud unless you set the <tt class=\" \">remoteBackup</tt> property of the file to false.  The file needs to exist before setting the property.  Setting the <tt class=\" \">remoteBackup</tt> property to false also disables backing up the file using iTunes.  iTunes backs up the application data locally.    </p>\n    <p>\nFor example, to disable backing up the entire application support directory, you need to recursively set the property on every file in the folder and its subfolders.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function walk(folder) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var dir = Ti.Filesystem.getFile(folder);</code></div>\n<div class=\"line\"><code class=\"plain\">    var dir_files = dir.getDirectoryListing();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">for</code><code class=\"plain\"> (var i = </code><code class=\"value\">0</code><code class=\"plain\">; i &lt; dir_files.length; i++) {</code></div>\n<div class=\"line\"><code class=\"plain\">        var file = Ti.Filesystem.getFile(folder, dir_files[i]);</code></div>\n<div class=\"line\"><code class=\"plain\">        file.remoteBackup = </code><code class=\"keyword\">false</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        var nativePath = file.nativePath;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// Subfolder not a file</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (nativePath.lastIndexOf(</code><code class=\"string\">'/'</code><code class=\"plain\">) == nativePath.length - </code><code class=\"value\">1</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">            walk(file.nativePath);</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">walk(Ti.Filesystem.applicationSupportDirectory);</code></div>\n</div>\n</div>    <p>\nDatabase files created using the Titanium.Database API are not stored in the data or application support directories.  To disable backing up a database file, use the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Database.DB-property-file\"><tt class=\" \">file</tt></a> property after opening a database to access the database file, then set the <tt class=\" \">remoteBackup</tt> property on the database file to false.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var db = Ti.Database.open(</code><code class=\"string\">'foostore'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">db.file.remoteBackup = </code><code class=\"keyword\">false</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-2 \" id=\"40927727_iCloudServices-PerformaManualBackup\">\n        <h2 class=\"heading \"><span>Perform a Manual Backup</span></h2>\n    <p>\nIf you do not want to wait for iOS to backup your files, you can manually perform a backup.  To perform a manual backup to iCloud, on the iOS device:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen <strong class=\" \">Settings.</strong>    </p>\n</li><li class=\" \">    <p>\nNavigate to <strong class=\" \">iCloud</strong> &gt; <strong class=\" \">Storage &amp; Backup.</strong>    </p>\n</li><li class=\" \">    <p>\nMake sure <strong class=\" \">iCloud Backup</strong> is switched on.    </p>\n</li><li class=\" \">    <p>\nTap <strong class=\" \">Backup Now</strong>.    </p>\n</li></ol>    <p>\nTo check how much space the backup uses:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen <strong class=\" \">Settings.</strong>    </p>\n</li><li class=\" \">    <p>\nNavigate to <strong class=\" \">iCloud</strong> &gt; <strong class=\" \">Storage &amp; Backup </strong>&gt; <strong class=\" \">Manage Storage</strong>.    </p>\n</li><li class=\" \">    <p>\nTap <strong class=\" \">This Device</strong>.    </p>\n</li></ol>    <p>\nThe device displays an itemized list of how much iCloud storage space each application uses.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"40927727_iCloudServices-TestRestoringaniCloudBackup\">\n        <h2 class=\"heading \"><span>Test Restoring an iCloud Backup</span></h2>\n    <p>\nTo test restoring an iCloud backup, you need to reset your device and erase the application settings and content.  After the reset, during the &quot;Set Up iPhone&quot;<i class=\" \"> </i>step of the iOS Setup Assistant, select to <strong class=\" \">Restore from iCloud Backup</strong> and choose a previous device backup to start restoring your device.    </p>\n    <p>\nBefore proceeding make sure have a current backup of your device.  See the previous section to perform a manual backup.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen <strong class=\" \">Settings</strong>.    </p>\n</li><li class=\" \">    <p>\nNavigate to <strong class=\" \">General</strong> &gt; <strong class=\" \">Reset</strong>.    </p>\n</li><li class=\" \">    <p>\nTap <strong class=\" \">Erase all settings and content</strong>.  A dialog appears asking you to confirm your selection.  After confirming, the device will reset.    </p>\n</li><li class=\" \">    <p>\nAfter the device resets, the iOS Setup Assistant appears.  Follow the initial steps to select your language, region, etc.    </p>\n</li><li class=\" \">    <p>\nOnce you have come to the &quot;Set Up iPhone&quot; step, tap <strong class=\" \">Restore from iCloud Backup</strong>.    </p>\n</li><li class=\" \">    <p>\nIn the &quot;Choose backup&quot; step, select the backup to use to restore your device.    </p>\n</li></ol>    <p>\niOS will start restoring your device based on the backup chosen.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"40927727_iCloudServices-FurtherReadingandReferences\">\n        <h2 class=\"heading \"><span>Further Reading and References</span></h2>\n    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/icloud/documentation/data-storage/index.html\" target=\"_blank\">iOS Data Storage Guidelines</a>    </p>\n    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/iPhone/Conceptual/iPhoneOSProgrammingGuide/PerformanceTuning/PerformanceTuning.html#//apple_ref/doc/uid/TP40007072-CH8-SW9\" target=\"_blank\">iOS App Programming Guide: App Backup Best Practices</a>    </p>\n    <p>\n<a class=\"external-link external-link\" href=\"http://support.apple.com/kb/HT1766\" target=\"_blank\">Back up and restore your iOS device with iCloud or iTunes</a>    </p>\n    <p>\n<a class=\"external-link external-link\" href=\"http://support.apple.com/kb/ht2109\" target=\"_blank\">Transfer content from an iPhone, iPad, or iPod touch to a new device</a>    </p>\n    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=40927727\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"iCloud Services"});