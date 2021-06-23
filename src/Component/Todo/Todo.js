import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import * as ActionTypes from '../../Redux/Actions/Action'
import TodoTable from './TodoTable'
import './Todo.css'


class Todo extends Component {


    componentDidMount() {

        console.log('satheesh')
        axios.get('http://jsonplaceholder.typicode.com/todos/?_limit=50')
        .then((response)=>{
            console.log('satish')
            console.log(response.data);
            this.props.addTodoList(response.data)

            

        })


    }

    DeleteHandler=async (id)=>{

            await axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`)

            this.props.deleteTodo(id)




    }

    render(){
        console.log(this.props.todoList)
        return(

            <div >
                <h1 className='Heading'>List of Todo's</h1>
                <TodoTable TodoArr={this.props.todoList} getTheID={this.DeleteHandler}></TodoTable>
               
            
            </div>
        );
    }

}

const mapStateToProps=(state)=>{

    return{
        todoList : state.allTodo.Todos
    }

};

const mapDispatchToProps=(dispatch)=>{

    return {

        addTodoList: (TodoData)=>dispatch(ActionTypes.setTodo(TodoData)),
        deleteTodo : (id)=>dispatch(ActionTypes.deleteTodo(id))

    }

};

export default connect(mapStateToProps,mapDispatchToProps)(Todo);