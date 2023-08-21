import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Connect() {
    return (
        <MDBCard alignment='center'>
            <MDBCardBody>
                <MDBCardTitle className='fw-bold fs-1'>Ready to connect?</MDBCardTitle>
                <MDBCardText>
                    Click below to download and connect your data with AgensGraph.<br />
                    If you have any questions, feel free to reach out to us and learn how enterprises are using our graph database as their key to success.
                </MDBCardText>
                <MDBBtn className='me-1 text-uppercase fw-bold' id='connect-btn'>
                    download
                </MDBBtn>
                <MDBBtn className='me-1 text-uppercase fw-bold' id='connect-btn'>
                    contact-us
                </MDBBtn>
            </MDBCardBody>
        </MDBCard>
    );
}