import React from 'react';

function WorkItem({ title, date, description, mediaUrl, isSvg }) {
  return (
    <div className="work-item">
      <h3>{title}</h3>
      <p className="date">{date}</p>
      <p>{description}</p>
      {isSvg ? (
        <a href={mediaUrl} target="_blank" rel="noopener noreferrer">View SVG</a>
      ) : (
        <embed src={mediaUrl} width="100%" height="400px" />
      )}
    </div>
  );
}

export default WorkItem;

