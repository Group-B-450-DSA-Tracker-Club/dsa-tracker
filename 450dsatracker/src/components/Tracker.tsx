import { useState } from "react";
import {Accordion, Card, Col, ProgressBar} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { QuestionDisplay } from "./QuestionDisplay";

export const Tracker = (props:any) => {
    const [clicked, setClicked] = useState(false);

    const history = useHistory();

    const loadCard = (e:any) => {
        setClicked(!clicked);
        console.log("clicked");
        


    }

    const truncate = (num: number) =>{
        return Math.trunc(num);
    }

     console.log("tracker module loaded");
    console.log(props.mod);

    return (
        <>

            <Accordion>

                <Accordion.Item eventKey="0">
                    <Accordion.Header>
                        <Col>
                            {props.mod.topicName}
                        </Col>
                        <Col>
                            <ProgressBar animated now={truncate(100*props.mod.doneQuestions/props.mod.questions.length)} label={`${truncate(100*props.mod.doneQuestions/props.mod.questions.length)}%`}/>
                        </Col>

                    </Accordion.Header>
                    <Accordion.Body>
                        <QuestionDisplay topicName = {props.mod.topicName} questions = {props.mod.questions}/>
                    </Accordion.Body>
                </Accordion.Item>


            </Accordion>
        {/*<Col xs={8} md={6} lg={4} style={{ padding: '1rem' }}>*/}
        {/*    <Card onClick = {loadCard}>*/}
        {/*            <Card.Header>{props.mod.topicName}</Card.Header>*/}
        {/*            <Card.Body>*/}
        {/*                <Card.Title>*/}
        {/*                    <Card.Subtitle>*/}
        {/*                        {props.mod.position}*/}
        {/*                    </Card.Subtitle>*/}
        {/*                </Card.Title>*/}
        {/*                <Card.Body>*/}
        {/*                    <Card.Text>Hello World</Card.Text>*/}
        {/*                    <Card.Text>{props.mod.topicName}</Card.Text>*/}
        {/*                </Card.Body>*/}
        {/*            </Card.Body>*/}
        {/*        </Card>*/}
        {/*    </Col>*/}
            {clicked && <QuestionDisplay questions = {props.mod.questions} />}
        </>
            

    )

}