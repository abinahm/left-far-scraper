# left-far-scraper
A tiny browser console snippet that grabs the text of every `span.left-far` element on the page and copies it to your clipboard as a comma-separated list.

# Use case
I used this to extract titles from sections to complete my work.

## Notes

- `copy()` is a DevTools console utility, so this only works when run from the console, not from a regular page script.
- If the page loads content dynamically, make sure everything has finished loading before running the snippet.
- If nothing is copied, check that the selector matches elements on the page.
