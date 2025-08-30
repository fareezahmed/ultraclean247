export default function Steps() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">1</div>
          <h3 className="text-xl font-semibold mb-2">Book Online</h3>
          <p className="text-gray-600">Schedule your pickup with our easy online booking system</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">2</div>
          <h3 className="text-xl font-semibold mb-2">We Pick Up</h3>
          <p className="text-gray-600">Our team collects your laundry at your convenience</p>
        </div>
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">3</div>
          <h3 className="text-xl font-semibold mb-2">Clean & Deliver</h3>
          <p className="text-gray-600">We clean your clothes and deliver them back to you</p>
        </div>
      </div>
    </div>
  );
}
