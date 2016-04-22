Ext.data.JsonP['Objective-C_and_Objective-C++_Coding_Standards']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Objective-C and Objective-C++ Coding Standards</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30088343\" class=\"content\">\n            <h1>Objective-C and Objective-C++ Coding Standards</h1>\n    <div class=\"confbox panel panel\">\n            <div class=\"title\">Contents</div>\n    <ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Synopsis\">Synopsis</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Basisforthisdocument\">Basis for this document</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-AppceleratorC/C++standards\">Appcelerator C/C++ standards</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Standards\">Standards</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-importvs.include\">import vs. include</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-ClassNaming\">Class Naming</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Protocols\">Protocols</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Categorynaming\">Category naming</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-ivars\">ivars</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-@public,@protected,and@private\">@public, @protected, and @private</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-@propertyand@synthesize\">@property and @synthesize</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Methods\">Methods</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-init\">init</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Blocks\">Blocks</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Fastenumeration(forxiny)\">Fast enumeration (for x in y)</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Filenames\">File names</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-@implementationordering\">@implementation ordering</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-nilandNULL\">nil and NULL</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-BOOLtypes\">BOOL types</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-ExceptionstotheCstandard\">Exceptions to the C standard</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Comments\">Comments</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Orderofdeclarations\">Order of declarations</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Braces\">Braces</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Variables\">Variables</a>    </p>\n</li></ul></li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-ExceptionstotheC++standard\">Exceptions to the C++ standard</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-OtherRules\">Other Rules</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-3rdpartylibraries\">3rd party libraries</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-Deprecatedclassesandmethods\">Deprecated classes and methods</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-@compatibility_alias\">@compatibility_alias</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Objective-C_and_Objective-C++_Coding_Standards-section-30088343_Objective-CandObjective-C++CodingStandards-pragmamark\">pragma mark</a>    </p>\n</li></ul></li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Synopsis\">\n        <h2 class=\"heading \"><span>Synopsis</span></h2>\n    <p>\nThis document is for the Objective-C and Objective-C++ coding standards at Appcelerator. As with other coding standards documents, the primary goal is clean, readable code, which is comprable to common existing conventions.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Basisforthisdocument\">\n        <h2 class=\"heading \"><span>Basis for this document</span></h2>\n    <p>\nWe attempt to follow the <a class=\"external-link external-link\" href=\"http://google-styleguide.googlecode.com/svn/trunk/objcguide.xml\" target=\"_blank\">Google coding standards</a> and <a class=\"external-link external-link\" href=\"http://developer.apple.com/library/mac/documentation/Cocoa/Conceptual/CodingGuidelines/CodingGuidelines.pdf\" target=\"_blank\">Apple Cocoa guidelines</a>. The remainder of this document reiterates information from these where appropriate, and otherwise provides exceptions to their standards.    </p>\n    <p>\nWe use &quot;Modern Objective-C&quot;, the features of which are described in these documents.    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html\" target=\"_blank\">Programming with Objective-C</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/releasenotes/ObjectiveC/ModernizationObjC/AdoptingModernObjective-C/AdoptingModernObjective-C.html\" target=\"_blank\">Adopting Modern Objective-C</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/releasenotes/ObjectiveC/ObjCAvailabilityIndex/index.html\" target=\"_blank\">Objective-C Feature Availability Index</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/releasenotes/ObjectiveC/RN-TransitioningToARC/Introduction/Introduction.html\" target=\"_blank\">Transitioning to ARC Release Notes</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"https://developer.apple.com/library/ios/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html\" target=\"_blank\">Blocks Programming Topics</a>    </p>\n</li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30088343_Objective-CandObjective-CCodingStandards-AppceleratorC/Cstandards\">\n        <h2 class=\"heading \"><span>Appcelerator C/C++ standards</span></h2>\n    <p>\nYou are expected to follow the <a class=\"document-link \" href=\"#!/guide/C_and_C++_Coding_Standards\">C/C++ coding guidelines</a> when writing Objective-C except where explicitly specified. These standards take precedence over any generic rules listed in the style guidelines above, although we have our own exceptions.    </p>\n    <p>\nHowever, for consistency, any pure-C functions you write in Objective-C source files are to follow the Objective-C rules with C exceptions.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Standards\">\n        <h2 class=\"heading \"><span>Standards</span></h2>\n    <p>\nThe following are the standard set of spacing, formatting, and naming conventions we expect for Objective-C(++) code.    </p>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-importvs.include\">\n        <h3 class=\"heading \"><span>import  vs.  include</span></h3>\n    <p>\nAlways @import (not <tt class=\" \">#import)</tt> Objective-C headers, and <tt class=\" \">#include</tt> C (or C++) headers.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-ClassNaming\">\n        <h3 class=\"heading \"><span>Class Naming</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nObjective-C classes are to be named with:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nThe prefix <tt class=\" \">Ti</tt>, or another project-appropriate prefix    </p>\n</li><li class=\" \">    <p>\nCamelcase    </p>\n</li></ul></li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Example</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color2\">@interface</code><code class=\"plain\"> TiExampleClass : NSObject {</code></div>\n<div class=\"line\"><code class=\"comments\">// ivars</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"comments\">// properties</code></div>\n<div class=\"line\"><code class=\"comments\">// methods</code></div>\n</div>\n</div>    <p>\nThe <tt class=\" \">@interface</tt> directive should not be indented, and neither should <tt class=\" \">@property</tt> or method declarations.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Protocols\">\n        <h3 class=\"heading \"><span>Protocols</span></h3>\n    <p>\nProtocols follow the same naming conventions as classes, with the following exceptions:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nProtocols which reference a <i class=\" \">behavior type</i> should end with a gerund (-ing).    </p>\n</li><li class=\" \">    <p>\nProtocols which describe a <i class=\" \">set of actions</i> should describe the functional property of these collective actions.    </p>\n</li><li class=\" \">    <p>\nProtocols which are a <i class=\" \">delegate</i> should end with the word <tt class=\" \">Delegate</tt>.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Example</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"color1\">@protocol</code><code class=\"plain\"> TiScrolling; </code><code class=\"comments\">// Gerund; behavior type is \"this object scrolls\"</code></div>\n<div class=\"line\"><code class=\"color1\">@protocol</code><code class=\"plain\"> TiFocusable; </code><code class=\"comments\">// Action set; describes actions related to \"focusing\" and \"TiFocusing\" seems inappropraite (\"this object focuses\" vs. \"this object performs actions related to focusing\")</code></div>\n<div class=\"line\"><code class=\"color1\">@protocol</code><code class=\"plain\"> TiScrollViewDelegate; </code><code class=\"comments\">// Delegate</code></div>\n</div>\n</div>    <p>\nProtocols must always include the <tt class=\" \">@required</tt> directive explicitly.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Categorynaming\">\n        <h3 class=\"heading \"><span>Category naming</span></h3>\n    <p>\nHeader files which define an interface for a category only should be named <tt class=\" \">&lt;base class&gt;+&lt;category&gt;.h</tt>.    </p>\n<ul class=\" \"><li class=\" \">    <p>\nCategories on existing classes should be named appropriately, with the category describing the set of extensions.    </p>\n</li><li class=\" \">    <p>\nCategories which are intended to describe a private API within an implementation file should be the empty category <tt class=\" \">()</tt>.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-ivars\">\n        <h3 class=\"heading \"><span>ivars</span></h3>\n    <p>\nPrefer private properties to ivars. If you do have a valid use case for an ivar, then declare them in the @implementation block (not the @interface block).    </p>\n    <p>\nInstance variables for a class should be intended one tabstop.    </p>\n    <p>\nInstance variables should be named in camelcase, and are not required to follow any other specific naming convention.    </p>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-@public,@protected,and@private\">\n        <h4 class=\"heading \"><span>@public ,  @protected , and  @private</span></h4>\n    <p>\nUse of access specifiers is discouraged (use publicly-declared and private-category <tt class=\" \">@property</tt> instead).    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-@propertyand@synthesize\">\n        <h3 class=\"heading \"><span>@property  and  @synthesize</span></h3>\n    <p>\nUse the default synthesis property of ivars. You should rarely need @synthesize.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Methods\">\n        <h3 class=\"heading \"><span>Methods</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nMethods should be named in camelcase, with the first character lowercase. Method names <strong class=\" \">must never</strong> begin with an underscore.    </p>\n</li><li class=\" \">    <p>\nThe leading method specifier (<tt class=\" \">+</tt> or <tt class=\" \">-</tt>) should not be followed by a space, and neither should the return type.    </p>\n</li><li class=\" \">    <p>\nSelector (and argument) names should not have a space after their <tt class=\" \">:</tt> character, or the type.    </p>\n</li><li class=\" \">    <p>\nIf method declarations, definitions, or calls are spread across multiple lines, their <tt class=\" \">:</tt> characters should be aligned rather than spaced on tabstops.    </p>\n</li><li class=\" \">    <p>\nThe opening brace of a method should be on its own line for implementations.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Example</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">+(</code><code class=\"keyword\">void</code><code class=\"plain\">)x:(</code><code class=\"keyword\">int</code><code class=\"plain\">)y</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n<div class=\"line\"><code class=\"plain\">-(</code><code class=\"keyword\">void</code><code class=\"plain\">)veryLongMethodName:(NSObject*)veryLongArgumentName</code></div>\n<div class=\"line\"><code class=\"plain\">                     arg2:(NSObject*)anotherArg</code></div>\n<div class=\"line\"><code class=\"plain\">                     arg3:(NSObject*)moreArg</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-init\">\n        <h4 class=\"heading \"><span>init</span></h4>\n    <p>\nEvery class must have one, and only one, designated initializer that is identified as such in a comment. The following is an example of well-written designated initializer:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Example</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// Designated initializer.</code></div>\n<div class=\"line\"><code class=\"plain\">-(instancetype)init</code></div>\n<div class=\"line\"><code class=\"plain\">{</code></div>\n<div class=\"line\"><code class=\"plain\">\tself = [</code><code class=\"keyword\">super</code><code class=\"plain\"> init];</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">if</code><code class=\"plain\"> (self) {</code></div>\n<div class=\"line\"><code class=\"plain\">        </code><code class=\"comments\">// initialization code goes here...</code></div>\n<div class=\"line\"><code class=\"plain\">    }</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> self;</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\nNote the single braces. You may wish to turn off the &quot;initializer not fully bracketed&quot; clang warning in Xcode as a result.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Blocks\">\n        <h3 class=\"heading \"><span>Blocks</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nBlock variables should never be a raw type; they should always have a <tt class=\" \">typedef</tt>associated with them and that name used as the variable type.    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<strong class=\" \">EXCEPTION:</strong> The <tt class=\" \">void (^varname)(void)</tt> block type does not require a typedef, although there are plenty of existing convenience typedefs for this block type which should be used when appropriate.    </p>\n</li></ul></li><li class=\" \">    <p>\nBlocks should have their opening brace on the same line as their <tt class=\" \">^</tt>, and their closing brace on its own line, indented with the surrounding scope.    </p>\n</li><li class=\" \">    <p>\nBlocks have their contents indented one tabstop from the surrounding scope.    </p>\n</li><li class=\" \">    <p>\nThe <tt class=\" \">void ^(void)</tt> block type should always be written as {{ ^{ ... } }}.    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">__block</tt> storage specifier objects should be used with care. Remember that if a <tt class=\" \">__block</tt> variable goes out of scope when a block tries to access it, there can be unpredictable and bad results.    </p>\n</li></ul><div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">Example</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">typedef </code><code class=\"keyword\">int</code><code class=\"plain\"> ^(intBlock)(</code><code class=\"keyword\">int</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">intBlock foo = ^(</code><code class=\"keyword\">int</code><code class=\"plain\"> foo) {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"keyword\">return</code><code class=\"plain\"> </code><code class=\"value\">2</code><code class=\"plain\">*foo;</code></div>\n<div class=\"line\"><code class=\"plain\">};</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Fastenumeration(forxiny)\">\n        <h3 class=\"heading \"><span>Fast enumeration ( for x in y )</span></h3>\n    <p>\nPrefer fast enumeration loops to other looping constructs where possible. Note that if <tt class=\" \">y</tt> is a method call, the result of it should be pre-cached. Do not write fast enumeration loops which would modify <tt class=\" \">y</tt> (whether an object or a method call) as a side-effect of the loop contents.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Filenames\">\n        <h3 class=\"heading \"><span>File names</span></h3>\n    <p>\nThe following file names are acceptable for Objective-C:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">.h</tt> (headers)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">.m</tt> (implementation files)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">.mm</tt> (Objective-C++ - use with care, see below)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">.pch</tt> (precompiled header)    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-@implementationordering\">\n        <h3 class=\"heading \"><span>@implementation  ordering</span></h3>\n    <p>\nMethods should be ordered in <tt class=\" \">@implementation</tt> in the following way:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">@synthesize</tt> directives    </p>\n</li><li class=\" \">    <p>\nDesignated initializer(s), ending with <tt class=\" \">init</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#pragma mark Private</tt> - Only required for implementations with a private category    </p>\n</li><li class=\" \">    <p>\nMethods declared in private category    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#pragma mark Public</tt> - Only required for implementations with a private category    </p>\n</li><li class=\" \">    <p>\nMethods declared in <tt class=\" \">@interface</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#pragma mark Protocol @protocol-name</tt> - Only required for classes which implement a protocol    </p>\n</li><li class=\" \">    <p>\nMethods for <tt class=\" \">@protocol</tt>, <tt class=\" \">@required</tt> first, then <tt class=\" \">@optional</tt>    </p>\n</li></ul>    <p>\nThe protocol implementation sections may be repeated as necessary.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-nilandNULL\">\n        <h3 class=\"heading \"><span>nil  and  NULL</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\nDo not mix <tt class=\" \">nil</tt> and <tt class=\" \">NULL</tt>. <tt class=\" \">NULL</tt> should only be used for C-style pointers, and <tt class=\" \">nil</tt> for all Objective-C object (and <tt class=\" \">id</tt>) types.    </p>\n</li><li class=\" \">    <p>\nIt is illegal to use a statement such as {{ if (objcObject) { ... } }}. Instead directly compare to <tt class=\" \">nil</tt>, <strong class=\" \">only where required</strong>. Remember that it is actually faster to send a message to <tt class=\" \">nil</tt> than to perform the <tt class=\" \">cmp/jmp</tt> instructions from an <tt class=\" \">if</tt> <strong class=\" \">and</strong> make a method call. This is especially true on RISC architectures like ARM.    </p>\n</li></ul>    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-BOOLtypes\">\n        <h3 class=\"heading \"><span>BOOL  types</span></h3>\n    <p>\n<tt class=\" \">BOOL</tt> types should only be assigned to from <tt class=\" \">YES</tt>, <tt class=\" \">NO</tt>, or an explicit boolean operation. Do not mix <tt class=\" \">BOOL</tt> types with C++ <tt class=\" \">boolean</tt> or the C macros <tt class=\" \">TRUE</tt> and <tt class=\" \">FALSE</tt> - doing so may lead to subtle comparator errors for truth.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-ExceptionstotheCstandard\">\n        <h3 class=\"heading \"><span>Exceptions to the C standard</span></h3>\n    <p>\nThere are a number of exceptions to the C standard, to make our Objective-C code more compatible with existing source and follow standard conventions. Any C code which is written within an Objective-C source file (<tt class=\" \">.m</tt>) must also follow these conventions, for readability purposes.    </p>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Comments\">\n        <h4 class=\"heading \"><span>Comments</span></h4>\n<ul class=\" \"><li class=\" \">    <p>\nClasses, methods, and properties are to be documented as part of their <tt class=\" \">@interface</tt>, not <tt class=\" \">@implementation</tt>.    </p>\n</li><li class=\" \">    <p>\nAnything intended to be accessible through a public API of any kind should be tagged with comments suitable for appledoc generation; see <a class=\"external-link external-link\" href=\"http://gentlebytes.com/appledoc/\" target=\"_blank\">appledoc</a> for format info. You may wish to <tt class=\" \">brew install appledoc</tt> as well.    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Orderofdeclarations\">\n        <h4 class=\"heading \"><span>Order of declarations</span></h4>\n    <p>\nRather than <tt class=\" \">namespace-contents</tt>, the basic block for an Objective-C header is <tt class=\" \">objc-contents</tt>:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">@interface</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#pragma mark &quot;@interface-name Properties&quot;</tt> (or &quot;Properties&quot; for headers with one <tt class=\" \">@interface</tt>)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">@property</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#pragma mark &quot;@interface-name Methods&quot;</tt> (or &quot;Methods&quot; for headers with one <tt class=\" \">@interface</tt>)    </p>\n</li><li class=\" \">    <p>\nClass methods    </p>\n</li><li class=\" \">    <p>\nInstance methods    </p>\n</li></ul>    <p>\nThe following is the order of declarations for an Objective-C or Objective-C++ header:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nCopyright notice    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#import</tt> headers (system, 3rd party, project)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">#include</tt> headers (system, 3rd party, project)    </p>\n</li><li class=\" \">    <p>\nmacros    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">const</tt> variables    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">enum</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">typedef</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">@protocol</tt> declarations    </p>\n</li><li class=\" \">    <p>\nC-style function declarations    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">objc-contents</tt>    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">namespace-contents</tt> (for declared namespaces in Objective-C++ headers only)    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Braces\">\n        <h4 class=\"heading \"><span>Braces</span></h4>\n    <p>\nRather than spacing a brace on a newline in C, in Objective-C there are some cases in which an opening brace is placed on the same line as the preceding statement, with a space before it:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nBlocks (see above)    </p>\n</li><li class=\" \">    <p>\nFlow control (<tt class=\" \">if</tt>/<tt class=\" \">while</tt>/<tt class=\" \">for</tt>/<tt class=\" \">do...while</tt>/<tt class=\" \">switch...case</tt>)    </p>\n</li></ul>    </div>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Variables\">\n        <h4 class=\"heading \"><span>Variables</span></h4>\n    <p>\nAll variables are named in camel-case and should not contain punctuation.    </p>\n    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-ExceptionstotheCstandard\">\n        <h3 class=\"heading \"><span>Exceptions to the C++ standard</span></h3>\n    <p>\nThere are no exceptions to the C++ standard at this time.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"30088343_Objective-CandObjective-CCodingStandards-OtherRules\">\n        <h3 class=\"heading \"><span>Other Rules</span></h3>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-3rdpartylibraries\">\n        <h4 class=\"heading \"><span>3rd party libraries</span></h4>\n    <p>\nAs with all other source, the style in 3rd party libraries should be consistent with the style there rather than any Appcelerator coding standards. This holds true even for extensions we write to them.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-Deprecatedclassesandmethods\">\n        <h4 class=\"heading \"><span>Deprecated classes and methods</span></h4>\n    <p>\nAvoid the usage of deprecated methods from standard frameworks where an alternative is available, unless it breaks backwards compatibility with a version of software that we support.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-@compatibility_alias\">\n        <h4 class=\"heading \"><span>@compatibility_alias</span></h4>\n    <p>\nDo not use the <tt class=\" \">@compatibility_alias</tt> directive unless it is explicitly required due to a conflict between external libraries to a project, or multiple internal versions required by different 3rd party libraries.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"30088343_Objective-CandObjective-CCodingStandards-pragmamark\">\n        <h4 class=\"heading \"><span>pragma mark</span></h4>\n    <p>\nUse <tt class=\" \">#pragma mark</tt> liberally to annotate sections of your code where necessary, in addition to the rules spelled out above.    </p>\n    </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30088343\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Objective-C and Objective-C++ Coding Standards"});