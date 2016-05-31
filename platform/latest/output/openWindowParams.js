Ext.data.JsonP['openWindowParams']({"tagname":"class","name":"openWindowParams","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"platform":["android 2.0.0","iphone 2.0.0","ipad 2.0.0"],"pseudo":[null],"editurl":"https://github.com/appcelerator/titanium_mobile/edit/master/apidoc/Titanium/UI/Window.yml"},"private":null,"id":"class-openWindowParams","members":{"cfg":[],"property":[{"name":"activityEnterAnimation","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of Titanium.UI.Window\nfor more information.</p> \n\n<h3>Examples</h3>\n<h4>Sliding in a new Window</h4>\n<pre><code>var win2 = Ti.UI.createWindow({fullscreen:false});\nwin2.open({\n    activityEnterAnimation: Ti.Android.R.anim.slide_in_left,\n    activityExitAnimation: Ti.Android.R.anim.slide_out_right\n});</code></pre>"],"platform":["android 3.1.0"]},"id":"property-activityEnterAnimation"},{"name":"activityExitAnimation","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of Titanium.UI.Window\nfor more information.</p>"],"platform":["android 3.1.0"]},"id":"property-activityExitAnimation"},{"name":"animated","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, this property supports animated transitions on heavyweight windows\nexcept for modal windows (<code>modal:true</code>).  See \"Android Heavyweight and Lightweight\nWindows\" in the main description of Titanium.UI.Window for more information. The\ntransitions are on by default, but you can disable this behavior by setting this value\nto <code>false</code>.</p>\n\n<p>On iOS, only use this property to disable animated transitions on modal windows. \nThis property has unintended side effects on non-modal windows if it is defined. </p>"]},"id":"property-animated"},{"name":"bottom","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description\nof Titanium.UI.Window for more information.</p>"]},"id":"property-bottom"},{"name":"fullscreen","tagname":"property","owner":"openWindowParams","meta":{},"id":"property-fullscreen"},{"name":"height","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, before Titanium 3.2.0, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof Titanium.UI.Window for more information.\nOn Windows Phone 8.1 and Windows 10 Mobile, this property does not take any effect.\nOn Windows 10 Store App, resizing Window takes no effect in following cases\naccording to <a href=\"https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.viewmanagement.applicationview.tryresizeview\">Windows Runtime API document</a>.\nThe requested size is larger than the available work area.\nThe requested size is less than the view's minimum size.\nThe smallest allowed minimum size is 192 x 48 effective pixels.\nThe largest allowed minimum size is 500 x 500 effective pixels.</p>"]},"id":"property-height"},{"name":"left","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof Titanium.UI.Window for more information.</p>"]},"id":"property-left"},{"name":"modal","tagname":"property","owner":"openWindowParams","meta":{},"id":"property-modal"},{"name":"modalStyle","tagname":"property","owner":"openWindowParams","meta":{"platform":["iphone 2.0.0","ipad 2.0.0"]},"id":"property-modalStyle"},{"name":"modalTransitionStyle","tagname":"property","owner":"openWindowParams","meta":{"platform":["iphone 2.0.0","ipad 2.0.0"]},"id":"property-modalTransitionStyle"},{"name":"navBarHidden","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On iOS, beginning with <strong>Release 3.1.3</strong>, this is no longer a valid parameter passed to the {@link Titanium.UI.Window#method-open Window.open} method.</p>"]},"id":"property-navBarHidden"},{"name":"right","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof Titanium.UI.Window for more information.</p>"]},"id":"property-right"},{"name":"top","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof Titanium.UI.Window for more information.</p>"]},"id":"property-top"},{"name":"transition","tagname":"property","owner":"openWindowParams","meta":{"platform":["iphone 2.0.0","ipad 2.0.0"]},"id":"property-transition"},{"name":"width","tagname":"property","owner":"openWindowParams","meta":{"description":["<p>On Android, before Titanium 3.2.0, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof Titanium.UI.Window for more information.\nOn Windows Phone 8.1 and Windows 10 Mobile, this property does not take any effect.\nOn Windows 10 Store App, resizing Window takes no effect in following cases\naccording to <a href=\"https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.viewmanagement.applicationview.tryresizeview\">Windows Runtime API document</a>.\nThe requested size is larger than the available work area.\nThe requested size is less than the view's minimum size.\nThe smallest allowed minimum size is 192 x 48 effective pixels.\nThe largest allowed minimum size is 500 x 500 effective pixels.\nThis method is called while in while the app is running in Tablet Mode.</p>"]},"id":"property-width"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"linenr":204020,"files":[{"filename":"titanium.js","href":"titanium.html#openWindowParams"}],"html_meta":{"platform":"<ul class='platforms'><li class='platform-android'\n        title='Android'>2.0.0</li><li class='platform-iphone'\n        title='iPhone'>2.0.0</li><li class='platform-ipad'\n        title='iPad'>2.0.0</li></ul>","pseudo":["<p class='private'><strong>NOTE</strong> ","This is an abstract type. Any object meeting this description can be used ","where this type is used.</p>"],"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'><ul class=\"sidebar-platforms\"><li class='platform-android' title='Android since Titanium SDK 2.0.0'>Android 2.0.0</li><li class='platform-iphone' title='iPhone since Titanium SDK 2.0.0'>iPhone 2.0.0</li><li class='platform-ipad' title='iPad since Titanium SDK 2.0.0'>iPad 2.0.0</li></ul></div><div class='hierarchy'></div><div class='doc-contents'><p>Dictionary of options for the <a href=\"#!/api/Titanium.UI.Window-method-open\" rel=\"Titanium.UI.Window-method-open\" class=\"docClass\">Titanium.UI.Window.open</a> method.</p>\n\n<ul class='platforms'><li class='platform-android'\n        title='Android'>2.0.0</li><li class='platform-iphone'\n        title='iPhone'>2.0.0</li><li class='platform-ipad'\n        title='iPad'>2.0.0</li></ul><p class='private'><strong>NOTE</strong> This is an abstract type. Any object meeting this description can be used where this type is used.</p></div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-activityEnterAnimation' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-activityEnterAnimation' class='name not-expandable'>activityEnterAnimation</a><span> : Number</span></div><div class='description'><div class='short'><p>Animation resource to run on the activity (heavyweight window) being opened.</p>\n\n</div><div class='long'><p>Animation resource to run on the activity (heavyweight window) being opened.</p>\n\n<p><p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>\nfor more information.</p>\n\n\n<p></p>\n\n<h3>Examples</h3>\n\n\n<h4>Sliding in a new Window</h4>\n\n\n<pre><code>var win2 = Ti.UI.createWindow({fullscreen:false});\nwin2.open({\n    activityEnterAnimation: Ti.Android.R.anim.slide_in_left,\n    activityExitAnimation: Ti.Android.R.anim.slide_out_right\n});</code></pre>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li></ul></div></div></div><div id='property-activityExitAnimation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-activityExitAnimation' class='name expandable'>activityExitAnimation</a><span> : Number</span></div><div class='description'><div class='short'>Animation resource to run on the activity that is being put in background as a heavyweight window is being opened abo...</div><div class='long'><p>Animation resource to run on the activity that is being put in background as a heavyweight window is being opened above it.</p>\n\n<p><p>This value will be ignored if <code>animated</code> is set to false.\nSee \"Heavyweight Window Transitions in Android\" in the main description of <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a>\nfor more information.</p>\n\n</p><ul class='platforms'><li class='platform-android'\n        title='Android'>3.1.0</li></ul></div></div></div><div id='property-animated' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-animated' class='name expandable'>animated</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines whether to use an animated effect when the window is shown. ...</div><div class='long'><p>Determines whether to use an animated effect when the window is shown.</p>\n\n<p><p>On Android, this property supports animated transitions on heavyweight windows\nexcept for modal windows (<code>modal:true</code>).  See \"Android Heavyweight and Lightweight\nWindows\" in the main description of <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information. The\ntransitions are on by default, but you can disable this behavior by setting this value\nto <code>false</code>.</p>\n\n\n\n\n<p>On iOS, only use this property to disable animated transitions on modal windows. \nThis property has unintended side effects on non-modal windows if it is defined. </p>\n\n</p><p>Default: true</p></div></div></div><div id='property-bottom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-bottom' class='name expandable'>bottom</a><span> : Number/String</span></div><div class='description'><div class='short'>Window's bottom position, in platform-specific units. ...</div><div class='long'><p>Window's bottom position, in platform-specific units.</p>\n\n<p><p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description\nof <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information.</p>\n\n</p><p>Default: 0</p></div></div></div><div id='property-fullscreen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-fullscreen' class='name expandable'>fullscreen</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines if the window is fullscreen. ...</div><div class='long'><p>Determines if the window is fullscreen.</p>\n\n<p>Default: false</p></div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-height' class='name not-expandable'>height</a><span> : Number/String</span></div><div class='description'><div class='short'><p>Window's height, in platform-specific units.</p>\n\n</div><div class='long'><p>Window's height, in platform-specific units.</p>\n\n<p><p>On Android, before Titanium 3.2.0, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information.\nOn Windows Phone 8.1 and Windows 10 Mobile, this property does not take any effect.\nOn Windows 10 Store App, resizing Window takes no effect in following cases\naccording to <a href=\"https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.viewmanagement.applicationview.tryresizeview\">Windows Runtime API document</a>.\nThe requested size is larger than the available work area.\nThe requested size is less than the view's minimum size.\nThe smallest allowed minimum size is 192 x 48 effective pixels.\nThe largest allowed minimum size is 500 x 500 effective pixels.</p>\n\n</p></div></div></div><div id='property-left' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-left' class='name expandable'>left</a><span> : Number/String</span></div><div class='description'><div class='short'>Window's left position, in platform-specific units. ...</div><div class='long'><p>Window's left position, in platform-specific units.</p>\n\n<p><p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information.</p>\n\n</p><p>Default: 0</p></div></div></div><div id='property-modal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-modal' class='name expandable'>modal</a><span> : Boolean</span></div><div class='description'><div class='short'>Determines whether to open the window modal in front of other windows. ...</div><div class='long'><p>Determines whether to open the window modal in front of other windows.</p>\n\n<p>Default: false</p></div></div></div><div id='property-modalStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-modalStyle' class='name expandable'>modalStyle</a><span> : Number</span></div><div class='description'><div class='short'>Presentation style of this modal window. ...</div><div class='long'><p>Presentation style of this modal window.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_PRESENTATION_CURRENT_CONTEXT\" rel=\"Titanium.UI.iPhone-property-MODAL_PRESENTATION_CURRENT_CONTEXT\" class=\"docClass\">Titanium.UI.iPhone.MODAL_PRESENTATION_CURRENT_CONTEXT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_PRESENTATION_FORMSHEET\" rel=\"Titanium.UI.iPhone-property-MODAL_PRESENTATION_FORMSHEET\" class=\"docClass\">Titanium.UI.iPhone.MODAL_PRESENTATION_FORMSHEET</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_PRESENTATION_FULLSCREEN\" rel=\"Titanium.UI.iPhone-property-MODAL_PRESENTATION_FULLSCREEN\" class=\"docClass\">Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_PRESENTATION_PAGESHEET\" rel=\"Titanium.UI.iPhone-property-MODAL_PRESENTATION_PAGESHEET\" class=\"docClass\">Titanium.UI.iPhone.MODAL_PRESENTATION_PAGESHEET</a>\n</li></li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_PRESENTATION_FULLSCREEN\" rel=\"Titanium.UI.iPhone-property-MODAL_PRESENTATION_FULLSCREEN\" class=\"docClass\">Titanium.UI.iPhone.MODAL_PRESENTATION_FULLSCREEN</a></p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>2.0.0</li><li class='platform-ipad'\n        title='iPad'>2.0.0</li></ul></div></div></div><div id='property-modalTransitionStyle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-modalTransitionStyle' class='name expandable'>modalTransitionStyle</a><span> : Number</span></div><div class='description'><div class='short'>Transition style of this modal window. ...</div><div class='long'><p>Transition style of this modal window.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_COVER_VERTICAL\" rel=\"Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_COVER_VERTICAL\" class=\"docClass\">Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_CROSS_DISSOLVE\" rel=\"Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_CROSS_DISSOLVE\" class=\"docClass\">Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_CROSS_DISSOLVE</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL\" rel=\"Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL\" class=\"docClass\">Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_FLIP_HORIZONTAL</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_PARTIAL_CURL\" rel=\"Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_PARTIAL_CURL\" class=\"docClass\">Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_PARTIAL_CURL</a>\n</li></li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_COVER_VERTICAL\" rel=\"Titanium.UI.iPhone-property-MODAL_TRANSITION_STYLE_COVER_VERTICAL\" class=\"docClass\">Titanium.UI.iPhone.MODAL_TRANSITION_STYLE_COVER_VERTICAL</a></p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>2.0.0</li><li class='platform-ipad'\n        title='iPad'>2.0.0</li></ul></div></div></div><div id='property-navBarHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-navBarHidden' class='name expandable'>navBarHidden</a><span> : Boolean</span></div><div class='description'><div class='short'>For modal windows, hides the nav bar (true) or shows the nav bar (false). ...</div><div class='long'><p>For modal windows, hides the nav bar (<code>true</code>) or shows the nav bar (<code>false</code>).</p>\n\n<p><p>On iOS, beginning with <strong>Release 3.1.3</strong>, this is no longer a valid parameter passed to the <a href=\"#!/api/Titanium.UI.Window-method-open\" rel=\"Titanium.UI.Window-method-open\" class=\"docClass\">Window.open</a> method.</p>\n\n</p><p>Default: false</p></div></div></div><div id='property-right' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-right' class='name expandable'>right</a><span> : Number/String</span></div><div class='description'><div class='short'>Window's right position, in platform-specific units. ...</div><div class='long'><p>Window's right position, in platform-specific units.</p>\n\n<p><p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information.</p>\n\n</p><p>Default: 0</p></div></div></div><div id='property-top' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-top' class='name expandable'>top</a><span> : Number/String</span></div><div class='description'><div class='short'>Window's top position, in platform-specific units. ...</div><div class='long'><p>Window's top position, in platform-specific units.</p>\n\n<p><p>On Android, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information.</p>\n\n</p><p>Default: 0</p></div></div></div><div id='property-transition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-transition' class='name expandable'>transition</a><span> : Number</span></div><div class='description'><div class='short'>Transition style of this non-modal window. ...</div><div class='long'><p>Transition style of this non-modal window.</p>\n\n\n\n\n<p>This API can be assigned the following constants:<ul>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.AnimationStyle-property-CURL_DOWN\" rel=\"Titanium.UI.iPhone.AnimationStyle-property-CURL_DOWN\" class=\"docClass\">Titanium.UI.iPhone.AnimationStyle.CURL_DOWN</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.AnimationStyle-property-CURL_UP\" rel=\"Titanium.UI.iPhone.AnimationStyle-property-CURL_UP\" class=\"docClass\">Titanium.UI.iPhone.AnimationStyle.CURL_UP</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.AnimationStyle-property-FLIP_FROM_LEFT\" rel=\"Titanium.UI.iPhone.AnimationStyle-property-FLIP_FROM_LEFT\" class=\"docClass\">Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.AnimationStyle-property-FLIP_FROM_RIGHT\" rel=\"Titanium.UI.iPhone.AnimationStyle-property-FLIP_FROM_RIGHT\" class=\"docClass\">Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_RIGHT</a>\n <li> <a href=\"#!/api/Titanium.UI.iPhone.AnimationStyle-property-NONE\" rel=\"Titanium.UI.iPhone.AnimationStyle-property-NONE\" class=\"docClass\">Titanium.UI.iPhone.AnimationStyle.NONE</a>\n</li></li></li></li></li></ul></p>\n\n<p>Default: <a href=\"#!/api/Titanium.UI.iPhone.AnimationStyle-property-NONE\" rel=\"Titanium.UI.iPhone.AnimationStyle-property-NONE\" class=\"docClass\">Titanium.UI.iPhone.AnimationStyle.NONE</a></p><ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>2.0.0</li><li class='platform-ipad'\n        title='iPad'>2.0.0</li></ul></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='openWindowParams'>openWindowParams</span></div><a href='#!/api/openWindowParams-property-width' class='name not-expandable'>width</a><span> : Number/String</span></div><div class='description'><div class='short'><p>Window's width, in platform-specific units.</p>\n\n</div><div class='long'><p>Window's width, in platform-specific units.</p>\n\n<p><p>On Android, before Titanium 3.2.0, this property only works with lightweight windows.\nSee \"Android Heavyweight and Lightweight Windows\" in the main description \nof <a href=\"#!/api/Titanium.UI.Window\" rel=\"Titanium.UI.Window\" class=\"docClass\">Titanium.UI.Window</a> for more information.\nOn Windows Phone 8.1 and Windows 10 Mobile, this property does not take any effect.\nOn Windows 10 Store App, resizing Window takes no effect in following cases\naccording to <a href=\"https://msdn.microsoft.com/en-us/library/windows/apps/windows.ui.viewmanagement.applicationview.tryresizeview\">Windows Runtime API document</a>.\nThe requested size is larger than the available work area.\nThe requested size is less than the view's minimum size.\nThe smallest allowed minimum size is 192 x 48 effective pixels.\nThe largest allowed minimum size is 500 x 500 effective pixels.\nThis method is called while in while the app is running in Tablet Mode.</p>\n\n</p></div></div></div></div></div></div></div>"});