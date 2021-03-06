import React from "react";

function Contactme() {
    return (
        <div>
            <div class="row landing-page">

                <div class="landing-left-div col-lg-6">
                    <img class="landingpage-img" src={require("../images/landingpage-image.png")}></img>
                </div>

                <div class="landing-right-div col-lg-6">
                    <div class="landingpage-right-content">
                        <h1>Contact</h1>
                        <p>
                            Wanna get in touch? feel free to leave a message. If i did not reply within two days, I would probably wandering in my dreams!
                        </p>

                        <div class="contact-icons">
                            <a href="https://twitter.com/Ayesha_SK21d?t=EwTy9BH5ffEhDMk_gViLkw&s=09"><i class="fa-brands fa-twitter icon">Twitter</i></a>
                            <a href="https://instagram.com/ayesha_sk14?igshid=YmMyMTA2M2Y="><i class="fa-brands fa-instagram icon"> Instagram</i></a>
                            <a href="https://www.linkedin.com/in/ayeshask"><i class="fa-brands fa-linkedin icon">Linkedin</i></a>
                            <a href="https://github.com/Ayesha-sk-14"><i class="fa-brands fa-github icon">Github</i></a>
                        </div>
                    </div>

                </div>
            </div>

            <section className="main-content">
                <div>
                    <form>
                        <h1>Send me an email</h1>
                        <label>Name:</label>
                        <input type="text" placeholder="Enter your name" />
                        <label>Email address:</label>
                        <input type="email" placeholder="Enter your email" />
                        <label>Message:</label>
                        <textarea rows="4" columns="50" placeholder="Type your message" />
                    </form>
                </div>
            </section>
        </div>
    );
}

export default Contactme;