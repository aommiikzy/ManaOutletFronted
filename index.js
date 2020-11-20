

const API_URL = 'https://billbillbot.herokuapp.com/api/v1/bill';
async function addValueInput() {
   
    var cashInput = document.getElementById("cashInput").value;
    var transferInput = document.getElementById("transferInput").value;
    var posInput = document.getElementById("posInput").value;

    var addData = {
        transferSum:transferInput, 
        cashSum:cashInput,
        posSum:posInput,
        
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
      
      return  await fetch(`${API_URL}/send`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(addData)
      });
     
      }

   


}
async function goFinish() {

 location.href = 'finish.html';
}
async function buttonClick() {

    document.getElementById("carForm").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("buttonload").style.display = "block";
    
    window.clearTimeout(50)
   
    await addValueInput();
    location.href = 'finish.html';
   }






