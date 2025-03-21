// Add copy buttons to all citation boxes
document.addEventListener('DOMContentLoaded', function () {
    // Find all citation boxes
    const citationBoxes = document.querySelectorAll('.citation-box');

    citationBoxes.forEach(box => {
        // Create the copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.setAttribute('aria-label', 'Copy citation');
        copyButton.setAttribute('title', 'Copy citation');

        // Add the button to the citation box
        box.appendChild(copyButton);

        // Add click event listener
        copyButton.addEventListener('click', function () {
            // Get the text content of the citation box
            const citationText = box.textContent.replace('Copy', '').trim();

            // Copy to clipboard
            navigator.clipboard.writeText(citationText)
                .then(() => {
                    // Visual feedback on successful copy
                    copyButton.innerHTML = '<i class="fas fa-check"></i>';
                    copyButton.classList.add('copied');

                    // Reset button after 2 seconds
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                        copyButton.classList.remove('copied');
                    }, 2000);
                })
                .catch(err => {
                    console.error('Failed to copy: ', err);
                    copyButton.innerHTML = '<i class="fas fa-times"></i>';

                    // Reset button after 2 seconds
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                    }, 2000);
                });
        });
    });
}); 