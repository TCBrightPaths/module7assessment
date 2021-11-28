//SumZero
//Write a function that takes in an (array of nums)
    //create a falsy variable 
    //for each element i starting at zero iterating through the array &
        //for each element j starting at zero iterating through the array
            //if i & j does are not equal 
                //then if i + j equals 0
                    //change falsy variable to truthy
            //otherwise 
                //return the falsy variable above

let arr1 = [1, 4, 11, 2, 37, (-4)];
let arr2 = [0, 21, 33, 6, 0, (-9)];
let arr3 = [0, 1, 2, 3, 4, 5];
 
const sumZero = (array) => {
    let value = "False"
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i !== j) {
                if (array[i] + array[j] === 0) {
                    value = "True"
                } 
            }
        }
    }
    console.log(value)
}
//sumZero(arr3) //--> In terms of Big O, the time complexity of this function is O(n^2), and its space complexity is quadratic. It actually took a total time of 20 ms but this would not scale well.


//hasUniqueChars
//Write a function that takes in a (word)
    //create an array to hold the letters of the word
    //Iterate over the word starting at position 0 for the length of the word
        //push each letter into a new array
    //If new Array matches word
        //return true
    //Otherwise
        //return false
    
let hasUniqueChars = (word) => {
    let uniqueChars = new Set([])
    for (let i = 0; i < word.length; i++) {
        uniqueChars.add(word[i])
    }
    if(uniqueChars.size === word.length) {
        console.log(true)
    } else {
        console.log(false)
    }
}

//hasUniqueChars("Moonday") //--> Big O time complexity for hasUniqueChars is O(n), and the space complexity is linear. Similar to sumZero, this might not scale well, but it is definitely faster. It took 10 ms.


//isPangram
//Write a function that takes in a (str)
    //create alphabet variable
    //if the string matches all of the characters in the alphabet
        //return true
    //otherwise
        //return false

alphabets = 'abcdefghijklmnopqrstuvwxyz'.split("");

const isPangram = (string) => {
    string = string.toLowerCase();
    return alphabets.every(x => string.includes(x));
}
//console.log(isPangram("I like cats but not mice")) //--> Since isPangram still relies on traversing a strin, I would still say that is has a complexity of O(n) and a linear space complexity. In terms of seconds, it only took 1.32ms, but I think this would depend on the length of the string. 


//findLongestWord
//Write a function that takes in an (array)
    //initialize a variable to hold the length
    //for each element in the array
        //if the current index is greater than length
            //change length to that index's length
        //otherwise 
            //move to the next one
    //return the length

const findLongestWord = (arr) => {
    let length = 0
    for(let i in arr) {
        if(arr[i].length > length) {
            length = arr[i].length
        }
        else {
            i++
        }
    }
    console.log(length)
}
//findLongestWord(["hi", "hello"]) //--> Again, this function only took 11.7ms to compute even though it has a time complexity of O(n) and is linear several others. The array was small, only containing two words. If the array were larger, the amount of time would increase. 
console.time()
findLongestWord(["hi", "hello"])
console.timeEnd()