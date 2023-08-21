import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    // MDBCardFooter
    // MDBIcon
} from 'mdb-react-ui-kit';

import './Usecases.css';
import graph from './images/Graph-Indicator.png';
import vision from './images/Graph-Vision.png';
import intel from './images/Intelligence-Graph.png';
import hyper from './images/hyper.png';
import fraud from './images/Fraud-Detection.png'

import { Link } from 'react-router-dom';

export default function Cards() {
    return (
        <div id='cards'>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4 justify-content-center'>
                <MDBCol className='d-flex justify-content-center'>
                    <MDBCard className='w-75 h-100' id='card-img'>
                        <MDBCardImage
                            src={graph}
                            alt='...'
                            position='top'
                            className='mx-auto mt-3'
                            style={{ width: '70%', maxWidth: '100%', height: 'auto' }}
                        />
                        <MDBCardBody className='d-flex flex-column justify-content-between mb-8'>
                            <MDBCardTitle className='fw-bold text-uppercase fs-4' id='txt'>graph indicator</MDBCardTitle>
                            <MDBCardText>
                                Graph data analysis searches through<br /> patterns of data and
                                indicates the<br /> most optimal path or result that best<br />
                                suits the users’ requirements.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardText>
                            <p className="d-flex justify-content-between align-items-center m-4 fw-bold">
                                <Link to="#" id='txt' className='text-end'>#Recommendation</Link>
                                <Link to='#'>
                                    <i className="fa fa-arrow-right fw-bold" aria-hidden="true"></i>
                                </Link>
                            </p>
                        </MDBCardText>
                    </MDBCard>
                </MDBCol>
                {/* 2nd Card */}
                <MDBCol className='d-flex justify-content-center'>
                    <MDBCard className='w-75 h-100' id='card-img'>
                        <MDBCardImage
                            src={vision}
                            alt='...'
                            position='top'
                            className='mx-auto mt-3'
                            style={{ width: '70%', maxWidth: '100%', height: 'auto' }} />
                        <MDBCardBody className='d-flex flex-column justify-content-between mb-8'>
                            <MDBCardTitle className='fw-bold text-uppercase fs-4' id='txt'>GRAPH VISION</MDBCardTitle>
                            <MDBCardText>
                                When data stored in the database is<br /> shown in a graph structure composed<br />
                                of nodes and edges, the overall<br /> meaning of the connected patterns<br />
                                become easier to understand.<br /> Broadening the understanding and<br />
                                perspective of data may help with efficient data management throughout<br /> a vast network.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardText>
                            <p className="d-flex justify-content-between align-items-center m-4 fw-bold">
                                <Link to="#" id='txt' className='text-end'>#Graph Visualization</Link>
                                <Link to='#'>
                                    <i className="fa fa-arrow-right fw-bold" aria-hidden="true"></i>
                                </Link>
                            </p>
                        </MDBCardText>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='d-flex justify-content-center'>
                    <MDBCard className='w-75 h-100' id='card-img'>
                        <MDBCardImage
                            src={intel}
                            alt='...'
                            position='top'
                            className='mx-auto mt-3'
                            style={{ width: '70%', maxWidth: '100%', height: 'auto' }} />
                        <MDBCardBody className='d-flex flex-column justify-content-between mb-8'>
                            <MDBCardTitle className='fw-bold text-uppercase fs-4' id='txt'>intelligence graph</MDBCardTitle>
                            <MDBCardText>
                                Graph DB applies past knowledge and <br />experience into an ‘intelligence’ that<br />
                                achieves greater tasks. The<br /> intelligence graph makes use of<br />
                                necessary information to help ease<br /> customers’ decision-making.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardText>
                            <p className="d-flex justify-content-between align-items-center m-4 fw-bold">
                                <Link to="#" id='txt' className='text-end'>#Knowledge Graph</Link>
                                <Link to='#'>
                                    <i className="fa fa-arrow-right fw-bold" aria-hidden="true"></i>
                                </Link>
                            </p>
                        </MDBCardText>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='d-flex justify-content-center'>
                    <MDBCard className='w-75 h-100' id='card-img'>
                        <MDBCardImage
                            src={hyper}
                            alt='...'
                            position='top'
                            className='mx-auto mt-3'
                            style={{ width: '70%', maxWidth: '100%', height: 'auto' }} />
                        <MDBCardBody className='d-flex flex-column justify-content-between mb-8'>
                            <MDBCardTitle className='fw-bold text-uppercase fs-4' id='txt'>hyper-connection</MDBCardTitle>
                            <MDBCardText>
                                Graph technology is optimized for<br /> hyper-connection and quick analysis<br />
                                of scattered data. No matter how<br /> entangled the data are, the graph<br />
                                succeeds in extracting intuitive<br /> insights from complex relationships..
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardText>
                            <p className="d-flex justify-content-between align-items-center m-4 fw-bold">
                                <Link to="#" id='txt' className='text-end'>#Intuitive Insights</Link>
                                <Link to='#'>
                                    <i className="fa fa-arrow-right fw-bold" aria-hidden="true"></i>
                                </Link>
                            </p>
                        </MDBCardText>
                    </MDBCard>
                </MDBCol>

                <MDBCol className='d-flex justify-content-center'>
                    <MDBCard className='w-75 h-100' id='card-img'>
                        <MDBCardImage
                            src={fraud}
                            alt='...'
                            position='top'
                            className='mx-auto mt-3'
                            style={{ width: '70%', maxWidth: '100%', height: 'auto' }} />
                        <MDBCardBody className='d-flex flex-column justify-content-between mb-8'>
                            <MDBCardTitle className='fw-bold text-uppercase fs-4' id='txt'>fraud Detection</MDBCardTitle>
                            <MDBCardText>
                                Graph technology discovers anomalies<br /> hidden throughout the network of<br />
                                information. Fraud detection solution<br /> detects and prevents suspicious<br />
                                behaviors found in fraud rings.
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardText>
                            <p className="d-flex justify-content-between align-items-center m-4 fw-bold">
                                <Link to="#" id='txt' className='text-end'>#Pattern Detection</Link>
                                <Link to='#'>
                                    <i className="fa fa-arrow-right fw-bold" aria-hidden="true"></i>
                                </Link>
                            </p>
                        </MDBCardText>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </div>
    );
}