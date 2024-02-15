const savedLanguages = JSON.parse(localStorage.getItem("languages"));

const languages = savedLanguages|| [
    {word: 'olma', translate: 'apple', comment: 'vitaminga boy meva'},
    {word: 'kotta', translate: 'big', comment: "Kotta bog'"},
    {word: 'stakan', translate: 'glass', comment: 'apple'},
    {word: 'telefon', translate: 'phone', comment: 'apple'},
    {word: 'daftar', translate: 'copybook', comment: 'apple'},
    {word: 'kitob', translate: 'book', comment: 'Kitob ilim manbayi'},
    {word: 'ruchka', translate: 'pen', comment: 'yozish uchun'},
    {word: 'koinot', translate: 'space', comment:'katta koinot'},
    {word: "charchagan", translate: 'tired', comment:'ishdan charchagan odam'},
    {word: 'kutmoq', translate:'wait', comment:'dars boshlanishini kutmoq'},
    {word: 'tv ko\'rmoq', translate:'watch tv', comment:'qiziqarli film ko\'rmoq'},
    {word: "kechqurun", translate:'night', comment:'kechqurun bo\'ldi'},
    {word: "bugun", translate:'today', comment:'bugungi kun'},
    {word: "kecha", translate:'yesterday', comment:'kechagi kun'},
    {word: "eshik", translate:'door', comment:'taxtila eshik'},
    {word: "stol", translate:'table', comment:''},
    {word: "stul", translate:'chair', comment:''},
    {word: "baliq", translate:'fish', comment:'mazali baliq'},
    {word: "ot", translate:'horse', comment:'tez chopar ot'},  
    {word: "daraxt", translate:'tree', comment:'mevali daraxt'},
    {word: "bo'ri", translate:'wolf', comment:'yirtqich bo\'ri'},
    {word: "tulki", translate:'fox', comment:'yovvoyi tulki'},
    {word: "maymun", translate:'monkey', comment:'quvnoq maymun'},
    {word: "o'yinchoq", translate:'toy', comment:'qiziqarli o\'yinchoq'},
    {word: "mashina", translate:'car', comment:'tez yurar mashina'},
    {word: "gul", translate:'flower', comment:'shirin hidli gul'},
    {word: "sigir", translate:'cow', comment:'kotta sigir'},
    {word: "miya", translate:'brain', comment:''},
    {word: "dushanba", translate:'monday', comment:''},
    {word: "seshanba", translate:'tuesday', comment:''},
    {word: 'chorshanba', translate:'wednesday', comment:''},
    {word: 'payshanba', translate:'thursday', comment:''},
    {word: 'juma', translate:'friday', comment:''},
    {word: 'shanba', translate:'saturday', comment:''},
    {word: 'yakshanba', translate:'sunday', comment:''},
    {word: 'yanvar', translate:'january', comment:''},
    {word: 'fevral', translate:'february', comment:''},
    {word: 'mart', translate:'murch', comment:''},
    {word: 'aprel', translate:'april', comment:''},
    {word: 'may', translate:'may', comment:''},
    {word: 'iyun', translate:'june', comment:''},
    {word: 'iyul', translate:'july', comment:''},
    {word: 'avgust', translate:'august', comment:''},
    {word: 'sentabr', translate:'september', comment:'mustaqillik oyi'},
    {word: 'oktabr', translate:'october', comment:''},
    {word: 'noyabr', translate:'november', comment:'kuzi oxirgi oyi'},
    {word: 'dekabr', translate:'december', comment:''},
    {word: 'uyqu', translate:'sleep', comment:'shirin uyqu'},
    {word: 'sinf xona', translate:'classroom', comment:'toza sinf xona'},
    {word: 'ustoz', translate:'teacher', comment:''},
    {word: 'shifokor', translate:'doctor', comment:''},
    {word: 'fermer', translate:'farmer', comment:'boy fermer'},
    {word: 'quyon', translate:'rabbit', comment:'shirin quyon'},
    {word: 'tovuq', translate:'chicken', comment:''},
    {word: 'echki', translate:'goat', comment:'tog\' echkisi'},
    {word: 'ordak', translate:'dock', comment:''},
    {word: 'mushuk', translate:'cat', comment:''},
    {word: 'sichqon', translate:'mouse', comment:''},
    {word: 'kuchuk', translate:'dog', comment:'vafodor kuchuk'},
    {word: 'fil', translate:'elephant', comment:'kotta fil'},
    {word: 'ari', translate:'bee', comment:'asal ari foydali hashorot'},
    {word: 'gilam', translate:'rug', comment:'yumshoq gilam'},
    {word: 'ovqat', translate:'food', comment:'mazali ovqat'},
    {word: 'oshxona', translate:'kitchen', comment:'keng oshxona'},
    {word: 'yotoq', translate:'bed', comment:''},
    {word: 'yomon', translate:'bad', comment:''},
    {word: 'sumka', translate:'bag', comment:'chiroyli sumka'},
    {word: 'bulut', translate:'cloud', comment:'oppoq bulut'},
    {word: 'pul', translate:'mony', comment:'kop pul'},
    {word: 'chiroyli', translate:'beautiful', comment:''},
]

const enterText = document.getElementById('from_textarea');
const translateText = document.getElementById('translate_textarea');
const transBtn = document.querySelector('.translate_button');

const addWord = document.getElementById('addWord2')




enterLang.addEventListener('change', () =>{
    if(enterLang.value == 'en' ){
        transBtn.addEventListener('click', () => {
            let foundTranslation = false;
            languages.forEach((item) => {
            if(enterText.value == item.translate){
                translateText.value = item.word;
                foundTranslation = true; 
            }
        })
        if (!foundTranslation) {
            translateText.value = "Tarjima topilmadi!";
        }
        
    })
    translateLang.value = "Uzbek"
    }

   
    
    if(enterLang.value == 'uz' ){
        transBtn.addEventListener('click', () => {
            let foundTranslation = false;
            languages.forEach((item) => {
            if(enterText.value == item.word){
                translateText.value = item.translate;
                foundTranslation = true; 
            }
        })
        if (!foundTranslation) {
            translateText.value = "Tarjima topilmadi!";
        }
    })
    translateLang.value = "English"
    }
    

    console.log(translateLang.value);
    console.log(enterLang.value);

})




if(enterLang.value == 'uz' ){
    transBtn.addEventListener('click', () => {
        let foundTranslation = false;
        languages.forEach((item) => {
        if(enterText.value == item.word){
            translateText.value = item.translate;
            foundTranslation = true; 
        }
    })
    if (!foundTranslation) {
        translateText.value = "Tarjima topilmadi!";
    }
})
}




const iconBtn = document.getElementById('btn_icon');

iconBtn.addEventListener('click',() => {
    enterText.value = '',
    translateText.value = '';
})


