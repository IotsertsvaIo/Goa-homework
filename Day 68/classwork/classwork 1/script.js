// Bubbling - მოვლენა იწყება შიდა ელემენტიდან და ვრცელდება გარე ელემენტებზე
document.getElementById('div1').onclick = () => alert('div1 დაკლიკდა! (Bubbling)');
document.getElementById('div2').onclick = () => alert('div2 დაკლიკდა! (Bubbling)');
document.getElementById('div3').onclick = () => alert('div3 დაკლიკდა! (Bubbling)');

// Capturing - მოვლენა იწყება გარე ელემენტიდან და შიგნით გადადის
document.getElementById('div1').addEventListener('click', () => alert('div1 დაკლიკდა! (Capturing)'), true);
document.getElementById('div2').addEventListener('click', () => alert('div2 დაკლიკდა! (Capturing)'), true);
document.getElementById('div3').addEventListener('click', () => alert('div3 დაკლიკდა! (Capturing)'), true);
