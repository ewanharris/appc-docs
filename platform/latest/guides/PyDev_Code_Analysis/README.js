Ext.data.JsonP['PyDev_Code_Analysis']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>PyDev Code Analysis</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083065\" class=\"content\">\n            <h1>PyDev Code Analysis</h1>\n    <div class=\"section section-2 \" id=\"30083065_PyDevCodeAnalysis-PyDevCodeAnalysis\">\n        <h2 class=\"heading \"><span>PyDev Code Analysis</span></h2>\n    <p>\nCode analysis provides error finding in python programs. It finds common errors such as undefined tokens, duplicated signatures and warns about things such as unused variables or unused imports.    </p>\n    <p>\n<strong class=\" \">PyDev</strong> can currently find:    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\nUndefined variables    </p>\n</li><li class=\" \">    <p>\nUndefined variable from import    </p>\n</li><li class=\" \">    <p>\nUnused variables    </p>\n</li><li class=\" \">    <p>\nUnused imports    </p>\n</li><li class=\" \">    <p>\nUnused wild imports    </p>\n</li><li class=\" \">    <p>\nDuplicated signatures    </p>\n</li><li class=\" \">    <p>\nImport redefinition    </p>\n</li><li class=\" \">    <p>\nUnresolved imports    </p>\n</li><li class=\" \">    <p>\nNo 'self' token declared in a class method    </p>\n</li><li class=\" \">    <p>\nMixing indentation with tabs and spaces    </p>\n</li><li class=\" \">    <p>\nBad indentation (incorrect number of spaces when indenting).    </p>\n</li></ul>    <p>\n<strong class=\" \">Advantages</strong> of the <strong class=\" \">PyDev Code Analysis</strong>    </p>\n<ul class=\"alternate \"><li class=\" \">    <p>\nIt can analyze your modules <strong class=\" \">while you are coding</strong>, and not just when you have the module saved in your disk.    </p>\n</li><li class=\" \">    <p>\nIt is <strong class=\" \">'very' fast</strong> when compared to current alternatives.    </p>\n</li></ul>    <p>\n<strong class=\" \">NOTE 1:</strong> You may still configure PyDev to analyze your code only when you save a file if you want.    </p>\n    <p>\n<strong class=\" \">NOTE 2:</strong> You have to disable PyLint manually if you don't want to use it anymore.    </p>\n    <p>\n<strong class=\" \">NOTE 3:</strong> If you want information on how to configure PyLint, you can check: <a class=\"document-link \" href=\"#!/guide/PyDev_PyLint\">PyDev PyLint</a>    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083065_PyDevCodeAnalysis-Configuringit\">\n        <h2 class=\"heading \"><span>Configuring it</span></h2>\n    <p>\nPyDev allows you to tweak-around the code analysis settings to suit your coding-style. To do that, go to: window &gt; preferences &gt; PyDev &gt; Code Analysis. The image below shows it...    </p>\n    <p>\n        <img src=\"images/pydev.org/images/codeanalysis/analysis_prefs.png\" alt=\"images/pydev.org/images/codeanalysis/analysis_prefs.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\nIts options should be self-explanatory, so, if you have some doubt, please drop a note in the PyDev forum.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083065_PyDevCodeAnalysis-Seeingtheoutput\">\n        <h2 class=\"heading \"><span>Seeing the output</span></h2>\n    <p>\nThe output is shown as error markers in the editor itself (you may hover over it to see the description).    </p>\n    <p>\n        <img src=\"images/pydev.org/images/codeanalysis/code_analysis1.png\" alt=\"images/pydev.org/images/codeanalysis/code_analysis1.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    <p>\nYou may also view the output in the 'problems view':    </p>\n    <p>\n        <img src=\"images/pydev.org/images/codeanalysis/code_analysis_problems.png\" alt=\"images/pydev.org/images/codeanalysis/code_analysis_problems.png\" class=\"confluence-embedded-image confluence-external-resource confluence-content-image-border\"/>\n            </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083065_PyDevCodeAnalysis-Importantnotestoeffectivelyusecode-analysis\">\n        <h2 class=\"heading \"><span>Important notes to effectively use code-analysis</span></h2>\n    <p>\n<strong class=\" \">IMPORTANT 1:</strong> The undefined variable errors produced are used as an input for a <a class=\"document-link \" href=\"#!/guide/PyDev_Content_Assistants\">content assistant</a> that allows you to fix it. Check the <a class=\"document-link \" href=\"#!/guide/PyDev_Content_Assistants\">PyDev Content Assistants</a> page for more information on that (it also explains how you can give 'notes' to the code analysis so that it ignores some error or warning).    </p>\n    <p>\n<strong class=\" \">IMPORTANT 2:</strong> You are advised to leave the 'auto-build' turned on (in the menu: <strong class=\" \">project &gt; build automatically</strong>). If you however want to leave it off, you have to remember to make a build when you want your changes analyzed.    </p>\n    <p>\n<strong class=\" \">IMPORTANT 3:</strong> When you change the interpreter or change your pythonpath, your files are not automatically analyzed. If you want them analyzed after that, you have to manually do a 'clear' on the projects you want analyzed (in the menu: <strong class=\" \">project &gt; clean...</strong>).    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083065_PyDevCodeAnalysis-Passinginfotocode-analysis\">\n        <h2 class=\"heading \"><span>Passing info to code-analysis</span></h2>\n    <p>\nCurrently code-analysis does lots of analysis so that invalid signs are not raised, but some signs are nearly impossible to detect when doing static analysis, so, in some cases some flags may be added to the code to give more info to the code-analysis and make it behave better.    </p>\n    <p>\nCurrently, the supported flags are:    </p>\n    <p>\n<strong class=\" \">Flag: @DynamicAttrs</strong><br/><strong class=\" \">Location:</strong> Should be added anywhere within a class docstring<br/><strong class=\" \">Description:</strong> Used to indicate that a class has dynamic attributes (so, code analysis won't complain about undefined variables when accessing any attribute from that class.    </p>\n    <p>\n<strong class=\" \">Example:</strong>    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">class</code><code class=\"plain\"> Struct:</code></div>\n<div class=\"line\"><code class=\"plain\">    '''Attributes passed </code><code class=\"keyword\">in</code><code class=\"plain\"> constructor.</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">*</code><code class=\"plain\">@DynamicAttrs</code><code class=\"keyword\">*</code></div>\n<div class=\"line\"><code class=\"plain\">    '''</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">def</code><code class=\"plain\"> __init__(</code><code class=\"color1\">self</code><code class=\"plain\">, </code><code class=\"keyword\">*</code><code class=\"plain\">entries):</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"color1\">self</code><code class=\"plain\">.__dict__.update(entries)</code></div>\n</div>\n</div>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083065\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"PyDev Code Analysis"});