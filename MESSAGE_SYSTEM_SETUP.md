# Message System Setup Guide

## Overview
The message system allows customers to contact you through the website. Messages are:
- ✅ Saved in MongoDB database
- ✅ Sent to your email instantly
- ✅ Viewable in admin dashboard
- ✅ Confirmation email sent to customer

## Setup Steps

### 1. Install MongoDB
Download and install MongoDB from: https://www.mongodb.com/try/download/community

Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas

### 2. Install Dependencies
```bash
npm install mongoose nodemailer
```

### 3. Configure Environment Variables
Create a `.env` file in your project root with:

```env
# MongoDB Connection
MONGODB_URI=mongodb://localhost:27017/luxurystay

# Email Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
ADMIN_EMAIL=admin@luxurystay.co.ke
```

### 4. Gmail App Password Setup
1. Go to Google Account settings
2. Enable 2-Factor Authentication
3. Go to Security → App Passwords
4. Generate a new app password for "Mail"
5. Use this password in SMTP_PASS

### 5. Start MongoDB
```bash
# Windows
mongod

# Mac/Linux
sudo systemctl start mongod
```

### 6. Start the Server
```bash
node server.js
```

## Usage

### Customer Contact Form
- URL: http://localhost:3000/contact.html
- Customers fill out the form
- Message is saved to database
- Admin receives email notification
- Customer receives confirmation email

### Admin Dashboard
- URL: http://localhost:3000/admin-messages.html
- View all messages
- See statistics (total, new, replied)
- Mark messages as read/replied
- Delete messages
- Reply via email directly

## Features

### Message Statuses
- **New**: Just received, not yet viewed
- **Read**: Admin has viewed the message
- **Replied**: Admin has responded to customer

### Email Notifications
1. **To Admin**: Instant notification when message received
2. **To Customer**: Confirmation that message was received

### Admin Actions
- View message details
- Mark as read/replied
- Delete messages
- Reply via email (opens email client)
- Refresh messages list

## Database Schema

```javascript
{
  name: String (required),
  email: String (required),
  phone: String (optional),
  subject: String (required),
  message: String (required),
  status: String (new/read/replied),
  createdAt: Date
}
```

## API Endpoints

### Public
- `POST /api/messages` - Submit new message

### Admin (should add authentication in production)
- `GET /api/messages` - Get all messages
- `GET /api/messages/:id` - Get single message
- `PUT /api/messages/:id/status` - Update message status
- `DELETE /api/messages/:id` - Delete message

## Security Notes

⚠️ **Important for Production:**
1. Add authentication to admin routes
2. Use environment variables for all credentials
3. Enable HTTPS
4. Add rate limiting to prevent spam
5. Validate and sanitize all inputs
6. Use MongoDB Atlas for cloud database

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check MONGODB_URI in .env file
- Verify MongoDB port (default: 27017)

### Email Not Sending
- Check SMTP credentials in .env
- Verify Gmail app password is correct
- Check firewall/antivirus settings
- Try port 587 instead of 465

### Messages Not Appearing
- Check browser console for errors
- Verify server is running
- Check MongoDB connection
- Refresh the admin page

## Testing

1. Go to http://localhost:3000/contact.html
2. Fill out and submit the form
3. Check your email for notification
4. Go to http://localhost:3000/admin-messages.html
5. View the message in admin dashboard

## Next Steps

- Add user authentication for admin dashboard
- Implement message search/filter
- Add email templates
- Set up automated responses
- Add message categories
- Implement message archiving
