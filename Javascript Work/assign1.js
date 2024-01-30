function add(){
    var num1 = document.getElementById(d1).value;
    var num2 = document.getElementById(d2).value;
    
    var result =parseInt(num1) * parseInt(num2);
    document.write(result);
    alert("result: " + result);
    //document.getElementById(result).innerHTML = 'result : ' + result;

}


