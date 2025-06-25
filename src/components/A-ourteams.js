import React from "react";

// Import team images
import team1 from "../images/team-1.jpg";
import team2 from "../images/team-2.jpg";
import team3 from "../images/team-3.jpg";
import team4 from "../images/team-4.jpg";

// Sample team data
const teamMembers = [
  {
    image: team1,
    name: "Sarah Mitchell",
    role: "Co. Founder",
    delay: "0s",
  },
  {
    image: team2,
    name: "Brooklyn Simmons",
    role: "Marketing Director",
    delay: "0.2s",
  },
  {
    image: team3,
    name: "Ralph Edwards",
    role: "Lead AI Scientist",
    delay: "0.4s",
  },
  {
    image: team4,
    name: "Marvin Mckinney",
    role: "Machine Learning Engineer",
    delay: "0.6s",
  },
];

const OurTeam = () => {
  return (
    <div className="our-team">
      <div className="container">
        <div className="row section-title">
          <div className="col-lg-12">
            <div className="section-title section-title-center">
              <h3 className="wow fadeInUp">our team</h3>
              <h2
                className="wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor="-opaque"
              >
                Dedicated experts committed to{" "}
                <span>intelligent progress</span>
              </h2>
            </div>
          </div>
        </div>

        <div className="row">
          {teamMembers.map((member, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="team-item wow fadeInUp" data-wow-delay={member.delay}>
                <div className="team-image">
                  <a
                    href="team-single.html"
                    className="image-anime"
                    data-cursor-text="View"
                  >
                    <figure>
                      <img src={member.image} alt={member.name} />
                    </figure>
                  </a>
                </div>

                <div className="team-body">
                  <div className="team-content">
                    <h3>
                      <a href="team-single.html">{member.name}</a>
                    </h3>
                    <p>{member.role}</p>
                  </div>
                  <div className="team-social-list">
                    <ul>
                      <li>
                        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="fa-brands fa-pinterest-p"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
