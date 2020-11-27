import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
    return(
            <div className={s.item}>
                <img src='https://cdn.zoomg.ir/2017/3/af01668d-73fd-444f-b803-f30bb5a7db24.jpg' />
                {props.message}
                <div>
                <span>like</span> {props.likesCount}
                </div>
            </div>
        );
}

export default Post;