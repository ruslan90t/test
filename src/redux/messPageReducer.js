const MESSADD = 'MESSADD';
const MESSUPDATE = 'MESSUPDATE';

//инициализируем начальное состояние
let initialState = {
        dialogData: [{ id: 1, name: "Артем" }, { id: 2, name: "Саша" }],
         messData: [{ id: 1, mes: "привет" }, { id: 2, mes: "как дела?" }],
         newMess: ''
}

//если нет state, используем значение по умолчанию state = initialState
const messPageReducer = (state = initialState, action) => {

        // let stateCopy = { ...state };   // копируем объект поверхностно
        //     stateCopy.messData = [...state.messData]; //копируем массив, который нам нужен для изменения 
//равносильная запись 
        // let stateCopy = {
        //     ...state,
        //     messData: [...state.messData]
        // }
    //let stateCopy;// копируем только объект, т.к в диалогконтейнере 
                                                        // let mapStateToProps = (state) => {
                                                        //     return {
                                                        //         messPage:state.messPage <----- ветка целиком
                                                        //     }
                                                        // }
              //при поверхностном копировании только изменяемых частей, на некопированные части остается ссылка
              //и экономится память. с последующим созданием копии, ссылки также ссылаются 
              //на предыдущую копию (предыдущее состояние)

    switch (action.type) {
//копию надо делать внутри case, где она непосредственно нужна. выносить вверх ее создание не рекомендуется
        case MESSADD:
           // stateCopy = { ...state, messData: [...state.messData] }

            // let newMessage = {
            //     id: 3,
            //     mes: state.newMess,
            // };
            // if (stateCopy.newMess != '') {
            //     stateCopy.messData.push(newMessage);
            // }
            // stateCopy.newMess = '';
            //аналогичная запись
            //*************************************** */
            // let body = state.newMess;
           
            //     stateCopy = { 
            //     ...state, //делаем копию изменяемого параметра
            //     newMess: '',//обнуляем
            //     messData: [...state.messData,//копируем ветку массива сообщений
            //     {id:3, mes: body}]  //(...)вместо push() добавляет в массив созданное сообщение
            //     };   // [(в начало массива), ...state.messData, (в конец массива)] пример работы spread оператора

            // return stateCopy;
            //***************************** *///
            //аналогичная запись
            //let body = state.newMess;
            //теперь берем значение не из промежуточного хранилища state.newMess, а из action.newMess
            let body = action.newMess;
            return (
                {
                    ...state,
                    newMess: '',
                    messData: [...state.messData,
                    {id:3, mes: body}]
                }
            )
//теперь не нужно обновление поля state.newMess и соотетственно не нужен updateMessCreate и исходящие из этого последствия
        case MESSUPDATE:
            // stateCopy = { ...state }
            // stateCopy.newMess = action.mess;
            //аналогичная запись
           
            return ({
                ...state, 
                newMess: action.mess    //потому что формируется объект
            });

        default:
            return state;
    }
}
//раньше
// export const clickAddMessCreate = () => {
//     return { type: MESSADD }
//  };
export const clickAddMessCreate = (newMess) => {
    return { type: MESSADD , newMess}
 };
 //теперь не нужно после использования библиотеки import { Field, reduxForm } from 'redux-form';
// export const updateMessCreate = (mess) => {
//     let action = {type: MESSUPDATE, mess: mess};
 
//        return action;
//  }

export default messPageReducer;