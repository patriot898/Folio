import React from 'react';

const formatEntry = (entry, index, isLast) => {
  let blockName = 'resume-block';
  if (isLast) {
    blockName += ' last-block';
  }

  return (
    <div className={blockName} key={index} >
      <p className="resume-entry-title">{entry.title}</p>
      <p className="resume-entry-date">{entry.date}</p>
      <p>{entry.description}</p>
    </div>
  );
};

export default function ResumeTimeline({ timeline, title }) {
  const entries = [];
  const lastEntry = timeline[timeline.length - 1];

  for (let i = 0; i < timeline.length - 1; i += 1) {
    entries.push(timeline[i]);
  }

  return (
    <>
      <h3 className="title-text small-title">{title}</h3>
      {entries.map((entry, idx) => formatEntry(entry, idx, false))}
      {formatEntry(lastEntry, entries.length, true)}
    </>
  );
}
