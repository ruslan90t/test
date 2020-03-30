import React from 'react'
import { PostItem } from './PostItem/PostItem'
import cl from './MyPost.module.css'

export const MyPost = (props) => {
    //console.log("MyPost", props);
   


    let postElem = props.postData.map((el) => (<PostItem message={el.post} likeCount={el.likeCount} />));

    let refTest = React.createRef();

    let click = () => {  
        props.clickActionCreate();
    }

    let onChangePost = () => {
        let text = refTest.current.value;
        props.updateActionCreate(text);
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



