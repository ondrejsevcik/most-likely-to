# Most Likely To - SvelteKit Web Application

Most Likely To is a TypeScript SvelteKit web application that displays random "Most likely to..." questions for party games. The app features a clean card-based UI with a button to fetch new random questions from a server-side API.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Environment Requirements

- Node.js 20+ recommended for development (current: v20.19.4)
- The app is configured for production deployment with Node.js 18.x runtime on Vercel
- Dependencies may require `--legacy-peer-deps` flag for installation due to version conflicts

### Bootstrap and Development Setup

- **Install dependencies**: `npm install --legacy-peer-deps` -- takes ~45-120 seconds. Set timeout to 180+ seconds.
- **Start development server**: `npm run dev` -- starts in ~1.3 seconds, serves on http://localhost:5173/. Set timeout to 30+ seconds.
- **TypeScript checking**: `npm run check` -- takes ~3-8 seconds. Set timeout to 30+ seconds.

### Code Quality and Linting

- **Run linting**: `npm run lint` -- takes ~2-3 seconds. Set timeout to 30+ seconds. Shows 2 expected warnings about unused variables in API routes.
- **Format code**: `npm run format` -- takes ~1 second. Set timeout to 30+ seconds.
- **ALWAYS run `npm run format` and `npm run lint` before committing** or you'll get style violations.

### Build and Test Status

- **Production build**: `npm run build` -- builds successfully in ~30-60 seconds. Set timeout to 120+ seconds.
- **End-to-end tests**: `npm run test` (Playwright) -- runs 2 tests in ~5-15 seconds. Set timeout to 60+ seconds.
  - First run requires: `npx playwright install` (takes ~2-3 minutes, set timeout to 300+ seconds)
- **Unit tests**: `npm run test:unit` (Vitest) -- no unit tests currently exist, exits with code 1.
- **Development with hot reload**: Use `npm run dev` for real-time development.

## Validation

### Manual Testing Requirements

**ALWAYS manually test the core functionality after making changes:**

1. Start dev server: `npm run dev`
2. Navigate to http://localhost:5173/
3. Verify a "Most likely to..." question displays in the card (from 345+ available questions)
4. Click "See next" button multiple times
5. Confirm new random questions load each time (verify different questions appear)
6. Test responsiveness by resizing browser window (mobile/desktop views)
7. Verify button has proper styling and interactions

### Application Flow Validation

- **API Endpoint**: Ensure `/api/question` returns JSON with random questions from the 345+ predefined list
- **Frontend Components**: Verify Card.svelte and Button.svelte render correctly with proper styling
- **State Management**: Confirm question state updates properly on button clicks
- **Responsive Design**: Test mobile and desktop layouts

### Performance Expectations

- Development server startup: ~1.3 seconds
- Question API response: <100ms
- Button click response: <200ms
- Page load: <1 second

## Common Tasks

### Repository Structure

```
src/
├── routes/
│   ├── +layout.svelte           # Main app layout with global styles
│   ├── +page.svelte             # Main page component
│   ├── +page.ts                 # Page data loader for initial question
│   ├── Card.svelte              # Question card component with styling
│   ├── Button.svelte            # Reusable button component
│   ├── api/question/+server.ts  # Random question API endpoint
│   ├── modern-css-reset.css     # CSS reset for consistent styling
│   └── styles.css               # Global CSS variables and styles
├── lib/server/
│   └── questions.ts             # 345+ predefined questions array
├── app.d.ts                     # TypeScript app definitions
└── app.html                     # HTML template
```

### Key Files and Their Purpose

- **`src/lib/server/questions.ts`** - Contains 345+ "Most likely to..." questions. Edit here to add/modify questions.
- **`src/routes/api/question/+server.ts`** - API endpoint that returns random questions using `Math.random()`.
- **`src/routes/+page.svelte`** - Main page that fetches initial question and handles "See next" functionality.
- **`svelte.config.js`** - SvelteKit config with Vercel adapter using Node.js 18.x runtime.
- **`package.json`** - Specifies Node.js 22.x for engines but uses Node.js 18.x runtime for Vercel deployment.

### Working with Questions

- Questions are stored as a simple exported array in `src/lib/server/questions.ts`
- Format: `'Most likely to [action/behavior]'`
- To add questions: Edit the questions array and restart dev server
- API randomly selects from array using: `Math.floor(Math.random() * questions.length)`

### Styling and UI

- **CSS Architecture**: Uses CSS custom properties for theming (--color-orange, --color-text-dark)
- **Responsive Design**: Mobile-first approach with breakpoint at max-height: 400px
- **Typography**: Raleway font for questions, Inter for UI elements
- **Button Styling**: Clean design with hover and active states
- **Card Component**: Fixed max dimensions (500px width, 600px height) for consistency

### Configuration Files

- **`.eslintrc.cjs`** - ESLint config for TypeScript and Svelte with expected unused variable warnings
- **`.prettierrc`** - Code formatting (uses tabs, single quotes)
- **`svelte.config.js`** - SvelteKit config with Vercel adapter and Node.js 18.x runtime
- **`playwright.config.ts`** - E2E test configuration with webServer setup
- **`vite.config.ts`** - Build tool configuration with Vitest integration

## Troubleshooting

### Common Issues

- **Dependency conflicts**: Use `npm install --legacy-peer-deps` when package.json changes
- **Cache issues**: Clear npm cache with `npm cache clean --force` if installation issues occur
- **Port conflicts**: Default dev server runs on port 5173, change in vite.config.ts if needed
- **ESLint warnings**: Shows 2 expected warnings for unused variables in API routes (`params` and `url`)
- **Build adapter**: Uses Node.js 18.x runtime for Vercel deployment compatibility

### Development Workflow

1. **Make code changes** and verify dev server auto-reloads properly
2. **Run tests**: `npm run test` for E2E tests (install browsers first with `npx playwright install`)
3. **Check code quality**: `npm run lint` and `npm run format`
4. **TypeScript validation**: `npm run check`
5. **Build for production**: `npm run build`
6. **Commit changes** after validation

### Testing Setup

- **Playwright E2E Tests**: 2 tests covering home page functionality and question loading
- **Test Files**: Located in `tests/test.ts`
- **Browser Installation**: Required on first run with `npx playwright install`
- **Test Coverage**: Home page rendering, button functionality, question display

### Best Practices

- Always test your changes both in development and with a production build
- Use TypeScript checking with `npm run check` before committing
- Follow the existing code style and formatting conventions
- Test both desktop and mobile responsive layouts (especially height constraints)
- Verify API endpoints work correctly with manual testing
- Ensure questions display properly and button interactions work smoothly
