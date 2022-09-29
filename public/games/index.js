function openGame() {
    var win = window.open() 
    var url = "https://lunarstars.cf/"
    var iframe = win.document.createElement('iframe')
    iframe.style.width = "100%  ";
    iframe.style.height = "100%";
    iframe.style.position = "fixed";
    iframe.style.top = "0";
    iframe.style.bottom = "0";
    iframe.style.left = "0";
    iframe.style.left = "0";
    iframe.style.border = "none";
    iframe.style.backgroundcolor = "black"
    iframe.src = url
    win.document.body.appendChild(iframe)
    }