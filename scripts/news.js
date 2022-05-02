// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.querySelector("#navbar").innerHTML=navbar()
import {append} from "../components/fnews.js";
let arr1=JSON.parse(localStorage.getItem("news"))
append(arr1)



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