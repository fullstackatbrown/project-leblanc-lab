import React from 'react';
import '../styles/talks.css';

const Talk = ({ title, authors, arxivLink, image, month, year }) => {
    return (
      <div className="talk-box">
        <div className="talk-thumbnail-container">
          <div className="talk-date">{month + " " + year}</div>
          <img src={image} alt={title} className="talk-thumbnail" />
        </div>
        <div className="talk-info">
          <h3 className="talk-title">{title}</h3>
          <p className="talk-authors">{authors}</p>
          <a href={arxivLink} target="_blank" rel="noopener noreferrer" className="talk-link">
            ARXIV
          </a>
        </div>
      </div>
    );
  };

const Talks = ({ talks = [] }) => {
    // Group talks by year
    const talksByYear = {};
  
    talks.forEach((talk) => {
      const year = talk.entryTags.year || 'Unknown Year';
      if (!talksByYear[year]) {
        talksByYear[year] = [];
      }
      talksByYear[year].push(talk);
    });
  
    // Get an array of years, sorted in descending order
    const years = Object.keys(talksByYear).sort((a, b) => b - a);
  
    return (
      <div className="page-container">
        <div className="title-band">
          <h1>Talks</h1>
        </div>
        <div className="talks-container">
          {years.length > 0 ? (
            years.map((year) => (
              <div key={year} className="year-section">
                <h2 className="year-title">{year}</h2>
                <div className="talks-list">
                {talksByYear[year].map((talk, index) => (
                  <Talk
                    key={index}
                    title={talk.entryTags.title}
                    authors={talk.entryTags.author}
                    arxivLink={talk.entryTags.url || '#'}
                    image={talk.entryTags.preview}
                    month={talk.entryTags.month}
                    year={talk.entryTags.year}
                  />
                ))}
                </div>
              </div>
            ))
          ) : (
            <p>No talks available</p>
          )}
        </div>
      </div>
    );
};

export default Talks;