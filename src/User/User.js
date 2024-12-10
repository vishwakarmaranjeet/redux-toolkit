import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './userSlice';
import Styles from "./User.module.scss";

const User = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className={Styles.container}>
            {data?.map((user) => (
                <div className={Styles.user_card} key={user.email}>
                    <div className={Styles.user_info}>
                        <h2 className={Styles.user_name}>{user.name}</h2>
                        <p className={Styles.user_email}>{user.email}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default User;
