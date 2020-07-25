import React from 'react';
import Button from 'react-bootstrap/Button';

export default function DownloadButton() {
  return (
    <Button href="resume.pdf" download="Ragay_Resume.pdf" variant="download" size="large">
      <div>
        <span className="svg-container">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-download hover-download" width="20" height="20" viewBox="0 0 28 28" strokeWidth="3" stroke="#FFFFFF" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
            <polyline points="7 11 12 16 17 11" />
            <line x1="12" y1="4" x2="12" y2="16" />
          </svg>
        </span>
        <span className="download-text">DOWNLOAD RESUME</span>

      </div>
    </Button>
  )

}