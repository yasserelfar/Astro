# 🛒 Men’s Wear E-commerce Website

## 📌 Project Overview
An online shopping platform specializing in men’s clothing. The goal is to provide a seamless user experience for browsing, selecting, and purchasing men’s wear from the comfort of home.

---

## 🎯 Objectives
- Facilitate the process of buying men’s clothing online.
- Enable sellers to easily add and manage products.
- Deliver an intuitive user experience with secure checkout and order management.

---

## 📚 Scope
- **User Accounts:** Registration, login, profile management, cart, and order tracking.
- **E-commerce Features:** Product catalog, detailed product pages, cart management, secure checkout.
- **Admin Dashboard:** Product, category, and order management for sellers/admins.

---

## 👥 Stakeholders
- **Project Manager:** Oversees tasks and project timeline.
- **Developers:** Frontend, backend, database integration.
- **UI/UX Designer:** Designs smooth user experience.
- **Website Admin:** Manages users, products, and orders.
- **Customers:** End-users who browse and purchase.

---

## 🗂️ Timeline & Milestones
**Phase 1 – Planning:**  
- Requirement gathering  
- System architecture design  
- Database schema development  
- Kickoff development

**Phase 2 – Implementation & Testing:**  
- Core features (accounts, products, orders)  
- User acceptance testing (UAT) & bug fixes

**Phase 3 – Launch & Post-Launch:**  
- Soft launch for initial users  
- Improvements based on feedback  
- Full launch and marketing  
- Ongoing maintenance & support

---

## ⚙️ Functional Requirements
- Detailed product pages with fabric, size, and description.
- Product listing and search.
- Size selection.
- Cart management with secure checkout.

**Priorities:**  
- Business value (checkout, product display)  
- User experience (navigation, cart, accounts)  
- Technical feasibility  
- Strong security (authentication, encryption)

---

## 🛠️ Technical Requirements

**🔗 Architecture:**  
- **Stack:** MERN (MongoDB, Express, React, Node.js)
- **Frontend:** React, Redux, React Router DOM, Axios, Formik
- **Backend:** Node.js, Express
- **API:** RESTful endpoints (GET, POST, PUT, DELETE) using JSON
- **Auth:** JWT for secure user auth

**⚡ Ports:**  
- Frontend: 5173  
- Backend: 3000

---

## 🗄️ Database Schema

**MongoDB Collections:**  
- **Users:** UserId, Username, Email, Password (hashed), Role, CreatedAt
- **Carts:** UserId, Products, Total Amount, Quantity
- **Products:** Product details (ID, name, size, price, stock)
- **Orders:** OrderID, UserID, Products, Amount, Address, Phone

**Relations:**  
- User ↔ Cart (One-to-One)  
- User ↔ Orders (One-to-Many)  
- Product ↔ Cart/Orders (One-to-Many)

---

## 📑 API Documentation
- JSON data format for all requests and responses.
- RESTful endpoints secured with JWT.
- Full API routes documented with Postman collections.

---

## ✅ Status
🚀 **In Development** — Implementation and testing in progress!

---

## 🏷️ Tech Stack
**Frontend:** React, Redux, React Router, Axios  
**Backend:** Node.js, Express  
**Database:** MongoDB (Cloud)  
**Auth:** JWT  
**API:** REST

---

## 📬 Contact
For any questions or contributions, please open an issue or submit a pull request.

---

