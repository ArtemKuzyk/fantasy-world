import { createSlice } from "@reduxjs/toolkit";

const bagItemSlice = createSlice({
    name : 'bagItem',
    initialState : {
        text : '',
        bagItemDisplay : false,
        actionId : '',
    },
    reducers : {
        // bagItemDisplayTrue : state => {state.bagItemDisplay = true},
        // bagItemDisplayFalse : state => {state.bagItemDisplay = false}

        bagItemDisplayTrue(state){state.bagItemDisplay = true},
        bagItemDisplayFalse(state){state.bagItemDisplay = false},
        bagItemSetText(state, action){
            console.log(state)
            console.log(action)
            state.text = action.payload.text},
        bagItemSetActionId(state, action){state.actionId = action.payload.id}
    }
});

export const {bagItemDisplayFalse, bagItemDisplayTrue, bagItemSetText, bagItemSetActionId} = bagItemSlice.actions;
export default bagItemSlice.reducer;