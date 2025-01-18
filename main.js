import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import StepPersonalityDimensions from "./steps/StepPersonalityDimensions.js";
import StepDNATraitsAndPrompt from "./steps/StepDNATraitsAndPrompt.js";
import StepModelConfig from "./steps/StepModelConfig.js";
import StepDataSourcesAndCapabilities from "./steps/StepDataSourcesAndCapabilities.js";

const defaultConfig = { /* your config here */ };

function App() {
  return (
    <div className="container">
      <StepPersonalityDimensions />
      <StepDNATraitsAndPrompt />
      <StepModelConfig />
      <StepDataSourcesAndCapabilities />
    </div>
  );
}

// Updated to use createRoot (React 18 method)
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);