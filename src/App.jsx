function App() {
  return (
    <div className="text-center mt-10">
      <div class="min-h-screen bg-gray-100 flex">
 
  <aside class="w-64 bg-white shadow-md">
    <div class="p-6 text-xl font-bold text-blue-600">Excel Analytics</div>
    <nav class="mt-6">
      <ul>
        <li class="px-6 py-3 hover:bg-blue-100 cursor-pointer font-medium text-gray-700">Dashboard</li>
        <li class="px-6 py-3 hover:bg-blue-100 cursor-pointer font-medium text-gray-700">Upload History</li>
      </ul>
    </nav>
  </aside>

  <main class="flex-1 p-8">
    <header class="flex justify-between items-center mb-8">
      <h1 class="text-2xl font-semibold">Dashboard</h1>
      <div class="space-x-4">
        <button class="text-gray-600 hover:text-blue-600">Upload History</button>
        <button class="text-gray-600 hover:text-blue-600">Logout</button>
      </div>
    </header>

   
    <section class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 class="text-lg font-semibold mb-4">Upload Excel File</h2>
      <div class="flex items-center space-x-4">
        <input type="file" class="border border-gray-300 rounded px-3 py-2 w-1/2" />
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Upload</button>
      </div>
    </section>

    
    <section class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-lg font-semibold mb-4">Graph Generation</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block mb-1 font-medium">X Axis:</label>
          <select class="w-full border border-gray-300 rounded px-3 py-2">
            <option>Column 1</option>
            <option>Column 2</option>
          </select>
        </div>
        <div>
          <label class="block mb-1 font-medium">Y Axis:</label>
          <select class="w-full border border-gray-300 rounded px-3 py-2">
            <option>Column 1</option>
            <option>Column 2</option>
          </select>
        </div>
      </div>
      <div class="mt-6 flex justify-between items-center">
        <button class="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Download</button>
        <div class="w-full md:w-1/2 bg-gray-100 h-64 flex items-center justify-center text-gray-400 text-sm">[ Chart Placeholder ]</div>
      </div>
    </section>
  </main>
</div>

    </div>
  );
}

export default App;