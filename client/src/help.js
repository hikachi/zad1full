import React,{Component} from "react";
import schemat from "./schemat.svg";
class Help extends Component{
render(){
    
    return <div>
    <p>
        Zadanie powstalo na podstawie  projektu clienta z 
 
    </p>
    <p>github.com/adamdubey/fibonacci-calculator</p>
    <p> a nastepnie przerobiona w taki sposob aby zadzialala z 
        backendem ktory zostal stworzony na podstawie</p>
    <p>https://www.section.io/engineering-education/build-and-dockerize-a-full-stack-react-app-with-nodejs-and-nginx/</p>
    <p>
        Projekt ten byl moja pierwsza stycznoscia z javascript, dlatego wiec za wszelkie niedogodnosci z tym zwiazane przepraszam.
</p>
    <img src={schemat}/>
</div>
}
}
export default Help;