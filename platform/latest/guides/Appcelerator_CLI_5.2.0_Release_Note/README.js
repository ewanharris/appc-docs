Ext.data.JsonP['Appcelerator_CLI_5.2.0_Release_Note']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Appcelerator CLI 5.2.0 Release Note</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"46245284\" class=\"content\">\n            <h1>Appcelerator CLI 5.2.0 Release Note</h1>\n    <div class=\"section section-2 \" id=\"46245284_AppceleratorCLI5.2.0ReleaseNote-AppceleratorCLI5.2.0-22February2016\">\n        <h2 class=\"heading \"><span>Appcelerator CLI 5.2.0 - 22 February 2016</span></h2>\n    <p>\nAppcelerator CLI 5.2.0 is a minor release that includes a few improvements and several bug fixes.    </p>\n    <div class=\"section section-3 \" id=\"46245284_AppceleratorCLI5.2.0ReleaseNote-ComponentVersions\">\n        <h3 class=\"heading \"><span>Component Versions</span></h3>\n    <p>\nThe following components are shipped with CLI 5.2.0:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nName    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nVersion    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAlloy    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n1.7.33    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n<strong class=\" \"><a class=\"document-link \" href=\"#!/guide/Arrow_Builder_Release_Notes\">Arrow Builder</a></strong>    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    <span style=\"color: #000000;\">\n<strong class=\" \">1.7.27</strong>    </span>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArrow Cloud CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n    <span style=\"color: #000000;\">\n1.1.0    </span>\n    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTitanium CLI    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n5.0.6    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"46245284_AppceleratorCLI5.2.0ReleaseNote-Improvements\">\n        <h3 class=\"heading \"><span>Improvements</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-746\" target=\"_blank\">CLI-746</a> - Add SPDX-compliant license string    </p>\n<ul class=\" \"><li class=\" \">    <p>\nUsers can now use the SPDX &quot;LicenseRef-LICENSE&quot; instead of &quot;Appcelerator Commercial&quot; in the package.json files to avoid the &quot;license should be a valid SPDX license expression&quot; warning.    </p>\n</li><li class=\" \">    <p>\nThe root also now includes a LICENSE.md file    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-852\" target=\"_blank\">CLI-852</a> - appc run can not set port for Arrow apps    </p>\n<ul class=\" \"><li class=\" \">    <p>\nYou can now set the port for Arrow apps by using this command: <tt class=\" \">appc run --port xxxx</tt>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-858\" target=\"_blank\">CLI-858</a> - Add timestamps to logging output    </p>\n<ul class=\" \"><li class=\" \">    <p>\nWhen using <tt class=\" \">-l trace</tt> or <tt class=\" \">-l debug</tt>, a timestamp is added to log levels of the output. For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"value\">2015</code><code class=\"plain\">-</code><code class=\"value\">10</code><code class=\"plain\">-29T08:</code><code class=\"value\">38</code><code class=\"plain\">:</code><code class=\"value\">48</code><code class=\"plain\">+</code><code class=\"value\">00</code><code class=\"plain\">:</code><code class=\"value\">00</code><code class=\"plain\"> | INFO   | Get the registry...</code></div>\n</div>\n</div></li></ul></li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-934\" target=\"_blank\">CLI-934</a> - Output warning message if appc-install is less than 4.2.3-2    </p>\n<ul class=\" \"><li class=\" \">    <p>\nAppc CLI 5.2.0 requires appc-install 4.2.3-2+ to work. If a lesser version is installed, users will see the following error message:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Appcelerator Command-Line Interface, version </code><code class=\"value\">5.2</code><code class=\"plain\">.</code><code class=\"value\">0</code><code class=\"plain\">-</code><code class=\"value\">249</code></div>\n<div class=\"line\"><code class=\"plain\">Copyright (c) </code><code class=\"value\">2014</code><code class=\"plain\">-</code><code class=\"value\">2016</code><code class=\"plain\">, Appcelerator, Inc.  All Rights Reserved.</code></div>\n<div class=\"line\"><code class=\"plain\">AppC CLI requires appcelerator</code><code class=\"color1\">@4</code><code class=\"plain\">.2.</code><code class=\"value\">3</code><code class=\"plain\"> or newer.</code></div>\n<div class=\"line\"><code class=\"plain\">To install the latest version: [sudo] npm install appcelerator -g</code></div>\n<div class=\"line\"><code class=\"plain\">....</code></div>\n</div>\n</div></li></ul></li></ul>    </div>\n    <div class=\"section section-3 \" id=\"46245284_AppceleratorCLI5.2.0ReleaseNote-FixedIssues\">\n        <h3 class=\"heading \"><span>Fixed Issues</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-778\" target=\"_blank\">CLI-778</a> - Update check from the appcelerator npm does not inform the user of available update    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-788\" target=\"_blank\">CLI-788</a> - &quot;use&quot; not listed in help    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-818\" target=\"_blank\">CLI-818</a> - If a login is required before switching orgs it shouldn't switch at all    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-827\" target=\"_blank\">CLI-827</a> - Only CLI 5.0.2 &amp; NodeJS 0.12.7 give: [Error: Module did not self-register.]    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-881\" target=\"_blank\">CLI-881</a> - If you create an Arrow project with European character sets, then the next prompt will be &quot;What is the api name?&quot;    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-882\" target=\"_blank\">CLI-882</a> - Cannot create an Arrow project with DEBUG=* and -l trace    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-885\" target=\"_blank\">CLI-885</a> - Appc new should be more cautious when unable to read Ti activeSDK value    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-893\" target=\"_blank\">CLI-893</a> - CLI fails to find core dependencies, incorrect location.    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-895\" target=\"_blank\">CLI-895</a> - CLI should not honor invalid url in proxy settings    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-918\" target=\"_blank\">CLI-918</a> - appc run doesn't recognize --project-dir    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-919\" target=\"_blank\">CLI-919</a> - Cannot create mobile project from Appc CLI    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-921\" target=\"_blank\">CLI-921</a>: Appc alloy -v returns error    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-922\" target=\"_blank\">CLI-922</a> - -d flag error on appc ti sdk install    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-925\" target=\"_blank\">CLI-925</a> - CLI flags are not being honored    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-926\" target=\"_blank\">CLI-926</a> - Error during arrow app publishing: unknown option `--username' with CLI 5.2.0-233    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-927\" target=\"_blank\">CLI-927</a> - When installing new SDK, the CLI Does not allow ctrl + c    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-935\" target=\"_blank\">CLI-935</a> - &quot;appc command random&quot; results command.opts is not a function error    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-936\" target=\"_blank\">CLI-936</a> - If you use &quot;-o json&quot;, then text is returned along with the JSON data    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://jira.appcelerator.org/browse/CLI-940\" target=\"_blank\">CLI-940</a> - iOS: Unable to package project. 'Undefined is not a function'    </p>\n</li></ul>    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=46245284\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Appcelerator CLI 5.2.0 Release Note"});