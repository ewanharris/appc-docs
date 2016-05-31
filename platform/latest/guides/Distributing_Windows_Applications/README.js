Ext.data.JsonP['Distributing_Windows_Applications']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Distributing Windows Applications</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43308729\" class=\"content\">\n            <h1>Distributing Windows Applications</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-CreateanApplication\">Create an Application</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-Updatethetiapp.xmlFile\">Update the tiapp.xml File</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-PackageforWindowsPhoneStore\">Package for Windows Phone Store</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-SetthePublisherID\">Set the Publisher ID</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-CLIInstructions\">CLI Instructions</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-StudioInstructions\">Studio Instructions</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-PackageforWindowsPhoneStorewithStudio\">Package for Windows Phone Store with Studio</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-PackageforWindowsPhoneStorewiththeCLI\">Package for Windows Phone Store with the CLI</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-PackageforWindowsStore\">Package for Windows Store</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-PackageforWindowsStorewithStudio\">Package for Windows Store with Studio</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-PackageforWindowsStorewiththeCLI\">Package for Windows Store with the CLI</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-SubmitanApplication\">Submit an Application</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-Pricingandavailability\">Pricing and availability</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-Appproperties\">App properties</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-Packages\">Packages</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Distributing_Windows_Applications-section-43308729_DistributingWindowsApplications-Description\">Description</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"43308729_DistributingWindowsApplications-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nTo distribute an application on the Windows Store (for x86-based applications) and Windows Phone Store (for ARM-based applications), you need to:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nCreate an application in the Windows Dev Center.    </p>\n</li><li class=\" \">    <p>\nUpdate information in your <tt class=\" \">tiapp.xml</tt> file based on the IDs and fields from the Windows Dev Center.    </p>\n</li><li class=\" \">    <p>\nGenerate APPX file(s) of your Titanium projects.    </p>\n</li><li class=\" \">    <p>\nStart an application submission and upload your APPX file(s) with the submission.    </p>\n</li></ol>    </div>\n    <div class=\"section section-2 \" id=\"43308729_DistributingWindowsApplications-CreateanApplication\">\n        <h2 class=\"heading \"><span>Create an Application</span></h2>\n    <p>\nTo submit an application to the Windows Store or Windows Phone Store, you need to create an application project in the Windows Dev Center.    </p>\n    <p>\nIf you have not created an application yet:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog into <a class=\"external-link external-link\" href=\"https://dev.windows.com/\" target=\"_blank\">https://dev.windows.com</a>.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Dashboard</strong> in the top-right corner.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Create a new app</strong> in the left navigation.    </p>\n</li><li class=\" \">    <p>\nEnter a name for your application and click <strong class=\" \">Reserve app name</strong>.    </p>\n</li></ol>    <p>\nThe Windows Dev Center will create a new application in your dashboard.  The process will generate IDs and other fields that will need to be updated in the <tt class=\" \">tiapp.xml</tt> file.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43308729_DistributingWindowsApplications-Updatethetiapp.xmlFile\">\n        <h2 class=\"heading \"><span>Update the tiapp.xml File</span></h2>\n    <p>\nTitanium uses the settings in the <tt class=\" \">tiapp.xml</tt> file to package your project.  Some of these settings must match the settings generated by the Windows Dev Center.  Specifically, the <tt class=\" \">&lt;name/&gt;</tt>, <tt class=\" \">&lt;id/&gt;, </tt><tt class=\" \">&lt;publisher/&gt;</tt> and the <tt class=\" \">ti.windows.publishername</tt> app property elements.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen the project's <tt class=\" \">tiapp.xml</tt> file.    </p>\n</li><li class=\" \">    <p>\nLocate the &lt;name&gt; element.  The node text of the element must match the name of the application in the Windows Dev Center.    </p>\n</li><li class=\" \">    <p>\nLocate the <tt class=\" \">&lt;publisher&gt;</tt>    <span style=\"color: #000000;\">\n element.  The node text of the element must match the     </span>\n    <span style=\"color: #000000;\">\n<i class=\" \">Publisher display name</i> of your Microsoft Developer account.    </span>\n    </p>\n</li><li class=\" \">    <p>\nLocate the <tt class=\" \">&lt;property name=&quot;ti.windows.publishername&quot;&gt;</tt> element.  If you do not have the element in your <tt class=\" \">tiapp.xml</tt> file, add it. The node text for the element must match the<i class=\" \"> Windows publisher ID</i> of your Microsoft Developer account (or the     <span style=\"color: #000000;\">\nPackage/Identity/Publisher of the application)    </span>\n.    </p>\n</li><li class=\" \">    <p>\nAdd the <tt class=\" \">&lt;id&gt;</tt> element to the <tt class=\" \">&lt;windows&gt;</tt> element.  The node text of the element must match the     <span style=\"color: #000000;\">\n<tt class=\" \">Package/Identity/Name</tt> of the application, which was generated when you created the application in the Windows Dev Center Dashboard.    </span>\n    </p>\n</li></ol>    <p>\n    </p>\n    <div class=\"confbox admonition admonition-note aui-message warning shadowed information-macro\">\n            <div class=\"title\">Prior to Release 5.1.0</div>\n        \n    <p>\nPrior to Release 5.1.0, set the     <span style=\"color: #000000;\">\n<tt class=\" \">Package/Identity/Name</tt> of the application to the <tt class=\" \">&lt;id&gt;</tt> element under the <tt class=\" \">&lt;ti:app&gt;</tt> element rather than the <tt class=\" \">&lt;windows&gt;</tt> element.    </span>\n    </p>\n    </div>\n    \n    <p>\n    <span style=\"color: #000000;\">\n<br/>    </span>\n    </p>\n    <p>\n<strong class=\" \">To retrieve your Windows publisher ID and Publisher display name:</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog into <a class=\"external-link external-link\" href=\"https://dev.windows.com/\" target=\"_blank\">https://dev.windows.com</a>.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Dashboard</strong> in the top-right corner.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Account settings</strong> in the left navigation.    </p>\n</li></ol>    <p>\nThe publisher ID will be under the <strong class=\" \">Account details</strong> section as the     <span style=\"color: #000000;\">\n<strong class=\" \">Windows publisher ID</strong> field, and the publisher display name will be under the <strong class=\" \">Contact info</strong> section as the     <span style=\"color: #000000;\">\n<strong class=\" \">Publisher display name</strong> field.    </span>\n    </span>\n    </p>\n    <p>\n<strong class=\" \">    <span style=\"color: #000000;\">\n    <span style=\"color: #000000;\">\nTo retrieve the     <span style=\"color: #000000;\">\n<tt class=\" \">Package/Identity/Name</tt> and     <span style=\"color: #000000;\">\n<tt class=\" \">Package/Identity/Publisher</tt> fields:    </span>\n    </span>\n    </span>\n    </span>\n</strong>    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog into <a class=\"external-link external-link\" href=\"https://dev.windows.com/\" target=\"_blank\">https://dev.windows.com</a>.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Dashboard</strong> in the top-right corner.    </p>\n</li><li class=\" \">    <p>\nClick the application project in the left navigation.    </p>\n</li><li class=\" \">    <p>\nExpand <strong class=\" \">App management</strong> and click <strong class=\" \">App identity</strong>.    </p>\n</li></ol>    <p>\n    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">tiapp.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;ti:app&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;name&gt;FooApp&lt;/name&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;!-- Prior to Release </code><code class=\"value\">5.1</code><code class=\"plain\">.</code><code class=\"value\">0</code><code class=\"plain\">, set the Package/Identity/Name of the application to the top-level id element --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;!-- &lt;id&gt;12345FooInc.FooApp&lt;/id&gt; --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;publisher&gt;FooInc&lt;/publisher&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;property name=</code><code class=\"string\">\"ti.windows.publishername\"</code><code class=\"plain\">&gt;CN=</code><code class=\"value\">11111111</code><code class=\"plain\">-</code><code class=\"value\">2222</code><code class=\"plain\">-</code><code class=\"value\">3333</code><code class=\"plain\">-</code><code class=\"value\">4444</code><code class=\"plain\">-</code><code class=\"value\">555555555555</code><code class=\"plain\">&lt;/property&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;windows&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Since Release </code><code class=\"value\">5.1</code><code class=\"plain\">.</code><code class=\"value\">0</code><code class=\"plain\">, set the Package/Identity/Name of the application to the windows id element --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;id&gt;12345FooInc.FooApp&lt;/id&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">  &lt;/windows&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/ti:app&gt;</code></div>\n</div>\n</div>    <p>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43308729_DistributingWindowsApplications-PackageforWindowsPhoneStore\">\n        <h2 class=\"heading \"><span>Package for Windows Phone Store</span></h2>\n    <p>\nBefore creating an APPX file for the Windows Phone Store, you need to set your publisher ID in either the CLI or Studio.    </p>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-SetthePublisherID\">\n        <h3 class=\"heading \"><span>Set the Publisher ID</span></h3>\n    <p>\nTo deploy to the Windows Phone emulator or device, and to create a Windows Phone store package, you need to set your publisher ID.    </p>\n    <p>\n<strong class=\" \">To retrieve your publisher GUID</strong>:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nLog into <a class=\"external-link external-link\" href=\"https://dev.windows.com/\" target=\"_blank\">https://dev.windows.com</a>.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Dashboard</strong> in the top-right corner.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Account settings</strong> in the left navigation.    </p>\n</li></ol>    <p>\nThe publisher GUID will be under the <strong class=\" \">Account Details</strong> section as the     <span style=\"color: #000000;\">\n<strong class=\" \">Windows publisher ID</strong> field.    </span>\n    </p>\n    <p>\n    <span style=\"color: #000000;\">\nYou can set the publisher ID using either the CLI or in the Studio Preferences dialog.  If you set the publisher ID using the CLI, the value will be passed to Studio from the CLI.    </span>\n    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-CLIInstructions\">\n        <h3 class=\"heading \"><span>CLI Instructions</span></h3>\n    <p>\nUse the <tt class=\" \">appc ti config</tt> CLI command to set the <tt class=\" \">windows.publisherId</tt> Titanium CLI key.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc ti config windows.publisherId </code><code class=\"string\">\"CN=00000000-0000-1000-8000-000000000000\"</code></div>\n</div>\n</div>    <p>\nAlternatively, you may also pass the publisher ID to the CLI using the <tt class=\" \">-I</tt> option.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-StudioInstructions\">\n        <h3 class=\"heading \"><span>Studio Instructions</span></h3>\n<ol class=\" \"><li class=\" \">    <p>\nOpen the Preferences dialog:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOn Mac OS X, from the menu bar, select <strong class=\" \">Appcelerator Studio</strong> &gt; <strong class=\" \">Preferences</strong>.    </p>\n</li><li class=\" \">    <p>\nOn Windows, from the menu bar, select <strong class=\" \">Window &gt; Preferences</strong>.    </p>\n</li></ol></li><li class=\" \">    <p>\nIn the<strong class=\" \"> Preferences</strong> dialog, navigate to<strong class=\" \"> Studio &gt; Platforms &gt; Windows</strong>.    </p>\n</li><li class=\" \">    <p>\nEnter your publisher ID in the <strong class=\" \">Publisher Id </strong>field.    </p>\n</li><li class=\" \">    <p>\nIn the <strong class=\" \">Windows SDK Home</strong> field, enter the path to your <tt class=\" \">Microsoft SDKs</tt> folder if you installed it in a custom location.  By default, the CLI is able to retrieve the default path and pass it to Studio.    </p>\n</li></ol>    <p>\n        <img src=\"images/download/attachments/43306274/WindowsPreferences.PNG\" alt=\"images/download/attachments/43306274/WindowsPreferences.PNG\" class=\"confluence-embedded-image\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-PackageforWindowsPhoneStorewithStudio\">\n        <h3 class=\"heading \"><span>Package for Windows Phone Store with Studio</span></h3>\n    <p>\nTo package with Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nSelect the project in the <strong class=\" \">Project Explorer</strong> view.    </p>\n</li><li class=\" \">    <p>\nIn the global tool bar, select <strong class=\" \">Package</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list.    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Windows &gt; Windows Phone</strong> from the <strong class=\" \">Target</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>\nIf the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the application will be automatically launched after the device is selected.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n</li></ol>    <p>\nStudio will prompt you to enter a location to copy the generated APPX file to.    </p>\n    <p>\n        <img src=\"images/download/attachments/43308729/WindowsPhonePackage.png\" alt=\"images/download/attachments/43308729/WindowsPhonePackage.png\" class=\"confluence-embedded-image confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-PackageforWindowsPhoneStorewiththeCLI\">\n        <h3 class=\"heading \"><span>Package for Windows Phone Store with the CLI</span></h3>\n    <p>\nTo package an APPX file for the Windows Phone Store, run:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc run -p windows -T dist-phonestore -O &lt;OUTPUT_DIRECTORY&gt;</code></div>\n</div>\n</div>    <p>\n    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43308729_DistributingWindowsApplications-PackageforWindowsStore\">\n        <h2 class=\"heading \"><span>Package for Windows Store</span></h2>\n    <p>\nBefore creating an APPX file for Windows Store, you need to create a signing certificate in PFX format.  The CLI will prompt you to create one if you do not specify one in the command options.  Studio will prompt you to either create or select a PFX file.    </p>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-PackageforWindowsStorewithStudio\">\n        <h3 class=\"heading \"><span>Package for Windows Store with Studio</span></h3>\n    <p>\nTo package with Studio:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nSelect the project in the <strong class=\" \">Project Explorer</strong> view.    </p>\n</li><li class=\" \">    <p>\nIn the global tool bar, select <strong class=\" \">Package</strong> from the <strong class=\" \">Launch Mode </strong>drop-down list.    </p>\n</li><li class=\" \">    <p>\nSelect <strong class=\" \">Windows &gt; Windows Store</strong> from the <strong class=\" \">Target</strong> drop-down list.    </p>\n</li><li class=\" \">    <p>\nIf the <strong class=\" \">Launch Automatically</strong> option is enabled under the <strong class=\" \">Target</strong> drop-down list, the build process will automatically start.  If not, you need to click the <strong class=\" \">Launch</strong> button to start the build process.    </p>\n</li></ol>    <p>\n        <img src=\"images/download/attachments/43308729/PackageWindowsStore.png\" alt=\"images/download/attachments/43308729/PackageWindowsStore.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"500\"/>\n            </p>\n    <p>\nStudio will prompt you to enter a location to copy the generated APPX file to and to either create or specify a PFX file for signing the package.    </p>\n    <p>\nTo <u class=\" \">create</u> a new certificate, select <strong class=\" \">Create New</strong> and enter a password for the certificate.  During the certificate creation process, the Certificate Import wizard will be launched.  You will be prompted to enter the same password in subsequent dialogs. Click <strong class=\" \">OK</strong> or <strong class=\" \">Next</strong> when prompted.    </p>\n    <p>\nTo <u class=\" \">specify</u> a certificate to use, select <strong class=\" \">Use Existing</strong>, enter the location of the certificate and enter the password used to create the certificate.    </p>\n    <p>\n        <img src=\"images/download/attachments/43308729/WindowsStoreConfig.PNG\" alt=\"images/download/attachments/43308729/WindowsStoreConfig.PNG\" class=\"confluence-embedded-image\" width=\"500\"/>\n            </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-PackageforWindowsStorewiththeCLI\">\n        <h3 class=\"heading \"><span>Package for Windows Store with the CLI</span></h3>\n    <p>\nIf you need to generate a certificate, run the following CLI command:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">C:\\Users\\JoeUser\\Documents\\Appcelerator_Studio_Workspace\\WindowsApp&gt; appc run -p windows -T dist-winstore -O dist</code></div>\n<div class=\"line\"><code class=\"plain\">Appcelerator Command-Line Interface, version </code><code class=\"value\">4.1</code><code class=\"plain\">.</code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) </code><code class=\"value\">2014</code><code class=\"plain\">-</code><code class=\"value\">2015</code><code class=\"plain\">, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"plain\">Where is the pfx file used to sign the app? (leave blank to generate):</code></div>\n<div class=\"line\"><code class=\"plain\">What is (or will be) your PFX password?: ****</code></div>\n</div>\n</div>    <p>\nThe CLI will launch the Windows certificate tools in the background and prompt you to create a password for the certificate.    </p>\n    <p>\nYou will be prompted to enter the same password in subsequent dialogs and to generate some files. Click <strong class=\" \">OK</strong> or <strong class=\" \">Next</strong> when prompted. The CLI will generate three files in the project directory:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">generated.cer</tt>: public certificate    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">generated.pfx: </tt>PFX file for signing the package    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">generated.pkv</tt>: private key    </p>\n</li></ul>    <p>\nAfter the certificate is generated, the CLI will automatically create and sign the APPX file.    </p>\n    <p>\nTo package an APPX file for the Windows Store after you have generated the certificate, run:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">appc run -p windows -T dist-winstore -R &lt;PFX_CERTIFICATE_FILE&gt; -P &lt;PFX_PASSWORD&gt; -O &lt;OUTPUT_DIRECTORY&gt;</code></div>\n</div>\n</div>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"43308729_DistributingWindowsApplications-SubmitanApplication\">\n        <h2 class=\"heading \"><span>Submit an Application</span></h2>\n    <p>\nOnce you have created your APPX file(s), start the application submission process.    </p>\n    <p>\nIn the Windows Dev Center Dashboard:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nClick your application.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Submission</strong> in the left navigation.    </p>\n</li><li class=\" \">    <p>\nClick <strong class=\" \">Start your Submission</strong>.    </p>\n</li></ol>    <p>\nComplete the following fields in each category, then click <strong class=\" \">Submit to the Store</strong> to start the certification process.    </p>\n    <p>\nFor more information about the submission and certification process, see <a class=\"external-link external-link\" href=\"https://msdn.microsoft.com/en-us/library/windows/apps/hh694062.aspx\" target=\"_blank\">Windows Dev Center: App submissions</a>.    </p>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-Pricingandavailability\">\n        <h3 class=\"heading \"><span>Pricing and availability</span></h3>\n    <p>\nThe only required field is to select the price of your application.    </p>\n    <p>\nYou may optionally select or change the default values for which countries your application are available in, the application visibility in the store and when the application can be available in the store.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-Appproperties\">\n        <h3 class=\"heading \"><span>App properties</span></h3>\n    <p>\nYou are required to select a category and subcategory.    </p>\n    <p>\nYou may optionally select or change the defaults for the age range, game ratings, hardware requirements and app declaration.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-Packages\">\n        <h3 class=\"heading \"><span>Packages</span></h3>\n    <p>\nUpload your APPX file(s).  The APPX file(s) will be validated.  If you receive any validation errors, you may need to update the settings in your <tt class=\" \">tiapp.xml</tt> file.    </p>\n    <p>\nFor Windows Store app, you have the option of setting minimum system requirements    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43308729_DistributingWindowsApplications-Description\">\n        <h3 class=\"heading \"><span>Description</span></h3>\n    <p>\nYou are required to enter a description and upload one screenshot of your application.  All other fields are optional.    </p>\n    <p>\nThe following table describes the image assets you may upload with your application.  Only the screenshots are required for application submission.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDimensions (pixels)    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFile Type    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFile Size    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nNotes    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDesktop screenshot    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>\n1366 x 768 or larger    </p>\n</li><li class=\" \">    <p>\n768 x 1366 or larger    </p>\n</li></ul>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPNG    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&lt; 2MB    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMay submit up to 9    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMobile screenshot    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>\n768 x 1280    </p>\n</li><li class=\" \">    <p>\n720 x 1280    </p>\n</li><li class=\" \">    <p>\n480 x 800    </p>\n</li><li class=\" \">    <p>\n1280 x 768    </p>\n</li><li class=\" \">    <p>\n1280 x 720    </p>\n</li><li class=\" \">    <p>\n800 x 480    </p>\n</li></ul>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPNG    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&lt; 2 MB    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nMay submit up to 8    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nApp tile icon    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n300 x 300    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPNG    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFor Windows Phone 8.1 and earlier    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPromotional artwork    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\"bulleted-list text-caption \"><li class=\" \">    <p>\n358 x 173 (wide icon)    </p>\n</li><li class=\" \">    <p>\n358 x 358 (square icon)    </p>\n</li><li class=\" \">    <p>\n1000 x 800 (background image)    </p>\n</li><li class=\" \">    <p>\n414 x 180    </p>\n</li><li class=\" \">    <p>\n414 x 468    </p>\n</li><li class=\" \">    <p>\n558 x 558    </p>\n</li><li class=\" \">    <p>\n558 x 756    </p>\n</li><li class=\" \">    <p>\n846 x 468    </p>\n</li><li class=\" \">    <p>\n2400 x 1200 (recommended)    </p>\n</li></ul>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUsed to showcase your application in the store.    </p>\n    <p>\nMay submit only one image per file size.    </p>\n    <p>\nIt is highly recommended to submit a 2400 x 1200 image, which the Microsoft team will resize and crop for promotional layouts.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n    </p>\n    <p>\n    <span style=\"color: #2b4771;\">\nNotes for certification    </span>\n    </p>\n    <p>\nThis category is optional.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43308729\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Distributing Windows Applications"});