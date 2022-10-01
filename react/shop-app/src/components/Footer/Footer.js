import styled from "styled-components";
import { BsFacebook } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'
import { BsTwitter } from 'react-icons/bs'

import logo from '../../assets/logo.svg';


const FooterContainer = styled.footer`
    position: absolute;
    bottom: 0;
    width: 100%;
 
    img{
        width:80px;
        margin:20px 50px;

    }
    .social-media-logos{
     
    svg{
        width:25px;
        height:25px;
        margin-right:10px;
    }    
    }
    ul li{
        list-style:none;
        padding-bottom:5px
    }
    ul{
        padding:0;
    }

    .footer-text{
        border-top:1px solid white;
        text-align:center;
    }
    .footer-container{
        display:grid;
        grid-template-columns:1fr;
       
    }
    .footer-links{
        display:flex;
        justify-content:center;
        align-items:center;

        div{
            margin-right:50px;
        }
    }
    .footer-logos{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    @media (min-width: 992px){
        .footer-container{
            display:grid;
            grid-template-columns:auto 1fr;
        }       
        
        .social-media-logos{
            margin-left:20px;
            margin-top:10px;
    }
    
`

function Footer() {
    return (
        <FooterContainer>
            <div className="footer-container">
            <div className="footer-logos">
                <img src={logo} alt="logo"></img>
                <div className="social-media-logos">
                    <BsFacebook />
                    <AiFillInstagram />
                    <BsTwitter />
                </div>
            </div>
            <div className="footer-links">
                <div className="categories">
                    <h3>Categories</h3>
                    <ul>
                        <li>Running shoes</li>
                        <li>Yoga shoes</li>
                        <li>Sport shoes</li>
                        <li>Casual shoes</li>
                        <li>School shoes</li>
                    </ul>
                </div>
                <div className="about-us">
                    <h3>Get Help</h3>
                    <ul>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Return policy</li>
                        <li>Privacy policy</li>
                        <li>Payment policy</li>
                    </ul>
                </div>
                <div className="about-us">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>News</li>
                        <li>Services</li>
                        <li>Policy</li>
                        <li>Customer care</li>
                        <li>FAQ's</li>
                    </ul>
                </div>
            </div>
            </div>
            <div className="footer-text">
                <p>2022 Footskip Inc. All rights reserved</p>
            </div>
        </FooterContainer>


    )
}


export default Footer