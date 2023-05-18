function encriptar(){
  let texto=document.getElementById("textoRecibido").value
  let palabrasEncriptar=texto.split(" ")
  let textoEncriptado=" "
  for (let i = 0; i < palabrasEncriptar.length; i++) {
    let letras=[...palabrasEncriptar[i]]
    textoEncriptado=textoEncriptado+" "
    
    for (let j = 0; j < letras.length; j++) {
      let letra= letras[j]
      
      switch (letra) {

        case "a":
          textoEncriptado=textoEncriptado+"ai"
          break;
        
  
        case "e":
          textoEncriptado=textoEncriptado+"enter"
          break;
  
  
        case "i":
          textoEncriptado=textoEncriptado+"imes"
          break;
  
  
        case "o":
          textoEncriptado=textoEncriptado+"ober"
          break;
  
  
        case "u":
          textoEncriptado=textoEncriptado+"ufat"
          break;
    
        default:
          textoEncriptado=textoEncriptado+letra
          break;
      }
    }

  }
  console.log(textoEncriptado)
  return textoEncriptado

}
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

function desencriptar(){
  let texto=document.getElementById("textoRecibido").value
  
  let textoDesencriptado=texto
 
 textoDesencriptado= replaceAll(textoDesencriptado,"ai","a")
 textoDesencriptado= replaceAll(textoDesencriptado,"enter","e")
 textoDesencriptado= replaceAll(textoDesencriptado,"imes","i")
 textoDesencriptado=replaceAll(textoDesencriptado,"ufat","u")
 textoDesencriptado=replaceAll(textoDesencriptado,"ober","o") 
  
  console.log(textoDesencriptado)
  return textoDesencriptado

}

