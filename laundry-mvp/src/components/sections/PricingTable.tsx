export default function PricingTable() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Basic Wash</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">$15</div>
          <ul className="text-left space-y-2 mb-6">
            <li>• Standard wash & dry</li>
            <li>• 24-hour turnaround</li>
            <li>• Free pickup & delivery</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Choose Plan
          </button>
        </div>
        <div className="border rounded-lg p-6 text-center border-blue-500">
          <h3 className="text-xl font-semibold mb-4">Premium Care</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">$25</div>
          <ul className="text-left space-y-2 mb-6">
            <li>• Premium wash & dry</li>
            <li>• Same-day service</li>
            <li>• Free pickup & delivery</li>
            <li>• Fabric protection</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Choose Plan
          </button>
        </div>
        <div className="border rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-4">Dry Clean</h3>
          <div className="text-3xl font-bold text-blue-600 mb-4">$35</div>
          <ul className="text-left space-y-2 mb-6">
            <li>• Professional dry cleaning</li>
            <li>• 48-hour turnaround</li>
            <li>• Free pickup & delivery</li>
            <li>• Stain treatment</li>
          </ul>
          <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Choose Plan
          </button>
        </div>
      </div>
    </div>
  );
}
