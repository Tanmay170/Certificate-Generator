import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import Dropzone from 'react-dropzone';
import Draggable from 'react-draggable';

const CertificateGenerator = () => {
  const [name, setName] = useState('John Doe');
  const [template, setTemplate] = useState(null);
  const [fontSize, setFontSize] = useState(20);
  const [yPosition, setYPosition] = useState(0);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      setTemplate(reader.result);
    };
    
    reader.readAsDataURL(file);
  };

  const generateCertificate = () => {
    const input = document.getElementById('certificate-template');

    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape');
      pdf.addImage(imgData, 'PNG', 0, 0, 297, 210);
      pdf.save(`${name}-certificate.pdf`);
    });
  };

  const handleDrag = (e, data) => {
    setYPosition(data.y);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Certificate Generator</h1>

        <Dropzone onDrop={onDrop} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
              className="border-2 border-dashed border-blue-500 bg-blue-50 p-6 rounded-lg mb-8 cursor-pointer hover:bg-blue-100 transition duration-200"
            >
              <input {...getInputProps()} />
              <p className="text-blue-600">Drag & Drop your template or click to select</p>
            </div>
          )}
        </Dropzone>

        <input
          type="text"
          placeholder="Enter recipient's name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg mb-6 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label className="flex items-center justify-between text-lg mb-6">
          Font Size:
          <input
            type="number"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="ml-4 p-2 w-20 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <button
          onClick={generateCertificate}
          className="w-full bg-blue-500 text-white p-3 rounded-lg text-xl hover:bg-blue-600 transition duration-200"
        >
          Generate Certificate
        </button>

        {template && (
          <div
            id="certificate-template"
            className="relative mt-10 border rounded-lg overflow-hidden"
            style={{ height: '400px' }}
          >
            <img
              src={template}
              alt="Certificate Template"
              className="w-full h-auto"
            />
            {name && (
              <Draggable
                axis="y"
                bounds="parent"
                position={{ x: 0, y: yPosition }}
                onDrag={handleDrag}
              >
                <div
                  className="absolute w-full text-center cursor-move"
                  style={{ fontSize: `${fontSize}px`, color: 'black' }}
                >
                  {name}
                </div>
              </Draggable>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificateGenerator;
