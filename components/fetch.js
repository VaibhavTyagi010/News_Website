let getdata=async(url)=>{
    try{
        let res=await fetch(url)
        let data =await res.json();
        // console.log(data.articles)
        return data.articles
    }
    catch(err)
    {
        console.log(err)
    }
}

let append=(data)=>{
    document.querySelector("#results").innerHTML=null
    data.map((ele)=>{
        let box=document.createElement("div")
        box.setAttribute("class","news")
       let image=document.createElement("img")
       image.src=ele.urlToImage
       let div1=document.createElement("div")
       div1.append(image)
       let div2=document.createElement("div")
       let h4=document.createElement("h4")
       h4.innerText=ele.title
       let p=document.createElement("p")
       p.innerText=ele.description
       div2.addEventListener("click",function()
       {
          newsdata(ele)
       })

       div2.append(h4,p)
       box.append(div1,div2)
       document.querySelector("#results").append(box)

    })

}
let arr=[]
let  newsdata=(ele)=>{
arr.push(ele)
localStorage.setItem("news",JSON.stringify(arr))
window.location.href="news.html"
}


export {getdata,append}