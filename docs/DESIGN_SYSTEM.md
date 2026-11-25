# MechSpace — Design System

## 1. Design Direction

MechSpace uses a modern educational interface inspired by clean productivity dashboards.

The visual character is:

- clean;
- modern;
- professional;
- educational;
- spacious;
- calm;
- minimal;
- content-focused.

The interface must make learning materials the visual priority.

## 2. Design Reference

The supplied dashboard reference establishes the visual direction:

- persistent left navigation on desktop;
- generous whitespace;
- rounded cards;
- soft visual hierarchy;
- light surfaces;
- blue / indigo / periwinkle accent language;
- card-based information presentation;
- compact but clear navigation;
- restrained use of decoration.

The reference is a visual direction only. MechSpace must use its own identity, terminology, content, and information architecture.

## 3. Layout

### Desktop

```text
┌──────────────┬────────────────────────────────────┐
│              │                                    │
│   Sidebar    │          Main Content              │
│              │                                    │
│              │                                    │
└──────────────┴────────────────────────────────────┘
```

The sidebar provides primary navigation.

The main content area provides page-specific content.

### Mobile

The desktop sidebar becomes a mobile navigation pattern such as a drawer or compact navigation.

Content must remain readable without horizontal scrolling.

## 4. Navigation

Primary navigation:

```text
Dashboard

Materials
├── All Materials
├── Teknik Pemesinan
├── Gambar Teknik
├── Material Teknik
├── CAD/CAM
└── K3

Bookmarks

About
```

Admin navigation is separated from student navigation.

Active navigation items must be visually distinguishable without relying only on color.

## 5. Color Direction

Use a light interface.

Base palette:

```text
Background
Light neutral / off-white

Surface
White

Primary
Blue / indigo / periwinkle family

Primary foreground
White

Text
Dark neutral

Muted text
Cool gray / neutral gray

Border
Light neutral gray

Success
Reserved green

Warning
Reserved amber

Error
Reserved red
```

The exact palette should be represented as design tokens rather than scattered raw color values.

Accent colors must remain restrained.

## 6. Typography

Typography should be:

- highly readable;
- modern;
- clean;
- consistent.

Hierarchy:

```text
Display / Page title
        ↓
Section heading
        ↓
Card title
        ↓
Body
        ↓
Metadata / helper text
```

Avoid excessive font-size variation.

Use weight and spacing to establish hierarchy before adding decorative elements.

## 7. Spacing

Use a consistent spacing scale.

Prefer Tailwind's spacing system rather than arbitrary values.

The interface should feel spacious without wasting excessive screen area.

Spacing should consistently separate:

- navigation groups;
- page sections;
- card content;
- controls;
- metadata.

## 8. Border Radius

Use rounded surfaces consistently.

Primary UI surfaces should have a soft rounded appearance.

Avoid mixing sharp rectangular cards with highly rounded cards without a deliberate reason.

## 9. Shadows

Shadows are subtle.

Use elevation to distinguish surfaces, not to create heavy visual effects.

Avoid:

- strong drop shadows;
- excessive glow;
- decorative neon effects.

## 10. Cards

Cards are a core MechSpace UI pattern.

Material cards should communicate:

- material identity;
- title;
- category;
- document type;
- short description;
- primary action.

Example:

```text
┌─────────────────────────────────┐
│  📄  PDF                        │
│                                 │
│  Dasar Mesin Bubut              │
│  Teknik Pemesinan               │
│                                 │
│  Modul pembelajaran...          │
│                                 │
│                 Read Material → │
└─────────────────────────────────┘
```

Cards must not become visually overloaded.

## 11. Buttons

Primary actions:

- use the primary accent;
- have clear labels;
- provide visible hover/focus states.

Examples:

```text
Read Material
Continue
Add Material
Upload Material
Save
```

Secondary actions should have lower visual emphasis.

Destructive actions must be visually distinguishable and require appropriate confirmation when irreversible.

## 12. Inputs

Inputs must:

- have visible labels;
- have clear focus states;
- communicate validation errors;
- maintain consistent height and radius;
- remain readable on mobile.

Search is a prominent but non-dominant interaction.

## 13. Badges

Badges communicate metadata such as:

```text
PDF
DOCX
Teknik Pemesinan
Modul
Jobsheet
```

Badges must remain secondary to titles and primary actions.

## 14. Icons

Use Lucide React.

Icons should support meaning rather than act as decoration.

Use consistent icon sizing and stroke weight.

Avoid mixing unrelated icon libraries.

## 15. Dashboard Composition

The student dashboard should prioritize:

```text
Welcome
   ↓
Continue Learning
   ↓
Categories
   ↓
Latest Materials
```

The dashboard should not resemble an analytics-heavy enterprise dashboard.

Do not introduce large KPI collections unless the product requirements explicitly require them.

## 16. Material Reading Experience

Reading is a primary product action.

The reading interface should be visually quiet.

Recommended structure:

```text
← Back

Material title
Metadata
Bookmark

────────────────────────

Document reader

────────────────────────

Reader controls
```

The document should receive the largest visual area.

## 17. Empty States

Empty states should be useful and calm.

Example:

```text
No bookmarked materials yet.

Materials you save will appear here.
```

Avoid overly decorative illustrations unless they support the educational identity.

## 18. Loading and Error States

Loading states should preserve layout stability.

Error states should explain:

- what went wrong;
- what the user can do next.

Avoid exposing technical implementation details to normal users.

## 19. Responsive Behavior

Responsive design is required.

### Desktop

- persistent sidebar;
- multi-column material grids;
- spacious content layout.

### Tablet

- reduced grid columns;
- adjusted content spacing;
- navigation remains accessible.

### Mobile

- drawer/compact navigation;
- single-column material cards;
- readable typography;
- full-width primary controls where appropriate.

## 20. Accessibility

The design must support:

- semantic HTML;
- keyboard navigation;
- visible focus states;
- sufficient color contrast;
- accessible labels;
- meaningful link and button text;
- non-color-only status communication.

## 21. Visual Constraints

Do not use:

- excessive gradients;
- glassmorphism as the primary style;
- neon effects;
- excessive animation;
- dense dashboard widgets;
- decorative elements that compete with learning content.

Animation should be subtle and functional.

## 22. Design Principle

> The interface should make finding and reading learning material feel effortless.

When a visual decision competes with the learning content, prioritize the content.
