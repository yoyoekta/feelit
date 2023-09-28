import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    details: {},
};

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setDetails: (state, action) => {
            const { details } = action.payload;
            // localStorage.setItem('details', JSON.stringify(details));
            state.details = details;
        }
    }
});

export const { setDetails } = detailsSlice.actions;
export default detailsSlice.reducer;