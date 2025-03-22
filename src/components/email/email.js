import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './email.scss'

const Email = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_hb35eid", // service ID
        "template_2ehvhar", // template ID
        formData,
        "Qma-Yo4Qs3NNUrXth" // public key
      )
      .then(
        (response) => {
          console.log("Email sent!", response);
          toast.success("Message sent successfully! ✅", { position: "top-right", autoClose: 3000 });
          setStatus("Email sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form after successful submission
        },
        (error) => {
            toast.error("Failed to send message. ❌", { position: "top-right", autoClose: 3000 });
          console.error("Failed to send email:", error);
          setStatus("Failed to send email. Please try again.");
        }
      );
  };
  return (
    <div className="email-container">
      <h2 className="email-title">Contact Me</h2>
      <form onSubmit={handleSubmit} className="email-form">
        <label className="email-label">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="email-input"
          required
        />

        <label className="email-label">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="email-input"
          required
        />

        <label className="email-label">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="email-textarea"
          rows="4"
          required
        ></textarea>

        <button type="submit" className="email-button">
          Send Message
        </button>

        {status && <p className="email-status">{status}</p>}
      </form>
      <ToastContainer />
    </div>
  );

};

export default Email;
