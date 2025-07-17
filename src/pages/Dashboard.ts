import { IUser } from "../models/IUser.js";
import { IDream } from "../models/IDream.js";

const userName = document.getElementById("user-name");

    const setNameFromLS = () => {
        const userAsString = localStorage.getItem("user");

        if (userAsString) {
            let user: IUser = JSON.parse(userAsString);

            if (user && userName) {
                userName.innerText = user.name;
            }   
        }

        renderDreams();
    }

window.addEventListener('DOMContentLoaded', setNameFromLS);


// export const dreams: IDream[] = [];

//    export let parsedDreams: IDream[] = [];

let dreamsArray: IDream[] = [
    {
        id: 1,
        name: "Lära mig HTML/CSS",
        theme: "teknikdrömmar",
        checked: true
    },
    {
        id: 2,
        name: "Lära mig TypeScript",
        theme: "teknikdrömmar",
        checked: false
    },
    {
        id: 3,
        name: "En dröm som tar flera rader lorem ipsum",
        theme: "vardagsdrömmar",
        checked: false
    }
];

const dreamList = document.querySelector(".dream-list") as HTMLUListElement;

    const dreamsFromLS = localStorage.getItem("dreamArrayLS");

    export const parsedDreams: IDream[] = JSON.parse(dreamsFromLS ?? "[]");

const renderDreams = ():void => {

    if(dreamList) {


    if (dreamsFromLS) {

            console.log("funka");
    dreamList.innerHTML = "";
     
    parsedDreams.forEach(dream => {
        const dreamItem = document.createElement("li") as HTMLLIElement;
        dreamItem.classList.add("dream-list_item");

        // const dreamCheck = document.createElement("span") as HTMLSpanElement;
        // dreamCheck.classList.add("isComplete-icon");
        // dreamCheck.dataset.id = dream.id.toString();
        // dreamItem.appendChild(dreamCheck);

        const isCheckedBox = document.createElement("input") as HTMLInputElement;
        isCheckedBox.setAttribute("type", "checkbox");
        isCheckedBox.setAttribute("name", "dream-check");
        isCheckedBox.dataset.id = dream.id.toString();
        dreamItem.appendChild(isCheckedBox);

        const dreamTask = document.createElement("p") as HTMLParagraphElement;
        dreamTask.innerText = `${dream.name}, `;
        const dreamTaskTheme = document.createElement("span") as HTMLSpanElement;
        dreamTaskTheme.innerText = dream.theme;

        dreamItem.appendChild(dreamTask);
        dreamTask.appendChild(dreamTaskTheme);

        const deleteBtn = document.createElement("button") as HTMLButtonElement;
        deleteBtn.setAttribute("type", "button");
        deleteBtn.dataset.id = dream.id.toString();
        deleteBtn.classList.add("delete-btn")

        const trashCanImg = document.createElement("img");
        trashCanImg.src = "/public/images/trash_delete.png";
        trashCanImg.alt ="Ta bort ikon";
        trashCanImg.classList.add("trash-can_img");
        deleteBtn.appendChild(trashCanImg);

        dreamItem.appendChild(deleteBtn);

        dreamList.appendChild(dreamItem);
    })

    }
}
}

if (dreamList) {
    dreamList.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;

        const deleteTask = (id: number) => {
            const index = parsedDreams.findIndex(dream => dream.id === id);
            parsedDreams.splice(index, 1);
        }

        // Delete dream from list
        const deleteBtn = target.closest(".delete-btn") as HTMLElement;
        if (deleteBtn) {
            const id = Number(deleteBtn.dataset.id);
            console.log(`DeleteBtn: ${id}`);
            deleteTask(id);
            renderDreams();
            
        }
    })
}