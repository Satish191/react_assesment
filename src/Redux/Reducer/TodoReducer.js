import * as ActionTypes from '../Actions/Action'

const initialState={

        Todos :[]
}

const todoReducer=(state=initialState,action)=>{

    switch(action.type){

        case ActionTypes.SET_TODO: 
            return {
                ...state,
                Todos : action.TodoData
            } 
        
        case ActionTypes.UPDATE_TODO: {

            const index = state.Todos.findIndex(todo=>todo.id===action.updatedTodoVal.id)

            const newArr =[...state.Todos]
            newArr[index]=action.updatedTodoVal
            console.log(action.updatedTodoVal)

            return{
                ...state,
                Todos: newArr
            }

        }

        case ActionTypes.DELETE_TODO :{
            const newArr=state.Todos.filter(todo=>todo.id!==action.id)

            console.log(newArr);

            return {
                ...state,
                Todos:newArr
            }

        }
        
        default: 

            return state;

    }

}


export default todoReducer;