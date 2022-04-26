import React from 'react'
import { FooterWrapper, FooterList, FooterLogo } from '../styles/Styles'
const Footer = () => {
    return (
        <FooterWrapper>
            <FooterLogo />

            <FooterList column={1}>
                <li>Information</li>
                <li>About Us</li>
                <li>Origins</li>
                <li>FAQs</li>
                <li>Contact</li>
                <li>Legal</li>
            </FooterList>

            <FooterList row={2} column={2}>
                <li>Contact Us</li>
                <li>contact@awesomeagency.com</li>
                <li>+216 00 000 000</li>
                <li>FAQs</li>
                <li>The world, of Awesomeness</li>
            </FooterList>
            <FooterList column={1} row={3}>
                <li>Follow us On Social Media</li>

            </FooterList>

        </FooterWrapper>
    )
}

export default Footer