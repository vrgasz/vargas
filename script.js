const supabaseUrl = 'https://roiazgtneegylqcljmzy.supabase.co';
const supabaseKey = 'Sb_publishable_RcyM7XqiiWszQ-1X7da_4g_PTGJ0QKk';
const db = window.supabase.createClient(supabaseUrl, supabaseKey);

const SVG_ICONS = {
    instagram: `<svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    tiktok: `<svg viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a73.2,73.2,0,1,0,62.83,72.43V0h90.35a208.87,208.87,0,0,0,23,79.52A206.57,206.57,0,0,0,448,157.17Z"/></svg>`,
    facebook: `<svg viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>`,
    whatsapp: `<svg viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.73-1.455L0 24zm6.59-4.846c1.6.95 3.488 1.449 5.413 1.451 5.428 0 9.847-4.416 9.85-9.846.002-2.63-1.02-5.101-2.876-6.958C17.168 1.984 14.695.965 12.007.965c-5.432 0-9.852 4.417-9.855 9.848-.002 2.028.53 4.02 1.543 5.793L2.68 21.325l4.967-1.302L6.647 19.154zm8.62-5.526c-.307-.154-1.815-.895-2.097-.997-.281-.103-.486-.154-.69.154-.204.307-.792.997-.971 1.202-.18.205-.359.227-.666.073-.307-.153-1.297-.478-2.47-1.526-.913-.815-1.53-1.821-1.709-2.128-.18-.307-.02-.473.134-.627.139-.138.307-.358.461-.537.154-.18.205-.307.307-.512.103-.205.051-.384-.026-.537-.077-.153-.69-1.662-.946-2.277-.25-.6-.522-.518-.717-.528-.184-.009-.396-.01-.607-.01-.211 0-.556.079-.846.396-.29.317-1.109 1.085-1.109 2.645 0 1.56 1.134 3.068 1.292 3.284.158.215 2.23 3.403 5.402 4.77 1.202.518 2.016.744 2.703.963 1.21.383 2.31.33 3.18.2.97-.146 1.815-.596 2.072-1.15.256-.554.256-1.03.18-1.13-.077-.103-.282-.154-.59-.308z"/></svg>`,
    youtube: `<svg viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    github: `<svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>`,
    telegram: `<svg viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-1.97 9.288c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.19-3.05 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.654-.64.135-.954l11.566-4.46c.538-.196 1.006.128.832.943z"/></svg>`,
    donate: `<svg viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`
};

const DEFAULT_DATA = {
    profile: {
        navLogo: "Vargas",
        name: "Vargas Dwi Arshafin",
        role: "Full-Stack & Web App Creator",
        bio: "Membangun ekosistem web interaktif, alat utilitas digital berkecepatan tinggi, serta pengalaman antarmuka yang bersih dan modern.",
        avatar: "",
        welcomeText: "Halo! Selamat datang di platform dan portfolio resmi saya.",
        skills: "JavaScript, HTML5/CSS3, UI/UX, Serverless",
        accentColor: "#00f5a0",
        hamburgerTitle: " My Tools & Projects",
        footerText: "VARGAS © 2026 • Designed with Professional Standards"
    },
    terminal: {
        status: '"Building scalable web tools"',
        location: '"Magelang, Indonesia "',
        focus: '"Frontend Engineering & SEO"',
        email: 'vargas@web.id'
    },
    projects: [
        {
            type: "tool",
            title: "TikTok Caption Copier",
            desc: "Ekstrak dan salin deskripsi video TikTok.",
            url: "https://tiktok-caption.vercel.app"
        }
    ],
    socials: [
        { type: "instagram", name: "Instagram", url: "https://instagram.com/@vrgasz", donate: false },
        { type: "tiktok", name: "TikTok", url: "https://tiktok.com/@vrgasz", donate: false },
        { type: "facebook", name: "Facebook", url: "https://facebook.com/vrgasz", donate: false },
        { type: "whatsapp", name: "Saluran", url: "https://whatsapp.com/channel/0029Vb04Aqn545uzqgcFT53E", donate: false },
        { type: "donate", name: "Dukung Lewat Donasi", url: "https://saweria.co/vrgasz", donate: true }
    ]
};

