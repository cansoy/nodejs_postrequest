const btn11=document.querySelector("#btn11")
const input11=document.querySelector("#text11")
const input12=document.querySelector("#text12")
const input13=document.querySelector("#text13")

btn11.addEventListener("click",()=>{
    let data1 = {
        input1: input11.value,
        input2: input12.value,
        input3: input13.value,
    };
    fetch("/posted",
    {
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify(data1)
    })
    .then(res=>{
        window.location.href="/front-posted"
    })
    .catch(err=>{
        console.log(err)
    })

})