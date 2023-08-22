import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';
import './Services.css'

export default function ServiceGraph() {
    return (
        <div className='bg-image'>
            <img src='https://tinyurl.com/e3xhhehm' className='img-fluid' alt='Sample' />
            <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} >
                <div className='d-flex justify-content-center align-items-center h-100'>
                    {/* <p className='text-white mb-0'>Can you see me?</p> */}
                    <MDBCard className='text-light' style={{ boxShadow: 'none', backgroundColor: 'transparent' }} >
                        <MDBCardBody id='main'>
                            <MDBCardTitle id='title' className='fw-bold fs-1'>Training Service</MDBCardTitle>
                            <MDBCardText className='fw-bold fs-5'>
                                Sharpen your skills and experience in the graph database field and<br />
                                take advantage of a great opportunity to be trained by AgensGraph Database experts.<br />
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </div>
            </div>
        </div>
    );
}