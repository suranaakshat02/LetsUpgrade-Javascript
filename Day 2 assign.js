                
//  1. Program to search for a particular character in a string 
let str = "hello i am akshat surana" 
let index=str.indexOf("a")
console.log(index);

// 2.Program to convert minutes into seconds.
let minute = 5;
let seconds = minute*60;
console.log(seconds);

// 3. Program to search for a element in  array of strings.
let arr =["apple","banana","orange","kiwi","grapes"]
console.log(arr.indexOf("kiwi"));

//  4. Program to display only elements containing 'a' in them from an array.
let data=["apple","banana","orange","kiwi","grapes"]
for(let i=0;i<data.length;i++)
{
           if(data[i].includes("a"))
        {
            console.log(data[i])
        }
}

//5. Print an array in reverse order.
let array=[0,1,2,3,4,5]
for(let i =array.length-1; i>=0 ; i--){
    console.log(array[i])
}