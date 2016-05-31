Ext.data.JsonP['Ruble_environment_variables']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Ruble environment variables</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"30083235\" class=\"content\">\n            <h1>Ruble environment variables</h1>\n    <div class=\"section section-2 \" id=\"30083235_Rubleenvironmentvariables-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Ruble_environment_variables-section-30083235_Rubleenvironmentvariables-Overview\">Overview</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Ruble_environment_variables-section-30083235_Rubleenvironmentvariables-Referencinganenvironmentvariable\">Referencing an environment variable</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Ruble_environment_variables-section-30083235_Rubleenvironmentvariables-Settinganenvironmentvariable\">Setting an environment variable</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Ruble_environment_variables-section-30083235_Rubleenvironmentvariables-TextMateEnvironmentVariables\">TextMate Environment Variables</a>    </p>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Ruble_environment_variables-section-30083235_Rubleenvironmentvariables-CurrentEditor\">Current Editor</a>    </p>\n</li></ul></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083235_Rubleenvironmentvariables-Overview\">\n        <h2 class=\"heading \"><span>Overview</span></h2>\n    <p>\nRubles can reference environment variables during execution, and developers can contribute new environment variables as well.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083235_Rubleenvironmentvariables-Referencinganenvironmentvariable\">\n        <h2 class=\"heading \"><span>Referencing an environment variable</span></h2>\n    <p>\nEnvironment variables are available through a hash. There are two methods of accessing them, depending on how they are used in the Ruby code:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIn statements: <tt class=\" \">filepath.sub(ENV['TM_PROJECT_DIRECTORY'], '') : File.basename(filepath)</tt>    </p>\n</li><li class=\" \">    <p>\nInside strings: <tt class=\" \">rspec_merb_gem = (Dir[&quot;#{ENV['TM_PROJECT_DIRECTORY']}/gems/gems/rspec*&quot;].first || ''))</tt>    </p>\n</li></ul>    <p>\nNote the usage of <tt class=\" \">#ENV['keyname']</tt> inside strings.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"30083235_Rubleenvironmentvariables-Settinganenvironmentvariable\">\n        <h2 class=\"heading \"><span>Setting an environment variable</span></h2>\n    <p>\nYou can also set variables into the same hash:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIn Ruby code: <tt class=\" \">ENV['TM_DATE'] = Time.now.strftime(&quot;%Y-%m-%d&quot;)</tt>    </p>\n</li><li class=\" \">    <p>\nExample:    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">template </code><code class=\"string\">\"XXX Template\"</code><code class=\"plain\"> </code><code class=\"keyword\">do</code><code class=\"plain\"> |t|</code></div>\n<div class=\"line\"><code class=\"plain\">  t.filetype = </code><code class=\"string\">\"*.xxx\"</code></div>\n<div class=\"line\"><code class=\"plain\">  t.invoke </code><code class=\"keyword\">do</code><code class=\"plain\"> |context|</code></div>\n<div class=\"line\"><code class=\"plain\">    ENV[</code><code class=\"string\">'TM_DATE'</code><code class=\"plain\">] = Time.now.strftime(</code><code class=\"string\">\"%Y-%m-%d\"</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    raw_contents = IO.read(</code><code class=\"string\">\"#{File.dirname(ENV['TM_BUNDLE_SUPPORT'])}/templates/yyy.xxx\"</code><code class=\"plain\">)</code></div>\n<div class=\"line\"><code class=\"plain\">    raw_contents.gsub(/\\$\\{([Creating a </code><code class=\"keyword\">new</code><code class=\"plain\"> template^}]*)\\}/) {|match| ENV[match[</code><code class=\"value\">2</code><code class=\"plain\">..-</code><code class=\"value\">2</code><code class=\"plain\">]] }</code></div>\n<div class=\"line\"><code class=\"plain\">  end</code></div>\n<div class=\"line\"><code class=\"plain\">end</code></div>\n</div>\n</div></li></ul>    </div>\n    <div class=\"section section-2 \" id=\"30083235_Rubleenvironmentvariables-TextMateEnvironmentVariables\">\n        <h2 class=\"heading \"><span>TextMate Environment Variables</span></h2>\n    <div class=\"section section-3 \" id=\"30083235_Rubleenvironmentvariables-CurrentEditor\">\n        <h3 class=\"heading \"><span>Current Editor</span></h3>\n    <div class=\"tablewrap\">\n        <table class=\"confluenceTable\">\n        <thead class=\" \">    <tr>\n            <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nVariable    </p>\n            </td>\n                <td class=\"confluenceTh\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDescription    </p>\n            </td>\n        </tr>\n</thead><tfoot class=\" \"/><tbody class=\" \">    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_BUNDLE_PATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAbsolute path to the root of the ruble directory    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_BUNDLE_SUPPORT    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAbsolute path to the lib sub-dir of the ruble    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_CARET_LINE_NUMBER    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nLine number where the caret is in the active editor (1-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_CARET_LINE_TEXT    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nText of the line where the caret is in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_CARET_OFFSET    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOffset of the caret in the active editor, from beginning of the file (0-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_COLUMN_NUMBER    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\ncaret_column + 1    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_COMMENT_END    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nend characters used when wrapping comment, i.e. '*/' - may not exist for pair because there's only start characters (i.e. // or #)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_COMMENT_START    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nstart characters used when wrapping comment, i.e. '// ', '# ', '/*'    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_CURRENT_LINE    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nText of the current line in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_DIRECTORY    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAbsolute path of the parent directory of the file in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_EMAIL    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nemail address of current user    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_FILENAME    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nJust the filename (basename) of the file in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_FILEPATH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAbsolute path of the file in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_FULLNAME    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nFull name of current user    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_INPUT_START_COLUMN    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOffset inside the line, from beginning of line (1-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_INPUT_START_LINE    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTION_START_LINE_NUMBER    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_INPUT_START_LINE_INDEX    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOffset inside the line, from beginning of line (0-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_LINE_INDEX    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOffset inside the line, from beginning of line (0-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_LINE_NUMBER    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nline number where selection begins in active editor (lines are 1-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_NEW_FILE    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAbsolute path to new file    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_NEW_FILE_BASENAME    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nBasename of the new file    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_NEW_FILE_DIRECTORY    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nDirectory containing the new file    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_RUBY    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nOverride pointer to ruby executable to use    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTED_FILE    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nAbsolute path of the file in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTED_TEXT    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nactual text selected in the active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTION_END_LINE_NUMBER    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nline number where selection ends in active editor (lines are 1-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTION_LENGTH    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nlength of selected text in active editor    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTION_OFFSET    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\noffset of beginning of selection inside active editor (from beginning of file, 0-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SELECTION_START_LINE_NUMBER    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nline number where selection begins in active editor (lines are 1-based)    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_SOFT_TABS    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\n&quot;YES&quot; = use spaces for tabs, &quot;NO&quot; = use tab character    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nTM_TAB_SIZE    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nnumber of spaces to represent a tab/indent level, typically 4, 2 for ruby code    </p>\n            </td>\n        </tr>\n    <tr>\n            <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nUSER    </p>\n            </td>\n                <td class=\"confluenceTd\" rowspan=\"1\" colspan=\"1\">\n        <p>\nshortname for current user, i.e 'cwilliams'    </p>\n            </td>\n        </tr>\n</tbody>        </table>\n            </div>\n    </div>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=30083235\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Ruble environment variables"});