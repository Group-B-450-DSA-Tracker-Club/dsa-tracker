import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {IQuestion, IQuestionData} from "../models/question-model";

interface State {
    modules: Array<IQuestionData>;
}

const initialState: State = {
    modules: []
}

export const trackerSlice = createSlice({
    name: "tracker",
    initialState,
    reducers:{
        //reducer that fetches database data
        initializeReducer: (state, action: PayloadAction<IQuestionData>) =>{
        },
        //reducer that, when checked, sets the question's Done parameter to the opposite of its current parameter
        checkReducer: (state, action: PayloadAction<IQuestion>) =>{

        }

    }
})

export const {} = trackerSlice.actions;

export const trackerState = (state: RootState) => state.tracker;

export default trackerSlice.reducer;
