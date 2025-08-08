# Timeline

A **React-based timeline** component with **compact lanes**, **drag/resize support**, **inline editing**, and a **monthly ruler**.
Items are packed into **space-efficient horizontal lanes**: if `A.end < B.start`, they share the same lane. The packing also includes a **label relaxation** so that long names or short durations don’t cause visual overlaps.

---

## Installation & Running

```bash
npm install
npm start
npm test
```

---

## Video

[Screencast from 2025-08-08 20-11-22.webm](https://github.com/user-attachments/assets/e94db2f7-9401-4fd1-9532-ad8a67e27a9e)

---

## What I Like About This Implementation

- **Clean separation** between utility functions and UI components.
- **Lane packing algorithm** that minimizes vertical space while keeping items readable.
- **Pure CSS styling** for predictable rendering without heavy styling frameworks.
- Modular **`utils/`** functions with isolated unit tests, making them easy to maintain.

---

## What I Would Change If Doing It Again

- Add **accessibility features** like keyboard navigation for moving and resizing items.
- Improve **responsiveness** for smaller screens by adding horizontal scrolling controls.
- Implement **virtualization** for rendering only visible timeline items for performance on large datasets.

---

## How I Made My Design Decisions

- Looked at **Airtable’s timeline view** and **Gantt charts** for inspiration.
- Chose a **lane packing approach** instead of fixed rows to save space and reduce scrolling.
- Used **minimal dependencies** to keep the bundle small and easy to run anywhere.

---

## How I Would Test With More Time

- Add **React Testing Library** integration tests for component rendering and user interactions.
- Test **drag-and-drop and resizing behavior** across different browsers.
- Include **snapshot tests** for visual regression.
- Simulate **edge cases** like overlapping events, zero-length durations, and very large datasets.
