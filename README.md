# Alfredo Salzillo's Resume

This repository contains my personal resume, built with React and [@react-pdf](https://react-pdf.org/). It generates both a web-based preview and a high-quality PDF from a single JSON data source.

## Features

- **PDF Generation**: Renders a professional PDF version of the resume.
- **Web Preview**: Browser-based preview with live-reloading during development.
- **Data-Driven**: Content is managed in `src/data.json`.
- **Styled with Lato**: Uses Lato font for a clean and professional look.

## Technologies

- [React](https://react.org/)
- [@react-pdf/renderer](https://react-pdf.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) (for testing)

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/alfredosalzillo/resume.git
   cd resume
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

- **Start development server**:
  ```bash
  npm start
  ```
  Opens a web preview of the resume.

- **Build web version**:
  ```bash
  npm run build:web
  ```
  Generates a production build of the web preview in the `dist` folder.

- **Generate PDF**:
  ```bash
  npm run build:pdf
  ```
  Creates the resume as a PDF file in the `build` folder.

- **Run tests**:
  ```bash
  npm test
  ```

## Data

The resume content is stored in `src/data.json`. Any updates to this file are automatically reflected in both the web and PDF versions.

## License

This project is private.
