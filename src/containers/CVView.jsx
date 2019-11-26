import React, { useEffect, useState } from 'react';
import '../styles/CVView.scss';
import { Document, Page, pdfjs } from 'react-pdf';
import { client } from '../utils/sanityIO';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CVView() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const query = '*[_type == "cv"]';
    const params = {};
    client.fetch(query, params).then(results => {
      const rawFileName = results[0].cvPdf.asset._ref;
      const trimmedFilename = rawFileName
        .replace('file-', '')
        .replace('-pdf', '');
      const fileUrl = `https://cdn.sanity.io/files/3ptjvz2p/production/${trimmedFilename}.pdf`;
      setPdfUrl(fileUrl);
    });
  }, []);

  let pageContent;
  if (pdfUrl) {
    console.log(pdfUrl);
    pageContent = (
      <Document className="cv-pdf-image" file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    );
  } else {
    pageContent = <span>Loading...</span>;
  }

  return <div className="cv-pdf-container">{pageContent}</div>;
}
