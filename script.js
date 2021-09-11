
const sounds =["applause","boo","gasp","tada","victory","wrong" ];
    
    
sounds.forEach((sound)=>{
       const btn = document.createElement("button");
       btn.classList.add("btn");
       btn.innerText=sound;
       console.log(btn.innerText);
       btn.addEventListener("click",()=>{
           pauseSongs();
           let x = document.getElementById(sound);
           x.play();
           
       }) 
       document.body.appendChild(btn)
    })
    function pauseSongs(){
        sounds.forEach((sound)=>{
            let x = document.getElementById(sound);
           x.pause();
           x.currentTime = 0;
        })
    }