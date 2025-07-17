import { parsedDreams } from "./Dashboard.js";
const dreamForm = document.getElementById("new-dream-form");
const dreamInput = document.getElementById("dream-input");
const taskError = document.getElementById("task-error");
const dreamSelect = document.getElementById("dream-select");
const addDream = (event) => {
    event === null || event === void 0 ? void 0 : event.preventDefault();
    const dream = dreamInput.value;
    // Validate if dream ipnut is empty
    if (dream === "") {
        taskError.textContent = "Du måste ange något.";
        return;
    }
    // Create a unique ID
    let newId;
    if (parsedDreams.length > 0) {
        newId = Math.max(...parsedDreams.map((dream) => dream.id)) + 1;
    }
    else {
        newId = 1;
    }
    let selectedDream = "";
    switch (dreamSelect.value) {
        case "teknik":
            selectedDream = "Teknikdrömmar";
            break;
        case "vardag":
            selectedDream = "Vardagsdrömmar";
            break;
        case "hus":
            selectedDream = "Husdrömmar";
            break;
        case "sport":
            selectedDream = "Sportdrömmar";
            break;
        default:
            selectedDream = "Okänd dröm";
    }
    const newDream = {
        id: newId,
        name: dream,
        theme: selectedDream,
        checked: false,
    };
    parsedDreams.push(newDream);
    let dreamArrayLS = JSON.parse(localStorage.getItem("dreamArrayLS") || "[]");
    localStorage.setItem("dreamArrayLS", JSON.stringify(parsedDreams));
    dreamInput.value = "";
    dreamInput.focus();
    // console.log(dreams);
};
dreamForm.addEventListener("submit", addDream);
//# sourceMappingURL=AddDream.js.map