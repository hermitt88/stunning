function applyStyle(k) {
    if (document.styleSheets) {
        var nStyles = document.styleSheets.length;
        for (var i = 0; i < nStyles; i++) {
            if (i == k) document.styleSheets[i].disabled = false;
            else document.styleSheets[i].disabled = true;
        }
    }
}