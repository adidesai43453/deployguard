import { motion } from "framer-motion";

export default function ScanningPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">

      <div className="max-w-xl w-full">

        <h1 className="text-5xl font-bold text-center mb-12">
          Analyzing Project...
        </h1>

        <div className="space-y-5">

          <ScanItem text="Docker Configuration" />
          <ScanItem text="README Validation" />
          <ScanItem text="Security Analysis" />
          <ScanItem text="Environment Variables" />
          <ScanItem text="CI/CD Validation" />

        </div>

      </div>

    </div>
  );
}

function ScanItem({ text }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -20,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      className="
      bg-white/5
      border
      border-white/10
      rounded-2xl
      p-5
      "
    >
      ✅ {text}
    </motion.div>
  );
}