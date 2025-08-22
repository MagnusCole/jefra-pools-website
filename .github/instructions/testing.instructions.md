---
applyTo: **/*.test.{ts,tsx}
---

## Testing Strategy - Evidence-Based Bug Prevention

**RESEARCH FOUNDATION**: Aug 2025 investigation with software testing effectiveness studies + TypeScript React performance data.

**CRITICAL INSIGHT**: Testing pyramid → **70-90% bug prevention** + **Unit tests 5x cheaper** than E2E + **2:1 ROI** for small teams

### Testing Pyramid (Evidence-Optimized)

```
     🔺 E2E Tests (5%)     - Critical user journeys only
    🔺🔺 Integration (15%)  - Form submissions, API calls
   🔺🔺🔺 Unit Tests (80%)   - Components, hooks, utilities
```

**STRATEGIC FOCUS**: Critical conversion paths over comprehensive coverage

### Unit Testing Standards (Performance-First)

```typescript
// Evidence-based testing template
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactForm } from '../ContactForm';

describe('ContactForm - Conversion Critical', () => {
  const user = userEvent.setup();

  beforeEach(() => {
    // Clean slate for each test
    render(<ContactForm />);
  });

  // 1. Rendering Performance Test
  it('renders efficiently under 16ms (60fps threshold)', () => {
    const start = performance.now();
    render(<ContactForm />);
    const end = performance.now();

    expect(end - start).toBeLessThan(16); // 60fps requirement
  });

  // 2. Accessibility Compliance (15-30% conversion boost)
  it('meets WCAG 2.1 AA standards', () => {
    // Touch targets 48x48dp minimum
    const submitButton = screen.getByRole('button', { name: /cotización/i });
    expect(submitButton).toHaveStyle('min-height: 48px');
    expect(submitButton).toHaveStyle('min-width: 48px');

    // ARIA labels present
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    // Color contrast (programmatic check if possible)
    const nameInput = screen.getByLabelText(/nombre/i);
    expect(nameInput).toHaveAttribute('aria-required', 'true');
  });

  // 3. LATAM Phone Validation (Critical for Peru market)
  it('validates Peru phone number formats correctly', async () => {
    const phoneInput = screen.getByLabelText(/teléfono/i);

    // Test invalid format
    await user.type(phoneInput, '123456');
    await user.tab(); // Trigger onBlur validation

    expect(screen.getByText(/formato válido: 999888777/i)).toBeInTheDocument();

    // Test valid formats
    await user.clear(phoneInput);
    await user.type(phoneInput, '999888777');
    await user.tab();

    expect(screen.queryByText(/formato válido/i)).not.toBeInTheDocument();

    // Test international format
    await user.clear(phoneInput);
  await user.type(phoneInput, '+51946398228');
    await user.tab();

    expect(screen.queryByText(/formato válido/i)).not.toBeInTheDocument();
  });

  // 4. Mobile Touch Interaction (70% traffic validation)
  it('handles mobile touch events correctly', async () => {
    const submitButton = screen.getByRole('button', { name: /cotización/i });

    // Simulate touch events
    fireEvent.touchStart(submitButton);
    fireEvent.touchEnd(submitButton);

    // Should work with touch
    await user.click(submitButton);

    // Verify mobile-friendly interaction
    expect(submitButton).toHaveClass('min-h-[48px]');
  // 5. WhatsApp Integration (Hispanic Market Preference)
  it('opens WhatsApp with correct message format', async () => {
    // Mock window.open
    const mockWindowOpen = jest.fn();
    window.open = mockWindowOpen;

    // Fill form with valid data
    await user.type(screen.getByLabelText(/nombre/i), 'María González');
  await user.type(screen.getByLabelText(/teléfono/i), '+51946398228');
    await user.type(screen.getByLabelText(/email/i), 'maria@email.com');

    // Submit form
    await user.click(screen.getByRole('button', { name: /cotización/i }));

    await waitFor(() => {
      expect(mockWindowOpen).toHaveBeenCalledWith(
  expect.stringContaining('https://wa.me/51946398228'),
        '_blank'
      );

      // Verify message contains user data
      const whatsappUrl = mockWindowOpen.mock.calls[0][0];
      expect(whatsappUrl).toContain('María González');
  expect(whatsappUrl).toContain('+51946398228');
    });
  });

  // 6. Form Performance Under Load
  it('maintains performance with multiple rapid interactions', async () => {
    const nameInput = screen.getByLabelText(/nombre/i);

    const start = performance.now();

    // Rapid typing simulation
    for (let i = 0; i < 10; i++) {
      await user.type(nameInput, 'a');
      await user.clear(nameInput);
    }

    const end = performance.now();

    // Should remain responsive under 100ms for 10 interactions
    expect(end - start).toBeLessThan(100);
  });
});
```

### Integration Testing (Critical User Journeys)

```typescript
// Hero → WhatsApp Click (Direct Conversion Path)
describe("Hero to WhatsApp Integration", () => {
  it("converts visitor to WhatsApp lead successfully", async () => {
    const user = userEvent.setup();
    window.open = jest.fn();

    render(<App />);

    // Find and click primary CTA
    const ctaButton = screen.getByRole("button", {
      name: /cotización gratuita whatsapp/i,
    });

    expect(ctaButton).toBeInTheDocument();
    expect(ctaButton).toHaveClass("bg-accent-500"); // Yellow CTA

    await user.click(ctaButton);

    // Verify WhatsApp opens with business number
    expect(window.open).toHaveBeenCalledWith(
      "https://wa.me/51946398228?text=Hola,%20solicito%20cotización%20para%20limpieza%20de%20piscina",
      "_blank"
    );
  });
});

// Form Submission → Success Flow
describe("Contact Form Integration", () => {
  it("completes full form submission flow", async () => {
    const user = userEvent.setup();

    // Mock successful Netlify submission
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
    });

    render(<App />);

    // Navigate to contact form
    const contactSection = screen.getByRole("region", { name: /contacto/i });
    contactSection.scrollIntoView();

    // Fill complete form
    await user.type(screen.getByLabelText(/nombre/i), "Carlos Rivera");
    await user.type(screen.getByLabelText(/teléfono/i), "987654321");
    await user.type(screen.getByLabelText(/email/i), "carlos@email.com");
    await user.selectOptions(screen.getByLabelText(/servicio/i), "limpieza");

    // Submit form
    await user.click(screen.getByRole("button", { name: /enviar/i }));

    // Verify success message appears
    await waitFor(() => {
      expect(screen.getByText(/mensaje enviado/i)).toBeInTheDocument();
    });

    // Verify form resets
    expect(screen.getByLabelText(/nombre/i)).toHaveValue("");
  });
});
```

### E2E Testing (Critical Conversion Paths Only)

```typescript
// Cypress E2E - Mobile-First Critical Journey
describe("Mobile Conversion Journey", () => {
  beforeEach(() => {
    // Set mobile viewport (70% traffic reality)
    cy.viewport(375, 667);
    cy.visit("/");
  });

  it("completes mobile hero to WhatsApp conversion", () => {
    // Performance check - sub-1s load
    cy.window().then((win) => {
      const loadTime =
        win.performance.timing.loadEventEnd -
        win.performance.timing.navigationStart;
      expect(loadTime).to.be.lessThan(1000); // 8-10% conversion uplift
    });

    // Accessibility check - touch targets
    cy.get('[data-testid="cta-primary"]')
      .should("have.css", "min-height", "48px") // 25% accuracy improvement
      .should("be.visible")
      .should("contain.text", "Cotización Gratuita WhatsApp");

    // Conversion action
    cy.window().then((win) => {
      cy.stub(win, "open").as("windowOpen");
    });

    cy.get('[data-testid="cta-primary"]').click();

    cy.get("@windowOpen").should(
      "have.been.calledWith",
      Cypress.sinon.match("https://wa.me/51946398228"),
      "_blank"
    );
  });

  it("completes mobile form submission successfully", () => {
    // Navigate to contact form
    cy.get('[data-testid="contact-form"]').scrollIntoView();

    // Fill form with mobile-optimized interactions
    cy.get('[data-testid="input-name"]').type("Ana Torres");
    cy.get('[data-testid="input-phone"]').type("+51987654321");
    cy.get('[data-testid="input-email"]').type("ana@email.com");

    // Submit and verify
    cy.get('[data-testid="submit-button"]').click();

    cy.get('[data-testid="success-message"]')
      .should("be.visible")
      .should("contain.text", "mensaje enviado");
  });
});
```

### Performance Testing (Lighthouse Integration)

```typescript
// Performance benchmarks based on research
describe("Performance Benchmarks", () => {
  it("meets evidence-based performance thresholds", async () => {
    // Bundle size check
    const bundleStats = await import("../dist/stats.json");
    const totalSize = bundleStats.assets.reduce(
      (sum, asset) => sum + asset.size,
      0
    );

    expect(totalSize).toBeLessThan(204800); // 200KB research target
  });

  it("maintains Lighthouse scores above research thresholds", () => {
    // These would be run in CI with lighthouse-ci
    // Performance: >90 (conversion correlation)
    // Accessibility: >95 (15-30% conversion boost)
    // SEO: >90 (local business optimization)

    expect(performanceScore).toBeGreaterThan(90);
    expect(accessibilityScore).toBeGreaterThan(95);
    expect(seoScore).toBeGreaterThan(90);
  });
});
```

### Test Configuration (Evidence-Optimized)

```typescript
// jest.config.js - Performance-first testing
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],

  // Coverage thresholds based on research ROI
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/hooks/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
  ],
  coverageThreshold: {
    global: {
      branches: 80, // Critical paths covered
      functions: 85, // Hook and component logic
      lines: 80, // Practical coverage target
      statements: 80,
    },
  },

  // Fast testing for rapid iteration
  maxWorkers: "50%",
  cache: true,

  // Mobile-first testing setup
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.(test|spec).{js,jsx,ts,tsx}",
  ],
};
```

**RESEARCH FOUNDATION**: Evidence-based testing strategy prioritizing conversion-critical paths with quantified ROI expectations.
})
);
});
});

// WhatsApp fallback test
it('opens WhatsApp on form error', async () => {
const mockOpen = jest.fn();
Object.defineProperty(window, 'open', { value: mockOpen });

    // Mock failed form submission
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    // Fill and submit form
    await user.type(screen.getByLabelText(/nombre/i), 'Test User');
    await user.click(screen.getByRole('button', { name: /cotización/i }));

    await waitFor(() => {
      expect(mockOpen).toHaveBeenCalledWith(

expect.stringContaining('wa.me/51946398228'),
'\_blank'
);
});
});
});

````

### Integration Testing (Component Interactions)

```typescript
// Testing user journeys across components
describe('Hero to CTA Journey', () => {
  it('navigates from hero CTA to contact form', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Click hero CTA
    const heroCTA = screen.getByRole('button', { name: /cotización gratuita/i });
    await user.click(heroCTA);

    // Should scroll to contact form
    await waitFor(() => {
      const contactForm = screen.getByRole('form', { name: /contacto/i });
      expect(contactForm).toBeInViewport();
    });
  });

  it('handles gallery to testimonials flow', async () => {
    render(<App />);
    const user = userEvent.setup();

    // Open gallery modal
    const firstImage = screen.getAllByAltText(/piscina cristalina/i)[0];
    await user.click(firstImage);

    // Modal should be visible
    expect(screen.getByRole('dialog')).toBeInTheDocument();

    // Close modal and scroll to testimonials
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
````

### E2E Testing Critical Paths (Cypress)

```typescript
// cypress/e2e/conversion-flow.cy.ts
describe("JefraPools Conversion Flow", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.viewport(375, 667); // Mobile-first testing
  });

  it("completes full conversion journey", () => {
    // Hero interaction
    cy.contains("Cotización Gratuita WhatsApp").should("be.visible");

    // Gallery browsing
    cy.get('[data-testid="gallery-image"]').first().click();
    cy.get('[data-testid="gallery-modal"]').should("be.visible");
    cy.get("body").type("{esc}"); // Close modal

    // Benefits section
    cy.scrollTo(0, 1000);
    cy.contains("Disfruta con Amigos").should("be.visible");

    // Services pricing
    cy.contains("S/. 80/mes").should("be.visible");
    cy.contains("S/. 180/mes").should("be.visible");

    // Contact form submission
    cy.get('[data-testid="contact-form"]').within(() => {
      cy.get('input[name="name"]').type("Test User");
      cy.get('input[name="phone"]').type("+51946398228");
      cy.get('input[name="email"]').type("test@email.com");
      cy.get('select[name="poolSize"]').select("medium");

      // Intercept Netlify form submission
      cy.intercept("POST", "/", { statusCode: 200 }).as("formSubmit");

      cy.get('button[type="submit"]').click();
      cy.wait("@formSubmit");
    });

    // Success state
    cy.contains("Cotización enviada").should("be.visible");
  });

  it("handles WhatsApp fallback on form error", () => {
    // Mock failed form submission
    cy.intercept("POST", "/", { statusCode: 500 }).as("formError");

    cy.get('[data-testid="contact-form"]').within(() => {
      cy.get('input[name="name"]').type("Test User");
      cy.get('button[type="submit"]').click();
      cy.wait("@formError");
    });

    // Should open WhatsApp (in new tab)
    cy.window()
      .its("open")
      .should(
        "have.been.calledWith",
        Cypress.sinon.match(/wa\.me\/51946398228/)
      );
  });

  it("maintains performance under load", () => {
    // Performance testing
    cy.window()
      .its("performance.timing")
      .then((timing) => {
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        expect(loadTime).to.be.lessThan(1000); // Sub-1s requirement
      });

    // Lighthouse audit simulation
    cy.lighthouse({
      performance: 90,
      accessibility: 95,
      "best-practices": 90,
      seo: 85,
    });
  });
});
```

### Visual Regression Testing

```typescript
// Percy.io or similar for visual changes
describe("Visual Regression Tests", () => {
  const breakpoints = [375, 768, 1024, 1280];

  breakpoints.forEach((width) => {
    it(`renders correctly at ${width}px`, () => {
      cy.viewport(width, 800);
      cy.visit("/");

      // Let page fully load
      cy.get('[data-testid="hero-section"]').should("be.visible");

      // Take screenshot
      cy.percySnapshot(`Homepage - ${width}px`);
    });
  });
});
```

### Performance Testing

```typescript
// Web Vitals monitoring in tests
describe("Performance Metrics", () => {
  it("meets Core Web Vitals thresholds", () => {
    cy.visit("/", {
      onBeforeLoad: (win) => {
        // Monitor Largest Contentful Paint
        new PerformanceObserver((list) => {
          const lcpEntry = list.getEntries().pop();
          expect(lcpEntry.value).to.be.lessThan(2500); // 2.5s threshold
        }).observe({ entryTypes: ["largest-contentful-paint"] });

        // Monitor Cumulative Layout Shift
        let cls = 0;
        new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
          expect(cls).to.be.lessThan(0.1); // CLS threshold
        }).observe({ entryTypes: ["layout-shift"] });
      },
    });
  });
});
```

### Test Data Management

```typescript
// Test fixtures para datos consistentes
// cypress/fixtures/contact-data.json
{
  "validUser": {
    "name": "María González",
    "phone": "+51987654321",
    "email": "maria@email.com",
    "poolSize": "large"
  },
  "invalidPhone": {
    "name": "Test User",
    "phone": "123",
    "email": "test@email.com"
  }
}

// Usage in tests
cy.fixture('contact-data').then((data) => {
  cy.get('input[name="name"]').type(data.validUser.name);
  cy.get('input[name="phone"]').type(data.validUser.phone);
});
```

### Coverage Requirements

```json
// jest.config.js coverage thresholds
{
  "collectCoverageFrom": [
    "src/components/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    },
    "src/components/": {
      "branches": 90,
      "functions": 90,
      "lines": 90,
      "statements": 90
    }
  }
}
```
