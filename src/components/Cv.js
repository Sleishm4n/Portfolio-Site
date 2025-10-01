
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
 
function Cv() {
    return (
        <div>
            <h1>Cv</h1>
            {/* embedded cv element */}
            <div style={{ width: "79%", height: '600px', border: '1px solid #ddd', margin: "auto" }}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl="/Sam Leishman - CV.pdf" />
                </Worker>
            </div>
        </div>
    );
}

export default Cv;