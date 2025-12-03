# 🎭 How to Run Tests in Jenkins - Simple Guide

## 📍 Access Jenkins
Open browser: `http://localhost:8080`
Login: `admin` / `admin123`

## ▶️ Run Tests

1. Click on **"Playwright-Automation-Tests"**
2. Click **"Build with Parameters"** (left sidebar)
3. Select your options:
   - **TEST_SUITE:** Which tests? (Smoke, Auth, Products, etc.)
   - **BROWSER:** Which browser? (Chrome, Firefox, Safari)
   - **HEADLESS:** Keep checked for faster runs
4. Click big green **"Build"** button
5. Wait for tests to run (5-15 minutes)

## 📊 View Results

After build finishes:
- Click on build number (e.g., `#5`)
- Click **"Playwright Test Report"**
- See beautiful test results with:
  - ✅ Passed tests (green)
  - ❌ Failed tests (red)
  - Screenshots of failures
  - Videos of test runs

## 📧 Check Teams

Results also sent automatically to Microsoft Teams channel!

## 🆘 Need Help?
Contact: QA Team Lead
