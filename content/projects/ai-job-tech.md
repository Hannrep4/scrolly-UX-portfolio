---
slug: ai-job-tech
title: Accessible Assignment Companion
summary: A responsive React + TypeScript web app that helps college students manage assignments and reduce academic stress — built with deep accessibility support from the ground up.
link: https://hannrep4.github.io/resume-analysis-project/
---

## The Problem

College students dealing with heavy course loads often experience executive overload — the mental fatigue of tracking deadlines, managing priorities, and staying on top of everything at once. Existing task apps are functional, but rarely designed with student stress in mind.

**My goal:** Build a polished, production-ready frontend app that addresses a real student pain point, while proving I could ship something accessible and complete — not just a prototype.

## What I Built

The **Accessible Assignment Companion** is a responsive web app that combines assignment tracking with a supportive virtual companion interface. The companion responds to the student's workload state, making the experience feel less like a to-do list and more like having a study buddy.

Key features:

- **Assignment tracking** — add, manage, and check off tasks across courses
- **Companion system** — virtual companion with emotional responses tied to workload state
- **Responsive layout** — works on desktop, tablet, and mobile without breaking
- **Full accessibility** — keyboard navigation, visible focus states, reduced motion support, semantic HTML, and contrast-aware theming throughout

## Tech Stack

Built with **React + TypeScript** and deployed to GitHub Pages via Vite. TypeScript made up ~56% of the codebase, with CSS accounting for the rest — no component library dependencies, all custom.

## Accessibility as a Design Priority

Accessibility wasn't an afterthought — it was a core requirement I set for myself from the start. The app implements:

- Semantic HTML structure throughout
- Keyboard-friendly interactions on all interactive elements
- Visible, styled focus states that don't break the visual design
- `prefers-reduced-motion` support for users sensitive to animation
- Text scaling that respects user browser settings
- Contrast-aware theming that passes WCAG AA

## Process & Decisions

This project started with research — studying what frontend roles in product-focused companies actually expect, and what skills separate entry-level candidates from stronger ones. Accessibility kept coming up as a differentiator that most junior portfolios skip.

I chose React with TypeScript over plain JavaScript to practice production-level patterns: typed props, component interfaces, and explicit state modeling. The companion's emotional response system required careful state design — different workload thresholds trigger different companion moods, which called for clear, testable logic rather than ad-hoc conditionals.

## Outcome

A fully deployed, accessible web application that demonstrates I can translate a user need into a complete, production-ready interface — not just a Figma mock.

## Reflection

The biggest lesson was that accessibility and good design aren't opposites — they reinforce each other. Every decision I made for keyboard users also improved the experience for everyone else. Designing with constraints made the product stronger.
