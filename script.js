
const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
});

modeSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modeText.innerText = "Light mode";
  } else {
    modeText.innerText = "Dark mode";
  }
});








document.addEventListener('DOMContentLoaded', function() {
  const player = document.querySelector('.player');
  const cover = document.querySelector('.cover');
  const playButton = document.getElementById('play');
  const pauseButton = document.getElementById('pause');
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  const progressBar = document.getElementById('progress-bar');
  const progressContainer = document.getElementById('progress-container');
  const songListElement = document.getElementById('song-list').querySelector('ul');
  const currentTimeElement = document.getElementById('current-time');
  const totalTimeElement = document.getElementById('total-time');

  const songs = [
    {
      title: 'Kangal-Irandal',
      artist: 'Belly Raj, Deepa Mariam, and Deepa Miriam',
      src: './songs/Kangal-Irandal.mp3',
      cover: 'images/kan.jpg'
    },
    {
      title: 'Kadhal-Rojave',
      artist: 'A. R. Rahman',
      src: './songs/Kadhal-Rojave.mp3',
      cover: 'images/kadhal-rojave.jpeg'
    },
    {
      title: 'Thangame',
      artist: 'Anirudh Ravichander',
      src: './songs/Thangame.mp3',
      cover: 'images/thangame.jpg'
    },
    {
      title: 'Yennai-Maatrum-Kadhale',
      artist: 'Anirudh',
      src: './songs/Yennai-Maatrum-Kadhale.mp3',
      cover: 'images/Yennai-Maatrum-Kadhale.jpeg'
    },
    {
      title: 'Mel-Isaiyae',
      artist: 'Swarnalatha and Unni Menon',
      src: './songs/Mel-Isaiyae.mp3',
      cover: 'images/Mel-Isaiyae.jpeg'
    },
    {
      title: 'Kanave-Kanave',
      artist: 'Anirudh Ravichander',
      src: './songs/Kanave-Kanave-MassTamilan.com.mp3',
      cover: 'images/Kanave-Kanave.jpeg'
    },
    {
      title: 'Beat-of-Master',
      artist: 'Anirudh Ravichander',
      src: './songs/Beat-of-Master-(Instrumental)-MassTamilan.io.mp3',
      cover: 'images/Beat-of-Master.jpeg'
    },
    {
      title: 'Andha-Kanna-Paathaakaa',
      artist: 'Anirudh Ravichander',
      src: './songs/Andha-Kanna-Paathaakaa-MassTamilan.io.mp3',
      cover: 'images/Andha-Kanna-Paathaakaa.jpg'
    },
    {
      title: 'Aval',
      artist: 'Kavi Pradeep, Priya Himesh, and Santhosh Narayanan      ',
      src: './songs/Aval.mp3',
      cover: 'images/Aval.jpeg'
    },
    {
      title: 'Arjunar-Villu',
      artist: ' Manikka Vinayagam and Sukhwinder Singh      ',
      src: './songs/Arjunar-Villu.mp3',
      cover: 'images/Arjunar-Villu.jpeg'
    },
    {
      title: 'Bad-Boys-In-The-Block-Tonite',
      artist: 'Hiphop Tamizha',
      src: './songs/Bad-Boys-In-The-Block-Tonite-MassTamilan.io.mp3',
      cover: 'images/Bad-Boys.jpeg'
    },
    {
      title: 'En-Kadhal-Solla',
      artist: 'Tanvi Shah and Yuvan Shankar Raja',
      src: './songs/En-Kadhal-Solla.mp3',
      cover: 'images/En-Kadhal-Solla.jpeg'
    },
    {
      title: 'Ennai-Vittu',
      artist: 'Sid Sriram and Yuvan Shankar Raja      ',
      src: './songs/Ennai-Vittu-MassTamilan.dev.mp3',
      cover: 'images/Ennai-Vittu.jpeg'
    },
    {
      title: 'Maattikkichey-Maattikkichey',
      artist: 'Hiphop Tamizha',
      src: './songs/Maattikkichey-Maattikkichey-MassTamilan.com.mp3',
      cover: 'images/Maattikkichey-Maattikkichey.jpg'
    },
    {
      title: 'Megham-Karukatha',
      artist: 'Anirudh Ravichander and Dhanush      ',
      src: './songs/Megham-Karukatha-MassTamilan.dev.mp3',
      cover: 'images/Megham-Karukatha.jpeg'
    },
    {
      title: 'Naan-Un',
      artist: 'Arijit Singh and Chinmayi      ',
      src: './songs/Naan-Un.mp3',
      cover: 'images/Naan-Un.jpeg'
    },
    {
      title: 'Neeyum-Naanum-Anbe',
      artist: 'Hiphop Tamizha',
      src: './songs/Neeyum-Naanum-Anbe-MassTamilan.com.mp3',
      cover: 'images/Neeyum-Naanum-Anbe.jpeg'
    },
    {
      title: 'Not-Ramaiya-Vastavaiya',
      artist: 'Anirudh Ravichander, Shilpa Rao, and Vishal Dadlani',
      src: './songs/Not-Ramaiya-Vastavaiya-MassTamilan.dev.mp3',
      cover: 'images/Not-Ramaiya-Vastavaiya.jpeg'
    },
    {
      title: 'Otha-Sollaala',
      artist: 'G. V. Prakash Kumar and Velmurugan',
      src: './songs/Otha-Sollaala.mp3',
      cover: 'images/Otha-Sollaala.jpeg'
    },
    {
      title: 'Oxygen',
      artist: 'Hiphop Tamizha',
      src: './songs/Oxygen.mp3',
      cover: 'images/Oxygen.jpeg'
    },
    {
      title: 'Saarattu-Vandiyila',
      artist: 'A. R. Rahman',
      src: './songs/Saarattu-Vandiyila.mp3',
      cover: 'images/Saarattu-Vandiyila.jpeg'
    },
    {
      title: 'Thaiyya-Thaiyya',
      artist: 'Malgudi Subha, Palakkad Sreeram, and Sukhwinder Singh      ',
      src: './songs/Thaiyya-Thaiyya.mp3',
      cover: 'images/Thaiyya-Thaiyya.jpeg'
    },
    {
      title: 'Thuli-Thuli-Mazhaiyaai',
      artist: 'Haricharan, Tanvi Shah, and Yuvan Shankar Raja      ',
      src: './songs/Thuli-Thuli-Mazhaiyaai.mp3',
      cover: 'images/Thuli-Thuli-Mazhaiyaai.jpeg'
    },
    {
      title: 'Urvashi-Urvashi',
      artist: 'A. R. Rahman, Shahul Hameed, and Suresh Peters      ',
      src: './songs/Urvashi-Urvashi-MassTamilan.dev.mp3',
      cover: 'images/Urvashi-Urvashi.jpg'
    },
    {
      title: 'Varava-Varava',
      artist: 'Anirudh Ravichander      ',
      src: './songs/Varava-Varava.mp3',
      cover: 'images/Varava-Varava.jpeg'
    },
    {
      title: 'Venmegam-Pennaga',
      artist: ' Hariharan      ',
      src: './songs/Venmegam-Pennaga.mp3',
      cover: 'images/Venmegam-Pennaga.jpeg'
    },
    // {
    //   title: '',
    //   artist: '',
    //   src: '.',
    //   cover: 'images'
    // },
    // {
    //   title: '',
    //   artist: '',
    //   src: '.',
    //   cover: 'images'
    // },
    // {
    //   title: '',
    //   artist: '',
    //   src: '.',
    //   cover: 'images'
    // },
    
  ];

  let currentSongIndex = 0;
  const audio = new Audio();

  function loadSong(index) {
    const song = songs[index];
    document.querySelector('.song-title').textContent = song.title;
    document.querySelector('.artist-name').textContent = song.artist;
    cover.style.backgroundImage = `url(${song.cover})`;
    audio.src = song.src;
    highlightActiveSong();
    updateTotalTime();
  }

  function playSong() {
    audio.play();
    playButton.style.display = 'none';
    pauseButton.style.display = 'inline';
  }

  function pauseSong() {
    audio.pause();
    playButton.style.display = 'inline';
    pauseButton.style.display = 'none';
  }

  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }

  function updateProgressBar() {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    updateCurrentTime();
  }

  function highlightActiveSong() {
    const songItems = songListElement.querySelectorAll('li');
    songItems.forEach((item, index) => {
      item.classList.toggle('active', index === currentSongIndex);
    });
  }

  function handleSongEnd() {
    setTimeout(nextSong, 5000); // Move to the next song after 5 seconds
  }

  function updateCurrentTime() {
    const minutes = Math.floor(audio.currentTime / 60);
    const seconds = Math.floor(audio.currentTime % 60).toString().padStart(2, '0');
    currentTimeElement.textContent = `${minutes}:${seconds}`;
  }

  function updateTotalTime() {
    audio.onloadedmetadata = () => {
      const minutes = Math.floor(audio.duration / 60);
      const seconds = Math.floor(audio.duration % 60).toString().padStart(2, '0');
      totalTimeElement.textContent = `${minutes}:${seconds}`;
    };
  }

  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }

  audio.addEventListener('timeupdate', updateProgressBar);
  audio.addEventListener('ended', handleSongEnd);

  playButton.addEventListener('click', playSong);
  pauseButton.addEventListener('click', pauseSong);
  prevButton.addEventListener('click', prevSong);
  nextButton.addEventListener('click', nextSong);
  progressContainer.addEventListener('click', setProgress);

  // Load the song list into the UI
  songs.forEach((song, index) => {
    const li = document.createElement('li');
    li.textContent = `${song.title} - ${song.artist}`;
    li.addEventListener('click', () => {
      currentSongIndex = index;
      loadSong(currentSongIndex);
      playSong();
    });
    songListElement.appendChild(li);
  });

  loadSong(currentSongIndex);
});
