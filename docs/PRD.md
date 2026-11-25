# MechSpace — Product Requirements Document

## 1. Product

**Name:** MechSpace  
**Positioning:** Digital Learning Space for Mechanical Engineering Education.

MechSpace is a web-based learning space that provides students with structured access to Mechanical Engineering learning materials.

The product prioritizes simple discovery, organized presentation, and comfortable reading of learning materials.

## 2. Product Goal

Provide a focused digital space where students can:

- discover learning materials;
- browse materials by category;
- search for materials;
- open and read learning materials;
- save materials for later access.

Administrators can manage the learning-material catalog.

## 3. Target Users

### Student

The primary consumer of the platform.

Student capabilities:

- view dashboard;
- browse materials;
- search materials;
- filter materials by category;
- view material details;
- read materials;
- bookmark materials.

### Admin

The content manager of the platform.

Admin capabilities:

- view material overview;
- add materials;
- edit materials;
- remove materials;
- organize materials by category.

## 4. Core Product Structure

```text
MechSpace
├── Dashboard
├── Materials
│   ├── All Materials
│   ├── Teknik Pemesinan
│   ├── Gambar Teknik
│   ├── Material Teknik
│   ├── CAD/CAM
│   └── K3
├── Bookmarks
├── About
└── Admin
    ├── Dashboard
    └── Materials
        ├── List
        └── Add / Edit
```

## 5. Core Features

### 5.1 Dashboard

The dashboard provides:

- welcome context;
- continuation of learning;
- material categories;
- recently available materials;
- access to material discovery.

### 5.2 Material Discovery

Students can:

- browse all materials;
- search materials;
- filter materials by category;
- identify material type and category from each material card.

### 5.3 Material Detail

A material detail view provides:

- title;
- description;
- category;
- material type;
- reading access;
- bookmark action.

### 5.4 Material Reading

Materials are presented in an in-browser reading experience.

PDF is the primary reading format.

Other supported document formats may be provided for access where appropriate.

### 5.5 Bookmarks

Students can save materials for later access.

### 5.6 Material Management

Admins can manage the material catalog through:

- create;
- read;
- update;
- delete.

Material metadata includes, at minimum:

- title;
- description;
- category;
- material type;
- file information;
- creation/update information.

## 6. Content Categories

The initial category structure is:

- Teknik Pemesinan
- Gambar Teknik
- Material Teknik
- CAD/CAM
- K3

The category structure may be extended when required by the educational content, but categories must remain directly relevant to Mechanical Engineering education.

## 7. Product Principles

1. Learning content is the center of the product.
2. Simplicity is preferred over unnecessary functionality.
3. Material discovery must be fast and clear.
4. Reading must be the primary interaction after material discovery.
5. Administrative functions must remain separate from student-facing functions.
6. The interface must support the educational purpose rather than compete with the content.
7. Features must have a clear relationship to learning-material access or management.

## 8. Scope Boundaries

The following are outside the product scope:

- discussion forums;
- real-time chat;
- social networking;
- video conferencing;
- assignment submission;
- complex examination systems;
- payment systems;
- gamification;
- recommendation engines;
- AI tutoring;
- social feeds;
- marketplace functionality;
- complex learning analytics;
- unrelated enterprise-management features.

These exclusions are intentional. MechSpace is a focused learning-material platform, not a general-purpose LMS or social platform.

## 9. Product Roles and Permissions

```text
Student
├── Read learning materials
├── Search
├── Filter
└── Bookmark

Admin
├── All student material-access capabilities
├── Create material
├── Update material
└── Delete material
```

Administrative capabilities must not be exposed as student capabilities.

## 10. Success Criteria

MechSpace is successful when a student can move through the core flow without unnecessary complexity:

```text
Dashboard
    ↓
Find Material
    ↓
Select Material
    ↓
View Details
    ↓
Read Material
```

An administrator must be able to manage the material catalog through a similarly straightforward flow.

## 11. Product Constraint

The product must remain a **Digital Learning Space for Mechanical Engineering Education**.

New functionality must be evaluated against this constraint before being added.
