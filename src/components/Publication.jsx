import React from 'react';
import '../styles/publications.css';

const Publication = ({ title, authors, arxivLink, image, month, year }) => {
  return (
    <div className="publication-box">
      <img src={image} alt={title} className="publication-thumbnail" />
      <div className="publication-info">
        <div className="publication-date">{month + " " + year}</div>
        <h3 className="publication-title">{title}</h3>
        <p className="publication-authors">{authors}</p>
        <a href={arxivLink} target="_blank" rel="noopener noreferrer" className="publication-link">
          ARXIV
        </a>
      </div>
    </div>
  );
};

const Publications = ({ publications = [] }) => {
  // Group publications by year
  const publicationsByYear = {};

  publications.forEach((publication) => {
    const year = publication.entryTags.year || 'Unknown Year';
    if (!publicationsByYear[year]) {
      publicationsByYear[year] = [];
    }
    publicationsByYear[year].push(publication);
  });

  // Get an array of years, sorted in descending order
  const years = Object.keys(publicationsByYear).sort((a, b) => b - a);

  return (
    <div className="page-container">
      <div className="title-band">
        <h1>Publications</h1>
      </div>
      <div className="publications-container">
        {years.length > 0 ? (
          years.map((year) => (
            <div key={year} className="year-section">
              <h2 className="year-title">{year}</h2>
              <div className="publications-list">
              {publicationsByYear[year].map((publication, index) => (
                <Publication
                  key={index}
                  title={publication.entryTags.title}
                  authors={publication.entryTags.author}
                  arxivLink={publication.entryTags.url || '#'}
                  image={publication.entryTags.preview}
                  month={publication.entryTags.month}
                  year={publication.entryTags.year}
                />
              ))}
              </div>
            </div>
          ))
        ) : (
          <p>No publications available</p>
        )}
      </div>
    </div>
  );
};

export default Publications;