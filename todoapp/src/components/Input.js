import React, { Component } from "react";

export default class Input extends Component {
    constructor(props){
        super (props)
        this.state = {input: ""}
        

    }
       handleInput = (e)=> {
       console.log(e.target.value);
       this.setState({input:e.target.value})

       }
    render() {
        return (
        <>
        <input type="text" onChange={this.handleInput} />
        <button onClick={()=> this.props.buttonClick(this.state.input)}>Add</button>
        </>
        );
    }
}
