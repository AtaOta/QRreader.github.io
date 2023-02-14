const html5Qrcode = new Html5Qrcode('reader');
const qrCodeSuccessCallback = (decodedText, decodedResult) =>{
    alert(decodedResult)
    if(decodedText){
        document.getElementById('show').style.display = 'block';
        document.getElementById('result').innerText = decodedText;
        html5Qrcode.stop();
    }
}
const config = {fps:10, qrbox:{width:250, height:250}}
html5Qrcode.start({facingMode:"environment"}, config, qrCodeSuccessCallback);