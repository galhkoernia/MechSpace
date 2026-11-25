# MechSpace

**Digital Learning Space for Mechanical Engineering Education**

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lucide](https://img.shields.io/badge/Lucide-Icons-F56565?logo=lucide&logoColor=white)](https://lucide.dev/)
[![Status](https://img.shields.io/badge/Status-Active_Development-blue)]()

> A focused web-based learning space for organizing and accessing Mechanical Engineering learning materials.

---

## Overview

**MechSpace** provides a simple and structured environment for students to discover, access, and read learning materials through a focused web interface.

Administrators can review the local mock catalog and explore the material-entry interface.

The platform is intentionally designed to keep the learning experience **simple, focused, and content-oriented**.

---

## Core Features

### Student

- Dashboard
- Browse materials
- Search materials
- Filter by category
- Material details
- Material reading
- Bookmarks

### Admin

- Admin dashboard
- Review the local material catalog
- Mock material-entry form

---

## Initial Categories

- Teknik Pemesinan
- Gambar Teknik
- Material Teknik
- CAD/CAM
- K3

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js** | Web application framework |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | UI styling |
| **Lucide React** | Interface icons |

---

## Project Structure

```text
MechSpace/
├── docs/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   └── material/
│
├── public/
│   └── material/
│
├── src/
│   ├── app/
│   ├── components/
│   ├── data/
│   ├── types/
│   └── lib/
│
└── package.json
```

---

## Requirements

- Node.js
- npm

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

### 3. Open the application

Open the local development URL shown by Next.js.

---

## Learning Materials

Source PDF materials are organized in:

```text
docs/material/
```

Next.js only serves browser-accessible static files from `public/`.

Therefore, copy each PDF that should be opened by the application to:

```text
public/material/
```

Then reference the file using:

```text
/material/<filename>.pdf
```

in:

```text
src/data/mock/materials.ts
```

The original documents remain organized in:

```text
docs/material/
```

while the files in:

```text
public/material/
```

serve as their runtime copies for the application.

---

## Development Principles

MechSpace follows these principles:

- Keep the product focused on learning-material access and management.
- Prefer simple solutions over unnecessary infrastructure.
- Keep UI, application logic, and data responsibilities separated.
- Use TypeScript strictly.
- Reuse components where appropriate.
- Validate external input at the server boundary.
- Keep administrative functionality separate from student functionality.
- Keep material metadata in the local mock catalog until backend work is explicitly in scope.
- Keep the interface content-focused and accessible.

---

## Project Scope

MechSpace is a focused **Digital Learning Space**.

The product does not include:

- social networking
- real-time chat
- discussion forums
- video conferencing
- assignment management
- complex examination systems
- gamification
- AI tutoring
- recommendation engines
- payment systems
- complex learning analytics
- unrelated enterprise functionality

The product scope is intentionally limited to keep MechSpace focused on its primary purpose: **accessing and managing learning materials**.

---

## Project Documentation

The project direction is defined by the following documents:

- [`docs/PRD.md`](docs/PRD.md) — Product requirements and scope
- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) — Technical architecture
- [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md) — Visual and interface guidelines

These documents serve as the product, architecture, and design contracts for MechSpace.

---

## Developer

<p align="center">
  <strong>Galuh Kurnia Pratama</strong>
  <br />
  <sub>Physics Student · Instrumentation · Software Engineering Entusiast</sub>
</p>
