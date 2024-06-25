/*======= menu icon navbar =======*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*======= scroll section active link =======*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if(top >= offset && top < offset + height) {
          navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });

      };
    });


/*======= sticky navbar =======*/
let header = document.querySelector('.header');

header.classList.toggle('sticky', window.scrollY > 100);

/*======= remove menu icon navbar when click navbar link =======*/
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};



/*======= swiper =======*/

var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 50,
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


/*========== dark light mode ===========*/
let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
};



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const emailSubject = document.getElementById("subject");
const yourMessage = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${emailAddress.value}<br> Phone Number: ${phoneNumber.value}<br> Your Message: ${yourMessage.value}<br>`;

  Email.send({
    SecureToken: "5f1ede72-c19b-48bf-856d-d7d189ed9212",
    Username: "danielmule638@gmail.com",
    Password: "869C51711724EFAE62640695D3CB08039E47",
    To: "danielmule638@gmail.com",
    From: "danielmule638@gmail.com",
    Subject: emailSubject.value,
    Body: bodyMessage,
  }).then((message) => {
    if (message == "OK") {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  });
}

function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
  const errorTextEmail = document.querySelector(".error-text.email");

  if (!emailAddress.value.match(emailRegex)) {
    emailAddress.classList.add("error");
    emailAddress.parentElement.classList.add("error");

    if (emailAddress.value != "") {
      errorTextEmail.innerText = "Enter a valid email address!";
    } else {
      errorTextEmail.innerText = "Email Address can't be blank!";
    }
  } else {
    emailAddress.classList.remove("error");
    emailAddress.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();

  if (
    !fullName.classList.contains("error") &&
    !emailAddress.classList.contains("error") &&
    !phoneNumber.classList.contains("error") &&
    !emailSubject.classList.contains("error") &&
    !yourMessage.classList.contains("error")
  ) {
    sendEmail();

    form.reset();
    return false;
  }
});
