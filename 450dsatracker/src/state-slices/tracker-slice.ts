import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {IQuestionData} from "../models/question-model";
import {checkModel} from "../models/check-model";


interface State {
    modules: Array<IQuestionData>;
}

const initialState: State = {
    modules: []
}

export const trackerSlice = createSlice({
    name: "tracker",

    initialState,

    reducers: {
        //reducer that initializes reducer state
        initializeReducer: (state, action: PayloadAction<IQuestionData[]>) => {
            state.modules = action.payload;
        },
        //reducer that, when checked, sets the question's Done parameter to the opposite of its current parameter
        checkReducer: (state, action: PayloadAction<checkModel>) =>{
            let index = 0;
            state.modules.forEach((module) =>{
                if(module.topicName == action.payload.topicName){
                    let currentBool = !state.modules[index].questions[action.payload.index].Done;
                    state.modules[index].questions[action.payload.index].Done = currentBool;
                    if(currentBool){
                        state.modules[index].doneQuestions++;
                    }
                    else{
                        state.modules[index].doneQuestions--;
                    }

                    if(state.modules[index].doneQuestions > 0){
                        state.modules[index].started = true;
                    }
                    else{
                        state.modules[index].started = false;
                    }

                }
            index++;
            })

        }


    }
})

export const { initializeReducer, checkReducer } = trackerSlice.actions;

export const trackerState = (state: RootState) => state.tracker;

export default trackerSlice.reducer;
