# Authentication Take Home

## Technologies Used
- React + TypeScript
- Vite
- Mantine UI (`@mantine/core`, `@mantine/form`, `@mantine/hooks`)
- Vitest + React Testing Library (unit tests)

## Setup / Install
\`\`\`bash
npm install
\`\`\`

## Running Locally
\`\`\`bash
npm run dev
\`\`\`
App runs at http://localhost:5173

## Running Tests
\`\`\`bash
npm run test
\`\`\`

## Mock User Credentials / Roles
| Email | Password | Role |
|---|---|---|
| admin@example.com | Admin123 | Read/Write |
| viewer@example.com | Viewer123 | Read-only |

## How to Test the Login/MFA Flow
1. Go to the login screen, enter one of the mock credentials above.
2. On success, you'll be taken to the MFA screen. Enter the code shown on screen: `123456`.
3. On success, you land on the Protected Dashboard.
4. Log in as `admin@example.com` to see the Edit button enabled; log in as `viewer@example.com` to see it disabled.
5. Try invalid email/password combos to see field-level and form-level error messages.
6. From the login screen, click "Sign up" to see the mock registration screen (does not create a real account).

## Key Design Decisions and Assumptions
- Used local component state (`useState` in `App.tsx`) instead of a router/global context, since the app is just a series of linear screens.
- MFA is a static mock OTP (`123456`) displayed on-screen, rather than an actual emailed/SMS code, since no backend is required.
- Two hardcoded mock users represent the two roles; there's no real authentication or persistence.
- Read/write access control is demonstrated by disabling (not hiding) the Edit button for read-only users, per the assignment's "hidden or disabled" wording.
- Form validation (email format, password length/complexity) runs client-side via `@mantine/form`.

## Known Limitations
- No real backend/auth, credentials are hardcoded in the client.
- Sign-up form is only a placeholder screen.
- MFA code is static rather than dynamically generated/expiring.
- No session persistence.
- No server validation for form inputs.

## AI Usage
I used Claude (Anthropic) to help write the mock auth/MFA logic, generate the unit tests, and write up the README, but provided the initial scaffolding code for both the form submission logic and the UI, as well as edited it after it was generated. I reviewed and understood all code before submitting.
