var agora = new Date()
var hora = agora.getHours()

console.log(`agora são ${hora} .`)


if(hora < 12){
    console.log("bom dia")
}
else if(hora <= 18){
    console.log("tarde")
}
else{
    console.log("noite")
}
