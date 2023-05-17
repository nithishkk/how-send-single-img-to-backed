import React, { useRef } from 'react';
import "./style.css";

export default function App() {
  const aadharDocumentInputRef = useRef(null);
  const handleAadharFileClick = () => {
   
    aadharDocumentInputRef.current.click();
  };
  console.log( aadharDocumentInputRef.current," aadharDocumentInputRef")
  return (
    <div>
      <input
  id="aadhar_document_file"
  type="file"
  style={{ display: 'none' }}
  ref={aadharDocumentInputRef}
/>

<button onClick={handleAadharFileClick}>Click to Upload Aadhar File</button>

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}


// import React, { useRef } from 'react';

// const handleAadharFileClick = () => {
//   const aadharDocumentInputRef = useRef(null);
//   aadharDocumentInputRef.current.click();
// };

// // Inside your component
// <input
//   id="aadhar_document_file"
//   type="file"
//   style={{ display: 'none' }}
//   ref={aadharDocumentInputRef}
// />

// <button onClick={handleAadharFileClick}>Click to Upload Aadhar File</button>
