import {useEffect, useState} from "react";
import {IQuestionData} from "../models/question-model";
import isengard from "../utils/isengard";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {initializeReducer, checkReducer, trackerState} from "../state-slices/tracker-slice"
import { Tracker } from "./Tracker";

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

    const loadCard = (e:Event) => {
        
        console.log("clicked!");
    }

    console.log("inside component", topicNames);
    return (
        <>
            <Row>
                    {modules.modules.map((module) => <Tracker mod = {module} />)}
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