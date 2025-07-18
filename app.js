let guess =prompt("enter the number");
let num =Math.floor((Math.random()*guess)) +1;
let choice = prompt("tell what would be the answer");
while(true){
    if(choice == "exit"){
        break;
    }
    else if(num==choice){
        console.log("the number you predicted is correct :",num);
        break;
    }
    else if(num<choice){
        choice=prompt("the number is smaller think again");
    }
    else if(num>choice){
        choice = prompt("the number is greater think again");
    }
    
}
