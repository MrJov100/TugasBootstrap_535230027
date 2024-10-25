document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".portfolio-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});

document
  .getElementById("joinForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;

    Swal.fire({
      icon: "success",
      title: "Success!",
      text: `You've successfully joined the community with the email: ${email}`,
      confirmButtonText: "OK",
    });

    document.getElementById("joinForm").reset();
  });

function filterGallery() {
  const filter = document.getElementById("categoryFilter").value;
  const items = document.querySelectorAll("#gallery .col-md-4");

  items.forEach((item) => {
    if (filter === "all") {
      item.classList.remove("hidden");
    } else {
      item.classList.toggle(
        "hidden",
        !item.classList.contains("category-" + filter)
      );
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const portfolioImages = document.querySelectorAll(".portfolio-card img");

  portfolioImages.forEach((image) => {
    image.addEventListener("click", function () {
      const modalImage = document.getElementById("modalImage");
      modalImage.src = this.src;
      const imageModal = new bootstrap.Modal(
        document.getElementById("imageModal")
      );
      imageModal.show();
    });
  });
});

function openModal(element) {
  var modalImage = document.getElementById("modalImage");
  modalImage.src = element.src;
}
