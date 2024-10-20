import React, { useEffect, useState } from 'react';
import bibtexParse from 'bibtex-parse-js';

const BibTexParser = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch('/publications.bib')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to load BibTeX file');
        }
        return response.text();
      })
      .then(data => {
        console.log("BibTeX file content:", data);
        try {
          const parsedData = bibtexParse.toJSON(data);
          console.log("Parsed BibTeX data:", parsedData);
          setArticles(parsedData);
        } catch (error) {
          console.error("Error parsing BibTeX:", error);
        }
      })
      .catch(error => {
        console.error('Error loading BibTeX:', error);
      });
  }, []);
  return (
    <div>
      <h1>Research Publications</h1>
      {articles.map((article, index) => (
        <div key={index} style={{ marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <h3>{article.entryTags.title}</h3>
          <p><strong>Author:</strong> {article.entryTags.author}</p>
          <p><strong>Year:</strong> {article.entryTags.year}</p>
          <p><strong>Note:</strong> {article.entryTags.note ? article.entryTags.note : 'Not provided'}</p>
        </div>
      ))}
    </div>
  );
};

export default BibTexParser;