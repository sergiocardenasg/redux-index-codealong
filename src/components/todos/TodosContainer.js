import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodosContainer extends Component {
    
    renderTodos = () => this.props.todos.map((todo, id) => <Todo key={id} text={todo} />)
    
    render() {
        return(
        <ol>
            {this.renderTodos()}
        </ol>
        );
    }
};

const mapStateToProps = state => {
    return {
      todos: state.todos
    }
  }
  
export default connect(mapStateToProps)(TodosContainer);