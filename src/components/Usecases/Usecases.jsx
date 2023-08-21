import React from 'react'
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import Hero from './Hero';
import Cards from './Cards';
import Connect from './Connect';
export default function Usecases() {
    return (
        <div id='use-cases'>
            <MDBCard style={{ boxShadow: 'none' }}>
                <MDBCardBody id='main'>
                    <MDBCardTitle id='title' className='fw-bold fs-1'>Use Cases</MDBCardTitle>
                    <MDBCardText>
                        Our graph database solution cover a wide range of projects.<br />
                        If you need help overcoming your obstacle, feel free to contact us.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
            {/* hero */}
            <Hero />
            {/* cards */}
            <Cards />
            {/* connect */}
            <Connect />
        </div>
    )
}
