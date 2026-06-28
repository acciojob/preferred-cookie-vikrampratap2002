function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/`;
}

function getCookie(name) {
    let cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        let [key, value] = cookie.trim().split("=");

        if (key === name) {
            return value;
        }
    }

    return null;
}

function applyPreferences() {
    let savedSize = getCookie("fontsize");
    let savedColor = getCookie("fontcolor");

    if (savedSize) {
        document.documentElement.style.setProperty("--fontsize", savedSize);
        document.getElementById("fontsize").value = parseInt(savedSize);
    }

    if (savedColor) {
        document.documentElement.style.setProperty("--fontcolor", savedColor);
        document.getElementById("fontcolor").value = savedColor;
    }
}

applyPreferences();

document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let size = document.getElementById("fontsize").value + "px";
    let color = document.getElementById("fontcolor").value;

    setCookie("fontsize", size);
    setCookie("fontcolor", color);

    document.documentElement.style.setProperty("--fontsize", size);
    document.documentElement.style.setProperty("--fontcolor", color);
});