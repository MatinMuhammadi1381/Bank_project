# Bank Project

**English** · [فارسی](#فارسی)

A responsive fintech landing page built with React and Tailwind CSS. The design presents a modern banking experience with a hero section, product benefits, payment-focused content, customer testimonials, partner logos, and clear calls to action.

## Features

- Responsive navigation and mobile layout
- Hero section with discount banner and call-to-action
- Banking statistics and feature cards
- Billing, card, and business sections
- Customer testimonials and client logos
- Responsive footer and reusable React components
- GitHub Pages deployment configuration

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- PostCSS
- JavaScript (JSX)

## Getting Started

~~~bash
git clone https://github.com/MatinMuhammadi1381/Bank_project.git
cd Bank_project
npm ci
npm run dev
~~~

Open the local URL shown by Vite, usually http://localhost:5173.

On Windows, `INSTALL-DEPENDENCIES.bat` installs the locked npm dependencies.

## Available Scripts

~~~bash
npm run dev       # Start the development server
npm run build     # Create a production build
npm run preview   # Preview the production build
npm run lint      # Run ESLint
npm run deploy    # Build and publish to GitHub Pages
~~~

## Live Demo

[Open the deployed demo](https://MatinMohamady0081.github.io/bank-project/)

## Project Structure

~~~text
src/
├── components/   # Sections and reusable UI components
├── assets/       # Images, icons, and illustrations
├── constants/    # Navigation, features, testimonials, and client data
├── App.jsx       # Main page composition
└── main.jsx      # Application entry point
~~~

## Scope

This repository is a front-end design project. It does not include real banking accounts, authentication, payment processing, or transaction APIs.

---

## فارسی

یک صفحهٔ فرود واکنش‌گرا با موضوع فین‌تک و بانکداری دیجیتال که با React و Tailwind CSS ساخته شده است.

### امکانات

- پیمایش واکنش‌گرا، معرفی اصلی و دکمه‌های دعوت به اقدام
- کارت‌های ویژگی و آمار، پرداخت و کسب‌وکار
- دیدگاه مشتریان، لوگوی همکاران و پابرگ

### فناوری‌ها و راه‌اندازی

React 18، Vite، Tailwind CSS، PostCSS و JavaScript (JSX). به Node.js و npm نیاز دارید:

~~~bash
git clone https://github.com/MatinMuhammadi1381/Bank_project.git
cd Bank_project
npm ci
npm run dev
~~~

در ویندوز `INSTALL-DEPENDENCIES.bat` را اجرا کنید. Vite نشانی محلی (معمولاً `http://localhost:5173`) را نشان می‌دهد. از `npm run build` برای ساخت، `npm run preview` برای پیش‌نمایش و `npm run lint` برای بررسی کد استفاده کنید.

### محدوده

این پروژه فقط طراحی فرانت‌اند است و حساب بانکی واقعی، ورود، پردازش پرداخت یا API تراکنش ندارد.