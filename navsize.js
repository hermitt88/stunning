window.onscroll = function() {
    if (window.pageYOffset > 70) {
        this.document.getElementById("topNav").style.backgroundColor="white";
        this.document.getElementById("topNav").style.height="50px";
        this.document.getElementById("headerLogo").style.margin="0 10px";
        this.document.getElementById("navBox").style.padding="0 10px";
    } else {
        this.document.getElementById("topNav").style.backgroundColor="";
        this.document.getElementById("topNav").style.height="70px";
        this.document.getElementById("headerLogo").style.margin="10px";
        this.document.getElementById("navBox").style.padding="10px";
    }
};