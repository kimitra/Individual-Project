import { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Message submitted.");
    };

    return (
        <section>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="name"
                value={formData.name} onChange={handleChange} />
                <input name="email" placeholder="Email"
                value={formData.email} onChange={handleChange} />
                <textarea name="message" placeholder="Message"
                value={formData.message} onChange={handleChange} />
                <button type="submit">Send</button>
            </form>
        </section>
    );
}
export default Contact;