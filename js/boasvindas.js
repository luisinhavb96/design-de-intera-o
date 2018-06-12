var hoje= new Date();
var hora= hoje.getHours();

 var texto;   
    
if (hora>7 && hora<12){
    texto="Bom Dia";
}
else if (hora>=12 && hora<20){
    texto="Boa Tarde";
}
else if (hora>=20){
    texto="Boa Noite";
}
else {
    texto= "É tarde, bom descanso";
}
document.write(texto); 