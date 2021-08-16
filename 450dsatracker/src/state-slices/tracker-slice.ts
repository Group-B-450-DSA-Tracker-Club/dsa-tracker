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
        initializeReducer: (state, action: PayloadAction<Array<IQuestionData>>) => {
            console.log("We are in the reducer: ");
            console.log(action.payload);
            state.modules = action.payload;
            // let tempPayload: Array<IQuestionData> = action.payload;
            // let temp: Array<IQuestionData> = state.modules;
            // tempPayload.forEach(async (module) => {
            //     console.log("Inside for loop");
            //     console.log(module);
            //     await temp.push(module);
            // });
            // console.log("WE ARE HERE");
            // console.log(temp);
            //
            //
            // state.modules = temp;
            // console.log("AND NOW WE ARE HERE");
            //
            // state.modules = action.payload;
            // console.error(state.modules);
        },
        //reducer that, when checked, sets the question's Done parameter to the opposite of its current parameter
        checkReducer: (state, action: PayloadAction<checkModel>) =>{
            let index = 0;
            state.modules.forEach((module) =>{
                if(module.topicName = action.payload.topicName){
                    // for(let i = 0; i < module.questions.length; i++){
                    //     if(module.questions[i].Done != action.payload.questions[i].Done){
                    //         state.modules[index].questions[i].Done = !state.modules[index].questions[i].Done;
                    //     }
                    // }
                    state.modules[index].questions[action.payload.index].Done = !state.modules[index].questions[action.payload.index].Done;
                }
            index++;
            })
        }

    }
})

export const { initializeReducer, checkReducer} = trackerSlice.actions;

export const trackerState = (state: RootState) => state.tracker;

export default trackerSlice.reducer;
