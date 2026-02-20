const API_URL = 'http://localhost:3000/api'

async function loadChefs() {
    try {
        const response = await fetch(`${API_URL}/chefs`)
        const chefs = await response.json()
        displayChefs(chefs)
    } catch (error) {
        console.error('Error loading chefs:', error)
    }
}

function displayChefs(chefs) {
    const grid = document.getElementById('chefsGrid')
    
    grid.innerHTML = chefs.map(chef => `
        <div class="property-card">
            <div class="property-image" style="background: linear-gradient(135deg, #fed7aa 0%, #fbbf24 100%); display: flex; align-items: center; justify-content: center; font-size: 4rem;">
                👨‍🍳
            </div>
            <div class="property-content">
                <div class="property-header">
                    <h3 class="property-title">${chef.user.name}</h3>
                    <span class="property-rating">★ ${chef.rating}</span>
                </div>
                <div class="property-amenities">
                    ${chef.cuisineTypes.map(cuisine => `<span class="amenity-tag">${cuisine}</span>`).join('')}
                </div>
                <p class="property-price">KES ${chef.pricePerDay.toLocaleString()} / day</p>
                <button class="btn-primary" style="width: 100%; margin-top: 1rem;">Book Chef</button>
            </div>
        </div>
    `).join('')
}

loadChefs()

// Add chef to cart
function addChefToCart(chefName, price) {
    const item = {
        id: chefName.toLowerCase().replace(/\s+/g, '-'),
        type: 'chef',
        name: chefName,
        price: price,
        days: 1
    }
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type)
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
    } else {
        cart.push({...item, quantity: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    
    if (confirm(`${chefName} added to cart!\n\nView Cart now?`)) {
        window.location.href = 'cart.html'
    }
}

// Pay for chef directly
function payChefNow(chefName, price) {
    localStorage.setItem('bookingType', 'chef')
    localStorage.setItem('bookingName', chefName)
    localStorage.setItem('bookingPrice', `KES ${price.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    
    window.location.href = 'checkout.html'
}

// Add service to cart
function addServiceToCart(serviceName, price) {
    const item = {
        id: serviceName.toLowerCase().replace(/\s+/g, '-'),
        type: 'chef',
        name: `Chef Service: ${serviceName}`,
        price: price,
        days: 1
    }
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type)
    
    if (existingIndex > -1) {
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
    } else {
        cart.push({...item, quantity: 1})
    }
    
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
    
    if (confirm(`${serviceName} added to cart!\n\nView Cart now?`)) {
        window.location.href = 'cart.html'
    }
}

// Pay for service directly
function payServiceNow(serviceName, price) {
    localStorage.setItem('bookingType', 'chef')
    localStorage.setItem('bookingName', `Chef Service: ${serviceName}`)
    localStorage.setItem('bookingPrice', `KES ${price.toLocaleString()}`)
    localStorage.setItem('bookingDays', '1')
    
    window.location.href = 'checkout.html'
}

// Update cart count
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const countElements = document.querySelectorAll('#cartCount, .cart-count')
    countElements.forEach(el => {
        if (el) el.textContent = count
    })
}

// Initialize cart count
updateCartCount()

function bookChef(button) {
    const chefName = button.closest('.property-card').querySelector('.property-title').textContent
    const price = button.closest('.property-card').querySelector('.property-price').textContent
    
    if (confirm(`Book ${chefName}?\nPrice: ${price}\n\nProceed to booking?`)) {
        window.location.href = 'build-trip.html'
    }
}
