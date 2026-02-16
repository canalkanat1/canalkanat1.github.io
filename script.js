// Karakterler
const characters = {
    gamer: {
        title: "Oyun Kurdu",
        description: "Algoritman seni tam bir oyuncu olarak tanımış. Her gün yeni bir oyun fragmanı, bir turnuva sonucu veya speedrun videosu görüyorsun."
    },
    foodie: {
        title: "Lezzet Avcısı",
        description: "Sosyal medyan tamamen yemek tarifleri, restoran önerileri ve ASMR yemek videolarıyla dolu. Algoritma seni çoktan mutfağa kilitlemiş."
    },
    trendhunter: {
        title: "Trend Takipçisi",
        description: "Her viral dansı, her şakayı ilk senin akışında görüyoruz. Algoritman sana popüler kültürün nabzını tutturuyor."
    },
    techgeek: {
        title: "Teknoloji Meraklısı",
        description: "En son akıllı telefon, yapay zeka haberleri ve gadget incelemeleri senin için özel seçilmiş. Algoritma seni dijital dünyada dolaştırıyor."
    },
    traveler: {
        title: "Gezgin Ruh",
        description: "Akışın muhteşem plajlar, egzotik şehirler ve seyahat ipuçlarıyla dolu. Algoritma seni sürekli yeni yerlere çağırıyor."
    },
    fashionista: {
        title: "Stil İkonu",
        description: "Kombinler, moda haftaları, markaların yeni koleksiyonları. Algoritman sana her gün başka bir ilham veriyor."
    },
    scholar: {
        title: "Bilgi Avcısı",
        description: "TED konuşmaları, belgeseller, bilim videoları. Algoritman seni düşünmeye zorluyor, beynin sürekli çalışıyor."
    },
    minimalist: {
        title: "Sakin Ruh",
        description: "Akışın hep dengeli, abartısız içeriklerle dolu. Algoritma senin huzuru sevdiğini anlamış ve ona göre hareket ediyor."
    },
    creator: {
        title: "Yaratıcı Kaos",
        description: "Sanat, el işleri, DIY projeleri. Algoritman seni sürekli bir şeyler yapmaya teşvik ediyor, ellerinden eksik olmuyor."
    },
    activist: {
        title: "Değişim Arayan",
        description: "Gündem, sosyal meseleler, çevre haberleri. Algoritman senin dünyayı değiştirmek istediğini biliyor ve seni güçlendiriyor."
    }
};

// Sorular - Weight sistemi düzeltildi
const questions = [
    {
        text: "Sabah telefona ilk baktığında genellikle ne görüyorsun?",
        answers: [
            { text: "Güncel haberler ve gündem", type: "activist", weight: 3 },
            { text: "Yemek tarifleri veya kafe önerileri", type: "foodie", weight: 4 },
            { text: "Arkadaşlarımın hikayeleri", type: "trendhunter", weight: 1 },
            { text: "Oyun veya teknoloji haberleri", type: "techgeek", weight: 2 }
        ]
    },
    {
        text: "Boş zamanında akışta dolaşırken hangi içeriklerde takılıp kalırsın?",
        answers: [
            { text: "Komik videolar", type: "trendhunter", weight: 4 },
            { text: "Yeni ürün incelemeleri", type: "techgeek", weight: 3 },
            { text: "Doğa ve seyahat fotoğrafları", type: "traveler", weight: 4 },
            { text: "Sanat ve el işi projeleri", type: "creator", weight: 3 }
        ]
    },
    {
        text: "Hangi tür hesapları en çok takip ediyorsun?",
        answers: [
            { text: "Moda ve stil influencerları", type: "fashionista", weight: 4 },
            { text: "Bilim ve eğitim kanalları", type: "scholar", weight: 4 },
            { text: "Yemek bloggerları", type: "foodie", weight: 2 },
            { text: "Oyun yayıncıları", type: "gamer", weight: 4 }
        ]
    },
    {
        text: "Video izlerken hangi uzunluk sana daha cazip geliyor?",
        answers: [
            { text: "Kısa ve öz, 30 saniye yeter", type: "trendhunter", weight: 2 },
            { text: "Orta, 5-10 dakika ideal", type: "minimalist", weight: 2 },
            { text: "Uzun, 30 dakika üzeri belgeseller", type: "scholar", weight: 4 },
            { text: "Yayınlar, saatlerce izleyebilirim", type: "gamer", weight: 4 }
        ]
    },
    {
        text: "Bir içeriği paylaşmaya karar verirsen, genellikle hangi türde olur?",
        answers: [
            { text: "Sosyal sorumluluk veya farkındalık içerikleri", type: "activist", weight: 4 },
            { text: "Seyahat anıları ve mekanlar", type: "traveler", weight: 3 },
            { text: "Kendi yaptığım bir şey", type: "creator", weight: 4 },
            { text: "İlginç bulduğum bir haber veya bilgi", type: "scholar", weight: 2 }
        ]
    },
    {
        text: "Algoritmana göre ideal tatilin nerede geçerdi?",
        answers: [
            { text: "Sessiz bir dağ evi, doğayla baş başa", type: "minimalist", weight: 4 },
            { text: "Egzotik bir ada, deniz ve kumsal", type: "traveler", weight: 4 },
            { text: "Büyük bir şehir, alışveriş ve yemek turu", type: "foodie", weight: 2 },
            { text: "Evde, en sevdiğim oyunları oynayarak", type: "gamer", weight: 3 }
        ]
    },
    {
        text: "Akışında en çok hangi tip reklamlar çıkıyor?",
        answers: [
            { text: "Giyim markaları ve aksesuar önerileri", type: "fashionista", weight: 3 },
            { text: "Yemek sipariş uygulamaları", type: "foodie", weight: 4 },
            { text: "Teknolojik ürünler ve gadgetlar", type: "techgeek", weight: 4 },
            { text: "Online kurslar ve eğitim platformları", type: "scholar", weight: 2 }
        ]
    },
    {
        text: "Gece yatmadan önce son baktığın içerik türü ne oluyor?",
        answers: [
            { text: "Rahatlatıcı müzik veya meditasyon videoları", type: "minimalist", weight: 3 },
            { text: "Komedi sketchleri veya eğlenceli içerikler", type: "trendhunter", weight: 3 },
            { text: "Yemek ASMR veya tarif videoları", type: "foodie", weight: 3 },
            { text: "Belgesel veya uzun format içerik", type: "scholar", weight: 3 }
        ]
    },
    {
        text: "Sosyal medyada en çok hangi aktiviteyi yapıyorsun?",
        answers: [
            { text: "İlham verici projeler kaydediyorum", type: "creator", weight: 2 },
            { text: "Toplumsal konulara yorum yapıyorum", type: "activist", weight: 4 },
            { text: "Gezdiğim yerleri etiketliyorum", type: "traveler", weight: 2 },
            { text: "Beğendiğim kombinleri arşivliyorum", type: "fashionista", weight: 2 }
        ]
    },
    {
        text: "Algoritman sana bir hobi önerecek olsa, hangisini seçerdi?",
        answers: [
            { text: "Yeni bir dil öğrenmek", type: "scholar", weight: 2 },
            { text: "E-spor turnuvalarına katılmak", type: "gamer", weight: 4 },
            { text: "Kendi kıyafetlerimi tasarlamak", type: "fashionista", weight: 3 },
            { text: "Sokak fotoğrafçılığı yapmak", type: "creator", weight: 3 }
        ]
    }
];

