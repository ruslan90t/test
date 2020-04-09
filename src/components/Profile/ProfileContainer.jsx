import React from 'react';
import { Profile } from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfileAC, getUserProfile } from './../../redux/postPageReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from './../../api/api';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
        //изначально вызывали так 
        // axios.get('https://social-network.samuraijs.com/api/1.0/profile/'+ userId).then(response => {     
        //     this.props.setUserProfileAC(response.data);
        // });
      
    }


    render() {
        return <Profile {...this.props} profile={this.props.profile}/>

    }
}

let mapStateToProps = (state) => ({ 
    profile: state.postPage.profile
})

let WithRoutProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}
    // {setUserProfileAC}
    )(WithRoutProfileContainer);