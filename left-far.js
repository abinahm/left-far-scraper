const fields = [...document.querySelectorAll("span.left-far")]
    .map(el => el.textContent.trim())
    .filter(Boolean);

copy(fields.join(", "));

console.log(fields.join(", "));