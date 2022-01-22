import React, { Component } from "react";
import axios from "axios";

class Fibonacci extends Component {
  state = {
    seenIndexes: [],
    index: "",
    val:0,
  };

  componentDidMount() {
    this.fetchIndexes();
  }

  async fetchIndexes() {
    const values = await axios.get("/api/get");
    console.log('FETCH INDEXES'+values.data);
    this.setState({ seenIndexes: values.data });
  }


  handleSubmit = async (event) => {
    event.preventDefault();
    var valu=this.fib(this.state.index);
    console.log(valu);
    this.setState({ index: "",val:valu});
    await axios.post("/api/insert", {
      setNumber: this.state.index,
      setValue: valu,
    });
    
   
    //this.fetchValues();
     this.fetchIndexes();
    //  this.showCalcValue();
  };

  renderSeenIndexes() {
    console.log('render index');
    
    return this.state.seenIndexes.map(({ number }) => {
      return number;}
      ).join(", ");
  }

  fib(ind) {
    if(ind<2) return 1;
    return this.fib(ind-1)+this.fib(ind-2);
  }

  showCalcValue(){
    return  <p1>{this.state.val}</p1>;
  }
  renderValues() {
    const entries = [];

    for (let key in this.state.values) {
      entries.push(
        <div key={key}>
          For index {key} I calculated {this.state.values[key]}
        </div>
      );
    }

    return entries;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index:</label>
          <input
            value={this.state.index}
            onChange={(event) => this.setState({ index: event.target.value })}
          />
          <button>Submit</button>
        </form>

        <h3>Calculated fibo:</h3>
        {this.showCalcValue()}

        <h3>Calculated Values (trzeba odswiezyc strone ctrl+r):</h3>
        {this.renderSeenIndexes()}
      </div>
    );
  }
}

export default Fibonacci;
