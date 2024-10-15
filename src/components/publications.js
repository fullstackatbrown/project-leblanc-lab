import React from 'react';

const publications = [
    {
        title: "pub1title",
        authors: "A, B",
        journal: "journal",
        year: 2023,
        arxivLink: "blah.com",
        journalLink: "journal.com"
    }
]

const Publications = () => {
    return (
        <section>
            <h1>Publications</h1>
            <div>
                <img src="/path-to-your-image.jpg" alt="Rendered" style={{width: '100%', maxWidth: '600px'}}/>
                <h2>title here</h2>
            </div>
            <h2>Publication List</h2>
        </section>
    )
}

export default Publications;