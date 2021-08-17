import { Col, Form, Row } from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import { useHistory } from "react-router-dom";
import {IQuestion} from "../models/question-model";


export const QuestionDisplay = (props:any)=>{


    return (
        <>
        {props.questions.map((question: IQuestion) => { return(
            <Form>
                <Row>
                    <Col>
                        <Form.Check type ="checkbox"/>

                    </Col>
                    <Col>
                        <a href={question.URL}> {question.Problem} </a>
                    </Col>
                </Row>
            </Form>)})}
        </>
        // <>
        //     <Form>
        //         <Row>
        //             <Col>
        //                 <Form.Check type = "checkbox" />
        //             </Col>
        //             <Col>
        //                 <a href={props.questions[0].Url}>{props.questions[0].Problem}</a>
        //             </Col>
        //         </Row>
        //     </Form>
        // </>
    )
}