# Coding Standards for GitHub Copilot

## Component Architecture Patterns

### Standard Component Template

```typescript
interface ComponentProps {
  title: string;
  optional?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Component: React.FC<ComponentProps> = React.memo(
  ({ title, optional = false, children, onClick }) => {
    // Hooks first
    const [state, setState] = useState<boolean>(false);

    // Memoized computations
    const memoizedValue = useMemo(() => {
      return expensiveComputation();
    }, [dependency]);

    // Event handlers
    const handleClick = useCallback(() => {
      onClick?.();
    }, [onClick]);

    return (
      <section
        className="component-wrapper"
        role="region"
        aria-labelledby={`${title}-heading`}
      >
        <h2 id={`${title}-heading`} className="sr-only">
          {title}
        </h2>
        {children}
      </section>
    );
  }
);

Component.displayName = "Component";
export default Component;
```

### Performance Patterns

```typescript
// ✅ Always use for images
<img loading="lazy" alt="descriptive text" />;

// ✅ Always use for large components
const LazyComponent = React.lazy(() => import("./Component"));

// ✅ Always use for expensive calculations
const result = useMemo(() => expensiveCalc(), [deps]);

// ✅ Always use for event handlers in props
const handler = useCallback(() => {}, [deps]);
```

### Mobile-First Responsive Patterns

```css
/* Default: Mobile 375px */
.component {
  /* Mobile styles first */
}

/* Progressive enhancement */
@media (min-width: 768px) {
  .component {
    /* Tablet adjustments */
  }
}

@media (min-width: 1024px) {
  .component {
    /* Desktop enhancements */
  }
}
```

### Accessibility Patterns

```typescript
// ✅ Always include ARIA labels
<button aria-label="Descriptive action">

// ✅ Always use semantic HTML
<main role="main">
<section role="region" aria-labelledby="heading">
<nav role="navigation" aria-label="Main navigation">

// ✅ Always ensure keyboard navigation
<a href="#content" className="sr-only focus:not-sr-only">Skip to content</a>
```

### Form Patterns (LATAM Optimization)

```typescript
// ✅ Always use React Hook Form
const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  mode: "onBlur", // Reduces abandonment
});

// ✅ Always validate Peru phone numbers
const phoneValidation = {
  required: "Teléfono requerido",
  pattern: {
    value: /^(\+51|51)?[0-9]{9}$/,
    message: "Formato: 999888777 o +51946398228",
  },
};

// ✅ Always integrate WhatsApp for LATAM
const handleSubmit = (data) => {
  const message = `Hola, soy ${data.name}. Tel: ${data.phone}`;
  window.open(
    `https://wa.me/51946398228?text=${encodeURIComponent(message)}`,
    "_blank"
  );
};
```

## Naming Conventions

### Files

- Components: `PascalCase.tsx` (e.g., `ContactForm.tsx`)
- Hooks: `camelCase.ts` (e.g., `useWhatsAppContact.ts`)
- Utils: `camelCase.ts` (e.g., `formatPhoneNumber.ts`)
- Types: `PascalCase.ts` (e.g., `FormTypes.ts`)

### Variables

- Constants: `UPPER_SNAKE_CASE`
- Functions: `camelCase`
- Components: `PascalCase`
- Props interfaces: `ComponentNameProps`

### CSS Classes (Tailwind)

- Utility-first approach
- Component composition over custom CSS
- Responsive prefixes: `sm:`, `md:`, `lg:`, `xl:`
- State variants: `hover:`, `focus:`, `active:`

## Error Handling Patterns

```typescript
// ✅ Always handle async errors
const handleAsyncAction = async () => {
  try {
    await apiCall();
    // Success state
  } catch (error) {
    console.error("Action failed:", error);
    // Fallback action (e.g., WhatsApp direct)
  }
};

// ✅ Always provide fallbacks for critical actions
const handleContactSubmit = async (data) => {
  try {
    await submitToNetlify(data);
  } catch (error) {
    // Fallback to WhatsApp
    openWhatsApp(data);
  }
};
```

## Testing Patterns

```typescript
// ✅ Always test critical paths
describe("Component", () => {
  it("renders correctly", () => {
    render(<Component />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("meets accessibility standards", () => {
    render(<Component />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("aria-label");
    expect(button).toHaveStyle("min-height: 48px");
  });

  it("handles mobile interactions", async () => {
    const user = userEvent.setup();
    render(<Component />);
    await user.click(screen.getByRole("button"));
    // Verify interaction
  });
});
```
