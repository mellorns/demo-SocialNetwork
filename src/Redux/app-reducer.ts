import {getAuthUserData} from "./auth-reducer";
import {AppStateType, InferActionsType} from "./redux-store";
import {Dispatch} from "redux";



let initialState = {
    initialized: false
}
type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const appReducer = (state = initialState, action:ActionsType): InitialStateType=> {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS': {
            return {
                ...state,
                initialized: true,
            }
        }
        default:
            return state
    }
}


const actions = {
    initializedSuccess: () => ({type: 'INITIALIZED_SUCCESS'} as const)
}




type DispatchType = Dispatch<ActionsType>
type GetState = () => AppStateType


export const initializeApp = () =>  (dispatch:DispatchType, getState: GetState) => {
        // @ts-ignore
        let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
            dispatch(actions.initializedSuccess())
        })

    }





export default appReducer;