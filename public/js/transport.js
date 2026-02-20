function bookTransport(button) {
    const card = button.closest('.service-card')
    const serviceName = card.querySelector('h3').textContent
    const price = card.querySelector('.property-price, p[style*="color: #f97316"]').textContent
    
    if (confirm(`Book ${serviceName}?\nPrice: ${price}\n\nProceed to payment?`)) {
        // Store booking details in localStorage
        localStorage.setItem('bookingType', 'transport')
        localStorage.setItem('bookingName', serviceName)
        localStorage.setItem('bookingPrice', price)
        
        // Go directly to checkout
        window.location.href = 'checkout.html'
    }
}


function bookVehicle(vehicleName, price) {
    // Show options: Add to Cart or Pay Now
    const choice = confirm(`${vehicleName} - KES ${price.toLocaleString()}/day\n\nClick OK to Add to Cart\nClick Cancel to Pay Now`)
    
    const item = {
        id: vehicleName.toLowerCase().replace(/\s+/g, '-'),
        type: 'vehicle',
        name: vehicleName,
        price: price,
        days: 1
    }
    
    if (choice) {
        // Add to cart
        addToCart(item)
    } else {
        // Pay now - go directly to checkout
        localStorage.setItem('bookingType', 'vehicle')
        localStorage.setItem('bookingName', vehicleName)
        localStorage.setItem('bookingPrice', `KES ${price.toLocaleString()}`)
        localStorage.setItem('bookingDays', '1')
        window.location.href = 'checkout.html'
    }
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

// Initialize cart count on page load
updateCartCount()
