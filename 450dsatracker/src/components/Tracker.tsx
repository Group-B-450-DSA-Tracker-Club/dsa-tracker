import { useEffect, useState } from "react";
import {Accordion, Card, Col, ProgressBar} from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { QuestionDisplay } from "./QuestionDisplay";

export const Tracker = (props:any) => {
    const [clicked, setClicked] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressVariant, setProgressVariant] = useState("danger");
    const [progressLabel, setProgressLabel] = useState("");

    useEffect(()=> {
        setProgress(truncate(100*props.mod.doneQuestions/props.mod.questions.length));
        setProgressVariant(progress===100? "info": progress>0? "success": "danger");
        setProgressLabel(props.mod.doneQuestions + " / " + props.mod.questions.length +  " Problems Completed");
    }, [props.mod.doneQuestions, progress])

    const history = useHistory();

    const truncate = (num: number) => {
        return Math.trunc(num);
    }

    console.log("tracker module loaded");
    console.log(props.mod);

    return (
        <>

            <Accordion bsPrefix={'accordionModule'} >

                <Accordion.Item eventKey="0" style={{backgroundColor: "black"}}>
                    <Accordion.Header className={'accordionHeader'} >
                        <Col className={'moduleHeaderName'} >
                            <strong> {props.mod.topicName} </strong>
                        </Col>
                        <Col xs="1" className={props.mod.started ? (progress === 100 ? "col-completed" : "col-started") : "col-not-started"} >
                            {props.mod.started ? (progress === 100 ? "Completed" : "Started") : "Not Started"}
                        </Col>
                        {/*<Col xs="2" sm="3" className={"col-problems"} id={"col-problems-"+successVariant(100*props.mod.doneQuestions/props.mod.questions.length)}>*/}
                        {/*    <span className="col-span-problems">{props.mod.doneQuestions + "/" + props.mod.questions.length + " Problems Completed"} </span>*/}
                        {/*</Col>*/}
                        <Col xs="5" className="progress-bar-column">
                            <ProgressBar className={(progress === 0) ? "progressEmpty" : "progress"}>
                                <ProgressBar animated variant={progressVariant} now={progress} label={progressLabel} />
                            </ProgressBar>
                        </Col>
                    </Accordion.Header>
                    <Accordion.Body className={"moduleBody"} >
                        <QuestionDisplay topicName = {props.mod.topicName} questions = {props.mod.questions} />
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