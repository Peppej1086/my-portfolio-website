import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import matrix from "../images/videos/matrix.mp4";

function GetinTouch() {
    const form = useRef();
    const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();  // Aggiungi questa riga

        const formEl = form.current;
        if (!formEl.checkValidity()) {
            // Se il form non è valido, esegui le azioni necessarie (ad es. mostrare feedback)
            formEl.classList.add('was-validated');
            return;  // Non procedere oltre se il form non è valido
        }

        emailjs.sendForm('service_b9iwzqj', 'template_e8gzt67', form.current, 'p3Y7xYWXsmzxQLcxe')
            .then((result) => {
                console.log(result.text);
                // Reset form fields and show confirmation message
                setFormData({ firstName: '', lastName: '', email: '', message: '' });
                setSubmitted(true);
                // Remove 'was-validated' class and reset form state
                if (formEl) {
                    formEl.classList.remove('was-validated');
                    formEl.reset();
                }
                // Hide confirmation message after some time
                setTimeout(() => setSubmitted(false), 5000);
            }, (error) => {
                console.log(error.text);
            });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <section id="contattami" className="formSection d-flex align-items-center">
            <video autoPlay muted loop playsInline id="matrixVideo" >
                <source src={matrix} type="video/mp4" />
            </video>
            <div className="form-container z-1">
                <div className="d-flex justify-content-center mb-3">
                    <h2 className="h1 castom-h myTextColor">Get in Touch!</h2>
                </div>
                {submitted && <div className="alert alert-success" role="alert">Messaggio inviato con successo, grazie mille!</div>}
                <form noValidate ref={form} onSubmit={sendEmail}>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <input type="text" name='firstName' value={formData.firstName} onChange={handleInputChange} className="form-control" placeholder="Nome" aria-label="First name" id='FirstName' required />
                            <div className="valid-feedback">Bene, continua così!</div>
                            <div className="invalid-feedback">Per favore, inserisci il tuo nome.</div>
                        </div>
                        <div className="col-12 col-md mb-3">
                            <input type="text" name='lastName' value={formData.lastName} onChange={handleInputChange} className="form-control" placeholder="Cognome" aria-label="Last name" id='LastName' required />
                            <div className="valid-feedback">Bene, continua così!</div>
                            <div className="invalid-feedback">Per favore, inserisci il tuo cognome.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <input type="email" name='email' value={formData.email} onChange={handleInputChange} className="form-control" placeholder="E-mail" id="inputEmail" autoComplete="email" required />
                            <div className="valid-feedback">Bene, continua così!</div>
                            <div className="invalid-feedback">Per favore, inserisci la tua E-mail.</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <textarea type="text" name='message' value={formData.message} onChange={handleInputChange} className="form-control" placeholder="Scrivimi un messaggio!" id="textarea-message" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <div className='form-check'>
                            <input type="checkbox" name='privacyPolicy' className="form-check-input" id="privay-policy" required />
                            <label className="form-check-label myTextColor" htmlFor="exampleCheck1"><p className='mb-0'>Ho letto l'informativa sulla <a href="https://www.iubenda.com/privacy-policy/23562694" target="_blank" rel="noopener noreferrer" className='myTextColor' title="Privacy Policy">Privacy Policy</a> e acconsento al trattamento dei miei dati.</p></label>
                            <div className="invalid-feedback">Per favore, leggi e accetta la Privacy Policy.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md">
                            <button type="submit" className="btn myButtonStyle">Invia</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default GetinTouch;