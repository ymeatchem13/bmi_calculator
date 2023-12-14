var showMetricDisplay = true;

(function(window, document, undefined) {
    
    window.onload = init;

    function init() {
        document.getElementById("metricChkbox").checked = true;
        document.getElementById("imperialChkbox").checked = false;

        document.getElementById("imperial").style.display = 'none';
    }
})(window, document, undefined);

function onCheckboxChanged() {
    if (showMetricDisplay) {
        document.getElementById("metric").style.display = 'none';
        document.getElementById("imperial").style.display = 'flex';
        document.getElementById("metricChkbox").checked = false;
        document.getElementById("form").style.height = '90%';
    }
    else {
        document.getElementById("metric").style.display = 'flex';
        document.getElementById("imperial").style.display = 'none';
        document.getElementById("imperialChkbox").checked = false;
        document.getElementById("form").style.height = '85%';
    }

    showMetricDisplay = !showMetricDisplay;
}