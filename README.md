# Timeline

A **React-based timeline** component with **compact lanes**, **drag/resize support**, **inline editing**, and a **monthly ruler**.
Items are packed into **space-efficient horizontal lanes**: if `A.end < B.start`, they share the same lane.
The packing also includes a **label relaxation** so that long names or short durations don’t cause visual overlaps.

---

## Installation & Running

```bash
npm install
npm start
npm test
```

---

## Running tests

```bash
npm run test
```

---


## Docker

This project also supports **Docker** for easy setup without installing dependencies locally.

**Run with Docker Compose:**

```bash
docker-compose up --build
```

Then open your browser at:

```
http://localhost:1234
```

**Why Docker?**

* Ensures the app runs in a consistent environment.
* No need to install Node.js or other dependencies on your machine.
* Easy to share with other developers or deploy.

---

## Video

[Screencast from 2025-08-08 20-11-22.webm](https://github.com/user-attachments/assets/e94db2f7-9401-4fd1-9532-ad8a67e27a9e)

---

## What I Like About This Implementation

* **Clean separation** between utility functions and UI components.
* **Lane packing algorithm** that minimizes vertical space while keeping items readable.
* **Pure CSS styling** for predictable rendering without heavy styling frameworks.
* Modular **`utils/`** functions with isolated unit tests, making them easy to maintain.

---

## What I Would Change If Doing It Again

* Add **accessibility features** like keyboard navigation for moving and resizing items.
* Improve **responsiveness** for smaller screens by adding horizontal scrolling controls.
* Implement **virtualization** for rendering only visible timeline items for performance on large datasets.
* I would enhance the **visual design** and pay more attention to the **TimelineItem behavior**, ensuring that when an item is moved, it doesn’t cause surrounding items to jump up and down unexpectedly.
* I would add a **styling library** such as Tailwind, Styled Components, or even Sass, since I used plain CSS here for speed and simplicity.
* I would add **tests for all files** if I had more time.

---

## How I Made My Design Decisions

* Looked at **Airtable’s timeline view** and **Gantt charts** for inspiration.
* Chose a **lane packing approach** instead of fixed rows to save space and reduce scrolling.
* Used **minimal dependencies** to keep the bundle small and easy to run anywhere.

---

## How I Would Test With More Time

* Add **React Testing Library** integration tests for component rendering and user interactions.
* Test **drag-and-drop and resizing behavior** across different browsers.
* Include **snapshot tests** for visual regression.

---

## Figma

[Low-fidelity prototype](https://www.figma.com/design/mgDC8pJWK28KGKQhxd0f0n/timeline?node-id=0-1&t=NSCgk3sSTqsIxDs9-1)

