import React from 'react';
import { MDBRow, MDBCol, MDBCardTitle, MDBCard, MDBCardBody, MDBCardText } from 'mdb-react-ui-kit';
import './Services.css'

export default function Servicecards() {
    return (
        <div id='graph-service' className='d-flex justify-content-center'>

            <MDBRow>
                <MDBCardTitle className='fs-1 p-5'><strong>AgensGraph</strong> Service</MDBCardTitle>
                <MDBCol md='4'>
                    <MDBCardTitle id='m-title'>SYSTEM DEVELOPMENT</MDBCardTitle>
                    {/* card 1 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark' id='contents'>
                            <MDBCardTitle className='fw-bold'>BUILDING DATABASE</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Consulting service in<br />building AgensGraph</li>
                                    <li>Examine adoption with<br />customer environment<br />analysis</li>
                                    <li>Provides server <br />configuration guide<br />optimized for service<br />system</li>
                                    <li>Supports installation &<br />configuration</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    {/* card 2 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='fw-bold'>DATA MIGRATION</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Provides data modeling<br />support & guidance</li>
                                    <li>Analyze data for migration</li>
                                    <li>Supports migration of<br />various source data &<br />DBMS</li>
                                    <li>Provides guide for large<br />data migration</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    {/* card 3 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='fw-bold'>STABILITY & SUPPORT</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Provide stabilized operation<br />guide</li>
                                    <li>Supports HA redundancy<br />test</li>
                                    <li>Provides a guide for<br />performing backups</li>
                                    <li>Proactive monitoring for<br />quick action in the event of<br />an issue</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
                <MDBCol md='4'>
                    <MDBCardTitle id='m-title'>MAINTENANCE</MDBCardTitle>
                    {/* card 1 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='fw-bold'>MAINTENANCE</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Support for failures that<br />occur during system<br />operation</li>
                                    <li>Provides technical guide for<br />DB server operation</li>
                                    <li>Monitoring support for<br />emergence of issues</li>
                                    <li>Supports product upgrade<br />guide</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    {/* card 2 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='fw-bold'>INTEGRATION PACK</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Online Help Desk</li>
                                    <li>Periodic inspection service</li>
                                    <li>Patch & bug fix service</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
                <MDBCol md='4'>
                    <MDBCardTitle id='m-title'>PROFESSIONAL SUPPORT</MDBCardTitle>
                    {/* card 1 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='fw-bold'>SYSTEM STABILITY</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Overall database inspection<br />service</li>
                                    <li>Management & monitoring<br />services</li>
                                    <li>Provides DB / query tuning<br />guide </li>
                                    <li>Provides problem analysis &<br />solution guide</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>

                    {/* card 2 */}
                    <MDBCard shadow='0' border='dark' background='white' className='text-start m-3'>
                        <MDBCardBody className='text-dark'>
                            <MDBCardTitle className='fw-bold'>DEVELOPMENT GUIDE &<br />TRAINING</MDBCardTitle>
                            <MDBCardText className='text-start fw-normal'>
                                <ul>
                                    <li>Training for database<br />features & operations</li>
                                    <li>Provides Cypher (graph<br />query) user guide</li>
                                    <li>Provides DB linkage<br />development guide (JDBC,<br />REST)</li>
                                </ul>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}