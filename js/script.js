const _searchTerms = ["Brown eggs", "Sweet fresh stawberry", "Asparagus", "Green smoothie", "Raw legums", "Baking cake", "Pesto with basil", "Hazelnut in black ceramic bowl", "Fresh stawberry", "Lemon and salt", "Homemade bread", "Legums", "Fresh tomato", "Healthy breakfast", "Green beans", "Baked stuffed portabello mushrooms", "Strawberry jelly", "Pears juice", "Fresh pears", "Caprese salad", "Oranges", "Vegan food", "Breakfast with muesli", "Honey", "Breakfast with cottage", "Strawberry smoothie", "Strawberry and mint", "Ricotta", "Cuban sandwiche", "Granola", "Smoothie with chia seeds", "Yogurt", "Sandwich with salad", "Cherry", "Raw asparagus", "Corn", "Vegan", "Fresh blueberries", "Smashed avocado", "Italian ciabatta", "Rustic breakfast", "Sliced lemons", "Plums", "French fries", "Strawberries", "Ground beef meat burger", "Tomatoes", "Basil", "Fruits bouquet", "Peaches on branch"], _bingURL = "https://www.bing.com/search?q=", b_searchbox = document.getElementById("b_searchbox"), b_searchbutton = document.getElementById("b_searchbutton"), b_searchlabel = document.getElementById("b_searchlabel"), b_searchlinks = document.getElementById("b_searchlinks"), b_searchmessage = document.getElementById("b_searchmessage"), b_searchiframes = document.getElementById("b_searchiframes"), windowHandler = a => { try { let b = window.open(a); b && setTimeout(() => { b.close() }, 5e3) } catch (c) { } }, searchHandler = b => { for (let a = 1; a <= b; a++) { let c = `${_searchTerms[Math.floor(Math.random() * _searchTerms.length)].toLowerCase()} (${a})`, d = "https://www.bing.com/search?q=" + encodeURI(c); setTimeout(() => { b_searchlabel.innerText = `Search "${c}" in progress, please wait...`, b_searchlinks.innerHTML += `<li><a href='${d}' target='_blank'>${d}</a></li>`, b_searchiframes.innerHTML = `<iframe src="${d}" title="${c}"></iframe>`, "" !== b_searchlinks.innerHTML && (b_searchmessage.innerText = ""), a == b && (b_searchbutton.disabled = b_searchbox.disabled = !1, b_searchlabel.innerText = "", b_searchbox.value = "") }, (a - 1) * 5e3) } }, search = () => { let a = parseInt(b_searchbox.value.match(/\d+/g)); a > 0 ? (a > 50 && (b_searchbox.value = a = 50), b_searchbutton.disabled = b_searchbox.disabled = !0, b_searchlabel.style.display = "inline-block", searchHandler(a)) : b_searchlabel.innerText = "Please enter a valid number of searches." }; window.onload = () => { function a() { dataLayer.push(arguments) } b_searchbutton.addEventListener("click", () => { search() }), b_searchbox.addEventListener("keyup", a => { ("Enter" === a.key || 13 === a.keyCode) && search() }), window.dataLayer = window.dataLayer || [], a("js", new Date), a("config", "G-YXNCPPFVCW") }