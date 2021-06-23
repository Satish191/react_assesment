import React from 'react';
import {Link} from 'react-router-dom'
import './TodoTable.css'

class TodoTable extends React.Component{


    postIdtoDelete =(id)=>{

        this.props.getTheID(id);
    }


    render(){

        return(
            <div>
                <table className='table'>
                    <thead className='table'>
                        
                        <th className='table'>ID</th>
                        <th>TITLE</th>
                        <th>Completed</th>
                        <th>USER ID</th>
                    </thead>
                    <tbody>
                        {this.props.TodoArr.map(eachTodo=>(
                            <tr>
                                <td>{eachTodo.id}</td>
                                <td>{eachTodo.title}</td>
                                <td>{eachTodo.completed ? 'Yes':'No'}</td>
                                <td>{eachTodo.userId}</td>
                                <td ><Link to={'/Edit'+eachTodo.id}><input className='button' type="button" value='Update'/> </Link> </td>
                                <td><input className='button' type='button' value='Delete' onClick={()=>this.postIdtoDelete(eachTodo.id)}></input></td>
                                
                                
                    
                            </tr>
                        ))}

                    </tbody>

                </table>
            </div>
        )

    }
    
}

export default TodoTable;