import React, { Component } from 'react';
import {
    Jumbotron,
    Container,
    Card,
    Button,
    CardTitle,
    CardText,
    CardGroup, Row, Col,
    Form, FormGroup, Label, Input
} from 'reactstrap';

class MainInfo extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return (
        <div>
            <Container>
            <Jumbotron fluid>
                <Row>
                    <Col>
                        <Container fluid>
                        <h1 className="display-3">DiaTracker</h1>
                        <p className="lead">Et mindre prosjekt jeg lagde for å hjelpe meg med å holde styr på diabetesen min.</p>
                        </Container>
                    </Col>
                    <Col>
                    <h2 className="pb-3">Registrer deg</h2>
                    <Form>
                        <FormGroup row>
                            <Label for="exampleEmail" sm={2}>E-post:</Label>
                            <Col sm={9}>
                            <Input type="email" name="email" id="exampleEmail" placeholder="E-post adresse" />
                            </Col>
                            <br></br>
                            <Label for="examplePassword" sm={2} className="pt-4">Passord:</Label>
                            <Col sm={9} className="pt-3">
                            <Input type="password" name="password" id="examplePassword" placeholder="Passord" />
                            </Col>
                            <Col sm={11} className="pt-3">
                            <Button  block>Submit</Button>
                            </Col>
                        </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Jumbotron>
            <h3>Hva er diaTracker?</h3>
            <p>diaTracker er en enkel applikasjon hvor jeg har muligheten til å lagre mine blodsukker resultater og eventuelle doseringer av insulin. Den genererer grafer for oversikt og hva antatt langtidsblodsukker vil være.</p>
            <hr></hr>
            <h3>Hvorfor ser UI forferdelig ut?</h3>
            <p>Dette var aldri ment som noe som skal se bra ut, bare noe som fungerer bra funksjonelt og gir den informasjonen jeg ber den om. <br></br>Det er mer fokus på UX-design.</p>
            <br></br>
            
            <CardGroup>
            <Card body outline color="secondary">
                <CardTitle><h4>Utviklingsblogg</h4></CardTitle>
                <CardText>En liten dagbok(?) over hva jeg har jobbet med, hva slags problemer som oppstod under utviklingen og hva jeg har lært.</CardText>
                <Button>Trykk her for å lese mer</Button>
            </Card>
            <Card body outline color="secondary">
                <CardTitle><h4>Teknologier brukt</h4></CardTitle>
                <CardText>Her vil du finne en oversikt over alle teknologier jeg har brukt for å utvikle denne applikasjonen.</CardText>
                <Button>Trykk her for å lese mer</Button>
            </Card>
            </CardGroup>
            </Container>
        </div>
        );

    }
}

export default MainInfo;