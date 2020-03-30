import { clickAddMessCreate, updateMessCreate } from '../../redux/messPageReducer'
import { Dialogs } from './Dialogs'
import { connect } from 'react-redux';



let mapStateToProps = (state) => {
    return {
        messPage:state.messPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessCreate: (body) => {
            
            dispatch(updateMessCreate(body));
        },
        clickAddMessCreate: () => {
            dispatch(clickAddMessCreate());
        }
    }
}
export const DialogsContainer = connect( mapStateToProps, mapDispatchToProps )( Dialogs );