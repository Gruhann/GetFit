// import React from 'react';
import './Footer.css'
interface FooterProps {
  email: string;
  phoneNumber: string;

  instagramLink: string;
  twitterLink: string;

}

export default function Footer({
  email,
  phoneNumber,

  instagramLink,
  twitterLink,
}: FooterProps) {
  return (
    <footer>
      <div className="contact">
        <h3>Contact Us</h3>
        <p> {email}</p>
        <p>Phone: {phoneNumber}</p>
        <p>Follow us on:</p>
        <ul>
          <ol><a href={instagramLink}><i className="fab fa-instagram"></i></a></ol>
          <ol><a href={twitterLink}><i className="fab fa-twitter"></i></a></ol>
        </ul>
      </div>
    </footer>
  );
}