import {useEffect, useState} from "react";
import {IQuestionData} from "../models/question-model";
import isengard from "../utils/isengard";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";


export const ModuloDisplay = () => {
    const [modulo, setModulo] = useState(undefined as unknown as string[] || undefined);
    const [topicArray, setTopicArray] = useState(true);
    const [detailArray, setDetailArray] = useState(false);
    const [questionsArray, setQuestionArray] = useState(undefined as unknown as IQuestionData || undefined);

    useEffect(() => {
        setModulo([...isengard.getCollectionNames()])
    }, [])

    let toggleQuestionArray = async (topic: string) => {
        console.log("Selected topic was", topic);
        const result = await isengard.getCollection(topic);
        await setQuestionArray(prev => result[0]);
        console.log("questions", questionsArray);
        //setTopicArray(false);
        //setDetailArray(true);
    }
    console.log("inside component", modulo);
    return (
        <>
            {topicArray &&
            <Container className="flex d-flex flex-row flex-wrap justify-around m-2">
                <Row>
                    <Col>

                        {modulo?.map((names) => {
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
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
            }
        </>
    )
}