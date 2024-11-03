import React from 'react';
import '../styles/publications.css';

const Publication = ({ title, authors, arxivLink, image, date }) => {
  return (
    <div className="publication-box">
      <img src={image} alt={title} className="publication-thumbnail" />
      <div className="publication-info">
        <div className="publication-date">{date}</div>
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
  return (
    <div className="page-container">
    <div className="title-band">
      <h1>Publications</h1>
    </div>
    <div className="publications-container">
      {publications.length > 0 ? (
        publications.map((publication, index) => (
          <Publication key={index} 
          title={publication.entryTags.title}
          authors={publication.entryTags.author}
          arxivLink={publication.entryTags.url || '#'}
          image={publication.entryTags.preview}
          date={publication.entryTags.year} />
        ))
      ) : (
        <p>No publications available</p>
      )}
    </div>
    </div>
  );
};

export default Publications;
