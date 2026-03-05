import react from "react";
function Dashboard() {
  return (
    <div>
      <main class="pb-20">
        <h1 class="text-left font-bold bg-pink-300 text-lg w-80 mt-6 rounded-lg py-2">
          welcome joy, to charity minds
        </h1>
        <section class="flex justify-center items-center gap-6 mt-8 px-6">
          <div class="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="mine">
              <h1 class="font-bold text-3xl">70</h1>
              <h2>users</h2>
            </div>
            <div class="mine">
              <h1 class="font-bold text-3xl">45</h1>
              <h2></h2>
              children's homes
            </div>
            <div class="mine">
              <h1 class="font-bold text-3xl">1000</h1>
              <h2>visitors</h2>
            </div>
            <div class="mine">
              <h1 class="font-bold text-3xl">500000</h1>
              <h2>orphanage</h2>
            </div>
          </div>
        </section>
        <section class="mt-10 px-8">
          <h2 class="text-2xl font-bold text-center text-pink-800 mb-4">
            Group Users
          </h2>
          <div class="overflow-x-auto bg-white shadow-md rounded-xl border border-gray-200">
            <table class="w-full border-collapse">
              <thead>
                <tr class="bg-pink-600 text-white text-left">
                  <th class="py-3 px-4">First Name</th>
                  <th class="py-3 px-4">Last Name</th>
                  <th class="py-3 px-4">Email</th>
                  <th class="py-3 px-4">Username</th>
                  <th class="py-3 px-4">Phone Number</th>
                  <th class="py-3 px-4">Date of Birth</th>
                  <th class="py-3 px-4">Gender</th>
                </tr>
              </thead>
              <tbody>
                <tr class="bg-gray-200">
                  <td class="py-2 px-4">June</td>
                  <td class="py-2 px-4">Justine</td>
                  <td class="py-2 px-4">junejustine9@gmail.com</td>
                  <td class="py-2 px-4">June</td>
                  <td class="py-2 px-4">0712345678</td>
                  <td class="py-2 px-4">10/5/2001</td>
                  <td class="py-2 px-4">Male</td>
                </tr>
                <tr class="bg-white">
                  <td class="py-2 px-4">Faith</td>
                  <td class="py-2 px-4">Kibuna</td>
                  <td class="py-2 px-4">faithkibuna254@gmail.com</td>
                  <td class="py-2 px-4">Zoey</td>
                  <td class="py-2 px-4">0798765432</td>
                  <td class="py-2 px-4">12/8/2002</td>
                  <td class="py-2 px-4">Female</td>
                </tr>
                <tr class="bg-gray-200">
                  <td class="py-2 px-4">Amos</td>
                  <td class="py-2 px-4">Okello</td>
                  <td class="py-2 px-4">amosokello@gmail.com</td>
                  <td class="py-2 px-4">Amos</td>
                  <td class="py-2 px-4">0701234567</td>
                  <td class="py-2 px-4">10/7/2000</td>
                  <td class="py-2 px-4">Male</td>
                </tr>
                <tr class="bg-white">
                  <td class="py-2 px-4">James</td>
                  <td class="py-2 px-4">Muriuki</td>
                  <td class="py-2 px-4">james.muriuki@example.com</td>
                  <td class="py-2 px-4">James</td>
                  <td class="py-2 px-4">0719876543</td>
                  <td class="py-2 px-4">22/11/1992</td>
                  <td class="py-2 px-4">Male</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
