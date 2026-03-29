---
applyTo: '**'
---
# GitHub Copilot Custom Instructions: React.js (Bulletproof Architecture)

## 1. Role & Context
You are an expert Senior Frontend Engineer. Your goal is to generate code following the **Bulletproof React** architecture. This project uses a **feature-based structure** rather than a layer-based structure to ensure scalability and maintainability.

---

## 2. Project Structure (Bulletproof React)
Always organize code into the following directory structure:

* **`src/components`**: Shared components used across the entire application.
* **`src/features`**: The core of the app. Each feature folder (e.g., `features/auth`, `features/profile`) should contain:
    * `api/`: API request declarations and TanStack Query hooks.
    * `components/`: Components scoped specifically to this feature.
    * `hooks/`: Custom hooks specific to this feature.
    * `stores/`: Zustand stores for feature-specific state.
    * `types/`: TypeScript interfaces/types for this feature.
    * `index.ts`: The **Public API** for the feature. Export only what is needed externally.
* **`src/hooks`**: Shared hooks used across multiple features.
* **`src/lib`**: Configurations for external libraries (e.g., `queryClient.ts`, `axios.ts`).
* **`src/routes`**: TanStack Router configuration and route definitions.
* **`src/utils`**: Shared utility functions.

---

## 3. Tech Stack Specifics

### Styling: Tailwind CSS
* Use utility classes exclusively.
* Use the `cn()` utility (clsx + tailwind-merge) for dynamic classes.
* Follow the design tokens in `tailwind.config.js`.

### State Management: Zustand
* Define stores in `src/features/[feature-name]/stores` or `src/stores` for global state.
* Always use **selectors** to consume state to minimize re-renders.

### Data Fetching: TanStack React Query
* Keep logic in `src/features/[feature-name]/api`.
* Wrap every query/mutation in a custom hook.
* Use centralized query keys.

### Routing: TanStack Router
* Use file-based routing within `src/routes`.
* Ensure full type safety for params and search queries.

---

## 4. Coding Standards & Principles

### Feature Encapsulation
* **Strict Boundary:** Components from one feature should **never** import directly from the internals of another feature. 
* **Public API:** Always import from the feature's `index.ts` (e.g., `import { UserCard } from '@/features/users'`).

### Reusability & Clean Code
* **Atomic UI:** Place generic, highly reusable components (Buttons, Inputs) in `src/components/ui`.
* **TypeScript:** Use strict typing. Avoid `any`. Use `const` for components and `camelCase` for hooks/utilities.
* **Composition:** Favor component composition over complex conditional props.

---

## 5. Implementation Workflow
1.  **Locate Feature:** Identify if the code belongs to an existing feature or requires a new folder in `src/features`.
2.  **Define API:** Start by defining the types and TanStack Query hooks in the `api/` folder of the feature.
3.  **Build UI:** Create components using Tailwind CSS within the feature's `components/` folder.
4.  **Export:** Add the necessary components/hooks to the feature's `index.ts`.

---

## 6. Forbidden Practices
* **No Cross-Feature Internal Imports:** Do not reach into `features/auth/components/InternalThing.tsx`.
* **No Global Mess:** Do not put feature-specific logic in the global `src/hooks` or `src/components`.
* **No Manual URL Handling:** Always use TanStack Router hooks (`useNavigate`, `Link`).
* **No @apply:** Stick to Tailwind utility classes in JSX.

---

## 7. Internationalization (i18n) with i18next

### Overview
The project implements **multi-language support** using **i18next** and **react-i18next** with automatic browser language detection and localStorage persistence.

**Supported Languages:**
* Spanish (`es`) - Default language
* English (`en`)

### File Structure
```
src/
├── lib/
│   └── i18n.ts                 # Main i18next configuration
├── locales/
│   ├── es.json                 # Spanish translations
│   └── en.json                 # English translations
├── hooks/
│   └── use-translate.ts        # Custom translation hook
└── components/
    └── language-switcher.tsx   # Language selector component
```

### Configuration Details
* **Default Language:** Spanish (`es`)
* **Language Detection:** localStorage → browser language → fallback to Spanish
* **Interpolation:** Enabled for variable substitution in translations
* **Storage Key:** `i18nextLng` in localStorage

### Translation Structure
Translations are organized in **namespaces by functionality**:

```json
{
  "common": { /* shared translations */ },
  "header": { /* header-specific */ },
  "sidebar": { /* sidebar-specific */ },
  "auth": { /* authentication */ },
  "theme": { /* theme/appearance */ },
  "language": { /* language selection */ },
  "validation": { /* form validation */ },
  "messages": { /* general messages */ }
}
```

### How to Use in Components

#### Basic Usage
```tsx
import { useTranslation } from 'react-i18next'

export function MyComponent() {
  const { t } = useTranslation()
  
  return <h1>{t('common.settings')}</h1>
}
```

#### With Variables (Interpolation)
```tsx
const { t } = useTranslation()
// In translation file: "minLength": "Must be at least {{count}} characters"
return <p>{t('validation.minLength', { count: 8 })}</p>
```

#### Changing Language
```tsx
const { i18n } = useTranslation()
i18n.changeLanguage('en')  // Switch to English
i18n.changeLanguage('es')  // Switch to Spanish
```

### Adding New Translations

**Step 1:** Update both translation files
```json
// src/locales/es.json
{
  "myFeature": {
    "title": "Mi Característica",
    "description": "Descripción"
  }
}

// src/locales/en.json
{
  "myFeature": {
    "title": "My Feature",
    "description": "Description"
  }
}
```

**Step 2:** Use in component
```tsx
const { t } = useTranslation()
return (
  <div>
    <h1>{t('myFeature.title')}</h1>
    <p>{t('myFeature.description')}</p>
  </div>
)
```

### Best Practices
* **Always synchronize translations:** Add translations in both `es.json` and `en.json`
* **Namespace by feature:** Keep translations organized by functionality
* **Use descriptive keys:** Make keys clear and self-documenting
* **Never hardcode text:** Always use `t()` function for all user-facing text
* **Test both languages:** Verify translations render properly in both languages
* **Use language switcher:** Integrate `<LanguageSwitcher />` in appropriate layout locations

### Mandatory Rules for New Code
* ✅ **DO** import `useTranslation` from `react-i18next` in any component with user-facing text
* ✅ **DO** add all text strings to both `src/locales/es.json` and `src/locales/en.json`
* ✅ **DO** organize translation keys by feature or functionality
* ✅ **DO** use descriptive, consistent naming for translation keys
* ❌ **DON'T** hardcode strings in components
* ❌ **DON'T** create translation keys that only exist in one language
* ❌ **DON'T** forget to wrap variable values in interpolation syntax: `{{variableName}}`

### Language Persistence
The selected language is automatically saved to `localStorage` under the key `i18nextLng`, ensuring the user's language preference persists across sessions.

### Resources
* [react-i18next Documentation](https://react.i18next.com/)
* [i18next Official Guide](https://www.i18next.com/)
* Project guide files: `.github/i18n-guide.md` and `.github/I18N_IMPLEMENTATION.md`