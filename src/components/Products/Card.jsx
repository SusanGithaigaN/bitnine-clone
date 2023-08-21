import React from 'react'
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-react-ui-kit';
import agensLogo from './images/AgenSQL-Logo.png'

export default function Card() {
    return (
        <div id='logo-card' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <MDBCard style={{ maxWidth: '50%', width: '60em', maxHeight: '100%', height: '100%' }}>
                < MDBCardBody>
                    <MDBCardTitle className='text-uppercase' id='why'>w.h.y. ?</MDBCardTitle>
                    <img src={agensLogo} alt='logo' />
                </MDBCardBody >
            </MDBCard >
        </div>
    )
}
