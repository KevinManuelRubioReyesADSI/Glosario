let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    document.getElementById("element").innerHTML = element;
    document.getElementById("index").innerHTML = index;
    document.getElementById("array").innerHTML = array;
    return element;
}, 80);