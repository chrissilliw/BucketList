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
  // console.log("funka");
};
//
window.addEventListener("DOMContentLoaded", setNameFromLS);
const dreams = [];
let dreamsArray = [
  {
    id: 1,
    name: "Lära mig HTML/CSS",
    theme: "teknikdrömmar",
    checked: true,
  },
  {
    id: 2,
    name: "Lära mig TypeScript",
    theme: "teknikdrömmar",
    checked: false,
  },
  {
    id: 3,
    name: "En dröm som tar flera rader lorem ipsum",
    theme: "vardagsdrömmar",
    checked: false,
  },
];
const dreamList = document.querySelector(".dream-list");
const renderDreams = () => {
  if (dreamList) {
    console.log("funka");
    dreamList.innerHTML = "";
    dreamsArray.forEach((dream) => {
      const dreamItem = document.createElement("li");
      dreamItem.classList.add("dream-list_item");
      // const dreamCheck = document.createElement("span") as HTMLSpanElement;
      // dreamCheck.classList.add("isComplete-icon");
      // dreamCheck.dataset.id = dream.id.toString();
      // dreamItem.appendChild(dreamCheck);
      const isCheckedBox = document.createElement("input");
      isCheckedBox.setAttribute("type", "checkbox");
      dreamItem.appendChild(isCheckedBox);
      const dreamTask = document.createElement("label");
      dreamTask.innerText = dream.name;
      dreamItem.appendChild(dreamTask);
      const deleteBtn = document.createElement("button");
      deleteBtn.setAttribute("type", "button");
      const trashCanImg = document.createElement("img");
      trashCanImg.src = "/public/images/trash_delete.png";
      trashCanImg.alt = "Ta bort ikon";
      trashCanImg.classList.add("delete-btn");
      deleteBtn.appendChild(trashCanImg);
      dreamItem.appendChild(deleteBtn);
      dreamList.appendChild(dreamItem);
    });
  }
};
// export {};
//# sourceMappingURL=Dashboard.js.map
