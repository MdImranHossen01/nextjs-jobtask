# Next.js Product Management App

A simple application built with Next.js 15 (App Router) featuring public product pages and a protected dashboard for adding new products, with authentication handled by NextAuth.js.

---

## Live Site

[Link to your Vercel deployment]

---

## Setup & Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env.local` file in the root and add the following variables:
    ```env
    AUTH_SECRET="your-super-secret-key-here"
    GOOGLE_CLIENT_ID="your-google-client-id"
    GOOGLE_CLIENT_SECRET="your-google-client-secret"
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Route Summary

* `/` - **Landing Page**: Publicly accessible page with hero and product highlights.
* `/login` - **Login Page**: Page for users to sign in.
* `/products` - **Product List**: Public page displaying all available products.
* `/products/[id]` - **Product Details**: Public page showing details for a single product.
* `/dashboard/add-product` - **Add Product**: Protected page for authenticated users to add a new product to the catalog.