document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});


function btn() {
    window.location.href = "https://drive.google.com/file/d/1efEtBpOqzFDzr5rlAROVbmzIKeKOXjGV/view?usp=sharing";
}

function youtube_net() {
    window.location.href = "https://glittery-beignet-9dc8da.netlify.app/";
}
function youtube_git() {
    window.location.href = "https://github.com/rahulgupta752489/Youtube";
}

function hotstar_net() {
    window.location.href = "https://ornate-churros-c06c1e.netlify.app/";
}
function hotstar_git() {
    window.location.href = "https://github.com/rahulgupta752489/Hotstar";
}

function gif_net() {
    window.location.href = "https://spectacular-starship-cf6a8c.netlify.app/";
}
function gif_git() {
    window.location.href = "https://github.com/rahulgupta752489/Giphy";
}