import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function DeliveryPartnerTermsPage() {
  // Fixed date for "Last Updated"
  const today = new Date("2025-11-28");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="lg:text-3xl font-bold mb-4 text-black">
          📄 Terms & Conditions – Delivery Partner App
        </h1>

        <p className="text-gray-600 mb-6">
          Last Updated:{" "}
          {today.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>
            <strong>Company Name:</strong> Zuget
            <br />
            <strong>Platform:</strong> Delivery Partner Mobile Application (“Delivery App”)
          </p>

          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">1. Eligibility</h2>
            <p>Delivery partners must meet the following requirements:</p>
            <ul className="list-disc ml-6">
              <li>Be at least 18 years old</li>
              <li>Possess a valid government ID</li>
              <li>Have a working vehicle (if required by the service)</li>
              <li>Follow all road, traffic, and safety regulations</li>
            </ul>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">2. Responsibilities</h2>
            <ul className="list-disc ml-6">
              <li>Pick up and deliver items on time</li>
              <li>Handle packages with care and safety</li>
              <li>Follow delivery instructions provided by customers or merchants</li>
              <li>Not tamper with, open, or damage packages</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">3. Payments & Earnings</h2>
            <ul className="list-disc ml-6">
              <li>Earnings are based on per-delivery rates and incentives</li>
              <li>Payments are transferred weekly or monthly (depending on company policy)</li>
            </ul>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">4. Code of Conduct</h2>
            <ul className="list-disc ml-6">
              <li>Behave professionally with customers and merchants</li>
              <li>Not engage in theft, fraud, or dishonest practices</li>
              <li>Not misuse customer or merchant personal information</li>
            </ul>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">5. Fraud & Misconduct</h2>
            <p>The following actions may result in permanent account termination:</p>
            <ul className="list-disc ml-6">
              <li>Marking false or fake deliveries</li>
              <li>Stealing or tampering with items</li>
              <li>Abusive behavior towards customers or merchants</li>
              <li>Manipulating delivery routes or app systems</li>
            </ul>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">6. Liability</h2>
            <p>The company is not responsible for:</p>
            <ul className="list-disc ml-6">
              <li>Traffic fines, penalties, or violations</li>
              <li>Vehicle repairs, fuel costs, or breakdowns</li>
              <li>Personal injuries or accidents</li>
              <li>Loss or damages caused due to negligence by the delivery partner</li>
            </ul>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">7. Account Suspension</h2>
            <p>We may suspend or terminate a delivery partner’s account for:</p>
            <ul className="list-disc ml-6">
              <li>Repeated late deliveries</li>
              <li>Customer or merchant complaints</li>
              <li>Violation of app or company policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">8. Location Access & Background Location Usage</h2>
            <p>To ensure accurate pickups, real-time delivery tracking, and reliable route navigation, the Delivery App may collect your location data as follows:</p>

            <h3 className="text-lg font-medium mt-3">a. Foreground Location</h3>
            <ul className="list-disc ml-6">
              <li>Assign delivery tasks based on proximity</li>
              <li>Allow customers and merchants to track delivery progress</li>
              <li>Provide accurate navigation routes</li>
            </ul>

            <h3 className="text-lg font-medium mt-3">b. Background Location</h3>
            <p>The app may also access your location even when it is closed or running in the background, but <strong>only when</strong>:</p>
            <ul className="list-disc ml-6">
              <li>You are currently on an active delivery</li>
              <li>Your location is required for safety, tracking, and fraud-prevention measures</li>
              <li>Accurate order status updates are needed (pickup, en-route, arrival)</li>
            </ul>

            <h3 className="text-lg font-medium mt-3">c. How We Use Location Data</h3>
            <ul className="list-disc ml-6">
              <li>Real-time delivery and route updates</li>
              <li>Safety and monitoring of delivery activities</li>
              <li>Proof of delivery verification</li>
              <li>Detecting fraud or route manipulation</li>
            </ul>

            <h3 className="text-lg font-medium mt-3">d. Your Control</h3>
            <p>You may adjust your device’s location permissions at any time. However, disabling location access may affect your ability to receive or complete deliveries.</p>
          </section>

          <section className="mt-6">
            <h2 className="text-xl font-semibold mb-2">9. Data Privacy</h2>
            <ul className="list-disc ml-6">
              <li>We do <strong>not</strong> sell or share your personal data with unauthorized third parties.</li>
              <li>Data is used only for app functionality, safety, and compliance.</li>
              <li>Delivery partners may request data deletion by contacting support.</li>
            </ul>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
