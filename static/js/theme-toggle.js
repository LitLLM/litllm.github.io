// Function to set the theme
function setTheme(themeName) {
    document.documentElement.setAttribute('data-theme', themeName);
    localStorage.setItem('theme', themeName);
    updateThemeIcon(themeName);

    // Apply theme class to body
    if (themeName === 'dark') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }

    // Force refresh of critical styles by applying inline styles
    if (themeName === 'dark') {
        document.body.style.backgroundColor = '#121212';
        document.body.style.backgroundImage = 'linear-gradient(135deg, #121212, #1a1a1a)';
        document.body.style.color = '#e0e0e0';

        // Apply additional dark mode styles to elements that might have inline styles
        applyDarkModeStyles();
    } else {
        // Apply light mode styles directly
        document.body.style.backgroundColor = '#f9f9f9';
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #ffffff, #f5f5f5)';
        document.body.style.color = '#333333';

        // Apply specific light mode styles to override any persistent dark mode styles
        applyLightModeStyles();
    }
    
    // Force a repaint/reflow to ensure all styling is applied correctly
    void document.body.offsetHeight;
}

// Function to apply dark mode styles directly to elements
function applyDarkModeStyles() {
    // Publication title
    document.querySelectorAll('.publication-title').forEach(title => {
        title.style.background = 'linear-gradient(90deg, #64b5ff, #96a4ff)';
        title.style.webkitBackgroundClip = 'text';
        title.style.webkitTextFillColor = 'transparent';
        title.style.textShadow = '0 0 8px rgba(100, 181, 255, 0.3)';
    });

    // Feature items
    document.querySelectorAll('.feature-item').forEach((item, index) => {
        item.style.backgroundColor = '#1e1e1e';
        item.style.borderLeftColor = index % 2 === 0 ? '#5e9cf9' : '#7a8eec';
    });

    // Feature numbers
    document.querySelectorAll('.feature-number').forEach((num, index) => {
        num.style.color = index % 2 === 0 ? 'rgba(94, 156, 249, 0.4)' : 'rgba(122, 142, 236, 0.4)';
    });

    // Feature content text
    document.querySelectorAll('.feature-content h4').forEach(heading => {
        heading.style.color = '#e0e0e0';
    });

    document.querySelectorAll('.feature-content p').forEach(para => {
        para.style.color = '#d0d0d0';
    });

    // Figures and figcaptions
    document.querySelectorAll('figure').forEach(fig => {
        fig.style.backgroundColor = '#1e1e1e';
    });

    document.querySelectorAll('figcaption').forEach(caption => {
        caption.style.color = '#b0b0b0';
        caption.style.borderTopColor = '#333333';
    });

    // Abstract text
    document.querySelectorAll('.abstract-text').forEach(text => {
        text.style.backgroundColor = 'rgba(94, 156, 249, 0.07)';
        text.style.color = '#d0d0d0';
    });

    // Bold text styling for dark mode
    document.querySelectorAll('strong, b').forEach(boldText => {
        boldText.style.color = '#78b9ff';
        boldText.style.fontWeight = '600';
        boldText.style.backgroundColor = 'rgba(50, 115, 220, 0.15)';
        boldText.style.padding = '0 4px';
        boldText.style.borderRadius = '3px';
        boldText.style.display = 'inline-block';
        boldText.style.position = 'relative';
        boldText.style.zIndex = '2';
        boldText.style.textShadow = '0 0 1px rgba(120, 185, 255, 0.3)';
    });

    // Special handling for sections that might contain bold text
    document.querySelectorAll('.section p, .abstract-text').forEach(element => {
        // Force a repaint/reflow to ensure all styling is applied
        const display = element.style.display;
        element.style.display = 'none';
        void element.offsetHeight; // Trigger reflow
        element.style.display = display;
        
        // Get all bold elements and ensure they have correct styling
        element.querySelectorAll('strong, b').forEach(boldText => {
            boldText.style.color = '#78b9ff';
            boldText.style.fontWeight = '600';
            boldText.style.backgroundColor = 'rgba(50, 115, 220, 0.15)';
            boldText.style.padding = '0 4px';
            boldText.style.borderRadius = '3px';
            boldText.style.display = 'inline-block';
            boldText.style.position = 'relative';
            boldText.style.zIndex = '2';
            boldText.style.textShadow = '0 0 1px rgba(120, 185, 255, 0.3)';
        });
    });

    // TL;DR box
    document.querySelectorAll('.tldr-box').forEach(box => {
        box.style.backgroundColor = '#252525';
        box.style.borderLeftColor = '#5e9cf9';
    });

    document.querySelectorAll('.tldr-title').forEach(title => {
        title.style.color = '#7a8eec';
    });

    // Citation boxes
    document.querySelectorAll('.citation-box').forEach(box => {
        box.style.backgroundColor = '#252525';
        box.style.color = '#d0d0d0';
    });
}

