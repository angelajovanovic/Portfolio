function provera(){

var uzorak_ime = document.MojaForma.user.value;
var uzorak_prezime = document.MojaForma.user1.value;
var uzorak_email = document.MojaForma.email.value;
var uzorak_pass = document.MojaForma.pass.value;
var uzorak_conf = document.MojaForma.passconf.value;


if(uzorak_ime==='' || uzorak_ime ===null){

    alert("Unesite Vaše ime!")
    return false;
}

else if(uzorak_prezime==='' || uzorak_prezime===null){

    alert("Unesite Vaše prezime!")
    return false;
}

else if(uzorak_email==='' || uzorak_email===null){

    alert("Unesite Vaš email!")
    return false;
}

else if(uzorak_pass==='' || uzorak_pass===null){

    alert("Unesite Vaš password!")
    return false;
}


else if(uzorak_conf==='' || uzorak_conf===null){

    alert("Unesite ponovo Vaš password!")
    return false;
}

else if(uzorak_pass != uzorak_conf){

    alert("Lozunke se ne poklapaju!")
    return false;
}

else{
    alert("Uspesno ste poslali formu!");
    return true;

}
}



/*sacuvaj("email", uzorak_email);

citaj();
prikazi("idSpan");
}
function sacuvaj(key, value){
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
}
var keys=[];
var vals=[];
function citaj(){
    keys.length=0;
    vals.length=0;
    let idx=0;
    while(localStorage.key(idx)){
        let k=localStorage.key(idx);
        let v=localStorage.getItem(k);
        keys.push(k);
        vals.push(v);
        idx++;
    }
}
function prikazi(){
    var rez="";
    for(let i=0; i<keys.length; i++){
        rez += keys[i] + ":" + vals[i] + "\t";
    }
    const span = document.getElementById(idSpan)
    span.innerHTML = rez;
}*/