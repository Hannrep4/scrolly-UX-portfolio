---
slug: midterm-redesign
title: Budget Basket
summary: A Vite + React web app that helps college students plan groceries within a tight budget before they ever set foot in a store — with two distinct workflows and a live AI chat assistant.
link: https://student-reality-lab-v2-repuyan.vercel.app/
---

## The Problem

College students are constantly navigating one of the most frustrating adult challenges: eating well on almost no money. Meal planning feels overwhelming, and most students end up either overspending or buying random things that don't add up to actual meals.

**The goal:** Build a web app with two distinct grocery planning workflows — one guided and fast, one flexible and manual — so students could plan their shopping before spending a single dollar.

## The Concept

The project followed a **STAR narrative structure** to keep the design grounded in a real scenario:

- **Situation** — College students struggle to balance limited grocery budgets with actual meal needs
- **Task** — Build a tool with two planning modes: fast and guided, or slow and manual
- **Action** — Develop a landing page, a guided list generator, and an interactive builder with live budget tracking
- **Result** — Students get a clearer, lower-stress decision-making tool that works before they shop

## What I Built

**Budget Basket** is a Vite + React application with two core workflows:

**Guided Generator** — Takes inputs like income, weekly budget, and food preferences, and generates an affordable weekly grocery list automatically. Designed for students who want a fast answer and don't want to think too hard about it.

**Interactive Builder** — A manual list-building experience where students can add, adjust, and remove items while a live budget tracker updates in real time. Built for students who want more control over what ends up in their cart.

**AI Chat Assistant** — A floating chat box powered by the OpenAI API lets students ask budget questions, get meal suggestions, or troubleshoot their list without leaving the app.

## Data System

Grocery pricing pulls from real CSV data files loaded at runtime from the `public/data` directory — fruit prices, vegetable prices, and beef cuts sourced from 2023 USDA datasets. If the CSV files are unavailable, the app falls back to a built-in sample catalog so the experience never breaks.

## Tech Stack

Built with **Vite + React**, deployed to Vercel. JavaScript made up ~76% of the codebase with CSS handling the rest — no UI library, fully custom components and layout.

The OpenAI Chat Completions API powers the floating assistant. The app reads `VITE_OPENAI_API_KEY` from a `.env` file for local development.

## Key Design Decisions

**Two workflows, not one** — Rather than building one generic list-builder, I kept the guided and manual flows completely separate. Users with different needs and patience levels get different entry points. Forcing them into the same flow would have served neither well.

**Runtime CSV loading** — Hardcoding prices would have made the data stale immediately. Loading from CSVs at runtime means the pricing data can be updated without touching the application code.

**Graceful fallback** — If the CSV files fail to load, the app defaults to a sample catalog instead of breaking. The user experience stays intact even when the data source doesn't.

## Reflection

This project pushed me to think about data-driven UI design — how the source and shape of your data changes what's possible in the interface. The two-workflow structure was the most interesting design challenge: figuring out how to give users a clear choice upfront without overwhelming them with options. Less is more, until it isn't.
