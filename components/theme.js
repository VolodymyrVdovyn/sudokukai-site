const themeStorageKey = "sudokukai-theme";
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");

function getUrlTheme() {
  const theme = new URLSearchParams(window.location.search).get("theme");
  return theme === "light" || theme === "dark" ? theme : null;
}

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(themeStorageKey);
    return storedTheme === "light" || storedTheme === "dark"
      ? storedTheme
      : null;
  } catch {
    return null;
  }
}

function getTheme() {
  return (
    getUrlTheme() ??
    getStoredTheme() ??
    (systemTheme.matches ? "dark" : "light")
  );
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  document
    .querySelectorAll('meta[name="theme-color"]')
    .forEach((meta) =>
      meta.setAttribute("content", theme === "dark" ? "#000000" : "#ffffff"),
    );
  document.querySelectorAll("[data-theme-icon]").forEach((icon) => {
    icon.media = icon.dataset.themeIcon === theme ? "all" : "not all";
  });
  document.dispatchEvent(
    new CustomEvent("sudokukai-theme-change", { detail: theme }),
  );
}

const urlTheme = getUrlTheme();

if (urlTheme !== null) {
  try {
    localStorage.setItem(themeStorageKey, urlTheme);
  } catch {
    // The URL theme still applies if storage is unavailable.
  }
}

applyTheme(getTheme());

systemTheme.addEventListener("change", () => {
  if (getStoredTheme() === null) {
    applyTheme(getTheme());
  }
});

class SudokukaiThemeToggle extends HTMLElement {
  connectedCallback() {
    this.render(getTheme());
    this.addEventListener("click", this.toggleTheme);
    document.addEventListener("sudokukai-theme-change", this.handleThemeChange);
  }

  disconnectedCallback() {
    this.removeEventListener("click", this.toggleTheme);
    document.removeEventListener("sudokukai-theme-change", this.handleThemeChange);
  }

  handleThemeChange = (event) => {
    this.render(event.detail);
  };

  toggleTheme = () => {
    const theme =
      document.documentElement.dataset.theme === "dark" ? "light" : "dark";

    try {
      localStorage.setItem(themeStorageKey, theme);
    } catch {
      // The selected theme still applies for this page if storage is unavailable.
    }

    applyTheme(theme);
  };

  render(theme) {
    const isDark = theme === "dark";
    const nextTheme = isDark ? "light" : "dark";
    const icon = isDark
      ? '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"></path>'
      : '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z"></path>';

    this.innerHTML = `
      <button
        class="theme-toggle"
        type="button"
        aria-label="Switch to ${nextTheme} theme"
        title="Switch to ${nextTheme} theme"
      >
        <svg aria-hidden="true" viewBox="0 0 24 24">${icon}</svg>
      </button>
    `;
  }
}

customElements.define("sudokukai-theme-toggle", SudokukaiThemeToggle);
