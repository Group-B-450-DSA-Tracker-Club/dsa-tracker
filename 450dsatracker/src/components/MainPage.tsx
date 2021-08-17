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

        const initializeModules = async () =>{
            let nameArray = await isengard.getCollectionNames();
            let modules: Array<IQuestionData> = [];
            modules.length = nameArray.length;
            for(let i =0; i < nameArray.length; i++){
                let arr = await isengard.getCollection(nameArray[i]);
                let currCollection: IQuestionData = arr[0];
                modules[i] = currCollection;
            }
            // nameArray.forEach(async (name) => {
            //     let currCollection: IQuestionData = await isengard.getCollection(name);
            //     console.log("We have currcollection now");
            //     console.log(currCollection);
            //     modules.push(currCollection);
            // });
            dispatch(initializeReducer(modules));

        }
        initializeModules();

        console.log(modules);

    }, []);



    return (
        <Row>
            <CardDeck>
                {modules.modules.map((module) =>{
                    return (
                        <Col xs={8} md={6} lg={4} style={{ padding: '1rem' }}>
                            <Card>
                                <Card.Header>{module.topicName}</Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <Card.Subtitle>
                                            {module.position}
                                        </Card.Subtitle>
                                    </Card.Title>
                                    <Card.Body>
                                        <Card.Text>Hello World!</Card.Text>
                                        <Card.Text>{module.topicName}</Card.Text>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </CardDeck>

        </Row>
    );
};

export default MainPage;