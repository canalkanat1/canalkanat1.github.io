/***********************
  KARAKTER TANIMLARI
************************/
const characters = {
  explorer: {
    name: "Meraklı Kaşif",
    desc: "Algoritma seni sürekli yeni konulara sürüklüyor çünkü tek bir ilgi alanında kalmıyorsun."
  },
  trend: {
    name: "Trend Takipçisi",
    desc: "Popüler olan ne varsa önce sana düşüyor; algoritma hızını seviyor."
  },
  shadow: {
    name: "Gölge Takipçi",
    desc: "Etkileşime girmesen de algoritma seni izleme sürenle tanıyor."
  },
  creator: {
    name: "İçerik Üretici Adayı",
    desc: "Algoritma seni sadece izleyici değil, potansiyel üretici olarak görüyor."
  },
  social: {
    name: "Sosyal Etkileşimci",
    desc: "Yorumların ve paylaşımların algoritmanın seni net okumasını sağlıyor."
  },
  utility: {
    name: "Fayda Peşinde",
    desc: "Algoritma seni eğlenceden çok işine yarayan içeriklerle besliyor."
  },
  gamer: {
    name: "Oyun & Dijital Kaçkın",
    desc: "Dijital dünya senin ana alanın; algoritma bunu hiç kaçırmıyor."
  },
  shopper: {
    name: "Kaydıran Tüketici",
    desc: "Algoritma seni karar vermeden önce bakan ve kaydeden biri olarak görüyor."
  },
  nostalgic: {
    name: "Nostaljiye Takılan",
    desc: "Geçmişle bağ kuran içerikler algoritmanın sana açtığı kapı."
  },
  disruptor: {
    name: "Akış Bozan",
    desc: "Algoritmanın düzenini bozuyorsun; seni tek bir kalıba sokamıyor."
  }
};

/***********************
  SKORLAR
************************/
const scores = {};
Object.keys(characters).forEach(k => scores[k] = 0);

