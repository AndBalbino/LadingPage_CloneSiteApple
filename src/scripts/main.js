document.addEventListener('DOMContentLoaded', function(){
    
    const dataDoEvento = new Date('Feb 26, 2024 19:00:00');
    const timeStampDoEvento = dataDoEvento.getTime();
    
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
})