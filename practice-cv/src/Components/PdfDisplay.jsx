import React from 'react';

const ShowPdf = () => {
    const pdfPath = '../pdf/CV-202501v2.pdf';
   
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
        <iframe 
        src={pdfPath}  
        title="PDF Viewer"
        width="100%"
        height="800rem"        
        sandbox='allow-scripts allow-same-origin'/>
        </div>
    )
};
export default ShowPdf;