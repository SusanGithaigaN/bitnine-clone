import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import './Resources.css'

export default function Viewer() {
    return (
        <MDBCard alignment='center'>
            <MDBCardBody>
                <MDBCardTitle className='fs-3'>
                    <span className='blue'>Agens</span><span className='light'>Viewer</span><strong> Manual</strong><br /> Documentation
                </MDBCardTitle>
                {/* cards */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <MDBRow>
                        <MDBCol sm='6'>
                        <MDBCard className="square border mt-4">
                                <MDBCardBody>
                                    <MDBCardTitle className='text-start mb-3'>
                                        <span className='blue'>Agens</span><span className='light'>Viewer</span> Manual<strong> HTML</strong>
                                    </MDBCardTitle>
                                    <MDBCardText className='text-start mb-8'>
                                        AG Viewer is a user interface that provides visualization of data<br />
                                        loaded in AgensGraph through a web browser.
                                    </MDBCardText>
                                    {/* links */}
                                    <a href='https://bitnine.net/documentations/manual/ag_viewer/english/ag_viewer_manual_html.html' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Manual (EN)</span>
                                                <span className='text-end me-3'>&gt;</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href='https://bitnine.net/documentations/manual/ag_viewer/korean/ag_viewer_manual_html.html' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Manual (KO)</span>
                                                <span className='text-end me-3'>&gt;</span>
                                            </div>
                                        </div>
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol sm='6'>
                        <MDBCard className="square border mt-4">
                                <MDBCardBody>
                                    <MDBCardTitle className='text-start mb-3'>
                                        <span className='blue'>Agens</span><span className='light'>Viewer</span> Manual<strong> PDF</strong>
                                    </MDBCardTitle>
                                    <MDBCardText className='mb-8 text-start'>
                                        AG Viewer is a user interface that provides visualization of data<br />
                                        loaded in AgensGraph through a web browser.
                                    </MDBCardText>
                                    {/* links */}
                                    <a href='https://bitnine.net/documentations/manual/ag_viewer/english/ag_viewer_manual_html.pdf' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Manual (EN)</span>
                                                <span className='text-end me-3'>&gt;</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href='https://bitnine.net/documentations/manual/ag_viewer/korean/ag_viewer_manual_html.pdf' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Manual (KO)</span>
                                                <span className='text-end me-3'>&gt;</span>
                                            </div>
                                        </div>
                                    </a>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </div>
            </MDBCardBody>
        </MDBCard>
    );
}