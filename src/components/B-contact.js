import React from "react";

const contactInfo = [
  {
    icon: "images/icon-phone.svg",
    title: "contact us",
    lines: [
      { type: "tel", value: "+123254963", label: "(+00) 123-254-963" },
      { type: "tel", value: "+761852339", label: "(+12) 761 852 339" },
    ],
    delay: "0s",
  },
  {
    icon: "images/icon-mail.svg",
    title: "Make a quote",
    lines: [
      { type: "email", value: "rabeet.ali@lexa.lawyer" },
      { type: "email", value: "contact@lexa.lawyer" },
    ],
    delay: "0.2s",
  },
  {
    icon: "images/icon-clock.svg",
    title: "Working hours",
    lines: ["Mon-Fri : 08am - 10pm", "sat-sun : close"],
    delay: "0.4s",
  },
  {
    icon: "images/icon-location.svg",
    title: "location",
    lines: ["123 Lorem Street Suite 5B, Ipsum UK"],
    delay: "0.6s",
  },
];

const ContactUs = () => {
  return (
    <div className="page-contact-us">
      <div className="container">
        <div className="row">
          {/* Contact Info */}
          <div className="col-lg-12">
            <div className="contact-info-list">
              {contactInfo.map((info, index) => (
                <div
                  className="contact-info-item wow fadeInUp"
                  data-wow-delay={info.delay}
                  key={index}
                >
                  <div className="icon-box">
                    <img src={info.icon} alt={info.title} />
                  </div>
                  <div className="contact-info-content">
                    <h3>{info.title}</h3>
                    {info.lines.map((line, idx) =>
                      typeof line === "string" ? (
                        <p key={idx}>{line}</p>
                      ) : line.type === "tel" ? (
                        <p key={idx}>
                          <a href={`tel:${line.value}`}>{line.label}</a>
                        </p>
                      ) 
                      : 
                      (
                        <p key={idx}>
                          <a href={`mailto:${line.value}`}>{line.value}</a>
                        </p>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form and Map */}
          <div className="col-lg-12">
            <div className="conatct-us-form">
              {/* Google Map */}
              <div className="google-map-iframe order-lg-1 order-2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d96737.10562045308!2d-74.08535042841811!3d40.739265258395164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1703158537552!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="contact-form order-lg-2 order-1">
                <div className="section-title">
                  <h3 className="wow fadeInUp">Contact us</h3>
                  <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                    Send us <span>a message</span>
                  </h2>
                </div>

                <form
                  id="contactForm"
                  action="#"
                  method="POST"
                  data-toggle="validator"
                  className="wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  <div className="row">
                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="fname"
                        className="form-control"
                        id="fname"
                        placeholder="First Name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="lname"
                        className="form-control"
                        id="lname"
                        placeholder="Last Name"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        id="phone"
                        placeholder="Phone No."
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-6 mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        id="email"
                        placeholder="Email Address"
                        required
                      />
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="form-group col-md-12 mb-5">
                      <textarea
                        name="message"
                        className="form-control"
                        id="message"
                        rows="4"
                        placeholder="Write Message..."
                      ></textarea>
                      <div className="help-block with-errors"></div>
                    </div>

                    <div className="col-lg-12">
                      <div className="contact-form-btn">
                        <button type="submit" className="btn-default">
                          <span>submit now</span>
                        </button>
                        <div id="msgSubmit" className="h3 hidden"></div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Contact Form */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
