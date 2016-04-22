Ext.data.JsonP['Arrow_Configuration']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Arrow Configuration</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"43305028\" class=\"content\">\n            <h1>Arrow Configuration</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-Introduction\">Introduction</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-Example\">Example</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-Settings\">Settings</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-admin\">admin</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-apikey_development\">apikey_development</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-apikey_production\">apikey_production</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-APIKeyAuthPlugin\">APIKeyAuthPlugin</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-APIKeyAuthType\">APIKeyAuthType</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-apiPrefix\">apiPrefix</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-bodyParser\">bodyParser</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-busboy\">busboy</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-connectors\">connectors</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-cors\">cors</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-defaultConnector\">defaultConnector</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-ignoreDuplicateModels\">ignoreDuplicateModels</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-logging\">logging</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-logLevel\">logLevel</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-port\">port</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Arrow_Configuration-section-43305028_ArrowConfiguration-ssl\">ssl</a>    </p>\n</li></ul></li></ul>    <div class=\"section section-2 \" id=\"43305028_ArrowConfiguration-Introduction\">\n        <h2 class=\"heading \"><span>Introduction</span></h2>\n    <p>\nArrow uses the configuration files in the project's <tt class=\" \">conf</tt> directory to initialize the application and its connectors.  Each JavaScript file in the directory should expose an object of key-value pairs.  You may add any arbitrary key-value pair besides the one described below.  The values will be passed to any method that is passed the Arrow configuration object.  Note that the API key values and session object are auto-generated when you create a new Arrow project.    </p>\n    <p>\nFor environment-specific configuration files, add either <tt class=\" \">.development</tt> or <tt class=\" \">.production</tt> to the end of the filename.  For example, <tt class=\" \">foo.development.js</tt> will be used for the development environment, while <tt class=\" \">foo.production.js</tt> will be used for the production environment.    </p>\n    <p>\nIf multiple files set the same keys, the value from the last file loaded will be used unless its an environment-specific file.  Files are loaded based on the order returned from the OS's <tt class=\" \">readdir()</tt> method. For example, if <tt class=\" \">Foo.js</tt> and <tt class=\" \">foo.development.js</tt> set the same key, the value in <tt class=\" \">Foo.js</tt> is used since it is not environment specific.  However, if <tt class=\" \">Foo.development.js</tt> and <tt class=\" \">foo.development.js</tt> set the same key, the value from <tt class=\" \">foo.development.js</tt> is used since it is loaded last.    </p>\n    <p>\nSince Release 5.0.0, you can override the configuration file settings with an environment variable.  For the setting you want to override, prefix variable with <tt class=\" \">ARROW_</tt>.  For example, if you want to override the <tt class=\" \">apikey</tt> setting, set the <tt class=\" \">ARROW_APIKEY</tt> environment variable.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43305028_ArrowConfiguration-Example\">\n        <h2 class=\"heading \"><span>Example</span></h2>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"title\">./conf/foo.js</div>\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">module.exports = {</code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// These are generated when you create a new project</code></div>\n<div class=\"line\"><code class=\"plain\">    apikey_production: </code><code class=\"string\">'xxxxxxxxxxxxxxxxxxxxxxxxx'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">    apikey_development: </code><code class=\"string\">'yyyyyyyyyyyyyyyyyyyyyyyyy'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Selects the authorization type -- uses HTTP Basic Authorization by default</code></div>\n<div class=\"line\"><code class=\"plain\">    APIKeyAuthType: </code><code class=\"string\">'basic'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// All API paths will be prefixed with '/foo'</code></div>\n<div class=\"line\"><code class=\"plain\">    apiPrefix: </code><code class=\"string\">'/foo'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets body-parser middleware setting</code></div>\n<div class=\"line\"><code class=\"plain\">    bodyParser: {</code></div>\n<div class=\"line\"><code class=\"plain\">        limit: </code><code class=\"value\">1</code><code class=\"plain\"> * </code><code class=\"value\">1024</code><code class=\"plain\"> * </code><code class=\"value\">1024</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Sets busboy initialization settings</code></div>\n<div class=\"line\"><code class=\"plain\">    busboy: {</code></div>\n<div class=\"line\"><code class=\"plain\">        limit: {</code></div>\n<div class=\"line\"><code class=\"plain\">            fieldNameSize: </code><code class=\"value\">100</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">            fieldSize: </code><code class=\"value\">1</code><code class=\"plain\"> * </code><code class=\"value\">1024</code><code class=\"plain\"> * </code><code class=\"value\">1024</code></div>\n<div class=\"line\"><code class=\"plain\">        } </code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// Connector settings...</code></div>\n<div class=\"line\"><code class=\"plain\">    connectors: {</code></div>\n<div class=\"line\"><code class=\"plain\">        connector_name: {</code></div>\n<div class=\"line\"><code class=\"plain\">            collection: </code><code class=\"string\">'foobar'</code></div>\n<div class=\"line\"><code class=\"plain\">        },</code></div>\n<div class=\"line\"><code class=\"plain\">        another_connector: {</code></div>\n<div class=\"line\"><code class=\"plain\">            name: </code><code class=\"string\">'foobaz'</code></div>\n<div class=\"line\"><code class=\"plain\">        }</code></div>\n<div class=\"line\"><code class=\"plain\">    },</code></div>\n<div class=\"line\"><code class=\"plain\"> </code></div>\n<div class=\"line\"><code class=\"plain\">    </code><code class=\"comments\">// et cetera, et cetera, et cetera</code></div>\n<div class=\"line\"><code class=\"plain\">}</code></div>\n</div>\n</div>    <p>\n    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"43305028_ArrowConfiguration-Settings\">\n        <h2 class=\"heading \"><span>Settings</span></h2>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-admin\">\n        <h3 class=\"heading \"><span>admin</span></h3>\n    <p>\nConfigures the admin console. The <tt class=\" \">admin</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nKey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\napiDocPrefix    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nString    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n/apidoc    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPath to access the generated API docs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ncss    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArray&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nCSS files to inject to customize the styling of the Admin Console and API docs. Files must be relative to <tt class=\" \">./web/public/</tt> folder or absolute URLs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\ncustomHTMLErrorPage    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nString    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTML content to display for unauthorized access (HTTP 401 error code).    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndisableAuth    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBoolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nfalse    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSet to <tt class=\" \">true</tt> to disable authorization to access the admin console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndisableAPIDoc    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBoolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nfalse    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSet to <tt class=\" \">true</tt> to not display the generated API Docs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\nenableAdminInProduction    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBoolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSet to <tt class=\" \">true</tt> to enable the admin console in the production environment.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nenabled    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBoolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSet to <tt class=\" \">true</tt> to enable the admin console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\njs    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArray&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n-    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nJavaScript files to inject to customize the styling of the Admin Console and API docs. Files must be relative to <tt class=\" \">./web/public/</tt> folder or absolute URLs.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nprefix    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nString    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n/arrow    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nPath to access the admin console.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\nvalidEmails    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArray&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndeveloper's e-mail address    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWhen the application is in production, restrict access to the admin console to the specified accounts.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\nvalidOrgs    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArray&lt;Number&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ndeveloper's organization    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nWhen the application is in production, restrict access to the admin console to the specified organizations    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-apikey_development\">\n        <h3 class=\"heading \"><span>apikey_development</span></h3>\n    <p>\nGenerated API key used when testing the application, that is, running the application locally.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-apikey_production\">\n        <h3 class=\"heading \"><span>apikey_production</span></h3>\n    <p>\nGenerated API key used when running the application in production, that is, when it is deployed to Arrow Cloud.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-APIKeyAuthPlugin\">\n        <h3 class=\"heading \"><span>APIKeyAuthPlugin</span></h3>\n    <p>\nLocation of the authorization module if <tt class=\" \">APIKeyAuthType</tt> is set to <tt class=\" \">plugin</tt>.    </p>\n    <p>\nFor details, see <a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes\">Arrow Authentication Schemes</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-APIKeyAuthType\">\n        <h3 class=\"heading \"><span>APIKeyAuthType</span></h3>\n    <p>\nString value indicating the authorization type for the application.  By default, it is set to <tt class=\" \">basic</tt>.    </p>\n    <p>\nFor details, see <a class=\"document-link \" href=\"#!/guide/Arrow_Authentication_Schemes\">Arrow Authentication Schemes</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-apiPrefix\">\n        <h3 class=\"heading \"><span>apiPrefix</span></h3>\n    <p>\nPrefix path to use for the API requests for Models and APIs.  Each endpoint you define in a Model or API will be prefixed by this value. By default, it is set to <tt class=\" \">/api</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-bodyParser\">\n        <h3 class=\"heading \"><span>bodyParser</span></h3>\n    <p>\nConfigures body-parser middleware settings.  The <tt class=\" \">bodyParser</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nKey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nlimit    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nNumber/String    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n'1mb'    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSets the maximum request body size in bytes for the body-parser middleware.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-busboy\">\n        <h3 class=\"heading \"><span>busboy</span></h3>\n    <p>\nConfiguration object to pass to the busboy constructor, which is created when the Arrow middleware is initialized.  For properties you can set, see the <a class=\"external-link external-link\" href=\"https://www.npmjs.com/package/busboy#busboy-methods\" target=\"_blank\">busboy documentation</a>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-connectors\">\n        <h3 class=\"heading \"><span>connectors</span></h3>\n    <p>\nConfigures the connectors used by the application. The connectors field is an object of key-value pairs where the key is the name of the connector and the value is another key-value pair object used to configure the connector. The configuration object is specific to each connector.    </p>\n    <p>\nMost connectors will have their own default configuration file in the <tt class=\" \">conf</tt> directory.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-cors\">\n        <h3 class=\"heading \"><span>cors</span></h3>\n    <p>\nConfigures the CORS settings. The <tt class=\" \">cors</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nKey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\nAccess-Control-Allow-Origin    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nString    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSpecifies the URI that can access the server. Defaults to all.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nsafeHeaders    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nArray&lt;String&gt;    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nHTTP headers to expose and allow, that is, the specified value is set for <tt class=\" \">Access-Control-Expose-Headers</tt> and <tt class=\" \">Access-Control-Allow-Headers</tt>.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-defaultConnector\">\n        <h3 class=\"heading \"><span>defaultConnector</span></h3>\n    <p>\nSpecify the name of the default connector. Used if a Model does not specify one.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-ignoreDuplicateModels\">\n        <h3 class=\"heading \"><span>ignoreDuplicateModels</span></h3>\n    <p>\nSet to <tt class=\" \">true</tt> to ignore duplicate Model definitions.  Defaults to false, which will throw an error if a model definition is duplicated.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-logging\">\n        <h3 class=\"heading \"><span>logging</span></h3>\n    <p>\nConfigures the logger utility.  The <tt class=\" \">logging</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nKey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nlogdir    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nString    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n./logs    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLocation of the transaction logs if enabled.    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\ntransactionLogEnabled    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBoolean    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ntrue    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSet to <tt class=\" \">true</tt> to enable transaction logs.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-logLevel\">\n        <h3 class=\"heading \"><span>logLevel</span></h3>\n    <p>\nSets the log level for the logger utility.  Accepted values are <tt class=\" \">debug</tt>, <tt class=\" \">error</tt>, <tt class=\" \">fatal</tt>, <tt class=\" \">info</tt>, <tt class=\" \">trace</tt>, or <tt class=\" \">warn</tt>.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-port\">\n        <h3 class=\"heading \"><span>port</span></h3>\n    <p>\nSets the port number for the server if the <tt class=\" \">PORT</tt> environment variable is not set.  By default, the port is set to 8080.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"43305028_ArrowConfiguration-ssl\">\n        <h3 class=\"heading \"><span>ssl</span></h3>\n    <p>\nConfigures SSL settings for the server.  The <tt class=\" \">ssl</tt> object may contain the following key-value pairs:    </p>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nKey    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nType    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDefault    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p class=\"p1\">\nport    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nNumber    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n8443    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nSSL port number.    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    <p>\n    </p>\n    <p>\n    </p>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=43305028\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Arrow Configuration"});