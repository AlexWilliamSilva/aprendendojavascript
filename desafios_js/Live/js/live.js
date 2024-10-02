function horarioAtual() {
  
    let hora = new Date().toLocaleTimeString(); 
    
    document.getElementById("rel").innerHTML = hora;
     
    setTimeout(horarioAtual, 1000)
      
  }