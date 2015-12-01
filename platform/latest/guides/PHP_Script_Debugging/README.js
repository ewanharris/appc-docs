Ext.data.JsonP['PHP_Script_Debugging']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PHP Script Debugging</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083032\" class=\"content\">\n            <h1>PHP Script Debugging</h1>\n    <div class=\"section section-2 \" id=\"30083032_PHPScriptDebugging-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/PHP_Script_Debugging-section-30083032_PHPScriptDebugging-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/PHP_Script_Debugging-section-30083032_PHPScriptDebugging-AttachingaPHPInterpreter\">Attaching a PHP Interpreter</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/PHP_Script_Debugging-section-30083032_PHPScriptDebugging-AttachingaPHPINI\">Attaching a PHP INI</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/PHP_Script_Debugging-section-30083032_PHPScriptDebugging-TheScriptDebugger\">The Script Debugger</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/PHP_Script_Debugging-section-30083032_PHPScriptDebugging-ScriptDebug/RunSessions\">Script Debug/Run Sessions</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083032_PHPScriptDebugging-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nThe Studio supports two types of PHP debugging:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nInternal debugging (e.g. Script debug without a server-side involvement).    </p>\n</li><li class=\" \">    <p>\nWeb Page debugging that uses a debugger extension (either Zend or XDebug) installed on a server.    </p>\n</li></ol>    <p>\nThis page will guide you through the setup process and the debugging process when a single script is debugged.<br/>The single-script mode is a quick way to debug through the functionality of a single PHP file. In case you are debugging a PHP application, you will find that a '<i class=\" \">Web Page</i>' debugging is the way to go.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083032_PHPScriptDebugging-AttachingaPHPInterpreter\">\n        <h2 class=\"heading \"><span>Attaching a PHP Interpreter</span></h2>\n    <p>\nA PHP Script debug session uses a local PHP interpreter and a debugger extension defined in its php.ini.<br/>In order to attach an interpreter:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen the Studio's <i class=\" \">Preferences</i> page and locate <i class=\" \">Aptana Studio -&gt; Editors -&gt; PHP -&gt; Debug -&gt; PHP Interpreters</i>.    </p>\n</li><li class=\" \">    <p>\nClick to add a new interpreter and browse for the PHP executable location on your disk.    </p>\n</li><li class=\" \">    <p>\nThe php.ini location is optional in that dialog, and when not specified, the system will look for one under the executable path.    </p>\n</li></ol>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/download/attachments/30083032/add-interpreter.png\" alt=\"images/download/attachments/30083032/add-interpreter.png\" class=\"confluence-embedded-image\"/>\n            </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <div class=\"section section-3 \" id=\"30083032_PHPScriptDebugging-AttachingaPHPINI\">\n        <h3 class=\"heading \"><span>Attaching a PHP INI</span></h3>\n    <p>\nWhen you attach a php.ini location to the interpreter settings, you will be able to perform some extension related actions:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAdd/remove an entry    </p>\n</li><li class=\" \">    <p>\nAdd/remove a section    </p>\n</li><li class=\" \">    <p>\nComment an entry    </p>\n</li><li class=\" \">    <p>\nValidate the settings    </p>\n</li></ul>    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \"/><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n        <img src=\"images/download/attachments/30083032/PhpIniEditor.jpg\" alt=\"images/download/attachments/30083032/PhpIniEditor.jpg\" class=\"confluence-embedded-image\"/>\n            </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n<i class=\" \">A little bit on the validation process:</i>    </p>\n    <p>\nWhen you hit the <i class=\" \">Validate</i> button, the PHP interpreter will try to execute with the current php.ini settings and collect the errors/warnings.    </p>\n    <p>\nThis validation can be used to determine which of the extensions triggered warnings, or even, triggered fatal errors and could not be loaded. At the end of the validation, question marks next to the extensions will be replaced with appropriate icons (Error, Warning or OK).    </p>\n    <p>\nHovering over the extension line displays the error/warning message that the PHP process outputted when it was validating.<br/>In general, any fatal extension should be commented out to allow the PHP process function currently.    </p>\n    <p>\n<strong class=\" \">Note:</strong> This process is no a &quot;100% bullet-proof&quot;, and in some cases where the PHP process fails to load a deeper investigation might be needed to determine the cause.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"30083032_PHPScriptDebugging-TheScriptDebugger\">\n        <h2 class=\"heading \"><span>The Script Debugger</span></h2>\n    <p>\nThe Studio debugger works with XDebug and ZendDebugger extensions. Both can be attached via the INI editor we described above.<br/>Once you have a PHP interpreter set up correctly, you can attach a debugger extension to the php.ini.    </p>\n<ol class=\" \"><li class=\" \">    <p>\nOpen the Studio preferences at <i class=\" \">Aptana Studio -&gt; Editors -&gt; PHP -&gt; Debug -&gt; PHP Interpreters</i>.    </p>\n</li><li class=\" \">    <p>\nClick to edit your previously defined PHP interpreter.    </p>\n</li><li class=\" \">    <p>\nSet the type of <i class=\" \">PHP Debugger</i> in the dialog dropdown. You can choose between XDebug and ZendDebugger.    </p>\n</li><li class=\" \">    <p>\nEdit the ini section to add your debugger extension by setting the extension name as <i class=\" \">zend_extension_ts</i> and the value as your debugger .dll or .so extension (Note that <i class=\" \">zend_extension</i> should be used for non-thread-safe extensions).    </p>\n</li><li class=\" \">    <p>\nClick to validate your PHP ini to see if the extension was loaded correctly.    </p>\n</li></ol>    <p>\nOnce it's all set-up, you are ready for a script <i class=\" \">Debug</i> (or <i class=\" \">Run</i>) session.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083032_PHPScriptDebugging-ScriptDebug/RunSessions\">\n        <h2 class=\"heading \"><span>Script Debug/Run Sessions</span></h2>\n    <p>\nA session can be initiated in a several different ways.    </p>\n    <p>\nOption 1:    </p>\n<ol class=\" \"><li class=\" \">    <p>\nRight click the editor area and select 'Debug As'-&gt;'PHP Script'.    </p>\n</li><li class=\" \">    <p>\nYou will be prompted to move to the debug perspective - Click yes.    </p>\n</li><li class=\" \">    <p>\nIn that perspective you will see the debug stack, variables and breakpoints views. You can also add more views, like the <i class=\" \">Expressions</i> view to track any Watch expressions you add.    </p>\n</li><li class=\" \">    <p>\nFrom here you can do a step into, step over and step return by clicking the buttons on the stack view or by using F5/F6/F7 keys.    </p>\n</li><li class=\" \">    <p>\nYou can set more breakpoints as you debug, or even run to a line that you mark (right-click + 'Run to line' action, or Ctrl+R).    </p>\n</li></ol>    <p>\nOption 2:<br/>Click <i class=\" \">Run</i> in the application menu bar, and then click <i class=\" \">Debug Configurations...</i>. Create a new <i class=\" \">PHP Script</i> debug configuration. Make sure that the selected debugger-type match the type that was set for the selected PHP executable, then launch the session.    </p>\n    <p>\nThe same applies to a <i class=\" \">Run</i> session, that only runs the script and output to the console.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083032\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"PHP Script Debugging"});