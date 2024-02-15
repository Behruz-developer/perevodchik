const englishEn = document.getElementById('englishEn'),
      uzbekUz = document.getElementById('uzbekUz'),
      commentCo = document.getElementById('commentCo'),
      btnAdd = document.querySelector('.btn')
      
      btnAdd.addEventListener('click', (event) => {
        event.preventDefault();
        if(uzbekUz.value == '' && englishEn.value == ''){
            alert('Malumot kritilmagan')
        }else{
            const uzBek = uzbekUz.value;
            const enGlish = englishEn.value;
            const coMent = commentCo.value;
        
            const addObject = {
                word: uzBek,
                translate: enGlish,
                comment: coMent
            };
    
            let buSozMavjudmi = false;
    
            languages.forEach(element => {
                if(uzBek == element.word){
                    buSozMavjudmi = true;
                }
            });
            
            if(buSozMavjudmi){
                alert("bu so'z majud");
            }else{
                languages.push(addObject);
                 alert(" so'z qo'shildi")

            }
            
            langTable(languages);
        
            uzbekUz.value = '';
            englishEn.value = '';
            commentCo.value = '';
            localStorage.setItem("languages", JSON.stringify(languages));
        }

    });
    
    function deleteLanguage(languageToDelete) {
        const index = languages.findIndex(language => language === languageToDelete);
        if (index > -1) {
            languages.splice(index, 1);
            localStorage.setItem("languages", JSON.stringify(languages));
            langTable(languages);
        }
    }




function langTable(languages){

    translate_list.innerHTML = '';
    for (const language of languages) {
        const trText = document.createElement('tr')      
    
        const languageWord = document.createElement('td');
        languageWord.innerText = language.word;
        trText.appendChild(languageWord);
    
        const languageTrans = document.createElement('td');
        languageTrans.innerText = language.translate
        trText.appendChild(languageTrans)

        const languageComent = document.createElement('td');
        languageComent.innerText = language.comment;
        trText.appendChild(languageComent);
    

        uzbekUz.value = ''
        englishEn.value = ''
        commentCo.value = ''

        const action = document.createElement('td');
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn_td')
        deleteButton.innerText = "O'chirish";
        deleteButton.addEventListener('click', () => deleteLanguage(language));
        action.appendChild(deleteButton);
        trText.appendChild(action);


        const change = document.createElement('td');
        const changeButton = document.createElement('button');
        changeButton.classList.add('btn_change')
        changeButton.innerText = "O'zgartirish";
        change.appendChild(changeButton)
        trText.appendChild(change)

        translate_list.appendChild(trText)

    }
}
langTable(languages)
