import s from './Post.module.css'
import React from "react";

type PropsType = {
    massage: string
    likeCount: number
}

const Post: React.FC<PropsType> = (props) => {

    return <div className={s.item}>
        <img src="https://www.codeproject.com/KB/GDI-plus/ImageProcessing2/img.jpg"/>
        <span>{props.massage}</span>
        <div>
            <span>like {props.likeCount}</span>
        </div>
    </div>


}
export default Post;