const API_URL = '/api'

async function fetchProperties() {
    try {
        const response = await fetch(`${API_URL}/properties`)
        const properties = await response.json()
        displayProperties(properties.slice(0, 3))
    } catch (error) {
        console.error('Error fetching properties:', error)
    }
}

function displayProperties(properties) {
    const grid = document.getElementById('propertiesGrid')
    if (!grid) return

    // Sample images for properties
    const sampleImages = [
        'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=500&h=300&fit=crop'
    ]

    grid.innerHTML = properties.map((property, index) => `
        <div class="property-card" onclick="viewProperty('${property.id}')">
            <img src="${property.images?.[0]?.url || sampleImages[index % 3]}" alt="${property.name}" class="property-image">
            <div class="property-content">
                <div class="property-header">
                    <h3 class="property-title">${property.name}</h3>
                    <span class="property-rating">★ 4.9</span>
                </div>
                <p class="property-location">${property.location}</p>
                <div class="property-details">
                    <span>${property.bedrooms} Beds</span>
                    <span>${property.bathrooms} Baths</span>
                    <span>${property.guestCapacity} Guests</span>
                </div>
                <div class="property-amenities">
                    <span class="amenity-tag">WiFi</span>
                    <span class="amenity-tag">Pool</span>
                    <span class="amenity-tag">AC</span>
                </div>
                <p class="property-price">KES ${property.pricePerNight.toLocaleString()} <span style="font-size: 0.875rem; color: #666;">/ night</span></p>
            </div>
        </div>
    `).join('')
}

async function fetchAttractions() {
    try {
        const response = await fetch(`${API_URL}/attractions`)
        const attractions = await response.json()
        displayAttractions(attractions.slice(0, 3))
    } catch (error) {
        console.error('Error fetching attractions:', error)
    }
}

function displayAttractions(attractions) {
    const grid = document.getElementById('attractionsGrid')
    if (!grid) return

    const attractionImages = [
        'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&h=300&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop'
    ]

    grid.innerHTML = attractions.map((attraction, index) => `
        <div class="property-card">
            <img src="${attraction.images?.[0] || attractionImages[index % 3]}" alt="${attraction.name}" class="property-image">
            <div class="property-content">
                <span class="amenity-tag">${attraction.category}</span>
                <h3 class="property-title">${attraction.name}</h3>
                <p class="property-location">${attraction.description}</p>
                <p class="property-price">KES ${attraction.entryFee?.toLocaleString() || 'Free'}</p>
            </div>
        </div>
    `).join('')
}

function viewProperty(id) {
    window.location.href = `property.html?id=${id}`
}

function viewPropertyDetail(propertySlug) {
    window.location.href = `property.html?property=${propertySlug}`
}

function searchProperties() {
    const location = document.getElementById('location').value
    const checkIn = document.getElementById('checkIn').value
    const checkOut = document.getElementById('checkOut').value
    const guests = document.getElementById('guests').value
    
    // Validate inputs
    if (!location) {
        alert('Please enter a location')
        return
    }
    
    if (!checkIn) {
        alert('Please select Day Check In date')
        return
    }
    
    if (!checkOut) {
        alert('Please select Day Check Out date')
        return
    }
    
    if (!guests || guests < 1) {
        alert('Please enter number of guests')
        return
    }
    
    // Validate check-out is after check-in
    if (new Date(checkOut) <= new Date(checkIn)) {
        alert('Day Check Out must be after Day Check In')
        return
    }
    
    // Redirect to properties page with search parameters
    window.location.href = `properties.html?location=${encodeURIComponent(location)}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
}

if (document.getElementById('propertiesGrid')) {
    fetchProperties()
}

if (document.getElementById('attractionsGrid')) {
    fetchAttractions()
}

// Cart count update function
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const countElements = document.querySelectorAll('#cartCount, .cart-count')
    countElements.forEach(el => {
        if (el) el.textContent = count
    })
}

// Initialize cart count on page load
updateCartCount()

// Add hover effect to search button
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.querySelector('.btn-search')
    if (searchBtn) {
        searchBtn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)'
            this.style.boxShadow = '0 6px 20px rgba(249, 115, 22, 0.5)'
        })
        searchBtn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)'
            this.style.boxShadow = '0 4px 12px rgba(249, 115, 22, 0.4)'
        })
    }
    
    // Make search card fully visible when clicked
    const searchCard = document.querySelector('.search-card')
    const searchInputs = document.querySelectorAll('.search-card input')
    let cardActivated = false
    
    // Activate card on click anywhere on it
    if (searchCard) {
        searchCard.addEventListener('click', function() {
            if (!cardActivated) {
                this.classList.add('active')
                cardActivated = true
            }
        })
    }
    
    // Activate card when any input is focused
    searchInputs.forEach(input => {
        input.addEventListener('focus', function() {
            if (!cardActivated && searchCard) {
                searchCard.classList.add('active')
                cardActivated = true
            }
            this.style.borderColor = '#f97316'
            this.style.boxShadow = '0 0 0 3px rgba(249, 115, 22, 0.1)'
        })
        input.addEventListener('blur', function() {
            if (cardActivated) {
                this.style.borderColor = '#e5e7eb'
                this.style.boxShadow = 'none'
            }
        })
    })
})

// ── Mobile hamburger menu (shared across all pages) ──
function toggleMenu() {
    const nav = document.getElementById('mobileNav')
    const btn = document.getElementById('hamburger')
    if (!nav || !btn) return
    nav.classList.toggle('open')
    btn.classList.toggle('open')
}

// Inject hamburger + mobile nav into every page that has a .nav element
document.addEventListener('DOMContentLoaded', function () {
    const navEl = document.querySelector('.nav')
    const header = document.querySelector('.header')
    if (!navEl || document.getElementById('hamburger')) return

    // Add hamburger button
    const hamburger = document.createElement('button')
    hamburger.id = 'hamburger'
    hamburger.className = 'hamburger'
    hamburger.setAttribute('aria-label', 'Toggle menu')
    hamburger.innerHTML = '<span></span><span></span><span></span>'
    hamburger.onclick = toggleMenu
    navEl.appendChild(hamburger)

    // Build mobile nav from existing desktop nav-links
    const desktopLinks = document.querySelector('.nav-links')
    if (!desktopLinks) return

    const mobileNav = document.createElement('nav')
    mobileNav.id = 'mobileNav'
    mobileNav.className = 'mobile-nav'
    mobileNav.innerHTML = desktopLinks.innerHTML +
        `<div class="mobile-nav-actions">
            <button class="btn-primary" onclick="window.location.href='list-property.html'">List Property</button>
            <button class="btn-text" onclick="window.location.href='login.html'">Sign In</button>
        </div>`

    header.appendChild(mobileNav)
})
