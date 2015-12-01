Ext.data.JsonP['Audio_APIs']({"guide":"<?xml version=\"1.0\" encoding=\"UTF-8\" ?>\n<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\"\n        \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\n<head>\n    <title>Audio APIs</title>\n\n    <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"/>\n    <meta content=\"Scroll EclipseHelp Exporter\" name=\"generator\"/>\n\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\"/>\n    <link type=\"text/css\" rel=\"stylesheet\" media=\"print\"/>\n</head>\n<body>\n    <div class=\"container\">\n        <div class=\"header\"/>\n\n        <div id=\"29004910\" class=\"content\">\n            <h1>Audio APIs</h1>\n<ul class=\"toc-indentation \"><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Audio_APIs-section-29004910_AudioAPIs-Playingbasicsounds\">Playing basic sounds</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Audio_APIs-section-29004910_AudioAPIs-Streamingaudio\">Streaming audio</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Audio_APIs-section-29004910_AudioAPIs-Recordingaudio\">Recording audio</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Audio_APIs-section-29004910_AudioAPIs-Hands-onPractice\">Hands-on Practice</a>    </p>\n</li><li class=\" \">    <p>\n<a class=\"document-link \" href=\"#!/guide/Audio_APIs-section-29004910_AudioAPIs-ReferencesandFurtherReading\">References and Further Reading</a>    </p>\n</li></ul>    <div class=\"section section-2 \" id=\"29004910_AudioAPIs-Objective\">\n        <h2 class=\"heading \"><span>Objective</span></h2>\n    <p>\nIn this chapter, you'll learn how to play and record sounds. As with images, you'll see you can play both local and remote sound files, and have programmatic control over that playback.    </p>\n    </div>\n    <div class=\"section section-2 \" id=\"29004910_AudioAPIs-Contents\">\n        <h2 class=\"heading \"><span>Contents</span></h2>\n    <p>\nThe audio APIs are part of the larger <tt class=\" \">Ti.Media</tt> module, which contains all the APIs for media-related functionality. Sound related APIs in that module are available in the following namespaces:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">Ti.Media.Sound</tt> - used for playing basic sounds    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Ti.Media.AudioPlayer</tt> - used for streaming audio to the device and low-level control of the audio playback    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">Ti.Media.AudioRecorder</tt> - used for recording audio from the device microphone    </p>\n</li></ul>    <div class=\"section section-3 \" id=\"29004910_AudioAPIs-Playingbasicsounds\">\n        <h3 class=\"heading \"><span>Playing basic sounds</span></h3>\n    <p>\nYou can use the <tt class=\" \">Ti.Media.Sound</tt> object to add beeps and other user-feedback sounds. You can also use it for ambient sounds (that play in the background while the app is active). Keep in mind though that with the Sound object, the entire sound file is loaded into memory before it's played. This increases memory use in your app. It also creates a delay before the sound can be played the first time (while the file is being read into memory). You can set <tt class=\" \">sound.preload=true</tt> to preload the sound, but there's still that delay as the file is read into memory.    </p>\n    <p>\nThe Sound object includes a few useful methods, including <tt class=\" \">play()</tt>, <tt class=\" \">pause()</tt>, and <tt class=\" \">stop()</tt>. The <tt class=\" \">url</tt> property accepts a local file path or a URL to a remote sound file. (The entire sound file must be downloaded before it can be played; it won't be streamed). You can control the volume with either the <tt class=\" \">setVolume()</tt> method or by setting the <tt class=\" \">volume</tt> property. See the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Media.Sound\">API docs</a> for full information.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"comments\">// create the sound/media object</code></div>\n<div class=\"line\"><code class=\"plain\">var sound = Titanium.Media.createSound({</code></div>\n<div class=\"line\"><code class=\"plain\">\turl: </code><code class=\"string\">'your_sound_file.mp3'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\tpreload: </code><code class=\"keyword\">true</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">var button = Ti.UI.createButton({</code></div>\n<div class=\"line\"><code class=\"plain\">\ttitle: </code><code class=\"string\">'Click to play sound'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\twidth:</code><code class=\"string\">'200'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\theight:</code><code class=\"string\">'40'</code><code class=\"plain\">,</code></div>\n<div class=\"line\"><code class=\"plain\">\ttop:</code><code class=\"value\">20</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">button.addEventListener(</code><code class=\"string\">'click'</code><code class=\"plain\">, function() {</code></div>\n<div class=\"line\"><code class=\"plain\">\tsound.play();</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    <p>\nIn this sample, we attached an event listener to a button so that the sound plays when the button is clicked. You could add an event listener to a view or window (say, to watch for the <tt class=\" \">open</tt> event) to play the sound while that component is visible. Typically, you'd attach a listener to another component, such as a different view or window, to stop the sound when the window loses focus. This sort of &quot;background&quot; sound won't continue playing when the app closes unless you set <tt class=\" \">allowBackground=true</tt>, though any buffered portion might continue to play after the app closes.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004910_AudioAPIs-Streamingaudio\">\n        <h3 class=\"heading \"><span>Streaming audio</span></h3>\n    <p>\nYou can stream audio from a web URL with the <tt class=\" \">Ti.Media.AudioPlayer</tt> object. The AudioPlayer supports pseudo-streaming (of MP3 or other files) as well as <a class=\"external-link external-link\" href=\"http://developer.apple.com/library/ios/#documentation/networkinginternet/conceptual/streamingmediaguide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40008332-CH1-DontLinkElementID_39\" target=\"_blank\">HTML Live Streaming</a>. You could also implement HTML live streaming with a WebView, but the native player gives you easier programmatic control and handling of events within your app's native (non-HTML) code.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">var streamer = Ti.Media.createAudioPlayer({</code></div>\n<div class=\"line\"><code class=\"plain\">\turl: </code><code class=\"string\">'http://example.com/somefile.mp3'</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">streamer.start();</code></div>\n</div>\n</div>    <p>\nWhen using streaming, you should make sure to account for interruptions, such as receiving a phone call while the audio plays. You can pause and resume the audio automatically by watching a couple of app-level events.    </p>\n<div xmlns=\"http://www.w3.org/1999/xhtml\" class=\"confbox programlisting scroll-unprocessed\">\n<div class=\"defaultnew syntaxhighlighter\">\n<div class=\"line\"><code class=\"plain\">Titanium.App.addEventListener(</code><code class=\"string\">'pause'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// app is paused during phone call, so pause the stream</code></div>\n<div class=\"line\"><code class=\"plain\">    streamer.setPaused(</code><code class=\"keyword\">true</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// you could also use streamer.pause()</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n<div class=\"line\"><code class=\"plain\">Titanium.App.addEventListener(</code><code class=\"string\">'resume'</code><code class=\"plain\">, function(e) {</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// app resumes when call ends, so un-pause the stream</code></div>\n<div class=\"line\"><code class=\"plain\">    streamer.setPaused(</code><code class=\"keyword\">false</code><code class=\"plain\">);</code></div>\n<div class=\"line\"><code class=\"plain\">\t</code><code class=\"comments\">// or use streamer.start()</code></div>\n<div class=\"line\"><code class=\"plain\">});</code></div>\n</div>\n</div>    </div>\n    <div class=\"section section-3 \" id=\"29004910_AudioAPIs-Recordingaudio\">\n        <h3 class=\"heading \"><span>Recording audio</span></h3>\n    <p>\nYou can record audio from the device's microphone using the <tt class=\" \">Ti.Media.AudioRecorder</tt> object. This object includes a few useful methods, including <tt class=\" \">start()</tt>, <tt class=\" \">pause()</tt>/<tt class=\" \">resume()</tt>, and <tt class=\" \">stop()</tt>. It also has two key properties that you use to control the quality and size of the recorded audio data. These are:    </p>\n<ul class=\" \"><li class=\" \">    <p>\n<tt class=\" \">compression</tt> - which specifies the compression type, such as <tt class=\" \">Ti.Media.AUDIO_FORMAT_ULAW</tt> (low-fidelity) or <tt class=\" \">Ti.Media.AUDIO_FORMAT_LINEAR_PCM</tt> (hi-fi, but creates larger files)    </p>\n</li><li class=\" \">    <p>\n<tt class=\" \">format</tt> - which specifies the file format type, such as <tt class=\" \">Ti.Media.AUDIO_FILEFORMAT_WAVE</tt>    </p>\n</li></ul>    <p>\nSee the <a class=\"external-link external-link\" href=\"#!/api/Titanium.Media\"><tt class=\" \">Media</tt> object API docs</a> for a complete list of compression and format types available in Titanium. See the Kitchen Sink <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/sound_record.js\" target=\"_blank\">sound_record.js</a> example to see how you can record audio and control options for that recording.    </p>\n    </div>\n    <div class=\"section section-3 \" id=\"29004910_AudioAPIs-Hands-onPractice\">\n        <h3 class=\"heading \"><span>Hands-on Practice</span></h3>\n    <div class=\"section section-4 \" id=\"29004910_AudioAPIs-Goal\">\n        <h4 class=\"heading \"><span>Goal</span></h4>\n    <p>\nIn this activity, you will write a simple app that will play basic sounds and stream a remote sound file. You'll add a button that when clicked will play a short &quot;beep&quot; tone. You'll add another button that when clicked will stream a sound file. You'll also add a sound that plays when a window is active and stops when it loses focus.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004910_AudioAPIs-Resources\">\n        <h4 class=\"heading \"><span>Resources</span></h4>\n    <p>\nTo perform the steps in this activity, you will need two sound files. You can use your own, select sounds from a source like <a class=\"external-link external-link\" href=\"http://www.freesound.org\" target=\"_blank\">http://www.freesound.org</a>, or download these sounds (from freesound.org): <a class=\"external-link external-link\" href=\"http://wiki.appcelerator.org/download/attachments/19202905/2156__nicstage__lightswitchimpact.mp3\" target=\"_blank\">button sound</a> and <a class=\"external-link external-link\" href=\"http://wiki.appcelerator.org/download/attachments/19202905/25921__suonho__funkysynth-retweek-talkboxer-wha-116bpm.mp3\" target=\"_blank\">window sound</a> (right-click those links and choose Save). You'll also access a remote mp3 file from freesound.org, so the simulator/emulator or your test device will need network access.    </p>\n    </div>\n    <div class=\"section section-4 \" id=\"29004910_AudioAPIs-Steps\">\n        <h4 class=\"heading \"><span>Steps</span></h4>\n<ol class=\" \"><li class=\" \">    <p>\nCreate a new Titanium Mobile app. You can keep the starting code for this app; you'll modify what's there.    </p>\n</li><li class=\" \">    <p>\nRemove <tt class=\" \">label1</tt> (it's definition, and the <tt class=\" \">win1.add()</tt> statement). In its place, add a button with these characteristics:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nTitle: Click to play sound    </p>\n</li><li class=\" \">    <p>\nWidth/height: 200 x40    </p>\n</li><li class=\" \">    <p>\nTop: 20    </p>\n</li></ul></li><li class=\" \">    <p>\nDefine a sound object that preloads the sounds/2156__nicstage__lightswitchimpact.mp3 file.    </p>\n</li><li class=\" \">    <p>\nAdd an event listener to the button that plays the sound when the button is clicked.    </p>\n</li><li class=\" \">    <p>\nAdd another button to win1 with these characteristics:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nTitle: Click to stream sound    </p>\n</li><li class=\" \">    <p>\nWidth/height: 200 x40    </p>\n</li><li class=\" \">    <p>\nTop: 75    </p>\n</li></ul></li><li class=\" \">    <p>\nDefine an AudioPlayer that will stream the sound at <a class=\"external-link external-link\" href=\"http://www.freesound.org/data/previews/2/2686_5150-lq.mp3\" target=\"_blank\">http://www.freesound.org/data/previews/2/2686_5150-lq.mp3</a><br/>Add an event listener to your streaming button so that when the button is clicked:    </p>\n<ul class=\" \"><li class=\" \">    <p>\nIf the streaming player is not playing currently, start the stream and change the button's title to 'Click to pause stream'    </p>\n</li><li class=\" \">    <p>\nIf the streaming player is playing, pause the stream and change the button's title back to 'Click to stream sound'    </p>\n</li></ul></li><li class=\" \">    <p>\nAdd the app event listeners to pause the stream and restart in the case a call is received during streaming.    </p>\n</li><li class=\" \">    <p>\nOn win2, create a looping, preloaded sound that will play the sounds/25921__suonho__funkysynth-retweek-talkboxer-wha-116bpm.mp3 file.    </p>\n</li><li class=\" \">    <p>\nAdd an event listener to the tab group that monitors the <tt class=\" \">focus</tt> event. If the tab index is 0 (the first tab), pause the sound. Otherwise, play the sound. This will play the sound when tab 2 is displayed and pause it when tab 1 is active.    </p>\n</li><li class=\" \">    <p>\nBuild and test the app in the simulator/emulator.    </p>\n</li></ol>    </div>\n    </div>\n    <div class=\"section section-3 \" id=\"29004910_AudioAPIs-ReferencesandFurtherReading\">\n        <h3 class=\"heading \"><span>References and Further Reading</span></h3>\n<ul class=\" \"><li class=\" \">    <p>\n<a class=\"external-link external-link\" href=\"http://assets.appcelerator.com.s3.amazonaws.com/app_u/ebook/7.1_audio.zip\" target=\"_blank\">Finished code</a>    </p>\n</li><li class=\" \">    <p>\nKitchen Sink sound <a class=\"external-link external-link\" href=\"https://github.com/appcelerator/KitchenSink/blob/master/Resources/examples/\" target=\"_blank\">examples</a> all begin with &quot;sound&quot;    </p>\n</li><li class=\" \">    <p>\nThe <a class=\"external-link external-link\" href=\"#!/api/Titanium.Media\"><tt class=\" \">Media</tt> object API docs</a>    </p>\n</li></ul>    </div>\n    </div>\n    <div class=\"section section-2 \" id=\"29004910_AudioAPIs-Summary\">\n        <h2 class=\"heading \"><span>Summary</span></h2>\n    <p>\nIn this chapter, you learned how to play and record sounds. You saw you can play both local and remote sound files, and have programmatic control over that playback.    </p>\n    </div>\n        </div><a id=\"editButton\" href=\"https://wiki.appcelerator.org/pages/editpage.action?pageId=29004910\"><span>Edit</span></a>\n    \n        <div class=\"footer\">\n            Created with <a href=\"http://k15t.com/display/web/Scroll-Wiki-EclipseHelp-Exporter-for-Confluence\" target=\"_blank\">Scroll EclipseHelp Exporter for Confluence</a>.\n        </div>\n    </div>\n</body>\n</html>\n","title":"Audio APIs"});