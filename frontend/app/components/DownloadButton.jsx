import React from 'react';

const DownloadButton = ({ fileUrl }) => {
  const handleDownload = () => {
    // Create an anchor element
    const link = document.createElement('a');
    // Set the href attribute to the file URL
    link.href = fileUrl;
    // Set the download attribute to the file name
    link.download = fileUrl.substring(fileUrl.lastIndexOf('/') + 1); // Extract filename from URL
    // Append the anchor element to the body
    document.body.appendChild(link);
    // Trigger a click event on the anchor element
    link.click();
    // Remove the anchor element from the body
    document.body.removeChild(link);
  };

  return (
    <div className='text-center'>
      <button onClick={handleDownload} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded my-10">
        Download Slide
      </button>
    </div>
  );
};

export default DownloadButton;