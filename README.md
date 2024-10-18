
# EFO Terms Viewer

A web application that allows users to view, search, and sort Experimental Factor Ontology (EFO) terms fetched from an API. This project uses **React**, **Redux**, **Ant Design**, and **TypeScript**.

## Features

- **Search**: Search EFO terms by label, description, short form, and synonyms.
- **Sorting**: Sort terms by label or short form in ascending or descending order.
- **Pagination**: Paginate through the EFO terms and adjust the page size.
- **Responsive Design**: A modern responsive UI using Ant Design.
- **Redux**: Global state management with Redux.

## Project Structure

```
src/
├── components/
│   └── EfoTable.tsx        # The main component displaying the table
├── redux/
│   ├── efoSlice.ts         # Redux slice for EFO terms state
│   └── store.ts            # Redux store setup
├── App.tsx                 # Main application component
├── index.tsx               # Entry point for React DOM rendering
└── styles/
    └── App.css             # Main CSS for the app
```

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (version 14.x or higher)
- **npm** or **yarn**

Check if they are installed:

```bash
node -v
npm -v
```

If not installed, download Node.js from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/nadywgd/efo_frontend.git
   cd efo_frontend
   ```

2. **Install Dependencies**:

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

## Running the Application

1. **Start the Development Server**:

   ```bash
   npm start
   ```

   Or using yarn:

   ```bash
   yarn start
   ```

This starts the app on `http://localhost:3000/` in your browser. The app automatically reloads when you make changes to the code.

## Usage

### Search

Use the search bar at the top to search for EFO terms by label, description, short form, or synonyms. Results update dynamically based on your input.

### Sorting

You can click on the table headers "Label" and "Short Form" to sort the terms. Sorting will apply in ascending or descending order.

### Pagination

Navigate through the pages of terms using the pagination controls at the bottom of the table. You can adjust the page size using the dropdown.

## Available Scripts

### `npm start` / `yarn start`

Runs the app in development mode.

### `npm run build` / `yarn build`

Builds the app for production to the `build` folder.

### `npm test` / `yarn test`

Runs the test suite.
