const EmpoweringInsuranceSection = () => {
  return (
    <section className="bg-white py-20 px-6 lg:px-20">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl font-semibold text-gray-900 leading-snug">
            Empowering Insurance <br /> for Everyone
          </h2>
          <p className="text-base text-gray-600">
            At [Your Company Name], we believe that great ideas deserve great
            execution. Our multidisciplinary team includes designers,
            developers, strategists, and thinkers focused on driving growth.
          </p>
          <button className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition">
            Contact Us
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/images/OurProduct.png" // ← Replace with your actual image path
            alt="Empowering Insurance"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default EmpoweringInsuranceSection;
