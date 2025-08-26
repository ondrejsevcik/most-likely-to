# Most Likely To - SvelteKit Web Application

Most Likely To is a TypeScript SvelteKit web application that displays random "Most likely to..." questions for party games. The app has a simple card-based UI with a button to fetch new random questions from a server-side API.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Environment Requirements

- Node.js 20.19.4+ recommended for development
- The app is configured for Node 22.x as specified in package.json

### Bootstrap and Development Setup

- Install dependencies: `npm install` -- takes ~8-45 seconds depending on cache. Set timeout to 90+ seconds.
- Start development server: `npm run dev` -- starts in ~1.3 seconds, serves on http://localhost:5173/. Set timeout to 30+ seconds.
- TypeScript checking: `npm run check` -- takes ~5 seconds. Set timeout to 30+ seconds.

### Code Quality and Linting

- Run linting: `npm run lint` -- takes ~2 seconds. Set timeout to 30+ seconds. May show 2 warnings about unused variables (expected).
- Format code: `npm run format` -- takes ~1 second. Set timeout to 30+ seconds.
- **ALWAYS run `npm run format` and `npm run lint` before committing** or you'll get style violations.

### Build and Test Status

- `npm run build` -- builds the production application successfully. Takes ~30-60 seconds. Set timeout to 120+ seconds.
- `npm run test` (Playwright) -- runs end-to-end tests. Takes ~10-30 seconds. Set timeout to 60+ seconds.
- `npm run test:unit` (Vitest) -- runs unit tests if available. Takes ~5-15 seconds. Set timeout to 30+ seconds.
- Use `npm run dev` for development with hot reload capabilities.

## Validation

### Manual Testing Requirements

- **ALWAYS manually test the core functionality after making changes:**
  1. Start dev server: `npm run dev`
  2. Navigate to http://localhost:5173/
  3. Verify a "Most likely to..." question displays in the card
  4. Click "SEE NEXT" button multiple times
  5. Confirm new random questions load each time (verify different questions appear)
  6. Test responsiveness by resizing browser window (mobile/desktop views)
  7. Verify button has active animation when clicked (shadow effect)

### Application Flow Validation

- **API Endpoint**: Ensure `/api/question` returns JSON with random questions from the 300+ predefined list
- **Frontend Components**: Verify Card.svelte and Button.svelte render correctly
- **State Management**: Confirm question state updates properly on button clicks

### Performance Expectations

- Development server startup: ~2 seconds
- Question API response: <100ms
- Button click response: <200ms
- Page load: <1 second

## Common Tasks

### Repository Structure

```
src/
├── routes/
│   ├── +layout.svelte          # Main app layout
│   ├── +page.svelte            # Main page component
│   ├── +page.ts                # Page data loader
│   ├── Card.svelte             # Question card component
│   ├── Button.svelte           # Reusable button component
│   ├── api/question/+server.ts # Random question API
│   └── styles.css              # Global styles
├── lib/server/
│   └── questions.ts            # 300+ predefined questions array
└── app.d.ts                    # TypeScript definitions
```

### Key Files and Their Purpose

- `src/lib/server/questions.ts` - Contains ~300 "Most likely to..." questions. Edit here to add/modify questions.
- `src/routes/api/question/+server.ts` - API endpoint that returns random questions. Simple implementation using Math.random().
- `src/routes/+page.svelte` - Main page that fetches initial question and handles "See next" functionality.
- `package.json` - Specifies Node 22.x for the production environment.

### Working with Questions

- Questions are stored as a simple exported array in `src/lib/server/questions.ts`
- To add questions: Edit the questions array and restart dev server
- API randomly selects from array using `Math.floor(Math.random() * (max - min + 1) + min)`

### Styling and UI

- Uses CSS custom properties for theming (--color-orange, --color-text-dark)
- Responsive design with mobile-first approach
- Button has active state animation (shadow effect)
- Card component has fixed max dimensions for consistency

### Configuration Files

- `.eslintrc.cjs` - ESLint config for TypeScript and Svelte
- `.prettierrc` - Code formatting (uses tabs, single quotes)
- `svelte.config.js` - SvelteKit config with Vercel adapter
- `playwright.config.ts` - E2E test configuration
- `vite.config.ts` - Build tool configuration

## Troubleshooting

### Common Issues

- **Dependency updates**: Run `npm install` when package.json changes
- **Cache issues**: Clear npm cache with `npm cache clean --force` if installation issues occur
- **Port conflicts**: Default dev server runs on port 5173, change in vite.config.ts if needed
- **ESLint warnings**: May show unused variable warnings - these are acceptable

### Development Workflow

1. Make code changes
2. Verify dev server auto-reloads properly
3. Run tests to ensure functionality: `npm run test` and `npm run test:unit`
4. Run `npm run lint` and `npm run format`
5. Build for production: `npm run build`
6. Commit changes

### Best Practices

- Always test your changes both in development and with a production build
- Use TypeScript checking with `npm run check` before committing
- Follow the existing code style and formatting conventions
- Test both desktop and mobile responsive layouts
- Verify API endpoints work correctly with manual testing
