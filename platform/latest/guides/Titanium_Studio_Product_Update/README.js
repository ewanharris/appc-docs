Ext.data.JsonP['Titanium_Studio_Product_Update']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Titanium Studio Product Update</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083164\" class=\"content\">\n            <h1>Titanium Studio Product Update</h1>\n    <div class=\"section section-2 \" id=\"30083164_TitaniumStudioProductUpdate-Actions\">\n        <h2 class=\"heading \"><span>Actions</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_Studio_Product_Update-section-30083164_TitaniumStudioProductUpdate-Requirements\">Requirements</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_Studio_Product_Update-section-30083164_TitaniumStudioProductUpdate-Description\">Description</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_Studio_Product_Update-section-30083164_TitaniumStudioProductUpdate-Invocation\">Invocation</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_Studio_Product_Update-section-30083164_TitaniumStudioProductUpdate-CheckingforTitaniumStudioupdates\">Checking for Titanium Studio updates</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Titanium_Studio_Product_Update-section-30083164_TitaniumStudioProductUpdate-InstallingaTitaniumStudioupdate\">Installing a Titanium Studio update</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083164_TitaniumStudioProductUpdate-Requirements\">\n        <h2 class=\"heading \"><span>Requirements</span></h2>\n    <p>\nThe examples in this page use the <strong class=\" \"><i class=\" \">Prototype</i></strong> library, which is included by default inside a portal. However, the same concepts may be applied using other implementations.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083164_TitaniumStudioProductUpdate-Description\">\n        <h2 class=\"heading \"><span>Description</span></h2>\n    <p>\nThis command checks for any updates available for the <strong class=\" \"><i class=\" \">Titanium Studio Product</i></strong>. When a <i class=\" \">dispatch</i> request for a check is made, the Studio will access the Titanium Studio update site and will check for any available updates. A post-check event will then be fired from the Studio. The event will old the information regarding any available update.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083164_TitaniumStudioProductUpdate-Invocation\">\n        <h2 class=\"heading \"><span>Invocation</span></h2>\n    <p>\nThis command is executed <strong class=\" \"><i class=\" \">asynchronously</i></strong>.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083164_TitaniumStudioProductUpdate-CheckingforTitaniumStudioupdates\">\n        <h2 class=\"heading \"><span>Checking for Titanium Studio updates</span></h2>\n    <p>\nThis is the <i class=\" \">dispatch</i> call for the check for updates.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">  controller : </code><code class=\"string\">'portal.titanium.studio.update'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  action : </code><code class=\"string\">\"checkForUpdate\"</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON());</code></div>\n</div>\n</div>    <p>\nWhen triggered, the Studio will perform the required checks and will later on send a notification to the portal by calling a JavaScript function <strong class=\" \"><i class=\" \">eventsDispatcher.notify()</i></strong> and passing an <strong class=\" \"><i class=\" \">event</i></strong> JSON into it.    </p>\n    <p>\nThe portal should handle this by defining an <strong class=\" \"><i class=\" \">eventsDispatcher</i></strong> object that has a <strong class=\" \"><i class=\" \">notify</i></strong> function that accepts an argument.<br/>For example (taken from the <i class=\" \">studio3-sdk</i> repository):    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var Events = {TITANIUM_STUDIO_UPDATE : </code><code class=\"string\">'studioUpdate'</code><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"comments\">// Creates the eventsDispatcher which contains the notify() function.</code></div>\n<div class=\"line\"><code class=\"comments\">// IMPORTANT! The Studio expects the observable to be called 'eventsDispatcher', and</code></div>\n<div class=\"line\"><code class=\"comments\">// expects the eventsDispatcher function to be called 'notify()'. Do not change these names.</code></div>\n<div class=\"line\"><code class=\"plain\">var eventsDispatcher = </code><code class=\"keyword\">new</code><code class=\"plain\"> Observable();</code></div>\n<div class=\"line\"><code class=\"preprocessor\">/**</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> * The Portal class</code></div>\n<div class=\"line\"><code class=\"preprocessor\"> */</code></div>\n<div class=\"line\"><code class=\"plain\">var Portal = Class.create({</code></div>\n<div class=\"line\"><code class=\"plain\">  initialize: function() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Create the UI parts and render them</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.updates = </code><code class=\"keyword\">new</code><code class=\"plain\"> Updates();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">this</code><code class=\"plain\">.updates .render();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Add a Mobile SDKs observer to the dispatcher. Render the Mobile SDK table on a 'mobileSDK' events.</code></div>\n<div class=\"line\"><code class=\"plain\">    eventsDispatcher.addObserver(Events.TITANIUM_STUDIO_UPDATE , function(e) { portal.tiStudioUpdates.update(e); });</code></div>\n<div class=\"line\"><code class=\"plain\">  }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nThe example above calls <i class=\" \">portal.tiStudioUpdates.update(e);</i> whenever the Studio fires a <i class=\" \">studioUpdate</i> event. The <i class=\" \">update</i> function than handles the event by reading the JSON content from it and re-render the UI.    </p>\n    <p>\nThe event that the Studio sends contains these fields:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nkey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\ncontent    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nevent.data.status    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nIndicate the status of the check. Can hold the following values: 'ok', 'processing', 'error', 'incomplete' or 'unknown'    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nevent.data.installedVersion    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe currently installed Titanium Studio version    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nevent.data.needsUpdate    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nA boolean indication that an update is available    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nevent.data.availableUpdateVersion    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nThe available update version for Titanium Studio (non-empty when <i class=\" \">'needsUpdate'</i> is <i class=\" \">'true'</i>)    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n<strong class=\" \"><i class=\" \">Note:</i></strong> When the <i class=\" \">event.data.installedVersion</i>, for example, is <i class=\" \">undefined</i>, the <i class=\" \">event.data.status</i> will indicate the stage of the command. The studio will fire multiple events after the dispatch call, and it's up to the JavaScript call to handle those and render the UI accordingly (for example, show a spinning wheel when the <i class=\" \">processing</i> status is received).<br/>The <strong class=\" \"><i class=\" \">studio3_sdk</i></strong> repository contains a complete example of handling these events and tunneling them to the UI (see <i class=\" \">updates.js</i>)    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083164_TitaniumStudioProductUpdate-InstallingaTitaniumStudioupdate\">\n        <h2 class=\"heading \"><span>Installing a Titanium Studio update</span></h2>\n    <p>\nWhen the Studio indicates that a Titanium Studio update is available, a displayed link can activate the <i class=\" \">action</i> to open the Studio's update dialog.<br/>Here is the <i class=\" \">dispatch</i> call that does that:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">dispatch($H({</code></div>\n<div class=\"line\"><code class=\"plain\">  controller : </code><code class=\"string\">'portal.titanium.studio.update'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">  action : </code><code class=\"string\">\"installUpdate\"</code></div>\n<div class=\"line\"><code class=\"plain\">}).toJSON());</code></div>\n</div>\n</div>    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083164\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Titanium Studio Product Update"});