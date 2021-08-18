import {Row, Col, Button, Card, Container, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {initializeReducer, checkReducer, trackerState} from "../state-slices/tracker-slice"
import isengard from "../utils/isengard";
import {IQuestionData} from "../models/question-model";
import {ModuloDisplay} from "../components/ModuloDisplay";
import NavigationBar from "./NavigationBar";

const MainPage = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const modules = useSelector(trackerState);

    useEffect(()=>{
        console.log("Initializing Modules");

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
            // nameArray.forEach(async (name) => {
            //     let currCollection: IQuestionData = await isengard.getCollection(name);
            //     console.log("We have currcollection now");
            //     console.log(currCollection);
            //     modules.push(currCollection);
            // });
            console.log(modules);
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