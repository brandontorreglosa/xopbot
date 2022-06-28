var a = document.getElementById("a-load");
a.style.display = "none";
setTimeout(() => {
    const l = document.getElementById("loader");
    l.style.display = "none";
    a.style.display = "block";
}, 3000);