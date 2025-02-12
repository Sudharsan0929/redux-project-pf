# React Vite E-Commerce App

This is a simple e-commerce application built using **React (Vite)**, **Redux Toolkit**, **Tailwind CSS**, and **PayPal payment integration**. The app includes features like product listing, cart management, dark mode, and a checkout system.

## 🚀 Features
- **Product Listing** - Fetch and display products dynamically.
- **Cart Management** - Add, remove, and update cart items using Redux.
- **Dark Mode** - Toggle light and dark themes.
- **Redux Toolkit** - Efficient state management.
- **PayPal Integration** - Simulated payment processing using PayPal Sandbox.

## 🛠 Tech Stack
- **Frontend:** React (Vite), Redux Toolkit, Tailwind CSS
- **State Management:** Redux Toolkit
- **Payment Integration:** PayPal (Sandbox Mode)

## 📂 Project Structure
```
/my-ecommerce-app
  ├── public/
  │   ├── _redirects  # Handles routing for Netlify
  ├── src/
  │   ├── components/  # Navbar, Product, Cart, etc.
  │   ├── pages/       # Home, Products, Cart, Checkout
  │   ├── store/       # Redux slices (cartSlice, productSlice, themeSlice)
  │   ├── App.js
  │   ├── main.jsx
  ├── package.json
  ├── tailwind.config.js
  ├── vite.config.js
  ├── README.md
```

## ⚡ Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/my-ecommerce-app.git
   cd my-ecommerce-app
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## 🎨 Dark Mode Setup
Dark mode is managed using **Redux Toolkit**. The current theme is stored in Redux state, and Tailwind classes dynamically update the UI.

## 💳 PayPal Payment Integration
### 1️⃣ **Set Up PayPal Sandbox**
- Go to [PayPal Developer](https://developer.paypal.com/)
- Create a **Sandbox Business Account**
- Get your **Client ID** from the PayPal Developer Dashboard

### 2️⃣ **Update PayPal Integration**
In `Paypal.js`, replace `YOUR_SANDBOX_CLIENT_ID` with your **PayPal Client ID**:
```js
loadScript({
  "client-id": "YOUR_SANDBOX_CLIENT_ID",
  currency: "USD",
}).then((paypal) => {
  if (paypal) {
    paypal.Buttons({...}).render("#paypal-button-container");
  }
});
```

## 🌐 Deployment
### ✅ **Netlify Deployment**
1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using Netlify 
3. Ensure `_redirects` file is inside `public/` to handle React Router paths


## 📝 License
This project is open-source and available under the **MIT License**.

---
**Happy Coding! 🚀**