const currentYearElem = document.getElementById('currentYear');
if(currentYearElem) currentYearElem.innerText = new Date().getFullYear();

function updateWibTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const wib = new Date(utc + (3600000 * 7));
    
    let hours = wib.getHours();
    let minutes = wib.getMinutes();
    
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeStatus = document.getElementById('localTimeStatus');
    if(timeStatus) {
        timeStatus.innerText = `${hours}:${minutes} WIB • ${ (hours >= 8 && hours <= 23) ? ' Active & Coding' : ' Resting Mode'}`;
    }
}
updateWibTime();
setInterval(updateWibTime, 60000);

function copyToClipboard(text, message) {
    const toast = document.getElementById('toastNotification');
    const toastText = document.getElementById('toastText');
    
    if(toast && toastText) {
        navigator.clipboard.writeText(text).then(() => {
            toastText.innerText = message;
            toast.classList.add('show');
            setTimeout(() => toast.classList.remove('show'), 3000);
        });
    }
}

const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMenu() {
    if(mobileMenu) {
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
    }
}

if(hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMenu);
if(closeBtn) closeBtn.addEventListener('click', toggleMenu);
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        if(mobileMenu) mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

const toolsDropdownBtn = document.getElementById('toolsDropdownBtn');
const toolsDropdownContent = document.getElementById('toolsDropdownContent');
const dropdownArrow = document.getElementById('dropdownArrow');

