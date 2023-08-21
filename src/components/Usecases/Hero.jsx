import React from 'react';
import { MDBCard, MDBCardBody, MDBCardText, MDBCardTitle } from 'mdb-react-ui-kit';

export default function Hero() {
  return (
    <div className='bg-image'>
      <img src='https://tinyurl.com/24rw86ev' className='img-fluid' alt='Sample' />
      <div className='mask' >
        <div className='d-flex justify-content-center align-items-center h-100'>
          {/* <p className='text-white mb-0'>Can you see me?</p> */}
          <MDBCard className='text-light' style={{ boxShadow: 'none', backgroundColor: 'transparent' }} >
                <MDBCardBody id='main'>
                    <MDBCardTitle id='title' className='fw-bold fs-1'>Next Graph Initiatives</MDBCardTitle>
                    <MDBCardText className='fw-bold fs-6'>
                        Bitnine is continuing the effort of expanding projects onsite and also qualitatively enhancing graph technology simultaneously.<br />
                        Check out how our graph technology cases were able to monitor risks, reduce costs, improve operational efficiency,<br />
                        and increase the revenue of customers from various industries.
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        </div>
      </div>
    </div>
  );
}