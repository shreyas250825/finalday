# 🔧 TSOptiTask: React & TypeScript Optimization Suite

A modular, multi-task project that explores real-world strategies in React and TypeScript to improve performance, code quality, and maintainability. The suite includes components, lazy loading, bundle optimization, testing, and TypeScript build configuration.

---

## 📁 Folder Structure Overview

```
tsopti-task/
├── task1-tag-system/               # Task 1: React.memo & useCallback
├── task2-lazy-routing/            # Task 2: React.lazy + ErrorBoundary
├── task3-bundle-analyzer/         # Task 3: Bundle analysis + tree shaking
├── task4-testing-eslint/          # Task 4: Testing + ESLint config
├── task5-ts-build-optimization/   # Task 5: TypeScript diagnostics, refactor, tree shake, project references
```

---

##  TASK OVERVIEW

### 🧩 Task 1: Tag Component Optimization
- Built `TagList` using `React.memo` + `useMemo`
- Built `TagInput` with `useCallback`
- Demonstrated parent state updates not re-rendering child components

### 🔄 Task 2: Lazy Loading + Routing
- Used `React.lazy()` and `Suspense` to load settings/admin panel
- Wrapped in `ErrorBoundary` to handle load failures
- Simulated loading behavior and failure

### 📦 Task 3: Bundle Analyzer & Tree Shaking
- Used `vite-plugin-bundle-analyzer` or `esbuild`
- Removed unused lodash/date-fns/moment code
- Switched to named imports
- Shrunk bundle using:
  - `"module": "esnext"`
  - `"skipLibCheck": true`
  - `"incremental": true`

### 🧪 Task 4: Testing + ESLint Rules
- Created `CommentBox` and `ApprovalBox` test cases using Vitest
- Debugged test flakiness by using `findByText` over `getByText`
- Added ESLint config that forbids `console.log` in production
- Fixed common JSX and prop-types lint issues

### 🛠️ Task 5: TypeScript Build Optimization
- Ran `tsc --diagnostics` to benchmark performance
- Refactored nested types to flattened ones
- Enabled `incremental`, `skipLibCheck`
- Used `esbuild` for tree shaking unused exports
- Split project using `project references` and verified faster rebuilds

---

## 🚀 How to Run Each Task

### 🧪 Install dependencies (once per folder)
```bash
npm install
```

### ▶️ Task 1: Tag Optimization
```bash
cd task1-tag-system
npm run dev
```

### ▶️ Task 2: Lazy Loaded Routes
```bash
cd task2-lazy-routing
npm run dev
```

### ▶️ Task 3: Bundle Optimization
```bash
cd task3-bundle-analyzer
npm run build
npm run analyze
```

### ▶️ Task 4: Testing + ESLint
```bash
cd task4-testing-eslint
npx eslint src
npx vitest run
```

### ▶️ Task 5: TypeScript Optimization
```bash
cd task5-ts-build-optimization
npx tsc --diagnostics
npx esbuild src/main.tsx --bundle --minify --tree-shaking=true --outfile=out.js
npx tsc --build --verbose
```

---

## 🔧 Features Demonstrated

-  React.memo, useMemo, useCallback performance testing
-  React.lazy & Suspense with ErrorBoundary for stable loading
-  Bundle analysis, tree shaking and minimized builds
-  Automated tests with Vitest & Testing Library
-  Linting with ESLint (flat config & rule enforcement)
-  TypeScript build tuning, project splitting and faster recompiles

---

## 📘 Requirements

- Node.js 18+
- npm or yarn
- Vite
- TypeScript

---

## 📌 License

MIT — built for onboarding internship at DLED Labs,IIT Ropar.

# Best Regards
##Shreyas Salian
