import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBAccordion,
  MDBAccordionItem
} from 'mdb-react-ui-kit';

export default function Consulting() {
  return (
    <div id='consulting'>
      <MDBCard alignment='center' id='consult'>
        <MDBCardBody>
          <MDBCardTitle className='fs-1'><strong>CONSULTING</strong> Service</MDBCardTitle>
          <MDBCardText>We provide graph data consulting and modeling services</MDBCardText>
        </MDBCardBody>
        <MDBRow center>
          <MDBCol size='4'>
            <MDBAccordion>
            {/* style={{background: 'rgb(243, 246, 251)'}} */}
            {/* id='accordion' */}
              <MDBAccordionItem collapseId={2} headerTitle='Graph Data Consulting Service' id='accordion'>
              <ul className='text-start'>
                  <li>Diagnose data usage status and review<br /> adequacy of graph data application & <br />usage</li>
                  <li>Plan customer-specific analysis project<br /> and establish related strategy</li>
                  <li>Design graph models and derive insights<br /> to achieve business objectives</li>
                </ul>
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
          <MDBCol size='4'>
          <MDBAccordion>
              <MDBAccordionItem collapseId={2} headerTitle='Graph Data Modeling Services' id='accordion'>
              <ul className='text-start'>
                  <li>Graph modeling service using various<br /> data structures such as RDB</li>
                  <li>Modeling service optimized for data<br /> analytics & visualization</li>
                </ul>
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}