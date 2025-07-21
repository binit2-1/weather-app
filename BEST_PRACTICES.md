# Best Practices

## Code Organization

- **Separate files by functionality**: Keep different concerns in separate files
- **Use ES6 modules**: Import and export functionality between files
- **Keep functions small**: Each function should do one thing well

## Code Quality

- **Run linting regularly**: Use `npm run lint` to catch errors
- **Format your code**: Use `npm run format` for consistent styling
- **Use meaningful variable names**: `userName` instead of `u` or `data`

## Development Workflow

1. Write your code in the `src/` directory
2. Test locally with `npm start`
3. Lint and format before committing: `npm run lint:fix && npm run format`
4. Build for production with `npm run build`

## File Structure

```
src/
├── index.js      # Main entry point
├── index.html    # HTML template
├── style.css     # Global styles
└── modules/      # Additional modules (create as needed)
```

## Tips

- Keep `index.js` simple - it should primarily import other modules
- Use CSS classes instead of inline styles
- Comment complex logic
- Test your production build before deploying

* **What to do:**
    * **Variables and Functions:** Use names that clearly explain what they do or what they hold.
        * Good: `cityName`, `fetchWeatherData`, `updateDisplay`
        * Bad: `x`, `getData`, `update`
    * **Files:** Name your files based on what they contain.
        * Good: `api.js`, `weatherDisplay.js`, `utils.js`
        * Bad: `stuff.js`, `main.js` (if it's not the actual main entry)
    * **Consistency is Key:**
        * `camelCase` for variables and functions (`myAwesomeFunction`).
        * `PascalCase` for classes (if you use them, `WeatherApp`).
        * `UPPER_SNAKE_CASE` for things that never change (constants, like `API_KEY`).
        * `kebab-case` for CSS classes, HTML IDs, and file names (`weather-card`, `city-input`).

* **Why it helps:**
    * **Readability:** Your code is much easier to understand quickly.
    * **Collaboration:** Others (and your future self!) will thank you.

---

## 4. 💾 Save Your Progress (Git & GitHub)

Think of Git as a super-powered "save" button for your project, and GitHub as a cloud backup and sharing platform.

* **What to do:**
    * **Small, Frequent Saves (Commits):** After you finish a small task or add a new feature, "save" it with Git.
        * `git add .` (Stage all changes)
        * `git commit -m "feat: Add city input field"` (Save with a clear message)
    * **Good Commit Messages:** Your commit message should explain *what* you changed and *why*. Start with a type like `feat:` (new feature), `fix:` (bug fix), `refactor:` (code cleanup), `docs:` (documentation change).
    * **Push to GitHub Often:** After committing, send your changes to GitHub (`git push origin main`). This backs up your work and makes it available to others.

* **Why it helps:**
    * **Safety Net:** You can always go back to an older version of your code if you make a mistake.
    * **Tracking Changes:** You have a history of everything you've done.
    * **Teamwork:** Makes it easy to work with others on the same project.

---

## 5. 🔑 Handle Secrets (Like API Keys) Carefully

Imagine your house key. You wouldn't leave it under the doormat for everyone to find, right? API keys are like keys to special services.

* **What to do:**
    * **NEVER put API keys directly in your client-side JavaScript code** (the code that runs in the user's browser). Anyone can see it!
    * For learning projects with public APIs (like OpenWeatherMap's free tier), sometimes you have to expose the key, but be aware of the risk.
    * **Best way (for real apps):** If you ever build a project with a backend (a server), you'd store API keys there and have your server fetch the data, then send it to your frontend. This keeps the key hidden.

* **Why it helps:**
    * **Security:** Protects your accounts and prevents misuse of services.
    * **Prevents Abuse:** Stops others from using your API key and potentially exceeding your usage limits.

---

## 6. 🚨 Handle Errors Gracefully

Imagine a website that just stops working or shows a blank screen when something goes wrong. That's frustrating! Good apps tell you what happened.

* **What to do:**
    * **Use `try...catch` for API calls:** When you fetch data from an API, always wrap it in a `try...catch` block. This lets you "catch" problems (like no internet, wrong city name, API server down).
    * **Show User-Friendly Messages:** Instead of crashing, display a message like "City not found," "Network error, please try again," or "Something went wrong."
    * **Log Errors:** Use `console.error()` to log detailed error information in the browser's developer console. This helps you debug.

* **Why it helps:**
    * **Better User Experience:** Users understand what's happening and don't get stuck.
    * **Easier Debugging:** You get clear information about what went wrong.

---

## 7. ⚡ Think About Performance

Imagine a slow, clunky app. No one likes that! Fast apps are smooth and enjoyable to use.

* **What to do:**
    * **Only Fetch Data When Needed:** Don't constantly ask the weather API for updates. Only fetch when the user requests it (e.g., clicks a button).
    * **Efficiently Update the Screen:** When you change many things on the screen, try to do it in one go if possible, rather than many tiny changes.
    * **Responsive Design:** Use flexible CSS (like Tailwind's utility classes) so your app looks good on phones, tablets, and computers.

* **Why it helps:**
    * **Faster Loading:** Users get to see your app quickly.
    * **Smooth Experience:** The app feels snappy and responsive.
    * **Saves Resources:** Less data usage for users, less load on servers.

---

## 8. 📝 Document Your Code

Imagine reading a user manual that's missing half its pages. Confusing, right? Good documentation helps everyone.

* **What to do:**
    * **`README.md`:** Keep your main `README.md` file updated with how to run, build, lint, and format your project.
    * **Inline Comments:** Add comments in your JavaScript code to explain complex logic, tricky parts, or why you did something a certain way. Don't comment on *what* the code does if it's obvious, but *why* it does it.
    * **This `BEST_PRACTICES.md` file:** Keep it in your template!

* **Why it helps:**
    * **Clarity:** Helps you remember your own code.
    * **Teamwork:** Makes it easy for others to understand and contribute.
    * **Learning:** Forces you to think clearly about your code.

---

By following these best practices, you'll be well on your way to becoming a skilled and efficient developer! Happy coding!