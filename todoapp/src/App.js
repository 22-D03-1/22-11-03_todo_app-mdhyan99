import { Component } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";

class App extends Component {
    constructor() {
        super();
        this.state = { input: [] };
    }
    handleClick = (el) => {
        console.log("hallo", el);
        const arr = this.state.input;
        arr.push(el);
        this.setState({ input: arr });
    };
    handleDelete = (event) => {
        console.log(event);
        if (event.target.nodeName === "SPAN") {
            console.log(event.target.parentNode.childNodes[0]);
        }
        console.log(event.target.nodeName);
        const textli = event.target.parentNode.childNodes[0];
        const stringLi = textli.toString();
        const textIndex = this.state.input.indexOf(stringLi);
        console.log(textIndex);
        console.log(typeof stringLi);
        console.log(typeof this.state.input[0]);
        console.log(event.target.parentNode.childNodes[0].toString());
    };
    render() {
        return (
            <div className="app">
                <Input buttonClick={this.handleClick} />
                <Todo
                    inputValue={this.state.input}
                    handleDelete={this.handleDelete}
                />
            </div>
        );
    }
}

export default App;
