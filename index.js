 const textEl=document.getElementById("textarea");
 const counter=document.getElementById("total-counter");
 const remaining=document.getElementById("remaining-counter");

textEl.addEventListener("keyup",()=>{
    counter.innerText=textEl.value.length;
    remaining.innerText=Number(textEl.getAttribute("maxlength"))-textEl.value.length;
   
})