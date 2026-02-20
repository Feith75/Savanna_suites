let selectedItems = {
    property: false,
    chef: false,
    ride: false,
    attractions: []
}

const prices = {
    property: 45000,
    chef: 24000,
    ride: 12000,
    attraction: 3000
}

function toggleSelection(type) {
    const checkbox = document.getElementById(`${type}-check`)
    checkbox.checked = !checkbox.checked
    selectedItems[type] = checkbox.checked
    updateSummary()
}

function toggleAttraction(name) {
    const checkbox = document.getElementById(`attraction-${name}`)
    checkbox.checked = !checkbox.checked
    
    if (checkbox.checked) {
        selectedItems.attractions.push(name)
    } else {
        selectedItems.attractions = selectedItems.attractions.filter(a => a !== name)
    }
    updateSummary()
}

function updateSummary() {
    let subtotal = 0
    let itemsHtml = ''

    if (selectedItems.property) {
        subtotal += prices.property
        itemsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
            <span>Property (3 nights)</span>
            <span>KES ${prices.property.toLocaleString()}</span>
        </div>`
    }

    if (selectedItems.chef) {
        subtotal += prices.chef
        itemsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
            <span>Private Chef (3 days)</span>
            <span>KES ${prices.chef.toLocaleString()}</span>
        </div>`
    }

    if (selectedItems.ride) {
        subtotal += prices.ride
        itemsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
            <span>Transport</span>
            <span>KES ${prices.ride.toLocaleString()}</span>
        </div>`
    }

    selectedItems.attractions.forEach(attraction => {
        subtotal += prices.attraction
        itemsHtml += `<div style="display: flex; justify-content: space-between; font-size: 0.875rem; margin-bottom: 0.5rem;">
            <span>${attraction}</span>
            <span>KES ${prices.attraction.toLocaleString()}</span>
        </div>`
    })

    const discount = subtotal * 0.15
    const total = subtotal - discount

    document.getElementById('items-list').innerHTML = itemsHtml || '<p style="color: #666; font-size: 0.875rem;">No items selected</p>'
    document.getElementById('subtotal').textContent = `KES ${subtotal.toLocaleString()}`
    document.getElementById('discount').textContent = `-KES ${discount.toLocaleString()}`
    document.getElementById('total').textContent = `KES ${total.toLocaleString()}`
}

updateSummary()


function bookPackage() {
    const total = document.getElementById('total').textContent
    const itemsList = document.getElementById('items-list').innerHTML
    
    if (itemsList.includes('No items selected')) {
        alert('Please select at least one item to book!')
        return
    }
    
    if (confirm(`Confirm Booking?\n\nTotal: ${total}\n\nProceed to payment?`)) {
        window.location.href = 'checkout.html'
    }
}
