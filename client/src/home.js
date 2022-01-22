import React,{Component} from "react";
import Fibonacci from "./Fibonacci";
import Help from "./help";
class Home extends Component{

    constructor(){
        super();
        this.state = {
            fibo:false,
            help:false,
        }
    }
  

    showFivo =() =>{
        this.setState({fibo:true,help:false});
    }
    showDesc =() =>{
        this.setState({fibo:false,help:true});
    }
    showHome =() =>{
        this.setState({fibo:false,help:false});
    }
    render(){
        return (
            <div>
                <button onClick={() => this.showHome()}>Home</button>
                <button onClick={() => this.showFivo()}>Fibo</button>
                <button onClick={() => this.showDesc()}>Description</button>
                <div>
                    {this.state.fibo && <Fibonacci/>}
                    <hr/>
                    {this.state.help && <Help/>}
                </div>
            </div>
          
        )
    }
}
export default Home;