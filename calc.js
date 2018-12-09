var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var form = document.getElementById("x%y");

form.addEventListener('submit',function(event) {
    //result.value = num1 / num2 * 100;
    
    if (!num1.value || !num2.value){
        alert("Please eneter values");
    } else {
        var x = parseFloat(num1.value);
        var y = parseFloat(num2.value);
        
        var percent = x / y * 100;
        
        result.innerText = "Answer: " + percent + "%";
        
        event.preventDefault();
        //dodatkowa linia a teraz zrobimy konflikt
    }
    
    
    
});

//num1.value = "iiii";
//result.innerText = "????";
//alert(num1.value);