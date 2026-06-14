# 🚀 Jenkins + GitHub + Docker Automated CI/CD Pipeline

## 📌 Project Overview

This project demonstrates a complete End-to-End CI/CD pipeline using Jenkins, GitHub, Docker, and Node.js.

Whenever code is pushed to GitHub, Jenkins automatically detects the latest changes, builds a Docker image, removes the old container, and deploys a new container with the updated application.

The goal of this project is to automate the software delivery process and eliminate manual deployment efforts.

---

# 🏗️ Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Poll SCM
    │
    ▼
Checkout Latest Code
    │
    ▼
Docker Build
    │
    ▼
Stop Old Container
    │
    ▼
Remove Old Container
    │
    ▼
Run New Container
    │
    ▼
Application Live
```

---

# 🛠️ Tech Stack

* Jenkins
* Git
* GitHub
* Docker
* Node.js
* Express.js
* CI/CD
* Declarative Pipeline

---

# 📂 Project Structure

```text
notes-app/
│
├── app.js
├── package.json
├── Dockerfile
├── Jenkinsfile
├── .gitignore
└── README.md
```

---

# ⚙️ Prerequisites

Before starting, install:

* Git
* Docker Desktop
* Jenkins
* Node.js
* GitHub Account

Verify installation:

```bash
git --version
docker --version
node --version
java --version
```

---

# 🚀 Step 1: Create Node.js Application

Create project directory:

```bash
mkdir notes-app
cd notes-app
```

Create package.json:

```json
{
  "name": "notes-app",
  "version": "1.0.0",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.21.2"
  }
}
```

Install dependencies:

```bash
npm install
```

Create app.js:

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Version 1 - Jenkins CI/CD Working');
});

app.listen(3000, () => {
    console.log('Server Running on Port 3000');
});
```

Run application:

```bash
node app.js
```

Verify:

```text
http://localhost:3000
```

---

# 🐳 Step 2: Dockerize Application

Create Dockerfile:

```dockerfile
FROM node:20

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm","start"]
```

Build image:

```bash
docker build -t notes-app .
```

Run container:

```bash
docker run -d -p 3000:3000 notes-app
```

Verify:

```bash
docker ps
```

---

# 📦 Step 3: Push Project to GitHub

Initialize repository:

```bash
git init
```

Create .gitignore:

```text
node_modules
```

Commit code:

```bash
git add .
git commit -m "Initial Commit"
```

Connect GitHub repository:

```bash
git remote add origin https://github.com/USERNAME/notes-app.git
git branch -M main
git push -u origin main
```

---

# 🔧 Step 4: Create Jenkins Pipeline

Create Jenkinsfile:

```groovy
pipeline {

    agent any

    stages {

        stage('Clone') {
            steps {
                echo 'Repository Ready'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t notes-app .'
            }
        }

        stage('Run Container') {
            steps {

                bat '''
                docker stop notes-container || exit 0
                docker rm notes-container || exit 0

                docker run -d ^
                --name notes-container ^
                -p 3000:3000 ^
                notes-app
                '''
            }
        }
    }
}
```

---

# 🔥 Step 5: Configure Jenkins Job

Create a new Pipeline Job.

Pipeline Configuration:

```text
Pipeline Script From SCM
```

SCM:

```text
Git
```

Repository URL:

```text
https://github.com/USERNAME/notes-app.git
```

Branch:

```text
*/main
```

Script Path:

```text
Jenkinsfile
```

Save configuration.

---

# 🔄 Step 6: Configure Poll SCM

Open Job Configuration.

Build Triggers:

```text
✓ Poll SCM
```

Schedule:

```text
H/2 * * * *
```

Meaning:

```text
Check GitHub every 2 minutes
```

---

# ▶️ Step 7: Execute Pipeline

Click:

```text
Build Now
```

Pipeline Stages:

```text
Checkout Code
        ↓
Docker Build
        ↓
Container Cleanup
        ↓
Container Deployment
```

Verify container:

```bash
docker ps
```

---

# 🧪 Step 8: Test Automatic Deployment

Modify application:

Before:

```javascript
res.send("Version 1");
```

After:

```javascript
res.send("Version 2");
```

Commit changes:

```bash
git add .
git commit -m "Version 2 Update"
git push
```

Jenkins automatically detects the new commit and starts deployment.

---

# 📋 Jenkins Pipeline Stages

## Checkout

Downloads latest source code.

## Build Docker Image

Creates a new Docker image.

## Container Cleanup

Stops and removes previous containers.

## Deployment

Runs latest application container.

---

# 🎯 Key Features

✅ Automated Build Process

✅ Automated Deployment

✅ GitHub Integration

✅ Jenkins Declarative Pipeline

✅ Dockerized Application

✅ Poll SCM Automation

✅ Continuous Integration

✅ Continuous Deployment

✅ Zero Manual Deployment

---

# 📚 Learning Outcomes

Through this project I learned:

* CI/CD Fundamentals
* Jenkins Pipeline Development
* Docker Containerization
* Git & GitHub Workflow
* Automated Deployments
* Poll SCM Configuration
* DevOps Best Practices

---

# 🚀 Future Enhancements

* Jenkins Shared Libraries
* SonarQube Integration
* Trivy Security Scanning
* Docker Hub Integration
* AWS EC2 Deployment
* Kubernetes Deployment
* Prometheus Monitoring
* Grafana Dashboards

---

# 👨‍💻 Author

Nitesh Vishwakarma

Cloud & DevOps Enthusiast

Building real-world DevOps projects and continuously improving automation skills.

⭐ Star the repository if you found it useful.
