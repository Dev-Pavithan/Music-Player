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
      src: './Kangal-Irandal.mp3',
      cover: 'images/kan.jpg'
    },
    {
      title: 'Kadhal-Rojave',
      artist: 'A. R. Rahman',
      src: './Kadhal-Rojave.mp3',
      cover: 'images/kadhal-rojave.jpeg'
    },
    {
      title: 'Thangame',
      artist: 'Anirudh Ravichander',
      src: './Thangame.mp3',
      cover: 'images/thangame.jpg'
    },
    {
      title: 'Yennai-Maatrum-Kadhale',
      artist: 'Anirudh',
      src: './Yennai-Maatrum-Kadhale.mp3',
      cover: 'images/Yennai-Maatrum-Kadhale.jpeg'
    },
    {
      title: 'Mel-Isaiyae',
      artist: 'Swarnalatha and Unni Menon',
      src: './Mel-Isaiyae.mp3',
      cover: 'images/Mel-Isaiyae.jpeg'
    },
    {
      title: 'Kanave-Kanave',
      artist: 'Anirudh Ravichander',
      src: './Kanave-Kanave-MassTamilan.com.mp3',
      cover: 'images/Kanave-Kanave.jpeg'
    },
    {
      title: 'Beat-of-Master',
      artist: 'Anirudh Ravichander',
      src: './Beat-of-Master-(Instrumental)-MassTamilan.io.mp3',
      cover: 'images/Beat-of-Master.jpeg'
    },
    {
      title: 'Andha-Kanna-Paathaakaa',
      artist: 'Anirudh Ravichander',
      src: './Andha-Kanna-Paathaakaa-MassTamilan.io.mp3',
      cover: 'images/Andha-Kanna-Paathaakaa.jpg'
    },
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
