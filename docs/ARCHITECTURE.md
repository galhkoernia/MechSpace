# MechSpace — Architecture

## 1. Architectural Purpose

MechSpace uses a simple, modular web architecture designed around the product's primary responsibility: presenting and managing learning materials.

The architecture prioritizes:

- clear separation of concerns;
- maintainability;
- type safety;
- minimal unnecessary dependencies;
- predictable data flow;
- a frontend structure that can evolve without architectural rewrites.

## 2. Technology

### Application

- Next.js
- TypeScript
- App Router

### UI

- Tailwind CSS
- shadcn/ui where appropriate
- Lucide React for icons

### Data Platform

The target data platform is:

- Supabase Auth
- Supabase PostgreSQL
- Supabase Storage

### Document Reading

- PDF.js / react-pdf for browser-based PDF reading.

## 3. High-Level Architecture

Target architecture:

```text
┌──────────────────────────────┐
│          Student / Admin     │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│         Next.js App          │
│                              │
│  Pages / Layouts / Components│
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Application / Server Logic   │
└──────────────┬───────────────┘
               │
       ┌───────┴────────┐
       ▼                ▼
┌──────────────┐  ┌──────────────┐
│ PostgreSQL   │  │ File Storage │
│  Metadata    │  │ PDF / DOCX   │
└──────────────┘  └──────────────┘
```

Authentication is provided by Supabase Auth.

## 4. Frontend Architecture

The frontend follows a separation between:

```text
Pages / Layouts
      ↓
Feature Components
      ↓
Shared UI Components
      ↓
Application / Data Interfaces
```

The UI layer must not become the location for unrelated business logic.

## 5. Recommended Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── materials/
│   │   ├── page.tsx
│   │   └── [id]/
│   │       └── page.tsx
│   ├── bookmarks/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   └── admin/
│       ├── page.tsx
│       └── materials/
│           ├── page.tsx
│           └── new/
│               └── page.tsx
│
├── components/
│   ├── ui/
│   ├── layout/
│   ├── dashboard/
│   ├── materials/
│   ├── reader/
│   └── admin/
│
├── data/
│   └── mock/
│
├── types/
│   └── index.ts
│
└── lib/
```

The structure may be refined when justified by actual project needs, but responsibilities must remain clearly separated.

## 6. Data Model Boundary

Learning-material metadata belongs in PostgreSQL.

Files belong in object storage.

```text
PostgreSQL
├── title
├── description
├── category
├── material type
├── file metadata
└── ownership / timestamps

Storage
└── actual document files
```

Documents must not be stored as large database records unless there is a specific architectural requirement.

## 7. Data Flow

Student material access:

```text
Student
  ↓
Next.js page
  ↓
Material data
  ↓
Material detail
  ↓
Document reader
```

Admin material management:

```text
Admin
  ↓
Admin UI
  ↓
Validation / application logic
  ↓
Storage + PostgreSQL
```

## 8. Rendering Principles

Next.js Server Components are preferred by default.

Client Components are reserved for interactions that require browser-side state or APIs, such as:

- interactive search;
- bookmark interaction;
- document reader controls;
- upload interaction;
- dialogs and interactive controls.

Do not make the entire application client-rendered without a concrete reason.

## 9. Type Safety

TypeScript strictness is required.

Shared domain types should be defined centrally.

Avoid `any` unless there is a documented technical reason.

The material domain should have an explicit type representation rather than repeated anonymous object shapes.

## 10. Validation and Security

External input must be validated at the server boundary.

File management must validate:

- allowed file type;
- file size;
- metadata;
- authorization.

Authentication and authorization are separate concerns.

```text
Authentication
    ↓
Who is the user?

Authorization
    ↓
What is the user allowed to do?
```

Student users must not be able to perform administrative operations.

## 11. Dependency Policy

Dependencies must have a clear product or architectural purpose.

Do not introduce:

- state-management frameworks;
- API frameworks;
- microservices;
- message queues;
- caching systems;
- search infrastructure;
- additional backend runtimes;

unless the product or architectural requirements explicitly justify them.

## 12. Architectural Boundaries

The architecture intentionally does not include:

- FastAPI;
- Express;
- microservices;
- GraphQL;
- WebSockets;
- Redis;
- Kafka;
- Kubernetes;
- unnecessary state-management infrastructure.

MechSpace is intentionally a focused application.

## 13. Source of Truth

The following documents define the project:

```text
PRD.md
ARCHITECTURE.md
DESIGN_SYSTEM.md
README.md
```

Implementation must remain consistent with these documents.

When a proposed feature conflicts with the PRD or architecture, the conflict must be resolved before implementation rather than silently expanding scope.
