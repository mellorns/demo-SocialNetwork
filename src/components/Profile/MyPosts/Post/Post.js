import s from './Post.module.css'

const Post = (props) => {

    return <div className={s.item}>
        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"/>
        <span>{props.massage}</span>
        <div>
            <span>like {props.likeCount}</span>
        </div>
    </div>


}
export default Post;