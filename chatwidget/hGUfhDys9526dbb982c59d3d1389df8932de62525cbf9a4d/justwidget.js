(function (){
    function getBasePath() {
        var basePath, scripts = document.getElementsByTagName('script');
        for (var i = 0; i < scripts.length; i++) {
            var script = scripts[i];
            if (script.src === undefined) { continue; }
            var srcParts = script.src.split('/');
            var lastPart = srcParts.pop().toLowerCase();
            if (lastPart === 'justwidget.js' || lastPart === 'justwidget.js?force=true') {
                basePath = srcParts.splice(0, srcParts.length - 2).join('/');
                break;
            }
        }
        return basePath;
    }
    function initJs() {
        window.JustWidgetBasePath = getBasePath();
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset="utf-8";
        window.JustWidgetAttributes = {"senderName":"Чат-виджет","options":{"headline":{"text":"Поддержка Kupikod","hide":"Hide","show":true},"names":{"assistantName":"Бот","userName":"","show":true,"operatorDefaultName":""},"captions":{"inputPlaceholder":"","loadHistory":"Load history","errorOccurred":"An error occurred","viewLog":"view log","errorLog":"Error log","copyLog":"Copy log","closeLog":"Close","imageDownload":"Close","dndLabel":"Drop file here to upload"},"showLogo":false,"logo":"","channel":null,"percentage":100,"copySource":null,"sendBtn":{"show":true},"blockForm":{"show":false},"avatar":{"show":false,"assistantAvatarUrl":"","userAvatarUrl":"","operatorAvatarUrl":"","size":24},"linkPreview":{"show":false},"fileUpload":{"show":true,"uploadErrorMessage":"","tooBigFileMessage":""},"position":"right","involvement":{"enabled":false,"events":[{"eventType":"website_time","value":30},{"eventType":"page_time","value":120}]},"bubble":{"show":false,"delay":10,"bubbletext":"","mobileBubbletext":""},"sessionByUserMessage":{"show":true,"welcomemessage":"Для начала обращения нажми кнопку «Начать»","delay":0,"buttonsShow":true,"buttons":[{"text":"Начать"}]},"positionOffset":{"bottom":24,"right":24},"palette":{"headlineBackgroundColor":"#5A9CED","headlineTextColor":"dark","chatBackgroundColor":"#FFFFFF","chatBackgroundOpacity":100,"userMessageBackgroundColor":"#CBDFF8","userMessageTextColor":"dark","botMessageBackgroundColor":"#F4F5F5","botMessageTextColor":"dark","formButtonsColor":"#5A9CED","formTextColor":"#000"},"font":"Roboto","sizes":{"font":"small","avatar":"big"},"buttonsSamePlace":false,"soundNotification":{"option":"none","sound":""},"embedmentContainer":{"id":"","enabled":false},"showCloseButton":false,"showSpinner":false,"hidePoweredByJustAI":false},"theme":"defaultv3","position":"right","percentage":100};
        window.JustWidgetName = "1000123159-kupikod_gitlab-1000123159-Mtn-20945884831";
        window.JustWidgetAccountId = "1000123159";
        window.JustWidgetToken = "hGUfhDys:9526dbb982c59d3d1389df8932de62525cbf9a4d";
        script.src = window.JustWidgetBasePath + "/s/" + window.JustWidgetAttributes.theme + "/js/index.js";
        script.dataset.origin='justwidget';

        document.body.appendChild(script);

        if (!window.JustWidgetAttributes.options.notUseStyles) {
            var style = document.createElement('link');
            style.rel = 'stylesheet';
            style.href = window.JustWidgetBasePath + "/s/" + window.JustWidgetAttributes.theme + "/css/index.css";
            style.dataset.origin='justwidget';

            document.head.appendChild(style);
        }
    }

    function addPolyfill() {
        window.JustWidgetBasePath = getBasePath();
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.charset="utf-8";
        script.src = window.JustWidgetBasePath + "/s/ie.js";
        script.dataset.origin='justwidget';
        var done = false;

        script.onload = script.onreadystatechange = function() {
            if (!done && (!this.readyState || this.readyState === 'loaded' || this.readyState === 'complete')) {

                done = true;

                initJs();

                script.onload = script.onreadystatechange = null;

            }

        };
        document.body.appendChild(script);

    };

    var isIE11 = !!window.MSInputMethodContext && !!document.documentMode;

    if(isIE11 || /Edge/.test(navigator.userAgent)){
        addPolyfill()
    }
    else{
        initJs();
    }


})();