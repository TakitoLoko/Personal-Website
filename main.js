const backToTopButton = document.querySelector("#back-to-top-btn");

homePageContainer = document.getElementById("home-page-container");

homePageContainer.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (homePageContainer.scrollTop > 50) {
        backToTopButton.style.display = "block";
    }
    else {
        backToTopButton.style.display = "none";
    }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
    homePageContainer.scrollTo(0,0);
}