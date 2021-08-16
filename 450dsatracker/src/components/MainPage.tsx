import {Row, Col, Button, Card, CardDeck, Container, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {useEffect} from "react";
import {initializeReducer, checkReducer, trackerState} from "../state-slices/tracker-slice"

const MainPage = () =>{
    const dispatch = useDispatch();
    const history = useHistory();
    const modules = useSelector(trackerState);

    useEffect(()=>{
        console.log("Initializing the Modules");
        dispatch(initializeReducer());

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
                                        {module.questions.length}
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