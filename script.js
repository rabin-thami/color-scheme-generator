const getColorButton = document.querySelector("#getColor");
let firstColor = document.querySelector("#first");
let secondColor = document.querySelector("#second");
let thirdColor = document.querySelector("#third");
let forthColor = document.querySelector("#forth");
let fifthColor = document.querySelector("#fifth");

getColorButton.addEventListener('click', () => {
    const colorCode = document.querySelector("#colorCode").value.substring(1);
    const colorMode = document.querySelector("#colorMode").value;
    
    // Corrected URL string with proper interpolation
    const apiUrl = `https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${colorMode}&count=5`;

    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            let colorAry = data.colors;

            // Loop through colors and set background colors to corresponding elements
            for (let i = 0; i < colorAry.length && i < 5; i++) {
                const colorValue = colorAry[i].hex.value;

                // Set background color based on index
                switch (i) {
                    case 0:
                        firstColor.style.backgroundColor = colorValue;
                        break;
                    case 1:
                        secondColor.style.backgroundColor = colorValue;
                        break;
                    case 2:
                        thirdColor.style.backgroundColor = colorValue;
                        break;
                    case 3:
                        forthColor.style.backgroundColor = colorValue;
                        break;
                    case 4:
                        fifthColor.style.backgroundColor = colorValue;
                        break;
                    // Additional cases if you have more colors or elements
                }
            }
        });
});
