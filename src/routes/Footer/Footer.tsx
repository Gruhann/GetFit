// import React from 'react';
import './Footer.css'
interface FooterProps {
  email: string;
  phoneNumber: string;
}

export default function Footer({
  email,
  phoneNumber,
}: FooterProps) {
  return (
    <footer>
      <div className="contact">
        <h3>Contact Us</h3>
        <p> {email}</p>
        <p>{phoneNumber}</p>
      </div>
    </footer>
  );
}