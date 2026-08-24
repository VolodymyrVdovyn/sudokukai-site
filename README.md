# Sudokukai site

Official website for the Sudokukai mobile app, hosted with GitHub Pages.

It provides:

- an overview of Sudokukai;
- support and publisher information; and
- the current Privacy Policy for the mobile app.

Sudokukai is an offline-first Sudoku game for iOS and Android.

## Public pages

- [Sudokukai](https://volodymyrvdovyn.github.io/sudokukai-site/)
- [Privacy Policy](https://volodymyrvdovyn.github.io/sudokukai-site/privacy/)
- [Support](https://volodymyrvdovyn.github.io/sudokukai-site/support/)

The site is static. It uses small JavaScript web components for the shared
header and footer and contains no forms or cookies.

GitHub Pages serves the checked-in static files from the repository. Pushing
changes to the configured publishing branch can therefore update the public
site; review local changes before pushing them.

## Opening pages from the mobile app

Pass the app's active theme in the page URL so Support and Privacy match the
app immediately:

- `https://volodymyrvdovyn.github.io/sudokukai-site/support/?theme=light`
- `https://volodymyrvdovyn.github.io/sudokukai-site/privacy/?theme=dark`

Only `light` and `dark` are accepted. The URL value takes precedence over a
previous website preference and is saved for navigation between site pages.
