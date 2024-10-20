import React from 'react';
import '../styles/App.css';

const Publication = ({ title, authors, arxivLink, image }) => {
  const boxStyle = {
    display: 'flex',
    border: '1px solid #ccc',
    borderRadius: '8px',
    overflow: 'hidden',
    padding: '16px',
    marginBottom: '16px',
  };

  const imageStyle = {
    width: '20%',
    objectFit: 'cover',
  };

  const infoStyle = {
    width: '80%',
    paddingLeft: '16px',
  };

  return (
      <div style={boxStyle}>
        <img src={image} alt={title} style={imageStyle} />
        <div style={infoStyle}>
          <h3>{title}</h3>
          <p>{authors}</p>
          <a href={arxivLink} target="_blank" rel="noopener noreferrer">
            arXiv Link
          </a>
        </div>
      </div>
  );
};

export default Publication;
