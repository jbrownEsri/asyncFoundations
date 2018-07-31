//XMLHTTPRequest
//XHR for short. Oldest. From Netscape originally. AJAX came around 2004-2005 with gmail.

var XHR = new XMLHttpRequest();

XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
        console.log(XHR.responseText);
    }
}

XHR.open("GET", "https://api.github.com/zen");
XHR.send();