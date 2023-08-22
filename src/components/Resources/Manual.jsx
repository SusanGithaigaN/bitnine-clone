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

export default function Manual() {
    return (
        <div id='manuals'>
            <MDBCard alignment='center' id='manual'>
                <MDBCardBody>
                    <MDBCardTitle className='fs-3'>
                        <span className='blue'>Agens</span><span className='yellow'>Graph</span> <strong> Manual</strong> <br />Documentation
                    </MDBCardTitle>
                    {/* cards */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MDBRow className="w-75" id='manual-cards'>
                            <MDBCol sm='6'>
                                <MDBCard className="square border mt-4">
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-start mb-10'>
                                            <span className='blue'>Agens</span><span className='yellow'>Graph</span> Manual <strong>HTML</strong>
                                        </MDBCardTitle>

                                        <a href='https://bitnine.net/documentations/manual/quick_guide/agens_graph_quick_guide_html.html' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Quick-guide (EN)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/developer/english/agens_graph_developer_manual_html.html' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Developer (EN)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/operation/english/agens_graph_operation_manual_html.html' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Operations (EN)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/developer/korean/agens_graph_developer_manual_html.html' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Developer (KO)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/operation/korean/agens_graph_operation_manual_html.html' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Operations (KO)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                            {/* PDF Manual */}
                            <MDBCol sm='6'>
                                <MDBCard className="square border mt-4">
                                    <MDBCardBody>
                                        <MDBCardTitle className='text-start mb-10'>
                                            <span className='blue'>Agens</span><span className='yellow'>Graph</span> Manual <strong>PDF</strong>
                                        </MDBCardTitle>

                                        <a href='https://bitnine.net/documentations/manual/quick_guide/agens_graph_quick_guide_html.pdf' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Quick-guide (EN)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/developer/english/agens_graph_developer_manual_html.pdf' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Developer (EN)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/developer/korean/agens_graph_developer_manual_html.pdf' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Operations (EN)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/developer/korean/agens_graph_developer_manual_html.html' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Developer (KO)</span>
                                                    <span className='text-end me-3'>&gt;</span>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='https://bitnine.net/documentations/manual/operation/korean/agens_graph_operation_manual_html.pdf' className='text-dark'>
                                            <div className='p-1 mb-4' id='list-item'>
                                                <div className='d-flex justify-content-between'>
                                                    <span>Operations (KO)</span>
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
        </div>
    );
}