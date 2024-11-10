import React from "react";
// import "./App.css";
import "../styles/team.css";

const TeamMember = ({ name, email, website, picture, description }) => {
    return (
        <div className="team-member-box">
            <img src={picture} alt={name} className="team-member-thumbnail" />
            <div className="team-member-info">
                <h3 className="team-member-name">{name}</h3>
                {email && <p className="team-member-email">{email}</p>}
                {website && (
                    <a
                        href={website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="team-member-website"
                    >
                        Website
                    </a>
                )}
                <p className="team-member-description">{description}</p>
            </div>
        </div>
    );
};

const Team = () => {
    const teamMembers = [
        {
            name: "John Doe",
            email: "johndoe@gmail.com",
            website: "https://johndoe.com",
            picture: "https://via.placeholder.com/150",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vel felis posuere luctus. Sed euismod, nunc nec fermentum ultricies, odio eros ultrices justo, nec tincidunt turpis turpis eu nunc.",
        },
        {
            name: "Jane Doe",
            email: "janedoe@gmail.com",
            website: "https://janedoe.com",
            picture: "https://via.placeholder.com/150",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et quam vel felis posuere luctus. Sed euismod, nunc nec fermentum ultricies, odio eros ultrices justo, nec tincidunt turpis turpis eu nunc.",
        },
    ];

    return (
        <div className="page-container">
            <div className="title-band">
                <h1>Team Members</h1>
            </div>
            <div className="team-members-container">
                {teamMembers.length > 0 ? (
                    teamMembers.map((member, index) => (
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
    );
};

export default Team;
