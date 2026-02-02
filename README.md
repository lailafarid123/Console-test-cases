# Console Test Cases

This repository contains **Cypress automated tests** for the Consolestaging web application.  
It is designed so that team members can easily view, run, and update test cases.

---

## ✅ Prerequisites

Before running the tests, make sure you have:

1. **Node.js & npm** installed  
   - Check with:
     ```bash
     node -v
     npm -v
     ```
2. **Cypress installed** (will be installed automatically via npm)

---

## 🔹 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/<your-username>/console-test-cases.git
   cd console-test-cases
   ## 🔹 Running Tests

### Option 1: Cypress Test Runner (UI)
```bash

npx cypress open
cypress/
 ├── e2e/        # All Cypress test files
 ├── fixtures/   # Test data (JSON files)
 ├── support/    # commands.js, e2e.js (custom commands & hooks)
cypress.config.js # Cypress configuration file
package.json      # Node dependencies

