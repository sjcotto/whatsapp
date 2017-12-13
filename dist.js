var jq = document.createElement('script');
jq.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js";
document.getElementsByTagName('head')[0].appendChild(jq);
jQuery.noConflict();
$ = jQuery;

var s1 = document.createElement('script');
s1.src = "https://watson-speech.mybluemix.net/bower_components/watson-speech/dist/watson-speech.js";
document.getElementsByTagName('head')[0].appendChild(s1);

var s2 = document.createElement('script');
s2.src = "https://watson-speech.mybluemix.net/bower_components/fetch/fetch.js";
document.getElementsByTagName('head')[0].appendChild(s2);

var input = document.createElement("input");
input.setAttribute('type', 'text');
input.setAttribute('id', 'output');
document.getElementsByTagName('body')[0].appendChild(input);

function isChatMessage(message) {
    if (message.__x_isSentByMe) {
        return false;
    }
    if (message.__x_isNotification) {
        return false;
    }
    if (!message.__x_isUserCreatedType) {
        return false;
    }
        return true;
}
