import Footer from "@/components/Footer";
import Header from "@/components/Header";
export default function TermsPage() {
  const now = new Date.now()
  return (
    <div className="min-h-screen">
        <Header/>
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="lg:text-3xl font-bold mb-4 text-black">📄 Terms & Conditions – Customer App ( Clothing E-Commerce)</h1>
        <p className="text-gray-600 mb-6">Last Updated: 24th,Nov 2025</p>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            <strong>Company Name:</strong> Zuget
            <br />
            <strong>Platform:</strong> Customer Mobile Application (“App”)
          </p>

          <section>
            <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
            <p>
              By downloading, accessing, or using this App, you agree to be bound by these Terms &
              Conditions and our Privacy Policy. If you do not agree, please do not use the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">2. Eligibility</h2>
            <p>You must be at least 18 years old to create an account and place orders.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">3. Account Registration</h2>
            <p>You agree to:</p>
            <ul className="list-disc ml-6">
              <li>Provide accurate information</li>
              <li>Keep your login details secure</li>
              <li>Be responsible for all activities under your account</li>
            </ul>
            <p>We may terminate accounts that provide false information.</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">4. Product Information</h2>
            <p>
              We try our best to display accurate product details (colors, sizes, prices). However, slight
              variations may occur.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">5. Pricing & Payments</h2>
            <ul className="list-disc ml-6">
              <li>All prices are displayed in rupee.</li>
              <li>
                Payment methods include: UPI, Credit/Debit Card, Net Banking, Wallets (update based on
                your app).
              </li>
              <li>Orders are confirmed only after successful payment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">6. Orders & Confirmation</h2>
            <p>After placing an order, you will receive:</p>
            <ul className="list-disc ml-6">
              <li>Order Confirmation</li>
              <li>Shipment/Delivery Updates</li>
            </ul>
            <p>We reserve the right to cancel orders due to:</p>
            <ul className="list-disc ml-6">
              <li>Stock unavailability</li>
              <li>Payment failure</li>
              <li>Fraud suspicion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">7. Shipping & Delivery</h2>
            <p>
              Delivery times are estimates. Delays may occur due to traffic, weather, or operational
              issues. The company is not liable for delays caused by third-party partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Returns, Refunds & Cancellations</h2>
            <p>Your return/refund policy goes here. Example:</p>
            <ul className="list-disc ml-6">
              <li>Returns accepted within 7 days of delivery.</li>
              <li>Items must be unused, undamaged, and in original packaging.</li>
              <li>Refunds processed within 5–7 business days.</li>
              <li>Certain items (innerwear, clearance items) may be non-returnable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">9. User Responsibilities</h2>
            <p>You must not:</p>
            <ul className="list-disc ml-6">
              <li>Use the App for illegal activities</li>
              <li>Abuse review/feedback features</li>
              <li>Harass merchants or delivery partners</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">10. Intellectual Property</h2>
            <p>
              All content, logos, designs, and text are owned by Zuget. You may not copy or
              redistribute them without permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">11. Limitation of Liability</h2>
            <p>
              The company is not responsible for:
            </p>
            <ul className="list-disc ml-6">
              <li>Losses due to incorrect address</li>
              <li>Damage after delivery</li>
              <li>Unauthorized use of your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">12. Modification of Terms</h2>
            <p>
              We may update these Terms anytime. Continued use means you accept the changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">13. Governing Law</h2>
            <p>
              These Terms are governed by the laws of Telangana, India.
            </p>
          </section>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
