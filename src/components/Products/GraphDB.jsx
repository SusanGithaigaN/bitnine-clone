import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import './Products.css'
export default function GraphDB() {
    return (
        <div id='graph-db'>
            <MDBCard alignment='center' style={{boxShadow: 'none'}}>
                <MDBCardBody style={{backgroundColor: 'rgb(243, 246, 251)'}}>
                    <MDBCardTitle className='fw-bold'>Fast, Always-On, and Extensive</MDBCardTitle>
                    <MDBCardText className='fw-bold fs-1'>Enterprise Graph Database</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}