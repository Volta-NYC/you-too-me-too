# You Too Me Too Styling Boutique website

This is a bespoke website draft for You Too Me Too Styling Boutique in Flushing, Queens. It must feel like this business: expressive, personal, eclectic, bilingual, and rooted in its bright pink Main Street storefront.

- Keep verified business information centralized in `src/lib/site.ts`.
- Do not invent prices, inventory availability, appointment policies, rentals, alterations, brands, or custom-service details.
- Use only authentic business photography with documented provenance. Before production launch, the client must confirm permission to publish the local copies in `public/images`.
- Maintain the purposeful multi-page experience, sticky accessible navigation, complete footer, route metadata, and reduced-motion-safe animation.
- Keep the visible `Made by Novus` footer link pointing to `https://novusnyc.org`.
- Do not use em dashes or inappropriate leading zeroes in visible copy.
- `AGENTS.md` and `CLAUDE.md` are canonical mirrors. Whenever either changes, update both identically in the same change.

## Verification baseline

Run `npm run lint`, `npm run typecheck`, and `npm run build`. Verify the home page plus every route at desktop and mobile widths, check the menu and external links, inspect for horizontal overflow and console errors, and confirm images have useful alt text.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
