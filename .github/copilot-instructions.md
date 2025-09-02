# Most Likely To - GitHub Copilot Instructions

Most Likely To is a digital version of the popular party game where players are presented with fun scenarios and questions to spark conversation and laughter. This is a SvelteKit web application with TypeScript, deployed to Vercel.

**Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.**

## Working Effectively

### Initial Setup

Run these commands to set up the development environment:

```bash
npm install  # Node.js 22.x required but works with 20.x+ with warnings
npm run check  # Type checking
npm run lint  # Code linting and formatting check
npm run build  # Production build - NEVER CANCEL.
```

**CRITICAL**: All builds and tests complete quickly (under 15 seconds). No long timeouts needed.

### Development Workflow

- Start development server: `npm run dev` - opens at http://localhost:5173/
- Build for production: `npm run build` - creates optimized build in `.svelte-kit/output/`
- Preview production build: `npm run preview` - serves at http://localhost:4173/
- Run type checking: `npm run check` or `npm run check:watch` for watch mode
- Format code: `npm run format` (auto-fix) or `npm run lint` (check only)
- Run E2E tests: `npm run test` (requires `npx playwright install` first)
- Run unit tests: `npm run test:unit` (currently no unit tests exist)

### Validation Requirements

**ALWAYS manually test any changes by running the application and exercising the user flow:**

1. Start dev server: `npm run dev`
2. Navigate to http://localhost:5173/
3. Verify a "Most Likely To" question displays
4. Click "See next" button multiple times to verify new random questions load
5. Verify the application is responsive and styled correctly

**ALWAYS run formatting and linting before committing:**

```bash
npm run format  # Auto-fix formatting issues
npm run lint    # Verify code style and lint rules
```

## Key Project Structure

### Source Code Layout

```
src/
├── routes/                    # SvelteKit pages and components
│   ├── +layout.svelte        # Main app layout
│   ├── +page.svelte          # Homepage (main question display)
│   ├── +page.ts              # Homepage data loading
│   ├── Card.svelte           # Question display card component
│   ├── Button.svelte         # Button component
│   ├── api/question/         # API endpoint for random questions
│   └── styles.css            # Global styles
├── lib/
│   └── server/
│       └── questions.ts      # Database of 345 questions
└── app.html                  # HTML template
```

### Key Files and Their Purpose

- `src/lib/server/questions.ts` - Contains 345 "Most Likely To" questions as a TypeScript array
- `src/routes/api/question/+server.ts` - API endpoint that returns random questions
- `src/routes/+page.svelte` - Main page that displays questions and handles "See next" clicks
- `package.json` - Defines npm scripts and dependencies
- `svelte.config.js` - SvelteKit configuration with Vercel adapter
- `vite.config.ts` - Vite build configuration
- `playwright.config.ts` - E2E test configuration
- `eslint.config.js` - ESLint configuration for TypeScript and Svelte

## Common Tasks and Troubleshooting

### Adding New Questions

Edit `src/lib/server/questions.ts` and add new strings to the `questions` array. Each question should start with "Most likely to".

### Playwright Testing Issues

- **Browser installation required**: Run `npx playwright install` before first test run
- **Installation may fail**: Network issues can cause browser download failures - document as "test requires manual browser installation"
- **Test command**: `npm run test` runs the single E2E test that verifies homepage loads

### Build and Deployment

- **Vercel deployment**: Configured via `svelte.config.js` with `@sveltejs/adapter-vercel`
- **Production build**: Always test with `npm run build && npm run preview`
- **No CI/CD**: Only dependabot.yml exists for dependency updates

### Node.js Version Requirements

- **Specified**: Node.js 22.x in package.json engines
- **Actual compatibility**: Works with Node.js 20.x+ (shows engine warnings but functions normally)
- **Package manager**: npm 11.5.2 specified but works with npm 10.x+

### Code Style and Formatting

- **Prettier configuration**: Uses tabs, single quotes, no trailing commas
- **ESLint**: Configured for TypeScript and Svelte with recommended rules
- **Warnings**: Prettier shows "Ignored unknown option" warnings but still works correctly

## Validation Scenarios

After making any changes, **ALWAYS**:

1. **Run the build process**: `npm run build` - should complete without errors
2. **Test development server**: `npm run dev` and verify application loads at http://localhost:5173/
3. **Test question functionality**: Click "See next" multiple times to ensure API works
4. **Test production build**: `npm run preview` and verify functionality at http://localhost:4173/
5. **Run linting**: `npm run lint` and `npm run format` to ensure code quality
6. **Verify responsiveness**: Test the UI works on different screen sizes

## Application Architecture

- **Frontend**: SvelteKit with TypeScript
- **Styling**: CSS with custom properties, mobile-responsive design
- **API**: Single endpoint `/api/question` returns random questions
- **Data**: Static array of 345 questions in TypeScript file
- **Deployment**: Vercel with SSR and static generation
- **Fonts**: Inter and Raleway loaded from @fontsource packages

**Remember**: This is a simple, focused application. Keep changes minimal and always test the core functionality of displaying random questions.
