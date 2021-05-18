const SEND_MESSAGE = 'SEND-MESSAGE'

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
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'I like it'},
        {id: 3, message: 'yo'},
        {id: 4, message: 'yo'},
        {id: 5, message: 'yo'}]
}


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
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


export const sendMessageCreator = (newMessage) => ({type: SEND_MESSAGE, newMessage})


export default dialogsReducer;