import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../../utils/validators/validators";
import {createField, Input} from "../../Common/formsControls/formsControls";
import {PostType} from "../../../types/types";


type MyPostsFormType= {

}

const MyPostsForm:React.FC<InjectedFormProps<MyPostsFormValuesType,MyPostsFormType> & MyPostsFormType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                {createField<MyPostsFormTypeKeys>('Please write your message...', "newPostText", Input, [required])}
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm<MyPostsFormValuesType, MyPostsFormType>({form: 'addMyPosts'})(MyPostsForm)

type MyPostsFormTypeKeys = Extract<keyof MyPostsFormValuesType, string>


type MyPostsFormValuesType= {
 newPostText: string
}

export type MapPropsType = {
    posts: Array<PostType>
}
export type DispatchPropsType = {
    addPost: (newPostText: string) => void
}

const MyPosts:React.FC<MapPropsType & DispatchPropsType>  = React.memo(props =>  {
    let postsElements = props.posts.map(p => <Post key={p.id} massage={p.massage} likeCount={p.likesCount}/>)

    let addPost = (values:MyPostsFormValuesType) => {
        props.addPost(values.newPostText)
    }

    return <div className={s.postsBlock}>
        My post
        <MyPostsReduxForm onSubmit={addPost}/>
        <div className={s.posts}>
            {postsElements}
        </div>
    </ div>
})

export default MyPosts;
