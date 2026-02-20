const virtualTours = {
    'ocean-villa': {
        name: 'Sunset Paradise Villa',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Stunning beachfront villa with private pool and direct beach access'
            },
            {
                url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
                title: 'Living Room',
                description: 'Spacious living area with ocean views and modern furnishings'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&h=600&fit=crop',
                title: 'Master Bedroom',
                description: 'Luxurious master suite with king bed and private balcony'
            },
            {
                url: 'https://images.unsplash.com/photo-1560185009-5bf9f2849488?w=800&h=600&fit=crop',
                title: 'Kitchen',
                description: 'Fully equipped modern kitchen with island and dining area'
            },
            {
                url: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&h=600&fit=crop',
                title: 'Pool Area',
                description: 'Private infinity pool overlooking the ocean'
            },
            {
                url: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop',
                title: 'Beach Access',
                description: 'Direct access to pristine white sand beach'
            }
        ]
    },
    'garden-cottage': {
        name: 'Tropical Garden Retreat',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Charming cottage surrounded by lush tropical gardens'
            },
            {
                url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop',
                title: 'Living Area',
                description: 'Cozy living space with natural light and garden views'
            },
            {
                url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
                title: 'Bedroom',
                description: 'Comfortable bedroom with tropical decor'
            },
            {
                url: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&h=600&fit=crop',
                title: 'Garden',
                description: 'Beautiful tropical garden with seating areas'
            }
        ]
    },
    'modern-loft': {
        name: 'Urban Luxury Loft',
        images: [
            {
                url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
                title: 'Exterior View',
                description: 'Modern loft in the heart of Malindi'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
                title: 'Living Space',
                description: 'Open-plan living area with high ceilings'
            },
            {
                url: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&h=600&fit=crop',
                title: 'Bedroom',
                description: 'Modern bedroom with designer furniture'
            },
            {
                url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&h=600&fit=crop',
                title: 'Rooftop Terrace',
                description: 'Private rooftop with city views'
            }
        ]
    }
}

let currentTourIndex = 0
let currentTour = null

function openVirtualTour(tourId) {
    currentTour = virtualTours[tourId]
    currentTourIndex = 0
    
    const modal = document.getElementById('virtualTourModal')
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
    
    renderTour()
}

function closeVirtualTour() {
    const modal = document.getElementById('virtualTourModal')
    modal.style.display = 'none'
    document.body.style.overflow = 'auto'
}

