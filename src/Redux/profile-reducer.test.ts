import profileReducer, {actions} from "./profile-reducer";
import {ProfileType} from "../types/types";
let initialState = {
    posts: [
        {id: 1, massage: '"It\'s my first post!', likesCount: 10},
        {id: 2, massage: 'Hello', likesCount: 24},
    ],
    profile: null as ProfileType | null,
    status: ''
}

it(`length of post should be increment`, () => {
    //1.test data
    let action = actions.addPostCreator('Hello')

    //2.action
    let newState = profileReducer(initialState,action)
    //3.expectation
    expect(newState.posts.length).toBe(3)
})

it(`after delete length should be decrement`, () => {
    //1.test data
    let action = actions.deletePost(1)

    //2.action
    let newState = profileReducer(initialState,action)
    //3.expectation
    expect(newState.posts.length).toBe(1)
})