// State
let currentQuestion = 0;
let scores = {
    gamer: 0,
    foodie: 0,
    trendhunter: 0,
    techgeek: 0,
    traveler: 0,
    fashionista: 0,
    scholar: 0,
    minimalist: 0,
    creator: 0,
    activist: 0
};

// DOM Elemanları
const introScreen = document.getElementById('intro-screen');
const testScreen = document.getElementById('test-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const retryBtn = document.getElementById('retry-btn');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const resultTitle = document.getElementById('result-title');
const resultDescription = document.getElementById('result-description');

// Event Listeners
startBtn.addEventListener('click', startTest);
nextBtn.addEventListener('click', nextQuestion);
retryBtn.addEventListener('click', resetTest);

// Test başlat
function startTest() {
    switchScreen(introScreen, testScreen);
    loadQuestion();
}

// Soruyu yükle
function loadQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.text;
    answersContainer.innerHTML = '';

    q.answers.forEach((answer, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `answer-${index}`;
        checkbox.dataset.type = answer.type;
        checkbox.dataset.weight = answer.weight;
        
        const label = document.createElement('label');
        label.htmlFor = `answer-${index}`;
        label.textContent = answer.text;
        
        optionDiv.appendChild(checkbox);
        optionDiv.appendChild(label);
        
        optionDiv.addEventListener('click', function(e) {
            if (e.target.tagName !== 'INPUT') {
                checkbox.checked = !checkbox.checked;
            }
            optionDiv.classList.toggle('selected', checkbox.checked);
        });
        
        checkbox.addEventListener('change', function() {
            optionDiv.classList.toggle('selected', this.checked);
        });
        
        answersContainer.appendChild(optionDiv);
    });
}

// Sonraki soru
function nextQuestion() {
    const checkboxes = answersContainer.querySelectorAll('input[type="checkbox"]:checked');
    
    checkboxes.forEach(checkbox => {
        const type = checkbox.dataset.type;
        const weight = parseInt(checkbox.dataset.weight);
        scores[type] += weight;
    });
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Sonuç göster
function showResult() {
    let maxScore = 0;
    let resultType = '';
    
    for (const [type, score] of Object.entries(scores)) {
        if (score > maxScore) {
            maxScore = score;
            resultType = type;
        }
    }
    
    const character = characters[resultType];
    resultTitle.textContent = character.title;
    resultDescription.textContent = character.description;
    
    switchScreen(testScreen, resultScreen);
}

// Test sıfırla
function resetTest() {
    currentQuestion = 0;
    scores = {
        gamer: 0,
        foodie: 0,
        trendhunter: 0,
        techgeek: 0,
        traveler: 0,
        fashionista: 0,
        scholar: 0,
        minimalist: 0,
        creator: 0,
        activist: 0
    };
    
    switchScreen(resultScreen, introScreen);
}

// Ekran geçişi
function switchScreen(from, to) {
    from.classList.remove('active');
    to.classList.add('active');
}