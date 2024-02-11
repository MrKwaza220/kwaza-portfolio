// import React from "react";

// function Skillspage(){
    
// const my_skills = document.querySelector(".my_skills");
// const myskills_list = document.querySelector(".myskills_list");
// const firstblock_skillWidth = myskills_list.querySelector(".block_skill").offsetWidth;
// const arrowBtns = document.querySelectorAll(".my_skills i");
// const myskills_listChildrens = [...myskills_list.children];

// let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// // Get the number of block_skills that can fit in the myskills_list at once
// let block_skillPerView = Math.round(myskills_list.offsetWidth / firstblock_skillWidth);

// // Insert copies of the last few block_skills to beginning of myskills_list for infinite scrolling
// myskills_listChildrens.slice(-block_skillPerView).reverse().forEach(block_skill => {
//     myskills_list.insertAdjacentHTML("afterbegin", block_skill.outerHTML);
// });

// // Insert copies of the first few block_skills to end of myskills_list for infinite scrolling
// myskills_listChildrens.slice(0, block_skillPerView).forEach(block_skill => {
//     myskills_list.insertAdjacentHTML("beforeend", block_skill.outerHTML);
// });

// // Scroll the myskills_list at appropriate postition to hide first few duplicate block_skills on Firefox
// myskills_list.classList.add("no-transition");
// myskills_list.scrollLeft = myskills_list.offsetWidth;
// myskills_list.classList.remove("no-transition");

// // Add event listeners for the arrow buttons to scroll the myskills_list left and right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click", () => {
//         myskills_list.scrollLeft += btn.id == "left" ? -firstblock_skillWidth : firstblock_skillWidth;
//     });
// });

// const dragStart = (e) => {
//     isDragging = true;
//     myskills_list.classList.add("dragging");
//     // Records the initial cursor and scroll position of the myskills_list
//     startX = e.pageX;
//     startScrollLeft = myskills_list.scrollLeft;
// }

// const dragging = (e) => {
//     if(!isDragging) return; // if isDragging is false return from here
//     // Updates the scroll position of the myskills_list based on the cursor movement
//     myskills_list.scrollLeft = startScrollLeft - (e.pageX - startX);
// }

// const dragStop = () => {
//     isDragging = false;
//     myskills_list.classList.remove("dragging");
// }

// const infiniteScroll = () => {
//     // If the myskills_list is at the beginning, scroll to the end
//     if(myskills_list.scrollLeft === 0) {
//         myskills_list.classList.add("no-transition");
//         myskills_list.scrollLeft = myskills_list.scrollWidth - (2 * myskills_list.offsetWidth);
//         myskills_list.classList.remove("no-transition");
//     }
//     // If the myskills_list is at the end, scroll to the beginning
//     else if(Math.ceil(myskills_list.scrollLeft) === myskills_list.scrollWidth - myskills_list.offsetWidth) {
//         myskills_list.classList.add("no-transition");
//         myskills_list.scrollLeft = myskills_list.offsetWidth;
//         myskills_list.classList.remove("no-transition");
//     }

//     // Clear existing timeout & start autoplay if mouse is not hovering over myskills_list
//     clearTimeout(timeoutId);
//     if(!my_skills.matches(":hover")) autoPlay();
// }

// const autoPlay = () => {
//     if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
//     // Autoplay the myskills_list after every 2500 ms
//     timeoutId = setTimeout(() => myskills_list.scrollLeft += firstblock_skillWidth, 2500);
// }
// autoPlay();

// myskills_list.addEventListener("mousedown", dragStart);
// myskills_list.addEventListener("mousemove", dragging);
// document.addEventListener("mouseup", dragStop);
// myskills_list.addEventListener("scroll", infiniteScroll);
// my_skills.addEventListener("mouseenter", () => clearTimeout(timeoutId));
// my_skills.addEventListener("mouseleave", autoPlay);
// return(
        




//     );
// }
// export default Skillspage;