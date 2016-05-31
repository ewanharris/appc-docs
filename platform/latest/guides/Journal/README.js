Ext.data.JsonP['Journal']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Journal</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845717\" class=\"content\">\n            <h1>Journal</h1>\n    <p>\nDemonstrates how to create a simple personal journal application using models and collections.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n        \n    <p>\nalloy/test/apps/<strong class=\" \">models/journal</strong>    </p>\n    </div>\n    \n        <img src=\"images/download/attachments/41845717/add_entry.png\" alt=\"images/download/attachments/41845717/add_entry.png\" class=\"confluence-embedded-image\" width=\"400\"/>\n            <p>\nThe application's model file (journal.js) defines the fields for each journal entry: title, text, mood (happy, angry, or neutral), and creation date.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/models/journal.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"columns\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"title\"</code><code class=\"plain\">:</code><code class=\"string\">\"TEXT\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"text\"</code><code class=\"plain\">:</code><code class=\"string\">\"TEXT\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"mood\"</code><code class=\"plain\">:</code><code class=\"string\">\"TEXT\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"dateCreated\"</code><code class=\"plain\">:</code><code class=\"string\">\"TEXT\"</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"adapter\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"type\"</code><code class=\"plain\">: </code><code class=\"string\">\"sql\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"collection_name\"</code><code class=\"plain\">: </code><code class=\"string\">\"journal\"</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <p>\nThe samples uses the Alloy convention to define unique views for iOS, Android and MobileWeb.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Application view structure</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">app/views/</code></div>\n<div class=\"line\"><code class=\"plain\">├──android</code></div>\n<div class=\"line\"><code class=\"plain\">│   └──index.xml</code></div>\n<div class=\"line\"><code class=\"plain\">├──ios</code></div>\n<div class=\"line\"><code class=\"plain\">│   └──index.xml</code></div>\n<div class=\"line\"><code class=\"plain\">└──mobileweb</code></div>\n<div class=\"line\"><code class=\"plain\">    └──index.xml</code></div>\n</div>\n</div>    <p>\nEach view, like app/views/android/index.xml shown below, creates a global reference to the <tt class=\" \">journal</tt> collection, which is assigned to a <tt class=\" \">ScrollView</tt> element's <tt class=\" \">dataCollection</tt> attribute.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/views/android/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- create a global reference to the journal collection --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Collection src=</code><code class=\"string\">\"journal\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Menu&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;MenuItem onClick=</code><code class=\"string\">\"addEntry\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"add entry\"</code><code class=\"plain\"> icon=</code><code class=\"string\">\"ic_menu_add.png\"</code><code class=\"plain\">&gt;&lt;/MenuItem&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Menu&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">\"titlebar\"</code><code class=\"plain\">&gt;Journal&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;ScrollView id=</code><code class=\"string\">\"scroll\"</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">\"journal\"</code><code class=\"plain\"> dataTransform=</code><code class=\"string\">\"doTransform\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Require src=</code><code class=\"string\">\"entry\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/ScrollView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe <tt class=\" \">ScrollView</tt> element also specifies a <tt class=\" \">dataTransform</tt> function to transform each model in the collection for display. The specified function, <tt class=\" \">doTransform()</tt>, does the following:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nTransforms the <tt class=\" \">mood</tt> value ('mad', 'happy', 'neutral') into a corresponding <tt class=\" \">moodColor</tt>. This color is applied to the <tt class=\" \">borderColor</tt> attribute of each View item in the ScrollView.    </p>\n</li><li class=\" \">    <p>\nUses the built-in moment.js library's <a class=\"external-link external-link\" href=\"http://momentjs.com/docs/#/displaying/fromnow/\" target=\"_blank\">fromNow()</a> method to transform the entry's <tt class=\" \">dateCreated</tt> value into <tt class=\" \">dateSince</tt>.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/index.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Require built-in moment.js library for working with dates/times.</code></div>\n<div class=\"line\"><code class=\"plain\">var moment = require(</code><code class=\"string\">'alloy/moment'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">function doTransform(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var transform = model.toJSON();</code></div>\n<div class=\"line\"><code class=\"plain\">    transform.dateSince = moment(transform.dateCreated,</code><code class=\"string\">'YYYYMMDDHHmmss'</code><code class=\"plain\">).fromNow();</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">switch</code><code class=\"plain\">(transform.mood) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"string\">'mad'</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">            transform.moodColor = </code><code class=\"string\">'#a00'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"string\">'happy'</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">            transform.moodColor = </code><code class=\"string\">'#0a0'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">case</code><code class=\"plain\"> </code><code class=\"string\">'neutral'</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">default</code><code class=\"plain\">:</code></div>\n<div class=\"line\"><code class=\"plain\">            transform.moodColor = </code><code class=\"string\">'#88f'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">break</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> transform;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function addEntry() {</code></div>\n<div class=\"line\"><code class=\"plain\">    Alloy.createController(</code><code class=\"string\">'add'</code><code class=\"plain\">).getView().open();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.journal.comparator = function(entry1, entry2) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> entry1.get(</code><code class=\"string\">'dateCreated'</code><code class=\"plain\">) &gt; entry2.get(</code><code class=\"string\">'dateCreated'</code><code class=\"plain\">) ? -</code><code class=\"value\">1</code><code class=\"plain\"> : </code><code class=\"value\">1</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n<div class=\"line\"><code class=\"plain\">Alloy.Collections.journal.fetch();</code></div>\n</div>\n</div>    <p>\nA Backbone <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Collection-comparator\" target=\"_blank\">comparator</a> sorts the items according to their <tt class=\" \">dateCreated</tt> fields. Lastly, each <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/alloy/blob/master/test/apps/models/journal/views/entry.xml\" target=\"_blank\">entry</a> displayed by the ScrollView is a View element that binds the transformed fields to the <tt class=\" \">text</tt> properties of Labels and the <tt class=\" \">borderColor</tt> of the View.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">views/entry.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;View id=</code><code class=\"string\">\"container\"</code><code class=\"plain\"> borderColor=</code><code class=\"string\">\"{moodColor}\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">\"title\"</code><code class=\"plain\"> text=</code><code class=\"string\">\"{title}\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">\"text\"</code><code class=\"plain\"> text=</code><code class=\"string\">\"{text}\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Label id=</code><code class=\"string\">\"date\"</code><code class=\"plain\"> text=</code><code class=\"string\">\"{dateSince}\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe addEntry() function, defined by the add.js controller shown below, creates a new Journal model object, adds it to the global <tt class=\" \">journal</tt> collection object, and persists it to the SQL database.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function addEntry() {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// create a new model instance based on user input</code></div>\n<div class=\"line\"><code class=\"plain\">    var entry = Alloy.createModel(</code><code class=\"string\">'journal'</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">        title : $.title.value,</code></div>\n<div class=\"line\"><code class=\"plain\">        text: $.text.value,</code></div>\n<div class=\"line\"><code class=\"plain\">        mood: getMood($.mood),</code></div>\n<div class=\"line\"><code class=\"plain\">        dateCreated: moment().format(</code><code class=\"string\">'YYYYMMDDHHmmss'</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Add new model to the collection, use silent=true</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// so that a \"change\" event is not fired and the</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// UI is re-rendered.</code></div>\n<div class=\"line\"><code class=\"plain\">    journal.add(entry, {silent:</code><code class=\"keyword\">true</code><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Save the entry to persistence, which will re-render</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// the UI based on the binding.</code></div>\n<div class=\"line\"><code class=\"plain\">    entry.save();</code></div>\n<div class=\"line\"><code class=\"plain\">    closeWindow();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845717_Journal-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link \" href=\"https://wiki.appcelerator.org/display/guides2/New+-+Alloy+Collection+and+Model+Objects\">Alloy Collection and Model Objects</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Alloy_Data_Binding\">Alloy Data Binding</a>    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845717\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Journal"});