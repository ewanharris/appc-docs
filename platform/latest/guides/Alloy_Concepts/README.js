Ext.data.JsonP['Alloy_Concepts']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Concepts</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"34636240\" class=\"content\">\n            <h1>Alloy Concepts</h1>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Model-View-Controller\">Model-View-Controller</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Alloy:MVCwithBackbone\">Alloy: MVC with Backbone</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-AlloyandtheTitaniumSDK\">Alloy and the Titanium SDK</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-ConventionoverConfiguration\">Convention over Configuration</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Platform-SpecificResources\">Platform-Specific Resources</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Widgets\">Widgets</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Builtins\">Builtins</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-CompilationProcess\">Compilation Process</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nThis guide covers the important concepts related to the Alloy framework, including the model-view-controller framework, convention-over-configuration design, widgets, and built-in support from Backbone.js and Underscore.js.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-Model-View-Controller\">\n        <h2 class=\"heading \"><span>Model-View-Controller</span></h2>\n    <p>\nAlloy utilizes the model-view-controller (MVC) pattern, which separates the application into three different components:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">Models</strong> provide the business logic, containing the rules, data and state of the application.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Views</strong> provide the GUI components to the user, either presenting data or allowing the user to interact with the model data.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">Controllers</strong> provide the glue between the model and view components in the form of application logic.    </p>\n</li></ul>    <p>\nFor example, in a calendar application, the models include events, reminders, invitations and contacts. The views present the calendar data and reminders to the user or allow the user to add events. For reminders, the controller checks the model data and launches a 'reminder' view to the user. For adding events, the controller opens an 'add event' view, then adds the event into the model data once the user entered the data.    </p>\n    <p>\nAn advantage of MVC is the ability to reuse code by separating the functionality. For example, you can have specific views for different devices, while keeping the controller code relatively the same and the model data unchanged.    </p>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-Alloy:MVCwithBackbone\">\n        <h3 class=\"heading \"><span>Alloy: MVC with Backbone</span></h3>\n    <p>\nBackbone.js is a lightweight MVC framework, originally designed for web applications. Alloy models are built on top of Backbone.js, taking advantage of Backbone's rich Model and Collection APIs. You define models using a Javascript file that exports a special JSON object, which uses Backbone's extend functionality to customize models and collections. See <a class=\"document-link \" href=\"#!/guide/Alloy_Models\">Alloy Models</a> for more information on creating model objects and <a class=\"external-link external-link\" href=\"http://backbonejs.org/\" target=\"_blank\">http://backbonejs.org/</a> for more information on Backbone.js.    </p>\n    <p>\nAlloy views are built from Titanium UI components. You define views using XML markup and style them using Alloy <i class=\" \">Titanium Style Sheets (.tss)</i>, which abstracts the creation of these components without using Titanium API calls.  Alloy generates the code to create your views. See <a class=\"document-link \" href=\"#!/guide/Alloy_Views\">Alloy Views</a> for more information on creating views.    </p>\n    <p>\nAlloy controllers generally have a one-to-one relationship with Alloy views. Controllers directly use the Titanium SDK API without an abstraction layer.  The controller has access to all of the view components.  See <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers\">Alloy Controllers</a> for more information on creating controllers.    </p>\n    <p>\nAdditionally, Alloy provides built-in support for Underscore.js, which provides a set of utility functions, such as array and iterative helpers. Refer to <a class=\"external-link external-link\" href=\"http://underscorejs.org/\" target=\"_blank\">http://underscorejs.org/</a> for more information.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-AlloyandtheTitaniumSDK\">\n        <h2 class=\"heading \"><span>Alloy and the Titanium SDK</span></h2>\n    <p>\nAlloy uses Titanium SDK to abstracts the creation of UI components through the use of XML markup and style sheets.  If Alloy has not implemented a feature of the Titanium SDK or if the feature is not UI related, you can always use the Titanium SDK API in the Alloy controller code or create a CommonJS module to implement a feature.  The table below lists what Alloy directly abstracts from the Titanium SDK.    </p>\n    <p>\nFor assets, such as images, any references to the <tt class=\" \">Resources</tt> folder in the Titanium SDK documentation should be replaced with the <tt class=\" \">app/assets</tt> folder to use it for Alloy.  For example, the <a class=\"document-link \" href=\"#!/guide/Icons_and_Splash_Screens\">Icons and Splash Screens</a> guide tells you to place files in either the <tt class=\" \">Resources/android</tt> or <tt class=\" \">Resources/iphone</tt> folder.  For Alloy, the files should be placed in either the <tt class=\" \">app/assets/android</tt> or <tt class=\" \">app/assets/iphone</tt> folder.    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTitanium SDK Component    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAlloy Component    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTitanium.UI.* Objects<br/>Titanium.Android.Menu<br/>Titanium.Facebook.LoginButton<br/>Titanium.Map<br/>Titanium.Media.VideoPlayer    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Titanium.UI.createButton();</code></div>\n</div>\n</div>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>\nXML element. Remove the namespace. For some elements, you may need to assign the  <tt class=\" \">ns</tt>  attribute. For more information, refer to  <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-46248608_AlloyXMLMarkup-Namespace\">Alloy XML Markup: Namespace</a>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- Creates a button --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;Button /&gt;</code></div>\n</div>\n</div></li><li class=\" \">    <p>\nTSS element. Remove the namespace. If the object belongs to another namespace besides <tt class=\" \">Titanium.UI</tt> and is not implicitly assigned a namespace by Alloy, you cannot create a style based on the element name. Instead, create a style based on a selector (XML <tt class=\" \">class</tt> attribute) or id (XML <tt class=\" \">id</tt> attribute). For a list of objects that Alloy implicitly assigns a namespace, refer to  <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-46248608_AlloyXMLMarkup-Namespace\">Alloy XML Markup: Namespace</a>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Does not create a button.  Used to style all Button objects in the associated view.</code></div>\n<div class=\"line\"><code class=\"string\">\"Button\"</code><code class=\"plain\">:{</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Button attributes</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div></li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTitanium Object properties    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Titanium.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">    text: </code><code class=\"string\">\"Foobar\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    top: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    width: Ti.UI.SIZE</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n    <ul class=\" \"><li class=\" \">    <p>\nXML attribute if the property can be expressed as a string, number or Titanium SDK constant. Some properties that take Titanium objects can be expressed inline using XML tags. For more information, refer to <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-46248608_AlloyXMLMarkup-PropertyMapping\">Alloy XML Markup: Property Mapping</a>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Button title=</code><code class=\"string\">\"Foobar\"</code><code class=\"plain\"> top=</code><code class=\"string\">\"0\"</code><code class=\"plain\"> width=</code><code class=\"string\">\"Ti.UI.SIZE\"</code><code class=\"plain\">/&gt; </code></div>\n</div>\n</div></li><li class=\" \">    <p>\nTSS attribute if the property can be directly expressed as a string, number, Titanium SDK constant, dictionary or array. Indirectly, you can assign a method or value to the Alloy Globals or CFG namespace and reference it in the TSS file. For more information, refer to <a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes\">Alloy Styles and Themes</a>.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"string\">\"Button\"</code><code class=\"plain\">:{</code></div>\n<div class=\"line\"><code class=\"plain\">    title: </code><code class=\"string\">\"Foobar\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    top: </code><code class=\"value\">0</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    width: Ti.UI.SIZE</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div></li></ul>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTitanium Object methods    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var button = Titanium.UI.createButton();</code></div>\n<div class=\"line\"><code class=\"plain\">button.setTitle(</code><code class=\"string\">'Push Me!'</code><code class=\"plain\">);</code></div>\n</div>\n</div>            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUse in the controller code. You need to define the <tt class=\" \">id</tt> attribute of the object in the XML markup, so the object can be referenced in the controller.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Need to give the object an ID, for example, &lt;Button id=\"button\" /&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">$.button.setTitle(</code><code class=\"string\">'Push Me!'</code><code class=\"plain\">);</code></div>\n</div>\n</div>            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTitanium Object events    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var button = Titanium.UI.createButton();</code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">'click'</code><code class=\"plain\">, doClick);</code></div>\n</div>\n</div>    <p>\n        <img src=\"images/download/attachments/34636240/1pixel-wit.png\" alt=\"images/download/attachments/34636240/1pixel-wit.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\n    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nXML attribute to bind a callback in the associated controller. Capitalize the first character of the event name and append 'on' to the beginning of the name.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;!-- doClick needs to be declared in the associated controller --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;Button onClick=</code><code class=\"string\">\"doClick\"</code><code class=\"plain\">/&gt;</code></div>\n</div>\n</div>            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-ConventionoverConfiguration\">\n        <h2 class=\"heading \"><span>Convention over Configuration</span></h2>\n    <p>\nTo simplify development, Alloy uses a directory structure and naming conventions to organize the application rather than configuration files. Alloy expects to find files in specific locations. Any folder or file not adhering to the below naming conventions is ignored by Alloy. For example, at generation time, Alloy will look for the mandatory files <tt class=\" \">app/views/index.xml</tt> and <tt class=\" \">app/controllers/index.js</tt>, then the optional corresponding file <tt class=\" \">app/styles/index.tss</tt>.  Alloy requires these files to create the initial view-controller <tt class=\" \">Resources/&lt;platform&gt;/alloy/controllers/index.js</tt>.    </p>\n    <p>\nThe following is a list of directories and files that can be found in an Alloy project:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains the models, views, controllers and assets of the application. All work should be done here. See folder descriptions below.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/alloy.jmk</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBuild configuration file.<br/>See <a class=\"document-link \" href=\"#!/guide/Build_Configuration_File_(alloy.jmk)\">Build Configuration File (alloy.jmk)</a>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/alloy.js</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nInitializer file used to preconfigure components or override Alloy methods before the main controller is executed.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-InitializerFile(alloy.js)\">Initializer File (alloy.js)</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/config.json</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nProject configuration file.<br/>See <a class=\"document-link \" href=\"#!/guide/Project_Configuration_File_(config.json)\">Project Configuration File (config.json)</a>.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/assets</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains image assets and other files that need to be copied into the <tt class=\" \">Resources</tt> directory.<br/>Reference these files in the code without the 'app/assets' path and without the platform-specific folder if it is inside one.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/controllers</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains controllers in the format <tt class=\" \">filename.js</tt> to a corresponding view file <tt class=\" \">app/views/filename.xml</tt>.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers\">Alloy Controllers</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/i18n</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSince Alloy 1.8.0 and Titanium 5.2.0 <a class=\"document-link \" href=\"#!/guide/Internationalization\">Language Strings</a> are sourced from <tt class=\" \">app/i18n</tt> and Alloy will generate the <tt class=\" \">i18n</tt> folder in the project root.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/lib</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains application-specific library code, typically in the CommonJS format.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-LibraryCodeandCommonJSModules\">Library Code</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/migrations</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains database migration files in the format <tt class=\" \">&lt;DATETIME&gt;_filename.js</tt>.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Sync_Adapters_and_Migrations-section-36739597_AlloySyncAdaptersandMigrations-Migrations\">Migrations</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/models</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains model files in the format <tt class=\" \">filename.js</tt>.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Models\">Alloy Models</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/platform</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSince Alloy 1.8.0 platform resources are sourced from <tt class=\" \">app/platform</tt> and Alloy will generate the <tt class=\" \">platform</tt> folder in the project root.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/specs</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLike the <tt class=\" \">app/lib</tt> folder except it is only used if the deploy type is <strong class=\" \">not</strong> production (since <u class=\" \"> <strong class=\" \">Alloy 1.2.0</strong> </u>).<br/>See  <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-LibraryCodeandCommonJSModules\">Library Code</a>  for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/styles</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains view styling in the format <tt class=\" \">filename.tss</tt>, which is applied to a corresponding view file <tt class=\" \">app/views/filename.xml</tt>.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-35621526_AlloyStylesandThemes-TitaniumStyleSheets\">Titanium Style Sheets</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/themes</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains themes to customize the assets and styles of the entire GUI.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Styles_and_Themes-section-35621526_AlloyStylesandThemes-Themes\">Themes</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/views</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains views in the format <tt class=\" \">filename.xml</tt> with the optional corresponding files <tt class=\" \">app/controllers/filename.js</tt> and <tt class=\" \">app/styles/filename.tss</tt>.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup\">Alloy XML Markup</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">app/widgets</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains widget files. Each widget will have its own <tt class=\" \">app</tt>-like directory structure.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-Widgets\">Widgets</a> for more information.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">i18n</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSince Alloy 1.8.0 and Titanium 5.2.0  <a class=\"document-link \" href=\"#!/guide/Internationalization\">Language Strings</a>   are sourced from  <tt class=\" \">app/i18n</tt>  and Alloy will generate the  <tt class=\" \">i18n</tt>  folder in the project root. Before Alloy 1.8.0 and Titanium 5.2.0 you were expected to manage the  <tt class=\" \">i18n</tt>  folder in the project root, just like you do without Alloy.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<tt class=\" \">Resources</tt>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nContains the Titanium files generated by the Alloy interface from the <tt class=\" \">app</tt> directory. All files will be overwritten each time the application is built.<br/>Since <u class=\" \">Alloy 1.3.0</u>, Alloy creates a separate Titanium project for each platform you build for in the <tt class=\" \">Resources/&lt;platform&gt;</tt> folder.<br/>See <a class=\"document-link \" href=\"#!/guide/Alloy_Concepts-section-34636240_AlloyConcepts-CompilationProcess\">Compilation Process</a> for more information.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n<strong class=\" \">Notes:</strong> the <tt class=\" \">lib</tt>, <tt class=\" \">migrations</tt>, <tt class=\" \">themes</tt> and <tt class=\" \">widgets</tt> folders are not automatically generated when creating a new project. The <tt class=\" \">migrations</tt> and <tt class=\" \">widgets</tt> folder will be generated by the Alloy command-line interface if any of those components are generated. The <tt class=\" \">lib</tt> and <tt class=\" \">themes</tt> folders will need to be manually created.    </p>\n    <p>\nThe <tt class=\" \">alloy.jmk</tt> file is not automatically generated when creating a new project. Use the command-line interface to generate this file.    </p>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-Platform-SpecificResources\">\n        <h3 class=\"heading \"><span>Platform-Specific Resources</span></h3>\n    <p>\nControllers, views and styles can have platform-specific resources. Just add a folder named <tt class=\" \">android</tt>, <tt class=\" \">ios</tt>, <tt class=\" \">mobileweb</tt> or <tt class=\" \">windows</tt> under the component folder and add your platform-specific files for Android, iOS, Mobile Web or Windows Phone into the folder, respectively.    </p>\n    <p>\nFor example, an iOS-specific view and an Android-specific controller would be look like this:    </p>\n<ul class=\" \"><li class=\" \">    <p>\napp    </p>\n<ul class=\" \"><li class=\" \">    <p>\ncontrollers    </p>\n<ul class=\" \"><li class=\" \">    <p>\nandroid    </p>\n<ul class=\" \"><li class=\" \">    <p>\nindex.js    </p>\n</li></ul></li><li class=\" \">    <p>\nindex.js    </p>\n</li></ul></li><li class=\" \">    <p>\nviews    </p>\n<ul class=\" \"><li class=\" \">    <p>\nios    </p>\n<ul class=\" \"><li class=\" \">    <p>\nindex.xml    </p>\n</li></ul></li><li class=\" \">    <p>\nindex.xml    </p>\n</li></ul></li></ul></li></ul>    <p>\nAlternatively, you can use special conditional code and attributes inside the controllers, views and styles to apply platform-specific code and components. Refer to <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-ConditionalCode\">Controller Conditional Code</a> and <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-46248608_AlloyXMLMarkup-ConditionalCode\">View Conditional Code</a> for more details.    </p>\n    <p>\nAdditionally, the <tt class=\" \">assets</tt> folder is laid out the same way as the 'Resources' folder in a Titanium project for platform-specific files and density-specific images. Refer to <a class=\"document-link \" href=\"#!/guide/Supporting_Multiple_Platforms_in_a_Single_Codebase-section-29004890_SupportingMultiplePlatformsinaSingleCodebase-Platform-specificresources\">Platform-Specific Resources</a> for more information.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-Widgets\">\n        <h2 class=\"heading \"><span>Widgets</span></h2>\n    <p>\nWidgets are self-contained components that can be easily dropped into Alloy-powered Titanium projects. They were conceived as a way to reuse code in multiple applications or to be used multiple times in the same application. Widgets have their own models, views, controllers, styles and assets and are laid out the same as the <tt class=\" \">app</tt> directory in the Alloy project.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFor information on using widgets in a project, see <a class=\"document-link \" href=\"#!/guide/Alloy_XML_Markup-section-46248608_AlloyXMLMarkup-ImportingWidgets\">Importing Widgets</a>.    </p>\n</li><li class=\" \">    <p>\nFor information on creating widgets, see <a class=\"document-link \" href=\"#!/guide/Alloy_Widgets-section-35621514_AlloyWidgets-CreatingWidgets\">Creating Widgets</a>.    </p>\n</li><li class=\" \">    <p>\nTo search publicly available widgets, visit    <span style=\"color: #222222;\">\n     </span>\n <a class=\"external-link external-link\" href=\"http://gitt.io/\" target=\"_blank\">gitTio</a>     <span style=\"color: #222222;\">\n.    </span>\n    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-Builtins\">\n        <h2 class=\"heading \"><span>Builtins</span></h2>\n    <p>\nAlloy comes with additional utilities used to simplify certain functions, such as animations, string manipulation, and display unit conversion. These utilities are referred to as 'builtins.' To use these utilities, the controller needs to call <tt class=\" \">require</tt> with 'alloy' as the root directory. For example, to use an animation function to shake the current view by pressing the 'shake' button, add this code to a controller:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var animation = require(</code><code class=\"string\">'alloy/animation'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">$.shake.addEventListener(</code><code class=\"string\">'click'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tanimation.shake($.view);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nSee <a class=\"external-link external-link\" href=\"#!/api/Alloy.builtins\">Alloy builtins API documentation</a> for the functionality and usage of builtins.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"34636240_AlloyConcepts-CompilationProcess\">\n        <h2 class=\"heading \"><span>Compilation Process</span></h2>\n    <p>\nThis section provides a brief overview of how the Alloy command-line interface converts the files in the <tt class=\" \">app</tt> folder to a Titanium project in the <tt class=\" \">Resources/&lt;platform&gt;</tt> folder for each platform you build your project for.  <u class=\" \">Before Alloy 1.3.0</u>, Alloy creates only one Titanium project in the <tt class=\" \">Resources</tt> folder.    </p>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-Cleanup\">\n        <h3 class=\"heading \"><span>Cleanup</span></h3>\n    <p>\nThe <tt class=\" \">Resources</tt> folder is cleaned of any previous built files.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-BuildConfiguration\">\n        <h3 class=\"heading \"><span>Build Configuration</span></h3>\n    <p>\nIf the build configuration file, <tt class=\" \">alloy.jmk</tt>, exists, it is loaded.  The 'pre:load' task executes at this point if it is defined.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-AlloyFramework,AssetsandLib\">\n        <h3 class=\"heading \"><span>Alloy Framework, Assets and Lib</span></h3>\n    <p>\nAlloy framework files, which include the Backbone.js and Underscore.js libraries, sync adapters and base controller class, are copied to the <tt class=\" \">Resources/&lt;platform&gt;/alloy</tt> folder.  The Alloy base library, <tt class=\" \">alloy.js</tt>, is copied to the <tt class=\" \">Resources</tt> folder. These files are necessary to run any Alloy project.    </p>\n    <p>\nThe project configuration file, <tt class=\" \">config.json</tt>, is processed and copied to <tt class=\" \">Resources/&lt;platform&gt;/alloy/CFG.js</tt>.    </p>\n    <p>\nThe files in the <tt class=\" \">assets</tt> and <tt class=\" \">lib</tt> folders, as well as the files in the theme's assets folder, are copied to the <tt class=\" \">Resources</tt> folder.    </p>\n    <p>\nThe 'pre:compile' task executes at this point if it is defined.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-Model-View-ControllerandWidgetGeneration\">\n        <h3 class=\"heading \"><span>Model-View-Controller and Widget Generation</span></h3>\n    <p>\nThe model files are processed.  The compiler creates a JavaScript file per model and copies them to the <tt class=\" \">Resources/&lt;platform&gt;/alloy/models</tt> folder.    </p>\n    <p>\nThe widget files are processed.  The compiler creates a folder per widget that contains JavaScript files per view-controller and copies them to the <tt class=\" \">Resources/&lt;platform&gt;/alloy/widgets</tt> folder.    </p>\n    <p>\nThe style, view and controller files, as well as the files in the theme's style folder and the <tt class=\" \">app.tss</tt> global style file, are processed.  The compiler creates a JavaScript file per view-controller and copies them to the <tt class=\" \">Resources/&lt;platform&gt;/alloy/controllers</tt> folder.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-MainApplication\">\n        <h3 class=\"heading \"><span>Main Application</span></h3>\n    <p>\nAlloy creates a skeleton <tt class=\" \">app.js</tt> file from a template.  The contents of this file require some Alloy modules and calls the main view-controller <tt class=\" \">index.js</tt>.  If an initializer file, <tt class=\" \">alloy.js</tt>, exists, the entire contents of the file are copied into the <tt class=\" \">app.js</tt> file right before the call to initiate the main view-controller.    </p>\n    <p>\nBefore the file is written to the <tt class=\" \">Resources</tt> directory, the 'compile:app.js' task executes if one is defined in the build configuration file.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"34636240_AlloyConcepts-CodeOptimization\">\n        <h3 class=\"heading \"><span>Code Optimization</span></h3>\n    <p>\nThe generated code is processed through UglifyJS to optimize the code for speed and compactness.  The code is optionally beautified.    </p>\n    <p>\nIf the code is compiled for a specific platform, all conditional code that should not be executed for that platform is removed.  For example, if the application contains code sections specifically for iOS but the application is compiled for an Android platform, all of the iOS conditional code is removed.    </p>\n    <p>\nRequired Alloy builtin libraries are copied to the <tt class=\" \">Resources/&lt;platform&gt;/alloy</tt> folder and optimized in the same process as described before.    </p>\n    <p>\nThen, the 'post:compile' task executes if one is defined in the build configuration file.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=34636240\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Alloy Concepts"});