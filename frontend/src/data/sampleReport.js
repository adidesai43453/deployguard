export const sampleReport = {
    score: 84,
  
    status: "Deployment Ready",
  
    categories: {
      docker: 15,
      security: 18,
      cicd: 12,
      deployment: 24,
      documentation: 15,
    },
  
    missingFiles: [
      "Dockerfile",
      "deploy.yml",
    ],
  
    recommendations: [
      "Add health endpoint",
      "Configure GitHub Actions",
    ],
  };
  