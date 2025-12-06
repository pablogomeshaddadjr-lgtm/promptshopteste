# AI Studio Development Rules for PromptShop

This document outlines the core technologies and conventions to be followed when developing and modifying the PromptShop application.

## Tech Stack Overview

The application is built using a modern, performance-focused stack:

*   **React (TypeScript):** The primary library for building the user interface, utilizing functional components and hooks.
*   **Vite:** Used as the build tool for fast development and optimized production builds.
*   **Tailwind CSS:** Utility-first CSS framework for all styling, ensuring a consistent, responsive, and dark neon aesthetic.
*   **Framer Motion:** Essential for handling all complex UI animations, transitions, and interactive gestures, contributing to the app's smooth, app-like feel.
*   **React Router (v6+):** Used for declarative routing within the single-page application structure.
*   **shadcn/ui:** A collection of pre-installed, accessible, and customizable components built on Radix UI.
*   **Lucide React:** The standard library for all icons used throughout the application.
*   **Mobile-First Design:** All components and layouts must be designed with mobile responsiveness as the primary consideration.

## Library Usage Rules

To maintain consistency and simplicity, adhere to the following rules regarding library usage:

| Feature | Mandatory Library | Notes |
| :--- | :--- | :--- |
| **Styling** | Tailwind CSS | Use utility classes exclusively. Avoid custom CSS files. |
| **UI Components** | shadcn/ui | Prioritize using pre-installed shadcn/ui components (e.g., Button, Card, Dialog). Only create custom components if shadcn/ui does not offer a suitable primitive or if deep customization is required (like `Button.tsx` and `PromptCard.tsx`). |
| **Icons** | Lucide React | All icons must be sourced from `lucide-react`. |
| **Routing** | React Router | Use `react-router-dom` for all navigation and route definitions. Keep main routes in `App.tsx`. |
| **Animations** | Framer Motion | Use `motion` components and `AnimatePresence` for all visual transitions, hover effects, and layout changes. |
| **State Management** | React Hooks | Use standard React state management (`useState`, `useReducer`, Context API) unless a more complex solution is explicitly requested. |