function renderTour() {
    const content = document.getElementById('tourContent')
    const image = currentTour.images[currentTourIndex]
    
    content.innerHTML = `
        <div style="background: white; border-radius: 16px; overflow: hidden;">
            <div style="position: relative;">
                <img src="${image.url}" alt="${image.title}" style="width: 100%; height: 600px; object-fit: cover;">
                <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(transparent, rgba(0,0,0,0.8)); padding: 2rem; color: white;">
                    <h2 style="font-size: 2rem; margin-bottom: 0.5rem;">${image.title}</h2>
                    <p style="font-size: 1.125rem; opacity: 0.9;">${image.description}</p>
                </div>
            </div>
            
            <div style="padding: 2rem;">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                    <h3 style="font-size: 1.5rem;">${currentTour.name}</h3>
                    <div style="color: #666;">
                        ${currentTourIndex + 1} / ${currentTour.images.length}
                    </div>
                </div>
                
                <div style="display: flex; gap: 1rem; margin-bottom: 2rem;">
                    <button onclick="previousImage()" ${currentTourIndex === 0 ? 'disabled' : ''} 
                        style="flex: 1; padding: 1rem; border: 2px solid #f97316; background: white; color: #f97316; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600;"
                        ${currentTourIndex === 0 ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        ← Previous
                    </button>
                    <button onclick="nextImage()" ${currentTourIndex === currentTour.images.length - 1 ? 'disabled' : ''}
                        style="flex: 1; padding: 1rem; background: #f97316; color: white; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; font-weight: 600;"
                        ${currentTourIndex === currentTour.images.length - 1 ? 'style="opacity: 0.5; cursor: not-allowed;"' : ''}>
                        Next →
                    </button>
                </div>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 0.5rem;">
                    ${currentTour.images.map((img, index) => `
                        <div onclick="jumpToImage(${index})" style="cursor: pointer; border: ${index === currentTourIndex ? '3px solid #f97316' : '2px solid #ddd'}; border-radius: 8px; overflow: hidden;">
                            <img src="${img.url}" alt="${img.title}" style="width: 100%; height: 80px; object-fit: cover;">
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `
}

function nextImage() {
    if (currentTourIndex < currentTour.images.length - 1) {
        currentTourIndex++
        renderTour()
    }
}

function previousImage() {
    if (currentTourIndex > 0) {
        currentTourIndex--
        renderTour()
    }
}

function jumpToImage(index) {
    currentTourIndex = index
    renderTour()
}

function bookProperty(propertyName) {
    // Get price based on property name
    const prices = {
        'Sunset Paradise Villa': 35000,
        'Tropical Garden Retreat': 18000,
        'Urban Luxury Loft': 14000
    }
    
    const price = prices[propertyName] || 20000
    
    const item = {
        id: propertyName.toLowerCase().replace(/\s+/g, '-'),
        type: 'bnb',
        name: propertyName,
        price: price,
        days: 1
    }
    
    // Add to cart
    addToCart(item)
    closeVirtualTour()
}

function payNowProperty(propertyName) {
    // Get price based on property name
    const prices = {
        'Sunset Paradise Villa': 35000,
        'Tropical Garden Retreat': 18000,
        'Urban Luxury Loft': 14000
    }
    
    const price = prices[propertyName] || 20000
    
    // Pay now - go directly to checkout
    localStorage.setItem('bookingType', 'bnb')
    localStorage.setItem('bookingName', propertyName)
    localStorage.setItem('bookingPrice', `KES ${price.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    
    // Mark as booked
    markAsBooked(propertyName)
    
    closeVirtualTour()
    window.location.href = 'checkout.html'
}

// Quick Add to Cart from card (without opening virtual tour)
function quickAddToCart(propertyName, price) {
    const item = {
        id: propertyName.toLowerCase().replace(/\s+/g, '-'),
        type: 'bnb',
        name: propertyName,
        price: price,
        days: 1
    }
    
    // Add to cart
    addToCart(item)
}

// Quick Pay Now from card (without opening virtual tour)
function quickPayNow(propertyName, price) {
    // Pay now - go directly to checkout
    localStorage.setItem('bookingType', 'bnb')
    localStorage.setItem('bookingName', propertyName)
    localStorage.setItem('bookingPrice', `KES ${price.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    
    // Mark as booked
    markAsBooked(propertyName)
    
    window.location.href = 'checkout.html'
}

function markAsBooked(propertyName) {
    const bookedProperties = JSON.parse(localStorage.getItem('bookedProperties') || '[]')
    if (!bookedProperties.includes(propertyName)) {
        bookedProperties.push(propertyName)
        localStorage.setItem('bookedProperties', JSON.stringify(bookedProperties))
    }
}

function checkBookingStatus() {
    const bookedProperties = JSON.parse(localStorage.getItem('bookedProperties') || '[]')
    
    // Add BOOKED badge to booked properties
    document.querySelectorAll('.property-card-enhanced').forEach(card => {
        const titleElement = card.querySelector('.property-title-enhanced')
        if (titleElement) {
            const propertyName = titleElement.textContent.trim()
            
            if (bookedProperties.includes(propertyName)) {
                // Check if badge doesn't already exist
                if (!card.querySelector('.booked-badge')) {
                    const badge = document.createElement('div')
                    badge.className = 'booked-badge'
                    badge.style.cssText = 'position: absolute; top: 1rem; right: 1rem; background: #ef4444; color: white; padding: 0.5rem 1rem; border-radius: 6px; font-weight: bold; z-index: 10; box-shadow: 0 2px 8px rgba(0,0,0,0.2);'
                    badge.textContent = 'BOOKED'
                    
                    const imageContainer = card.querySelector('.property-image-container')
                    if (imageContainer) {
                        imageContainer.appendChild(badge)
                    }
                    
                    // Disable virtual tour button
                    const tourButton = card.querySelector('[onclick*="openVirtualTour"]')
                    if (tourButton) {
                        tourButton.style.opacity = '0.5'
                        tourButton.style.cursor = 'not-allowed'
                        tourButton.onclick = function(e) {
                            e.stopPropagation()
                            alert('This property is currently booked.')
                            return false
                        }
                    }
                }
            }
        }
    })
}

function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    
    // Check if item already exists
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type)
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
    } else {
        cart.push({...item, quantity: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    
    // Show options
    if (confirm(`${item.name} added to cart!\n\nView Cart now?`)) {
        window.location.href = 'cart.html'
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const countElements = document.querySelectorAll('#cartCount, .cart-count')
    countElements.forEach(el => {
        if (el) el.textContent = count
    })
}

// Initialize cart count and check booking status on page load
updateCartCount()
checkBookingStatus()

function toggleFavorite(event) {
    const heart = event.target
    heart.style.color = heart.style.color === 'red' ? '#666' : 'red'
    alert(heart.style.color === 'red' ? 'Added to favorites!' : 'Removed from favorites')
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('virtualTourModal')
    if (modal.style.display === 'block') {
        if (e.key === 'ArrowRight') nextImage()
        if (e.key === 'ArrowLeft') previousImage()
        if (e.key === 'Escape') closeVirtualTour()
    }
})
