![Javascript30](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

This repo is created to help keep track of my progress throughout the Javascript 30 Day Challenge by Wes Bos.

---

### Day 1: May 16, 2020
**Javascript Drum Kit**<br>
*Learned* -
Key events, playing audio, and listening for the transitionend event.
keycode.info is a website that tells you what key code belongs to each key you hit.
If you call .play on an audio element that is already playing, it won't play it again. So you must rewind it to the start of the element (setting currentTime = 0).
Adding and removing classes to an element through classList.add and classList.remove.

### Day 2: May 17, 2020
**CSS + JS Clock**<br>
*Learned* -
By default transform on an element will rotate the element from 50% (the middle). You can change the transform-origin in CSS. setInterval can be use when you want to run something every so often. The transition property allow elements to change values over a specified duration. You can transition all or transition a specific property/properties. https://css-tricks.com/almanac/properties/t/transition/

### Day 3: May 18, 2020
**Playing with CSS variables and JS**<br>
*Learned* -
Creating variables in CSS and updating them using JS. Difference between a nodeList and an array. Datasets - A dataset is an object that contains all the data- attributes from that specfic element, you don't have to use attribute selectors, it will just return an object of those data- attributes.

### Day 4: May 19, 2020
**Array Cardio Day 1**<br>
*Learned* -
Similar to console.log you can do console.table and that'll show a table of your elements in the console. Array methods. *Filter:* pass it a function and it'll loop over every single item in the array. *Map:* Takes in an array and returns a new array of the same length. *Sort:* Comparing two elements at a time. You can order them by returning 1 or -1, that will bubble the items up and down. A ternary operator is a short-hand if statement. *Reduce:* executes a reducer function on each element of the array, resulting in a single value. You can call querySelector on any existing DOM element, not just document.

### Day 5: May 21, 2020
**Flex Panels Image Gallery**<br>
*Learned* -
Refreshed Flexbox concepts and learned new tips using CSS first-child and last-child. Will checkout flexbox.io.


### Day 6: May 22, 2020
**Ajax Type Ahead**<br>
*Learned* -
Fetch API, fetch returns a promise. ES6 spread "spreads" an array into separate arguments. Regex (regular expressions).

### Day 7: May 23, 2020
**Array Cardio Day 2**<br>
*Learned* -
.some() checks if at least one element in your array meets what you're looking for. If you use curly braces in console.log, it'll show you the name of the variable as well as the value ex. `console.log({isAdult});` .every() checks if every element in the array meets what you're looking for. findIndex() find the index of the element you're looking for.

### Day 8: May 23, 2020
**Fun with HTML5 Canvas**<br>
*Learned* -
Array destructuring using ES6. How lineJoin and lineCap works on the canvas. Hsl stands for hue, saturation and lightness. Using globalCompositeOperation with multiply, hard-light, luminosity etc. https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

### Day 9: May 24, 2020
**14 Must Know Dev Tools Tricks**<br>
*Learned* -
Learned some cool Dev Tools tricks. How to find where exactly the Javascript on your page is running. I found styling, grouping (using console.group and console.groupEnd console.groupCollapsed will collapse each group to make the console look cleaner (Super cool!)), and timing (can be used to time how long something takes to happen.. like fetching an API) particularly interesting.

### Day 10: May 25, 2020
**Hold Shift to Check Multiple Checkboxes**<br>
*Learned* -
How the shift to check all feature in emails work with Javascript.

### Day 11: May 25, 2020
**Custom HTML5 Video Player**<br>
*Learned* -
How to create custom video interfaces. Pretty neat to learn how things run "under the hood".

### Day 12: May 26, 2020
**Key Sequence Detection (KONAMI CODE)**<br>
*Learned* -
Konami Code is a cheat code that appears in many Konami games and some non-Konami games. The cheat code is usually used by pressing buttons in a certain sequence. If you type '⬆️ ⬆️ ⬇️ ⬇️ ⬅️ ➡️ ⬅️ ➡️ B A'. on some sites you may find a surprise. Learned how key sequencing is checked using JS, by storing it in an array, joining it and then checking (from end to beginning) if the join array contains the secretCode. 

### Day 13: May 27, 2020
**Slide in on Scroll**<br>
*Learned* -
Using scrollY lets you know how far you've scrolled up or down on the page. innerHeight gives a value of the viewports height in pixels. Learned about the debounce function. A debounce function limits the rate at which a function can fire.

### Day 14: May 28, 2020
**Objects and Arrays - Reference VS Copy**<br>
*Learned* -
Array & object reference vs an actual copy. When updating an array, its always going to reference back. You can use slice to make a copy of an array. Spread will take every item out of your iterable and put it into the containing array (or object!). You can make a copy of an object using Oject.assign. Object.assign only goes 1 level deep. If you need a clone, you have to use the clone deep function. Found this article on deep cloning interesting https://medium.com/javascript-in-plain-english/how-to-deep-copy-objects-and-arrays-in-javascript-7c911359b089

### Day 15: May 29, 2020
**LocalStorage and Event Delegation**<br>
*Learned* -
Unless explicitly handled, by default an Event will reload or send data to an external source, to stop it you can use preventDefault method. localStorage only accepts strings. JSON.stringify will turn your objects and arrays to a json string. JSON.parse does the opposite, it converts the json string back to what it orginally was (array, object). Event Delegation concept - instead of listening for a change on inputs directly, we will look for a HTML element that is going to be on the page when the page first loads (responsible parents and negligent children). Found this video very informative https://www.youtube.com/watch?v=pKzf80F3O0U

### Day 16: May 30, 2020
**CSS Text Shadow Mouse Move Effect**<br>
*Learned* -
You can use offsetX and offsetY to get the position of your cursor but if you have nested elements inside of that thing, you need to do some math to deal with it. This was pretty fun to create. The contentEditable property sets or returns whether the content of an element is editable or not.

### Day 17: May 31, 2020
**Sorting Band Names without articles**<br>
*Learned* -
Learned how to use regex to replace certain letters/words and how to make it insensitive.

### Day 18: June 1, 2020
**Tally String Times with Reduce**<br>
*Learned* -
Learned more about using reduce() method. reduce can be used as a simpler/cleaner way of using the forEach() method.

### Day 19: June 2, 2020
**Unreal Webcam Fun**<br>
*Learned* -
There's a npm dependency called browser-sync that allows you to open up your website and start a server. Use navigator.mediaDevices.getUserMedia to get users video. Learned how to take a snapshot from the camera and paint it on to a canvas. It's cool to see how screenshots kind of work behind the scenes, also how to add a download link for the image. Learned how to make my own filters for photos.. I plan on messing around with the colors and globalAlpha a bit. 👻
