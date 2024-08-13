let inp = document.getElementById(`inp`);
let eyeIcon = document.getElementById(`eye-icon`);
let requirmentList = document.querySelectorAll(`.requirment-item`);

// Change eye-icon & hide password
eyeIcon.addEventListener(`click`,changEeyeIcon);
function changEeyeIcon(){
    inp.type = inp.type == `password`? `text` : `password`;
    eyeIcon.className = eyeIcon.className == `fa-solid fa-eye` ? `fa-solid fa-eye-slash` : `fa-solid fa-eye`;
};

// Password validation
let requirments = [
    {regex: /.{8,}/, index: 0 },
    {regex: /[0-9]/, index: 1 },
    {regex: /[a-z]/, index: 2 },
    {regex: /[^A-Za-z0-9]/, index: 3 },
    {regex: /[A-Z]/, index: 4 }
]

inp.addEventListener(`keyup`, (e)=>{
    requirments.forEach(item =>{
        let isValid = item.regex.test(e.target.value);
        let validItem = requirmentList[item.index];

        if(isValid){
            validItem.firstElementChild.className = `fa-solid fa-circle-check`;
            validItem.classList.add(`valid`);
        }else{
            validItem.firstElementChild.className = `fa-solid fa-circle`;
            validItem.classList.remove(`valid`);
        }
    });
});