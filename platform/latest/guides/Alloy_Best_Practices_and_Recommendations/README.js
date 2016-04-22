Ext.data.JsonP['Alloy_Best_Practices_and_Recommendations']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Alloy Best Practices and Recommendations</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"36735073\" class=\"content\">\n            <h1>Alloy Best Practices and Recommendations</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-Titanium-to-AlloyGuidance\">Titanium-to-Alloy Guidance</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-InmyTitaniumapplication,Ipreviouslyloadedlibrariesuponstartup.InorganizingmypatternswithMVC,doIneedtoorganizeapplicationfunctionalityfurtherundernamespaceswithincontrollers?\">In my Titanium application, I previously loaded libraries upon startup.  In organizing my patterns with MVC, do I need to organize application functionality further under namespaces within controllers?</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-Aretherebestpracticestoemploywithincontrollersforperformance?\">Are there best practices to employ within controllers for performance?</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-DoIsimplyloadcontrollerswithabunchofcallbacksthatrelatetotheviewandletAlloyhandlethelinkage?\">Do I simply load controllers with a bunch of callbacks that relate to the view and let Alloy handle the linkage?</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-IsthereabestpracticethatIshouldusetohelpoutAlloyformyownorganizationhere,asIdidinthestandardTitaniumapplications?\">Is there a best practice that I should use to help out Alloy for my own organization here, as I did in the standard Titanium applications?</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-CodingStyleBestPractices\">Coding Style Best Practices</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-NamingConventions\">Naming Conventions</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-GlobalVariables\">Global Variables</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Best_Practices_and_Recommendations-section-36735073_AlloyBestPracticesandRecommendations-GlobalEvents\">Global Events</a>    </p>\n</li></ul></li></ul>    <p>\nThis guide provides recommendations for writing Alloy applications.  This guide supplements the existing Titanium SDK <a class=\"document-link \" href=\"#!/guide/Best_Practices_and_Recommendations\">Best Practices and Recommendations</a> guide with a primary focus on the <a class=\"document-link \" href=\"#!/guide/Coding_Best_Practices\">Coding Best Practices</a> and <a class=\"document-link \" href=\"#!/guide/Style_and_Conventions\">Style and Conventions</a> pages.    </p>\n    <div class=\"section section-2 \" id=\"36735073_AlloyBestPracticesandRecommendations-Titanium-to-AlloyGuidance\">\n        <h2 class=\"heading \"><span>Titanium-to-Alloy Guidance</span></h2>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-InmyTitaniumapplication,Ipreviouslyloadedlibrariesuponstartup.InorganizingmypatternswithMVC,doIneedtoorganizeapplicationfunctionalityfurtherundernamespaceswithincontrollers?\">\n        <h3 class=\"heading \"><span>In my Titanium application, I previously loaded libraries upon startup.  In organizing my patterns with MVC, do I need to organize application functionality further under namespaces within controllers?</span></h3>\n    <p>\nNot unless you want to. If you have a pre-existing set of functionality that you want to make available globally throughout your app, there is no reason to further sub-categorize it unless it serves you in terms of organization or scalability. There is nothing preventing you from requiring your pre-existing modules in all your Alloy controllers, or even making a single global reference to your module that can be referenced throughout your app. For example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">apps/alloy.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Alloy.Globals.refToYourModule will be available in all controllers</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Globals.refToYourModule = require(</code><code class=\"string\">'yourModule'</code><code class=\"plain\">);</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-Aretherebestpracticestoemploywithincontrollersforperformance?\">\n        <h3 class=\"heading \"><span>Are there best practices to employ within controllers for performance?</span></h3>\n    <p>\nThe same best practices that apply to traditional Titanium development still apply in the world of Alloy. In fact, everything you can do in traditional Titanium development you can do in Alloy's controllers. Use the <a class=\"document-link \" href=\"#!/guide/Coding_Best_Practices\">Coding Best Practices</a> you learned with traditional Titanium development in Alloy. That said, the best trick you can use now is taking advantage of the compiler directives to speed up runtime performance. Refer to <a class=\"document-link \" href=\"#!/guide/Alloy_Controllers-section-34636384_AlloyControllers-ConditionalCode\">Alloy Controllers: Conditional Code</a>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-DoIsimplyloadcontrollerswithabunchofcallbacksthatrelatetotheviewandletAlloyhandlethelinkage?\">\n        <h3 class=\"heading \"><span>Do I simply load controllers with a bunch of callbacks that relate to the view and let Alloy handle the linkage?</span></h3>\n    <p>\nYou can do this, or you can use eventing between your controllers to handle this communication. The latter is preferred as it encourages loose coupling between you controllers. For a basic example of using controller eventing to communicate between controllers, refer to the master-detail Alloy test application: <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/tree/master/test/apps/advanced/master_detail\" target=\"_blank\">https://github.com/appcelerator/alloy/tree/master/test/apps/advanced/master_detail</a>    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-IsthereabestpracticethatIshouldusetohelpoutAlloyformyownorganizationhere,asIdidinthestandardTitaniumapplications?\">\n        <h3 class=\"heading \"><span>Is there a best practice that I should use to help out Alloy for my own organization here, as I did in the standard Titanium applications?</span></h3>\n    <p>\nIt depends on the size and depth of your existing organization. You need to determine if it makes sense to bend Alloy around your existing organization, or bend your existing organization around Alloy.  One of the driving forces behind Alloy was a need to standardize the many disparate Titanium coding methodologies out there. In doing so, your projects will be cleaner and more in line with best practices, but also give it a familiar feel and structure that makes it easier for other developers to help and contribute.    </p>\n    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"36735073_AlloyBestPracticesandRecommendations-CodingStyleBestPractices\">\n        <h2 class=\"heading \"><span>Coding Style Best Practices</span></h2>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-NamingConventions\">\n        <h3 class=\"heading \"><span>Naming Conventions</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nDo not use double underscore prefixes on variables, properties, or function names (e.g., <tt class=\" \">__foo</tt>). They are reserved for use in Alloy. If you use them, there is potential for conflicts and unexpected behavior.    </p>\n</li><li class=\" \">    <p>\nDo not use JavaScript reserved words as IDs.  For a complete list, see <a class=\"document-link \" href=\"#!/guide/Reserved_Words\">Reserved Words</a>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-GlobalVariables\">\n        <h3 class=\"heading \"><span>Global Variables</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nDo not declare global variables in app.js and use them in other files. Such usage is currently allowed but not recommended, and it will be deprecated in the future. Users who wish to use globals in Alloy applications can declare the following in their JS files:    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Alloy = require(</code><code class=\"string\">'alloy'</code><code class=\"plain\">), Backbone = require(</code><code class=\"string\">'alloy/backbone'</code><code class=\"plain\">), _ = require(</code><code class=\"string\">'alloy/underscore'</code><code class=\"plain\">)._;</code></div>\n</div>\n</div>    <p>\nAs an example:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (typeof Alloy === </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var Alloy = require(</code><code class=\"string\">'alloy'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (typeof Backbone === </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var Backbone = require(</code><code class=\"string\">'alloy/backbone'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"keyword\">if</code><code class=\"plain\"> (typeof _ === </code><code class=\"string\">'undefined'</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var _ = require(</code><code class=\"string\">'alloy/underscore'</code><code class=\"plain\">)._;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">var loading = Alloy.createWidget(</code><code class=\"string\">\"com.appcelerator.loading\"</code><code class=\"plain\">);</code></div>\n</div>\n</div>    <p>\n    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"36735073_AlloyBestPracticesandRecommendations-GlobalEvents\">\n        <h3 class=\"heading \"><span>Global Events</span></h3>\n    <p>\nAlthough you can use <tt class=\" \">Ti.App.fireEvent('name')</tt> to call an event declared as <tt class=\" \">Ti.App.addEventListener('name', functionAttached)</tt>, this is not recommended at all because this will cross the bridge between native and JavaScript lands, which involves some steps you will not be noticed about, but that bad managed can finish in memory leaks and, in any case, slower processes.    </p>\n    <p>\nInstead of that, you can use better approaches, depending on the problem you are addressing:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIf you have the classic problem communication between a master - child screens (you need that a child event triggers something in the parent), then use the callback approach: you can pass a function to be called as a callback when needed:    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">//master.js</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">function openChild() {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.createController(</code><code class=\"string\">'child'</code><code class=\"plain\">, {callback: refreshData});</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function refreshData(value) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// Do the refresh part of master here</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">//child.js</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">var args = arguments[</code><code class=\"value\">0</code><code class=\"plain\">] || {};</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">function refreshParent() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// You can pass here a return value to the parent</code></div>\n<div class=\"line\"><code class=\"plain\">\targs.callback(</code><code class=\"keyword\">true</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n</div>\n</div>    <p>\n    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIf you need to communicate between different parts of the app, then use the Backbone dispatcher approach: create a global object with Backbone capabilities. You can do either, declare it in a file and require it when needed or, more practical, create it in <tt class=\" \">alloy.js</tt> file to be available to all your project. Another advantage of use the Backbone approach is that you can cancel the events in any place because are global:    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">//alloy.js</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Events = _.clone(Backbone.Events);</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">//controller_a.js</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"comments\">// Prepare a \"listener\" to execute some work when called</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Events.on(</code><code class=\"string\">'updateMainUI'</code><code class=\"plain\">, refreshData);  </code><code class=\"comments\">// Instead of use Ti.App.addEventListener('updateMainUI', refreshData);</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">function refreshData(value) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// Do what you need here</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Maybe a \"onetime use\" event? you can deactivate it here by calling Alloy.Events.off('updateMainUI');</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// Remember to disable it when no needed (probably when you close your controller) to avoid memory leaking problems</code></div>\n<div class=\"line\"><code class=\"plain\">$.controller_a.addEventListener(</code><code class=\"string\">'close'</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.Events.off(</code><code class=\"string\">'updateMainUI'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"comments\">//controller_b.js</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n<div class=\"line\"><code class=\"comments\">// Call the \"listener\" to execute the work</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Events.trigger(</code><code class=\"string\">'updateMainUI'</code><code class=\"plain\">);  </code><code class=\"comments\">// Instead of use Ti.App.fireEvent('updateMainUI');</code></div>\n<div class=\"line\"><code class=\"plain\">...</code></div>\n</div>\n</div>    <p>\n    </p>\n    <p>\n<strong class=\" \">Note:</strong> in the first example, Alloy c    <span style=\"color: #2c2d30;\">\nontrollers are Backbone event dispatchers as well. So you could do also     </span>\n<tt class=\" \">Alloy.createController('child').on('refresh', refreshData) </tt>    <span style=\"color: #2c2d30;\">\nto get the same behavior of a callback approach but with Backbone approach, and then trigger the event when you need it.    </span>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=36735073\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Alloy Best Practices and Recommendations"});