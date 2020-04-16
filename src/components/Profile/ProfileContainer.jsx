import React from 'react';
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { setUserProfileAC, getUserProfile, getStatus, updateStatus} from './../../redux/postPageReducer';
import { withRouter, Redirect  } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import {compose} from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        //console.log('ProfileContainer', this.props);
      
         
        let userId = this.props.match.params.userId;
        //console.log('userId', this.props);
        //если нет ид в урле,
        if(!userId){
            //то показывать : 
             //userId = 6979;
             userId = this.props.authorizedUserId;
            if(!userId){
                this.props.history.push('/login'); //вызов программного редиректа
            }
             
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
        //изначально вызывали так 
        // axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId).then(response => {     
        //     this.props.setUserProfileAC(response.data);
        // });
        
    }

    render() {
        return <Profile {...this.props} 
                        profile={this.props.profile} 
                        status={this.props.status}
                        updateStatus={this.props.updateStatus}/> 
                    //updateStatus - прокидываем, т.к он нужен в профиле для редактирования с татуса
    }
}


//выносим одинаковое действие по прокидыванию пропсов isAuth. чтобы не следить за этим во всех компонентах
// let mapStateToPropsForRedirect = (state) => ({ 
//     isAuth: state.auth.isAuth
// })
// //и коннектим два раза . потом вынесем это действие в общее место withAuthRedirect
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);
//let AuthRedirectComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({ 
    profile: state.postPage.profile,
    status: state.postPage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth 
})

//let WithRoutProfileContainer = withRouter(AuthRedirectComponent);


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);


// export default connect(mapStateToProps, {getUserProfile}
//     // {setUserProfileAC}
//     )(WithRoutProfileContainer);