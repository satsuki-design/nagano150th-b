// Very slow firework explosion card animation controller
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    console.log('Very slow firework explosion animation initialized');
    console.log(`Total cards: ${cards.length}`);
    
    // Card directions for firework explosion
    const directions = ['straight up', 'top-left corner', 'top-right corner', 'bottom-left corner', 'bottom-right corner'];
    
    // Log card information
    cards.forEach((card, index) => {
        const cardNumber = index + 1;
        const title = card.querySelector('.card-title').textContent;
        const subtitle = card.querySelector('.card-subtitle').textContent;
        const direction = directions[index];
        
        console.log(`Card ${cardNumber}: ${title} (${subtitle}) - Direction: ${direction}`);
        
        // Add click interaction
        card.addEventListener('click', function() {
            console.log(`Card ${cardNumber} clicked: ${title}`);
            // Add any click functionality here
        });
        
        // Add hover logging
        card.addEventListener('mouseenter', function() {
            console.log(`Hovering over card ${cardNumber}`);
        });
    });
    
    // Start very slow firework explosion animation sequence
    function startSlowFireworkExplosion() {
        console.log('Starting very slow firework explosion sequence...');
        console.log('Each card will take 3.5 seconds to reach its destination');
        
        cards.forEach((card, index) => {
            const delay = 1000 + (index * 1200); // Start at 1s, then 1.2s intervals
            
            setTimeout(() => {
                card.classList.add('bloomed');
                console.log(`Card ${index + 1} launched - slowly flying to ${directions[index]} (3.5s journey)`);
            }, delay);
        });
    }
    
    // Start animation after page load
    startSlowFireworkExplosion();
    
    // Animation completion tracking
    const totalAnimationTime = 1000 + (cards.length * 1200) + 3500; // Initial delay + intervals + animation duration
    setTimeout(() => {
        console.log('Very slow firework explosion complete - all cards have reached their final positions');
        
        // Add completion class to all cards
        cards.forEach((card, index) => {
            card.classList.add('animation-complete');
            console.log(`Card ${index + 1} settled permanently in ${directions[index]}`);
        });
        
        // Optional: Add any post-animation functionality here
        console.log('All cards are now ready for interaction in their final positions');
        
    }, totalAnimationTime);
    
    // Window resize handler for responsive behavior
    window.addEventListener('resize', function() {
        const isMobile = window.innerWidth <= 768;
        console.log(`Window resized - Mobile view: ${isMobile}`);
    });
    
    console.log('Very slow firework explosion setup complete');
    console.log('Animation specs: 3.5s duration per card, 1.2s intervals, ease-out, wide radial coverage');
    console.log(`Total sequence duration: ${(totalAnimationTime / 1000).toFixed(1)} seconds`);
});
