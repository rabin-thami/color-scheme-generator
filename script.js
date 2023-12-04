const notification = document.querySelector("#notification");
const btnContainer = document.querySelector(".color-palette")
const notificationMessage = document.querySelector("#notificationMessage");
const form = document.querySelector("form")
let userColor = document.querySelector("#userColor")

btnContainer.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'button') {
        let colorCode = e.target.querySelector("span").textContent;
        notificationMessage.textContent = `Color ${colorCode} copied to your clipboard`;
        notification.classList.add('visible');

        setTimeout(() => {
            notification.classList.remove('visible');
        }, 3000);
    }
});


form.addEventListener('submit', getColorSchema)

function getColorSchema(e) {
    e && e.preventDefault()
    let cleanColor = userColor.value.substring(1)

    
    fetch(`https://www.thecolorapi.com/scheme?hex=${cleanColor}&count=6`)
    .then( res => res.json())
    .then( data => {
            btnContainer.innerHTML = ""
            data.colors.forEach((color) => renderColor(color.hex.value))
        })
}

getColorSchema()

function renderColor(color) {

    const colorBtn = document.createElement("button");
    colorBtn.style.backgroundColor = color;

    const icon = document.createElement('i');
    icon.className = "fa-regular fa-copy";

    const colorName = document.createElement("span");
    colorName.textContent = color;

    colorBtn.addEventListener("click", () => copyToClipboard(color))

    colorBtn.appendChild(icon);
    colorBtn.appendChild(colorName);
    
    btnContainer.appendChild(colorBtn);
}


function copyToClipboard(color) {
    navigator.clipboard.writeText(color)
}



