<div align="center">

![Feel It logo on a sticker](https://github.com/yoyoekta/feelit/blob/master/client/src/images/Logo-nobg.png)

</div>

## Project Overview

Welcome to our e-commerce platform specializing in premium fragrances, including perfumes, deodorants, room fresheners, and attar. Our goal is to provide customers with a seamless shopping experience while offering a wide range of high-quality fragrance products to suit diverse preferences.

## Key Features

- **Product Catalog:** Browse through our extensive catalog featuring a diverse collection of perfumes, deodorants, room fresheners, and attar. Filter and search functionalities enable users to easily find their desired products.

- **User Authentication:** Register an account or log in securely to access additional features such as placing orders and order tracking.

- **Shopping Cart:** Add products to your cart for a convenient shopping experience. Edit quantities, remove items, and proceed to checkout effortlessly.

- **Admin Dashboard:** Add, edit or delete products, track users and orders all from the admin access portal.

## Technologies Used

- **Frontend:** React.js is used as frontend JavaScript library for building dynamic and interactive user interfaces. Additional libraries and frameworks may include Redux Toolkit for state management and TailwindCSS and Material-UI for styling components.

- **Backend:** Backend is powered by Node.js and Express.js, providing a robust foundation for building RESTful APIs to handle user authentication, product management, and order processing. MongoDB serves as our database solution, offering flexibility and scalability for storing and retrieving data efficiently.

- **Deployment:** The application is deployed on Render.

## Future Enhancements

- **Enhanced Accessibility:** Implement responsive behaviour throughout the website for make it easily accessible from all the devices.

- **Payment Gateway Integration:** Integrate secure payment gateways such as Stripe or PayPal to facilitate seamless transactions and ensure the safety of financial transactions.

- **Advanced Analytics:** Utilize analytics tools to gain insights into user behavior, purchasing patterns, and product performance, enabling data-driven decision-making and optimization strategies.


## Contribution Guidelines

Contributions are welcomed from the community to improve and enhance the platform. Whether it's fixing bugs, adding new features, or optimizing performance, your contributions are valuable to us. Please refer to our contribution guidelines for more information on how to get started.

### Prerequisites

Before contributing or adding a new feature, please make sure you have already installed the following tools:

- [NodeJs](https://nodejs.org/en/download/) (Works with Node LTS version v18.16.1)
- [MongoDB](https://www.mongodb.com/home) (v6+)

### Steps to set up project locally
Step 1: Fork the Repository

This will create an independent copy of the repository on your GitHub account.

Step 2: Clone the Repository

This will copy the repository from GitHub.com to your local machine.
```
git clone https://github.com/yoyoekta/feelit.git
```

Step 3: Open the folder

```
cd feelit
```

Step 4: Setup Environment Variables
Create a .env file.
```
NODE_ENV=development
PORT = 8000
MONGO = Your MongoDB instance
JWT_SECRET = Any random string
CLOUD_NAME = Your cloud instance on cloudinary
CLOUDINARY_API_KEY = API key of cloudinary
CLOUDINARY_API_SECRET = API secret of cloudinary
```

Step 5: Install node modules
```
npm ci
```

Step 6: Start the Project
```
npm start
```
Now, visit in the browser http://localhost:8000


### Steps to Contribute
1. Create a feature branch. (`git checkout -b feature/newFeature`)
2. Commit your Changes. (`git commit -m 'Descriptive commit message'`)
3. Push to the Branch. (`git push origin feature/newFeature`)
4. Open a Pull Request.



Thank you for choosing Feel It for your fragrance needs. Happy shopping!

--- 