if(toolsDropdownBtn && toolsDropdownContent) {
    toolsDropdownBtn.addEventListener('click', () => {
        toolsDropdownContent.classList.toggle('show');
        if(dropdownArrow) {
            dropdownArrow.style.transform = toolsDropdownContent.classList.contains('show') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    });
}

async function fetchMasterDataFromSupabase() {
    try {
        const { data, error } = await db.from('settings').select('payload').eq('id', 1).single();
        if (error || !data) return null;
        return data.payload;
    } catch(e) {
        return null;
    }
}

async function loadMasterData() {
    let data = await fetchMasterDataFromSupabase();
    if (!data) data = DEFAULT_DATA;
    
    const accent = data.profile?.accentColor || '#00f5a0';
    const styleElem = document.getElementById('dynamicAccentStyle');
    if(styleElem) {
        styleElem.innerHTML = `
            :root {
                --primary: ${accent};
                --primary-glow: ${accent}26;
                --border-hover: ${accent}66;
            }
        `;
    }

    const logoElem = document.getElementById('navLogoText');
    if(logoElem) logoElem.innerHTML = `${data.profile?.navLogo || 'Vargas'}<span class="dot">.</span>`;

    const viewName = document.getElementById('viewName');
    if(viewName) viewName.innerText = data.profile?.name || DEFAULT_DATA.profile.name;
    const viewRole = document.getElementById('viewRole');
    if(viewRole) viewRole.innerText = data.profile?.role || DEFAULT_DATA.profile.role;
    const viewBio = document.getElementById('viewBio');
    if(viewBio) viewBio.innerText = data.profile?.bio || DEFAULT_DATA.profile.bio;
    const pageTitle = document.getElementById('pageTitle');
    if(pageTitle) pageTitle.innerText = `${data.profile?.name || 'Vargas'} — Software Developer`;
    const toolsTitle = document.getElementById('toolsDropdownTitle');
    if(toolsTitle) toolsTitle.innerText = data.profile?.hamburgerTitle || ' My Tools & Projects';
    const footerText = document.getElementById('footerText');
    if(footerText) footerText.innerText = data.profile?.footerText || 'VARGAS © 2026 • Designed with Professional Standards';

    const banner = document.getElementById('welcomeBanner');
    const bannerText = document.getElementById('welcomeBannerText');
    if (banner && bannerText) {
        if (data.profile?.welcomeText && data.profile.welcomeText.trim() !== "") {
            bannerText.innerText = data.profile.welcomeText;
            banner.style.display = 'block';
        } else {
            banner.style.display = 'none';
        }
    }

    const avatarContainer = document.getElementById('avatarContainer');
    if (avatarContainer) {
        if (data.profile?.avatar) {
            avatarContainer.innerHTML = `<img src="${data.profile.avatar}" alt="Avatar" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;">`;
        } else {
            const nameChar = data.profile?.name ? data.profile.name.charAt(0) : 'V';
            avatarContainer.innerHTML = `<span class="avatar-text" id="avatarText">${nameChar}</span>`;
        }
    }

    const pillsContainer = document.getElementById('techPillsContainer');
    if (pillsContainer) {
        const skillsStr = data.profile?.skills || "JavaScript, HTML5/CSS3, UI/UX, Serverless";
        const skillsArr = skillsStr.split(',').map(s => s.trim()).filter(Boolean);
        pillsContainer.innerHTML = skillsArr.map(s => `<span>${s}</span>`).join('');
    }

    const termStatus = document.getElementById('termStatus');
    if(termStatus) termStatus.innerText = data.terminal?.status || DEFAULT_DATA.terminal.status;
    const termLoc = document.getElementById('termLocation');
    if(termLoc) termLoc.innerText = data.terminal?.location || DEFAULT_DATA.terminal.location;
    const termFocus = document.getElementById('termFocus');
    if(termFocus) termFocus.innerText = data.terminal?.focus || DEFAULT_DATA.terminal.focus;
    const termEmail = document.getElementById('termEmailLink');
    if(termEmail) {
        const emailVal = data.terminal?.email || DEFAULT_DATA.terminal.email;
        termEmail.setAttribute('onclick', `copyToClipboard('${emailVal}', 'Email berhasil disalin!')`);
        termEmail.innerText = `${emailVal} [Copy]`;
    }

    const mobileToolsContainer = document.getElementById('mobileToolsContainer');
    if(mobileToolsContainer) {
        mobileToolsContainer.innerHTML = '';
        const projectsList = data.projects && data.projects.length > 0 ? data.projects : DEFAULT_DATA.projects;
        projectsList.forEach(proj => {
            if (proj.type === 'text') {
                mobileToolsContainer.innerHTML += `
                    <div class="mobile-tool-card text-only-card">
                        <div class="mobile-tool-title">${proj.title}</div>
                        <div class="mobile-tool-desc">${proj.desc}</div>
                    </div>
                `;
            } else {
                const hasUrl = proj.url && proj.url.trim() !== "";
                const targetAttr = hasUrl ? `href="${proj.url}" target="_blank"` : `href="#" onclick="event.preventDefault();"`;
                const arrowSign = hasUrl ? " " : "";

                mobileToolsContainer.innerHTML += `
                    <a ${targetAttr} class="mobile-tool-card">
                        <div class="mobile-tool-title">${proj.title}${arrowSign}</div>
                        <div class="mobile-tool-desc">${proj.desc}</div>
                    </a>
                `;
            }
        });
    }

    const socialContainer = document.getElementById('socialsContainer');
    if(socialContainer) {
        socialContainer.innerHTML = '';
        const socialsList = data.socials && data.socials.length > 0 ? data.socials : DEFAULT_DATA.socials;
        socialsList.forEach(soc => {
            const svgIcon = SVG_ICONS[soc.type] || SVG_ICONS.instagram;

            if (soc.donate) {
                socialContainer.innerHTML += `
                    <a href="${soc.url}" class="social-card donate-card" target="_blank">
                        <div class="social-icon-circle">${svgIcon}</div>
                        <div class="social-details">
                            <div class="social-name">${soc.name}</div>
                        </div>
                    </a>
                `;
            } else {
                socialContainer.innerHTML += `
                    <a href="${soc.url}" class="social-card" target="_blank">
                        <div class="social-icon-circle">${svgIcon}</div>
                        <div class="social-details">
                            <div class="social-name">${soc.name}</div>
                        </div>
                    </a>
                `;
            }
        });
    }
}

loadMasterData();
