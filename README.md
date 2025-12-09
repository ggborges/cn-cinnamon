# Cinnamon UI — React Component Library

Cinnamon UI is a modular and scalable React component library built with **TailwindCSS**, **Shadcn-style primitives**, and fully documented using **Storybook**.  
This project provides a clean foundation for building consistent interfaces across multiple applications inside the CInCoders ecosystem.

---

## 🚀 Tech Stack

- **React + TypeScript** – Component logic and typings  
- **Storybook (React Webpack 5)** – Development environment and documentation  
- **TailwindCSS** – Utility-first styling framework  
- **Shadcn-style Components** – Variant-based, token-driven UI architecture  
- **Rollup** – Library bundling and distribution  

---

## 📦 Installation (coming soon)

The package will be published to npm after the initial release.

```bash
npm install @cincoders/cinnamon
```

---

## 🧩 Components

All UI components live in the src/components/ui directory and follow a modular structure:
```
src/
  components/
    ui/
      button.tsx
      ...
  lib/
    utils.ts
  styles/
    global.css
```

---

## 🛠 Development

To **run Storybook** locally:

```
npm run storybook
```

This environment provides isolated **component testing**, **documentation**, and **rapid prototyping**.

---

## 📦 Build (Rollup)

The library is bundled using Rollup, generating:

**ESM** ```(dist/index.js)```

**CJS** ```(dist/index.cjs.js)```

**Type definitions** ```(dist/index.d.ts)```

**Run:**

```
npm run build
```

---

## 🤝 Contributing

**Contributions are welcome!**