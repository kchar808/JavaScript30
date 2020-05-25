![Javascript30](https://javascript30.com/images/JS3-social-share.png)

# JavaScript30

This repo is created to help keep track of my progress throughout the Javascript 30 Day Challenge by Wes Bos.

---

### Day 1: May 16, 2020
**Javascript Drum Kit**<br>
*Learned about* -
Key events, playing audio, and listening for the transitionend event.
keycode.info is a website that tells you what key code belongs to each key you hit.
If you call .play on an audio element that is already playing, it won't play it again. So you must rewind it to the start of the element (setting currentTime = 0).
Adding and removing classes to an element through classList.add and classList.remove.

### Day 2: May 17, 2020
**CSS + JS Clock**<br>
*Learned about* -
By default transform on an element will rotate the element from 50% (the middle). You can change the transform-origin in CSS. setInterval can be use when you want to run something every so often. The transition property allow elements to change values over a specified duration. You can transition all or transition a specific property/properties. https://css-tricks.com/almanac/properties/t/transition/

### Day 3: May 18, 2020
**Playing with CSS variables and JS**<br>
*Learned about* -
Creating variables in CSS and updating them using JS. Difference between a nodeList and an array. Datasets - A dataset is an object that contains all the data- attributes from that specfic element, you don't have to use attribute selectors, it will just return an object of those data- attributes.

### Day 4: May 19, 2020
**Array Cardio Day 1**<br>
*Learned about* -
Similar to console.log you can do console.table and that'll show a table of your elements in the console. Array methods. *Filter:* pass it a function and it'll loop over every single item in the array. *Map:* Takes in an array and returns a new array of the same length. *Sort:* Comparing two elements at a time. You can order them by returning 1 or -1, that will bubble the items up and down. A ternary operator is a short-hand if statement. *Reduce:* executes a reducer function on each element of the array, resulting in a single value. You can call querySelector on any existing DOM element, not just document.

### Day 5: May 21, 2020
**Flex Panels Image Gallery**<br>
*Learned about* -
Refreshed Flexbox concepts and learned new tips using CSS first-child and last-child. Will checkout flexbox.io.


### Day 6: May 22, 2020
**Ajax Type Ahead**<br>
*Learned about* -
Fetch API, fetch returns a promise. ES6 spread "spreads" an array into separate arguments. Regex (regular expressions).

### Day 7: May 23, 2020
**Array Cardio Day 2**<br>
*Learned about* -
.some() checks if at least one element in your array meets what you're looking for. If you use curly braces in console.log, it'll show you the name of the variable as well as the value ex. `console.log({isAdult});` .every() checks if every element in the array meets what you're looking for. findIndex() find the index of the element you're looking for.

### Day 8: May 23, 2020
**Fun with HTML5 Canvas**<br>
*Learned about* -
Array destructuring using ES6. How lineJoin and lineCap works on the canvas. Hsl stands for hue, saturation and lightness. Using globalCompositeOperation with multiply, hard-light, luminosity etc. https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

### Day 9: May 24, 2020
**14 Must Know Dev Tools Tricks**<br>
*Learned about* -
Learned some cool Dev Tools tricks. How to find where exactly the Javascript on your page is running. I found styling, grouping (using console.group and console.groupEnd console.groupCollapsed will collapse each group to make the console look cleaner (Super cool!)), and timing (can be used to time how long something takes to happen.. like fetching an API) particularly interesting.

### Day 10: May 25, 2020
**Hold Shift to Check Multiple Checkboxes**<br>
*Learned about* -
How the shift to check all feature in emails work with Javascript.
