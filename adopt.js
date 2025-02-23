const allDogs = [
    { dogName: "Dallas", breed: "Pit Bull/Mix", age: 3, month: 8 },
    { dogName: "Luna Lovegood", breed: "Terrier, American Pit Bull/Mix", age: 4, month: 0 },
    { dogName: "Marley", breed: "Retriever, Labrador/Mix", age: 9, month: 0 },
    { dogName: "Piper", breed: "Terrier, Pit Bull/Mix", age: 3, month: 0 },
    { dogName: "Ashton", breed: "Terrier, American Pit Bull/Mix", age: 3, month: 8 },
    { dogName: "Axel", breed: "Terrier, American Pit Bull/Mix", age: 2, month: 6 },
    { dogName: "Bama", breed: "Siberian Husky/Mix", age: 6, month: 0 },
    { dogName: "Bane", breed: "Rottweiler/Mix", age: 9, month: 0 },
    { dogName: "Bea", breed: "Terrier, American Pit Bull/Mix", age: 2, month: 1 },
    { dogName: "Beanie", breed: "Pit Bull/Hound", age: 3, month: 1 }
];


let selectedDogs = [];


function showInfo(age) {
    let ager = parseInt(age); 
    selectedDogs = []; 

    allDogs.forEach(dog => {
        if (dog.age > ager) {  
            selectedDogs.push(dog);
        }
    });

    displayInfo(); 
}


function displayInfo() {
    let display = document.querySelector(".selectedPetInfo");
    let text = "<h3>Dogs Available for Adoption</h3><ul>";

    if (selectedDogs.length === 0) {
        text += "<li>No dogs found matching this age criteria.</li>";
    } else {
        selectedDogs.forEach(dog => {
            text += `<li><b>Dog Name:</b> ${dog.dogName} <br>
                     <b>Breed:</b> ${dog.breed} <br>
                     <b>Age:</b> ${dog.age} Year(s) and ${dog.month} Month(s)</li>`;
        });
    }

    text += "</ul>";
    display.innerHTML = text; 
}
