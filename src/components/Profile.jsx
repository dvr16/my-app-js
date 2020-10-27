import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
      <div className={s.content}>
      <div>
      <img src='https://i.artfile.ru/1920x1200_454642_[www.ArtFile.ru].jpg' />
      </div>
      <div>
        ava + description
      </div>
      <div>
        My posts
        <div>
          New posts
        </div>
        <div className={s.posts}>
          <div className={s.item}>
            post 1
          </div>
          <div className={s.item}>
            post 2
          </div>
        </div>
      </div>
      </div>
    );
}

export default Profile;