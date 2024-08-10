// Select all <img> elements with the class 'svgImg'
const svgImages = document.querySelectorAll('.svgImg');

// Iterate over the NodeList and perform actions on each image if needed

svgImages.forEach(img => {
    // Store the original source
    const originalSrc = img.src;

    // Add event listener for mouseover
    img.addEventListener('mouseover', () => {
        // Change the source to the hover version
        img.src = originalSrc.replace('_header', '').replace('.svg', '_hover.svg');
    });

    // Add event listener for mouseout
    img.addEventListener('mouseout', () => {
        // Revert the source to the original
        img.src = originalSrc;
    });
});