function cal(clicked_id){
    var firstNum,secondNum,results,add,sub,mul,div;
    firstNum = Number(document.getElementById("firstNum").value)
    secondNum =Number(document.getElementById("secondNum").value)

    switch(clicked_id){
        case "add":
            document.getElementById("res").innerHTML= firstNum+secondNum;
            break
        
        case "sub":
            document.getElementById("res").innerHTML= firstNum-secondNum;
            break
        case "mul":
            document.getElementById("res").innerHTML= firstNum*secondNum;
            break
        case "div":
            document.getElementById("res").innerHTML= firstNum/secondNum;
            break
        default:
            document.getElementById("res").innerHTML= "Enter valid number";

    }
   
}

function reset(){
    document.getElementById("firstNum").value=""
    document.getElementById("secondNum").value=""
    document.getElementById("res").value=" "
}

