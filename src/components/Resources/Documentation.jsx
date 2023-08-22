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

export default function Documentation() {
    return (
        <MDBCard alignment='center' className='shadow-0 mb-6'>
            <MDBCardBody>
                <MDBCardTitle className='fs-3'>
                    <span className='blue'>Agens</span><span className='light'>Browser</span><strong> Manual</strong><br /> Documentation
                </MDBCardTitle>
                {/* cards */}
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <MDBRow>
                        <MDBCol sm='6'>
                            <MDBCard className="square border mt-4">
                                <MDBCardBody>
                                    <MDBCardTitle className='text-start mb-3'>
                                        <span className='blue'>Agens</span><span className='light'>Browser</span> Web Manual<strong> HTML</strong>
                                    </MDBCardTitle>
                                    <MDBCardText className='text-start mb-8'>
                                        AgensBrowser visualizes data as graphs and tables for easier,<br />
                                        enhanced understanding and analyzing of data.
                                    </MDBCardText>
                                    {/* links */}
                                    <a href='https://bitnine.net/documentations/manual/agensbrowser/english/agens_browser_manual_html_2.1.html' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Quick-guide (EN)</span>
                                                <span className='text-end me-3'>&gt;</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href='https://bitnine.net/documentations/manual/agensbrowser/korean/agens_browser_manual_html_2.1.html' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Developer (EN)</span>
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
                                        <span className='blue'>Agens</span><span className='light'>Browser</span> Web Manual<strong> PDF</strong>
                                    </MDBCardTitle>
                                    <MDBCardText className='mb-8 text-start'>
                                        AgensBrowser visualizes data as graphs and tables for easier,<br />
                                        enhanced understanding and analyzing of data.
                                    </MDBCardText>
                                    {/* links */}
                                    <a href='https://bitnine.net/documentations/manual/agensbrowser/english/agens_browser_manual_html_2.1.pdf' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Quick-guide (EN)</span>
                                                <span className='text-end me-3'>&gt;</span>
                                            </div>
                                        </div>
                                    </a>

                                    <a href='https://bitnine.net/documentations/manual/agensbrowser/korean/agens_browser_manual_html_2.1.pdf' className='text-dark'>
                                        <div className='p-1 mb-4' id='list-item'>
                                            <div className='d-flex justify-content-between'>
                                                <span>Developer (EN)</span>
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