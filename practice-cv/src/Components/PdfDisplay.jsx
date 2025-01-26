import React from 'react';

const ShowPdf = () => {
    const pdfPath = '../pdf/CV-202501v2.pdf';
    console.log(pdfPath);
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
        <iframe 
        src={pdfPath}  
        title="PDF Viewer"
        width="100%"
        height="500px">
            <p>Failed to load PDF </p>
        </iframe>
        </div>
    )
};
export default ShowPdf;