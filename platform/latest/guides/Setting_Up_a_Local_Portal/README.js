Ext.data.JsonP['Setting_Up_a_Local_Portal']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Setting Up a Local Portal</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083165\" class=\"content\">\n            <h1>Setting Up a Local Portal</h1>\n    <div class=\"section section-2 \" id=\"30083165_SettingUpaLocalPortal-Actions\">\n        <h2 class=\"heading \"><span>Actions</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_Up_a_Local_Portal-section-30083165_SettingUpaLocalPortal-Description\">Description</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_Up_a_Local_Portal-section-30083165_SettingUpaLocalPortal-ImportingthePortalsamplefromGithub\">Importing the Portal sample from Github</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Setting_Up_a_Local_Portal-section-30083165_SettingUpaLocalPortal-PointingtothelocalPortal\">Pointing to the local Portal</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083165_SettingUpaLocalPortal-Description\">\n        <h2 class=\"heading \"><span>Description</span></h2>\n    <p>\nFollow the instructions on this page to import the portal samples from Github, and point the Studio to load the local portal.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083165_SettingUpaLocalPortal-ImportingthePortalsamplefromGithub\">\n        <h2 class=\"heading \"><span>Importing the Portal sample from Github</span></h2>\n    <p>\nImport the portal samples project from the <a class=\"external-link external-link\" href=\"https://github.com/aptana/studio3-sdk\" target=\"_blank\">studio3-sdk</a> repository to your machine.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083165_SettingUpaLocalPortal-PointingtothelocalPortal\">\n        <h2 class=\"heading \"><span>Pointing to the local Portal</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\nopen the <tt class=\" \">TitaniumStudio.ini</tt> file (or <tt class=\" \">AptanaStrudio.ini</tt>), which exists next to the Studio executable.    </p>\n</li><li class=\" \">    <p>\nedit the <strong class=\" \">-vmargs</strong> part by adding:    </p>\n    <div class=\"confbox programlisting preformatted panel\">\n                <div class=\"content\">\n        <pre><code>-Dtitanium.dashboardUrl=file:///C:/studio3-sdk/portal/sample/dashboard.html</code></pre>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083165\"><span>Edit</span></a>\n    </div>\n</li><li class=\" \">    <p>\nre-launch Studio.    </p>\n</li></ul>    <p>\nThe loaded portal will now be the local one.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083165\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Setting Up a Local Portal"});