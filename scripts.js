//start

//function expression to select element
const selectElement = (s)=> document.querySelector(s);
//open the menu
selectElement('.open').addEventListener('click', ()=>{
    selectElement('.nav-list').classList.add('active');
})
selectElement('.close').addEventListener('click', ()=>{
    selectElement('.nav-list').classList.remove('active');
})