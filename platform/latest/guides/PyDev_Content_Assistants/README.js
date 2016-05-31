Ext.data.JsonP['PyDev_Content_Assistants']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Content Assistants</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083064\" class=\"content\">\n            <h1>PyDev Content Assistants</h1>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-ContentAssistants\">\n        <h2 class=\"heading \"><span>Content Assistants</span></h2>\n    <p>\nSome content assistants to make your life easier...    </p>\n    <p>\nThey are ALL activated through <strong class=\" \">Ctrl+1</strong>, but which one(s) will show depend on the context it is activated.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Contentassistants\">\n        <h2 class=\"heading \"><span>Content assistants</span></h2>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Makeimportforundefinedtoken/Ignoreerror\">\n        <h2 class=\"heading \"><span>Make import for undefined token / Ignore error</span></h2>\n    <p>\nLet's say that you have the code below, and that the code-analysis has just seen that the 'xmlreader' token was undefined (this is important, as we cannot make this analysis before the token was generated). In this case, we have 2 options offered, one to fix that importing the token and another one saying that PyDev should ignore that error. The example below shows it in action:    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_fix_import1.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_fix_import1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\nIf we let the cursor at the undefined token line and press Ctrl+1, we get:    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_fix_import2.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_fix_import2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong> choosing the second import we have:    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_fix_import3.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_fix_import3.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\nNow, if we had chosen the third option (<strong class=\" \">@UndefinedVariable</strong>), a note would have been entered in the code, to warn PyDev to ignore that error, as pointed below...    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_ignoreerror.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_ignoreerror.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Don'tanalyzemodule\">\n        <h2 class=\"heading \"><span>Don't analyze module</span></h2>\n    <p>\nPyDev can accept a 'note' to warn it not to make code-analysis at all in some module. In order to do that' you can go to the first line of the module and press 'Ctrl+1' and choose the <strong class=\" \">@PydevCodeAnalysisIgnore</strong> flag. Doing that will add a note in the code to warn that this module should not be analyzed by PyDev.    </p>\n    <p>\nIf you use automatically generated files, it might be useful to put that warning on those files, as it would not be useful to analyze those files. The example below shows the result of this action.    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong> choosing choosing it, we have:    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule2.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_ignoremodule2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Moveimporttoglobalscope\">\n        <h2 class=\"heading \"><span>Move import to global scope</span></h2>\n    <p>\n<strong class=\" \">Before</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_import.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_import.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_import.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_import.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Createdocstring\">\n        <h2 class=\"heading \"><span>Create docstring</span></h2>\n    <p>\n*NOTE:*Must be called in the 'def' line.    </p>\n    <p>\n<strong class=\" \">Before</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_docstring.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_docstring.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_docstring.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_docstring.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Assignresulttonewlocalvariable(orfield)\">\n        <h2 class=\"heading \"><span>Assign result to new local variable (or field)</span></h2>\n    <p>\n<strong class=\" \">Before</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_assign.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_assign.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_assign.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_assign.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Assignparameterstoattributes\">\n        <h2 class=\"heading \"><span>Assign parameters to attributes</span></h2>\n    <p>\n<strong class=\" \">Before</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs2.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_assign_to_attribs2.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083064_PyDevContentAssistants-Surroundcodewithtry..exceptortry..finally\">\n        <h2 class=\"heading \"><span>Surround code with try..except or try..finally</span></h2>\n    <p>\n*NOTE:*Must have some code selected    </p>\n    <p>\n<strong class=\" \">Before</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_make_try_except.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_make_try_except.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\n<strong class=\" \">After</strong>    </p>\n    <p>\n        <img src=\"images/pydev.org/images/contentassist/ctrl_1_compl_try_except.png\" alt=\"images/pydev.org/images/contentassist/ctrl_1_compl_try_except.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083064\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"PyDev Content Assistants"});