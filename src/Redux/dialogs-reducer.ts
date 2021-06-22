import {DialogType, MessageType} from "../types/types";
import {InferActionsType} from "./redux-store";



let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Max',
            avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
        },
        {
            id: 2,
            name: 'Nasty',
            avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg",
        },
        {
            id: 3,
            name: 'Alina',
            avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
        },
        {
            id: 4,
            name: 'Vlad',
            avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
        },
        {
            id: 5,
            name: 'Andre',
            avatar: "https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg"
        },
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I like it'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}] as Array<MessageType>
}

export type InitialStateType = typeof initialState
type ActionsType = InferActionsType<typeof actions>

const dialogsReducer = (state = initialState, action:ActionsType):InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND-MESSAGE': {
            let newMessage = {
                id: 6,
                message: action.newMessage,
            };
            return {
                ...state,
                messages: [...state.messages,newMessage],
            }
        }
        default:
            return state
    }
}

export const actions = {
    sendMessage: (newMessage: string) => ({type: 'SN/DIALOGS/SEND-MESSAGE', newMessage} as const)
}




export default dialogsReducer;