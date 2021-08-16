import {createSlice, PayloadAction } from "@reduxjs/toolkit";
import {RootState} from "../store/store";
import {IQuestion, IQuestionData} from "../models/question-model";
import isengard from "../utils/isengard";

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
        //reducer that fetches database data and stores the modules into the state array
        initializeReducer: (state) =>{
            let nameArray = isengard.getCollectionNames();
            nameArray.forEach((name) => {
                state.modules.push(isengard.getCollection(name));
            })
        },
        //reducer that, when checked, sets the question's Done parameter to the opposite of its current parameter
        checkReducer: (state, action: PayloadAction<IQuestionData>) =>{
            let index = 0;
            state.modules.forEach((module) =>{
                if(module.topicName = action.payload.topicName){
                    for(let i = 0; i < module.questions.length; i++){
                        if(module.questions[i].Done != action.payload.questions[i].Done){
                            state.modules[index].questions[i].Done = !state.modules[index].questions[i].Done;
                        }
                    }
                    // @ts-ignore
                    break;
                }
            index++;
            })
        }

    }
})

export const {} = trackerSlice.actions;

export const trackerState = (state: RootState) => state.tracker;

export default trackerSlice.reducer;
