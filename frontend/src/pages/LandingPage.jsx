import { motion } from "framer-motion";
import { useRef } from "react";
import api from "../services/api";
   
function LandingPage({ onScanComplete, onScanStart }) {

  const fileInputRef = useRef(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const formData = new FormData();
    formData.append("project", file);

    try {

      if (onScanStart) {
        onScanStart();
      }

      const response = await api.post(
        "/api/upload",
        formData
      );

      console.log(response.data);

      if (onScanComplete) {
        onScanComplete(response.data);
      }

    } catch (error) {
      console.error(error);
      alert("Upload failed");
    }
  };
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 blur-[150px] rounded-full" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full" />

      {/* Navbar */}
      <nav
        className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-black/20
        border-b
        border-white/5
        px-10
        py-6
        flex
        justify-between
        items-center
        "
      >
        <h1 className="text-2xl font-bold">
          DeployGuard
        </h1>

        <button
          className="
          border
          border-zinc-700
          px-5
          py-2
          rounded-xl
          hover:bg-zinc-900
          transition
          "
        >
          Documentation
        </button>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 relative z-10">

{/* Badge */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  className="
  mb-6
  px-4
  py-2
  rounded-full
  border
  border-blue-500/30
  bg-blue-500/10
  text-blue-400
  text-sm
  font-medium
  "
>
  DEVOPS TOOLING
</motion.div>

{/* Title */}
<motion.h1
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  className="
  text-7xl
  md:text-8xl
  font-bold
  text-center
  bg-gradient-to-r
  from-white
  via-blue-300
  to-purple-400
  bg-clip-text
  text-transparent
  "
>
  DeployGuard
</motion.h1>

{/* Subtitle */}
<motion.p
  initial={{
    opacity: 0,
    y: 20,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    delay: 0.2,
  }}
  className="
  text-zinc-400
  text-xl
  text-center
  max-w-3xl
  mt-6
  "
>
  Analyze your application's production readiness before deployment.
</motion.p>
<motion.div
  whileHover={{
    scale: 1.02,
  }}
  onClick={() => fileInputRef.current.click()}
  className="
  mt-12
  w-full
  max-w-3xl
  border-2
  border-dashed
  border-zinc-700
  rounded-3xl
  p-12
  text-center
  bg-white/5
  backdrop-blur-md
  cursor-pointer
  hover:border-blue-500
  hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]
  transition-all
  duration-300
  "
>

  <input
    ref={fileInputRef}
    type="file"
    accept=".zip"
    className="hidden"
    onChange={handleUpload}
  />

  <div className="text-6xl mb-4">
    📦
  </div>

  <h3 className="text-2xl font-semibold mb-3">
    Upload Repository ZIP
  </h3>

  <p className="text-zinc-400">
    Click to upload your repository and analyze deployment readiness
  </p>

</motion.div>

</section>

      

      {/* Example Scan */}
      <section className="max-w-4xl mx-auto px-8 py-20 relative z-10">

        <h2 className="text-center text-4xl font-bold mb-10">
          Example Scan
        </h2>

        <div
          className="
          bg-white/5
          border
          border-white/10
          rounded-3xl
          p-8
          space-y-5
          "
        >
          <div>✅ Docker Configuration</div>
          <div>✅ README Validation</div>
          <div>✅ Security Analysis</div>
          <div>✅ Environment Variables</div>
          <div>🔄 CI/CD Validation</div>
        </div>

      </section>

      {/* Feature Cards */}
      <section className="max-w-6xl mx-auto px-8 py-20 relative z-10">

        <div className="grid md:grid-cols-3 gap-6">

          <FeatureCard
            title="Deployment Checks"
            description="Analyze Docker, environment variables, health checks and deployment configuration."
          />

          <FeatureCard
            title="Security Analysis"
            description="Detect missing security practices and deployment risks."
          />

          <FeatureCard
            title="Readiness Scoring"
            description="Generate a deployment readiness score with actionable recommendations."
          />

        </div>

      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-8 py-20 relative z-10">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <StatCard value="25+" label="Checks" />
          <StatCard value="5" label="Categories" />
          <StatCard value="100" label="Point Assessment" />
          <StatCard value="<10s" label="Analysis Time" />

        </div>

      </section>

      {/* What We Analyze */}
      <section className="max-w-5xl mx-auto px-8 py-20 relative z-10">

        <h2 className="text-5xl font-bold text-center mb-14">
          What DeployGuard Analyzes
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {[
            "Docker Readiness",
            "Deployment Configuration",
            "Security Validation",
            "CI/CD Workflows",
            "Documentation Quality",
            "Environment Variables",
            "Health Checks",
            "Production Scripts",
          ].map((item) => (
            <div
              key={item}
              className="
              bg-white/5
              border
              border-white/10
              rounded-2xl
              p-5
              hover:border-blue-500/40
              hover:translate-x-1
              transition-all
              duration-300
              "
            >
              ✅ {item}
            </div>
          ))}

        </div>

      </section>

      {/* Example Analysis */}
      <section className="max-w-6xl mx-auto px-8 py-24 relative z-10">

        <h2 className="text-5xl font-bold text-center mb-14">
          Example Analysis
        </h2>

        <div
          className="
          bg-white/5
          backdrop-blur-xl
          border
          border-white/10
          rounded-3xl
          p-10
          shadow-2xl
          "
        >

          <div className="grid md:grid-cols-3 gap-10">

            {/* Score */}
            <div>

              <p className="text-zinc-400 mb-6">
                Readiness Score
              </p>

              <div
                className="
                w-40
                h-40
                rounded-full
                border-[12px]
                border-green-500
                flex
                items-center
                justify-center
                text-5xl
                font-bold
                "
              >
                84
              </div>

              <p className="text-green-400 mt-6 text-lg">
                Deployment Ready
              </p>

            </div>

            {/* Missing Files */}
            <div>

              <h3 className="font-semibold text-xl mb-6">
                Missing Files
              </h3>

              <div className="space-y-4">

                <div>❌ Dockerfile</div>

                <div>❌ deploy.yml</div>

              </div>

            </div>

            {/* Recommendations */}
            <div>

              <h3 className="font-semibold text-xl mb-6">
                Recommendations
              </h3>

              <div className="space-y-4">

                <div>⚠ Add health endpoint</div>

                <div>⚠ Configure GitHub Actions</div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer
        className="
        text-center
        py-16
        text-zinc-500
        border-t
        border-white/5
        mt-24
        "
      >
        <p>DeployGuard © 2026</p>

        <p className="mt-2">
          Built by Aditya Desai
        </p>
      </footer>

    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div
      className="
      bg-white/5
      backdrop-blur-md
      border
      border-white/10
      rounded-3xl
      p-8
      hover:border-blue-500/40
      hover:scale-[1.02]
      transition-all
      duration-300
      "
    >
      <h3 className="text-xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div
      className="
      text-center
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-8
      hover:border-blue-500/40
      hover:scale-[1.03]
      transition-all
      duration-300
      "
    >
      <div className="text-5xl font-bold">
        {value}
      </div>

      <div className="text-zinc-400 mt-3">
        {label}
      </div>
    </div>
  );
}



export default LandingPage;


