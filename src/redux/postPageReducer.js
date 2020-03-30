const POST_UPDATE = 'POST-UPDATE';
const POSTADD = 'POSTADD';


//инициализируем начальное состояние
let initialState = {
    postData: [{ id: 1, post: "Hi! How are you?", likeCount: 20 }, { id: 2, post: "This is my first post", likeCount: 12 }],
    newVal: ''
}
//если нет state, используем значение по умолчанию state = initialState
const postPageReducer = (state = initialState, action) => {

    switch (action.type) {
        case POST_UPDATE: {
            let stateCopy = { ...state };
            stateCopy.newVal = action.post;
            return stateCopy;
        }
        case POSTADD: {
            let stateCopy = { ...state };
            let newPost = {
                id: 3,
                post: state.newVal,
                likeCount: 0
            };
            
            stateCopy.postData = [...state.postData];
            if (stateCopy.newVal != '') {
                stateCopy.postData.push(newPost);
            }
            stateCopy.newVal = '';
            return stateCopy;
        }
        default:
            return state;
    }
}

export const clickActionCreate = () => {
    return { type: POSTADD };
}
export const updateActionCreate = (text) => {
    let action = { type: POST_UPDATE, post: text };
    return action;
}

export default postPageReducer;