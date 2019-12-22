/* eslint-disable */
import React, { Component } from 'react';
import { 
    Container,
    Table,
    Button,
    Row, Col
} from 'reactstrap';
import Calendar from 'react-calendar'
import {
    CSSTransition,
} from 'react-transition-group';
import BlodsukkerGraf from './BlodsukkerGraf';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getBlodsukker} from '../actions/blodsukkerAction.js';
import PropTypes from 'prop-types';


class BlodsukkerListe extends Component {

    static propTypes = {
        getBlodsukker: PropTypes.func.isRequired,
        blodsukker: PropTypes.object.isRequired
    }
    

    componentDidMount() {
        this.props.getBlodsukker();
    }

    render(){
        const BlodsukkerState = this.props.blodsukkerVerdier;
        return(
            <Container className="clearfix">
                <Row>
                    <Col xs="4">
                        <Calendar></Calendar>
                    </Col>
                    <Col>
                    <Table striped>
                        <thead>
                            <tr>
                                <th>Blodsukker</th>
                                <th>Insulin</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.BlodsukkerVerdier.map(({ id, blodsukker, insulin }) => (
                                <CSSTransition key={id} timeout={500} classNames="fade">
                                    <tr>
                                    <td>
                                        {blodsukker}
                                    </td>
                                    <td>
                                        {insulin + " enh"}
                                    </td>
                                    <td>
                                        <Button 
                                            className="remove-btn float-right"
                                            color="danger"
                                            size="sm"
                                            onClick= {
                                                () => {
                                                    this.setState( state => ({
                                                        BlodsukkerVerdier: state.BlodsukkerVerdier.filter(blodsukker => blodsukker.id !== id)
                                                    }))
                                                }
                                            }
                                        >
                                            &times;
                                        </Button>
                                    </td>

                                    </tr>
                                </CSSTransition>
                            ))}
                        </tbody>
                    </Table>
                        <Button
                            size="sm"
                            color="dark"
                            style={{marginBottom: '2rem'}}
                            className="float-right"
                                    onClick={()=>{
                                    const blodsukker = prompt('Oppgi nytt blodsukker');
                                    const insulin = prompt('Oppgi insulin mengde')
                                    if(blodsukker){
                                        this.setState(state =>({
                                            BlodsukkerVerdier: [...state.BlodsukkerVerdier, { id: uuid(), blodsukker, insulin}]
                                        }))}
                                    }}>
                            Legg til nye verdier
                        </Button>
                    </Col>
                </Row>
                <BlodsukkerGraf></BlodsukkerGraf>
            </Container>
        )
    }
}


const mapStateToProps = state => ({
    blodsukker: state.blodsukkerVerdier
}) 

export default connect(mapStateToProps, { getBlodsukker })(BlodsukkerListe);