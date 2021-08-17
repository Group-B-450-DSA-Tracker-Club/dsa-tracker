import { Col, Form, Row } from "react-bootstrap"
import { propTypes } from "react-bootstrap/esm/Image"
import { useHistory } from "react-router-dom";


export const QuestionDisplay = (props:any)=>{


    return (
        <>
            <Form>
                <Row>
                    <Col>
                        <Form.Check type = "checkbox" />
                    </Col>
                    <Col>
                        <a href={props.questions[0].Url}>{props.questions[0].Problem}</a>
                    </Col>
                </Row>
            </Form>
        </>
    )
}