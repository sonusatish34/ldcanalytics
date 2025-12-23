import Image from "next/image";
import Link from "next/link";
export default function TryOn() {
  // utils/redirectUtils.js

  const handleStoreRedirect = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect to App Store if iOS
      window.open(
        "https://apps.apple.com/in/app/dozzy-farmhouse-rental/id6670319530",
        "_blank"
      );
    } else if (/android/i.test(userAgent)) {
      // Redirect to Play Store if Android
      window.open(
        "https://play.google.com/store/apps/details?id=com.dozzy_customer",
        "_blank"
      );
    } else {
      // Optional: Provide a message for non-mobile devices
      alert("App is available only on mobile devices.");
    }

  };
  return (
    <div>
      <div className="text-center mb-10 text-black">
        <p className=" text-xl lg:text-3xl font-bold mb-5">Specially Integrated AI For You</p>
        <h2 className=" lg:text-lg text-sm mt-1 max-w-5xl mx-auto">
          Try outfits instantly, see your style come to life, and explore perfect colors and designs—smart, simple, and personalized fashion.
        </h2>
      </div>
      <div className='relative'>
        <Image
          src={"/tryon1.png"}
          alt="mens product"
          width={1000}
          height={1000}
          className="lg:object-cover object-contain lg:w-screen w-full lg:h-screen h-full"
        />

        <div className="absolute bottom-0 left-5 md:left-12 lg:left-24 capitalize">
          <div className="
          relative 
          lg:w-[400px] lg:h-[400px] w-[120px] h-[120px]
          rounded-t-xl overflow-hidden
          shadow-lg  border-white/20
        ">
            {/* Blurred background layer */}
            <div className="
            absolute inset-0
            bg-black/30
            backdrop-blur-md
          "></div>

            {/* Text + Button (NOT blurred) */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 p-3 h-full">
              <h2 className="text-white text-sm lg:text-5xl lg:leading-16 font-bold drop-shadow">
                Try Every <br /> Outfit On You
              </h2>

              <Link href={'/'} onClick={handleStoreRedirect} className="mt-4 bg-green-500 text-sm lg:text-lg text-white font-semibold px-4 py-2 rounded-full hover:bg-green-600 transition">
                Try It Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
