document.addEventListener("DOMContentLoaded", () => {
    const navbarLinks = document.querySelectorAll(".navbar a");

    navbarLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Prevent default link behavior
            const targetId = link.getAttribute("href").substring(1); // Remove the '#' from the href
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

window.onload = function() {
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext('2d');
    var W = window.innerWidth;
    var H = window.innerHeight;

    canvas.width = W;
    canvas.height = H;

    var fontSize = 16;
    var columns = Math.floor(W / fontSize);
    var drops = [];
    for (var i = 0; i < columns; i++) {
        drops.push(0);
    }

    var str = "JavaScript Hacking Effect";
    function draw() {
        context.fillStyle = "rgba(0, 0, 0, 0.05)";
        context.fillRect(0, 0, W, H);
        context.font = "700 " + fontSize + "px monospace";
        context.fillStyle = "#00cc33";
        for (var i = 0; i < columns; i++) {
            var index = Math.floor(Math.random() * str.length);
            var x = i * fontSize;
            var y = drops[i] * fontSize;
            context.fillText(str[index], x, y);

            // Reset drop to the top randomly
            if (y >= canvas.height && Math.random() > 0.99) {
                drops[i] = 0;
            }
            drops[i]++;
        }
    }
    setInterval(draw, 35);

    // Adjust canvas size when the window is resized
    window.addEventListener('resize', function() {
        W = window.innerWidth;
        H = window.innerHeight;
        canvas.width = W;
        canvas.height = H;
        columns = Math.floor(W / fontSize);
        drops = [];
        for (var i = 0; i < columns; i++) {
            drops.push(0);
        }
    });
};

function downloadCVAndScroll() {
    const link = document.createElement('a');
    link.href = "";
    link.download = 'ArchieFordeCV2025.pdf'; 
    link.click();

    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}


document.getElementById('toggle-about').addEventListener('click', function() {
    var content = document.getElementById('about-content');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        content.classList.add('hidden');
        this.textContent = 'Read More';
    }
});
