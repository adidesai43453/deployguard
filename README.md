# 🚀 DeployGuard

![DeployGuard Demo](docs/deployguard-demo.gif)

## Deployment Readiness Analyzer for Modern Applications

DeployGuard is a full-stack DevOps platform that analyzes application repositories and evaluates their deployment readiness before production deployment.

The platform scans uploaded repositories, validates deployment configurations, inspects project structure, and generates actionable DevOps recommendations along with an overall readiness score.

### 🌐 Live Demo

**Frontend:**
https://deployguard-git-main-aditya-desai-s-projects.vercel.app

**Backend API:**
https://deployguard-api.onrender.com

---

## ✨ Features

### Repository Analysis

* Upload ZIP repositories directly from the browser
* Automatic repository extraction and scanning
* Project structure validation

### Deployment Readiness Checks

* Dockerfile detection
* GitHub Actions workflow detection
* Package.json validation
* Environment variable template analysis
* Deployment readiness scoring

### Reporting & Insights

* Deployment readiness score
* Deployment grade (A-F)
* Missing file detection
* DevOps recommendations
* JSON report export

### Modern User Experience

* Interactive dashboard
* Real-time scan results
* Responsive UI
* Professional DevOps-focused design

---

## 🏗️ System Architecture

Repository Upload

↓

Repository Extraction

↓

Project Analysis Engine

↓

Scoring Engine

↓

Deployment Readiness Report

↓

Recommendations Dashboard

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Framer Motion
* Axios
* Vite

### Backend

* Node.js
* Express.js
* Multer
* Adm-Zip

### Deployment

* Vercel
* Render
* GitHub

---

## 📊 Current Analysis Capabilities

DeployGuard currently validates:

| Check                           | Status |
| ------------------------------- | ------ |
| README Detection                | ✅      |
| .gitignore Detection            | ✅      |
| Dockerfile Detection            | ✅      |
| GitHub Actions Detection        | ✅      |
| Package.json Validation         | ✅      |
| Environment Variable Validation | ✅      |
| Deployment Scoring              | ✅      |
| Recommendations Engine          | ✅      |

---

## 📋 Example Report

```json
{
  "score": 70,
  "status": "Needs Improvement",
  "missingFiles": [
    "Dockerfile"
  ],
  "recommendations": [
    "Add Dockerfile",
    "No GitHub Actions workflow detected",
    "Environment variable template missing"
  ]
}
```

---

## 🚀 Local Setup

### Clone Repository

```bash
git clone https://github.com/adidesai43453/deployguard.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
node server.js
```

---

## 🎯 Project Highlights

* Built a full-stack deployment readiness analysis platform
* Implemented automated repository scanning and scoring
* Developed a ZIP-based repository ingestion pipeline
* Generated actionable deployment recommendations
* Designed an interactive DevOps reporting dashboard
* Deployed cloud-hosted frontend and backend services

---

## 🔮 Future Enhancements

* Kubernetes Configuration Analysis
* Docker Compose Validation
* Health Endpoint Detection
* Terraform Validation
* Cloud Deployment Recommendations
* AI-Powered Deployment Suggestions

---

## 👨‍💻 Author

**Aditya Desai**

GitHub: https://github.com/adidesai43453

---

### ⭐ If you found this project interesting, consider giving it a star.
