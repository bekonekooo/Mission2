const {hash}= window.location;
const message=(atob(hash.replace("#","")));

if(message){
    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#message-show").classList.remove("hide");
    document.querySelector("h1").innerHTML=message;
}

document.querySelector("form").addEventListener("submit",event=>{
    event.preventDefault();

    document.querySelector("#message-form").classList.add("hide");
    document.querySelector("#link-form").classList.remove("hide");


    const input =document.querySelector("#message-input");
    const encrpted=btoa(input.value);

    //link inputu const link değerine eşitle
    // link input içindeki değieri url + # + encrepted mesaj olarak göster
    //link inputu seç 
const link_input= document.querySelector("#link-input");
link_input.value= `${window.location}#${encrpted}`;
link_input.select(); 
});