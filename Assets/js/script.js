window.addEventListener("DOMContentLoaded",function(){
    const words =["Software Engineer..." ,"Sketch Artish...","Photographer...","Pianist...","Little Stupid..."];
    const Imges_url = [
        "url('Assets/img/fotis-fotopoulos-6sAl6aQ4OWI-unsplash.jpg')",
        "url('Assets/img/jr-korpa-9XngoIpxcEo-unsplash.jpg')",
        "url('Assets/img/diego-ph-Ku_L_W-cyDs-unsplash.jpg')" ,
        "url('Assets/img/simona-sergi-ykPAcQGSE0k-unsplash.jpg')",
        "url('Assets/img/yanna-zissiadou-Zu2P0CV7B2k-unsplash.jpg')",
    ]
    const img_val = document.getElementById("profileBackground");
    const details = document.getElementById("Mydetails");
    let phraseIndex =1;
    let indexEach = 0;
    const Tspeed=400;
    const Espeed =175;
    img_val.style.backgroundImage = Imges_url[phraseIndex];
    
    function printletter(phrase){
        if(indexEach == phrase.length){
            clearLetter();
        }
        else if(indexEach < phrase.length){
            details.textContent += phrase.charAt(indexEach); 
            indexEach += 1; 
            setTimeout(()=>{
                printletter(phrase);
            }, Tspeed)
        }
    } 

    function clearLetter(){
        if(indexEach === -1){
            phraseIndex = (phraseIndex+1)%(words.length);
            indexEach =0;
            printletter(words[phraseIndex]);
        }
        else if(indexEach > -1){
            let updatedphrase = "";
            for(let ind =0; ind < indexEach; ind++){
                updatedphrase += words[phraseIndex].charAt(ind);
            }
            details.textContent = updatedphrase;
            indexEach -=1;
            console.log(updatedphrase,phraseIndex,indexEach);
            setInterval(()=>{
                clearLetter();
            },Espeed);
        } 
    }
    printletter(words[phraseIndex]);
})

