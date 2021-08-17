import {Row, Col} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Module = () =>{
    // const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Row>
            Hello Module!
        </Row>
    );

};

export default Module;