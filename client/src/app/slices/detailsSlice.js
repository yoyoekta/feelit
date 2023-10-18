import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    info: {
        name: '',
        phone: '',
        address: '',
        pincode: '',
    },
    payment: {
        method: '',
        cardName: '',
        cardNo: '',
        cvv: '',
        expiry: '',
    },
    
};

const detailsSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        setInfo: (state, action) => {
            const { info } = action.payload;
            sessionStorage.setItem('info', JSON.stringify(info));
            state.info = info;
        },
        setPaymentInfo: (state, action) => {
            const { payment } = action.payload;
            sessionStorage.setItem('payment', JSON.stringify(payment));
            state.payment = payment;
        }
    }
});

export const { setInfo, setPaymentInfo } = detailsSlice.actions;
export default detailsSlice.reducer;

export const selectInfo = (state) => state.details.info;
export const selectPaymentInfo = (state) => state.details.payment;