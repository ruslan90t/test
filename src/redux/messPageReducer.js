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


    switch (action.type) {

        case MESSADD:
            let newMessage = {
                id: 4,
                mes: state.newMess,
            };
            if (state.newMess != '') {
                state.messData.push(newMessage);
            }
            state.newMess = '';

            return state;

        case MESSUPDATE:

            state.newMess = action.mess;
            return state;

        default:
            return state;
    }
}

export const clickAddMessCreate = () => {
    return { type: MESSADD }
 };
export const updateMessCreate = (mess) => {
    let action = {type: MESSUPDATE, mess: mess};
 
       return action;
 }

export default messPageReducer;