# 📁 Week-6: Frontend Web Layouts, Flexbox, CSS Grid & Responsive Designs

This directory contains three progressive hands-on projects designed to build high-performance, visually premium static layouts using semantic **HTML5** and responsive **CSS3**. These exercises focus on modern layout systems like CSS Flexbox, Grid alignments, nested component architectures, custom styling parameters, and responsive design systems.

---

## 📂 Project Structure & Layout Breakdowns

The folder contains three separate hands-on layout directories:

### 1. 📁 [handson-1/](file:///Users/alampallypraneeth/week-1/week-1-1/Week-6/handson-1)
* **Goal**: Build a standard, grid-based multi-column marketing landing page structure.
* **Component Features**:
  - **Hero Navigation Bar (`<nav>`)**: Contains high-visibility text, descriptive paragraph headers, and an absolute styled CTA button (`Learn_more>>`).
  - **Data Card Grid (`<main class="data">`)**: Features a **three-column responsive grid layout** containing `<section>` elements. Each section is designed with matching headings, descriptive details, and structural buttons (`View Details>>`).
* **Core Styling**: Flex direction wraps, element spacing, and button hover states.

### 2. 📁 [handson-2/](file:///Users/alampallypraneeth/week-1/week-1-1/Week-6/handson-2)
* **Goal**: Build a premium documentation structure utilizing absolute base64 graphic embeds and clean card grids.
* **Component Features**:
  - **Header Panel (`<div class="head">`)**: Incorporates a descriptive heading (`libraries*>`) alongside standard nested introduction cards.
  - **Base64 Image Integration**: Directly renders visual assets inline utilizing base64 URI strings (`<img src="data:image/jpeg;base64,...">`).
  - **Informational Section (`<section class="info-section">`)**: Features a robust, structured **three-column layout** using custom `.card` containers with clean typography and balanced paddings.

### 3. 📁 [handson-3/](file:///Users/alampallypraneeth/week-1/week-1-1/Week-6/handson-3)
* **Goal**: Build a highly polished, responsive mountain-themed tourism landing page.
* **Component Features**:
  - **Hero Jumbotron Header (`<section class="header">`)**: Sets up a stunning mountain landscape background overlay, large bold typography (`<h1>`), and a modern centered search button (`Discover`).
  - **Split Section (`.outdoor`)**: A dual-column layout dividing space between descriptive marketing text and a beautiful embedded landscape graphic.
  - **Tourism Activity Grid (`.grid`)**: A highly styled **five-column grid container** mapping out outdoor activities (Trekking, Kayaking, Skiing, Navigation, Backpacking) using custom SVG/color icons and centered captions.
  - **Navigation Category Tabs (`.tabs`)**: Implements inline selector options (e.g., active category filters) styled with highlighted active borders.

---

## 🎨 Layout Mechanics & CSS Standards

These hands-on designs showcase the implementation of essential responsive web principles:

```
            Flexbox Layout                          CSS Grid Layout
      ┌─────────────────────────┐             ┌──────────────┬──────────────┐
      │  ┌──────┐ ┌──────┐      │             │  Column 1    │  Column 2    │
      │  │ Card │ │ Card │ ...  │             ├──────────────┼──────────────┤
      │  └──────┘ └──────┘      │             │  Column 3    │  Column 4    │
      └─────────────────────────┘             └──────────────┴──────────────┘
       - Great for 1D distribution             - Great for 2D structured grids
       - Responsive wrapping (flex-wrap)      - Rigid, aligning card shapes
```

* **Dynamic Sizing**: Uses relative units (`%`, `em`, `rem`, `vh`, `vw`) rather than absolute pixels to allow layouts to scale fluidly across viewports.
* **Margin & Padding Architectures**: Adheres to modern visual layout standards, using balanced paddings, hover animations on CTA elements, and clean font pairings (such as Google Fonts).

---

## 🚀 How to View Locally

You can view these visual layouts directly inside your web browser without running any servers:

1. **Locate the path of the target `index.html` file** (e.g., `handson-3`):
   `/Users/alampallypraneeth/week-1/week-1-1/Week-6/handson-3/index.html`

2. **Open the file in your preferred web browser** (Chrome, Safari, Firefox, Edge).
   - Alternatively, you can use terminal utilities to open them directly:
     ```bash
     # On macOS
     open /Users/alampallypraneeth/week-1/week-1-1/Week-6/handson-3/index.html
     ```

---

> [!TIP]
> Try opening your browser's Developer Tools (`Cmd + Option + I` on Mac) and switching to Device Mode to observe the responsive wrapping and adjustments as the screen width scales!
