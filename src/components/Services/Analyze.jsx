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

export default function Analyze() {
  return (
    <div id='analysis'>
      <MDBCard alignment='center' id='analyze'>
        <MDBCardBody>
          <MDBCardTitle className='fs-1'><strong>Analyzing</strong> Service</MDBCardTitle>
          <MDBCardText>We provide graph data analysis services such as predictive analytics and fraud detection</MDBCardText>
        </MDBCardBody>
        <MDBRow center>
          <MDBCol size='4'>
            <MDBAccordion>
              <MDBAccordionItem collapseId={2} headerTitle='Graph Data Analyzing Service' id='accordion'>
              <ul className='text-start'>
                  <li>Clustering analysis according to graph<br /> similarity & characteristics</li>
                  <li>Relationship-based pattern analysis</li>
                  <li>Node-based centrality analysis</li>
                  <li>Framework extraction analysis to detect<br /> important relationships</li>
                </ul>
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
          <MDBCol size='4'>
          <MDBAccordion>
              <MDBAccordionItem collapseId={2} headerTitle='Graph-based Solution Service' id='accordion'>
                <ul className='text-start'>
                  <li>Graph-based Fraud Detection Service<br /> (G-FDS)</li>
                  <li>Graph-based Predictive Analytics Service<br /> (G-PAS)</li>
                  <li>Knowledge Graph & graph-based<br /> decision-making solution (G-KGS: AI,<br />Knowledge Graph)</li>
                </ul>
              </MDBAccordionItem>
            </MDBAccordion>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </div>
  );
}