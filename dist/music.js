const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
	loop: 'all',
	order: 'random',
	volume: 0.2,
    audio: [
      {
        name: "Champions（英雄联盟S10应援曲）",
        artist: 'Kurt Hugo Schneider',
        url: 'http://dl.stream.qqmusic.qq.com/C100002XlXGB3f8uZN.m4a?fromtag=38',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M0000005TTDJ3Q34uK_1.jpg?max_age=2592000',
      },

    ]
});