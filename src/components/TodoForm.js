import React from "react";

class TodoForm extends React.Component {
constructor(){
    super();
    this.state = {
        newItem: ""
    };
};
handleChange = (e) => {
    this.setState({...this.state, newItem: e.target.value});
    
};
submitItem = (e) => {
    e.preventDefault();
    this.setState({...this.state, newItem: ""});
    if(window.localStorage.getItem("todoapp2020ade")){
        return JSON.parse(window.localStorage.getItem("todoapp2020ade"));
      } else{
        window.localStorage.setItem("todoapp2020ade", this.state.newItem);
        return this.state.newItem;
      }
    // this.props.addItem(this.state.newItem);
};
// componentDidMount(){
//     console.log("cdm running");
//     if(window.localStorage.getItem("todoapp2020ade")){
//         return JSON.parse(window.localStorage.getItem("todoapp2020ade"));
//       } else{
//         window.localStorage.setItem("todoapp2020ade", this.state.newItem);
//         return this.state.newItem;
//       }
// }
render(){
    return(
        <>
        <form onSubmit={this.submitItem}>
            <input type="text" name="newItem" placeholder="New Todo" value={this.state.newItem} onChange={this.handleChange}/> 
            <br />
            <button onClick={() => this.props.addItem(this.state.newItem)} className="add-item">Add New Item</button>
            <br />
        <button onClick={this.props.clearCompleted} className="clear-items">Clear Completed Item(s)</button>
        <br/>
        </form>
        </>
    )
}

}

export default TodoForm;
