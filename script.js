// // Fetch categories and display them
// const loadCatagories = () => {
//   fetch("https://openapi.programming-hero.com/api/peddy/categories")
//     .then((res) => res.json())
//     .then((data) => displayCatagories(data.categories))
//     .catch((error) => console.log(error));
// };

// // Display categories as buttons
// const displayCatagories = (categories) => {
//   const categoryContainer = document.getElementById("category");

//   categories.forEach((item) => {
//     // Create a button for each category
//     const buttonContainer = document.createElement("div");
//     buttonContainer.innerHTML = `
//       <button class="btn btn-accent btn-outline w-[312px] h-[128px] flex"
//         onclick="loadCardByCategory('${item.category}')">
//         <img src="${item.category_icon}" class="w-14 h-14" />
//         <div class="font-bold text-2xl text-black">${item.category}</div>
//       </button>
//     `;
//     categoryContainer.append(buttonContainer);
//   });
// };

// // Fetch pets based on category name
// const loadCardByCategory = (categoryName) => {
//   // Fetch the pets based on the category
//   fetch(
//     `https://openapi.programming-hero.com/api/peddy/category/${categoryName}`
//   )
//     .then((res) => res.json())
//     .then((data) => displayPetsInfo(data.data)) // Access the 'data' array
//     .catch((error) => console.log(error));
// };

// // Fetch all pets
// const loadPets = () => {
//   fetch(`https://openapi.programming-hero.com/api/peddy/pets`)
//     .then((res) => res.json())
//     .then((data) => displayPetsInfo(data.pets))
//     .catch((error) => console.log(error));
// };

// // Display pet information in cards
// const displayPetsInfo = (pets) => {
//   const petsContainer = document.getElementById("pets");
//   petsContainer.innerHTML = ""; // Clear previous results

//   pets.forEach((petItem) => {
//     const petCardContainerInfo = document.createElement("div");
//     petCardContainerInfo.innerHTML = `
//             <div
//                 class="card w-[312px] border-solid border-2 border-teal-400 p-[20px]"
//               >
//                 <figure class="px-0 pt-">
//                   <img
//                     src=${petItem.image}
//                     alt=""
//                     class="rounded-xl object-cover h-[260px]"
//                   />
//                 </figure>
//                 <div class="card items-start text-start mt-[24px] flex gap-2">
//                   <h2 class="card-title font-bold text-xl mb-[8px]">${petItem.pet_name}</h2>
//                   <div class="flex justify-center">
//                     <img
//                       class="w-[20px] h-[20px] object-cover mr-2"
//                       src="images/Breed.png"
//                       alt=""
//                     />
//                     <p class="text-sm text-gray-500">Breed: ${petItem.breed}</p>
//                   </div>

//                   <div class="flex justify-center">
//                     <img
//                       class="w-[20px] h-[20px] object-cover mr-2"
//                       src="images/birth.png"
//                       alt=""
//                     />
//                     <p class="text-sm text-gray-500">Birth: ${petItem.date_of_birth}</p>
//                   </div>

//                   <div class="flex justify-center">
//                     <img
//                       class="w-[20px] h-[20px] object-cover mr-2"
//                       src="images/gender.png"
//                       alt=""
//                     />
//                     <p class="text-sm text-gray-500">Gender:  ${petItem.gender}</p>
//                   </div>

//                   <div class="flex justify-center">
//                     <img
//                       class="w-[20px] h-[20px] object-cover mr-2"
//                       src="images/price.png"
//                       alt=""
//                     />
//                     <p class="text-sm text-gray-500">Price :  ${petItem.price}</p>
//                   </div>
//                   <div class="w-full h-[1px] my-4 bg-teal-600"></div>

//                   <div class="card-actions w-full">
//                     <button class="btn btn-secondary object-cover">
//                       <img src="images/like.png" alt="" />
//                     </button>
//                     <button class="btn btn-primary">Adopt</button>
//                     <button class="btn btn-primary">Details</button>
//                   </div>
//                 </div>
//               </div>
//     `;
//     petsContainer.append(petCardContainerInfo);
//   });
// };

// // Load the categories on page load
// loadCatagories();
// loadPets();
