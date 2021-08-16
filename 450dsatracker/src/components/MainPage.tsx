import {Row, Col, Button, Card, CardDeck, Container, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {initializeReducer, checkReducer, trackerState} from "../state-slices/tracker-slice"
import isengard from "../utils/isengard";
import {IQuestionData} from "../models/question-model";

const MainPage = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const modules = useSelector(trackerState);

    useEffect(()=>{
        console.log("Initializing Modules");
        const initializeModules = () =>{
            let nameArray = isengard.getCollectionNames();
            let useEffectModules: Array<IQuestionData> = [];
            nameArray.forEach(async (name) => {
                let currCollection: IQuestionData = await isengard.getCollection(name);
                console.log(currCollection);
                useEffectModules.push(currCollection);
            })
            dispatch(initializeReducer(useEffectModules));
        }
        initializeModules();

    }, []);



    return (
        <Row>
            <CardDeck>
                {modules.modules.map((module) =>{
                    return (
                        <Card>
                            <Card.Header>{module.topicName}</Card.Header>
                            <Card.Body>
                                <Card.Title>
                                    <Card.Subtitle>
                                        {module.questions}
                                    </Card.Subtitle>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    )
                })}
            </CardDeck>

        </Row>
    );
};

export default MainPage;