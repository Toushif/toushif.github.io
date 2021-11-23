

// Script to open and close sidebar
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

function DownloadFile(fileName) {
    //Convert the Byte Data to BLOB object.
    var blobTxt = `data:application/pdf;base64,${base64}`;
    //Check the Browser type and download the File.
    var isIE = false || !!document.documentMode;
    if (isIE) {
        window.navigator.msSaveBlob(blob, fileName);
    } else {
        link = blobTxt;
        var a = document.createElement("a");
        a.setAttribute("download", fileName);
        a.setAttribute("href", link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
}

function sendMail() {
    var name = document.getElementById("message-name").value;
    var mail = document.getElementById("message-email").value;
    var body = document.getElementById("message-body").value;
    if (name && mail && body) {
        var link =
            "mailto:toushif.haq@gmail.com" +
            "?cc=" +
            "&subject=" +
            encodeURIComponent("Hi I am " + name + ", mail ID - " + mail) +
            "&body=" +
            encodeURIComponent(body);
        window.open(link);
    }
}
