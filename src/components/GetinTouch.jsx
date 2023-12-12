import React, { useRef } from 'react';
import matrix from "../images/videos/matrix.mp4";

function GetinTouch() {
    const form = useRef(null);

    const handleSubmit = (event) => {
        const formEl = form.current;
        if (formEl && !formEl.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        if (formEl) {
            formEl.classList.add('was-validated');
        }
    };

    return (
        <section id="get-in-touch" className="formSection d-flex align-items-center">
            <video autoPlay muted loop id="matrixVideo" >
                <source src={matrix} type="video/mp4" />
            </video>
            <div className="form-container z-1">
                <div className="d-flex justify-content-center mb-3">
                    <h2 className="h1 castom-h myTextColor">Get in Touch</h2>
                </div>
                <form noValidate ref={form} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <input type="text" name='firstName' className="form-control" placeholder="First name" aria-label="First name" id='FirstName' required />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please enter your First Name</div>
                        </div>
                        <div className="col-12 col-md mb-3">
                            <input type="text" name='lastName' className="form-control" placeholder="Last name" aria-label="Last name" id='LastName' required />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please enter your Last Name</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <input type="email" name='email' className="form-control" placeholder="Email" id="inputEmail" autoComplete="email" required />
                            <div className="valid-feedback">Looks good!</div>
                            <div className="invalid-feedback">Please enter your E-mail</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <textarea type="text" name='message' className="form-control" placeholder="Write me a message!" id="textarea-message" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                                <label className="form-check-label myTextColor" htmlFor="invalidCheck">Agree to terms and conditions</label>
                                <div className="invalid-feedback">You must agree before submitting.</div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md">
                            <button type="submit" className="btn myButtonStyle">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default GetinTouch;