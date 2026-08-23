document.getElementById('currentYear').innerText = new Date().getFullYear();

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
