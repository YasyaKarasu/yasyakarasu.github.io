const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
	loop: 'all',
	order: 'random',
	volume: 0.2,
    audio: [
      {
        name: "心拍数#0822",
        artist: 'Akie秋绘',
        url: 'http://www.ytmp3.cn/down/57734.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M0000024Yoan3vZATh.jpg',
      },
      {
        name: 'Gorgeous',
        artist: 'Taylor Swift',
        url: 'http://www.ytmp3.cn/down/49722.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000003OK4yP2MBOip.jpg',
      },
	  {
        name: 'オレンジ (Orange)',
        artist: 'Seven Oops',
        url: 'http://www.ytmp3.cn/down/36234.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000004KzDAJ3nAmdu.jpg',
      },
	  {
        name: 'カワキヲアメク',
        artist: '美波',
        url: 'http://www.ytmp3.cn/down/58673.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M00000386Sll4AfJXk.jpg',
      },
	  {
        name: 'Venom (Clean)',
        artist: 'Eminem',
        url: 'http://www.ytmp3.cn/down/56147.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000003YRAq21EltzO.jpg',
      },
	  {
        name: 'アイロニ (反语) (カバー)',
        artist: 'majiko (まじ娘)',
        url: 'http://www.ytmp3.cn/down/60271.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000002FzKSY0FcypL.jpg',
      },
	  {
        name: 'LOSER',
        artist: '米津玄師 (よねづ けんし)',
        url: 'http://www.ytmp3.cn/down/49909.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000002kl9Hs4WaKFO.jpg',
      },
	  {
        name: 'I Knew You Were Trouble',
        artist: 'Taylor Swift',
        url: 'http://www.ytmp3.cn/down/51501.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000003XgDKL12X3J1.jpg',
      },
	  {
        name: '打上花火',
        artist: 'DAOKO (ダヲコ),米津玄師 (よねづ けんし)',
        url: 'http://www.ytmp3.cn/down/50434.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000004HjUxU1o3HXf.jpg',
      },
	  {
        name: 'Despacito (Remix)',
        artist: 'Luis Fonsi,Daddy Yankee,Justin Bieber',
        url: 'http://www.ytmp3.cn/down/49984.mp3',
        cover: 'http://y.gtimg.cn/music/photo_new/T002R800x800M000003z7S4p3J92dA.jpg',
      }
    ]
});