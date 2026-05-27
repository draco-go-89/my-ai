# TODO_UI_REDESIGN

## Goal
Rebuild the frontend UI with a sidebar + new composer (multi-line textarea).

## Planned steps
1) Update `public/index.html` to new layout:
   - Sidebar (`#sidebar`)
   - Main chat panel (`#chatPanel`)
   - Composer uses `<textarea id="textInput">`.

2) Update `public/styles.css`:
   - Sidebar styling
   - Two-column responsive layout
   - Composer/input styling

3) Update `public/script.js`:
   - Update DOM selectors to match new structure
   - Ensure submit works with textarea
   - Keep current loading/disabled send UX

4) Sanity test:
   - Send message
   - Verify messages append
   - Verify loading state
   - Verify API reply appears

## Completion criteria
- Page loads with redesigned UI
- Messages render correctly
- `/api/chat` replies show in UI

