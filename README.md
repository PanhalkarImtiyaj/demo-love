# React Vite Starter

A modern, production-ready React starter template with Vite, featuring dark mode, API client, custom hooks, and best practices.

## 🚀 Features

- ⚡ **Vite** - Lightning-fast development server and optimized builds
- ⚛️ **React 19** - Latest React with modern hooks and features
- 🎨 **Dark Mode** - Built-in theme switching with localStorage persistence
- 🔌 **API Client** - Configured HTTP client with auth token support
- 🪝 **Custom Hooks** - Reusable hooks including `useLocalStorage`
- 🎯 **Path Aliases** - Clean imports with `@` shortcuts
- 📦 **Barrel Exports** - Organized module exports
- 🛠️ **ESLint** - Code quality and consistency
- 🌐 **React Router** - Ready for multi-page applications

## 📦 Project Structure

```
src/
├── assets/          # Images, icons, static files
├── components/      # Reusable React components
├── context/         # React Context providers (Theme, Auth, etc.)
├── hooks/           # Custom React hooks
├── services/        # API clients and external services
├── utils/           # Helper functions and formatters
├── App.jsx          # Main application component
├── main.jsx         # Application entry point
└── index.css        # Global styles and CSS variables
```

## 🎯 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 🎨 Theme System

The app includes a complete dark/light mode system:

```jsx
import { useTheme } from '@/context';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return <button onClick={toggleTheme}>Toggle Theme</button>;
}
```

## 🔌 API Client Usage

```jsx
import { apiClient } from '@/services';

// GET request
const users = await apiClient.get('/users');

// POST request
const result = await apiClient.post('/login', { email, password });

// With query parameters
const filtered = await apiClient.get('/users', { params: { role: 'admin' } });
```

## 🪝 Custom Hooks

### useLocalStorage

```jsx
import { useLocalStorage } from '@/hooks';

function MyComponent() {
  const [name, setName] = useLocalStorage('username', '');
  
  return <input value={name} onChange={e => setName(e.target.value)} />;
}
```

## 🛠️ Utilities

### Formatters

```jsx
import { formatCurrency, formatDate, capitalize } from '@/utils';

formatCurrency(1500);        // "$1,500.00"
formatDate(new Date());      // "Jan 15, 2024"
capitalize('hello world');   // "Hello world"
```

## 📝 Environment Variables

Copy `.env.example` to `.env` and configure:

```env
VITE_API_BASE_URL=http://localhost:8000/api
VITE_ENV=development
```

## 🎯 Path Aliases

Use clean imports throughout your app:

```jsx
import { apiClient } from '@/services';
import { useTheme } from '@/context';
import { Button } from '@/components';
import { formatCurrency } from '@/utils';
```

## 🤝 Contributing

1. Follow the existing code style
2. Use ESLint for code quality
3. Keep components small and focused
4. Add new utilities to appropriate folders
5. Update barrel exports when adding new modules

## 📄 License

MIT

