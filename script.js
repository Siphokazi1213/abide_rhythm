// --- 1. BIBLE DATA STORAGE (John 1-21) ---
const bibleData = {
    "john1": { title: "John Chapter 1", subtitle: "The Word Became Flesh", content: `<p><span class="verse-num">1</span>In the beginning was the Word, and the Word was with God, and the Word was God...</p><blockquote>"The light shines in the darkness, and the darkness has not overcome it."</blockquote>`, next: "john2", prev: null },
    "john2": { title: "John Chapter 2", subtitle: "The Wedding at Cana", content: `<p><span class="verse-num">1</span>On the third day there was a wedding at Cana in Galilee...</p>`, next: "john3", prev: "john1" },
    "john3": { title: "John Chapter 3", subtitle: "Jesus and Nicodemus", content: `<p><span class="verse-num">16</span>For God so loved the world...</p>`, next: "john4", prev: "john2" },
    "john4": { title: "John Chapter 4", subtitle: "The Woman at the Well", content: `<p><span class="verse-num">14</span>But whoever drinks of the water that I will give him will never be thirsty again.</p>`, next: "john5", prev: "john3" },
    "john5": { title: "John Chapter 5", subtitle: "Healing at the Pool", content: `<p>Jesus said to him, “Get up, take up your bed, and walk.”</p>`, next: "john6", prev: "john4" },
    "john6": { title: "John Chapter 6", subtitle: "The Bread of Life", content: `<p><span class="verse-num">35</span>Jesus said to them, “I am the bread of life.”</p>`, next: "john7", prev: "john5" },
    "john7": { title: "John Chapter 7", subtitle: "Rivers of Living Water", content: `<p>...</p>`, next: "john8", prev: "john6" },
    "john8": { title: "John Chapter 8", subtitle: "The Light of the World", content: `<p>...</p>`, next: "john9", prev: "john7" },
    "john9": { title: "John Chapter 9", subtitle: "Jesus Heals a Man Born Blind", content: `<p>...</p>`, next: "john10", prev: "john8" },
    "john10": { title: "John Chapter 10", subtitle: "The Good Shepherd", content: `<p>...</p>`, next: "john11", prev: "john9" },
    "john11": { title: "John Chapter 11", subtitle: "The Resurrection and the Life", content: `<p>...</p>`, next: "john12", prev: "john10" },
    "john12": { title: "John Chapter 12", subtitle: "The Triumphal Entry", content: `<p>...</p>`, next: "john13", prev: "john11" },
    "john13": { title: "John Chapter 13", subtitle: "Jesus Washes the Disciples' Feet", content: `<p>...</p>`, next: "john14", prev: "john12" },
    "john14": { title: "John Chapter 14", subtitle: "The Way, the Truth, and the Life", content: `<p>...</p>`, next: "john15", prev: "john13" },
    "john15": { title: "John Chapter 15", subtitle: "The Vine and the Branches", content: `<p>...</p>`, next: "john16", prev: "john14" },
    "john16": { title: "John Chapter 16", subtitle: "The Work of the Holy Spirit", content: `<p>...</p>`, next: "john17", prev: "john15" },
    "john17": { title: "John Chapter 17", subtitle: "The High Priestly Prayer", content: `<p>...</p>`, next: "john18", prev: "john16" },
    "john18": { title: "John Chapter 18", subtitle: "The Betrayal and Arrest", content: `<p>...</p>`, next: "john19", prev: "john17" },
    "john19": { title: "John Chapter 19", subtitle: "The Crucifixion", content: `<p>...</p>`, next: "john20", prev: "john18" },
    "john20": { title: "John Chapter 20", subtitle: "The Resurrection", content: `<p>...</p>`, next: "john21", prev: "john19" },
    "john21": { title: "John Chapter 21", subtitle: "Jesus Appears by the Sea", content: `<p>...</p>`, next: null, prev: "john20" }
};

let currentChapterId = "john1";

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 2. NAVIGATION & HAMBURGER ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    if (menuToggle) {
        menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));
    }

    // --- 3. PROGRESS BAR LOGIC ---
    const checks = document.querySelectorAll('.save-progress');
    const bar = document.getElementById('myBar');

    function updateProgress() {
        if (!bar) return;
        const checkedCount = document.querySelectorAll('.save-progress:checked').length;
        const total = checks.length;
        const percentage = total === 0 ? 0 : (checkedCount / total) * 100;
        bar.style.width = percentage + "%";
    }

    checks.forEach(box => {
        if (localStorage.getItem(box.id) === 'true') box.checked = true;
        box.addEventListener('change', () => {
            localStorage.setItem(box.id, box.checked);
            updateProgress();
        });
    });
    updateProgress();

    // --- 4. INITIAL CHAPTER LOAD (Study Page) ---
    if (document.getElementById('scripture-display')) {
        const hash = window.location.hash.replace('#', '');
        loadChapter(hash && bibleData[hash] ? hash : 'john1');
    }

    // --- 5. REAL SUBSCRIPTION LOGIC (Formspree) ---
    const newsletterForm = document.getElementById('newsletter-form');
    const subscribeContent = document.getElementById('subscribe-content');
    const successMessage = document.getElementById('success-message');

    if (newsletterForm) {
        newsletterForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const data = new FormData(e.target);
            const response = await fetch(e.target.action, {
                method: 'POST',
                body: data,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                subscribeContent.style.display = "none";
                successMessage.style.display = "block";
                newsletterForm.reset();
            } else {
                alert("Oops! There was a problem. Please try again.");
            }
        });
    }

    // --- 6. BACK TO TOP LOGIC ---
    const topBtn = document.getElementById('backToTop');
    if (topBtn) {
        window.addEventListener('scroll', () => {
            topBtn.style.display = window.scrollY > 300 ? "flex" : "none";
        });
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
});

// --- 7. GLOBAL FUNCTIONS ---

function loadChapter(chapterId) {
    const data = bibleData[chapterId];
    if (!data) return;
    currentChapterId = chapterId;

    document.getElementById('chapter-title').innerText = data.title;
    document.getElementById('chapter-subtitle').innerText = data.subtitle;
    document.getElementById('scripture-display').innerHTML = data.content;

    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');

    if (prevBtn) {
        prevBtn.style.visibility = data.prev ? "visible" : "hidden";
        if (data.prev) prevBtn.onclick = () => loadChapter(data.prev);
    }
    if (nextBtn) {
        nextBtn.style.visibility = data.next ? "visible" : "hidden";
        if (data.next) nextBtn.onclick = () => loadChapter(data.next);
    }

    window.location.hash = chapterId;
    const savedNotes = localStorage.getItem('notes_' + chapterId);
    const notesArea = document.getElementById('study-notes');
    if (notesArea) notesArea.value = savedNotes || "";
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveNotes() {
    const notesArea = document.getElementById('study-notes');
    if (notesArea) {
        localStorage.setItem('notes_' + currentChapterId, notesArea.value);
        alert('Your reflections for ' + currentChapterId + ' have been saved to this device.');
    }
}

function copyPageLink() {
    const el = document.createElement('textarea');
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert("Link copied! You can now share this 'Selah' moment.");
}