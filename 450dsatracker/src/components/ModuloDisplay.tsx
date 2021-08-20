import {Row} from "react-bootstrap";
import {useSelector} from "react-redux";
import {trackerState} from "../state-slices/tracker-slice"
import {Tracker} from "./Tracker";

export const ModuloDisplay = () => {
    const modules = useSelector(trackerState);

    return (
        <>
            <Row className={'moduleHeaders'} >
                    {modules.modules.map((module) => <Tracker mod = {module} />)}
            </Row>
        </>
    )
}