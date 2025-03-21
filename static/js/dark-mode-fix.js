// This script executes before the DOM is fully loaded to prevent flash of light theme
(function () {
  // Check stored theme or system preference
  const storedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (storedTheme === 'dark' ||
    (!storedTheme && prefersDark)) {
    // Apply dark theme immediately
    document.documentElement.setAttribute('data-theme', 'dark');

    // Create and append a style element to ensure body styles are applied immediately
    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: #121212 !important;
        background-image: none !important;
        color: #e0e0e0 !important;
      }
      
      .publication-title {
        background: linear-gradient(90deg, #64b5ff, #96a4ff) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        text-shadow: 0 0 8px rgba(100, 181, 255, 0.3) !important;
      }
      
      .feature-item {
        background-color: #1e1e1e !important;
        border-left: 4px solid #5e9cf9 !important;
      }
      
      .feature-item:nth-child(even) {
        border-left: 4px solid #7a8eec !important;
      }
      
      .feature-number {
        color: rgba(94, 156, 249, 0.4) !important;
      }
      
      .feature-content h4 {
        color: #e0e0e0 !important;
      }
      
      .feature-content p {
        color: #d0d0d0 !important;
      }
      
      figure {
        background-color: #1e1e1e !important;
      }
      
      figcaption {
        color: #b0b0b0 !important;
        border-top: 1px solid #333333 !important;
      }
      
      .abstract-text {
        background-color: rgba(94, 156, 249, 0.07) !important;
        color: #d0d0d0 !important;
      }
    `;
    document.head.appendChild(style);
  } else if (storedTheme === 'light' || (!storedTheme && !prefersDark)) {
    // Explicitly apply light theme
    document.documentElement.setAttribute('data-theme', 'light');

    // Create and append a style element to ensure light mode styles are applied immediately
    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: #f9f9f9 !important;
        background-image: linear-gradient(to bottom, #ffffff, #f5f5f5) !important;
        color: #333333 !important;
      }
      
      .publication-title {
        background: linear-gradient(90deg, #3273dc, #485fc7) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        text-shadow: none !important;
      }
      
      .feature-item {
        background-color: #ffffff !important;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03) !important;
      }
      
      .feature-item:nth-child(odd) {
        border-left: 4px solid #3273dc !important;
      }
      
      .feature-item:nth-child(even) {
        border-left: 4px solid #485fc7 !important;
      }
      
      .feature-number {
        color: rgba(50, 115, 220, 0.5) !important;
        font-weight: bold !important;
        text-shadow: 0 0 1px rgba(50, 115, 220, 0.1) !important;
      }
      
      .feature-item:nth-child(even) .feature-number {
        color: rgba(72, 95, 199, 0.5) !important;
      }
      
      .feature-content h4 {
        color: #333333 !important;
        font-weight: 600 !important;
      }
      
      .feature-content p {
        color: #444444 !important;
      }
      
      figure {
        background-color: #ffffff !important;
      }
      
      figcaption {
        color: #666666 !important;
        border-top: 1px solid #eeeeee !important;
      }
      
      figcaption b {
        color: #333333 !important;
        font-weight: 600 !important;
      }
      
      .abstract-text {
        background-color: rgba(50, 115, 220, 0.03) !important;
        color: #444444 !important;
      }
      
      .tldr-box {
        background-color: #f9f9f9 !important;
        border-left: 5px solid #3273dc !important;
      }
      
      .tldr-title {
        color: #3273dc !important;
      }
    `;
    document.head.appendChild(style);
  }
})(); 