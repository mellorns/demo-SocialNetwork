import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, massage: '"It\'s my first post!', likesCount: 10},
                {id: 2, massage: 'Hello', likesCount: 24},
            ],
            newPostText: 'Please write a message...'
        },
        dialogsPage: {
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
                {id: 5, message: 'yo'}],
            newMessageBody: 'Please write a message...'
        },
        sideBar: [
            {id: 1, friend: 'henri'},
            {id: 2, friend: 'jess'},
            {id: 3, friend: 'mike'},]
    },
    _callSubscriber() {
        console.log('State changed');
    },


    getState(){
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },



    dispatch(action) {

       this._state.profilePage =   profileReducer(this._state.profilePage,action)
       this._state.dialogsPage =   dialogsReducer(this._state.dialogsPage,action)


        this._callSubscriber(this._state)
    }


}




export default store;