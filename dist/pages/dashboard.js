const userName = document.getElementById("user-name");
const setNameFromLS = () => {
    const userAsString = localStorage.getItem("user");
    if (userAsString) {
        let user = JSON.parse(userAsString);
        if (user && userName) {
            userName.innerText = user.name;
        }
    }
    renderDreams();
};
window.addEventListener('DOMContentLoaded', setNameFromLS);
// export const dreams: IDream[] = [];
//    export let parsedDreams: IDream[] = [];
const dreamList = document.querySelector(".dream-list");
const dreamsFromLS = localStorage.getItem("dreamArrayLS");
export const parsedDreams = JSON.parse(dreamsFromLS !== null && dreamsFromLS !== void 0 ? dreamsFromLS : "[]");
const renderDreams = () => {
    if (dreamList) {
        if (dreamsFromLS) {
            console.log("funka");
            dreamList.innerHTML = "";
            parsedDreams.forEach(dream => {
                const dreamItem = document.createElement("li");
                dreamItem.classList.add("dream-list_item");
                const isCheckedBox = document.createElement("input");
                isCheckedBox.setAttribute("type", "checkbox");
                isCheckedBox.setAttribute("name", "dream-check");
                isCheckedBox.dataset.id = dream.id.toString();
                dreamItem.appendChild(isCheckedBox);
                const dreamTask = document.createElement("p");
                dreamTask.innerText = `${dream.name}, `;
                const dreamTaskTheme = document.createElement("span");
                dreamTaskTheme.innerText = dream.theme;
                dreamItem.appendChild(dreamTask);
                dreamTask.appendChild(dreamTaskTheme);
                const deleteBtn = document.createElement("button");
                deleteBtn.setAttribute("type", "button");
                deleteBtn.dataset.id = dream.id.toString();
                deleteBtn.classList.add("delete-btn");
                const trashCanImg = document.createElement("img");
                trashCanImg.src = "/public/images/trash_delete.png";
                trashCanImg.alt = "Ta bort ikon";
                trashCanImg.classList.add("trash-can_img");
                deleteBtn.appendChild(trashCanImg);
                dreamItem.appendChild(deleteBtn);
                dreamList.appendChild(dreamItem);
            });
        }
    }
};
if (dreamList) {
    dreamList.addEventListener("click", (event) => {
        const target = event.target;
        const deleteTask = (id) => {
            const index = parsedDreams.findIndex(dream => dream.id === id);
            parsedDreams.splice(index, 1);
        };
        // Delete dream from list
        const deleteBtn = target.closest(".delete-btn");
        if (deleteBtn) {
            const id = Number(deleteBtn.dataset.id);
            console.log(`DeleteBtn: ${id}`);
            deleteTask(id);
            localStorage.setItem("dreamArrayLS", JSON.stringify(parsedDreams));
            renderDreams();
        }
    });
}
//# sourceMappingURL=Dashboard.js.map