Ext.data.JsonP['Todo_List']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Todo List</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"41845733\" class=\"content\">\n            <h1>Todo List</h1>\n    <p>\nDemonstrates how to create a basic &quot;Todos&quot; application by binding a data collection to a TableView.    </p>\n    <div class=\"confbox admonition admonition-info aui-message hint shadowed information-macro has-no-icon\">\n            <div class=\"title\">App Folder Location</div>\n        \n    <p>\nalloy/test/apps/models/todo    </p>\n    </div>\n    \n    <p>\nThe sample lets you add and delete items, mark items as complete, and filter the list to display all items, only active items, or just completed items.    </p>\n    <p>\n        <img src=\"images/download/attachments/41845733/todos.png\" alt=\"images/download/attachments/41845733/todos.png\" class=\"confluence-embedded-image confluence-content-image-border\" width=\"773\"/>\n            </p>\n    <p>\nThe data model for each todo item consists of three fields:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">item</strong> &ndash; The text for the todo item.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">done</strong> &ndash; A number that indicates if the todo item is complete.    </p>\n</li><li class=\" \">    <p>\n<strong class=\" \">data_completed</strong> &ndash; The date that the item was marked as complete.    </p>\n</li></ul>    <p>\nThe todo.js model configuration file defines columns for these fields, and also extends the model with a custom validate() function that validates input, and a comparator function that's used to filter    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">app/models/todo.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var moment = require(</code><code class=\"string\">'alloy/moment'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">exports.definition = {</code></div>\n<div class=\"line\"><code class=\"plain\">    config: {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"columns\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"item\"</code><code class=\"plain\">:</code><code class=\"string\">\"text\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"done\"</code><code class=\"plain\">:</code><code class=\"string\">\"integer\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"date_completed\"</code><code class=\"plain\">:</code><code class=\"string\">\"text\"</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"string\">\"adapter\"</code><code class=\"plain\">: {</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"type\"</code><code class=\"plain\">: </code><code class=\"string\">\"sql\"</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            </code><code class=\"string\">\"collection_name\"</code><code class=\"plain\">: </code><code class=\"string\">\"todo\"</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    extendModel : function(Model) {</code></div>\n<div class=\"line\"><code class=\"plain\">        _.extend(Model.prototype, {</code></div>\n<div class=\"line\"><code class=\"plain\">            validate : function(attrs) {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">for</code><code class=\"plain\"> (var key in attrs) {</code></div>\n<div class=\"line\"><code class=\"plain\">                    var value = attrs[key];</code></div>\n<div class=\"line\"><code class=\"plain\">                    </code><code class=\"keyword\">if</code><code class=\"plain\"> (value) {</code></div>\n<div class=\"line\"><code class=\"plain\">                        </code><code class=\"keyword\">if</code><code class=\"plain\"> (key === </code><code class=\"string\">\"item\"</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                            </code><code class=\"keyword\">if</code><code class=\"plain\"> (value.length &lt;= </code><code class=\"value\">0</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                                </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"string\">'Error: No item!'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                            }</code></div>\n<div class=\"line\"><code class=\"plain\">                        }</code></div>\n<div class=\"line\"><code class=\"plain\">                        </code><code class=\"keyword\">if</code><code class=\"plain\"> (key === </code><code class=\"string\">\"done\"</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                            </code><code class=\"keyword\">if</code><code class=\"plain\"> (value.length &lt;= </code><code class=\"value\">0</code><code class=\"plain\">) {</code></div>\n<div class=\"line\"><code class=\"plain\">                                </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"string\">'Error: No completed flag!'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">                            }</code></div>\n<div class=\"line\"><code class=\"plain\">                        }</code></div>\n<div class=\"line\"><code class=\"plain\">                    }</code></div>\n<div class=\"line\"><code class=\"plain\">                }</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> Model;</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\">    extendCollection : function(Collection) {</code></div>\n<div class=\"line\"><code class=\"plain\">        _.extend(Collection.prototype, {</code></div>\n<div class=\"line\"><code class=\"plain\">            comparator: function(todo) {</code></div>\n<div class=\"line\"><code class=\"plain\">                </code><code class=\"keyword\">return</code><code class=\"plain\"> todo.get(</code><code class=\"string\">'done'</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">            }</code></div>\n<div class=\"line\"><code class=\"plain\">        });</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"keyword\">return</code><code class=\"plain\"> Collection;</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    <p>\nThe main index.xml view declares the &lt;TableView&gt; element to display todo items, as well as UI elements to open the add item form (app/views/add.xml), and to filter the list items. The TableView's dataCollection attribute is set to the &quot;todos&quot; collection defined by the model configuration file. The TableViewRow used to display each row in the TableView is defined in another XML view file (app/views/rows.xml) and required by index.xml.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">views/index.xml</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">&lt;Alloy&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;!-- Main Window --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;Window id=</code><code class=\"string\">\"todoWin\"</code><code class=\"plain\"> title=</code><code class=\"string\">\"Todo\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- header --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;View id=</code><code class=\"string\">\"header\"</code><code class=\"plain\"> platform=</code><code class=\"string\">\"ios,mobileweb\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;Label id=</code><code class=\"string\">\"title\"</code><code class=\"plain\">&gt;Alloy Todo&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;View </code><code class=\"keyword\">class</code><code class=\"plain\">=</code><code class=\"string\">\"divider\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;View id=</code><code class=\"string\">\"addView\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"addToDoItem\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;ImageView id=</code><code class=\"string\">\"addImage\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;TableView id=</code><code class=\"string\">\"todoTable\"</code><code class=\"plain\"> dataCollection=</code><code class=\"string\">\"todo\"</code><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">                       dataFilter=</code><code class=\"string\">\"whereFunction\"</code><code class=\"plain\"> dataTransform=</code><code class=\"string\">\"transformFunction\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Require src=</code><code class=\"string\">\"row\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/TableView&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- iOS: footer with buttons --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;View platform=</code><code class=\"string\">\"ios\"</code><code class=\"plain\"> id=</code><code class=\"string\">\"footer\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;TabbedBar onClick=</code><code class=\"string\">\"showTasks\"</code><code class=\"plain\"> id=</code><code class=\"string\">\"tabbedbar\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;Labels&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Label&gt;All&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Label&gt;Active&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                    &lt;Label&gt;Done&lt;/Label&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">                &lt;/Labels&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;/TabbedBar&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/View&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;!-- Android: menu --&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;Menu platform=</code><code class=\"string\">\"android\"</code><code class=\"plain\">&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;MenuItem icon=</code><code class=\"string\">\"Ti.Android.R.drawable.ic_input_add\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"addToDoItem\"</code><code class=\"plain\"> showAsAction=</code><code class=\"string\">\"Ti.Android.SHOW_AS_ACTION_ALWAYS\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;MenuItem title=</code><code class=\"string\">\"All\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"showTasks\"</code><code class=\"plain\"> showAsAction=</code><code class=\"string\">\"Ti.Android.SHOW_AS_ACTION_NEVER\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;MenuItem title=</code><code class=\"string\">\"Active\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"showTasks\"</code><code class=\"plain\"> showAsAction=</code><code class=\"string\">\"Ti.Android.SHOW_AS_ACTION_NEVER\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">            &lt;MenuItem title=</code><code class=\"string\">\"Done\"</code><code class=\"plain\"> onClick=</code><code class=\"string\">\"showTasks\"</code><code class=\"plain\"> showAsAction=</code><code class=\"string\">\"Ti.Android.SHOW_AS_ACTION_NEVER\"</code><code class=\"plain\">/&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">        &lt;/Menu&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">    &lt;/Window&gt;</code></div>\n<div class=\"line\"><code class=\"plain\">&lt;/Alloy&gt;</code></div>\n</div>\n</div>    <p>\nThe function specified by the &quot;dataFilter&quot; attribute <tt class=\" \">(whereFunction)</tt> filters the list of items in the collection according to their status (complete or active).    </p>\n    <p>\nIf whereIndex is 0 (that is, !whereIndex == true) the filter function returns all the models in the collection, represented by the Backbone <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Collection-models\" target=\"_blank\">collection.models</a> property. Otherwise, the Backbone <a class=\"external-link external-link\" href=\"http://backbonejs.org/#Collection-where\" target=\"_blank\">collection.where()</a> function is used to only return those model items whose done value is 0 or 1, depending on the value of whereIndex.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">controllers/index.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function whereFunction(collection) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"keyword\">return</code><code class=\"plain\"> !whereIndex ? collection.models : collection.where({done: whereIndex === </code><code class=\"value\">1</code><code class=\"plain\"> ? </code><code class=\"value\">0</code><code class=\"plain\"> : </code><code class=\"value\">1</code><code class=\"plain\"> });</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nThe function specified by the &quot;dataTransform&quot; attribute <tt class=\" \">(transformFunction)</tt> is used to modify a collection item value before being applied to a TableViewRow. In this case, the transform function simply wraps the entered item in square brackets.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function transformFunction(model) {</code></div>\n<div class=\"line\"><code class=\"plain\">    var transform = model.toJSON();</code></div>\n<div class=\"line\"><code class=\"plain\">    transform.item = </code><code class=\"string\">'['</code><code class=\"plain\"> + transform.item + </code><code class=\"string\">']'</code><code class=\"plain\">;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> transform;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nNew todo models are added to the todos collection via the <tt class=\" \">addItem()</tt> method, and then saved to the SQL database. To keep the UI from updating twice, the <tt class=\" \">add()</tt> method is passed <tt class=\" \">silent=true</tt> in its options hash.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">controllers/add.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">function addItem() {</code></div>\n<div class=\"line\"><code class=\"plain\">    var todos = Alloy.Collections.todo;</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Create a new todo model and initialize it with</code></div>\n<div class=\"line\"><code class=\"plain\">    var task = Alloy.createModel(</code><code class=\"string\">'Todo'</code><code class=\"plain\">, {</code></div>\n<div class=\"line\"><code class=\"plain\">        item : $.itemField.value,</code></div>\n<div class=\"line\"><code class=\"plain\">        done : </code><code class=\"value\">0</code></div>\n<div class=\"line\"><code class=\"plain\">    });</code></div>\n<div class=\"line\"><code class=\"plain\">    todos.add(task, { silent: </code><code class=\"keyword\">true</code><code class=\"plain\"> } );</code></div>\n<div class=\"line\"><code class=\"plain\">    task.save();</code></div>\n<div class=\"line\"><code class=\"plain\">    closeWindow();</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <div class=\"section section-2 \" id=\"41845733_TodoList-SeeAlso\">\n        <h2 class=\"heading \"><span>See Also</span></h2>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"document-link unresolved\" href=\"#!/guide/Todo_List\">Alloy Collection and Model Objects</a>    </p>\n</li></ul>    <p>\n    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=41845733\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Todo List"});