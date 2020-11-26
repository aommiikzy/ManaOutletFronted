// let config = require('../env.json');
var testNextPage = 0;
var idUser = "";
var checkPic = "";
// if(Object.keys(functions.config()),length){
//   config = fuctions.config();
// }
//replace the real key with out key
// const API_URl = config.mana.key
// var API_URL = "https://billbillbot.herokuapp.com/api/v1/bill";

async function addValueInput() {

  // pic

  // pic
   
  var API_URL = "https://billbillbot.herokuapp.com/api/v1/bill";
    var cashInput = document.getElementById("cashInput").value;
    var transferInput = document.getElementById("transferInput").value;
    var posInput = document.getElementById("posInput").value;
    var idUSerNew = idUser;
    // console.log("cashInput = "+cashInput);
    // console.log("transferInput = "+transferInput);
    // console.log("posInput = "+posInput);
    // console.log("idUser = "+idUser);
    // console.log("idUSerNew = "+idUSerNew);


    
    var addData = {
        transferSum:transferInput, 
        cashSum:cashInput,
        posSum:posInput,
        receiptImg:idUSerNew
      };
      if(cashInput>100000||transferInput>100000||posInput>100000)
      {
        alert("Check input number should in range 0 - 100000");
      }
      else if(cashInput<0||transferInput<0||posInput<0)
      {
        alert("Check input number should in range 0 - 100000");
      }
      else{
        if(cashInput + transferInput < posInput || cashInput + transferInput > posInput){
          alert("Amount of money does not reach the expected sum")}
        testNextPage = 1;
        return  await fetch(`${API_URL}/send`, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
          body: JSON.stringify(addData)
        });
      }
}
async function runApp() {
  await liff.getProfile().then(profile => {
  // document.getElementById("pictureUrl").src = profile.pictureUrl;
  idUser = profile.userId;
  // console.log("idUser in runapp = "+idUser);
  // document.getElementById("userId").innerHTML = '<b>UserId:</b> ' + profile.userId;
  // document.getElementById("displayName").innerHTML = '<b>DisplayName:</b> ' + profile.displayName;
  // document.getElementById("statusMessage").innerHTML = '<b>StatusMessage:</b> ' + profile.statusMessage;
  // document.getElementById("getDecodedIDToken").innerHTML = '<b>Email:</b> ' + liff.getDecodedIDToken().email;


}).catch(err => console.error(err));
}
async function uploadPic()
{
  var bodyFormData = new FormData();
  const inputFile = document.querySelector('#image_upload')
  console.log(inputFile.files[0])
  bodyFormData.append('image', inputFile.files[0]);

  //Loop througt formData
  for (var data of bodyFormData.entries()) {
      console.log(data[0] + ', ' + data[1]);
  }

  // TODO: Change to your endpoint na ja
  const endpointUrl = 'https://billbillbot.herokuapp.com/api/v1/bill/upload-receipt'
  // Send request
   axios({
      method: 'post',
      url: endpointUrl,
      data: bodyFormData,
      headers: {
          'Content-Type': 'multipart/form-data'
      }
  })
      .then( await function (response) {
        document.getElementById("userId").innerHTML = '<b>Test link:</b> ' + response;
          // success
          console.log(response);
          alert('Done!')
      })
      .catch( await function (response) {
          // error
          document.getElementById("userId").innerHTML = '<b>Test link:</b> ' + response;
          console.log(response);
      });

}
async function goFinish() {

 location.href = 'finish.html';
}

async function buttonClick() {
  liff.init({ liffId: "1655240292-pqEGWAmZ" }, async() => {
  if (liff.isLoggedIn()) {
    await runApp(); 
    await addValueInput();
    if(testNextPage==1){
           location.href = 'finish.html';}
  } else {
  liff.login();
  }
}, err => console.error(err.code, error.message));
  // console.log("Here = "+testNextPage);
    // document.getElementById("carForm").style.display = "none";
    // document.getElementById("btn").style.display = "none";
    // document.getElementById("buttonload").style.display = "block";
    
    // window.clearTimeout(50)
   
   

    // console.log("Result = "+testNextPage);
  //   if(testNextPage==1){
  //      location.href = 'finish.html';}
   }
