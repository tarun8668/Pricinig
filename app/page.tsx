
export default function Home() {
  return (
    <div className=" px-4">
      <nav className="flex items-center rounded-2xl m-2 shadow-md border">
        <img src="https://media.gettyimages.com/id/1296164524/photo/from-pink-to-pale-blue-gradient.jpg?s=612x612&w=0&k=20&c=jsW5jS4Qj_mgra7zVW90Lu3xisIp7tY83vcx1HBjTI4=" alt="" className="rounded-full h-10 w-10"/>
        <h1 className="font-bold m-3">Untitled UI</h1>
        <ul className="flex flex-1 text-center space-x-2">
          <li className="inline-block font-medium">Home</li>
          <li className="inline-block font-medium">Products</li>
          <li className="inline-block font-medium">Pricing</li>
          <li className="inline-block font-medium">About</li>
          <li className="inline-block font-medium">Blog</li>
          <li className="inline-block font-medium">Resources</li>
        </ul>
        <img src="https://picsum.photos/200/300" alt="" className="rounded-full w-10 h-10 mx-1"/>
      </nav>

      <main>
      <div className="flex flex-col items-center py-12 bg-gray-50">
  <h1 className="text-3xl font-bold text-gray-800 mb-2">Pay once, use forever.</h1>
  <p className="text-gray-600 mb-6">
    We believe Untitled should be accessible to all companies, no matter the size.
  </p>
  <div className="flex gap-4 mb-12">
    <button className="bg-white text-gray-800 border border-gray-300 px-4 py-2 rounded-lg font-medium hover:bg-gray-100">
      Watch demo
    </button>
    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800">
      Get started
    </button>
  </div>
  <div className="flex justify-center gap-8">
    {/* Basic Plan */}
    <div className="bg-white p-4 rounded-lg shadow-md w-96">
      <div className="flex justify-between">
        <h2 className="font-semibold text-xl mb-2 text-gray-800">Basic <p className="text-sm text-gray-600 mt-4">Our most popular plan for small teams.</p></h2>
        <h3 className="text-4xl font-bold text-gray-900">$99<span className="text-sm text-gray-500 line-clamp-1">one-time</span> </h3>
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">FEATURES</h3>
      <p className="text-sm text-gray-600 mb-4">Everything in our free plan plus...</p>
      <ul className="text-sm text-gray-600 list-disc pl-6 mb-6">
        <li>Access to basic features</li>
        <li>Basic reporting + analytics</li>
        <li>Up to 10 individual users</li>
        <li>20GB individual data</li>
        <li>Basic chat support</li>
        <li>Attend events</li>
        <li>Automatic updates</li>
        <li>Backup your account</li>
        <li>Audit log and notes</li>
        <li>Feature requests</li>
      </ul>
      <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800">
        Get started
      </button>
    </div>
    {/* Advanced Plan */}
    <div className="bg-white p-4 rounded-lg shadow-md w-96">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-semibold text-xl text-gray-800">Advanced <span className="bg-gray-200 text-xs font-medium text-gray-700 px-2 py-1 rounded">Popular</span></h2>
        <h3 className="text-4xl font-bold text-gray-900">$199 <span className="text-sm text-gray-500">one-time</span></h3>
        
      </div>
      <p className="text-sm text-gray-600">Advanced features and reporting.</p>
      <div className="flex items-baseline mb-1">
        
      </div>
      <h3 className="text-lg font-medium text-gray-700 mb-2">FEATURES</h3>
      <p className="text-sm text-gray-600 mb-4">Everything in our basic plan plus...</p>
      <ul className="text-sm text-gray-600 list-disc pl-6 mb-6">
        <li>200+ integrations</li>
        <li>Advanced reporting</li>
        <li>Up to 20 individual users</li>
        <li>40GB individual data</li>
        <li>Priority chat support</li>
        <li>Advanced custom fields</li>
        <li>Audit log and data history</li>
        <li>Backup your account</li>
        <li>Personalised service</li>
        <li>+ many more...</li>
      </ul>
      <button className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-gray-800">
        Get started
      </button>
    </div>
  </div>
</div>

      </main>
      
    </div>
  );
}
