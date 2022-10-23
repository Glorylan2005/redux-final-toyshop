import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import carticon from './carticon.png';
import { useSelector } from "react-redux";
import { getTotalItems} from "./redux/cartSlice";


function Navibar() {
    
    const [expanded, setExpanded] = useState(false);
    const quantity = useSelector(getTotalItems);
    return (
    <Navbar expanded={expanded} fixed="top" collapseOnSelect expand="md" >
        <Navbar.Brand className="navbrand">
        <div className="spanbrand"><span className="gr">KID</span><span className="blue">&</span><span className="sd">TOYS</span><span>🧸</span><span className="rd">STORE</span></div>
        </Navbar.Brand>

        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")}  aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-2">
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/about" className='link'>ABOUT</Link></Nav.Link>
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/" className='link'>SHOP</Link></Nav.Link>
                <Nav.Link><Link onClick={() => setExpanded(false)} to="/contactus" className='link'>CONTACT US</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Brand className="navbrand">
        <div className='cartic'>
        <Nav.Link><Link onClick={() => setExpanded(false)} to="/cart" className='link'><img className="carticon" src={carticon} width='36px' alt="logo" /></Link></Nav.Link>
            <p className="score">{quantity}</p>
        </div>
        </Navbar.Brand>
    </Navbar>


);
}

export default Navibar;