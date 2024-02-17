const englishEn = document.getElementById("englishEn"),
  uzbekUz = document.getElementById("uzbekUz"),
  commentCo = document.getElementById("commentCo"),
  btnAdd = document.querySelector(".btn");

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if(uzbekUz.value == "" && englishEn.value == "") {
    alert("Malumot kritilmagan");
  } else{
    const uzBek = uzbekUz.value;
    const enGlish = englishEn.value;
    const coMent = commentCo.value;

    const addObject = {
      word: uzBek,
      translate: enGlish,
      comment: coMent
    };

    let buSozMavjudmi = false;

    languages.forEach((element) => {
      if (uzBek == element.word) {
        buSozMavjudmi = true;
      }
    });

    if (buSozMavjudmi) {
      alert("bu so'z majud");
    } else {
      languages.push(addObject);
      alert(" so'z qo'shildi");
    }

    langTable(languages);

    uzbekUz.value = "";
    englishEn.value = "";
    commentCo.value = "";
    localStorage.setItem("languages", JSON.stringify(languages));
  }
});

function deleteLanguage(languageToDelete) {
  const index = languages.findIndex(
    (language) => language === languageToDelete
  );
  if (index > -1) {
    languages.splice(index, 1);
    localStorage.setItem("languages", JSON.stringify(languages));
    langTable(languages);
  }
}

const uzChange = document.getElementById("changeUzbek");
const enChange = document.getElementById("changeEnglish");
const coChange = document.getElementById("changeIzoh");
const buttonElement = document.getElementById("12");

let selectedRowIndex = -1;

function handleChange(changeRow) {
    const index2 = languages.findIndex((language) => language === changeRow);
    selectedRowIndex = index2;
    uzChange.value = languages[index2].word;
    enChange.value = languages[index2].translate;
    coChange.value = languages[index2].comment;
}

function saveChanges() {
    if(selectedRowIndex > -1) {
        // Yangi qiymatlarni o'qib olamiz
        const updatedWord = uzChange.value;
        const updatedTranslate = enChange.value;
        const updatedComment = coChange.value;

        // languages arrayidagi tegishli elementni yangilaymiz
        languages[selectedRowIndex].word = updatedWord;
        languages[selectedRowIndex].translate = updatedTranslate;
        languages[selectedRowIndex].comment = updatedComment;

        // O'zgartirishlarni saqlaymiz va jadvalni yangilaymiz
        localStorage.setItem("languages", JSON.stringify(languages));
        langTable(languages); // Jadvalni yangilaymiz

        // Modalni yopamiz
        const modalChange = document.getElementById("myModal");
        modalChange.style.display = "none";
    }
}


buttonElement.addEventListener("click", saveChanges);

function langTable(languages) {
  translate_list.innerHTML = "";
  for (const language of languages) {
    const trText = document.createElement("tr");

    const languageWord = document.createElement("td");
    languageWord.innerText = language.word;
    trText.appendChild(languageWord);

    const languageTrans = document.createElement("td");
    languageTrans.innerText = language.translate;
    trText.appendChild(languageTrans);

    const languageComent = document.createElement("td");
    languageComent.innerText = language.comment;
    trText.appendChild(languageComent);

    uzbekUz.value = "";
    englishEn.value = "";
    commentCo.value = "";

    const action = document.createElement("td");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("btn_td");
    deleteButton.innerText = "O'chirish";
    deleteButton.addEventListener("click", () => deleteLanguage(language));
    action.appendChild(deleteButton);
    trText.appendChild(action);

    const change = document.createElement("td");
    const changeButton = document.createElement("button");
    change.id = language.word;
    changeButton.classList.add("btn_change");
    changeButton.innerText = "O'zgartirish";
    const modalChange = document.getElementById("myModal");

    changeButton.addEventListener("click", () => {
      modalChange.style.display = "flex";
      handleChange(language);
    });

    change.appendChild(changeButton);
    trText.appendChild(change);

    translate_list.appendChild(trText);

    const closeChange2 = document.getElementsByClassName("close1")[0];

    closeChange2.addEventListener("click", () => (modalChange.style.display = "none"));
    
  }
}
langTable(languages);


