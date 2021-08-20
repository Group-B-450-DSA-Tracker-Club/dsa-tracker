import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {initializeReducer} from "../state-slices/tracker-slice"
import isengard from "../utils/isengard";
import {IQuestionData} from "../models/question-model";
import {ModuloDisplay} from "../components/ModuloDisplay";
import NavigationBar from "./NavigationBar";

const MainPage = () =>{
    const dispatch = useDispatch();

    useEffect(()=>{

        const initializeModules = async () =>{
            let nameArray = await isengard.getCollectionNames();
            let modules: Array<IQuestionData> = [];
            modules.length = nameArray.length;
            for(let i =0; i < nameArray.length; i++){
                let arr = await isengard.getCollection(nameArray[i])
                let currCollection: IQuestionData = arr[0];
                console.log(currCollection);
                modules[i] = currCollection;
            }
            dispatch(initializeReducer(modules));

        }
        initializeModules();
    }, []);

    return (
        <>
            <NavigationBar/>
            <ModuloDisplay />
        </>
    );
};

export default MainPage;