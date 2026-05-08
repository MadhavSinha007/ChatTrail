# ChatTrail

A lightweight browser extension that helps you bookmark, search, organize, and revisit AI chat prompts across platforms like ChatGPT, Gemini, and Claude — without interrupting your workflow.

---

# Features

## Smart Prompt Bookmarking
- Automatically saves prompts in real-time
- No manual bookmarking required
- Stores data locally for privacy and speed

## Fast Navigation
- Instantly search through saved prompts
- Click any bookmark to jump directly to the message
- Smooth conversation navigation for long chats

## Productivity Tools
- Star important prompts for quick access
- Per-conversation memory and auto-save support
- Keyboard shortcut support: `Alt + B`

## Minimal UI
- Transparent, floating sidebar
- Non-intrusive design built for focus
- Smooth collapsible interface (`>` / `<`)

---

# Design Philosophy

ChatTrail is designed to stay out of your way while making long AI conversations easier to manage.

### Core Principles
- Lightweight and fast
- Minimal and distraction-free
- Works automatically with zero setup
- Built for power users and long-form conversations

---

# Supported Browsers

## Chromium-Based Browsers
- Google Chrome
- Microsoft Edge
- Brave
- Opera
- Vivaldi
- Arc

## Firefox-Based Browsers
- Mozilla Firefox
- LibreWolf
- Waterfox

---

# Installation

## Clone the Repository

```bash
git clone <repo-link>
cd ChatTrail
```

---

# Build the Extension

```bash
node build.js
```

## Remove the Build

```bash
node unbuild.js
```

---

# Load the Extension

## Chrome / Brave / Edge

1. Open:
   ```txt
   chrome://extensions
   ```

2. Enable **Developer Mode** (top-right)

3. Click **Load unpacked**

4. Select:
   ```txt
   ChatTrail/dist/chrome
   ```

### Important
Do NOT select:
- `src/`
- `manifests/`

Only load the `dist/chrome` folder.

---

## Firefox

1. Open:
   ```txt
   about:debugging#/runtime/this-firefox
   ```

2. Click **Load Temporary Add-on**

3. Select:
   ```txt
   ChatTrail/dist/firefox/manifest.json
   ```

---

# Project Structure

```txt
ChatTrail/
├── build.js
├── unbuild.js
├── manifests/
│   ├── chrome.json
│   └── firefox.json
│
├── src/
│   ├── content.js
│   ├── sidebar.css
│   └── icons/
│
├── dist/
│   ├── chrome/
│   └── firefox/
│
├── README.md
└── PRIVACY_POLICY.md
```

---

# Why ChatTrail?

AI chats are becoming longer, denser, and harder to navigate. ChatTrail solves this by giving you a lightweight memory layer for your conversations — making it easier to revisit important prompts, ideas, and responses instantly.

---

# Privacy

- All bookmarks are stored locally
- No external servers
- No account required
- No tracking

---

# Future Improvements

- Export/import bookmarks
- Prompt tagging system
- Sync support
- Cross-device backup
- Theme customization

---

# License

MIT License