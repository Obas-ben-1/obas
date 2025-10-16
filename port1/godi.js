        // Simple animation for elements when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });
        
        // Observe elements that should animate in
        document.querySelectorAll('.property-card, .service-card, .testimonial-card').forEach(card => {
            observer.observe(card);
        });
        
        // Add animation classes to elements in view
        document.querySelectorAll('.property-card, .service-card, .testimonial-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            
            // Add CSS animation when element comes into view
            el.classList.add('animate');
        });
        
        // Simple animation handler
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.property-card, .service-card, .testimonial-card');
            
            animatedElements.forEach(el => {
                if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
            
            window.addEventListener('scroll', function() {
                animatedElements.forEach(el => {
                    if (el.getBoundingClientRect().top < window.innerHeight - 50) {
                        el.style.opacity = '1';
                        el.style.transform = 'translateY(0)';
                    }
                });
            });
        });
        // Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    // If search bar is in the properties page header
    if (searchInput && searchButton) {
        searchButton.addEventListener('click', performSearch);
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // If search bar is in the properties page filter section
    const propertySearchInput = document.querySelector('.search-box input[type="text"]');
    const propertySearchButton = document.querySelector('.search-box .cta-button');
    
    if (propertySearchInput && propertySearchButton) {
        propertySearchButton.addEventListener('click', performPropertySearch);
        propertySearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performPropertySearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // Redirect to properties page with search query
            window.location.href = `properties.html?search=${encodeURIComponent(searchTerm)}`;
        }
    }
    
    function performPropertySearch() {
        const searchTerm = propertySearchInput.value.trim().toLowerCase();
        if (searchTerm) {
            filterPropertiesBySearch(searchTerm);
        } else {
            // If search is empty, show all properties
            renderProperties(properties);
        }
    }
    
    function filterPropertiesBySearch(searchTerm) {
        const filtered = properties.filter(property => {
            return (
                property.title.toLowerCase().includes(searchTerm) ||
                property.address.toLowerCase().includes(searchTerm) ||
                property.type.toLowerCase().includes(searchTerm) ||
                property.location.toLowerCase().includes(searchTerm)
            );
        });
        
        renderProperties(filtered);
        
        // Update results count
        const resultsCount = document.createElement('div');
        resultsCount.className = 'results-count';
        resultsCount.textContent = `Found ${filtered.length} properties matching "${searchTerm}"`;
        
        const propertiesContainer = document.getElementById('properties-container');
        propertiesContainer.parentNode.insertBefore(resultsCount, propertiesContainer);
    }
    
    // Check for URL search parameter on page load
    function checkUrlForSearch() {
        const urlParams = new URLSearchParams(window.location.search);
        const searchQuery = urlParams.get('search');
        
        if (searchQuery) {
            // If coming from main search bar
            propertySearchInput.value = searchQuery;
            filterPropertiesBySearch(searchQuery);
        }
    }
    
    // Call this on properties page load
    checkUrlForSearch();
});
    