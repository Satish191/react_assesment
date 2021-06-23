import React,{Component} from 'react'
import {connect} from 'react-redux'
import * as ActionTypes from '../../Redux/Actions/Action'
import axios from 'axios'
import {Link} from 'react-router-dom';

class EditTodo extends Component {

 state={
    userId:this.props.todoList[this.props.match.params.id].userId,
    id:this.props.todoList[this.props.match.params.id].id,
    title : this.props.todoList[this.props.match.params.id].title,
    completed: this.props.todoList[this.props.match.params.id].completed
}

updateTodo =()=>{

    axios.put(`http://jsonplaceholder.typicode.com/todos/${this.props.match.params.id}`,this.state)
    .then((response)=>{
        console.log(response.data)
        this.props.updateTodoList(response.data)

    })    

}

    render() {

        console.log(this.props)

        return(

        
            <div>
                <h2>Edit The Title of Your Todo</h2>
                <label>Title</label><br/>
                <input type='text' placeholder='Title' 
                        value={this.state.title} 
                        onChange={(e)=>this.setState({title:e.target.value})}></input><br/>

                <Link to='/'><button onClick={this.updateTodo}>Update</button></Link>     
                

            </div>

        )
    }
}
const mapStateToProps=(state)=>{

    return{
        todoList : state.allTodo.Todos
    }

};

const mapDispatchToProps=(dispatch)=>{

    return {

        updateTodoList: (updatedTodoVal)=>dispatch(ActionTypes.updateTodo(updatedTodoVal)),

    }

};

export default connect(mapStateToProps,mapDispatchToProps)(EditTodo);

