function addCells() {
    let buttonContainer = document.querySelector(".buttons");
    buttonContainer.style.display = 'grid'
    buttonContainer.style.gridTemplateColumns = 'repeat(6,1fr)'
    buttonContainer.style.gridTemplateRows = 'repeat(5,1fr)'
    buttonContainer.style.width = '300px'
    buttonContainer.style.height = '250px'
    let blankCell = 12;
    let bombaCell = 3;
    let numberCell = 12;
    let omadCell = 2;
    let advokatCell = 1;
    let g=1, h=1,i = 1,j=1,k=1;
    while (g <= advokatCell) {
        let box = document.createElement("div");
        box.className = "cell blank"
        box.innerHTML = '\
        <p><i class="fa fa-search"></i></p>\
        <button><b></b></button>';
        buttonContainer.appendChild(box)
        g++
    }
    while (h <= omadCell) {
        let box = document.createElement("div");
        box.className = "cell blank"
        box.innerHTML = '\
        <p><i class="fa fa-eye"></i></p>\
        <button><span></span></button>';
        buttonContainer.appendChild(box)
        h++
    }
    while (i <= blankCell) {
        let box = document.createElement("div");
        box.className = "cell blank"
        box.innerHTML = '\
        <p></p>\
        <button></button>';
        buttonContainer.appendChild(box)
        i++
    }
    while (j <= bombaCell) {
        let box2 = document.createElement("div");
        box2.className = "cell"
        box2.innerHTML = '\
        <p><i class="fa fa-bomb"></i></p>\
        <button><i></i></button>';
        console.log(box2);
        buttonContainer.appendChild(box2)
        j++
    }
    let numbers = [1,2,3,4]
    while (k <= numberCell) {
        let randomSon = Math.floor(Math.random() * 4);
        let box = document.createElement("div");
        box.className = "cell"
        box.innerHTML = `\
        <p>${numbers[randomSon]}</p>\
        <button></button>`;
        buttonContainer.appendChild(box)
        k++
    }
}
addCells()

alert("\"Bombani bosma\" o'yiniga xush kelibsiz! Bu o'yinda maxsus kataklar mavjud. Ularning ortida turli xil belgilar, sonlar\
 va bombalar yashiringan. Katakni bosganingizda agar bomba bo'lsa, yutqazdingiz; ko'z belgisi bo'lsa, bu sizni omadingiz\
  chunki bu belgi ko'pida bitta bombani zararsizlantiradi; agar lupa bo'lsa, u hohlangan bir katakni ko'rsatadi holos\
  , bu katak bombali yoki bombasiz ekanligini bildirmaydi. Katakni ko'rsatmasligi ham mumkin.")

let btns = document.querySelectorAll(".container button")
let cells = document.querySelectorAll(".cell")
let p = document.querySelectorAll("p")
let d = 0;

let buttons = [];
for (let i = 0; i < btns.length; i++){
    buttons.push(btns[i]);
}
p.forEach((e,i) => {
    if (e.innerHTML == 1) {
        e.style.color = "blue"
        cells[i].style.backgroundColor = "lime";
    } else if (e.innerHTML == 2) {
        e.style.color = "brown";
        cells[i].style.backgroundColor = "salmon";
    } else if (e.innerHTML == 3) {
        e.style.color = "forestgreen"
        cells[i].style.backgroundColor = "aqua";
    } else if (e.innerHTML == 4) {
        e.style.color = "purple"
        cells[i].style.backgroundColor = "pink";
    } else if (e.innerHTML == '<i class="fa fa-bolt"></i>') {
        e.style.color = "azure"
        cells[i].style.backgroundColor = "blue";
    }
})
let bomba = [];
let bomba2 = [];
btns.forEach((e,i) => {
    let rNum = Math.floor(Math.random() * 2555);
    cells[i].style.order = rNum;
    if (e.innerHTML === "<i></i>") {
        bomba.push(cells[i]);
        bomba2.push(e);
    }
    let q=0;
    e.onclick = () => {
        q++;
        buttons.shift(e);
        if (e.innerHTML === "<i></i>") {
            bomba.forEach(element => {
                element.classList.toggle("boom");
            })
            setTimeout(() => {
                alert(`Afsuski bomba portladi! Xayr!!!"`)
            }, 2000);
            btns.forEach(o => {
                o.disabled = true
            })
        }
        
        else if (e.innerHTML === "<span></span>") {
            bomba2[i].style.display = "none";
            bomba[i].style.backgroundColor = "red";
            e.style.display = 'none';
        }
        
        else if (e.innerHTML === "<b></b>") {
            e.style.display = 'none';
            buttons[3].style.boxShadow = "0 0 20px 12px navy";
            buttons[3].style.border = "5px solid lime";
            
        }
        
        else if (p[i].innerHTML === "") {
            for (var j = 0; j < btns.length; j++) {
                if (p[j].innerHTML === "") {
                    btns[j].style.backgroundColor = "green";
                    btns[j].style.color = "cyan";
                    buttons.shift(btns[j]);
                }
            }
        } 
        else {
            e.style.display = "none";
            d++;
            if (d == 27) {
                setTimeout(() => {
                    alert(`Siz yutdingiz! Tabriklaymiz!`)
                }, 500);
                btns.forEach(o => {
                    o.disabled = true
                })
            }
        }
        // console.log(`element soni:${buttons.length}. random son:${advoNumber}`);
    }
    
})



function returnASD(){
    location.reload()
}