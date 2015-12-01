Ext.data.JsonP['Git_and_Github']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Git and Github</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004756\" class=\"content\">\n            <h1>Git and Github</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Git_and_Github-section-29004756_GitandGithub-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Git_and_Github-section-29004756_GitandGithub-LearningGitandGithub\">Learning Git and Github</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Git_and_Github-section-29004756_GitandGithub-GettingStartedwithGit\">Getting Started with Git</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Git_and_Github-section-29004756_GitandGithub-GitPrerequisites\">Git Prerequisites</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Git_and_Github-section-29004756_GitandGithub-SomeQuickGitTips\">Some Quick Git Tips</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Git_and_Github-section-29004756_GitandGithub-CommittingCodewithGitin7EasyStages\">Committing Code with Git in 7 Easy Stages</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"29004756_GitandGithub-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nAt Appcelerator we use <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/Git_(software)\" target=\"_blank\">Git</a> as our version control system. In addition, many of our open source projects, including the core SDKs, are hosted on <a class=\"external-link external-link\" href=\"http://github.com\" target=\"_blank\">Github</a>. For this reason, if you plan on contributing to Titanium, it's critical that you understand at least the basics of how Git and Github work.    </p>\n    <p>\nThe following sections give some references and tips for getting started with Git &amp; Github. With this knowledge you'll better understand how Appcelerator manages out many open source projects. Also, you'll have the opportunity to start integrating this powerful version control system into your own workflow.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"29004756_GitandGithub-LearningGitandGithub\">\n        <h2 class=\"heading \"><span>Learning Git and Github</span></h2>\n    <div class=\"section section-3 \" id=\"29004756_GitandGithub-GettingStartedwithGit\">\n        <h3 class=\"heading \"><span>Getting Started with Git</span></h3>\n    <p>\nGit can be a little daunting if you've never used it before, but most people soon learn to love it. The following resources will help you to get started:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://git-scm.com\" target=\"_blank\">Git Official Website</a>    </p>\n</li><li class=\" \">    <p>\nMichael Marner's <a class=\"external-link external-link\" href=\"http://www.youtube.com/user/MichaelMarner#p/u/9/HaSDIdNkCDQ\" target=\"_blank\">Git Tutorial</a> (video)    </p>\n</li><li class=\" \">    <p>\nGithub <a class=\"external-link external-link\" href=\"http://learn.github.com/p/intro.html\" target=\"_blank\">Introduction to Git</a> (video)    </p>\n</li><li class=\" \">    <p>\nLinus Torvalds' <a class=\"external-link external-link\" href=\"http://www.youtube.com/watch?v=4XpnKHJAok8\" target=\"_blank\">Git Tech Talk</a> (video)    </p>\n</li><li class=\" \">    <p>\nThe <a class=\"external-link external-link\" href=\"http://progit.org/book/\" target=\"_blank\">Pro Git Book</a>    </p>\n</li><li class=\" \">    <p>\nthe <tt class=\" \">git help</tt> command and the <a class=\"external-link external-link\" href=\"http://www.kernel.org/pub/software/scm/git/docs/\" target=\"_blank\">Git online manual</a>    </p>\n</li><li class=\" \">    <p>\nGithub <a class=\"external-link external-link\" href=\"http://gitref.org\" target=\"_blank\">Git Reference</a> (manual)    </p>\n</li><li class=\" \">    <p>\nthe Freenode IRC server's #git channel    </p>\n</li><li class=\" \">    <p>\nand <a class=\"external-link external-link\" href=\"http://www.google.com/search?hl=en&amp;q=git+version+control\" target=\"_blank\">many others</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"29004756_GitandGithub-GitPrerequisites\">\n        <h3 class=\"heading \"><span>Git Prerequisites</span></h3>\n    <p>\nBefore you start, you will need to work through these points:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nconfigure SSH, required for pushing branches to Github. See &quot;Generating SSH Keys&quot; for <a class=\"external-link external-link\" href=\"http://help.github.com/linux-key-setup/\" target=\"_blank\">Linux</a>, <a class=\"external-link external-link\" href=\"http://help.github.com/mac-key-setup/\" target=\"_blank\">Mac OS X</a> and <a class=\"external-link external-link\" href=\"http://help.github.com/msysgit-key-setup/\" target=\"_blank\">Windows</a>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"29004756_GitandGithub-SomeQuickGitTips\">\n        <h3 class=\"heading \"><span>Some Quick Git Tips</span></h3>\n    <p>\nThe following can make Git a little easier to use:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nuse <a class=\"external-link external-link\" href=\"http://gitk.sourceforge.net/development.html\" target=\"_blank\">gitk</a> to give a visual representation of your repository    </p>\n</li><li class=\" \">    <p>\nby default, if a file's permissions change, Git will perceive it just the same as if its contents were changed, Thus, to ignore permissions changes, run:    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">git config core.filemode </code><code class=\"keyword\">false</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004756_GitandGithub-CommittingCodewithGitin7EasyStages\">\n        <h3 class=\"heading \"><span>Committing Code with Git in 7 Easy Stages</span></h3>\n    <p>\nThe following diagram describes the full development cycle used to contribute code or documentation to an Appcelerator repository, using Git and Github.    </p>\n    <p>\n        <img src=\"images/download/attachments/27164686/contribute-workflow-v3.png\" alt=\"images/download/attachments/27164686/contribute-workflow-v3.png\" class=\"confluence-embedded-image confluence-external-resource\"/>\n            </p>\n    <p>\nDownload a hi-res version <a class=\"document-link unresolved\" href=\"#!/guide/Git_and_Github\">here</a>.    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004756\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Git and Github"});