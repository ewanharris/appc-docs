Ext.data.JsonP['Properties_Sync_Adaptor']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Properties Sync Adaptor</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845721\" class=\"content\">\n            <h1>Properties Sync Adaptor</h1>\n    <p>\nDemonstrates using Alloy's Titanium.App.Properties sync adaptor to save data.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n        \n    <p>\nalloy/test/apps/<strong class=\" \">models/properties</strong>    </p>\n    </div>\n    \n    <p>\nThe sample presents two tabs: Model and Collection. The modelTab.xml view provides buttons to create or destroy an instance of a model, and increment one a numeric model fields. The Collection tab provides UI to add items to a collection, which is bound to a TableView. Clicking a table row updates a field in the corresponding collection item. Long-pressing a table row deletes the corresponding item from the collection.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845721/propertie_sync.png\" alt=\"images/download/attachments/41845721/propertie_sync.png\" class=\"confluence-embedded-image\"/>\n            </p>\n    <p>\nThe application includes two model configuration files, one used by each tab view. Note that the adaptor type in each configuration file is set to &quot;properties&quot;.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/models/modelTab.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"columns\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"id\"</code><code class=\"plain\">: </code><code class=\"string\">\"String\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"count\"</code><code class=\"plain\">: </code><code class=\"string\">\"Int\"</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"defaults\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"id\"</code><code class=\"plain\">: </code><code class=\"string\">\"foobar\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"count\"</code><code class=\"plain\">: </code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"adapter\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"type\"</code><code class=\"plain\">: </code><code class=\"string\">\"properties\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"collection_name\"</code><code class=\"plain\">: </code><code class=\"string\">\"singleModel\"</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/models/collectionTab.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"columns\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"name\"</code><code class=\"plain\">: </code><code class=\"string\">\"String\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"score\"</code><code class=\"plain\">: </code><code class=\"string\">\"Int\"</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"defaults\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"name\"</code><code class=\"plain\">: </code><code class=\"string\">\"&lt;no name&gt;\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"score\"</code><code class=\"plain\">: </code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"adapter\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"type\"</code><code class=\"plain\">: </code><code class=\"string\">\"properties\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"collection_name\"</code><code class=\"plain\">: </code><code class=\"string\">\"collection\"</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <p>\nThe modelTab.js view-controller creates an instance of the <strong class=\" \">modelTab</strong> model, and binds a callback function to the <tt class=\" \">change</tt> event on the <tt class=\" \">count</tt> field, which updates the label in the corresponding view with a JSON representation of the model's <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Model-attributes\" target=\"_blank\">attributes</a>. The same handler responds to model <tt class=\" \">fetch</tt> events. It also defined event handlers for the Create, Destroy, and Increment buttons defined the app/views/modelTab.xml file (not shown).    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/modelTab.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var ID = </code><code class=\"string\">'instance'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">var app = Alloy.createModel(</code><code class=\"string\">'modelTab'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"comments\">// Change label when 'count' changes on model</code></div>\n<div class=\"line\"><code class=\"plain\">app.on(</code><code class=\"string\">'fetch change:count'</code><code class=\"plain\">, function(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t$.label.text = </code><code class=\"string\">'model: '</code><code class=\"plain\"> + JSON.stringify(app.attributes);</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// fetch model from Ti.App.Properties adapter</code></div>\n<div class=\"line\"><code class=\"plain\">app.set(</code><code class=\"string\">'id'</code><code class=\"plain\">, ID);</code></div>\n<div class=\"line\"><code class=\"plain\">app.fetch();</code></div>\n<div class=\"line\"><code class=\"comments\">// event handlers</code></div>\n<div class=\"line\"><code class=\"plain\">function create(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tapp.save(app.defaults);</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function destroy(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tapp.destroy();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function increment(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\tapp.set({</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tcount: app.get(</code><code class=\"string\">'count'</code><code class=\"plain\">)+</code><code class=\"value\">1</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\t\tid: ID</code></div>\n<div class=\"line\"><code class=\"plain\">\t});</code></div>\n<div class=\"line\"><code class=\"plain\">\tapp.save();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nThe Collection tab provides UI to add items to the collection, which is bound to the <tt class=\" \">TableView</tt> element's <tt class=\" \">dataCollection</tt> attribute. Clicking a table row updates the corresponding collection item's &quot;score&quot; field, which is displayed in the row. Whenever a model is added or destroyed (by long-pressing on a TableView row), the new collection data is fetched, which fires the <tt class=\" \">fetch</tt> event. The <tt class=\" \">resetTableData()</tt> function re-populates the TableView with new instances of the <strong class=\" \">controllers/collection/row.js</strong> controller, passing each the ID, name, and score to display.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/controllers/collection/collectionTab.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var items = Alloy.createCollection(</code><code class=\"string\">'collectionTab'</code><code class=\"plain\">),</code></div>\n<div class=\"line\"><code class=\"plain\">    rowControllers = [];</code></div>\n<div class=\"line\"><code class=\"comments\">// update the row and save the model when the score changes</code></div>\n<div class=\"line\"><code class=\"plain\">items.on(</code><code class=\"string\">'change:score'</code><code class=\"plain\">, function(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        var row = _.find(rowControllers, function(r) {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"keyword\">return</code><code class=\"plain\"> r.id === model.id;</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">if</code><code class=\"plain\"> (row) {</code></div>\n<div class=\"line\"><code class=\"plain\">            row.score.text = model.get(</code><code class=\"string\">'score'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">            model.save();</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// reset the table whenever a model is added or destroyed</code></div>\n<div class=\"line\"><code class=\"comments\">// completely. Also reset whenever the collection is reset.</code></div>\n<div class=\"line\"><code class=\"comments\">// Save the model changes if necessary.</code></div>\n<div class=\"line\"><code class=\"plain\">items.on(</code><code class=\"string\">'fetch'</code><code class=\"plain\">, function(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">    resetTableData();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"comments\">// fetch collection from Ti.App.Properties adapter</code></div>\n<div class=\"line\"><code class=\"plain\">items.fetch();</code></div>\n<div class=\"line\"><code class=\"comments\">//////////////////////////////////////</code></div>\n<div class=\"line\"><code class=\"comments\">////////// private function //////////</code></div>\n<div class=\"line\"><code class=\"comments\">//////////////////////////////////////</code></div>\n<div class=\"line\"><code class=\"plain\">function resetTableData() {</code></div>\n<div class=\"line\"><code class=\"plain\">    rowControllers = [];</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// create row controllers based on all models in the collection</code></div>\n<div class=\"line\"><code class=\"plain\">    _.each(items.toJSON(), function(i) {</code></div>\n<div class=\"line\"><code class=\"plain\">        rowControllers.push(Alloy.createController(</code><code class=\"string\">'collection/row'</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">            id: i.id,</code></div>\n<div class=\"line\"><code class=\"plain\">            name: i.name,</code></div>\n<div class=\"line\"><code class=\"plain\">            score: i.score</code></div>\n<div class=\"line\"><code class=\"plain\">        }));</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// fill table with the controllers' TableViewRow, and sort</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// by the row's ID</code></div>\n<div class=\"line\"><code class=\"plain\">    var theArray = _.sortBy(rowControllers, function(r) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> r.getView(</code><code class=\"string\">'name'</code><code class=\"plain\">).text;</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    $.table.setData(_.map(theArray, function(r) {</code><code class=\"keyword\">return</code><code class=\"plain\"> r.getView();}));</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">////////////////////////////////////</code></div>\n<div class=\"line\"><code class=\"comments\">////////// event handlers //////////</code></div>\n<div class=\"line\"><code class=\"comments\">////////////////////////////////////</code></div>\n<div class=\"line\"><code class=\"plain\">function deleteItem(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var model = items.get(e.row.id);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        model.destroy();</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    items.fetch();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function incrementScore(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var model = items.get(e.row.id);</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        model.set(</code><code class=\"string\">'score'</code><code class=\"plain\">, model.get(</code><code class=\"string\">'score'</code><code class=\"plain\">)+</code><code class=\"value\">1</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">function addItem(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var model = items.create({</code></div>\n<div class=\"line\"><code class=\"plain\">        name: $.text.value || </code><code class=\"string\">'&lt;no name&gt;'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">        score: </code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    items.add(model);</code></div>\n<div class=\"line\"><code class=\"plain\">    items.fetch();</code></div>\n<div class=\"line\"><code class=\"plain\">    $.text.value = </code><code class=\"string\">''</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845721_PropertiesSyncAdaptor-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Properties_Sync_Adaptor\">Sync Adapters</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link \" href=\"https://wiki.appcelerator.org/display/guides2/New+-+Alloy+Collection+and+Model+Objects\">Alloy Collection and Model Objects</a>    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845721\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Properties Sync Adaptor"});