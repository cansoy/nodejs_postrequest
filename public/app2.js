const btn21=document.querySelector("#btn21")
const input21=document.querySelector("#text21")
const input22=document.querySelector("#text22")
const input23=document.querySelector("#text23")
const input24=document.querySelector("#text24")

btn21.addEventListener("click",()=>{
    let testData={
        name:input21.value,
        surname:input22.value,
        age:input23.value,
        blob:input24.value //worked 9mb data
    }
    fetch("/posted",
    {
        method:"POST",
        headers: {"Content-Type": "application/x-www-form-urlencoded"},
        body:new URLSearchParams(testData)

    })
    .then(res=>{
        console.log("res")
        window.location.href="/front-posted"
    })
    .catch(err=>{
        console.log("err")
    })

})