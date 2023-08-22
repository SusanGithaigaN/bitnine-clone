import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import Solution from './Solution';
// import Manual from './demo';
import Documentation from './Documentation';
import Viewer from './Viewer';
import Manual from './Manual';

export default function Resources() {
    return (
        <div id='resources'>
        <MDBCard alignment='center'>
            <MDBCardBody>
                <MDBCardTitle className='fs-1 fw-bold'>DOCUMENTATION</MDBCardTitle>
                <MDBCardText>Bitine is a company specializing in Graph Database solutions and services providing Big Data in IT<br /> environments.</MDBCardText>
            </MDBCardBody>
        </MDBCard>
        {/* solutions */}
        <Solution />
        {/* AgensGraph Manual */}
        {/* <Manual /> */}
        <Manual />
        {/* AgensBrowser Manual */}
        <Documentation />
        <Viewer />
        </div>
    );
}