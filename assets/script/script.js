const nav = document.getElementById("header")
const tag = document.getElementById("tagline")

window.onscroll = function() {
	scrollPos = window.pageYOffset
	tag.style.content = scrollPos
	if (scrollPos != 0) {
		nav.style.backgroundColor = "dark1"
	} else {
		nav.style.backgroundColor = ""
	}
}