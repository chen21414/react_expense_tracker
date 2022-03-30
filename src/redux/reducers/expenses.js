import { ADD_EXPENSE, DELETE_EXPENSE } from "../action-types/expenses";

const intialState = {
    expenseList: [],
}

export const expenseReducer=(state=intialState, action)=>{
    switch(action.type){
        case ADD_EXPENSE:{
            return{
                ...state,
                expenseList:[...state.expenseList, action.data],
            };
        }
        case DELETE_EXPENSE: {
            const {data} = action;
            const updatedList = state.expenseList.filter(
                item=>item.createdAt!==data.createdAt
            );
            return{
                ...state,
                expenseList: updatedList
            }
        }
        default:
            return state;
    }
}