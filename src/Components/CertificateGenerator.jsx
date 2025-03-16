import axios from "axios";
import html2canvas from "html2canvas-pro";
import JSZip from "jszip";
import { jsPDF } from "jspdf";
import Dropzone from "react-dropzone";
import Draggable from "react-draggable";
import { useState } from "react";
import Papa from "papaparse";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

const CertificateGenerator = () => {
  const [template, setTemplate] = useState(null);
  const [fontSize, setFontSize] = useState(40);
  const [textColor, setTextColor] = useState("#000000");
  const [textAlign, setTextAlign] = useState("center");
  const [fontWeight, setFontWeight] = useState("bold");
  const [fontStyle, setFontStyle] = useState("normal");
  const [yPosition, setYPosition] = useState(100);
  const [csvData, setCsvData] = useState([]);
  const [preview, setPreview] = useState(false);
  const [generatedImages, setGeneratedImages] = useState([]);
  
  const handleTemplateUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => setTemplate(reader.result);
  };

  const handleCSVUpload = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      const result = Papa.parse(text, { header: true });
      setCsvData(result.data);
    };
    reader.readAsText(file);
  };

  const updateTextCustomization = (property, value) => {
    switch (property) {
      case "fontSize":
        setFontSize(value);
        break;
      case "textColor":
        setTextColor(value);
        break;
      case "textAlign":
        setTextAlign(value);
        break;
      case "fontWeight":
        setFontWeight(value);
        break;
      case "fontStyle":
        setFontStyle(value);
        break;
      default:
        break;
    }
  };

  const previewCertificate = () => {
    setPreview(true);
  };

  return (
    <div className="w-full p-6 bg-gradient-to-r from-blue-50 to-gray-200">
      <h1 className="text-5xl text-center font-bold mb-6">Certificate Generator</h1>
      <div className="w-full max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
        <Dropzone onDrop={handleTemplateUpload} accept="image/*">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="border-2 border-dashed border-blue-500 p-4 text-center cursor-pointer">
              <input {...getInputProps()} />
              <p>Upload Certificate Template</p>
            </div>
          )}
        </Dropzone>
        <Dropzone onDrop={handleCSVUpload} accept=".csv">
          {({ getRootProps, getInputProps }) => (
            <div {...getRootProps()} className="border-2 border-dashed border-blue-500 p-4 text-center cursor-pointer">
              <input {...getInputProps()} />
              <p>Upload CSV File</p>
            </div>
          )}
        </Dropzone>
        <Button onClick={previewCertificate} className="w-full mt-4">Preview Certificate</Button>
      </div>

      {preview && template && (
        <div className="mt-6">
          <div className="relative inline-block">
            <img src={template} alt="Certificate Preview" className="w-full h-auto" id="certificate-preview" />
            <Draggable axis="y" bounds="parent">
              <div
                className="absolute w-full text-center"
                style={{ fontSize: `${fontSize}px`, color: textColor, fontWeight: fontWeight, fontStyle: fontStyle, textAlign: textAlign }}
              >
                {csvData.length > 0 ? csvData[0]["name"] : "Sample Name"}
              </div>
            </Draggable>
          </div>
        </div>
      )}

      {preview && (
        <div className="mt-4 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold">Edit Certificate Text</h2>
          <label className="block mt-2">Font Size</label>
          <Input
            type="number"
            value={fontSize}
            onChange={(e) => updateTextCustomization("fontSize", parseInt(e.target.value))}
          />
          <label className="mt-2 block">Text Color</label>
          <Input
            type="color"
            value={textColor}
            onChange={(e) => updateTextCustomization("textColor", e.target.value)}
          />
          <label className="mt-2">Font Style</label>
          <Select onChange={(e) => updateTextCustomization("fontStyle", e.target.value)}>
            <option value="normal">Normal</option>
            <option value="italic">Italic</option>
          </Select>
        </div>
      )}
    </div>
  );
};

export default CertificateGenerator;