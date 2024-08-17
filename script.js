// Get the modal
var modal = document.getElementById("photo-modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("modal-img");
var galleryItems = document.querySelectorAll(".gallery-item img");

galleryItems.forEach(function(item) {
    item.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src;
    });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// JavaScript for responsive nav
document.getElementById("menu-toggle").addEventListener("click", function() {
  let navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
});
