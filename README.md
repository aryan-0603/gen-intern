# GenIntern - Local Development Setup

This guide will walk you through setting up and running the GenIntern website on your local machine. The project is built with React, TypeScript, and Vite, and styled with Tailwind CSS.

## Requirements

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.x or higher. You can download it from [nodejs.org](https://nodejs.org/).
- **npm**: This is the Node Package Manager and comes bundled with Node.js.

## Step-by-Step Instructions

### 1. Place Project Files

Ensure all the project files (including `package.json`, `vite.config.ts`, etc.) are in a single project folder on your computer.

### 2. Install Dependencies

Open your terminal or command prompt, navigate to your project folder, and run the following command to install all the necessary packages defined in `package.json`:

```bash
npm install
```

This will create a `node_modules` folder in your project directory.

### 3. Run the Development Server

Once the installation is complete, start the local development server by running:

```bash
npm run dev
```

The terminal will display a local URL, typically `http://localhost:5173/`.

### 4. View the Website

Open your web browser and navigate to the URL provided in the terminal. The GenIntern website should now be running locally on your machine. Any changes you make to the source code will automatically update in the browser.

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Bundles the application for production.
- `npm run preview`: Serves the production build locally to preview it.