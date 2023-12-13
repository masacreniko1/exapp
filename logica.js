function isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

var downloadButton = document.getElementById('downloadButton');
var deviceMessage = document.getElementById('deviceMessage');

if (isMobile()) {

    deviceMessage.innerHTML = "Estás usando un dispositivo móvil. Puedes descargar la aplicación.";
} else {

    deviceMessage.innerHTML = "Estás usando un PC.";
}