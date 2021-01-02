import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if(props.users.length === 0){
    props.setUsers([
        { id: 1, photoUrl: 'https://img01.rl0.ru/9b1c9e503f59bc7d3a532bc8dadc4185/c615x400i/https/store.rambler.ru/news/img/924314809c5ea5bb724526a88f08b535', 
        followed: false, fullName: 'Dmitry', status: 'I am boss', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 2, photoUrl: 'https://img01.rl0.ru/9b1c9e503f59bc7d3a532bc8dadc4185/c615x400i/https/store.rambler.ru/news/img/924314809c5ea5bb724526a88f08b535', 
        followed: true, fullName: 'Sasha', status: 'I am boss too', location: { city: 'Moscow', country: 'Russia' } },
        { id: 3, photoUrl: 'https://img01.rl0.ru/9b1c9e503f59bc7d3a532bc8dadc4185/c615x400i/https/store.rambler.ru/news/img/924314809c5ea5bb724526a88f08b535', 
        followed: false, fullName: 'Andrew', status: 'I am boss too', location: { city: 'Kiev', country: 'Ukraine' } }
     ])
    }

    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                    <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed ? 
                        <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                        : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>                 
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;