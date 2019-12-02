import React, { useEffect, useState } from 'react';
import '../styles/CVView.scss';
import { Document, Page, pdfjs, StyleSheet } from 'react-pdf';
import { client } from '../utils/sanityIO';
import PDFlink from '../images/dummy.pdf';
// import PDFlink from '../images/schroeder_resume-c.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export default function CVView() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    const query = '*[_type == "cv"]';¡
    const params = {};
    client.fetch(query, params).then(results => {
      const rawFileName = results[0].cvPdf.asset._ref;
      const trimmedFilename = rawFileName
        .replace('file-', '')
        .replace('-pdf', '');
      const fileUrl = `https://cdn.sanity.io/files/3ptjvz2p/production/${trimmedFilename}.pdf`;
      // const fileUrl = `https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`;
      setPdfUrl(fileUrl);
    });
  }, []);

  // const styles = StyleSheet.create({
  //   page: {
  //     width: 300,
  //   },
  // });

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
