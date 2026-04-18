document.addEventListener('DOMContentLoaded', () => {
    if (typeof portfolioData === 'undefined') {
        alert("System Error: 'data.js' not found or invalid.");
        return;
    }

    function slugify(text) {
        var trMap = { 'çÇ':'c', 'ğĞ':'g', 'şŞ':'s', 'üÜ':'u', 'ıİ':'i', 'öÖ':'o' };
        for(var key in trMap) { text = text.replace(new RegExp('['+key+']','g'), trMap[key]); }
        return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    }

    document.title = portfolioData.personalInfo.name + " | Academic Portfolio";
    document.getElementById('site-name').textContent = portfolioData.personalInfo.name + "'s Web Pages";
    document.getElementById('site-title').textContent = portfolioData.personalInfo.title;
    document.getElementById('site-footer').textContent = portfolioData.personalInfo.footerText;

    const socialContainer = document.getElementById('social-links');
    if (portfolioData.personalInfo.socialLinks && socialContainer) {
        portfolioData.personalInfo.socialLinks.forEach(link => {
            const a = document.createElement('a'); a.className = 'social-icon'; a.href = link.url;
            if (link.svg) a.innerHTML = link.svg;
            a.title = link.platform; a.target = '_blank'; a.rel = 'noopener noreferrer';
            socialContainer.appendChild(a);
        });
    }

    const navMenu = document.getElementById('nav-menu');
    const contentContainer = document.getElementById('content-container');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1'; entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    function groupItems(items) {
        const groups = { 'default': [] };
        items.forEach(item => {
            let title = item.title; let groupName = 'default';
            const match = title.match(/\((.*?)\)$/);
            if (match) { groupName = match[1].toUpperCase(); title = title.replace(/\(.*?\)$/, '').trim(); }
            if (!groups[groupName]) groups[groupName] = [];
            groups[groupName].push({ ...item, displayTitle: title, slug: slugify(title) });
        });
        return groups;
    }

    // Generate All DOM Content First
    portfolioData.sections.forEach((section) => {
        if (!section.hiddenNav) {
            const btn = document.createElement('a');
            btn.className = 'nav-item'; 
            btn.textContent = section.navLabel; 
            btn.href = '#' + section.id;
            btn.setAttribute('data-target', section.id); 
            navMenu.appendChild(btn);
        }

        const secDiv = document.createElement('section');
        secDiv.className = 'content-section'; secDiv.id = section.id;
        secDiv.style.opacity = '0'; secDiv.style.transform = 'translateY(15px)';

        const headerDiv = document.createElement('div'); headerDiv.className = 'section-header';
        const h2 = document.createElement('h2'); h2.textContent = section.pageTitle;
        const pDesc = document.createElement('p'); pDesc.textContent = section.description;
        headerDiv.appendChild(h2); headerDiv.appendChild(pDesc); secDiv.appendChild(headerDiv);

        if (section.items && section.items.length > 0) {
            const groups = groupItems(section.items);
            Object.keys(groups).forEach(groupName => {
                const groupItems = groups[groupName];
                if (groupItems.length === 0) return;
                const groupDiv = document.createElement('div'); groupDiv.className = 'item-group';
                if (groupName !== 'default') {
                    const groupHeader = document.createElement('h3'); groupHeader.className = 'group-header';
                    groupHeader.textContent = groupName; groupDiv.appendChild(groupHeader);
                }
                const list = document.createElement('ul'); list.className = 'link-list';
                groupItems.forEach((item, i) => {
                    const li = document.createElement('li');
                    li.className = 'list-item-anim'; li.style.opacity = '0'; li.style.transform = 'translateY(15px)';
                    li.style.transition = `opacity 0.5s ease, transform 0.5s ease`;
                    const titleLink = document.createElement('a'); titleLink.className = 'item-title-link';
                    
                    if (item.subSections && item.subSections.length > 0) {
                        titleLink.href = '#' + section.id + '/' + item.slug;
                    } else if (item.linkUrl && item.linkUrl !== "#") {
                        titleLink.href = item.linkUrl; titleLink.target = '_blank'; titleLink.rel = 'noopener noreferrer';
                    } else if (item.linkText && item.linkText.includes('.pdf')) {
                        titleLink.href = item.linkText; titleLink.target = '_blank';
                    } else { titleLink.href = 'javascript:void(0)'; }
                    
                    titleLink.textContent = item.displayTitle; li.appendChild(titleLink);
                    if (item.text) {
                        const pText = document.createElement('p'); pText.className = 'item-desc';
                        pText.textContent = item.text; li.appendChild(pText);
                    }
                    list.appendChild(li); observer.observe(li);
                });
                groupDiv.appendChild(list); secDiv.appendChild(groupDiv);
            });
        }
        if (section.customHTML) {
            const customDiv = document.createElement('div'); customDiv.className = 'custom-html-container';
            if (section.id === 'sitemap') {
                customDiv.style.marginTop = '0';
                customDiv.style.paddingTop = '1rem';
                customDiv.style.borderTop = 'none';
                let html = '<ul class="sitemap-list" style="list-style:none; padding-left:0; line-height: 1.8; margin-top: 0;">';
                portfolioData.sections.forEach(s => {
                    if (s.id !== 'privacy' && s.id !== 'about' && s.id !== 'sitemap') {
                        html += `<li style="margin-bottom: 0.8rem;">`;
                        if (s.items && s.items.length > 0) {
                            html += `<details style="cursor: pointer;">
                                        <summary style="font-size: 1rem; font-weight: bold; color:var(--text-primary); outline: none;">
                                            <span style="font-size:0.85em; margin-right:4px;">📄</span>${s.pageTitle}
                                        </summary>
                                        <ul style="list-style: none; padding-left: 1.8rem; margin-top: 0.3rem;">`;
                            const groups = groupItems(s.items);
                            Object.keys(groups).forEach(gName => {
                                groups[gName].forEach(item => {
                                    const realUrl = (item.subSections && item.subSections.length > 0) ? `#${s.id}/${item.slug}` : (item.linkUrl || 'javascript:void(0)');
                                    html += `<li style="margin-bottom:0.2rem; font-size: 0.85rem; display: flex; align-items: center;">
                                            <span style="color:var(--text-light); margin-right:6px; font-size: 0.8em;">└──</span>
                                            <a style="color:var(--accent); text-decoration:none;" href="${realUrl}">${item.displayTitle}</a>
                                          </li>`;
                                });
                            });
                            html += '</ul></details>';
                        } else {
                            html += `<div style="font-size: 1rem; font-weight: bold; color:var(--text-primary);">
                                        <a href="#${s.id}" style="color:var(--text-primary); text-decoration:none;">
                                            <span style="font-size:0.85em; margin-right:4px;">📄</span>${s.pageTitle}
                                        </a>
                                     </div>`;
                        }
                        html += `</li>`;
                    }
                });
                html += '</ul>';
                customDiv.innerHTML = html;
            } else {
                customDiv.innerHTML = section.customHTML;
            }
            secDiv.appendChild(customDiv);
        }
        contentContainer.appendChild(secDiv);
    });

    let currentActiveSectionId = null;

    function renderDetailView(parentSectionId, slug) {
        const section = portfolioData.sections.find(s => s.id === parentSectionId);
        if (!section) return;
        let foundItem = null;
        if(section.items) {
           const groups = groupItems(section.items);
           Object.keys(groups).forEach(g => {
               const match = groups[g].find(i => i.slug === slug);
               if(match) foundItem = match;
           });
        }
        if(!foundItem) return;

        let detailSec = document.getElementById('detail-section');
        if (!detailSec) {
            detailSec = document.createElement('section'); detailSec.id = 'detail-section';
            detailSec.className = 'content-section'; contentContainer.appendChild(detailSec);
        }

        // Keep DOM clean
        detailSec.innerHTML = '';

        const backBtn = document.createElement('a');
        backBtn.className = 'back-btn';
        backBtn.textContent = '← BACK TO COURSES';
        backBtn.href = '#' + parentSectionId;
        backBtn.style.display = 'inline-block';
        backBtn.style.textDecoration = 'none';
        detailSec.appendChild(backBtn);

        const title = document.createElement('h2');
        title.className = 'detail-title';
        title.textContent = foundItem.displayTitle || foundItem.title;
        detailSec.appendChild(title);

        if(foundItem.subSections) {
            foundItem.subSections.forEach(sub => {
                const subDiv = document.createElement('div'); subDiv.className = 'detail-subsection';
                
                if (sub.subTitle) {
                    const subHeader = document.createElement('h4'); subHeader.className = 'detail-subtitle';
                    subHeader.textContent = sub.subTitle; subDiv.appendChild(subHeader);
                }

                if (sub.text) {
                    const p = document.createElement('p');
                    p.innerHTML = sub.text;
                    p.style.textAlign = 'justify';
                    p.style.marginBottom = '1.5rem';
                    p.style.lineHeight = '1.6';
                    p.style.fontSize = '0.85rem';
                    p.style.color = 'var(--text-secondary)';
                    subDiv.appendChild(p);
                }

                const list = document.createElement('ul'); list.className = 'detail-link-list';
                if(sub.links) {
                    sub.links.forEach(linkObj => {
                        const li = document.createElement('li'); const a = document.createElement('a');
                        a.className = 'detail-link'; a.href = linkObj.url && linkObj.url !== '#' ? linkObj.url : 'javascript:void(0)';
                        a.textContent = linkObj.text;
                        if(a.href !== 'javascript:void(0)') { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
                        li.appendChild(a); list.appendChild(li);
                    });
                }
                subDiv.appendChild(list); detailSec.appendChild(subDiv);
                const hr = document.createElement('hr'); hr.style.border = 'none'; hr.style.borderBottom = '1px solid var(--border-light)';
                hr.style.marginBottom = '2.5rem'; detailSec.appendChild(hr);
            });
        }

        return detailSec;
    }

    function doTransition(hideElements, showElement, customListAnimSec) {
        let maxDelay = 0;
        hideElements.forEach(el => {
            if (el.classList.contains('active')) {
                el.style.opacity = '0'; el.style.transform = 'translateY(15px)';
                maxDelay = 300;
            }
        });
        
        setTimeout(() => {
            hideElements.forEach(el => el.classList.remove('active'));
            showElement.classList.add('active');
            void showElement.offsetWidth;
            showElement.style.opacity = '1'; showElement.style.transform = 'translateY(0)';
            
            if(customListAnimSec) {
                const listItems = customListAnimSec.querySelectorAll('.list-item-anim');
                listItems.forEach((li, i) => {
                    li.style.opacity = '0'; li.style.transform = 'translateY(15px)';
                    setTimeout(() => { li.style.opacity = '1'; li.style.transform = 'translateY(0)'; }, 50 + (i * 60));
                });
            }

            // Scrolled position correction removed to prevent top title from hiding
        }, maxDelay);
    }

    function handleRoute() {
        const hash = window.location.hash.replace('#', '');
        if (!hash) { window.location.hash = portfolioData.sections[0].id; return; }

        const parts = hash.split('/');
        const parentId = parts[0];
        const detailSlug = parts[1];

        const targetSec = document.getElementById(parentId);
        if (!targetSec) return;

        // Update Nav Menu State
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.querySelector(`.nav-item[data-target="${parentId}"]`);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }

        const allSections = Array.from(document.querySelectorAll('.content-section'));

        if (detailSlug) {
            const detailSec = renderDetailView(parentId, detailSlug);
            if(detailSec) {
               const toHide = allSections.filter(s => s.id !== 'detail-section');
               if (!detailSec.classList.contains('active') || currentActiveSectionId !== hash) {
                   doTransition(toHide, detailSec);
                   currentActiveSectionId = hash;
               }
            }
        } else {
            const toHide = allSections.filter(s => s.id !== parentId);
            if (!targetSec.classList.contains('active') || currentActiveSectionId !== hash) {
                doTransition(toHide, targetSec, targetSec);
                currentActiveSectionId = hash;
            }
        }
    }

    window.addEventListener('hashchange', handleRoute);
    handleRoute();
});
