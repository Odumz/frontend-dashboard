<template>
<!-- component -->
<div class="overflow-x-hidden">
        <div class="w-full">
            <div class="shadow-lg rounded-lg border my-6">
                <table class="w-full table-auto">
                    <thead>
                        <tr class="text-gray-500 text-xs border-b leading-normal">
                            <td class="py-3 px-6 text-left font-medium">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer" type="checkbox" value="" />
                            </td>
                            <th class="py-3 px-6 text-left flex items-center gap-2 font-medium">Company <span><img src="~/assets/img/down-arrow.svg" alt=""></span></th>
                            <th class="py-3 px-6 text-left font-medium">License use</th>
                            <th class="py-3 px-6 text-left font-medium">Status</th>
                            <th class="py-3 px-6 text-center font-medium">Users</th>
                            <th class="py-3 px-6 text-center font-medium">About</th>
                            <th class="py-3 px-6 text-center font-medium"></th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-600 text-sm font-light">
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img class="w-6 h-6" src="~/assets/img/catalogue.svg" alt="">
                                    </div>
                                    <span class="font-medium">Catalogue</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-bar">
                                      <div style="width: 74.66%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                        <img class="w-6 h-6" src="~/assets/img/circooles.svg"/>
                                    </div>
                                    <span class="font-medium">Circooles</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-50">
                                      <div style="width: 66.13%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">Completed</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img class="w-6 h-6" src="~/assets/img/commandar.svg" alt="">
                                    </div>
                                    <span class="font-medium">Command + R</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-50">
                                      <div style="width: 40.25%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img class="w-6 h-6" src="~/assets/img/hourglass.svg" alt="">
                                    </div>
                                    <span class="font-medium">Hourglass</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-50">
                                      <div style="width: 83.38%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img class="w-6 h-6" src="~/assets/img/layers.svg" alt="">
                                    </div>
                                    <span class="font-medium">Layers</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-50">
                                      <div style="width: 31.63%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">Active</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 bg-gray-50 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img class="w-6 h-6" src="~/assets/img/quotient.svg" alt="">
                                    </div>
                                    <span class="font-medium">Quotient</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-50">
                                      <div style="width: 22.44%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">Scheduled</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                            <td class="py-3 px-6 text-left whitespace-nowrap">
                              <input  id="flexCheckIndeterminate" class="appearance-none h-5 w-5 border border-gray-300 rounded-md bg-white checked:bg-primary checked:bg-opacity-20 checked:border-primary focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" />
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                    <div class="mr-2">
                                      <img class="w-6 h-6" src="~/assets/img/sisyphus.svg" alt="">
                                    </div>
                                    <span class="font-medium">Sisyphus</span>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-left">
                                <div class="flex items-center">
                                  <div class="relative w-9/10 border rounded-lg">
                                    <div class="overflow-hidden h-2 text-xs flex rounded bg-gray-50">
                                      <div style="width: 49.06%" class="shadow-none rounded flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary"></div>
                                    </div>
                                  </div>
                                </div>
                            </td>
                            <td class="py-3 px-6">
                                <span class="bg-green bg-opacity-10  font]text-green py-1 px-3 rounded-full text-xs">Pending</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex items-center justify-center">
                                    <img class="w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/women/2.jpg"/>
                                    <img class="w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125" src="https://randomuser.me/api/portraits/men/3.jpg"/>
                                </div>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <span class="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">Pending</span>
                            </td>
                            <td class="py-3 px-6 text-center">
                                <div class="flex item-center justify-center">
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot class="rounded-b-lg w-full flex items-center gap-2 pt-3 pb-4 px-4">
                      <tr class="flex justify-between">
                        <button class="border rounded-lg px-3 mx-2 py-2">
                          Previous
                        </button>
                        <button class="border rounded-lg px-3 mx-2 py-2">
                          Next
                        </button>
                      </tr>
                      <tr class="flex justify-end">
                        <p>Page 1 of 10</p>
                      </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "ListItem",
  setup() {

  },
}
</script>

<style lang="postcss" scoped>
/* input {
  @apply text-yellow-500;
  width: 20px;
  height: 20px;
  color: #ae0000;
  background-color: #ae0000;
  border: 2px solid #ae0000;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
} */
</style>
