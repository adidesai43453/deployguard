export default function ResultsPage({ report }) {

  if (!report) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          No Report Available
        </h1>
      </div>
    );
  }

  const scoreColor =
    report.score >= 80
      ? "border-green-500"
      : report.score >= 60
      ? "border-yellow-500"
      : "border-red-500";

  const statusColor =
    report.score >= 80
      ? "text-green-400"
      : report.score >= 60
      ? "text-yellow-400"
      : "text-red-400";

  const grade = 
    report.score >= 90
        ? "A"
        : report.score >= 80
        ? "B"
        : report.score >= 70
        ? "C"
        : report.score >= 60
        ? "D"
        : "F";

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-10">

      <h1 className="text-6xl font-bold text-center mb-16">
        Analysis Results
      </h1>

      <div
        className="
        max-w-6xl
        mx-auto
        bg-white/5
        rounded-3xl
        border
        border-white/10
        p-10
        backdrop-blur-xl
        "
      >

        <div className="grid md:grid-cols-3 gap-10">

         {/* Score */}
<div>

<h3 className="text-zinc-400 mb-6">
  Deployment Readiness
</h3>

<div
  className={`
    w-40
    h-40
    rounded-full
    border-[12px]
    ${scoreColor}
    flex
    items-center
    justify-center
    text-5xl
    font-bold
  `}
>
  {report.score}
</div>

<div className={`${statusColor} mt-5 text-lg font-medium`}>
  {report.status}
</div>

<div
  className="
  mt-6
  bg-white/5
  border
  border-white/10
  rounded-xl
  px-5
  py-3
  inline-block
  "
>
  Grade: <span className="font-bold">{grade}</span>
</div>

</div>

          {/* Missing Files */}
          <div>

            <h3 className="font-semibold text-xl mb-6">
              Missing Files
            </h3>

            {report.missingFiles?.length > 0 ? (
              report.missingFiles.map((file) => (
                <div key={file} className="mb-3">
                  ❌ {file}
                </div>
              ))
            ) : (
              <div className="text-green-400">
                ✅ No Missing Files
              </div>
            )}

          </div>

          {/* Recommendations */}
          <div>

            <h3 className="font-semibold text-xl mb-6">
              Recommendations
            </h3>

            {report.recommendations?.length > 0 ? (
              report.recommendations.map((item) => (
                <div key={item} className="mb-3">
                  ⚠ {item}
                </div>
              ))
            ) : (
              <div className="text-green-400">
                ✅ No Recommendations
              </div>
            )}

          </div>

        </div>

      </div>

      <div
        className="
        max-w-6xl
        mx-auto
        mt-10
        bg-white/5
        border
        border-white/10
        rounded-3xl
        p-8
        "
      >

        <h2 className="text-2xl font-bold mb-4">
          Deployment Summary
        </h2>

        <p className="text-zinc-300">
          DeployGuard analyzed your repository and calculated a deployment
          readiness score of
          <span className="font-bold text-white">
            {" "}{report.score}/100
          </span>.
        </p>

        <p className="text-zinc-400 mt-3">
          Status: {report.status}
        </p>

      </div>

      <div className="text-center mt-10">

  <button
    onClick={() => {

      const blob = new Blob(
        [
          JSON.stringify(
            report,
            null,
            2
          )
        ],
        {
          type: "application/json"
        }
      );

      const url =
        URL.createObjectURL(blob);

      const a =
        document.createElement("a");

      a.href = url;

      a.download =
        "deployguard-report.json";

      a.click();
    }}
    className="
    px-6
    py-3
    rounded-xl
    bg-blue-600
    hover:bg-blue-700
    transition
    "
  >
    Export Report
  </button>

</div>

    </div>
  );
}