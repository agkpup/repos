import React from 'react';
import { useSelector ,useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/slices/userSlice';

const Page2 = () => {
  const user = useSelector((state) => state.user.user);
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch();
  console.log('user Detail ',`${user} and ${count}`);

  const handleSetUser = () => {
    dispatch(setUser({ name: 'John Doe', age: 18, email: 'john.doe@example.com' }));
  };

  const handleClearUser = () => {
    dispatch(clearUser());
  };

  return (
    <div>
      <h2>Page2 Page</h2>
      <p>Welcome to the Page2 Page!</p>
      <div>
        {user.name ? (
          <div>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>
            <p>Age: {user.age}</p>
            <button onClick={handleClearUser}>Logout</button>
          </div>
        ) : (
          <div>
            <p>No user logged in</p>
            <button onClick={handleSetUser}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page2;