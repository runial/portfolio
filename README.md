# Richard Tang's Portfolio Website

## Project Overview

This repository contains the source code for the personal portfolio website of Richard Tang. The website showcases Richard's skills, projects, and experiences. It is designed to be a modern, responsive, and informative platform for visitors to learn more about his work.

The website includes the following main sections:
*   **Navigation Bar:** Provides easy navigation across the website.
*   **Hero Section:** A prominent introductory section to welcome visitors.
*   **Education:** Details about Richard's academic background.
*   **Interests:** Information about Richard's personal and professional interests.
*   **Projects:** A showcase of projects Richard has worked on.
*   **Contact:** Ways to get in touch with Richard.
*   **Footer:** Contains copyright information and potentially other links.
*   **Licensing Modal:** Provides details about the licensing of the website content.

## Technology Stack

This project is built with a modern web development stack:
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A superset of JavaScript that adds static typing.
*   **Vite:** A fast build tool and development server.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
*   **Node.js:** (v18.x LTS or later recommended). Node.js comes with npm (Node Package Manager). You can download it from [nodejs.org](https://nodejs.org/).
*   **npm** (comes with Node.js) or **yarn** (optional): For managing project dependencies.

## Getting Started

To get a local copy up and running, follow these simple steps:

1.  **Clone the repository:**
    Clone this repository to your local machine.
    ```bash
    git clone <repository_url> 
    ```
    (You can find the repository URL on the main page of the repository on GitHub, GitLab, etc.)

2.  **Navigate to the project directory:**
    ```bash
    cd runial-site 
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    (Or if you prefer yarn: `yarn install`)

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    (Or if you prefer yarn: `yarn dev`)

This will start the Vite development server, typically at `http://localhost:5173` (the port may vary). The development server watches for file changes and supports Hot Module Replacement (HMR) for a smooth development experience. Your browser should open the site automatically, or you can navigate to the provided localhost URL.

## Building for Production

To create a production-ready build of the application, run the following command:

```bash
npm run build
```
(Or if you prefer yarn: `yarn build`)

This command typically bundles the application, optimizes assets, and prepares it for deployment. It will:
*   Compile the TypeScript code to JavaScript.
*   Bundle the React application and its dependencies using Vite.
*   Optimize static assets like images and CSS.
*   Output the final static assets to the `dist/` directory.

The contents of the `dist/` directory are ready to be deployed to a web server or hosting platform.

## Previewing Production Build

After building the project, you can preview the production build locally before deploying it. Run the following command:

```bash
npm run preview
```
(Or if you prefer yarn: `yarn preview`)

This will start a local static web server serving the files from the `dist/` directory. It is useful for checking the production build behaves as expected before deployment. The preview will typically be available at a URL like `http://localhost:4173` (the exact port might vary and will usually be shown in your terminal when you run the command).

## Linting

This project uses ESLint, Prettier, and TypeScript ESLint to enforce code quality, style consistency, and catch potential errors early. To run the linter, use the following command:

```bash
npm run lint
```
(Or if you prefer yarn: `yarn lint`)

This command will analyze your TypeScript and JavaScript code, reporting any violations of the configured linting rules. It helps maintain a clean and readable codebase.
