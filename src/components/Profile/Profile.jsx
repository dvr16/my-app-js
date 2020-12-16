import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
// import Profile from './Profile/Profile';

const Profile = (props) =>{

    return(
        <div>
            <ProfileInfo />
            <MyPostsContainer />
            </div>
            );
}

export default Profile;