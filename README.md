# Open Door Hospital Website

A React-based website for **Open Door Hospital**, providing compassionate, quality healthcare information and services online.

## Table of Contents

- [Open Door Hospital Website](#open-door-hospital-website)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Tech Stack](#tech-stack)
  - [Getting Started](#getting-started)
  - [Project Structure](#project-structure)
  - [Styling](#styling)
  - [Contributing](#contributing)

---

## Overview

This repository contains the source code for the **Open Door Hospital** website. It aims to offer a clean, user-friendly interface with information about services, staff, and patient resources.

**Live Demo:** *coming soon!*

---

## Features

- **Responsive Design**: Mobile-first layout with flexible components.  
- **Hero Section**: Showcases key messaging and action buttons.  
- **Services Page**: Lists available hospital services and details.  
- **Appointments**: Simple appointment request form.  
- **Contact & Location**: Map integration and contact information.

---

## Tech Stack

- **React** (UI library)  
- **React Router** (navigation)  
- **Tailwind** (styling)  
- **Vite** (bundling and dev server)  
- **Axios** (HTTP requests, if applicable)

---

## Getting Started

1. **Clone the repository**  
   ```bash
   git clone https://github.com/alexindevs/open-door-hospital.git
   cd open-door-hospital
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run the development server**  
   ```bash
   npm run dev
   ```
   - The app should now be running at `http://localhost:8080`.

4. **Build for production**  
   ```bash
   npm run build
   ```
   - Creates an optimized production build in the `build` folder.

---

## Project Structure

```
open-door-hospital/
├── public/
│   ├── assets/
│   │   └── ...
│   └── index.html
├── src/
│   ├── assets/
│   │   └── ...
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── NavBar.jsx
│   │   ├── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

- **public/**: Static files served directly (e.g., images, `index.html`).  
- **src/assets/**: Images, icons, or other media handled by the bundler.  
- **src/components/**: Reusable UI components.  
- **src/pages/**: Top-level pages or views.  
- **App.jsx**: Main app component that sets up routes and overall layout.  
- **index.js**: Entry point that renders the React app.

---

## Styling

- **Color Palette**:  
  - **Gray (#333 / #f0f0f0)**: Backgrounds and neutral sections.  
  - **Red (#FF0000 or similar)**: Primary call-to-action button.  
  - **Blue (#0056b3 or similar)**: Secondary accent for buttons or links.  
  - **Light/Neutral Tones**: Used in hero images or background sections to emphasize cleanliness and trust.

- **Global Styles**: Found in `src/index.css` or `src/styles/` (depending on your setup).  
- **Component-Level Styles**: Inline or modular CSS for each component.

---

## Contributing

1. **Fork** the repository.  
2. **Create** a feature branch: `git checkout -b feature/new-service-page`.  
3. **Commit** changes: `git commit -m 'Add new service page'`.  
4. **Push** to the branch: `git push origin feature/new-service-page`.  
5. Open a **Pull Request** describing your changes.
