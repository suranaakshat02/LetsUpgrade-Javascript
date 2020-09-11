let Students = [
    {
        name: "Akshat",
        age: "19",
        country: "India",
        hobbies: ['draw', 'dance', 'sing']
    },
    {
        name: "Amit",
        age: "34",
        country: "texas",
        hobbies: ['play', 'write', 'dance']
    },
    {
        name: "Anant",
        age: "22",
        country: "England",
        hobbies: ['sing', 'sketch', 'run']
    },
    {
        name: "Adi",
        age: "32",
        country: "France",
        hobbies: ['draw', 'draw', 'write']
    }
];
function displayAge(Students) {
    console.log("people with the age less than 30");

    console.log("______________________________________________________________________________")
    Students.forEach(element => {
      if(element.age<30)
      {
          console.log(element);
      }
       
   });
}
function displayCountry(Students) {
    console.log("people with country as India");

    console.log("______________________________________________________________________________");
    Students.forEach(element => {
        if (element.country == "India") {
            console.log(element);
        }

    });
}
displayAge(Students);
displayCountry(Students);