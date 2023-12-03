const form = document.querySelector("form")
const colorEl = document.querySelector("#colorInput")
const colorMode = document.querySelector("#colorMode")
const renderColorContainer = document.querySelector("#renderColorContainer")

form.addEventListener("submit", getColorSchema)

function getColorSchema(e) {
    e && e.preventDefault()

    let cleanColorHax = colorEl.value.substring(1)
    console.log(cleanColorHax);

    fetch (`https://www.thecolorapi.com/scheme?hex=${cleanColorHax}&mode=${colorMode.value}&count=5`)
        .then (res => res.json())
        .then (data => {
            // console.log(data)
            renderColorContainer.innerHTML = ""
            data.colors.forEach((color) => renderColors(color.hex.value))
        })
}

getColorSchema()
function renderColors(color) {
    const btn = document.createElement("button")   
    btn.style.background = color
    btn.addEventListener("click", () => copyToClipboard(color))
    
    const p = document.createElement("p")
    p.textContent = color
    
    btn.appendChild(p)
    renderColorContainer.appendChild(btn)

}


function copyToClipboard(color) {    
    navigator.clipboard.writeText(color) // only work with https otherwise throws error
    alert(`Yay!🥳 copied the color: ${color}`)
}