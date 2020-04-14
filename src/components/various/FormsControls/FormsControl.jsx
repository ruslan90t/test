import React from 'react';
import cl from './FormsControl.module.css'


//создаем обертку над обычной textarea и передаем все пропсы, 
//которые изначально в нее попадали {...props}
//рест оператор {input, meta, ...props}
//разбиваем входящий объект на нужные нам и ненужные параметры
//сообщения об ошибках и текст самих ошибок сидят в свойствах (meta)
 const FormControl = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error; //вынесли условие в переменную, чтоб не засорять код

    return(
        <div className={cl.formControl + " " + ( hasError ? cl.error : " ") }>
           <div> {props.children} </div>
    <div>{ hasError && <span><p>{meta.error}</p></span>}</div>
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props} > <textarea {...input} {...restProps}/> </FormControl>
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;    
    return <FormControl {...props} > <input {...input} {...restProps}/> </FormControl>
}
//из такой штуки оптимизируем код (были компоненты const Input,const Textarea)
// export const Input = ({input, meta, ...props}) => {
//     const hasError = meta.touched && meta.error; //вынесли условие в переменную, чтоб не засорять код

//     return(
//         <div className={cl.formControl + " " + ( hasError ? cl.error : " ") }>
//            <div> <input {...input} {...props}/></div>
//     <div>{ hasError && <span><p>{meta.error}</p></span>}</div>
//         </div>
//     )
// }