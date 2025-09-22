// Navigation
const links = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('main section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = link.getAttribute('data-section');
    sections.forEach(sec => sec.classList.remove('active'));
    document.getElementById(target).classList.add('active');
    window.scrollTo({ top:0, behavior: 'smooth' });
  });
});

// Load Artists dynamically
async function loadArtists() {
  try {
    const res = await fetch('artists.json');
    const data = await res.json();
    const artistList = document.getElementById('artist-list');
    artistList.innerHTML = ''; // Clear previous
    data.forEach(artist => {
      const card = document.createElement('div');
      card.classList.add('artist-card');
      card.innerHTML = `
        <img src="${artist.photo}" alt="${artist.name}">
        <h3>${artist.name}</h3>
        <p>${artist.bio}</p>
      `;
      artistList.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading artists:', err);
  }
}

// Load News dynamically
async function loadNews() {
  try {
    const res = await fetch('news.json');
    const data = await res.json();
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = ''; // Clear previous
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('news-card');
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h4>${item.title}</h4>
        <p>${item.description}</p>
      `;
      newsList.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading news:', err);
  }
}

// Initial load
loadArtists();
loadNews();

// Signup Form Alert
const form = document.getElementById('signup-form');
form.addEventListener('submit', (e) => {
  alert('Thank you for signing up! Your submission will be saved.');
});
