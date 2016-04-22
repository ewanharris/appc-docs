Ext.data.JsonP['Accessing_the_Log_File']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Accessing the Log File</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083283\" class=\"content\">\n            <h1>Accessing the Log File</h1>\n    <div class=\"section section-2 \" id=\"30083283_AccessingtheLogFile-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-AccessingtheLog\">Accessing the Log</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-AccessingtheLogfromStudio/Eclipse\">Accessing the Log from Studio/Eclipse</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-AccessingtheLogfromtheFileSystem\">Accessing the Log from the File System</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-DiagnosticTest\">Diagnostic Test</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-MobileProjects\">Mobile Projects</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-iOS\">iOS</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-Androidandotherplatforms\">Android and other platforms</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Accessing_the_Log_File-section-30083283_AccessingtheLogFile-JavaScriptWebDebuggerLogFile\">JavaScript Web Debugger Log File</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083283_AccessingtheLogFile-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nThe Studio <tt class=\" \">.log</tt> file records most application exceptions that occur while you are using the Studio application, and is helpful to the Studio development team in troubleshooting bugs that you may encounter during normal usage.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro\">\n        \n    <p>\n<i class=\" \">Always</i> file a Studio Log when reporting an issue in the bug tracker    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"30083283_AccessingtheLogFile-AccessingtheLog\">\n        <h2 class=\"heading \"><span>Accessing the Log</span></h2>\n    <p>\nYou can access your log either through the <strong class=\" \">Help</strong> menu in Studio or manually through the filesystem on your computer.    </p>\n    <div class=\"section section-3 \" id=\"30083283_AccessingtheLogFile-AccessingtheLogfromStudio/Eclipse\">\n        <h3 class=\"heading \"><span>Accessing the Log from Studio/Eclipse</span></h3>\n    <p>\nIn the Studio-specific submenu, navigate to <strong class=\" \">Help</strong> &gt; <strong class=\" \">Studio </strong>&gt; <strong class=\" \">View Log File</strong> to open the log file in an editor window, where you can then save to a separate file in order to attach it to a support ticket.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30083283_AccessingtheLogFile-AccessingtheLogfromtheFileSystem\">\n        <h3 class=\"heading \"><span>Accessing the Log from the File System</span></h3>\n    <p>\nYour current .log file is located in a .metadata folder in your current workspace directory. The following is the path if you are working on the default workspace.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nWindows XP: C:\\Documents and Settings\\username\\My Documents\\&lt;Studio Workspace&gt;\\.metadata\\.log    </p>\n</li><li class=\" \">    <p>\nWindows Vista/Windows 7: C:\\Users\\username\\Documents\\&lt;Studio Workspace&gt;\\.metadata\\.log    </p>\n</li><li class=\" \">    <p>\nMac OS X: ~/Documents/&lt;Studio Workspace&gt;/.metadata/.log    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083283_AccessingtheLogFile-DiagnosticTest\">\n        <h2 class=\"heading \"><span>Diagnostic Test</span></h2>\n    <p>\nIn the Studio-specific submenu, navigate to <strong class=\" \">Help &gt; Studio &gt; Run Diagnostic Test</strong> to run a set of tests on the system environment that will help diagnose the issues. You could then copy the content to a separate file and attach it to a support ticket.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083283_AccessingtheLogFile-MobileProjects\">\n        <h2 class=\"heading \"><span>Mobile Projects</span></h2>\n    <p>\nIf you get a console error when building a project, the correct log to submit depends on the platform you are building. An example error:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Traceback (most recent call last):</code></div>\n<div class=\"line\"><code class=\"plain\">  File </code><code class=\"string\">\"/Users/loganbest/Library/Application Support/Titanium/mobilesdk/osx/1.7.1/iphone/builder.py\"</code><code class=\"plain\">, line </code><code class=\"value\">1397</code><code class=\"plain\">, in &lt;module&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    main(sys.argv)</code></div>\n<div class=\"line\"><code class=\"plain\">  ...</code></div>\n</div>\n</div>    <div class=\"section section-3 \" id=\"30083283_AccessingtheLogFile-iOS\">\n        <h3 class=\"heading \"><span>iOS</span></h3>\n<ol class=\" \"><li class=\" \">    <p>\nInside Studio, open the <strong class=\" \">Project Explorer</strong> view    </p>\n</li><li class=\" \">    <p>\nClick the small down arrow in the upper-right-corner of the view    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Customize View</strong>    </p>\n</li><li class=\" \">    <p>\nScroll down to the bottom of the <strong class=\" \">Filters</strong> tab and uncheck <strong class=\" \">Appcelerator Build Folders</strong> or <strong class=\" \">Titanium Build Folders</strong>    </p>\n</li></ol>    <p>\nYou can now see the build folder inside your Titanium projects    </p>\n<ol class=\" \"><li class=\" \">    <p>\nExpand the <strong class=\" \">build/iphone/build</strong> folder    </p>\n</li><li class=\" \">    <p>\nAttach the <strong class=\" \">build.log</strong> file, and the output from the console.    </p>\n</li></ol>    <p>\nOnce you have found the log file, you can reverse the above steps to hide the build folders once again.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30083283_AccessingtheLogFile-Androidandotherplatforms\">\n        <h3 class=\"heading \"><span>Android and other platforms</span></h3>\n    <p>\nSubmit the output from the console.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083283_AccessingtheLogFile-JavaScriptWebDebuggerLogFile\">\n        <h2 class=\"heading \"><span>JavaScript Web Debugger Log File</span></h2>\n    <p>\nSee <a class=\"document-link \" href=\"#!/guide/Accessing_your_debugger_log\">Accessing your debugger log</a>.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083283\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Accessing the Log File"});