let qrContentInput = document.getElementById("qr-content");
let qrGeneratorForm = document.getElementById("qr-generation-form");
let qrCode;
function generateQRCode(qrContent){
return newQRCode("qr-code",{
text: qrContent,
width: 256,
height: 256,
colorDark:"#000",
colorLight: "#fff",
correctLevel : QRCode.CorrectLevel.H
});
}
//EventListiner
qrGeneratorForm.addEventListener("submit", function (event){
//Prevent form submission
event.preventDefault();
let qrContent = qrContentInput.value;
if(qrCode == null){
//Generate code initially
qrCode = generateQRCode(qrContent);
}
else{
qrCode.makeCode(qrContent);
}
});
