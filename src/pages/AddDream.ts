import { IDream } from "../models/IDream.js";
import { parsedDreams } from "./Dashboard.js";

const dreamForm = document.getElementById("new-dream-form") as HTMLFormElement;
const dreamInput = document.getElementById("dream-input") as HTMLInputElement;
const taskError = document.getElementById("task-error") as HTMLParagraphElement;
const dreamSelect = document.getElementById("dream-select") as HTMLSelectElement;
const newDreamPop = document.querySelector(".new-dream-popup") as HTMLParagraphElement;



const addDream = (event: Event): void => {
    event?.preventDefault();

    const dream = dreamInput.value;

    // Validate if dream ipnut is empty
    if (dream === "") {
        taskError.textContent = "Du måste ange något.";
        return;
    }

    // Create a unique ID
    let newId: number;

    if(parsedDreams.length >0) {
        newId = Math.max(...parsedDreams.map((dream: IDream) => dream.id)) + 1;
    } else {
        newId = 1;
    }
    
    let selectedDream = "";

    switch (dreamSelect.value) {
        case "teknik": 
            selectedDream = "Teknikdrömmar"
            break;
        case "vardag": 
            selectedDream = "Vardagsdrömmar"
            break;
        case "hus":
            selectedDream = "Husdrömmar"
            break;
        case "sport":
            selectedDream = "Sportdrömmar"
            break;
        default:
            selectedDream = "Okänd dröm"
            
    }

    const newDream: IDream = {
        id: newId,
        name: dream,
        theme: selectedDream,
        checked: false,
    }

    parsedDreams.push(newDream);

    let dreamArrayLS: IDream[] = JSON.parse(localStorage.getItem("dreamArrayLS") || "[]");

    localStorage.setItem("dreamArrayLS", JSON.stringify(parsedDreams));

    dreamInput.value = "";

    dreamInput.focus();

    console.log("ny dröm tillagd");
    showNewDreamPopup();
}

const showNewDreamPopup = () => {
    newDreamPop.classList.remove("is-hidden");
    setTimeout(() => {
        newDreamPop.classList.add("is-hidden");
    }, 3000);
}

dreamForm.addEventListener("submit", addDream);