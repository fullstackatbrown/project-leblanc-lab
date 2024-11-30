import React from "react";
// import "./App.css";
import "../styles/team.css";

// TODO: Move these icons to a separate file
const GLOBE_ICON = (
    <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="none"
            d="M3 12H21M3 12C3 16.9706 7.02944 21 12 21M3 12C3 7.02944 7.02944 3 12 3M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M12 21C4.75561 13.08 8.98151 5.7 12 3M12 21C19.2444 13.08 15.0185 5.7 12 3"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </svg>
);

const EMAIL_ICON = (
    <svg
        width="800px"
        height="800px"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.75 5.25L3 6V18L3.75 18.75H20.25L21 18V6L20.25 5.25H3.75ZM4.5 7.6955V17.25H19.5V7.69525L11.9999 14.5136L4.5 7.6955ZM18.3099 6.75H5.68986L11.9999 12.4864L18.3099 6.75Z"
        />
    </svg>
);

const TeamMember = ({ name, email, website, picture, description }) => {
    return (
        <div className="team-member-box">
            <img src={picture} alt={name} className="team-member-thumbnail" />
            <div className="team-member-info">
                <h3 className="team-member-name">{name}</h3>
                <div className="team-member-contact">
                    {email && (
                        <a href={`mailto:${email}`} className="team-member-email">
                            <div className="email-icon">{EMAIL_ICON}</div>
                            <span>{email}</span>
                        </a>
                    )}
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="team-member-website"
                        >
                            <div className="globe-icon">{GLOBE_ICON}</div>
                            <span>{website}</span>
                        </a>
                    )}
                </div>
                <p className="team-member-description">{description}</p>
            </div>
        </div>
    );
};

const Team = ({ memberData = [] }) => {
    return (
        <div className="page-container">
            <div className="title-band">
                <h1>Our Team</h1>
            </div>
            <div className="fade-in">
                <div id="team-container">
                    {memberData.length > 0 ? (
                        memberData.map((member, index) => (
                            <TeamMember
                                key={index}
                                name={member.name}
                                email={member.email}
                                website={member.website}
                                picture={member.picture}
                                description={member.description}
                            />
                        ))
                    ) : (
                        <p>No team members available</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Team;