/***********************
  SORULAR (AĞIRLIKLI)
************************/
const questions = [
  {
    text: "Sosyal medyada seni gerçekten durduran içerik hangisi?",
    options: [
      { text: "Daha önce hiç denk gelmediğim konular", type: "explorer", weight: 3 },
      { text: "Herkesin konuştuğu videolar", type: "trend", weight: 2 },
      { text: "Sessizce izleyip geçtiğim içerikler", type: "shadow", weight: 2 },
      { text: "Eski ama tanıdık videolar", type: "nostalgic", weight: 3 }
    ]
  },
  {
    text: "Bir içeriği kaydetme sebebin ne olur?",
    options: [
      { text: "İleride işime yarayabilir", type: "utility", weight: 3 },
      { text: "Paylaşmalık bir şey", type: "social", weight: 3 },
      { text: "İlham verdi", type: "creator", weight: 3 },
      { text: "Bakınırım diye", type: "shopper", weight: 2 }
    ]
  },
  {
    text: "Akışta en çok hangi format seni içine çeker?",
    options: [
      { text: "Keşif hissi veren videolar", type: "explorer", weight: 2 },
      { text: "Trend sesli kısa videolar", type: "trend", weight: 2 },
      { text: "Uzun ve açıklayıcı anlatımlar", type: "utility", weight: 3 },
      { text: "Oyun oynanışları / yayınlar", type: "gamer", weight: 4 }
    ]
  },
  {
    text: "Bir içeriğe yorum yapma ihtimalin ne zaman artar?",
    options: [
      { text: "Başkalarıyla etkileşime girmek istersem", type: "social", weight: 3 },
      { text: "Genelde yorum yapmam", type: "shadow", weight: 3 },
      { text: "Üreticiye destek olmak için", type: "creator", weight: 3 },
      { text: "İçerik bana ters gelirse", type: "disruptor", weight: 3 }
    ]
  },
  {
    text: "Reklam gördüğünde hangisi sana daha yakın?",
    options: [
      { text: "Hızlıca geçerim", type: "disruptor", weight: 3 },
      { text: "Bakıp kaydedebilirim", type: "shopper", weight: 3 },
      { text: "Yaratıcıysa izlerim", type: "creator", weight: 2 },
      { text: "Trendse ilgimi çeker", type: "trend", weight: 2 }
    ]
  },
  {
    text: "Hangi içerik seni daha uzun süre tutar?",
    options: [
      { text: "Bir şey öğreten içerikler", type: "utility", weight: 3 },
      { text: "Eğlenceli ve hızlı videolar", type: "trend", weight: 2 },
      { text: "Geçmişe götüren paylaşımlar", type: "nostalgic", weight: 3 },
      { text: "Oyunla ilgili içerikler", type: "gamer", weight: 4 }
    ]
  },
  {
    text: "Sosyal medyada kendini en çok nasıl görüyorsun?",
    options: [
      { text: "Sürekli keşfeden biri", type: "explorer", weight: 3 },
      { text: "Etkileşimde olan biri", type: "social", weight: 3 },
      { text: "İzleyen ama katılmayan", type: "shadow", weight: 3 },
      { text: "Akışa pek uymayan", type: "disruptor", weight: 3 }
    ]
  },
  {
    text: "Hangi içerik türü sana daha yakın?",
    options: [
      { text: "Nasıl yapılır içerikleri", type: "utility", weight: 3 },
      { text: "Oyun yayınları", type: "gamer", weight: 4 },
      { text: "Trend listeleri", type: "trend", weight: 2 },
      { text: "Eski videolar", type: "nostalgic", weight: 3 }
    ]
  },
  {
    text: "Bir içeriği paylaşma sebebin ne olur?",
    options: [
      { text: "Beni yansıtıyorsa", type: "creator", weight: 3 },
      { text: "Başkalarıyla etkileşim için", type: "social", weight: 3 },
      { text: "Gerçekten faydalıysa", type: "utility", weight: 3 },
      { text: "Geçmişi hatırlatıyorsa", type: "nostalgic", weight: 3 }
    ]
  },
  {
    text: "Algoritma seni ne kadar doğru tanıyor?",
    options: [
      { text: "Beni iyi çözdü", type: "trend", weight: 2 },
      { text: "Kısmen tanıyor", type: "explorer", weight: 2 },
      { text: "Hiç tanımıyor", type: "disruptor", weight: 4 },
      { text: "Umrumda değil", type: "shadow", weight: 3 }
    ]
  }
];

/***********************
  AKIŞ
************************/
let current = 0;

const questionBox = document.getElementById("questionBox");
const nextBtn = document.getElementById("nextBtn");
const progress = document.getElementById("progress");

function renderQuestion() {
  nextBtn.disabled = true;
  progress.innerText = `${current + 1} / ${questions.length}`;

  const q = questions[current];
  questionBox.innerHTML = `<h3>${q.text}</h3>`;

  q.options.forEach(opt => {
    questionBox.innerHTML += `
      <label class="option">
        <input 
          type="checkbox" 
          value="${opt.type}" 
          data-weight="${opt.weight}">
        ${opt.text}
      </label>
    `;
  });

  document.querySelectorAll("input").forEach(input => {
    input.addEventListener("change", () => {
      nextBtn.disabled =
        document.querySelectorAll("input:checked").length === 0;
    });
  });
}

nextBtn.addEventListener("click", () => {
  document.querySelectorAll("input:checked").forEach(input => {
    const weight = Number(input.dataset.weight);
    scores[input.value] += weight;
  });

  current++;
  current < questions.length ? renderQuestion() : showResult();
});

function showResult() {
  questionBox.classList.add("hidden");
  nextBtn.classList.add("hidden");
  progress.classList.add("hidden");

  const winnerKey = Object.keys(scores)
    .sort((a, b) => scores[b] - scores[a])[0];

  const winner = characters[winnerKey];

  document.getElementById("resultTitle").innerText = winner.name;
  document.getElementById("resultText").innerText = winner.desc;
  document.getElementById("result").classList.remove("hidden");
}

renderQuestion();