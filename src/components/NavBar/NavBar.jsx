import { useState } from 'react';
import {
    MDBNavbar,
    MDBContainer,
    // MDBNavbarBrand,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

import logo from './logo.png'

import './NavBar.css'

export default function NavBar() {
    const [showNavRight, setShowNavRight] = useState(false);
    // const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    return (
        <div id='main-nav'>
            <MDBNavbar expand='lg' dark bgColor='black'>
                <MDBContainer fluid>
                    <img
                        src={logo}
                        height='60'
                        alt=''
                        loading='lazy'
                    />

                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavRight(!showNavRight)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavRight}>
                        <MDBNavbarNav right fullWidth={false} className='mb-2 mb-lg-0' id='nav-items'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    PRODUCTS
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    USE CASES
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    SERVICES
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    RESOURCES
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    BLOG
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    COMPANY
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='#'>
                                    IR
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                        <MDBBtn>TRY FREE</MDBBtn>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
}