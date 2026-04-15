document.addEventListener('DOMContentLoaded', () => {
    if (typeof portfolioData === 'undefined') {
        alert("System Error: 'data.js' not found or invalid.");
        return;
    }

    // 1. Fill basic metadata
    document.title = portfolioData.personalInfo.name;
    document.getElementById('site-name').textContent = portfolioData.personalInfo.name;
    document.getElementById('mobile-name').textContent = portfolioData.personalInfo.name;
    document.getElementById('site-title').textContent = portfolioData.personalInfo.title;
    document.getElementById('site-footer').innerHTML = portfolioData.personalInfo.footerText;

    // Social Emoji Links
    const socialContainer = document.getElementById('social-links');
    if (portfolioData.personalInfo.socialLinks && socialContainer) {
        portfolioData.personalInfo.socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.className = 'social-icon';
            a.href = link.url;
            if (link.svg) a.innerHTML = link.svg; // replaced textContent to inject SVGs securely
            a.title = link.platform;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            socialContainer.appendChild(a);
        });
    }

    const navMenu = document.getElementById('nav-menu');
    const contentContainer = document.getElementById('content-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    // 2. Generate content
    portfolioData.sections.forEach((section, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-item';
        if (index === 0) btn.classList.add('active');
        btn.textContent = section.navLabel;
        btn.setAttribute('data-target', section.id);
        navMenu.appendChild(btn);

        const secDiv = document.createElement('section');
        secDiv.className = 'content-section';
        secDiv.id = section.id;
        if (index === 0) {
            secDiv.classList.add('active');
            setTimeout(() => {
                secDiv.style.opacity = '1';
                secDiv.style.transform = 'translateY(0)';
            }, 50);
        }

        const headerDiv = document.createElement('div');
        headerDiv.className = 'section-header';

        const h2 = document.createElement('h2');
        h2.textContent = section.pageTitle;
        const pDesc = document.createElement('p');
        pDesc.textContent = section.description;

        headerDiv.appendChild(h2);
        headerDiv.appendChild(pDesc);
        secDiv.appendChild(headerDiv);

        const grid = document.createElement('div');
        grid.className = 'items-grid';

        if (section.items && section.items.length > 0) {
            section.items.forEach((item, i) => {
                const card = document.createElement('article');
                card.className = 'content-card';
                card.style.opacity = '0';
                card.style.transform = 'translateY(25px)';
                card.style.transition = `opacity 0.7s ease, transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), padding 0.4s ease, border-color 0.4s ease`;

                const metaTag = document.createElement('span');
                metaTag.className = 'meta-tag';
                metaTag.textContent = `REF-${String(i + 1).padStart(2, '0')} // ${section.navLabel.toUpperCase()}`;
                card.appendChild(metaTag);

                const h3 = document.createElement('h3');
                h3.textContent = item.title;
                card.appendChild(h3);

                if (item.text) {
                    const pText = document.createElement('p');
                    pText.className = 'card-text';
                    pText.textContent = item.text;
                    card.appendChild(pText);
                }

                if (item.linkUrl && item.linkText) {
                    const aLink = document.createElement('a');
                    aLink.className = 'card-link';
                    aLink.href = item.linkUrl;
                    aLink.textContent = item.linkText;

                    if (item.linkUrl.startsWith('http') || item.linkUrl.includes('.pdf')) {
                        aLink.target = '_blank';
                        aLink.rel = 'noopener noreferrer';
                    }

                    card.appendChild(aLink);
                }

                grid.appendChild(card);
                observer.observe(card);
            });
        }

        secDiv.appendChild(grid);

        // Add custom HTML specifically for maps / forms if defined in data.js
        if (section.customHTML) {
            const customDiv = document.createElement('div');
            customDiv.className = 'custom-html-container';
            customDiv.innerHTML = section.customHTML;
            secDiv.appendChild(customDiv);
        }

        contentContainer.appendChild(secDiv);
    });

    const allNavBtns = document.querySelectorAll('.nav-item');
    const allSections = document.querySelectorAll('.content-section');

    allNavBtns.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            if (document.getElementById(targetId).classList.contains('active')) return;

            allNavBtns.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            allSections.forEach(sec => {
                if (sec.classList.contains('active')) {
                    sec.style.opacity = '0';
                    sec.style.transform = 'translateY(15px)';

                    setTimeout(() => {
                        sec.classList.remove('active');

                        const newSec = document.getElementById(targetId);
                        newSec.classList.add('active');
                        void newSec.offsetWidth;
                        newSec.style.opacity = '1';
                        newSec.style.transform = 'translateY(0)';

                        const cards = newSec.querySelectorAll('.content-card');
                        cards.forEach((card, i) => {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(25px)';

                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 50 + (i * 80));
                        });
                    }, 400);
                }
            });

            const sideNav = document.querySelector('.sidebar-index');
            if (sideNav.classList.contains('open')) {
                sideNav.classList.remove('open');
                document.getElementById('menu-toggle').textContent = 'MENU';
            }

            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const sideNav = document.querySelector('.sidebar-index');
    menuToggle.addEventListener('click', () => {
        const isOpen = sideNav.classList.contains('open');
        sideNav.classList.toggle('open');
        menuToggle.textContent = isOpen ? 'MENU' : 'CLOSE';
    });
});
