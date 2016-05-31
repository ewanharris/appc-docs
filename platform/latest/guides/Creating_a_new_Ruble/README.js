Ext.data.JsonP['Creating_a_new_Ruble']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Creating a new Ruble</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083232\" class=\"content\">\n            <h1>Creating a new Ruble</h1>\n    <div class=\"section section-2 \" id=\"30083232_CreatinganewRuble-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_new_Ruble-section-30083232_CreatinganewRuble-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_new_Ruble-section-30083232_CreatinganewRuble-CreatinganewRubleUsingtheWizard\">Creating a new Ruble Using the Wizard</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_new_Ruble-section-30083232_CreatinganewRuble-Abare-bonesRublefromScratch\">A bare-bones Ruble from Scratch</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_new_Ruble-section-30083232_CreatinganewRuble-Rublefilelocations\">Ruble file locations</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Creating_a_new_Ruble-section-30083232_CreatinganewRuble-CheckingtoensureyourRubleloaded\">Checking to ensure your Ruble loaded</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083232_CreatinganewRuble-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nIf you want to extend the functionality of Studio, you can do so by creating a new Ruble, or extending an existing one.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nStarting with Studio Release 3.1.0, the Ruby editor is no longer included as part of the Studio installer. In order to edit Rubles in Studio, install the Ruby plug-in as instructed in  <a class=\"document-link \" href=\"#!/guide/Adding_PHP,_Ruby_or_Python_Support\">Adding PHP, Ruby or Python Support</a>.    </p>\n    </div>\n    \n    </div>\n    <div class=\"section section-2 \" id=\"30083232_CreatinganewRuble-CreatinganewRubleUsingtheWizard\">\n        <h2 class=\"heading \"><span>Creating a new Ruble Using the Wizard</span></h2>\n    <p>\nStudio greatly simplifies the process of creating your own Ruble.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nFrom the menu, select<strong class=\" \"> File &gt; New &gt; Ruby Project</strong>.    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Ruble Template</strong>, then click <strong class=\" \">Next</strong>.    </p>\n</li><li class=\" \">    <p>\nType a name of your Ruble, for example, &quot;my.ruble&quot;.    </p>\n</li><li class=\" \">    <p>\nEnsure the &quot;I'll generate my own code...&quot; radio is selected, then click <strong class=\" \">Finish</strong>.    </p>\n</li></ol>    <p>\nThe ruble is created in your workspace.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083232_CreatinganewRuble-Abare-bonesRublefromScratch\">\n        <h2 class=\"heading \"><span>A bare-bones Ruble from Scratch</span></h2>\n    <p>\nThe <a class=\"document-link \" href=\"#!/guide/Ruble_Specification\">Ruble Specification</a> lists the complete set of items that can be created, but at the bare minimum you need a folder and a single bundle.rb file to create a ruble. The only difference is where you place the files.    </p>\n    <p>\nWe list the steps to create a very simple ruble. Below these steps, we illustrate where you can place this Ruble for different effects.    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nMake sure the <i class=\" \">rublename</i> you choose below is unique to all your installed rubles, or otherwise you will end up overriding an existing Ruble's functionality. Also note this is a tiny bit more complicated than it ought to be--we'll make this easier in future versions.    </p>\n    </div>\n    \n<ol class=\" \"><li class=\" \">    <p>\nYou want to figure out first where your Application Rubles folder lives.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nMac: $home/Documents/Aptana Rubles.    </p>\n</li><li class=\" \">    <p>\nEverywhere else: ${user.home}/Aptana Rubles. On Windows, that would translate to somewhere like c:\\Users\\Username\\Aptana Rubles    </p>\n</li><li class=\" \">    <p>\nIf you still can't find the location, look for your user.home java property. Open up the &quot;About Studio&quot; menu, then <strong class=\" \">Installation Details &gt; Configuration</strong> and search for the user.home property.    </p>\n</li></ul></li><li class=\" \">    <p>\nCreate a new Ruby project. (<strong class=\" \">File &gt; New Ruby Project</strong>)    </p>\n</li><li class=\" \">    <p>\nName it <i class=\" \">rublename</i>.ruble, and browse to put the location into the &quot;Aptana Rubles&quot; folder.    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">NOTE: You need to create a new</strong> <strong class=\" \"><i class=\" \">rublename</i></strong><strong class=\" \">.ruble folder in the above location.</strong> Otherwise, it will create the project in the root of the &quot;Aptana Rubles&quot; folder.    </p>\n</li><li class=\" \">    <p>\nAs an example, the result on OS X might look like:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Project name:</strong> my.ruble    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Location:</strong> /Users/username/Documents/Aptana Rubles/my.ruble    </p>\n</li></ul></li></ul></li><li class=\" \">    <p>\nFinish the wizard    </p>\n</li><li class=\" \">    <p>\nAdd a bundle.rb file with the following content:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">require </code><code class=\"string\">'ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">bundle </code><code class=\"keyword\">do</code><code class=\"plain\"> |bundle|</code></div>\n<div class=\"line\"><code class=\"plain\">  bundle.display_name = </code><code class=\"string\">'My Ruble'</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nSave and close bundle.rb    </p>\n</li></ol>    <p>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n        \n    <p>\nYou've not added any content yet, so you won't see your Ruble show up in the UI. You'll need to add <a class=\"document-link \" href=\"#!/guide/Creating_a_new_template\">templates</a> or commands to see a visible change. See below for checking to ensure your bundle loaded.    </p>\n    </div>\n    \n    <div class=\"section section-3 \" id=\"30083232_CreatinganewRuble-Rublefilelocations\">\n        <h3 class=\"heading \"><span>Ruble file locations</span></h3>\n    <p>\nIn general you will place your Ruble files in one of two locations.    </p>\n    <p>\nA. Any top-level &quot;bundles&quot; directory in an active projects within the current workspace.<br/>B. The $USER_DOCUMENT_DIRECTORY/Aptana Rubles/, where $USER_DOCUMENT_DIRECTORY is platform dependent.    </p>\n    <p>\nProject-level bundles (A) will override user-level bundles (B) if there is a conflict. (B) is the preferred approach as it makes your ruble easier to share later.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083232_CreatinganewRuble-CheckingtoensureyourRubleloaded\">\n        <h2 class=\"heading \"><span>Checking to ensure your Ruble loaded</span></h2>\n    <p>\nStudio 3 includes a bundles view that shows all currently loaded Rubles. You can use it to ensure your Ruble actually loaded as expected.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nGo to <strong class=\" \">Window &gt; Show View &gt; Other...</strong>    </p>\n</li><li class=\" \">    <p>\nExpand the Studio category    </p>\n</li><li class=\" \">    <p>\nSelect the <strong class=\" \">Bundles</strong> item<br/>A view appears showing all currently loaded bundles    </p>\n</li><li class=\" \">    <p>\nYou should see the bundle with the name you gave above in the list    </p>\n</li><li class=\" \">    <p>\nFor detailed information on selected items in the Bundles View, go to <strong class=\" \">Window &gt; Show View &gt; Other...</strong>    </p>\n</li><li class=\" \">    <p>\nExpand the General category    </p>\n</li><li class=\" \">    <p>\nSelect the <strong class=\" \">Properties</strong> item<br/>A view appears showing detailed information on your Bundles View selection    </p>\n</li><li class=\" \">    <p>\nIf your bundle has an error, you should see output in the Console view.    </p>\n</li></ol>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083232\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Creating a new Ruble"});