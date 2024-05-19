import { data } from "./date.js"
import { container } from "./refs.js"
import { renderMarkup } from "./renderMarkup.js"

document.addEventListener('DOMContentLoaded', renderPage)

function renderPage(event){
    renderMarkup(container, data)
}
