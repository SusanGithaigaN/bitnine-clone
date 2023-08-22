import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

import './Resources.css'

export default function Demo() {
    return (
        <div id='manuals'>
            <MDBCard alignment='center' id='manual'>
                <MDBCardBody>
                    <MDBCardTitle className='fs-3'>
                        <span className='blue'>Agens</span><span className='yellow'>Graph</span> <strong> Manual</strong> <br />Documentation
                    </MDBCardTitle>
                </MDBCardBody>
                <MDBRow center className='row-cols-1 row-cols-md-2 g-4 mb-8'>
                    <MDBCol>
                        {/* HTML Manual */}
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle className='text-start mb-8'>
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
                    <MDBCol>
                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardTitle className='text-start mb-8'>
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
            </MDBCard>
        </div >
    );
}