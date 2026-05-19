
# Rent A Console

A modern, full-stack Software-as-a-Service (SaaS) platform built for high-performance gaming console rental management. The system streamlines flexible time-slot booking, real-time availability tracking, and automated local payment settlements.

---

## 🛠️ Tech Stack

- **Core Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS v4
- **Database & Identity:** Firebase Firestore & Firebase Auth (Google OAuth)
- **Payment Gateways:** bKash API & SSLCOMMERZ (Server-to-Server)

---

## 📁 Architecture Overview

```text
├── src/
│   ├── app/                    # App Router (Pages & API Routes)
│   │   ├── api/payment/        # Secure server-side gateway handlers
│   │   ├── admin/              # Console & inventory management
│   │   ├── book/[consoleId]/   # Booking & transactional pipeline
│   │   └── dashboard/          # User management & session history
│   ├── components/             # Decoupled UI and feature components
│   ├── context/                # Global React context providers
│   └── lib/                    # SDK initializations (Firebase, SDKs)

```

---

## 🔒 Security & Payment Pipeline

All payment handshakes, merchant authentication, and Instant Payment Notifications (IPN) for **bKash** and **SSLCOMMERZ** are executed strictly server-side within isolated Next.js API routes. Client-side interactions are restricted to secure tokenized redirect protocols to prevent credential exposure.

---

## 🚀 Getting Started

### 1. Installation

```bash
npm install

```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Firebase Public Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

# Server-Side Merchant Credentials
BKASH_APP_KEY=
BKASH_APP_SECRET=
BKASH_USERNAME=
BKASH_PASSWORD=

SSLCOMMERZ_STORE_ID=
SSLCOMMERZ_STORE_PASSWORD=
IS_LIVE=false

```
