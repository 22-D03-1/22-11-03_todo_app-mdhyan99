import { Component } from "react";
import "../App.css"

class Todo extends Component {
    constructor(props){
        super(props)
 this.handle()
    }

    handle =() =>{
        console.log(this.props.inputValue);
    }
  
    render() {
        return (
            <div className="ulListe" >
                <ul id="myUL" onClick={(event) =>this.props.handleDelete(event)}>
                {this.props.inputValue.map((e,i)=> (
                     <li key={i} >{e}<span >x</span></li>
                ))}
                    {/* <li>Hit the gym   <span>x</span></li>
                    <li>Pay bills  <span>x</span></li>
                    <li>Meet George  <span>x</span></li>
                    <li>Buy eggs  <span>x</span></li>
                    <li>Read a book  <span>x</span></li>
                    <li>Organize office  <span>x</span></li> */}
                </ul>
            </div>
        );
    }
}
export default Todo;
