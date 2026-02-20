# LuxuryStay Platform - Setup Guide

## Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Server
```bash
node test-simple-server.js
```

### 3. Open in Browser
- Homepage: http://localhost:3000
- BnBs with Virtual Tour: http://localhost:3000/bnbs.html
- Properties: http://localhost:3000/properties.html
- Chefs: http://localhost:3000/chefs.html
- Transport: http://localhost:3000/transport.html
- Attractions: http://localhost:3000/attractions.html
- Build My Trip: http://localhost:3000/build-trip.html

## Pages Overview

### ✅ Homepage (`index.html`)
- Search bar for properties
- Featured luxury properties with images
- Services preview (Chefs & Transport)
- Places to visit in Malindi
- Fully functional navigation

### ✅ BnBs Page (`bnbs.html`) - WITH VIRTUAL TOUR
- 3 luxury properties with images
- **Virtual Tour Feature:**
  - Click "🏠 Virtual Tour" button on any property
  - View 4-6 room images per property
  - Navigate with Previous/Next buttons
  - Use keyboard arrows (← →)
  - Click thumbnails to jump to rooms
  - Press ESC to close
  - Book directly from tour

### ✅ Properties Page (`properties.html`)
- Advanced filters (price, bedrooms, amenities)
- 6 sample luxury properties
- Enhanced property cards with hover effects
- Sort options
- Favorite functionality

### ✅ Chefs Page (`chefs.html`)
- 3 chef profiles with images
- Cuisine types and ratings
- Service options (Breakfast, Full Day, Romantic Dinner, Events)
- Book chef functionality

### ✅ Transport Page (`transport.html`)
- 4 service types (Airport, Hourly, Daily, Rental)
- 3 luxury vehicles with images and "Book This Vehicle" buttons
- Vehicle details and pricing

### ✅ Attractions Page (`attractions.html`)
- 6 Malindi attractions with images
- Entry fees and duration
- Best time to visit
- "Add to Trip" and "Book Tour" buttons

### ✅ Build My Trip Page (`build-trip.html`)
- Select property, chef, transport, attractions
- Real-time price calculator
- 15% bundle discount
- Complete package booking

### ✅ Checkout Page (`checkout.html`)
- Guest information form
- Payment methods (M-Pesa, Card, PayPal)
- Order summary
- Payment processing

### ✅ Confirmation Page (`confirmation.html`)
- Booking confirmation
- Booking details
- Print receipt option

### ✅ List Property Page (`list-property.html`)
- Complete form for property owners
- Image upload with preview
- Amenities selection
- Contact information

### ✅ Host Dashboard (`host-dashboard.html`)
- Earnings statistics
- Property management
- Booking overview
- Analytics

## Virtual Tour Feature

The BnBs page includes an interactive virtual tour:

**How it works:**
1. Click "🏠 Virtual Tour" on any property card
2. Fullscreen modal opens with image gallery
3. Navigate through rooms:
   - Click "Previous" / "Next" buttons
   - Use keyboard arrow keys (← →)
   - Click thumbnail images to jump
   - Press ESC to close
4. Each image shows:
   - Room title
   - Detailed description
   - Image counter (e.g., "3 / 6")
5. Book directly from the tour

**Properties with Virtual Tours:**
- Sunset Paradise Villa (6 images)
- Tropical Garden Retreat (4 images)
- Urban Luxury Loft (4 images)

## All Buttons Work

Every button on the platform is functional:
- ✅ Navigation links
- ✅ Sign In / List Property
- ✅ Search properties
- ✅ Book Chef
- ✅ Book Transport
- ✅ Book Vehicle
- ✅ Add to Trip
- ✅ Book Tour
- ✅ Apply Filters
- ✅ Virtual Tour
- ✅ Complete Payment
- ✅ Book Package

## Technology Stack

**Frontend:**
- Vanilla HTML, CSS, JavaScript
- Responsive design
- No framework dependencies

**Backend:**
- Node.js + Express
- Prisma ORM
- PostgreSQL database

**APIs (from .env):**
- M-Pesa payment integration
- Stripe for card payments
- Email notifications (SMTP)
- SMS notifications
- Cloudinary for images

## Database Setup (Optional)

If you want to connect to a real database:

1. Create `.env` file:
```bash
cp .env.example .env
```

2. Add your database URL and API keys

3. Run Prisma migrations:
```bash
npx prisma generate
npx prisma db push
```

## Project Structure

```
├── public/              # Frontend files
│   ├── index.html      # Homepage
│   ├── bnbs.html       # BnBs with virtual tour
│   ├── properties.html # Property listings
│   ├── chefs.html      # Chef services
│   ├── transport.html  # Transport services
│   ├── attractions.html# Malindi attractions
│   ├── build-trip.html # Trip builder
│   ├── checkout.html   # Payment page
│   ├── css/
│   │   └── style.css   # All styles
│   └── js/
│       ├── app.js      # Homepage logic
│       ├── bnbs.js     # Virtual tour logic
│       ├── properties.js
│       ├── chefs.js
│       └── transport.js
├── models/             # Database models
├── controllers/        # Business logic
├── routes/            # API routes
├── prisma/
│   └── schema.prisma  # Database schema
└── server.js          # Express server

```

## Features Summary

✅ Property listings with images
✅ Virtual tour functionality
✅ Chef booking system
✅ Transport booking
✅ Attraction tours
✅ Trip builder with bundle discount
✅ M-Pesa & card payments
✅ Property owner dashboard
✅ List new properties
✅ All buttons functional
✅ Responsive design
✅ Professional UI/UX

## Support

For issues or questions, check:
- README.md for project overview
- .env.example for required environment variables
- prisma/schema.prisma for database structure

Enjoy your luxury booking platform! 🏖️✨
