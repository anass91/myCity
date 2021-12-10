const inputVa = document.querySelector('.input');
const btnSr = document.querySelector('.btn');
const paraDemo = document.getElementById('demo');
const closeBtn = document.querySelector('.closed');
const titleBig = document.querySelector('.title-1');




function moveComand(hilo){
    var numOfCity;

    switch(hilo){
        case "Bouznika":
            numOfCity = "هذه المدينة إغتصب فيها الملك عظيم حبيبته فاطمة الزهراء";
            break;
        case "Sale":
            numOfCity = "هذه المدينة أنجبت تاني أعظم إمرأة في هذا العصر  إسمها فاطمة الزهراء ";
            break;
        case "Rabat":
            numOfCity = "هذه المدينة تعيش بنور فاطمة الزهراء القادم من سلا";
            break;
        case "Casablanca":
            numOfCity = "أكبر مدينة في المغرب";
            break;
        case "Mohamadia":
            numOfCity = "درس فيها الملك أناس";
            break;
        default:
            numOfCity = "هذه المدينة غير موجودة عندنا الآن";
    }
    paraDemo.innerHTML = numOfCity;
    return numOfCity;
}



btnSr.addEventListener('click', function(){
    //console.log(inputVa.value)
    let mucho = inputVa.value;
    console.log(mucho);
    moveComand(mucho)
    titleBig.innerHTML = mucho;
    document.querySelector('.be').classList.add('vs-dan');
    if(inputVa.value === ""){
        paraDemo.innerHTML = "من فضلك أكتب إسم مدينة";
        paraDemo.style.color = "red";
    }
});

closeBtn.addEventListener('click', function(){
    document.querySelector('.be').classList.remove('vs-dan');
    inputVa.value = "";
    
})
