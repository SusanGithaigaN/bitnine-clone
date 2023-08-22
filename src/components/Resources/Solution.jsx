import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardSubTitle
} from 'mdb-react-ui-kit';

import './Resources.css';

export default function Solution() {
    return (
        <div>
            <MDBCard alignment='center' id='solutions'>
                <MDBCardBody>
                    <MDBCardTitle>
                        <strong className='fs-3'>Agens Solution </strong>
                        {/* (AgensGraph & AgensBrowser ) */}
                        <span>(</span><span className='blue'>Agens</span><span className='yellow'>Graph</span>
                        <span> & </span><span className='blue'>Agens</span><span className='light'>Browser</span>
                        <span>)</span>
                    </MDBCardTitle>
                    <MDBCardSubTitle className='fs-2'>Manual Documentation</MDBCardSubTitle>
                    <MDBCardText>
                        The manuals will help you get started with Agens Solution.<br />
                        For more details of Agens Solution, please check the manuals.<br />
                        These are primarily written for developers or operations engineers to guide them get acquainted with Agens<br /> Solution.<br />
                        If you have an issue or questions about installing Agens Solution, please contact us. We’re here to help!<br />
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}