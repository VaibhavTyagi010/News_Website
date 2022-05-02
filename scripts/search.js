// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()

import {getdata,append} from "../components/fetch.js";

var query =localStorage.getItem("search")
let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`


let result = async(url)=>{
    getdata(url).then((res)=>{
        console.log(res)
         append(res)
    })

}
result(url)
let arr=[]
  let search =(e)=>{
      if(e.key ==="Enter")
      {
        let v =document.querySelector("#search_input").value
        arr.push(v)
         
        localStorage.setItem("search",v)
      window.location.href="search.html"
     
      }
  }
   document.querySelector("#search_input").addEventListener("keydown",search)