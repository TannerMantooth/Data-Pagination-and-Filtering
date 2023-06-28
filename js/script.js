/*
Creation of the 'showPage' function
Creates pages that contain 9 student items
*/
function showPage(list, page) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector('ul.student-list');
   studentList.innerHTML = '';

   //creates each list item for the length of the student array then adds it to the student-list unordered list
   for (let i = 0; i <list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const student = `
         <li class="student-item cf">
            <div class="student-details">
               <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
               <h3>${list[i].name.first} ${list[i].name.last}</h3>
               <span class="email">${list[i].email}</span>
            </div>
            <div class="joined-details">
               <span class="date">${list[i].registered.date}</span>
            </div>
         </li>`;
         studentList.insertAdjacentHTML('beforeend', student);
      }
   }
}

/*
Creation of the 'addPagination' function
Creates the pagination buttons at the bottom of the page for navigation
*/
function addPagination(list) {
   const paginationButtons = Math.ceil(list.length / 9);
   const linkList = document.querySelector('ul.link-list');
   linkList.innerHTML = '';

   //loops through to create buttons based off of value stored in paginationButtons
   for (let i = 1; i <= paginationButtons; i++) {
      linkList.insertAdjacentHTML('beforeend', `
      <li>
         <button type="button">${i}</button>
      </li>`)
   }

   //assigning active class to first button
   document.querySelector('li button').className = "active";

   //listener for navigation buttons at bottom of page
   linkList.addEventListener('click', (e) => {
      const button = e.target;
      if (e.target.tagName === "BUTTON") {
         document.querySelector('.active').className = '';
         e.target.className = "active";
         showPage(list, e.target.textContent)
      }
   });
}

// Call functions
showPage(data, 1);
addPagination(data);