# 🎭 Playwright Automation Framework

Simple and clean test automation framework.

## 📁 Project Structure
```
playwright-automation-framework/
├── tests/
│   ├── auth/              # Login, signup tests
│   ├── products/          # Product browsing, search tests
│   ├── checkout/          # Cart and checkout tests
│   └── fixtures/          # Shared test setup
├── pages/                 # Page Object Models
├── utils/                 # Helpers and constants
├── docker/                # Docker configuration
└── jenkins/               # Jenkins pipeline
```

## 🚀 Quick Start
```bash
# Install
npm install

# Run all tests
npm test

# Run smoke tests only
npm run test:smoke

# Run with UI
npm run test:ui

# View report
npm run report
```

## 🏷️ Test Tags

- `@smoke` - Quick critical tests (5-10 mins)
- `@critical` - Must-pass tests
- Use tags to run specific tests: `npm run test:smoke`

## 📝 Running Tests
```bash
# By suite
npm run test:auth         # All login/signup tests
npm run test:products     # All product tests
npm run test:checkout     # All checkout tests

# By browser
npm run test:chromium
npm run test:firefox
npm run test:webkit

# By tag
npm run test:smoke        # Critical smoke tests
npm run test:critical     # All critical tests
```

## 🐳 Docker
```bash
cd docker
docker-compose up
```

## Useful Jenkins Commands
```bash
# Start Jenkins
brew services start jenkins-lts

# Stop Jenkins
brew services stop jenkins-lts

# Restart Jenkins
brew services restart jenkins-lts

# Check Jenkins status
brew services list | grep jenkins

# View Jenkins logs
tail -f /opt/homebrew/var/log/jenkins-lts/jenkins-lts.log

# Access Jenkins home directory
cd ~/.jenkins
```

## 🔧 Quick Fix:
The report page is blank because of Content Security Policy (CSP) restrictions in Jenkins.
**Option 1:** Relax Jenkins CSP (Easiest)

1. **Go to:** Manage Jenkins → Script Console

2. **Paste this:**
```bash
System.setProperty("hudson.model.DirectoryBrowserSupport.CSP", "")
```

3. Click Run
4. Refresh your report page

## 👥 For Manual Testers

1. Open Terminal
2. Run: `npm run test:smoke`
3. View report: `npm run report`

That's it!
