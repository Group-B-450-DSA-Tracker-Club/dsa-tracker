import {Row, Col} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";

const MainPage = () =>{
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Row>
            Welcome!
        </Row>
    );
};

export default MainPage;