import { useState } from "react";

import LandingPage from "./pages/LandingPage";
import ScanningPage from "./pages/ScanningPage";
import ResultsPage from "./pages/ResultsPage";

function App() {
  const [step, setStep] = useState("landing");
  const [report, setReport] = useState(null);

  const handleScanStart = () => {
    console.log("Scan started...");
    setStep("scanning");
  };

  const handleScanComplete = (data) => {
    console.log("Scan complete:", data);

    setReport(data);
    setStep("results");
  };

  if (step === "landing") {
    return (
      <LandingPage
        onScanStart={handleScanStart}
        onScanComplete={handleScanComplete}
      />
    );
  }

  if (step === "scanning") {
    return <ScanningPage />;
  }

  if (step === "results") {
    return (
      <ResultsPage
        report={report}
      />
    );
  }

  return null;
}

export default App;