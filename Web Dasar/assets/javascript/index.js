document.querySelectorAll('.project-image').forEach((image) => {
  image.addEventListener('click', () => {
    openModal(image.src, image.nextElementSibling.innerHTML);
  });
});

let projectDisplayed = false;

function showProject(event, projectId) {
  event.preventDefault();

  const projects = document.querySelectorAll('.project-item');
  projects.forEach((project) => {
    project.style.display = 'none';
  });

  const selectedProject = document.getElementById(projectId);
  if (selectedProject) {
    selectedProject.style.display = 'block';
  }

  const dropbtn = document.querySelector('.dropbtn');
  dropbtn.textContent = `Proyek: ${selectedProject.querySelector('p').textContent.split(':')[0]}`;

  const dropdownContent = document.getElementById('dropdown-content');
  dropdownContent.style.display = 'none';

  projectDisplayed = true;

  dropbtn.style.marginTop = '0';
}

function toggleDropdown() {
  const dropdownContent = document.getElementById('dropdown-content');
  const contact = document.getElementById('kontak-saya');

  if (projectDisplayed) {
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
    return;
  }

  if (dropdownContent.style.display === 'block') {
    dropdownContent.style.display = 'none';
    contact.style.marginTop = '0';
  } else {
    dropdownContent.style.display = 'block';
    contact.style.marginTop = '40px';
  }
}

window.onclick = function (event) {
  const dropdownContent = document.getElementById('dropdown-content');
  const contact = document.getElementById('kontak-saya');

  if (!event.target.matches('.dropbtn')) {
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      contact.style.marginTop = '0';
    }
  }
};

function toggleMenu() {
  const navList = document.querySelector('nav ul');
  const hamburger = document.querySelector('.hamburger');
  navList.classList.toggle('active');
  hamburger.classList.toggle('active');
}

document.querySelectorAll('nav ul li a').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('nav ul');
    menu.classList.remove('active');
  });
});

document.querySelectorAll('nav ul li a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    const offset = 70;
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    const menu = document.querySelector('nav ul');
    menu.classList.remove('active');
  });
});

function goToHome() {
  window.location.href = 'index.html';
}

const projects = {
  proyek1: {
    image: 'assets/image/Proyek1.png',
    alt: 'Smart Door by telegram',
    description: 'Proyek 1: Smart Door by telegram. Mengontrol kunci pintu, buka pintu, cek status pintu, cek status kunci pintu, dan peringatan darurat ketika pintu dibuka paksa.',
  },
  proyek2: {
    image: 'assets/image/proyek2.jpg',
    alt: 'Smart Lamp',
    description: 'Proyek 2: Smart Lamp. Mengontrol 30 lampu meja billiard ketika open table.',
  },
};

function showProject(event, projectId) {
  event.preventDefault();
  const container = document.getElementById('projects-container');
  container.innerHTML = '';

  const project = projects[projectId];
  if (project) {
    const listItem = document.createElement('li');
    listItem.className = 'project-item';

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.alt;
    image.className = 'project-image';

    const description = document.createElement('p');
    description.textContent = project.description;

    listItem.appendChild(image);
    listItem.appendChild(description);
    container.appendChild(listItem);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects-container');
  container.innerHTML = '';
});

let currentSlide = 0;
const images = [
  'assets/image/Photo Jehuda.jpg',
  'assets/image/Photo Jehuda 2.jpg',
];

function changeSlide(direction) {
  currentSlide += direction;

  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  } else if (currentSlide >= images.length) {
    currentSlide = 0;
  }

  document.getElementById('sliderImage').src = images[currentSlide];
}