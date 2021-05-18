import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from 'react'
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {TextArea} from "../../Common/formsControls/formsControls";

const maxLength30 = maxLengthCreator(30)
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name={'newPostText'} component={TextArea} placeholder={'Please write your message...'}
                validate={[required,maxLength30]}
                />
            </div>
            <div>
                <button>Add Post</button>
            </div>
        </form>
    )
}

const MyPostsReduxForm = reduxForm({form: 'addMyPosts'})(MyPostsForm)


const MyPosts  = React.memo(props =>  {
    let postsElements = props.posts.map(p => <Post key={p.id} massage={p.massage} likeCount={p.likesCount}/>)

    let addPost = (values) => {
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
