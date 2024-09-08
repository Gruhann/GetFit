import { useState } from 'react';
import "./contact.css"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    testimonial: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the formData to your server
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We value your feedback! Please share your testimonial or suggestions below.</p>
      
      {submitted ? (
        <div className="submission-confirmation">
          <h2>Thank You!</h2>
          <p>Your testimonial has been received. We appreciate your feedback and will review it shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="testimonial">Testimonial:</label>
            <textarea
              id="testimonial"
              name="testimonial"
              value={formData.testimonial}
              onChange={handleChange}
              rows={5}
              required
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      <p>Your testimonials won't be saved.</p>
      <p>We will rectify this problem soon</p>

    </div>
  );
}
