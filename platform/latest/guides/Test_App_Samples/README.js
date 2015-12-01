Ext.data.JsonP['Test_App_Samples']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Test App Samples</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845629\" class=\"content\">\n            <h1>Test App Samples</h1>\n    <p>\nThe Alloy GitHub repository includes a number of small test applications (<a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/tree/master/test/apps\" target=\"_blank\">github.com/appcelerator/alloy/tree/master/test/apps</a>) that demonstrate various Alloy features.    </p>\n    <p>\nTo build and run one of the test applications, do the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nClone the Alloy project locally.    </p>\n</li><li class=\" \">    <p>\nCreate a new Alloy project, either using Studio or the CLI tools.    </p>\n</li><li class=\" \">    <p>\nCopy the contents of the desired sample folder into the newly created Alloy project's <strong class=\" \">app/</strong> folder, over-writing any existing files.    </p>\n</li><li class=\" \">    <p>\nBuild and run the application on a device, simulator, or emulator.    </p>\n</li></ul>    <p>\nThe sample apps are organized in several folders representing the following categories:    </p>\n<ul class=\"childpages-macro \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Advanced\">Advanced</a> &mdash; Samples in the advanced/ folder demonstrate advanced Alloy topics and approaches, such as advanced styling, using modules, using CommonJS modules, and more.    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Basics\">Basics</a> &mdash; Samples in the basics/ folder demonstrates basic Alloy concepts.    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Models\">Models</a> &mdash; Samples in the alloy/test/apps/models/ folder demonstrates using models, collections, and data binding in Alloy.    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/User_Interface\">User Interface</a> &mdash; Samples in the ui/ folder demonstrate use of several Titanium UI objects in an Alloy project.    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Widgets\">Widgets</a> &mdash; Samples in the widgets/ folder demonstrates how to create and use Alloy widgets, which are self-contained Alloy components that can easily be shared.    </p>\n</li></ul>    <p>\nNote that some samples demonstrate platform-specific features that only run certain platforms.    </p>\n    <div class=\"section section-2 \" id=\"41845629_TestAppSamples-ImportingandRunninganAlloyTestApp\">\n        <h2 class=\"heading \"><span>Importing and Running an Alloy Test App</span></h2>\n    <p>\nTo import one of the sample application, first clone the Alloy GitHub project locally:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">git clone https:</code><code class=\"comments\">//github.com/appcelerator/alloy</code></div>\n</div>\n</div>    <p>\nOnce you've selected a test app to build and run, you first create a new &quot;blank&quot; Alloy project, and then copy the contents of the sample folder into the /app folder of the newly created Alloy project. You can do this either using Appcelerator Studio or on the command line using the CLI tools, as explained below.    </p>\n    <div class=\"section section-3 \" id=\"41845629_TestAppSamples-UsingtheCLItools\">\n        <h3 class=\"heading \"><span>Using the CLI tools</span></h3>\n    <p>\nStarting with Appcelerator CLI 5.0.0 or Alloy 1.7.6, you can generate a new Alloy project using a test application from the Alloy Github repo.  (The source code is copied from the global or local install of the Alloy npm package.)    </p>\n    <p>\nTo create an Alloy application based on a test application, first create a skeleton Titanium project, then run the Alloy new command with the <tt class=\" \">--testapp &lt;path_to_test_app&gt;</tt> option.  Pass the option the relative path to the test application after the <tt class=\" \">alloy/test/apps</tt> path.  For example, if you want to use the <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/tree/master/test/apps/ui/picker\" target=\"_blank\">picker test application</a>, run <tt class=\" \">alloy new --testapp ui/picker</tt> from a skeleton Titanium project.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium --classic -i com.appc.picker -n AlloyPicker</code></div>\n<div class=\"line\"><code class=\"plain\">cd AlloyPicker</code></div>\n<div class=\"line\"><code class=\"plain\">appc alloy </code><code class=\"keyword\">new</code><code class=\"plain\"> --testapp ui/picker</code></div>\n</div>\n</div>    <p>\nPrior to Alloy 1.7.6, you need to manually copy the source code to the new Titanium project:.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Creating a test project</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc </code><code class=\"keyword\">new</code><code class=\"plain\"> -t titanium -n picker_test --id com.yourdomain -d . -url yourdomain.com -p all</code></div>\n<div class=\"line\"><code class=\"plain\">cd picker_test/</code></div>\n<div class=\"line\"><code class=\"plain\">cp -r &lt;alloy_repo&gt;/test/apps/ui/picker/ app/.</code></div>\n<div class=\"line\"><code class=\"plain\">appc run -p ios</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"41845629_TestAppSamples-UsingAppceleratorStudio\">\n        <h3 class=\"heading \"><span>Using Appcelerator Studio</span></h3>\n    <p>\nTo build a sample using <strong class=\" \">Appcelerator Studio</strong>, first create a new Alloy project by selecting <strong class=\" \">File &gt; New &gt; Mobile App Project</strong>.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845629/studio_create_alloy.png\" alt=\"images/download/attachments/41845629/studio_create_alloy.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"400\"/>\n            </p>\n    <p>\nDrag and drop the contents of the desired test app folder from the desktop into the new project's <strong class=\" \">app/</strong> folder in Project Explorer.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845629/copy_files.png\" alt=\"images/download/attachments/41845629/copy_files.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"600\"/>\n            </p>\n    <p>\nWhen prompted, select <strong class=\" \">Copy file and folders</strong> option in the File and Folder Operation dialog and click OK.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845629/file_folder_dialog.png\" alt=\"images/download/attachments/41845629/file_folder_dialog.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"434\"/>\n            </p>\n    <p>\nSelect <strong class=\" \">Yes To All</strong> when asked if you want to overwrite files in the target folder.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845629/overwrite_yes.png\" alt=\"images/download/attachments/41845629/overwrite_yes.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\"/>\n            </p>\n    <p>\nYou can now build or run the application on a target device, simulator or emulator.    </p>\n    <p>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845629\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Test App Samples"});