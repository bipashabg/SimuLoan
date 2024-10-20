// import SectionTitle from "../Common/SectionTitle";
// import SingleBlog from "./SingleBlog";
// import blogData from "./blogData";

// const Blog = () => {
//   return (
//     <section
//       id="blog"
//       className="bg-gray-light dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
//     >
//       <div className="container">
//         <SectionTitle
//           title="Our Latest Blogs"
//           paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
//           center
//         />

//         <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
//           {blogData.map((blog) => (
//             <div key={blog.id} className="w-full">
//               <SingleBlog blog={blog} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;
"use client"
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

const RepayLoan = () => {
  // State to manage payment amount and method
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  // Function to handle repayment option click
  const handleRepaymentOption = (amount) => {
    setPaymentAmount(amount);
  };

  return (
    <section
      id="repay-loan"
      className="bg-black py-16 md:py-20 lg:py-28"
    >
      <div className="container max-w-5xl mx-auto">
        <SectionTitle
          title="Repay Your Loan"
          paragraph="Review your loan details and make a repayment with ease."
          center
        />

        {/* Loan Summary */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Loan Summary</h3>
            <ul className="text-gray-600 dark:text-gray-300">
              <li className="mb-2"><strong>Loan Amount:</strong> $10,000</li>
              <li className="mb-2"><strong>Interest Rate:</strong> 5%</li>
              <li className="mb-2"><strong>Due Date:</strong> December 15, 2024</li>
              <li className="mb-2"><strong>Total Amount Due:</strong> $10,500</li>
            </ul>
          </div>
        </div>

        {/* Repayment Options */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Repayment Options</h3>
            <ul className="space-y-2">
              <li
                className="text-gray-700 dark:text-gray-300 bg-primary/10 py-3 px-4 rounded-md cursor-pointer hover:bg-primary/20 transition"
                onClick={() => handleRepaymentOption(10500)} // Full amount
              >
                Pay Full Amount
              </li>
              <li
                className="text-gray-700 dark:text-gray-300 bg-primary/10 py-3 px-4 rounded-md cursor-pointer hover:bg-primary/20 transition"
                onClick={() => handleRepaymentOption(500)} // Minimum due
              >
                Pay Minimum Due: $500
              </li>
              <li
                className="text-gray-700 dark:text-gray-300 bg-primary/10 py-3 px-4 rounded-md cursor-pointer hover:bg-primary/20 transition"
                onClick={() => setPaymentAmount("")} // Custom amount
              >
                Custom Amount
              </li>
            </ul>
          </div>
        </div>

        {/* Repayment Form */}
        <div className="mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Enter Payment Details</h3>
            <form>
              <div className="mb-6">
                <label htmlFor="paymentAmount" className="block mb-2 text-gray-700 dark:text-gray-300">
                  Payment Amount
                </label>
                <input
                  type="number"
                  id="paymentAmount"
                  placeholder="Enter payment amount"
                  value={paymentAmount} // Dynamically updates based on repayment option selected
                  onChange={(e) => setPaymentAmount(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="paymentMethod" className="block mb-2 text-gray-700 dark:text-gray-300">
                  Payment Method
                </label>
                <select
                  id="paymentMethod"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="w-full border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="credit-card">Credit Card</option>
                  <option value="bank-transfer">Bank Transfer</option>
                  <option value="crypto">Cryptocurrency</option>
                </select>
              </div>

              <button className="w-full bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-3 rounded-md shadow-lg hover:opacity-90 transition-opacity duration-300">
                Submit Payment
              </button>
            </form>
          </div>
        </div>

        {/* Confirmation Section */}
        <div className="mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 transition-transform hover:scale-105 duration-300">
            <h3 className="text-xl font-bold mb-4 text-primary">Payment Confirmation</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Your payment has been successfully processed. Remaining balance: $0.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepayLoan;