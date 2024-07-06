// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 user:{ name: '',
  age: 0,
  email: ''
}
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      const { name, age, email } = action.payload;
      state.user.name = name;
      state.user.age = age;
      state.user.email = email;
      //alert(state.name);
    },
    clearUser(state) {
      state.user.name = '';
      state.user.age = null;
      state.user.email = '';
      //alert('clearUser Called !');
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
