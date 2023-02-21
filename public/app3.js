const btn31=document.querySelector("#btn31")
const file31=document.querySelector("#file31")
const file32=document.querySelector("#file32")
const file33=document.querySelector("#file33")

file31.addEventListener("change",()=>{
    const file=file31.files[0]
    const reader=new FileReader()
    reader.readAsArrayBuffer(file)

    reader.onload=()=>{
        const result=reader.result
        const unit8=new Uint8Array(result)
        console.log(unit8.length/(1024*1024))
        console.log(unit8.toString().length/(1024*1024))
            fetch("/posted",{
                method:"post",
                headers:{"Content-Type":"application/x-www-form-urlencoded"},
                body:new URLSearchParams(`unit8String=${unit8.toString()}`)
            })
            .then(res=>{
                console.log("completed-1")
                window.location.href="/front-posted"
            })
            .catch(err=>{console.log("error exist-2")})
    }
})
