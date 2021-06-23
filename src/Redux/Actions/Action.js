

export const SET_TODO = 'SET_TODO'
export const UPDATE_TODO='UPDATE_TODO'
export const DELETE_TODO ='DELETE_TODO'

export const setTodo =(TodoData)=>{

    return {
        type : SET_TODO,
        TodoData: TodoData
    }

}

export const updateTodo =(updatedTodoVal)=>{

    return {
        type:UPDATE_TODO,
        updatedTodoVal:updatedTodoVal

    }

}
export const deleteTodo =(id)=>{

    return{
        type:DELETE_TODO,
        id:id 
    }
}
