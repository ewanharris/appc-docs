Ext.data.JsonP['Changing_the_User_Bundle_Directory']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Changing the User Bundle Directory</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083237\" class=\"content\">\n            <h1>Changing the User Bundle Directory</h1>\n    <div class=\"section section-2 \" id=\"30083237_ChangingtheUserBundleDirectory-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_the_User_Bundle_Directory-section-30083237_ChangingtheUserBundleDirectory-ChangingYourUserBundlePath\">Changing Your User Bundle Path</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Changing_the_User_Bundle_Directory-section-30083237_ChangingtheUserBundleDirectory-UserBundlePathRequirements\">User Bundle Path Requirements</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083237_ChangingtheUserBundleDirectory-ChangingYourUserBundlePath\">\n        <h2 class=\"heading \"><span>Changing Your User Bundle Path</span></h2>\n    <p>\nBy default, user bundles are placed in an &quot;Aptana Rubles&quot; directory in the user's home directory or Documents directory, depending on the OS. There may be times when you want to change the user bundle directory. In order to do this, you will need to edit the eclipse.ini file (when running Studio as a plugin) or the AptanaStudio3.ini file (when running standalone). Simply add something like the following to the end of the file:    </p>\n    <p>\n<strong class=\" \">Aptana Studio 3.0.3, Titanium Studio 1.0.3:</strong><br/>-Daptana.ruble.user.location=&lt;some-location&gt;    </p>\n    <p>\n<strong class=\" \">Aptana Studio 3.0.4+, Titanium Studio 1.0.4+:</strong><br/>-Dstudio.rubleUserLocation=&lt;some-location&gt;    </p>\n    <p>\nReplace &lt;some-location&gt; with the full path of the directory where you would like your user bundles to live. Once you make this change and save the file, you will need to restart Studio for the changes to take effect.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083237_ChangingtheUserBundleDirectory-UserBundlePathRequirements\">\n        <h2 class=\"heading \"><span>User Bundle Path Requirements</span></h2>\n    <p>\nIn order for your new location to be used for the user bundle directory, the following requirements must be satsified:    </p>\n    <p>\n1. The directory must exist<br/>2. The directory must be writable<br/>3. The directory must be readable    </p>\n    <p>\nAlternately, if the directory does not exist, Studio will try to create it. If it is created successfully, the above criteria must be satisfied as well. If any of these conditions fail, then Studio will use the default location as if the ini property were never defined.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083237_ChangingtheUserBundleDirectory-MovingExistingBundles\">\n        <h2 class=\"heading \"><span>Moving Existing Bundles</span></h2>\n    <p>\nIf you run Studio before changing your ini file, you will need to migrate your user bundles. Simply move the contents of your old user bundle directory into the new location you specified in the ini property. On Mac OS X you will find your user bundles at ~/Documents/Aptana Rubles. On Windows they will be located in an &quot;Aptana Rubles&quot; directory in your user's home directory as defined by the user.home system property.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083237\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Changing the User Bundle Directory"});