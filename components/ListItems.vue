<template>
<section class="relative py-16">
<div class="w-full mb-12 px-4">
  <div
class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded">
    <!-- <div class="rounded-t mb-0 px-4 py-3 border-0">
      <div class="flex flex-wrap items-center">
        <div class="relative w-full px-4 max-w-full flex-grow flex-1 ">
          <h3 class="font-semibold text-lg">Card Tables</h3>
        </div>
      </div>
    </div> -->
    <div class="block w-full overflow-x-auto border rounded-lg">
      <table class="items-center w-full">
        <thead class="border-b">
          <tr class="justify-items-center">
            <th class="pl-6 pr-3 align-middle py-3 text-xs border-l-0 border-r-0 whitespace-nowrap font-medium text-gray-500 text-left">
              <div class="flex items-center mr-4 mb-2">
                <input id="list-check" type="checkbox" class="opacity-0 absolute h-5 w-5" checked/>
                <div class="bg-primary text-primary bg-opacity-20 border-2 rounded-md boder-primary w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                  <SvgIcons name="dash" />
                </div>
              </div>
            </th>
            <th class="align-middle py-3 text-xs flex items-center whitespace-nowrap font-medium text-gray-500 text-left">
              Company <span><img class="px-2" src="~/assets/img/down-arrow.svg" alt=""></span>
            </th>
            <th class="px-6 align-middle py-3 text-xs whitespace-nowrap font-medium text-gray-500 text-left">
              License use
            </th>
            <th class="px-6 lg:block hidden align-middle py-3 text-xs whitespace-nowrap font-medium text-gray-500 text-left">Status</th>
            <th class="px-6 lg:block hidden align-middle py-3 text-xs whitespace-nowrap font-medium text-gray-500 text-left">Users</th>
            <th class="px-4 lg:block hidden align-middle py-3 text-xs whitespace-nowrap font-medium text-gray-500 text-left">About </th>
            <th class="px-4 lg:block hidden align-middle py-3 text-xs whitespace-nowrap font-medium text-gray-500 text-left"></th>
          </tr>
        </thead>

        <tbody>
          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <!-- <input id="checkbox" class="w-5 h-5 border-primary focus:ring-primary  focus:ring-1 bg-primary-accent rounded-md" type="checkbox" name="" checked> -->
              <!-- <input type="checkbox" class="accent-gray-300 focus:accent-gray-500" checked> -->
              <div class="flex items-center mr-4 mb-2">
                <input id="list-check" type="checkbox" class="opacity-0 absolute h-5 w-5" checked/>
                <div class="bg-primary text-primary bg-opacity-20 border-2 rounded-md boder-primary w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                  <SvgIcons name="tick" />
                </div>
              </div>
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/catalogue.svg" alt="catalogue">
              <div class="grid">
                <span class="ml-3 font-medium"> Catalog </span>
                <span class="ml-3 text-gray-500"> catalogapp.io </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 74.66%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-green bg-opacity-10 text-green py-1 px-3 rounded-full text-xs">Customer</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>

          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <div class="flex items-center mr-4 mb-2">
                <input id="list-check" type="checkbox" class="opacity-0 absolute h-5 w-5" checked/>
                <div class="bg-primary text-primary bg-opacity-20 border-2 rounded-md boder-primary w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                  <SvgIcons name="tick" />
                </div>
              </div>
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/circooles.svg" alt="catalogue">
              <div class="grid">
                <span class="ml-3 font-medium"> Circooles </span>
                <span class="ml-3 text-gray-500"> getcircooles.com </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 66.13%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-gray-100 py-1 px-3 rounded-full text-xs">Churned</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>

          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <div class="flex items-center mr-4 mb-2">
                <input id="list-check" type="checkbox" class="opacity-0 absolute h-5 w-5" checked/>
                <div class="bg-primary text-primary bg-opacity-20 border-2 rounded-md boder-primary w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                  <SvgIcons name="tick" />
                </div>
              </div>
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/commandar.svg" alt="catalogue">
              <div class="grid">
                <span class="ml-3 font-medium"> Command+R </span>
                <span class="ml-3 text-gray-500"> cmdr.ai </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 40.25%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-green bg-opacity-10 text-green py-1 px-3 rounded-full text-xs">Customer</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>

          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <input id="checkbox" class="w-5 h-5" type="checkbox" name="">
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/hourglass.svg" alt="catalogue">
              <div class="grid">
                <span class="ml-3 font-medium"> Hourglass </span>
                <span class="ml-3 text-gray-500"> hourglass.app </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 83.38%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-green bg-opacity-10 text-green py-1 px-3 rounded-full text-xs">Customer</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>

          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <input id="checkbox" class="w-5 h-5" type="checkbox" name="">
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/layers.svg" alt="catalogue">
              <div class="grid">
                <span class="ml-3 font-medium"> Layers </span>
                <span class="ml-3 text-gray-500"> getlayers.io </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 31.63%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-gray-100 py-1 px-3 rounded-full text-xs">Churned</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>

          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <div class="flex items-center mr-4 mb-2">
                <input id="list-check" type="checkbox" class="opacity-0 absolute h-5 w-5" checked/>
                <div class="bg-primary text-primary bg-opacity-20 border-2 rounded-md boder-primary w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                  <SvgIcons name="tick" />
                </div>
              </div>
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/quotient.svg" alt="quotient">
              <div class="grid">
                <span class="ml-3 font-medium"> Quotient </span>
                <span class="ml-3 text-gray-500"> quotient.co </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 22.44%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-green bg-opacity-10 text-green py-1 px-3 rounded-full text-xs">Customer</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>

          <tr class="odd:bg-gray-50">
            <td class="border-t-0 pl-6 pr-3 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4">
              <div class="flex items-center mr-4 mb-2">
                <input id="list-check" type="checkbox" class="opacity-0 absolute h-5 w-5" checked/>
                <div class="bg-primary text-primary bg-opacity-20 border-2 rounded-md boder-primary w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-primary">
                  <SvgIcons name="tick" />
                </div>
              </div>
            </td>
            <th class="border-t-0 font-normal align-middle border-l-0 border-r-0 text-xs whitespace-nowrap py-4 text-left flex items-center">
              <img class="w-8 h-8" src="~/assets/img/sisyphus.svg" alt="sisyphus">
              <div class="grid">
                <span class="ml-3 font-medium"> Sisyphus </span>
                <span class="ml-3 text-gray-500"> sisyphus.com </span>
              </div>
            </th>
            <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="relative w-9/10 border rounded-lg">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                  <div style="width: 49.06%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                </div>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <span class="bg-green bg-opacity-10 text-green py-1 px-3 rounded-full text-xs">Customer</span></td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
              <div class="flex">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-1-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-3-800x800.jpg" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
                <img src="https://demos.creative-tim.com/notus-js/assets/img/team-4-470x470.png" alt="..." class="w-10 h-10 rounded-full border-2 border-blueGray-50 shadow -ml-4">
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"><div class="items-center">
              <p>Content curating app</p>
              <p class="text-gray-500">Brings all your news to one place</p>
              </div>
            </td>
            <td class="border-t-0 lg:block hidden px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
              <div class="flex item-center justify-center">
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                  </div>
                  <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                      </svg>
                  </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
        <div class="flex items-center px-6 text-sm text-gray-700 justify-between">
          <div class="border-t-0 font-normal align-middle border-l-0 border-r-0 whitespace-nowrap py-4 gap-3 text-left flex items-center">
              <button class="px-3 py-2 border rounded">
                Previous
              </button>
              <button class="px-3 py-2 border rounded">
                Next
              </button>
          </div>
          <div class="">
            Page 1 of 10
          </div>
        </div>
    </div>
  </div>
</div>
</section>
</template>

<script>
export default {
    name: "ListItem",
    setup() {
    },
}
</script>

<style lang="postcss" scoped>

input:checked + div {
  @apply border-primary;
}
input:checked + div svg {
  @apply block;
}
</style>
