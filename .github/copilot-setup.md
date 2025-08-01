# GitHub Copilot Setup & Best Practices

## Quick Start for Developers

### 1. Project Context Loading
When starting work on this project, Copilot will automatically load context from:
- `.github/copilot-instructions.md` - Main business and technical context
- `.github/evidence-based-instructions.md` - Research-backed decisions
- `.github/coding-standards.md` - Development patterns and standards

### 2. Copilot Chat Commands

#### Business Context Commands
```
@workspace What is the main business goal of this project?
@workspace Explain the target audience and conversion strategy
@workspace What are the performance requirements?
```

#### Development Commands
```
@workspace Show me the component architecture patterns
@workspace What are the mobile-first responsive requirements?
@workspace Explain the accessibility standards for this project
```

#### Specific Implementation Commands
```
@workspace Create a new contact form component following project standards
@workspace Optimize this component for mobile touch interactions
@workspace Add WhatsApp integration following LATAM preferences
```

### 3. Code Generation Prompts

#### Component Creation
```
Create a React component for [specific purpose] following the evidence-based patterns in .github/coding-standards.md. Include:
- TypeScript interfaces
- React.memo optimization
- Accessibility ARIA labels
- Mobile-first responsive design
- 48px minimum touch targets
```

#### Form Development
```
Create a contact form component that:
- Uses React Hook Form with onBlur validation
- Validates Peru phone numbers (+51 format)
- Integrates with WhatsApp for LATAM market
- Follows 20-30% abandonment reduction patterns
```

#### Performance Optimization
```
Optimize this component for:
- Sub-1s load time requirements
- Bundle size <200KB target
- Lazy loading for images
- React.memo for re-render prevention
```

### 4. Testing Integration
```
Generate tests for this component that cover:
- Accessibility compliance (WCAG 2.1 AA)
- Mobile touch interactions (48px targets)
- WhatsApp integration functionality
- Performance benchmarks (<16ms render)
```

## Copilot Agent Workflow

### Daily Development Routine
1. **Project Loading**: `@workspace explain current project status`
2. **Task Planning**: `@workspace help me plan implementation of [feature]`
3. **Code Generation**: Use specific prompts with business context
4. **Code Review**: `@workspace review this code against project standards`
5. **Testing**: `@workspace generate tests for conversion-critical paths`

### Quality Assurance Prompts
```
@workspace Review this code for:
- Evidence-based performance patterns
- LATAM mobile optimization
- Color psychology compliance (blue=trust, avoid green)
- Accessibility WCAG 2.1 AA standards
```

### Business Logic Validation
```
@workspace Verify this implementation:
- Supports Peru phone number format (+51 999 888 777)
- Uses WhatsApp as primary contact method
- Includes local trust signals for La Molina market
- Optimizes for 70% mobile traffic
```

## Advanced Copilot Features

### Context-Aware Suggestions
Copilot will automatically suggest:
- Psychology-optimized color usage (blue over green)
- Mobile-first responsive patterns
- Accessibility improvements
- Performance optimizations
- LATAM-specific validations

### Intelligent Code Completion
Copilot understands:
- Business requirements (pool cleaning service)
- Target market (La Molina, Lima, Peru)
- Technical stack (React + TypeScript + Vite + Tailwind)
- Performance goals (sub-1s load, 8-10% conversion uplift)
- Accessibility standards (WCAG 2.1 AA for 15-30% boost)

### Automated Code Review
Copilot can review code against:
- Project coding standards
- Evidence-based patterns
- Performance benchmarks
- Accessibility compliance
- Mobile optimization requirements

## Project-Specific Copilot Settings

The workspace includes optimized Copilot settings for:
- Temperature: 0.1 (more focused, less creative)
- Length: 500 tokens (detailed suggestions)
- Context: All project documentation files
- Language support: TypeScript, React, CSS, Markdown

## Troubleshooting

### If Copilot suggestions don't match project standards:
1. Reference specific instruction files: `@workspace use patterns from .github/coding-standards.md`
2. Provide business context: `@workspace this is for a pool cleaning service in Peru`
3. Specify evidence-based requirements: `@workspace follow the research-backed patterns for mobile optimization`

### For LATAM-specific features:
1. Always mention Peru market context
2. Reference WhatsApp integration requirements  
3. Specify mobile-first approach for 70% traffic
4. Include accessibility for aging demographics

This setup ensures GitHub Copilot provides contextually relevant, business-aligned, and technically excellent code suggestions for the JefraPools project.
