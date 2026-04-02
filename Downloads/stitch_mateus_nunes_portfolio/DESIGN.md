# Design System Document

## 1. Overview & Creative North Star: "The Neon Luminary"
This design system is built to transform a developer's portfolio from a static resume into a high-end editorial experience. Our Creative North Star is **"The Neon Luminary"**—a concept that treats code as art and the interface as a dark gallery. 

To break the "standard template" feel, this system rejects rigid, boxed-in grids in favor of intentional asymmetry and tonal depth. We use high-contrast neon accents against a "Vantablack" void, employing overlapping elements and varying typography scales to guide the eye. This is not just a UI; it is a curated digital environment where depth is felt through light and shadow rather than lines.

---

## 2. Colors
Our palette is rooted in deep obsidian tones, punctuated by vibrant violet energy. It relies on a sophisticated hierarchy of dark surfaces to create structure without visual noise.

### Palette Strategy
- **Background (`#0e0e0e`)**: The canvas. A near-pure black that provides the highest possible contrast for text and neon accents.
- **Primary (`#d095ff`) & Secondary (`#ea9bff`)**: These are your "light sources." Use them for active states, key interactive highlights, and branding elements.
- **Surface Hierarchy**:
    - **Surface Container Lowest (`#000000`)**: Used for background "voids" or deep inset areas.
    - **Surface Container (`#1a1a1a`)**: The standard card surface.
    - **Surface Container High (`#20201f`)**: Used for hovered states or elevated cards.

### The "No-Line" Rule
**Prohibit 1px solid borders for sectioning.** Traditional borders clutter the high-end aesthetic. Boundaries must be defined solely through background color shifts. If a section needs to be separated from the background, use a transition from `surface` to `surface-container-low`.

### The "Glass & Gradient" Rule
To add "soul" to the interface, avoid flat primary colors on large surfaces. Main CTAs and Hero accents should use a subtle linear gradient transitioning from `primary` (`#d095ff`) to `primary-container` (`#c782ff`). Floating navigation or transient panels should utilize Glassmorphism: semi-transparent surface colors with a `backdrop-blur` of 12px–20px to let the underlying neon glows bleed through.

---

## 3. Typography
We use **Inter** for its mathematical precision and neutral character, allowing the layout's "editorial" nature to shine.

- **Display Scale (`display-lg` to `display-sm`)**: Reserved for hero headers. Use these at a massive scale with tighter letter-spacing (-0.02em) to create an authoritative, "magazine-style" feel.
- **Headline Scale**: Used for section titles. Ensure these have ample vertical breathing room (using `spacing-24`).
- **Body Scale**: 
    - `body-lg` (1rem) in `on-surface` (White) for primary content.
    - `body-md` (0.875rem) in `on-surface-variant` (Muted Grey) for descriptions and secondary metadata.
- **Label Scale**: Used for technical tags and small UI metadata. Always uppercase with slight letter-spacing for a "technical" look.

---

## 4. Elevation & Depth
In this system, depth is achieved through **Tonal Layering** rather than structural lines.

- **The Layering Principle**: Stack surface tiers to create "lift." A `surface-container` card placed on a `surface` background provides a soft, natural elevation. For nested content (like a code snippet inside a project card), use `surface-container-low` to create an "etched" look.
- **Ambient Shadows**: Shadows are "dark light." When a floating effect is required, use extra-diffused shadows with 4%-8% opacity. The shadow color should be a deep purple tint (derived from `on-secondary-container`) rather than grey, making the element feel like it's hovering over a glowing base.
- **The "Ghost Border" Fallback**: If a border is required for accessibility, use the `outline-variant` token at **20% opacity**. This creates a "whisper" of a boundary that appears only when the eye seeks it.
- **Glow-morphism**: For high-priority elements like "Featured Projects," apply a subtle outer glow using the `primary-dim` color. This simulates a neon tube effect, reinforcing the developer's tech-forward identity.

---

## 5. Components

### Buttons
- **Primary**: Gradient fill (`primary` to `primary-container`), white text, `rounded-md`. On hover, increase the "glow" (shadow) intensity.
- **Secondary**: Ghost style. `outline-variant` ghost border (20% opacity) with `primary` text.
- **Tertiary**: Text-only with an animated underline on hover.

### Cards & Experience Timelines
- **Cards**: Use `surface-container` with `rounded-md` (12px). **Never use divider lines.** Separate internal card content using vertical white space (`spacing-4` or `spacing-6`).
- **Experience Timeline**: Use a 2px vertical track in `surface-variant`. The nodes (points in time) should be glowing `primary` circles. Overlapping the dates slightly over the track creates the "Editorial" look.

### Chips (Tech Stack Tags)
- Small, `rounded-full` containers.
- Background: `secondary-container` at 30% opacity.
- Text: `secondary` (`#ea9bff`).
- This creates a high-contrast, "UI-as-data" aesthetic visible in professional developer tools.

### Inputs & Fields
- **Surface**: `surface-container-lowest` (pure black) to create a "hole" in the `surface-container` card.
- **Active State**: The bottom border animates into a `primary` glow.

---

## 6. Do's and Don'ts

### Do
- **Do** use asymmetrical margins. If the left margin is `spacing-10`, try a right margin of `spacing-20` for hero sections to create visual tension.
- **Do** use `primary` sparingly. It is a highlighter, not a paint bucket.
- **Do** prioritize readability. Ensure `on-surface-variant` (muted text) still meets WCAG AA standards against the `surface` background.

### Don'ts
- **Don't** use 100% opaque white borders. They break the "Neon" immersion and feel "out-of-the-box."
- **Don't** use standard drop shadows (e.g., `#000000` at 25%). They are invisible on a black background. Use tonal shadows or glows instead.
- **Don't** crowd the interface. If a section feels "busy," increase the vertical spacing using `spacing-20` or `spacing-24`.