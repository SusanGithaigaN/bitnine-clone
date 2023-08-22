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
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem
} from 'mdb-react-ui-kit';

import logo from './logo.png'

import './NavBar.css'

export default function NavBar() {
    const [showNavRight, setShowNavRight] = useState(false);
    // const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // handle mouse button hover
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id='main-nav'>
            <MDBNavbar expand='lg' dark bgColor='black'>
                <MDBContainer fluid>
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <img
                            src={logo}
                            height='60'
                            alt=''
                            loading='lazy'
                        />
                    </a>
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
                            <MDBNavbarItem onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <MDBDropdown show={true}>
                                    <MDBDropdownToggle
                                        tag='a'
                                        href="/products"
                                        className={`nav-link text-uppercase ${isHovered ? 'text-warning' : 'text-white'}`}
                                        role='button'
                                        style={{
                                            fontWeight: 'bold',
                                            textDecoration: 'none',
                                            position: 'relative',
                                            cursor: 'pointer',
                                        }}
                                    >
                                        Products
                                    </MDBDropdownToggle>
                                    <MDBDropdownMenu
                                        style={{
                                            backgroundColor: 'gray',
                                            borderColor: 'black',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        <MDBDropdownItem link>Graph Database</MDBDropdownItem>
                                        <MDBDropdownItem link>Relational Database</MDBDropdownItem>
                                    </MDBDropdownMenu>
                                </MDBDropdown>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/usecases'>
                                    USE CASES
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/services'>
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