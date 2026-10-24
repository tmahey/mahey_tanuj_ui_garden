# Assignment 12: Web Component Library (`mahey_tanuj_ui_garden`)

**Course:** WEBD-3012 — Business Systems Build and Testing  
**Student:** Tanuj Mahey  
**Container Name:** `mahey_tanuj_coding_assignment12`  
**Working Directory:** `/mahey_tanuj_ui_garden`  
**Production URL:** `http://localhost:8083` (`http://127.0.0.1:8083`)

## Overview

This project is a responsive UI Component Library built with **React**, **TypeScript**, **Storybook**, and **Styled-Components**, packaged and deployed as a production web application inside a **Docker** container running on port `8083`. Every component supports both default and disabled visual states, exposes interactive Storybook controls, and includes automated Jest/React Testing Library unit tests.



## 1. Project Setup & Installation Commands

### Option A: Clone from GitHub (Existing Project)

```bash
# Clone the repository
git clone https://github.com/tmahey/mahey_tanuj_ui_garden.git

# Navigate into the project directory
cd mahey_tanuj_ui_garden

# Install all project dependencies
npm install
```

### Option B: Initial Project Creation Commands (From Scratch)

```bash
# 1. Create the React + TypeScript application
npx create-react-app mahey_tanuj_ui_garden --template typescript
cd mahey_tanuj_ui_garden

# 2. Install Styled-Components and testing utilities
npm install styled-components
npm install --save-dev @types/styled-components jest-styled-components @storybook/react

# 3. Initialize Storybook
npx storybook@latest init

```

## 2. Running the Application Locally (Development Mode)

To run the Create React App showcase locally in development mode:

```bash
npm start
```

- Opens at **`http://localhost:3000`** (or **`http://127.0.0.1:3000`**).
- Displays all 13 UI components in both default and disabled states.

## 3. Running Storybook

To launch Storybook and interact with individual component stories and controls:

```bash
npm run storybook
```

- Opens at **`http://localhost:6006`**.
- Use the **Controls** panel in Storybook to dynamically modify component text/content, pick custom background colors (`backgroundColor`), and toggle between **Default** and **Disabled** states.
- When `disabled` is set to `true`, components visually grey out (`#cccccc`), lower opacity, and display a `not-allowed` cursor.

## 4. Running Component Unit Tests

Every component includes at least two automated tests verifying:
1. The component renders and is visible (`toBeVisible()`).
2. The background color changes to grey (`#cccccc`) when the component is placed in the `disabled` state (`toHaveStyleRule('background-color', '#cccccc')`).

Run all test suites in non-interactive mode:

```bash
npm test -- --watchAll=false
```

To explicitly target all `.tests.tsx` component test files:

```bash
npm test -- --watchAll=false --testMatch="**/src/**/*.tests.tsx"
```

## 5. Docker Build & Deployment (`localhost:8083`)

The `Dockerfile` uses a multi-stage build (Node 18 Alpine to compile the production React build inside `/mahey_tanuj_ui_garden`, followed by Nginx Alpine to serve the static bundle).

### Step 1: Build the Production Docker Image

Run the following command from the project root directory (`mahey_tanuj_ui_garden`):

```bash
docker build -t mahey_tanuj_coding_assignment12 .
```

### Step 2: Run the Docker Container on Port `8083`

Create and start the container named `mahey_tanuj_coding_assignment12`, mapping host port `8083` to container port `80`:

```bash
docker run -d -p 8083:80 --name mahey_tanuj_coding_assignment12 mahey_tanuj_coding_assignment12
```

### Step 3: Verify the Container and Web Application

Check that the container is running:

```bash
docker ps
```

Open your browser and visit either address to view the deployed production web application:

- **`http://localhost:8083`**
- **`http://127.0.0.1:8083`**

or

```bash
explorer.exe http://localhost:8083
PORT=8083 npm start
```

### Step 4: Helpful Docker Management Commands

```bash
# View container logs
docker logs mahey_tanuj_coding_assignment12

# Verify working directory inside the running container (/mahey_tanuj_ui_garden)
docker exec -it mahey_tanuj_coding_assignment12 pwd

# Stop the running container
docker stop mahey_tanuj_coding_assignment12

# Start the stopped container again
docker start mahey_tanuj_coding_assignment12

# Remove the container (must be stopped first)
docker rm mahey_tanuj_coding_assignment12
```

## 6. Git & GitHub Commands

Use these commands in your terminal inside `~/mahey_tanuj_ui_garden` to commit and push all project files to GitHub:

```bash
# 1. Remove any leftover Windows Zone.Identifier files before staging
find . -name "*:Zone.Identifier" -delete

# 2. Initialize Git repository (if not already initialized)
git init

# 3. Check current file status
git status

# 4. Stage all project files
git add .

# 5. Commit all changes
git commit -m "Complete Assignment 12: React and Storybook Web Component Library with Docker"

# 6. Set main as the default branch
git branch -M main

# 7. Link to your remote GitHub repository (replace with your actual GitHub repo URL)
git remote add origin https://github.com/tmahey/mahey_tanuj_ui_garden.git

#    (If 'origin' already exists and you need to update the URL, run this instead:)
#    git remote set-url origin https://github.com/<YOUR_GITHUB_USERNAME>/mahey_tanuj_ui_garden.git

# 8. Push code to GitHub
git push -u origin main
```