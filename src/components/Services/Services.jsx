import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    // MDBCardFooter,
    MDBBtn
} from 'mdb-react-ui-kit';

import './Services.css'
import Consulting from './Consulting';
import Analyze from './Analyze';
import ServiceGraph from './ServiceGraph';
import Servicecards from './Servicecards';

export default function Services() {
    return (
        <div id='services'>
            <MDBCard alignment='center' id='service-card'>
                {/* <MDBCardHeader>Featured</MDBCardHeader> */}
                <MDBCardBody>
                    <MDBCardTitle className='fw-bold text-uppercase' id='service-title'>Services</MDBCardTitle>
                    <MDBCardText>
                        We provide consulting and analyzing service<br />
                        for those who need help setting up graph database to your existing system..
                    </MDBCardText>
                    <MDBBtn href='#' className='fw-bold text-uppercase' id='contact-btn'>contact us</MDBBtn>
                </MDBCardBody>
                {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
            </MDBCard>
            {/* consulting */}
            <Consulting />
            {/* analyzing */}
            <Analyze />
            <ServiceGraph />
            <Servicecards />
        </div>
    );
}