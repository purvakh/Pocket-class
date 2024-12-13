import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    console.log("clicked");
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        {
          name,
          email,
          subject,
          message,
        }
      )
      .then((res) => {
        alert(res.data.message);
        setName("");
        setEmail("");
        setMessage("");
        setSubject("");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  return (
    <>
      <div className="contact container">
        <div className="banner">
          <div className="item">
            <h4>Address</h4>
            <p>Viman Nagar, Pune City, 411014</p>
          </div>
          <div className="item">
            <h4>Call Us</h4>
            <p>Call Us: +92-321-1111111</p>
          </div>
          <div className="item">
            <h4>Mail Us</h4>
            <p>pocketclass@gmail.com</p>
          </div>
        </div>
        <div className="banner">
          <div className="item">
            <iframe
              src="data:image/jpeg;base64,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"
              style={{ border: 0, width: "100%", height: "450px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="item">
            <form onSubmit={handleSendMessage}>
              <h2>CONTACT</h2>
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <textarea
                rows={10}
                placeholder="Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
