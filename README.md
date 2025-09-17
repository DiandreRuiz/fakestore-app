# FakeStore E-Commerce App

A React-based e-commerce application that demonstrates full CRUD operations using the FakeStore API. This project showcases modern React development practices including state management, API integration, routing, and responsive design.

## 🚀 Features

- **Product Browsing**: View all products from the FakeStore API
- **Product Details**: Detailed view of individual products with full information
- **Add Products**: Create new products with form validation
- **Edit Products**: Update existing product information
- **Delete Products**: Remove products with confirmation modals
- **Responsive Design**: Mobile-friendly interface using React Bootstrap
- **Loading States**: Proper loading indicators and error handling
- **Navigation**: Multi-page routing with React Router

## 🛠️ Tech Stack

- **React 19** - Frontend framework
- **React Router DOM** - Client-side routing
- **React Bootstrap** - UI components and styling
- **Vite** - Build tool and development server
- **FakeStore API** - Mock e-commerce API for testing

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fakestore-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/
│   ├── HomePage.jsx          # Landing page with featured products
│   ├── Products.jsx          # Product listing page
│   ├── ProductDetails.jsx    # Individual product details
│   ├── AddJunkForm.jsx       # Add new product form
│   ├── EditJunkForm.jsx      # Edit existing product form
│   ├── MyJunk.jsx           # User's product management
│   ├── NavBar.jsx           # Navigation component
│   └── JunkCard.jsx         # Reusable product card component
├── styles/
│   ├── Card.module.css      # Card component styles
│   └── NavBar.module.css    # Navigation styles
├── utilities/
│   └── pricing_utilities.js # Price formatting utilities
└── App.jsx                  # Main application component
```

## 🎯 Key Components

### HomePage
- Displays welcome message and featured products
- Shows top 3 products from the API
- Navigation to full product listing

### Products
- Fetches and displays all products from FakeStore API
- Responsive grid layout
- Loading states and error handling

### ProductDetails
- Individual product view with full details
- Edit and delete functionality
- Dynamic routing with product ID

### AddJunkForm
- Form validation for new product creation
- POST requests to FakeStore API
- Success/error feedback with modals

## 🔗 API Integration

This app integrates with the [FakeStore API](https://fakestoreapi.com/) for:
- **GET** `/products` - Fetch all products
- **GET** `/products/:id` - Fetch single product
- **POST** `/products` - Create new product
- **PUT** `/products/:id` - Update product
- **DELETE** `/products/:id` - Delete product

> **Note**: FakeStore API is a testing API. While it responds to POST, PUT, and DELETE requests with success messages, the data changes are not persistent and will reset on subsequent API calls.

## 🎨 Styling

- **React Bootstrap** for responsive components
- **Custom CSS modules** for component-specific styling
- **Mobile-first** responsive design
- **Loading spinners** and error states

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile devices