// Function to explicitly apply light mode styles (instead of just removing dark mode styles)
function applyLightModeStyles() {
    // Publication title
    document.querySelectorAll('.publication-title').forEach(title => {
        title.style.background = 'linear-gradient(90deg, #3273dc, #485fc7)';
        title.style.webkitBackgroundClip = 'text';
        title.style.webkitTextFillColor = 'transparent';
        title.style.textShadow = 'none';
    });

    // Feature items
    document.querySelectorAll('.feature-item').forEach((item, index) => {
        item.style.backgroundColor = '#ffffff';
        item.style.borderLeftColor = index % 2 === 0 ? '#3273dc' : '#485fc7';
        item.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.03)';
    });

    // Feature numbers
    document.querySelectorAll('.feature-number').forEach((num, index) => {
        num.style.color = index % 2 === 0 ? 'rgba(50, 115, 220, 0.5)' : 'rgba(72, 95, 199, 0.5)';
        num.style.fontWeight = 'bold';
        num.style.textShadow = '0 0 1px rgba(50, 115, 220, 0.1)';
    });

    // Feature content text
    document.querySelectorAll('.feature-content h4').forEach(heading => {
        heading.style.color = '#333333';
        heading.style.fontWeight = '600';
    });

    document.querySelectorAll('.feature-content p').forEach(para => {
        para.style.color = '#444444';
    });

    // Figures and figcaptions
    document.querySelectorAll('figure').forEach(fig => {
        fig.style.backgroundColor = '#ffffff';
    });

    document.querySelectorAll('figcaption').forEach(caption => {
        caption.style.color = '#666666';
        caption.style.borderTopColor = '#eeeeee';

        // Apply styles to bold elements within figcaptions
        caption.querySelectorAll('b').forEach(boldText => {
            boldText.style.color = '#333333';
            boldText.style.fontWeight = '600';
        });
    });

    // Abstract text
    document.querySelectorAll('.abstract-text').forEach(text => {
        text.style.backgroundColor = 'rgba(50, 115, 220, 0.03)';
        text.style.color = '#444444';
    });

    // Reset bold text styling for light mode
    document.querySelectorAll('strong, b').forEach(boldText => {
        boldText.style.color = '#333333';
        boldText.style.fontWeight = '700';
        boldText.style.backgroundColor = 'transparent';
        boldText.style.padding = '0';
        boldText.style.borderRadius = '0';
    });

    // TL;DR box
    document.querySelectorAll('.tldr-box').forEach(box => {
        box.style.backgroundColor = '#f9f9f9';
        box.style.borderLeftColor = '#3273dc';
    });

    document.querySelectorAll('.tldr-title').forEach(title => {
        title.style.color = '#3273dc';
    });

    // Citation boxes
    document.querySelectorAll('.citation-box').forEach(box => {
        box.style.backgroundColor = '#f5f5f5';
        box.style.color = '#333333';
    });
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Function to update the theme toggle icon
function updateThemeIcon(themeName) {
    const themeIcon = document.getElementById('theme-icon');
    if (themeIcon) {
        themeIcon.className = themeName === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Function to initialize the theme based on user preference or system preference
function initTheme() {
    // Check if the user has previously chosen a theme
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme) {
        // Use the stored theme preference
        setTheme(storedTheme);
    } else {
        // Check if the user's system prefers dark mode
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

        // Set theme based on system preference
        setTheme(prefersDarkScheme ? 'dark' : 'light');
    }
}

// Initialize the theme when the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    initTheme();

    // Add event listener to the theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }

    // Add event listener for system color scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        // Only change theme if user hasn't manually set a preference
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
}); 