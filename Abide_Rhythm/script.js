// --- 1. BIBLE DATA STORAGE ---
const bibleData = {
    "john1": {
        title: "John Chapter 1",
        subtitle: "The Word Became Flesh",
        content: `<p><span class="verse-num">1</span>In the beginning was the Word, and the Word was with God, and the Word was God. <span class="verse-num">2</span>He was in the beginning with God.</p>
                  <p><span class="verse-num">3</span>All things were made through him, and without him was not any thing made that was made.</p>
                  <blockquote>"The light shines in the darkness, and the darkness has not overcome it."</blockquote>`,
        next: "john2",
        prev: null
    },
    "john2": {
        title: "John Chapter 2",
        subtitle: "The Wedding at Cana",
        content: `<p><span class="verse-num">1</span>On the third day there was a wedding at Cana in Galilee, and the mother of Jesus was there.</p>
                  <p><span class="verse-num">2</span>Jesus also was invited to the wedding with his disciples.</p>`,
        next: "john3",
        prev: "john1"
    }
};

let currentChapterId = "john1";

document.addEventListener('DOMContentLoaded', () => {
    
    // --- 2. NAVIGATION & HAMBURGER ---
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // --- 3. PROGRESS BAR (Home Page) ---
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
    const hash = window.location.hash.replace('#', '');
    if (document.getElementById('scripture-display')) {
        loadChapter(hash || 'john1');
    }

    // --- 5. CONTACT FORM LOGIC (Connect Page) ---
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = new FormData(contactForm).get('name');
            alert(`Thank you, ${name}! Your message has been sent.`);
            contactForm.reset();
        });
    }
});

// --- 6. GLOBAL FUNCTIONS (Accessible by buttons) ---

function loadChapter(chapterId) {
    const data = bibleData[chapterId];
    if (!data) return;

    currentChapterId = chapterId;

    // Update Text Content
    document.getElementById('chapter-title').innerText = data.title;
    document.getElementById('chapter-subtitle').innerText = data.subtitle;
    document.getElementById('scripture-display').innerHTML = data.content;

    // Update Navigation Buttons
    const prevBtn = document.getElementById('prev-chapter');
    const nextBtn = document.getElementById('next-chapter');

    if (prevBtn) {
        if (data.prev) {
            prevBtn.style.visibility = "visible";
            prevBtn.onclick = () => loadChapter(data.prev);
        } else {
            prevBtn.style.visibility = "hidden";
        }
    }

    if (nextBtn) {
        if (data.next) {
            nextBtn.style.visibility = "visible";
            nextBtn.onclick = () => loadChapter(data.next);
        } else {
            nextBtn.style.visibility = "hidden";
        }
    }

    window.location.hash = chapterId;

    // Load saved notes
    const savedNotes = localStorage.getItem('notes_' + chapterId);
    const notesArea = document.getElementById('study-notes');
    if (notesArea) {
        notesArea.value = savedNotes || "";
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveNotes() {
    const notesArea = document.getElementById('study-notes');
    if (notesArea) {
        localStorage.setItem('notes_' + currentChapterId, notesArea.value);
        alert('Your reflections for ' + currentChapterId + ' have been saved.');
    }
}

// Make the logo div navigate to home
document.querySelector('.logo').addEventListener('click', () => {
    window.location.href = 'index.html';
});