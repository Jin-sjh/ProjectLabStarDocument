document.addEventListener('DOMContentLoaded', function() {
    initBackToTop();
    initSmoothScroll();
    initCodeCopyButtons();
    initScrollProgress();
    initHighlightCurrentSection();
    initKeyboardShortcuts();
    initHoverEffects();
    enhanceSearch();
    initTableOfContents();
    initAnimations();
    initThemeTransition();
});

function initBackToTop() {
    const backToTop = document.createElement('div');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    backToTop.setAttribute('aria-label', '返回顶部');
    backToTop.setAttribute('data-tooltip', '返回顶部');
    document.body.appendChild(backToTop);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                history.pushState(null, null, targetId);
            }
        });
    });
}

function initCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('pre.highlight, div.highlight');

    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-button';
        copyButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
        copyButton.setAttribute('aria-label', '复制代码');
        copyButton.setAttribute('data-tooltip', '点击复制');

        block.style.position = 'relative';
        block.appendChild(copyButton);

        copyButton.addEventListener('click', async function() {
            const code = block.querySelector('code');
            if (code) {
                try {
                    await navigator.clipboard.writeText(code.textContent);
                    copyButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>';
                    copyButton.classList.add('copied');

                    setTimeout(() => {
                        copyButton.innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>';
                        copyButton.classList.remove('copied');
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy:', err);
                }
            }
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .copy-code-button {
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            padding: 0.5rem;
            background: rgba(99, 179, 237, 0.2);
            border: 1px solid rgba(99, 179, 237, 0.4);
            border-radius: 6px;
            cursor: pointer;
            opacity: 0;
            transition: all 0.2s ease;
            color: #4299e1;
        }

        .copy-code-button:hover {
            background: rgba(99, 179, 237, 0.3);
            transform: scale(1.05);
        }

        .copy-code-button.copied {
            background: rgba(72, 187, 120, 0.2);
            border-color: rgba(72, 187, 120, 0.4);
            color: #48bb78;
        }

        pre.highlight:hover .copy-code-button,
        div.highlight:hover .copy-code-button {
            opacity: 1;
        }
    `;
    document.head.appendChild(style);
}

function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.appendChild(progressBar);

    const style = document.createElement('style');
    style.textContent = `
        .scroll-progress-bar {
            position: fixed;
            top: 0;
            left: 0;
            height: 3px;
            background: linear-gradient(90deg, #2c5282, #ed8936);
            width: 0%;
            z-index: 9999;
            transition: width 0.1s ease;
        }
    `;
    document.head.appendChild(style);

    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = scrollPercent + '%';
    });
}

function initHighlightCurrentSection() {
    const sections = document.querySelectorAll('h1, h2, h3');
    const tocLinks = document.querySelectorAll('.bd-toc a, .toctree-l1 > a, .toctree-l2 > a');

    if (sections.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                tocLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + entry.target.id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        rootMargin: '-20% 0px -70% 0px'
    });

    sections.forEach(section => {
        if (section.id) {
            observer.observe(section);
        }
    });

    const style = document.createElement('style');
    style.textContent = `
        .bd-toc a.active,
        .toctree-l1 > a.active,
        .toctree-l2 > a.active {
            color: #ed8936 !important;
            font-weight: 600;
            border-left-color: #ed8936 !important;
            background: rgba(237, 137, 54, 0.1) !important;
        }

        .bd-toc a:hover,
        .toctree-l1 > a:hover,
        .toctree-l2 > a:hover {
            padding-left: 2rem !important;
        }
    `;
    document.head.appendChild(style);
}

function initKeyboardShortcuts() {
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 't' || e.key === 'T') {
            e.preventDefault();
            const searchInput = document.querySelector('.sidebar-search input, .bd-search input, input[placeholder*="搜索"]');
            if (searchInput) {
                searchInput.focus();
            }
        }

        if (e.key === '/' && e.ctrlKey) {
            e.preventDefault();
            const searchInput = document.querySelector('.sidebar-search input, .bd-search input, input[placeholder*="搜索"]');
            if (searchInput) {
                searchInput.focus();
            }
        }

        if (e.key === 'k' && e.ctrlKey) {
            e.preventDefault();
            const searchInput = document.querySelector('.sidebar-search input, .bd-search input, input[placeholder*="搜索"]');
            if (searchInput) {
                searchInput.focus();
            }
        }

        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        if (e.key === 'End') {
            e.preventDefault();
            window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
        }
    });

    const shortcutHint = document.createElement('div');
    shortcutHint.className = 'keyboard-shortcuts-hint';
    shortcutHint.innerHTML = `
        <span><kbd>Ctrl</kbd>+<kbd>K</kbd> 搜索</span>
        <span><kbd>Ctrl</kbd>+<kbd>/</kbd> 搜索</span>
        <span><kbd>T</kbd> 搜索</span>
        <span><kbd>Home</kbd> 返回顶部</span>
    `;
    document.querySelector('.footer-content')?.appendChild(shortcutHint);

    const style = document.createElement('style');
    style.textContent = `
        .keyboard-shortcuts-hint {
            display: flex;
            gap: 1rem;
            font-size: 0.75rem;
            color: #718096;
        }

        .keyboard-shortcuts-hint kbd {
            display: inline-block;
            padding: 0.15rem 0.4rem;
            font-size: 0.7rem;
            line-height: 1;
            color: #4a5568;
            background: #edf2f7;
            border: 1px solid #e2e8f0;
            border-radius: 4px;
            box-shadow: 0 1px 0 #cbd5e0;
        }

        [data-theme="dark"] .keyboard-shortcuts-hint kbd {
            background: #2d3748;
            color: #a0aec0;
            border-color: #4a5568;
            box-shadow: 0 1px 0 #1a202c;
        }

        @media (max-width: 768px) {
            .keyboard-shortcuts-hint {
                display: none;
            }
        }
    `;
    document.head.appendChild(style);
}

function initHoverEffects() {
    const cards = document.querySelectorAll('.card, .rst-content .section, .admonition');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });

    const links = document.querySelectorAll('a:not(.copy-code-button):not(.navbar-brand):not(.nav-link)');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(4px)';
        });

        link.addEventListener('mouseleave', function() {
            this.style.transform = '';
        });
    });
}

function enhanceSearch() {
    const searchInputs = document.querySelectorAll('.sidebar-search input, .bd-search input');

    searchInputs.forEach(input => {
        if (!input) return;

        input.setAttribute('placeholder', '🔍 按 T 键快速搜索...');

        const searchHint = document.createElement('div');
        searchHint.className = 'search-hint';
        searchHint.textContent = '提示：按 Ctrl+K 或 T 快速聚焦搜索';
        input.parentNode.appendChild(searchHint);

        input.addEventListener('focus', function() {
            searchHint.style.opacity = '1';
            searchHint.style.transform = 'translateY(0)';
        });

        input.addEventListener('blur', function() {
            searchHint.style.opacity = '0';
            searchHint.style.transform = 'translateY(10px)';
        });
    });

    const style = document.createElement('style');
    style.textContent = `
        .search-hint {
            font-size: 0.75rem;
            color: #a0aec0;
            margin-top: 0.5rem;
            opacity: 0;
            transform: translateY(10px);
            transition: all 0.2s ease;
        }

        [data-theme="dark"] .search-hint {
            color: #718096;
        }
    `;
    document.head.appendChild(style);
}

function initTableOfContents() {
    const toc = document.querySelector('.bd-toc');
    if (!toc) return;

    const tocContent = toc.querySelector('.toc');
    if (!tocContent) return;

    const tocHeader = document.createElement('div');
    tocHeader.className = 'toc-header';
    tocHeader.innerHTML = '<span>📑</span> 本页目录';
    tocContent.insertBefore(tocHeader, tocContent.firstChild);

    const style = document.createElement('style');
    style.textContent = `
        .toc-header {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            font-weight: 600;
            color: #2d3748;
            padding: 0.75rem;
            border-bottom: 1px solid #e2e8f0;
            margin-bottom: 0.5rem;
        }

        [data-theme="dark"] .toc-header {
            color: #f7fafc;
            border-bottom-color: #4a5568;
        }

        .bd-toc .nav li a {
            padding: 0.4rem 0.75rem;
            font-size: 0.875rem;
            border-radius: 6px;
            transition: all 0.15s ease;
        }

        .bd-toc .nav li a:hover {
            background: rgba(99, 179, 237, 0.1);
            color: #2c5282;
        }
    `;
    document.head.appendChild(style);
}

function initAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.rst-content .section, .card, .admonition, .toctree-wrapper');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.5s ease ${index * 0.1}s`;
        fadeInObserver.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.02);
            }
        }

        .rst-content:hover {
            animation: pulse 2s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);
}

function initThemeTransition() {
    const style = document.createElement('style');
    style.textContent = `
        * {
            transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease !important;
        }

        a, button, .btn {
            transition: all 0.2s ease !important;
        }

        pre, code {
            transition: background-color 0.3s ease, color 0.3s ease !important;
        }

        .back-to-top,
        .copy-code-button {
            transition: all 0.2s ease !important;
        }
    `;
    document.head.appendChild(style);
}

window.addEventListener('load', function() {
    document.body.classList.add('loaded');

    if (window.location.hash) {
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    }
});

console.log('%c🚀 Project LabStar 文档', 'font-size: 20px; font-weight: bold; color: #2c5282;');
console.log('%c欢迎使用我们的文档系统', 'font-size: 12px; color: #718096;');
