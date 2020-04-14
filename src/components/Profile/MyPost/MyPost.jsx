import React from 'react';
import { PostItem } from './PostItem/PostItem';
import cl from './MyPost.module.css';
import { Field, reduxForm } from 'redux-form';
import { requiredField, maxLengthCreator } from './../../../utils/validators/validators';
import { Textarea } from './../../various/FormsControls/FormsControl';
import AddForm from '../../AddForm/AddForm';

//форму делать по аналогии с эти файлом
//обязательно вызываем так валидатор
const maxLengthCreator_10 = maxLengthCreator(10);

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                {/* вариант до создания компонента Textarea
                <Field name='newPostText'  
                component='textarea'
                validate={[requiredField, maxLengthCreator_10]}
                
                /> */}
                <Field name='newPostText'
                    placeholder={'yo'}
                    //при отрисовке компонент, используем {}, a не ''
                    component={Textarea}
                    validate={[requiredField, maxLengthCreator_10]}

                />
            </div>
            <div>
                <button>Добавить</button>
            </div>
        </form>
    )
}

AddNewPostForm = reduxForm({ form: 'ProfileAddNewPostForm' })(AddNewPostForm);
//вынести в отдельный файл для формы
export const MyPost = (props) => {
    //console.log("MyPost", props);



    let postElem = props.postData.map((el) => (<PostItem message={el.post} likeCount={el.likeCount} key={el.id} />));

    //let refTest = React.createRef();

    // let click = () => {  
    //     props.clickActionCreate();
    // }

    // let onChangePost = () => {
    //     let text = refTest.current.value;
    //     props.updateActionCreate(text);
    // }
    let click = (val) => {
        props.clickActionCreate(val.newPostText);
    }
    return (
        <div className={cl.wrap}>
            My posts
            {/*было раньше
             <div>
                <textarea onChange={onChangePost}
                    value={props.newVal}
                    ref={refTest} />
            </div>
            <div>
                <button onClick={click}>Добавить</button>
            </div> */}
            
            <AddNewPostForm onSubmit={click} />
            <div>New ppost</div>
            <div>
                {postElem}
            </div>
        </div>
    )
}



