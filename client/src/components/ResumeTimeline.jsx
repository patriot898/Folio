import React from 'react';

const formatEntry = (entry, isLast) => {
  let blockName = 'resume-block';
  if (isLast) {
    blockName += ' last-block';
  }

  return (
    <div className={blockName}>
      <p className="resume-entry-title">{entry.title}</p>
      <p className="resume-entry-date">{entry.date}</p>
      <p>{entry.description}</p>
    </div>
  );
};

export default function ResumeTimeline({ timeline, title }) {
  const entries = [];
  const lastEntry = timeline[timeline.length - 1];

  return (
    <>
      <h3 className="title-text small-title">{title}</h3>
      {entries.map((entry) => formatEntry(entry, false))}
      {formatEntry(lastEntry, true)}
    </>
  );
}
