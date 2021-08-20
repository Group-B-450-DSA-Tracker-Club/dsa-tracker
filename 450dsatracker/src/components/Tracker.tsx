import { useEffect, useState } from "react";
import {Accordion, Card, Col, ProgressBar} from "react-bootstrap"
import { QuestionDisplay } from "./QuestionDisplay";

export const Tracker = (props:any) => {
    const [progress, setProgress] = useState(0);
    const [progressVariant, setProgressVariant] = useState("danger");
    const [progressLabel, setProgressLabel] = useState("");

    useEffect(()=> {
        setProgress(truncate(100*props.mod.doneQuestions/props.mod.questions.length));
        setProgressVariant(progress===100? "info": progress>0? "success": "danger");
        setProgressLabel(props.mod.doneQuestions + " / " + props.mod.questions.length +  " Problems Completed");
    }, [props.mod.doneQuestions, progress])

    const truncate = (num: number) => {
        return Math.trunc(num);
    }

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
        </>
            

    )

}