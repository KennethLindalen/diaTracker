/* eslint-disable */
import React, { Component } from 'react';
import { 
    Container,
    Table,
    Button
} from 'reactstrap';

import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';

import uuid from 'uuid';

class BlodsukkerListe extends Component {
    state = {
        BlodsukkerVerdier: [
        {
            id: uuid(),
            blodsukker: '3.1',
            insulin: '5',
        },
        {
            id: uuid(),
            blodsukker: '12.1',
            insulin: '8',
        },
        {
            id: uuid(),
            blodsukker: '14.1',
            insulin: '9',
        },
        {
            id: uuid(),
            blodsukker: '8.1',
            insulin: '2',
        },
        {
            id: uuid(),
            blodsukker: '66.1',
            insulin: '14',
        },
    ]
    };

    render(){
        const { blodsukkerState } = this.state;
        return(
            <Container>
                
                <Table striped>
                    <thead>
                        <tr>
                        <   th></th>
                            <th>Blodsukker</th>
                            <th>Insulin</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* HVA FAEN BETYR DETTE?! */}
                        {this.state.BlodsukkerVerdier.map(({ id, blodsukker, insulin }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <tr>
                                <td>
                                    <Button 
                                        className="remove-btn"
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
                                <td>
                                    {blodsukker}
                                </td>
                                <td>
                                    {insulin + " enh"}
                                </td>

                                </tr>
                            </CSSTransition>
                        ))}
                    </tbody>
                </Table>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={()=>{
                    const blodsukker = prompt('Oppgi nytt blodsukker');
                    const insulin = prompt('Oppgi insulin mengde')
                    if(blodsukker){
                        this.setState(state =>({
                            BlodsukkerVerdier: [...state.BlodsukkerVerdier, { id: uuid(), blodsukker, insulin}]
                        }))
                    }
                }}
                >
                    Legg til nye verdier
                </Button>
            </Container>
        )
    }
}

export default BlodsukkerListe;