import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="lg:text-3xl font-bold mb-4 text-black">
          👕 About Us – ZUGET 30-Minute Fashion Delivery
        </h1>

        <p className="text-gray-600 mb-6">Fast Fashion. Faster Delivery. Updated: 4th Dec, 2025</p>

        <div className="space-y-6 text-gray-800 leading-relaxed">
          
          {/* Section 1 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Who We Are</h2>
            <p>
              <strong>Zuget</strong> is a next-generation clothing & fashion delivery startup focused on 
              delivering premium-quality shirts and apparel in under <strong>30 minutes</strong>.  
              We combine speed, quality, and seamless customer experience to redefine modern shopping.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>
              To make fashion accessible instantly. We believe waiting for hours or days for your outfits 
              is outdated — so we built a system that delivers the latest styles right to your doorstep 
              faster than your food orders.
            </p>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">What Makes Us Unique?</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>⏱ <strong>30-Minute Guaranteed Delivery*</strong></li>
              <li>🎽 High-quality curated fashion essentials</li>
              <li>🚀 Lightning-fast dispatch and micro-warehouse model</li>
              <li>📦 Hassle-free returns & smooth replacements</li>
              <li>💬 Instant support via call & WhatsApp</li>
              <li>📱 Modern, easy-to-use mobile app for seamless ordering</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Journey</h2>
            <p>
              Zuget was built with a simple idea — why wait for fashion when everything else is on-demand?
              From a small local idea, Zuget transformed into a fast-growing hyperlocal fashion delivery
              network trusted by thousands of customers.
            </p>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
            <p>
              To become India's fastest and most reliable instant-fashion network while maintaining 
              quality, transparency, and innovation.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Our Promise</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Premium fashion at fair prices</li>
              <li>Fast, reliable, and safe delivery</li>
              <li>Excellent customer support</li>
              <li>Curated collections based on trends</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Customer First, Always</h2>
            <p>
              Every product, update, delivery model, and feature we build revolves around YOU —
              our customer. Your satisfaction drives our innovation and speed.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p>We’re always here to help!</p>

            <ul className="list-disc ml-6 space-y-1">
              <li><strong>Call:</strong> +91 9111911162</li>
              <li><strong>WhatsApp:</strong> +91 9111911162</li>
              <li><strong>Email:</strong> support@zuget.in</li>
            </ul>

            <p className="text-gray-600 mt-3 text-sm">
              Delivery time may vary for certain locations or peak hours.
            </p>
          </section>

        </div>
      </div>

      <Footer />
    </div>
  );
}
