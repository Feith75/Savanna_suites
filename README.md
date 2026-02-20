# Luxury BnB & Penthouse Booking Platform

A complete travel experience platform for luxury accommodations in Kenya with integrated chef services, transportation, and curated local experiences.

## Features

- **Property Booking**: Luxury BnBs and penthouses with detailed listings
- **Private Chef Service**: Book professional chefs for your stay
- **Ride & Transport**: Airport pickup, chauffeur service, luxury car rental
- **Places to Visit**: Curated local attractions and experiences in Malindi
- **Build My Trip**: Complete itinerary planning with bundled pricing (15% discount)
- **Multi-role Dashboards**: Guest, Host, Service Provider, and Admin panels

## Tech Stack

**Backend:**
- Node.js + Express
- Prisma ORM (PostgreSQL)
- M-Pesa Payment Integration
- Stripe for card payments
- Nodemailer for emails
- SMS notifications

**Frontend:**
- Vanilla HTML, CSS, JavaScript
- Responsive design
- RESTful API integration

## Project Structure

```
├── models/              # Database models (MVC)
│   ├── Property.js
│   ├── Booking.js
│   ├── Chef.js
│   ├── Driver.js
│   └── Attraction.js
├── controllers/         # Business logic (MVC)
│   ├── propertyController.js
│   ├── bookingController.js
│   ├── chefController.js
│   ├── driverController.js
│   ├── attractionController.js
│   └── paymentController.js
├── routes/             # API routes (MVC)
│   ├── propertyRoutes.js
│   ├── bookingRoutes.js
│   ├── chefRoutes.js
│   ├── driverRoutes.js
│   ├── attractionRoutes.js
│   └── paymentRoutes.js
├── public/             # Frontend files
│   ├── index.html
│   ├── properties.html
│   ├── chefs.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       ├── app.js
│       ├── properties.js
│       └── chefs.js
├── prisma/
│   └── schema.prisma   # Database schema
├── server.js           # Express server
└── .env                # Environment variables
```

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Copy `.env.example` to `.env` and fill in your credentials:

```bash
copy .env.example .env
```

Required variables:
- `DATABASE_URL` - PostgreSQL connection string
- `MPESA_CONSUMER_KEY` - M-Pesa API key
- `MPESA_CONSUMER_SECRET` - M-Pesa secret
- `STRIPE_SECRET_KEY` - Stripe API key
- `SMTP_USER` - Email service
- `CLOUDINARY_API_KEY` - Image uploads

### 3. Setup Database

```bash
npx prisma generate
npx prisma db push
```

### 4. Run the Server

```bash
npm run dev
```

Server will start on `http://localhost:3000`

## API Endpoints

### Properties
- `GET /api/properties` - List all properties
- `GET /api/properties/:id` - Get single property
- `POST /api/properties` - Create property
- `PUT /api/properties/:id` - Update property
- `DELETE /api/properties/:id` - Delete property

### Bookings
- `POST /api/bookings` - Create booking (with chef, ride, tours)
- `GET /api/bookings?userId=xxx` - Get user bookings
- `GET /api/bookings/:id` - Get booking details

### Services
- `GET /api/chefs` - List approved chefs
- `GET /api/drivers` - List approved drivers
- `GET /api/attractions` - List attractions

### Payments
- `POST /api/payments/mpesa` - Initiate M-Pesa payment
- `POST /api/payments/card` - Process card payment
- `POST /api/payments/mpesa/callback` - M-Pesa callback

### Reviews
- `POST /api/reviews` - Create review

## Payment Integration

### M-Pesa (Kenya)
The platform integrates with Safaricom M-Pesa for mobile payments. All credentials are loaded from `.env` file.

### Stripe (International Cards)
Card payments are processed through Stripe API.

## Business Model

- 15% commission on property bookings
- 10% commission on chef services
- 10% commission on transport bookings
- Bundle discount: 15% off when booking complete package

## License

Proprietary - All rights reserved
