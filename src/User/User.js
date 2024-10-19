import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUserRequest } from './userSlice';

const User = () => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.user);

    useEffect(() => {
        dispatch(fetchUserRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className='container'>
            {data?.map((user) => (
                <div className="user-card" key={user.email}>
                    <div className="user-info">
                        <h2 className="user-name">{user.name}</h2>
                        <p className="user-email">{user.email}</p>
                    </div>
                </div>
            ))}

        </div>
    );
};

export default User;
