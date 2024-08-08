import React from 'react';
import { FiFacebook } from 'react-icons/fi';
import { IoLogoYoutube } from 'react-icons/io';
import { FaTiktok } from 'react-icons/fa';
import './footercss.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Reach Us</h1>
                    <ul>
                        <p>Any questions? Let us know in E-mail</p>
                        <li className="footerIcons">
                            <FiFacebook size="25" />
                        </li>
                        <li className="footerIcons">  
                            <FaTiktok size="25" />
                        </li>
                        <li className="footerIcons">
                            <IoLogoYoutube size="25"/>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Contact Us</h1>
                    <ul>
                        <li>info@SwapSnap.lk</li>
                    </ul>
                </div>
                <div className="paragraphFooter">
                    <p>Copyright ©2024 All rights reserved by SwapSnap</p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
