import {Container, Navbar} from "react-bootstrap";

const NavigationBar = () =>{

    return(
        <Navbar bg="dark" variant="dark" expand="lg" className="top-navbar">
            <Container>
                <Navbar.Brand className="navbar-title">
                    <img
                        alt="logo"
                        src="/logo192.png"
                        width="100"
                        className={"d-inline-block"}
                    />
                    <span className="title-name">
                        Coder Tracker
                    </span>
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
};

export default NavigationBar;