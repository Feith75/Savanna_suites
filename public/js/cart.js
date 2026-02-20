// Cart management functions

function getCart() {
    const cart = localStorage.getItem('cart')
    return cart ? JSON.parse(cart) : []
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart))
    updateCartCount()
}

function addToCart(item) {
    const cart = getCart()
    
    // Check if item already exists
    const existingIndex = cart.findIndex(i => i.id === item.id && i.type === item.type)
    
    if (existingIndex > -1) {
        // Update quantity if item exists
        cart[existingIndex].quantity = (cart[existingIndex].quantity || 1) + 1
    } else {
        // Add new item
        cart.push({
            ...item,
            quantity: 1,
            addedAt: new Date().toISOString()
        })
    }
    
    saveCart(cart)
    alert(`${item.name} added to cart!`)
}

function removeFromCart(index) {
    const cart = getCart()
    cart.splice(index, 1)
    saveCart(cart)
    loadCart()
}

function updateQuantity(index, change) {
    const cart = getCart()
    cart[index].quantity = Math.max(1, (cart[index].quantity || 1) + change)
    saveCart(cart)
    loadCart()
}

function clearCart() {
    if (confirm('Are you sure you want to clear your cart?')) {
        localStorage.removeItem('cart')
        updateCartCount()
        loadCart()
    }
}

function updateCartCount() {
    const cart = getCart()
    const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0)
    const countElements = document.querySelectorAll('#cartCount, .cart-count')
    countElements.forEach(el => {
        if (el) el.textContent = count
    })
}

function loadCart() {
    const cart = getCart()
    const cartItemsDiv = document.getElementById('cartItems')
    const cartSummaryDiv = document.getElementById('cartSummary')
    const cartTotalSpan = document.getElementById('cartTotal')
    
    if (!cartItemsDiv) return
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = `
            <div style="text-align: center; padding: 3rem;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">🛒</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Your cart is empty</h3>
                <p style="color: #666; margin-bottom: 2rem;">Add some items to get started!</p>
                <button class="btn-primary" onclick="window.location.href='index.html'">
                    Start Shopping
                </button>
            </div>
        `
        if (cartSummaryDiv) cartSummaryDiv.innerHTML = ''
        if (cartTotalSpan) cartTotalSpan.textContent = 'KES 0'
        return
    }
    
    // Display cart items
    const typeIcons = {
        bnb: '🏡',
        vehicle: '🚗',
        chef: '👨‍🍳',
        attraction: '🎯',
        property: '🏠'
    }
    
    cartItemsDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
            <h2 style="font-size: 1.5rem;">Cart Items (${cart.length})</h2>
            <button class="btn-text" onclick="clearCart()" style="color: #ef4444;">Clear Cart</button>
        </div>
        ${cart.map((item, index) => `
            <div style="display: flex; gap: 1rem; padding: 1rem; border: 1px solid #e5e7eb; border-radius: 8px; margin-bottom: 1rem;">
                <div style="font-size: 2rem;">${typeIcons[item.type] || '📦'}</div>
                <div style="flex: 1;">
                    <h3 style="font-size: 1.125rem; margin-bottom: 0.25rem;">${item.name}</h3>
                    <p style="color: #666; font-size: 0.875rem; margin-bottom: 0.5rem;">${item.type.toUpperCase()}</p>
                    <p style="color: #f97316; font-weight: 600;">KES ${item.price.toLocaleString()}</p>
                    ${item.days > 1 ? `<p style="color: #666; font-size: 0.875rem;">${item.days} days</p>` : ''}
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; align-items: flex-end;">
                    <div style="display: flex; align-items: center; gap: 0.5rem; background: #f3f4f6; border-radius: 6px; padding: 0.25rem;">
                        <button onclick="updateQuantity(${index}, -1)" style="background: white; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">-</button>
                        <span style="min-width: 30px; text-align: center; font-weight: 600;">${item.quantity || 1}</span>
                        <button onclick="updateQuantity(${index}, 1)" style="background: white; border: none; width: 28px; height: 28px; border-radius: 4px; cursor: pointer; font-weight: bold;">+</button>
                    </div>
                    <button onclick="removeFromCart(${index})" style="background: none; border: none; color: #ef4444; cursor: pointer; font-size: 0.875rem;">Remove</button>
                </div>
            </div>
        `).join('')}
    `
    
    // Calculate totals
    let subtotal = 0
    cart.forEach(item => {
        const itemPrice = item.price * (item.days || 1) * (item.quantity || 1)
        subtotal += itemPrice
    })
    
    const serviceFee = Math.round(subtotal * 0.05)
    const total = subtotal + serviceFee
    
    // Display summary
    if (cartSummaryDiv) {
        cartSummaryDiv.innerHTML = `
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Subtotal</span>
                <span>KES ${subtotal.toLocaleString()}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span>Service Fee (5%)</span>
                <span>KES ${serviceFee.toLocaleString()}</span>
            </div>
        `
    }
    
    if (cartTotalSpan) {
        cartTotalSpan.textContent = `KES ${total.toLocaleString()}`
    }
}

function proceedToCheckout() {
    const cart = getCart()
    
    if (cart.length === 0) {
        alert('Your cart is empty!')
        return
    }
    
    // Store cart data for checkout
    localStorage.setItem('checkoutCart', JSON.stringify(cart))
    window.location.href = 'checkout.html'
}

// Initialize cart on page load
if (document.getElementById('cartItems')) {
    loadCart()
}

updateCartCount()
