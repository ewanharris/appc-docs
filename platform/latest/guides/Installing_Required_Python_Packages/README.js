Ext.data.JsonP['Installing_Required_Python_Packages']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Installing Required Python Packages</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004876\" class=\"content\">\n            <h1>Installing Required Python Packages</h1>\n    <div class=\"section section-2 \" id=\"29004876_InstallingRequiredPythonPackages-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\n    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-CompatibilityandDownload\">Compatibility and Download</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-Installation\">Installation</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-OSX\">OS X</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-Windows\">Windows</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-UsingEasyInstalltoInstallPackages\">Using EasyInstall to Install Packages</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-PyCrypto\">PyCrypto</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-pyOpenSSL\">pyOpenSSL</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-PyYAML\">PyYAML</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-Pygments\">Pygments</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-Markdown\">Markdown</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"29004876_InstallingRequiredPythonPackages-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nPython's setuptools is a third-party library that enhances the default Python distribution utilities (<tt class=\" \">distutil</tt>). One of its components is the <a class=\"external-link external-link\" href=\"http://en.wikipedia.org/wiki/EasyInstall\" target=\"_blank\">EasyInstall</a> (<tt class=\" \">easy_install</tt>) package manager, which is used to install a number of prerequisite libraries for compiling Titanium's SDK and API Docs.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"29004876_InstallingRequiredPythonPackages-CompatibilityandDownload\">\n        <h2 class=\"heading \"><span>Compatibility and Download</span></h2>\n    <p>\nPython's <tt class=\" \">setuptools</tt> can be installed from the following locations:    </p>\n    <p>\n        <img src=\"images/download/attachments/29004836/download_05.png\" alt=\"images/download/attachments/29004836/download_05.png\" class=\"confluence-embedded-image image-center\" width=\"64\"/>\n            </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOperating System    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPackage Architecture Version    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDownload Location    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOS X    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest version compatible with installed Python version    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n32-bit and 64-bit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nInstalled on OS by default    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWindows    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest version compatible with installed Python version    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n32-bit <strong class=\" \">only</strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<a class=\"external-link external-link\" href=\"http://pypi.python.org/pypi/setuptools#downloads\" target=\"_blank\">Official setuptools Website </a>    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUbuntu    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLatest version compatible with installed Python version    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n32-bit and 64-bit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault Repositories    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004876_InstallingRequiredPythonPackages-Installation\">\n        <h2 class=\"heading \"><span>Installation</span></h2>\n    <p>\nBefore attempting to install <i class=\" \">setuptools</i>, ensure that you have followed the <a class=\"document-link \" href=\"#!/guide/Installing_Python\">Installing Python</a> guide.    </p>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-OSX\">\n        <h3 class=\"heading \"><span>OS X</span></h3>\n    <p>\nNote that the typical filesystem location of this software can be found in the <a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-29004844_SoftwareLocationsandEnvironmentVariables-OSXSoftwareLocations\">OS X Software Locations</a> section of these guides.    </p>\n    <p>\nOS X ships with <i class=\" \">setuptools</i> installed by default. Hence, simply follow the steps in the <a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-UsingEasyInstalltoInstallPackages\">Using EasyInstall to Install Packages</a> section    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-Windows\">\n        <h3 class=\"heading \"><span>Windows</span></h3>\n    <p>\nNote that the typical filesystem location of this software can be found in the <a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables-section-29004844_SoftwareLocationsandEnvironmentVariables-WindowsSoftwareLocations\">Windows Software Locations</a> section of these guides.    </p>\n    <p>\nTo install <i class=\" \">setuptools</i>:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nFollow the official <a class=\"external-link external-link\" href=\"http://pypi.python.org/pypi/setuptools\" target=\"_blank\">Installation Instructions</a>.    </p>\n</li><li class=\" \">    <p>\nVerify that <tt class=\" \">path/to/easy_install</tt> is in the system <tt class=\" \">PATH</tt>, by following the <a class=\"document-link \" href=\"#!/guide/Software_Locations_and_Environment_Variables\">Software Locations and Environment Variables</a> guide.    </p>\n</li><li class=\" \">    <p>\nFollow the steps in the <a class=\"document-link \" href=\"#!/guide/Installing_Required_Python_Packages-section-29004876_InstallingRequiredPythonPackages-UsingEasyInstalltoInstallPackages\">Using EasyInstall to Install Packages</a> section.    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004876_InstallingRequiredPythonPackages-UsingEasyInstalltoInstallPackages\">\n        <h2 class=\"heading \"><span>Using EasyInstall to Install Packages</span></h2>\n    <p>\nThe following Python libraries are necessary for compiling Titanium's SDK and API Docs. Install them using the supplied commands.  On Mac OS X, prefix the commands with <tt class=\" \">sudo</tt>.    </p>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-PyCrypto\">\n        <h3 class=\"heading \"><span>PyCrypto</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">easy_install pycrypto</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-pyOpenSSL\">\n        <h3 class=\"heading \"><span>pyOpenSSL</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">easy_install pyopenssl</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-PyYAML\">\n        <h3 class=\"heading \"><span>PyYAML</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">easy_install pyyaml</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-Pygments\">\n        <h3 class=\"heading \"><span>Pygments</span></h3>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">easy_install Pygments</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004876_InstallingRequiredPythonPackages-Markdown\">\n        <h3 class=\"heading \"><span>Markdown</span></h3>\n    <p>\nMarkdown is required for building module documentation when packaging a Titanium module.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">easy_install markdown</code></div>\n</div>\n</div>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004876\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Installing Required Python Packages"});