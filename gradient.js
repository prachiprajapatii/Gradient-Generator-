        let btn1 = document.getElementById("btn1");
        let btn2 = document.getElementById("btn2");
        let copyText = document.querySelector(".ctn-2 p");
        let copy = document.querySelector(".ctn-2");
        let rgb1 = "#000";
        let rgb2 = "#fff";

        const copytext = () => {
            const textToCopy = copyText.innerText;
            navigator.clipboard.writeText(textToCopy)
            alert("Copied the text: " + textToCopy);
        };



        const hexValues = () => {
            let hexaValue = "0123456789abcdef";
            let colors = "#";
            for (let i = 0; i < 6; i++) {
                colors = colors + hexaValue[Math.floor(Math.random() * 16)];
            }
            return colors;
        };

        const gradient = () => {
            document.querySelector(".container").style.backgroundImage =
                `linear-gradient(to right,${rgb1},${rgb2})`;
            copyText.innerHTML = `background-image: linear-gradient(to right, ${rgb1},${rgb2})`;
        };

        const handlebtn1 = () => {
            rgb1 = hexValues();
            console.log(rgb1);
            btn1.innerText = rgb1;
            btn1.style.backgroundColor = rgb1;
            btn1.style.color = "#fff";
            gradient();

        };

        const handlebtn2 = () => {
            rgb2 = hexValues();
            console.log(rgb2);
            btn2.innerText = rgb2;
            btn2.style.backgroundColor = rgb2;
            btn2.style.color = "#fff";
            gradient();

        };



        btn1.addEventListener("click", handlebtn1);
        btn2.addEventListener("click", handlebtn2);
        copy.addEventListener("click", copytext);
