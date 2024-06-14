let btn = document.querySelector('#btn');
let min=document.querySelector(".min")
let number = document.querySelector(".number");
let num = 0;


const SendLocData = () => {
    let t_ext= document.querySelectorAll('#Texte');
    let notes=[]
    console.log(t_ext);
    t_ext.forEach((n)=>{
        return notes.push(n.value)
    })
    localStorage.setItem('notes',JSON.stringify(notes))
}

const addCard = (t = "") => {
    num++;
    number.innerHTML=num;

    const note = document.createElement("div");
          note.classList.add("card");

    const HtmlData = `
        <div class="min_card">
            <div class="edit">
                <button id="sv" ><i class="fa fa-floppy-o" aria-hidden="true"></i></button>
                <button id="de"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
            </div>
            <div class="text">
                <textarea id="Texte" placeholder="Write Your Note !"></textarea>
                <div class="hiden"></div>
            </div>
        </div>`;

       note.insertAdjacentHTML('afterbegin',HtmlData);
       min.appendChild(note);

    //    all button ref 

       let save = note.querySelector('#sv');
       let del = note.querySelector('#de')
       let hiden = note.querySelector(".hiden");
       let texte = note.querySelector("#Texte")
       
       texte.value=t;
       save.onclick=function(){
           if(texte.value){
               SendLocData();
                let x = texte.value;
                    hiden.classList.toggle("active")
                    hiden.innerHTML=x;
           }else{
               alert("PLZ WRITE ANY THING !")
           };
        };
        del.addEventListener("click",()=>{
            note.remove();
                num--;
                number.innerHTML=num;
                SendLocData();
        });
        let all = document.querySelector(".all")
        all.addEventListener("click",()=>{
            SendLocData();
            note.remove();
            number.innerHTML=0;
            num=0
        })

    };

    // get data from localstroge 

    const item = JSON.parse(localStorage.getItem('notes'));
    if(item){item.forEach((not)=>{addCard(not)})}

btn.addEventListener("click", () => { addCard()})