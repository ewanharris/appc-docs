Ext.data.JsonP['Alloy_builtins_animation']({"tagname":"class","name":"Alloy.builtins.animation","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"editurl":"https://github.com/appcelerator/alloy/edit/master/Alloy/builtins/animation.js"},"private":null,"id":"class-Alloy.builtins.animation","members":{"cfg":[],"property":[{"name":"HORIZONTAL","tagname":"property","owner":"Alloy.builtins.animation","meta":{},"id":"property-HORIZONTAL"},{"name":"VERTICAL","tagname":"property","owner":"Alloy.builtins.animation","meta":{},"id":"property-VERTICAL"}],"method":[{"name":"chainAnimate","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-chainAnimate"},{"name":"crossFade","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-crossFade"},{"name":"fadeAndRemove","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-fadeAndRemove"},{"name":"fadeIn","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-fadeIn"},{"name":"fadeOut","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-fadeOut"},{"name":"flash","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-flash"},{"name":"flip","tagname":"method","owner":"Alloy.builtins.animation","meta":{"platform":["iphone 1.2.2","ipad 1.2.2"]},"id":"method-flip"},{"name":"flipHorizontal","tagname":"method","owner":"Alloy.builtins.animation","meta":{"platform":["iphone 1.2.2","ipad 1.2.2"]},"id":"method-flipHorizontal"},{"name":"flipVertical","tagname":"method","owner":"Alloy.builtins.animation","meta":{"platform":["iphone 1.2.2","ipad 1.2.2"]},"id":"method-flipVertical"},{"name":"popIn","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-popIn"},{"name":"shake","tagname":"method","owner":"Alloy.builtins.animation","meta":{},"id":"method-shake"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":18,"files":[{"filename":"alloy.js","href":"alloy.html#Alloy-builtins-animation"},{"filename":"animation.js","href":"animation.html#Alloy-builtins-animation"}],"html_meta":{"editurl":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='sidebar'></div><div class='hierarchy'></div><div class='doc-contents'><p>A collection of useful animation utilities. To use the animation builtin library,\nall you need to do is require it with the <code>alloy</code> root directory in your\n<code>require</code> call. For example:</p>\n\n<pre><code>var animation = require('alloy/animation');\nanimation.crossFade(view1, view2, 500, finishCallback);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-HORIZONTAL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-property-HORIZONTAL' class='name not-expandable'>HORIZONTAL</a><span> : String</span></div><div class='description'><div class='short'><p>To be used as direction for the flip-method</p>\n</div><div class='long'><p>To be used as direction for the flip-method</p>\n</div></div></div><div id='property-VERTICAL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-property-VERTICAL' class='name not-expandable'>VERTICAL</a><span> : String</span></div><div class='description'><div class='short'><p>To be used as direction for the flip-method</p>\n</div><div class='long'><p>To be used as direction for the flip-method</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-chainAnimate' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-chainAnimate' class='name expandable'>chainAnimate</a>( <span class='pre'>view, animations, [finishCallback]</span> )</div><div class='description'><div class='short'>Executes a series of animations on the target view. ...</div><div class='long'><p>Executes a series of animations on the target view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to animate.</p>\n</div></li><li><span class='pre'>animations</span> : <a href=\"#!/api/Titanium.UI.Animation\" rel=\"Titanium.UI.Animation\" class=\"docClass\">Titanium.UI.Animation</a>[]<div class='sub-desc'><p>A set of animations to execute on <code>view</code> in sequence.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback to invoke once the chain animation is complete.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-crossFade' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-crossFade' class='name expandable'>crossFade</a>( <span class='pre'>from, to, duration, [finishCallback]</span> )</div><div class='description'><div class='short'>Transitions from one view to another using a cross-fade animation. ...</div><div class='long'><p>Transitions from one view to another using a cross-fade animation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade out.</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade in.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fade completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fadeAndRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-fadeAndRemove' class='name expandable'>fadeAndRemove</a>( <span class='pre'>from, duration, container, [finishCallback]</span> )</div><div class='description'><div class='short'>Fades out a view then removes it from its parent view. ...</div><div class='long'><p>Fades out a view then removes it from its parent view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to remove.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>container</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>Parent container view.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fadeAndRemove completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fadeIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-fadeIn' class='name expandable'>fadeIn</a>( <span class='pre'>to, duration, [finishCallback]</span> )</div><div class='description'><div class='short'>Fades in the specified view. ...</div><div class='long'><p>Fades in the specified view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>to</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade in.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fadeIn completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-fadeOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-fadeOut' class='name expandable'>fadeOut</a>( <span class='pre'>to, duration, [finishCallback]</span> )</div><div class='description'><div class='short'>Fades out the specified view. ...</div><div class='long'><p>Fades out the specified view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>to</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade out.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fadeOut completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-flash' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-flash' class='name expandable'>flash</a>( <span class='pre'>view, [delay], [finishCallback]</span> )</div><div class='description'><div class='short'>Flashes the target view twice, fading to partially transparent then back to\nfully-opaque. ...</div><div class='long'><p>Flashes the target view twice, fading to partially transparent then back to\nfully-opaque.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to animate.</p>\n</div></li><li><span class='pre'>delay</span> : Number (optional)<div class='sub-desc'><p>If specified, animation starts after <code>delay</code> milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the flash completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-flip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-flip' class='name expandable'>flip</a>( <span class='pre'>from, to, [direction], duration, [finishCallback]</span> )</div><div class='description'><div class='short'>Transitions from one view to another using a 3D flip animation. ...</div><div class='long'><p>Transitions from one view to another using a 3D flip animation.\nThe two views need to be positioned on top of each other.</p>\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.2.2</li><li class='platform-ipad'\n        title='iPad'>1.2.2</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade out.</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade in.</p>\n</div></li><li><span class='pre'>direction</span> : String (optional)<div class='sub-desc'><p>direction ('horizontal' or 'vertical') to flip.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fade completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-flipHorizontal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-flipHorizontal' class='name expandable'>flipHorizontal</a>( <span class='pre'>from, to, duration, [finishCallback]</span> )</div><div class='description'><div class='short'>Transitions from one view to another using a horizontal flip animation. ...</div><div class='long'><p>Transitions from one view to another using a horizontal flip animation.</p>\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.2.2</li><li class='platform-ipad'\n        title='iPad'>1.2.2</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade out.</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade in.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fade completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-flipVertical' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-flipVertical' class='name expandable'>flipVertical</a>( <span class='pre'>from, to, duration, [finishCallback]</span> )</div><div class='description'><div class='short'>Transitions from one view to another using a vertical flip animation. ...</div><div class='long'><p>Transitions from one view to another using a vertical flip animation.</p>\n<ul class='platforms'><li class='platform-iphone'\n        title='iPhone'>1.2.2</li><li class='platform-ipad'\n        title='iPad'>1.2.2</li></ul><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>from</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade out.</p>\n</div></li><li><span class='pre'>to</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to fade in.</p>\n</div></li><li><span class='pre'>duration</span> : Number<div class='sub-desc'><p>Fade duration in milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the fade completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-popIn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-popIn' class='name expandable'>popIn</a>( <span class='pre'>view, [finishCallback]</span> )</div><div class='description'><div class='short'>Makes the specified view appear using a \"pop-in\" animation, which combines a fade-in\nwith a slight expanding and cont...</div><div class='long'><p>Makes the specified view appear using a \"pop-in\" animation, which combines a fade-in\nwith a slight expanding and contracting animation, to call attention to the new view.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to animate.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the popIn completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div><div id='method-shake' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Alloy.builtins.animation'>Alloy.builtins.animation</span></div><a href='#!/api/Alloy.builtins.animation-method-shake' class='name expandable'>shake</a>( <span class='pre'>view, [delay], [finishCallback]</span> )</div><div class='description'><div class='short'>Creates a shake animation, moving the target view back and forth rapidly several times. ...</div><div class='long'><p>Creates a shake animation, moving the target view back and forth rapidly several times.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>view</span> : <a href=\"#!/api/Titanium.UI.View\" rel=\"Titanium.UI.View\" class=\"docClass\">Titanium.UI.View</a><div class='sub-desc'><p>View to animate.</p>\n</div></li><li><span class='pre'>delay</span> : Number (optional)<div class='sub-desc'><p>If specified, animation starts after <code>delay</code> milliseconds.</p>\n</div></li><li><span class='pre'>finishCallback</span> : function() (optional)<div class='sub-desc'><p>Callback function, invoked after the shake completes.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span></li></ul></div></div></div></div></div></div></div>"});