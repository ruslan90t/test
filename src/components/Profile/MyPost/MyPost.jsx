import React from 'react'
import { PostItem } from './PostItem/PostItem'
import cl from './MyPost.module.css'
import {clickActionCreate, updateActionCreate} from './../../../redux/postPageReducer'

export const MyPost = (props) => {

    //     let postData = [
    //         {id: 1,post: "Hi! How are you?",likeCount: 20},
    //         {id: 2,post: "This is my first post",likeCount: 12}
    //     ]
    // let postElem = postData.map( (el) => (<PostItem message={el.post} likeCount={el.likeCount}/>));


    let postElem = props.postData.map((el) => (<PostItem message={el.post} likeCount={el.likeCount} />));

    let refTest = React.createRef();

    let click = () => {  
        props.dispatch(clickActionCreate());
    }

    let onChangePost = () => {
        let text = refTest.current.value;
        props.dispatch(updateActionCreate(text));
    }

    return (
        <div className={cl.wrap}>
            My posts
            <div>
                <textarea onChange={onChangePost}
                    value={props.newVal}
                    ref={refTest} />
            </div>
            <div>
                <button onClick={click}>Добавить</button>
            </div>
            <div>New ppost</div>
            <div>
                {postElem}
            </div>
        </div>
    )
}



