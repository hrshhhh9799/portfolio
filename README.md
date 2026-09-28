# Harshit Kumawat — Personal Portfolio Website

A modern, responsive, dark-first personal portfolio website built with clean **HTML5**, **CSS3**, and **Vanilla JavaScript**. Designed for **Harshit Kumawat** (19-year-old first-year B.Tech student at JECRC University, aspiring software developer).

---

## 🌟 Key Features

- **Modern Aesthetic:** Dark theme by default with vibrant blue (`#3b82f6`) and purple (`#8b5cf6`) accents, ambient glow effects, and modern card styling.
- **Light / Dark Mode Toggle:** Seamless switch between dark and light modes with user preference saved in `localStorage`.
- **Mobile-First & Fully Responsive:** Tested and optimized for mobile screens, tablets, laptops, and ultra-wide desktops. Includes a mobile drawer menu.
- **Pure Vanilla Web Tech:** Built purely with HTML, CSS, and JavaScript. **No build step, no Node.js, no React, no API keys, and no backend needed.**
- **GitHub Pages Ready:** `index.html` is located directly in the root directory with all relative asset paths (`./styles.css`, `./script.js`, `./assets/...`), ready for instant 1-click deployment.
- **Interactive Elements:**
  - Active section indicator on scroll (Scroll-Spy)
  - Subtle scroll-entrance reveal animations via `IntersectionObserver`
  - Quick-copy email button with interactive feedback
  - Working front-end contact form placeholder

---

## 📂 Project Structure

```text
portfolio/
├── index.html                   # Main webpage entry point (GitHub Pages root)
├── styles.css                   # Custom styling, dark/light variables, responsive media queries
├── script.js                    # Vanilla JS for theme toggle, mobile menu, scroll reveal & copy tool
├── .gitignore                   # Ignores system & IDE files
├── README.md                    # Documentation & GitHub Pages guide
└── assets/                      # Local vector graphics & image assets
    ├── favicon.svg              # Custom HK monogram SVG favicon
    ├── avatar-placeholder.svg   # Modern developer avatar placeholder
    └── project-placeholder.svg  # Sleek project preview mockup graphic
```

---

## 🚀 How to Run Locally

Because this project uses static HTML, CSS, and JS, you do not need any installation:

### Method 1: Direct File Open
Simply double-click `index.html` in your file explorer, or right-click and choose **Open with > Chrome / Edge / Firefox / Safari**.

### Method 2: Python Simple Server (Optional)
If you have Python installed, open terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Method 3: VS Code Live Server
If you use VS Code, install the **Live Server** extension and click **"Go Live"** in the bottom right corner.

---

## ✏️ How to Customize Your Details

Clear `TODO:` comments are included directly inside [index.html](file:///c:/portfolio/index.html) to guide you:

### 1. Adding Your Profile Photo
1. Place your photo (e.g. `harshit.jpg` or `harshit.png`) into the `assets/` folder.
2. In [index.html](file:///c:/portfolio/index.html), search for `avatar-placeholder.svg` and change it to:
   ```html
   <img src="./assets/harshit.jpg" alt="Harshit Kumawat profile visual" width="320" height="320">
   ```

### 2. Updating Social & Contact Links
In [index.html](file:///c:/portfolio/index.html), locate the **Hero** and **Contact** sections and replace `#` with your actual links:
- **GitHub:** `href="https://github.com/your-username"`
- **LinkedIn:** `href="https://linkedin.com/in/your-profile"`
- **Email:** `href="mailto:your.real.email@example.com"`
- **Instagram:** `href="https://instagram.com/your-handle"`
- Also update the text inside the email copy input: `<input ... value="your.real.email@example.com">`.

### 3. Adding or Updating Skills
In the `#skills` section of [index.html](file:///c:/portfolio/index.html), find the category you want to edit and add new pills:
```html
<span class="skill-pill">Your New Skill</span>
```

### 4. Updating Project Cards
In the `#projects` section of [index.html](file:///c:/portfolio/index.html):
- Change `Project Two (In Progress)` to your project's real title.
- Update description, tech stack tags (`<span class="project-tag">...</span>`), and code/demo links (`href="https://github.com/..."`).

---

## 🌐 Publishing to GitHub Pages (Checklist)

Follow these simple steps to make your portfolio live on the internet for free:

1. **Initialize Git & Commit:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Harshit Kumawat portfolio"
   ```

2. **Create a GitHub Repository:**
   - Go to [github.com/new](https://github.com/new).
   - Name your repository (e.g., `portfolio` or `<your-username>.github.io`).
   - Leave it **Public** and do not add a README (you already have one).

3. **Push your code to GitHub:**
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repository-name>.git
   git push -u origin main
   ```

4. **Enable GitHub Pages:**
   - In your GitHub repository, click on **Settings** (top menu).
   - In the left sidebar, click on **Pages** (under the "Code and automation" section).
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.

5. **View your live site!**
   - GitHub Pages will build your site in about 1–2 minutes.
   - Your site URL will be:
     `https://<your-username>.github.io/<repository-name>/`
     *(or `https://<your-username>.github.io` if your repo is named `<your-username>.github.io`)*.

---

## 📄 License & Credits

- Designed and built for **Harshit Kumawat**.
- © 2026 Harshit Kumawat. Built with passion.
