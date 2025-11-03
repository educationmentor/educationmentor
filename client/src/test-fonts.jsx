import React from 'react';

const TestFonts = () => {
  return (
    <div className="p-8 space-y-4">
      <h1 className="text-h0Text">H0 Text - Main Heading</h1>
      <h2 className="text-h1Text">H1 Text - Sub Heading</h2>
      <h3 className="text-h2Text">H2 Text - Section Title</h3>
      <p className="text-regularText">Regular Text - This is regular paragraph text</p>
      <p className="text-smallText">Small Text - This is small text</p>
      
      <div className="mt-8">
        <h2 className="text-h1TextPhone md:text-h1Text">Responsive Heading</h2>
        <p className="text-regularTextPhone md:text-regularText">
          This text is smaller on mobile and larger on desktop
        </p>
      </div>
    </div>
  );
};

export default TestFonts;



