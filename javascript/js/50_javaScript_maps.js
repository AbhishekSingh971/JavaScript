// Maps in javaScript : We can use any type of key or value

const myMap = new Map();

const key1 = 'myStr', key2 = {}, key3 = function(){};

//Setting map values
myMap.set(key1, 'This is a string');
myMap.set(key2, 'This is a blank obj');
myMap.set(key3, 'This is a empty function');
console.log(myMap);

//Getting the values from a Map
let value1 = myMap.get(key1);
console.log(value1);


// get the size of the map
console.log(myMap.size);

// You can loop using for...of to get keys and values
for(let [key,value] of myMap){
    console.log(key,value);
}

// get only keys 
for (let key of myMap.keys()){
    console.log('key is ',key);
    
}

// get only values 
for (let value of myMap.keys()){
    console.log('value is ',value);
    
}

// you can loop through a map using for each loop
myMap.forEach((value,key)=>{
    console.log('key is',key);
    console.log('value is',value);
    
})

//Converting map to an array
let myArray = Array.from(myMap);
console.log('Map to array is ',myArray);

//Converting map keys to an array
let myKeyArray = Array.from(myMap.keys);
console.log('Map to array is ',myKeyArray);

//Converting map values to an array
let myValueArray = Array.from(myMap.values);
console.log('Map to array is ', myValueArray);
