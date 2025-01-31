import React from 'react';

const ShowPdf = () => {
    const pdfPath = '/pdf/CV-202501v2.pdf';
   
    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
        <embed 
        src={pdfPath + "#toolbar=0"}  
        type="application/pdf"
        width="100%"
        height="100%"/>
        </div>
    )
};
export default ShowPdf;