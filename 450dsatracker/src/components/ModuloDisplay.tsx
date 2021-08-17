import {useEffect, useState} from "react";
import {IQuestionData} from "../models/question-model";
import isengard from "../utils/isengard";
import {Card, CardDeck, Col, Container, ListGroup, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {initializeReducer, checkReducer, trackerState} from "../state-slices/tracker-slice"

export const ModuloDisplay = () => {
    const [topicNames, setTopicNames] = useState(undefined as unknown as string[] || undefined);
    const [topicArray, setTopicArray] = useState(true);
    const [detailArray, setDetailArray] = useState(false);
    const [questionsArray, setQuestionArray] = useState(undefined as unknown as IQuestionData || undefined);
    const modules = useSelector(trackerState);

    useEffect(() => {
        setTopicNames([...isengard.getCollectionNames()]);
    }, [])

    let toggleQuestionArray = async (topic: string) => {
        console.log("Selected topic was", topic);
        const result = await isengard.getCollection(topic);
        await setQuestionArray(prev => result[0]);
        console.log("questions", questionsArray);
        
        //setTopicArray(false);
        //setDetailArray(true);
    }
    console.log("inside component", topicNames);
    console.log(modules);
    return (
        <>
            <Row>
                <CardDeck>
                    {modules.modules.map((module) => {
                        return (
                            <Card>
                                {console.log(module)}
                                <Card.Header>{module.topicName}</Card.Header>
                                <Card.Body>
                                    <Card.Title>
                                        <Card.Subtitle>
                                            {module.position}
                                        </Card.Subtitle>
                                    </Card.Title>
                                    <Card.Body>
                                        <Card.Text>Hello World</Card.Text>
                                        <Card.Text>{module.topicName}</Card.Text>
                                    </Card.Body>
                                </Card.Body>
                            </Card>
                        )
                    })}
                </CardDeck>
            </Row>



            {/* {topicArray &&
            <Container className="flex d-flex flex-row flex-wrap justify-around m-2">
                <Row>
                    <Col>

                        {topicNames?.map((names) => {
                            return (
                                <Card>
                                    <Card.Title onClick={() => toggleQuestionArray(names)}>{names}</Card.Title>
                                </Card>
                            )
                        })}
                    </Col>
                </Row>
            </Container>}
            {detailArray &&
            <Container>
                <Row>
                    <Col>
                        <ListGroup>
                            {/*{questionsArray?.map((questions)=>{*/}
                            {/*    return(*/}
                            {/*        <ListGroup.Item>{questions}</ListGroup.Item>*/}
                            {/*    )*/}
                            {/*})}*/}
                        {/* </ListGroup>
                    </Col>
                </Row>
                        </Container>*/}
        </>
    )
}