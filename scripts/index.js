// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
import {count} from "../components/count.js"
document.querySelector("#sidebar").innerHTML=count()

import {getdata,append} from "../components/fetch.js";
let url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`

let result = async(url)=>{
    getdata(url).then((res)=>{
        console.log(res)
         append(res)
    })

}
result(url)

let csearch1=()=>{
  url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=in`
  result(url)

}
let csearch2=()=>{
    url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch`
    result(url)
  
  }
  let csearch3=()=>{
    url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=us`
    result(url)
  
  }
  let csearch4=()=>{
    url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk`
    result(url)
  
  }
  let csearch5=()=>{
    url=`https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz`
    result(url)
  
  }


  document.querySelector("#in").addEventListener("click",csearch1)
  document.querySelector("#ch").addEventListener("click",csearch2)
  document.querySelector("#us").addEventListener("click",csearch3)
  document.querySelector("#uk").addEventListener("click",csearch4)
  document.querySelector("#nz").addEventListener("click",csearch5)
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
