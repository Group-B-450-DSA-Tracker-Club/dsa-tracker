import {Form, Row, Table} from "react-bootstrap"
import {IQuestion} from "../models/question-model";
import {useDispatch} from "react-redux";
import {checkModel} from "../models/check-model";
import {checkReducer} from "../state-slices/tracker-slice";


export const QuestionDisplay = (props:any)=>{
    const dispatcher = useDispatch();

    const handleChange = (e: any) =>{
        let checkModel: checkModel = {
            topicName: props.topicName,
            index: e.target.id
        }
        dispatcher(checkReducer(checkModel));
    }
    return (
        <>
        {props.questions.map((question: IQuestion, index: string) => { return(
            <Form>
                <Row>
                    <Table className={'module'} borderless={true}>
                        <tbody>
                            <tr>
                                <td align={'left'}>
                                    <Form.Check id={""+index} name={question.Topic} type="checkbox" onChange={handleChange}/>
                                </td>
                                <td align={'right'}>
                                    <a href={question.URL} style={{color: "black"}}> {question.Problem}  </a>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Row>
            </Form>)})}
        </>
    )
}