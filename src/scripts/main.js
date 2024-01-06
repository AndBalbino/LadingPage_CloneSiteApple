document.addEventListener('DOMContentLoaded', function(){

    //Seção do timer
    const dataDoEvento = new Date('Feb 26, 2024 19:00:00');
    const timeStampDoEvento = dataDoEvento.getTime();

    // Seção das imagens
    const buttons = document.querySelectorAll(".content__order__item");
    const image = document.querySelector("#image-content");


    //Seção do timer
    const contaOTempo = setInterval(function (){
        const agora = new Date();
        
        
        const timeStampAtual = agora.getTime();
    
        const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;
    
        const diaEmMs = 1000 * 60 * 60 * 24;
        const horaEmMs = 1000 * 60 * 60;
        const minutoEmMs = 1000 * 60;
        
    
        const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
        const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
        const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
        const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / 1000);
    
        document.getElementById('contador').innerHTML = `${diasAteOEvento} Dias ${horasAteOEvento} Hrs ${minutosAteOEvento} Min ${segundosAteOEvento} Seg`
    
        if(distanciaAteOEvento < 0){
            clearInterval(contaOTempo);
            document.querySelector('.hero__text').textContent = `O maior evento de tecnologia do Brasil expirou`;
        } 
    }, 1000);
    
    //Alterando as imagens
    buttons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            
            buttons.forEach((btn) => {
                btn.querySelector(".content__order__color").classList.remove("content__order__color--selected");
            });
    
            const button = e.target;
    
            const id = button.getAttribute("id");
           
            button.querySelector(".content__order__color").classList.add("content__order__color--selected");
            
            // image.setAttribute("src", `./imagens/iphone_${id}.jpg`);
        
            setTimeout(() => {
                image.classList.toggle("content__image--is-active");
            },200)
        
            
        });
    });
});
