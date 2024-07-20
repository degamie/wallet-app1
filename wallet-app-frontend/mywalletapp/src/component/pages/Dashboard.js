import React, { useContext, useState, useEffect } from 'react';
import UserContext from '../context/Context';
import axios from 'axios';

const Dashboard = () => {
    const { username, firstName } = useContext(UserContext);
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState('');
    const [transferTo, setTransferTo] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchBalance();
    }, []);

    const fetchBalance = async () => {
        try {
            const response = await axios.get('/api/wallet/balance', {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setBalance(response.data.balance);
        } catch (error) {
            console.error('Error fetching balance:', error);
        }
    };

    const addFunds = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/wallet/add-funds', { amount }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage('Funds added successfully!');
            setBalance(balance + parseFloat(amount));
            setAmount('');
        } catch (error) {
            setMessage('Failed to add funds.');
        }
    };

    const transferMoney = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/wallet/transfer', { amount, transferTo }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            });
            setMessage('Transfer successful!');
            setBalance(balance - parseFloat(amount));
            setAmount('');
            setTransferTo('');
        } catch (error) {
            setMessage('Failed to transfer money.');
        }
    };

    return (
        <>
        <div className = "fixed w-full z-30 flex bg-white dark:bg-[#0F172A] p-2 items-center justify-center h-16 px-10 py-8 shadow-md">
      
      <a href="/" className="flex items-center py-4 px-2">

        <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="Logo" className="h-8 w-8 mr-2" />

        <span className="font-bold text-black text-xl">SimplePay</span>

    </a>
        {/* <!-- SPACER --> */}
        <div className = "grow h-full flex items-center justify-center"></div>
        <div className = "flex-none h-full text-center flex items-center justify-center">
            
                <div className = "flex space-x-3 items-center px-3">
                    <div classNameclassName = "flex-none flex justify-center">
                    <div className="w-8 h-8 flex ">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShta_GXR2xdnsxSzj_GTcJHcNykjVKrCBrZ9qouUl0usuJWG2Rpr_PbTDu3sA9auNUH64&usqp=CAU" alt="profile" classNameclassName="shadow rounded-full object-cover" />
                    </div>
                    </div>

                    <div className = "hidden md:block text-sm md:text-md text-black dark:text-white">John Doe</div>
                </div>
                
        </div>
    </div>


        <div className="flex h-screen bg-gray-100 pt-16">
            {/* Sidebar 1 */}
            {/* <div className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white w-64 flex-shrink-0 p-4 justify-center">
            {/* <a href="/" className="flex items-center py-4 px-2">

            <img src="https://cdn-icons-png.flaticon.com/512/3757/3757881.png" alt="Logo" className="h-8 w-8 mr-2" />

            <span className="font-bold text-white text-xl">SimplePay</span>

</a> */}
                {/* <nav className="space-y-4 pt-6">
                    <a href="#balance" className="block font-semibold py-2 px-4 rounded hover:bg-indigo-700">Show Balance</a>
                    <a href="#add-funds" className="block font-semibold py-2 px-4 rounded hover:bg-indigo-700">Add Funds</a>
                    <a href="#transfer-money" className="block font-semibold py-2 px-4 rounded hover:bg-indigo-700">Transfer Money</a>
                </nav>
            </div> */}

            {/*Sidebar 2 */}

            <div class="flex overflow-hidden bg-white pt-16">
      <aside id="sidebar" class="fixed hidden z-20 h-full top-0 left-0 pt-16 flex lg:flex flex-shrink-0 flex-col w-64 transition-width duration-75" aria-label="Sidebar">
         <div class="relative flex-1 flex flex-col min-h-0 border-r border-gray-200 bg-white pt-0">
            <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
               <div class="flex-1 px-3 bg-white divide-y space-y-1">
                  <ul class="space-y-2 pb-2">
                     <li>
                        <a href="#" class="text-base text-gray-900 font-normal rounded-lg flex items-center p-2 hover:bg-blue-100 group">
                           <svg class="w-6 h-6 text-gray-500 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                           </svg>
                           <span class="ml-3">Dashboard</span>
                        </a>
                     </li>
                     <li>
                     </li>
                     <li>
                        <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-blue-100 flex items-center p-2 group ">
                           <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="ml-3 flex-1 whitespace-nowrap">My Profile</span>
                        </a>
                     </li>
                     <li>
                        <a href="#" class="text-base text-gray-900 font-normal rounded-lg hover:bg-blue-100 flex items-center p-2 group ">
                           <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="ml-3 flex-1 whitespace-nowrap">Products</span>
                        </a>
                     </li>
                     <li>
                        <a href="/auth/login" class="text-base text-gray-900 font-normal rounded-lg hover:bg-blue-100 flex items-center p-2 group ">
                           <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="ml-3 flex-1 whitespace-nowrap">Sign In</span>
                        </a>
                     </li>
                     <li>
                        <a href="/auth/register" class="text-base text-gray-900 font-normal rounded-lg hover:bg-blue-100 flex items-center p-2 group ">
                           <svg class="w-6 h-6 text-gray-500 flex-shrink-0 group-hover:text-gray-900 transition duration-75" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clip-rule="evenodd"></path>
                           </svg>
                           <span class="ml-3 flex-1 whitespace-nowrap">Sign Up</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </aside>
      <div class="bg-gray-900 opacity-50 hidden fixed inset-0 z-10" id="sidebarBackdrop"></div>
      <div id="main-content" class="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">

      </div>
   </div>

            {/* Main Content */}
            <div className="flex-1 p-6">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-gray-900">Hi {/*username*/} FirstName</h1>
                    <p className="text-gray-700">Welcome to your Wallet {username}</p>
                </div>

                                    {/*Graph */}

                                    <div class="pt-6 px-4">
               <div class="w-full ">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class=" mb-4 flex items-center justify-between">
                        <div>
                           <h3 class="text-xl font-bold text-gray-900 mb-2">Latest Transactions</h3>
                           <span class="text-base font-normal text-gray-500">This is a list of latest transactions</span>
                        </div>
                        <div class="flex-shrink-0">
                           <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-blue-100 rounded-lg p-2">View all</a>
                        </div>
                     </div>
                     <div class="flex flex-col mt-8">
                        <div class="overflow-x-auto rounded-lg">
                           <div class="align-middle inline-block min-w-full">
                              <div class="shadow overflow-hidden sm:rounded-lg">
                                 <table class="min-w-full divide-y divide-gray-200">
                                    <thead class="bg-gray-50">
                                       <tr>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Transaction
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Date & Time
                                          </th>
                                          <th scope="col" class="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                             Amount
                                          </th>
                                       </tr>
                                    </thead>
                                    <tbody class="bg-white">
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment from <span class="font-semibold">Bonnie Green</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 23 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $2300
                                          </td>
                                       </tr>
                                       <tr class="bg-gray-50">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                             Payment refund to <span class="font-semibold">#00910</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 23 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             -$670
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment failed from <span class="font-semibold">#087651</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 18 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $234
                                          </td>
                                       </tr>
                                       <tr class="bg-gray-50">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                             Payment from <span class="font-semibold">Lana Byrd</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 15 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $5000
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment from <span class="font-semibold">Jese Leos</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 15 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $2300
                                          </td>
                                       </tr>
                                       <tr class="bg-gray-50">
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900 rounded-lg rounded-left">
                                             Payment from <span class="font-semibold">THEMESBERG LLC</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 11 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $560
                                          </td>
                                       </tr>
                                       <tr>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
                                             Payment from <span class="font-semibold">Lana Lysle</span>
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-normal text-gray-500">
                                             Apr 6 ,2021
                                          </td>
                                          <td class="p-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                                             $1437
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">2,340</span>
                           <h3 class="text-base font-normal text-gray-500">New expenses this week</h3>
                        </div>
                        <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           14.6%
                           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">5,355</span>
                           <h3 class="text-base font-normal text-gray-500">Transactions this week</h3>
                        </div>
                        <div class="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
                           32.9%
                           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
                  <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <div class="flex items-center">
                        <div class="flex-shrink-0">
                           <span class="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
                           <h3 class="text-base font-normal text-gray-500">Savings this week</h3>
                        </div>
                        <div class="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
                           -2.7%
                           <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                           </svg>
                        </div>
                     </div>
                  </div>
               </div>
               <div class="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
                  {/* <div class="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
                     <h3 class="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
                     <div class="block w-full overflow-x-auto">
                        <table class="items-center w-full bg-transparent border-collapse">
                           <thead>
                              <tr>
                                 <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
                                 <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
                                 <th class="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
                              </tr>
                           </thead>
                           <tbody class="divide-y divide-gray-100">
                              <tr class="text-gray-500">
                                 <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
                                 <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
                                 <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                       <span class="mr-2 text-xs font-medium">30%</span>
                                       <div class="relative w-full">
                                          <div class="w-full bg-gray-200 rounded-sm h-2">
                                             <div class="bg-cyan-600 h-2 rounded-sm width: 30%"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr class="text-gray-500">
                                 <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
                                 <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
                                 <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                       <span class="mr-2 text-xs font-medium">24%</span>
                                       <div class="relative w-full">
                                          <div class="w-full bg-gray-200 rounded-sm h-2">
                                             <div class="bg-orange-300 h-2 rounded-sm width: 24%" ></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr class="text-gray-500">
                                 <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
                                 <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
                                 <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                       <span class="mr-2 text-xs font-medium">18%</span>
                                       <div class="relative w-full">
                                          <div class="w-full bg-gray-200 rounded-sm h-2">
                                             <div class="bg-teal-400 h-2 rounded-sm width: 18%"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr class="text-gray-500">
                                 <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
                                 <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
                                 <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                       <span class="mr-2 text-xs font-medium">12%</span>
                                       <div class="relative w-full">
                                          <div class="w-full bg-gray-200 rounded-sm h-2">
                                             <div class="bg-pink-600 h-2 rounded-sm width: 12%"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr class="text-gray-500">
                                 <th class="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
                                 <td class="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
                                 <td class="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
                                    <div class="flex items-center">
                                       <span class="mr-2 text-xs font-medium">9%</span>
                                       <div class="relative w-full">
                                          <div class="w-full bg-gray-200 rounded-sm h-2">
                                             <div class="bg-indigo-600 h-2 rounded-sm width: 9%" ></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                              <tr class="text-gray-500">
                                 <th class="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
                                 <td class="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
                                 <td class="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
                                    <div class="flex items-center">
                                       <span class="mr-2 text-xs font-medium">7%</span>
                                       <div class="relative w-full">
                                          <div class="w-full bg-gray-200 rounded-sm h-2">
                                             <div class="bg-purple-500 h-2 rounded-sm width: 7%"></div>
                                          </div>
                                       </div>
                                    </div>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                  </div> */}
               </div>
            </div>

                {message && <p className="text-center text-red-500 mb-4">{message}</p>}

             
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Show Balance Card */}
                    <div id="balance" className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Show Balance</h3>
                        <p className="text-gray-700">Balance: ${balance.toFixed(2)}</p>
                    </div>

                    {/* Add Funds Card */}
                    <div id="add-funds" className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Add Funds</h3>
                        <form onSubmit={addFunds}>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                                placeholder="Amount" 
                                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                                required 
                            />
                            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
                                Add Funds
                            </button>
                        </form>
                    </div>



                    {/* Transfer Money Card */}
                    <div id="transfer-money" className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold mb-4">Transfer Money</h3>
                        <form onSubmit={transferMoney}>
                            <input 
                                type="number" 
                                value={amount} 
                                onChange={(e) => setAmount(e.target.value)} 
                                placeholder="Amount" 
                                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                                required 
                            />
                            <input 
                                type="text" 
                                value={transferTo} 
                                onChange={(e) => setTransferTo(e.target.value)} 
                                placeholder="Recipient Username" 
                                className="w-full p-2 mb-4 border border-gray-300 rounded" 
                                required 
                            />
                            <button type="submit" className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition duration-300">
                                Transfer Money
                            </button>
                        </form>
                    </div>
                </div>

                                  <div class="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
                     <div class="flex items-center justify-between mb-4">
                        <h3 class="text-xl font-bold leading-none text-gray-900">Latest Transactions</h3>
                        <a href="#" class="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
                        View all
                        </a>
                     </div>
                     <div class="flow-root">
                        <ul role="list" class="divide-y divide-gray-200">
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil image" />
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Neil Sims
                                    </p>
                                    <p class="text-sm text-gray-500 truncate">
                                       <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                    $320
                                 </div>
                              </div>
                           </li>
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Neil image" />
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Bonnie Green
                                    </p>
                                    <p class="text-sm text-gray-500 truncate">
                                       <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9">[email&#160;protected]</a>
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                    $3467
                                 </div>
                              </div>
                           </li>
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil image" />
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Michael Gough
                                    </p>
                                    <p class="text-sm text-gray-500 truncate">
                                       <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="57323a363e3b17203e3933242332257934383a">[email&#160;protected]</a>
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                    $67
                                 </div>
                              </div>
                           </li>
                           <li class="py-3 sm:py-4">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/thomas-lean.png" alt="Neil image" />
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Thomes Lean
                                    </p>
                                    <p class="text-sm text-gray-500 truncate">
                                       <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="284d45494144685f41464c5b5c4d5a064b4745">[email&#160;protected]</a>
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                    $2367
                                 </div>
                              </div>
                           </li>
                           <li class="pt-3 sm:pt-4 pb-0">
                              <div class="flex items-center space-x-4">
                                 <div class="flex-shrink-0">
                                    <img class="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/lana-byrd.png" alt="Neil image" />
                                 </div>
                                 <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">
                                       Lana Byrd
                                    </p>
                                    <p class="text-sm text-gray-500 truncate">
                                       <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf">[email&#160;protected]</a>
                                    </p>
                                 </div>
                                 <div class="inline-flex items-center text-base font-semibold text-gray-900">
                                    $367
                                 </div>
                              </div>
                           </li>
                        </ul>
                     </div>
                  </div>
            </div>
        </div>
        </>
    );
};

export default Dashboard;
