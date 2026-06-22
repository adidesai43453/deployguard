const fs = require("fs");
const path = require("path");

function folderExists(projectPath, folderPath) {
  return fs.existsSync(
    path.join(projectPath, folderPath)
  );
}

function analyzeProject(projectPath) {

    console.log("Scanning:", projectPath);

const files = fs.readdirSync(projectPath);

console.log(files);
    
  let score = 100;

  const missingFiles = [];
  const recommendations = [];

  const checks = [
    "README.md",
    ".gitignore",
    "package.json",
    "Dockerfile"
  ];

  checks.forEach(file => {
    if (!fs.existsSync(path.join(projectPath, file))) {
      missingFiles.push(file);
      score -= 10;
    }
  });

  if (!fs.existsSync(path.join(projectPath, "Dockerfile"))) {
    recommendations.push("Add Dockerfile");
  }

  const githubActionsExists =
  folderExists(
    projectPath,
    ".github/workflows"
  );

if (!githubActionsExists) {
  recommendations.push(
    "No GitHub Actions workflow detected"
  );

  score -= 10;
}
const packageJsonPath = path.join(
  projectPath,
  "package.json"
);

if (fs.existsSync(packageJsonPath)) {

  const packageJson = JSON.parse(
    fs.readFileSync(
      packageJsonPath,
      "utf8"
    )
  );

  const scripts =
    packageJson.scripts || {};

  if (!scripts.start) {
    recommendations.push(
      "Missing start script"
    );
    score -= 5;
  }

  if (!scripts.build) {
    recommendations.push(
      "Missing build script"
    );
    score -= 5;
  }

  if (!scripts.test) {
    recommendations.push(
      "Missing test script"
    );
    score -= 5;
  }
}
  return {
    score,
    status: score >= 80
      ? "Deployment Ready"
      : "Needs Improvement",
    missingFiles,
    recommendations
  };
}

module.exports = analyzeProject;