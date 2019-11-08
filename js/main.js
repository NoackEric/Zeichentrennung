function check(){
    let stringVal=document.getElementById("text").value;
   
    let positionVal=document.getElementById("position").value;
    
    let result=document.getElementById("result");
    
    let radio=document.getElementsByName("trennung")
    console.log(radio)
    for (let i=0;i<radio.length;i++){

        if(radio[i].checked){

            if(radio[i].value=="trennung"){    

                result.innerHTML=stringVal.slice(0,stringVal.indexOf(positionVal))
               
            } else{

                result.innerHTML=stringVal.slice(stringVal.indexOf(positionVal))
            }
        } 
    }
    
}
