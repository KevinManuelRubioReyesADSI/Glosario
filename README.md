# for each

```javascript
let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

document.getElementById("demo").innerHTML = sum;

function myFunction(item) {
  sum += item;
}
```

------

## map

```js
let arr = [2, 3, 5, 7]

arr.map(function(element, index, array){
    document.getElementById("element").innerHTML = element;
    document.getElementById("index").innerHTML = index;
    document.getElementById("array").innerHTML = array;
    return element;
}, 80);
```

