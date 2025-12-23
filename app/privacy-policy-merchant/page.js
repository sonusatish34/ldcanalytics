import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function MerchantTermsPage() {
  // Fixed date for your "Last Updated"
  const today = new Date("2025-11-25");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="lg:text-3xl font-bold mb-4 text-black">
          📄 Terms & Conditions – Merchant App (Seller/Partner App)
        </h1>

        <p className="text-gray-600 mb-6">
          Last Updated: {today.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            <strong>Company Name:</strong> Zuget
            <br />
            <strong>Platform:</strong> Merchant / Seller Mobile Application (“Merchant App”)
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Merchant Eligibility</h2>
            <ul className="list-disc ml-6">
              <li>Provide valid business documents</li>
              <li>Maintain accurate inventory</li>
              <li>Follow quality and legal standards</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Product Listing</h2>
            <ul className="list-disc ml-6">
              <li>Accurate product descriptions</li>
              <li>Correct pricing</li>
              <li>Genuine and original products</li>
              <li>High-quality product images</li>
            </ul>
            <p className="mt-2">Fake or counterfeit products are strictly prohibited.</p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Orders & Fulfillment</h2>
            <ul className="list-disc ml-6">
              <li>Pack items properly and safely</li>
              <li>Dispatch orders within the specified processing time</li>
              <li>Not cancel confirmed orders without a valid reason</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Commission & Payments</h2>
            <ul className="list-disc ml-6">
              <li>Commission is charged on every successful sale</li>
              <li>Payouts will be processed every 7–15 days (based on your policy)</li>
              <li>Deductions may apply for returns or policy violations</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Returns & Refund Responsibility</h2>
            <ul className="list-disc ml-6">
              <li>Merchants must accept valid customer returns</li>
              <li>Refunds will be deducted from the merchant’s upcoming payout</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Prohibited Products</h2>
            <p>Merchants cannot list or sell:</p>
            <ul className="list-disc ml-6">
              <li>Counterfeit or cloned goods</li>
              <li>Banned or illegal items</li>
              <li>Offensive or inappropriate materials</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Suspension of Account</h2>
            <p>We may suspend or terminate merchant accounts for:</p>
            <ul className="list-disc ml-6">
              <li>Fraud or dishonest activity</li>
              <li>Selling fake or illegal products</li>
              <li>Repeated order cancellations</li>
              <li>Policy violations</li>
            </ul>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">8. Liability</h2>
            <p>The company is not responsible for:</p>
            <ul className="list-disc ml-6">
              <li>Incorrect product details provided by the merchant</li>
              <li>Legal issues arising from the merchant’s products</li>
              <li>Errors in packaging or order handling by the merchant</li>
            </ul>

            <p className="mt-2">
              Merchants hold full responsibility and liability for the products they sell on the platform.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
