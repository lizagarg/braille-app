import { useState, useCallback } from 'react';
import { DocumentIcon, ArrowUpTrayIcon } from '@heroicons/react/24/outline';

function UploadDocument() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  }, []);

  const handleFileSelect = (file) => {
    // Check if file is a document (you can add more file types)
    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      'text/plain'
    ];

    if (allowedTypes.includes(file.type)) {
      setSelectedFile(file);
    } else {
      alert('Please upload a valid document file (PDF, DOC, DOCX, or TXT)');
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    // Here you would typically send the file to your server
    // For now, we'll just show a success message
    alert('File uploaded successfully!');
    setSelectedFile(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Upload Document
      </h1>
      <p className="text-xl text-center mb-12 text-gray-600">
        Convert your documents to braille format
      </p>

      <div className="max-w-2xl mx-auto">
        <div
          className={`border-2 border-dashed rounded-lg p-8 text-center ${
            isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <DocumentIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-600 mb-4">
            Drag and drop your document here, or
          </p>
          <label className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer hover:bg-blue-600 transition-colors">
            <ArrowUpTrayIcon className="h-5 w-5 mr-2" />
            Choose File
            <input
              type="file"
              className="hidden"
              onChange={handleFileInput}
              accept=".pdf,.doc,.docx,.txt"
            />
          </label>
          <p className="text-sm text-gray-500 mt-2">
            Supported formats: PDF, DOC, DOCX, TXT
          </p>
        </div>

        {selectedFile && (
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <DocumentIcon className="h-8 w-8 text-blue-500 mr-3" />
                <div>
                  <p className="font-medium text-gray-800">{selectedFile.name}</p>
                  <p className="text-sm text-gray-500">
                    {(selectedFile.size / 1024).toFixed(2)} KB
                  </p>
                </div>
              </div>
              <button
                onClick={handleUpload}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
              >
                Convert to Braille
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadDocument; 