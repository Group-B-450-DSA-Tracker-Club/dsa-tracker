import { useState } from "react";
import { Card } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { QuestionDisplay } from "./QuestionDisplay";

export const Tracker = (props:any) => {
    const [clicked, setClicked] = useState(false);

    const history = useHistory();

    const loadCard = (e:any) => {
        setClicked(true);
        console.log("clicked");
        


    }

    console.log("tracker module loaded");
    console.log(props.mod);

    return (
        <>
            {!clicked &&
                <Card onClick = {loadCard}>
                    <Card.Header>{props.mod.topicName}</Card.Header>
                    <Card.Body>
                        <Card.Title>
                            <Card.Subtitle>
                                {props.mod.position}
                            </Card.Subtitle>
                        </Card.Title>
                        <Card.Body>
                            <Card.Text>Hello World</Card.Text>
                            <Card.Text>{props.mod.topicName}</Card.Text>
                        </Card.Body>
                    </Card.Body>
                </Card>}
            {clicked && <QuestionDisplay questions = {props.mod.questions} />}
            
        </>
    )

}