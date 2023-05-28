let container = document.querySelector(".container")
let success = document.querySelector(".success")
let inputEmail = document.querySelector(".email__input")
let inputSubmit = document.querySelector(".submit__input")
let errorMsg = document.querySelector(".cta__form__error")

let userEmail = document.querySelector(".success__email")
let dismissMsg = document.querySelector(".success__button")

const tomato = getComputedStyle(document.body).getPropertyValue(
	"--color-tomato"
)

const validate = () => {
	if (
		inputEmail.value.length == 0 ||
		!inputEmail.value.includes("@") ||
		!inputEmail.value.includes(".com")
	) {
		inputEmail.style.border = `2px solid  ${tomato}`
		inputEmail.placeholder = ""
		errorMsg.style.display = "block"
		errorMsg.style.animation = "showError .5s"
		return
	}

	container.style.display = "none"
	userEmail.textContent = inputEmail.value
	success.style.display = "flex"
}

inputSubmit.addEventListener("click", (e) => {
	e.preventDefault()
	validate()
})

dismissMsg.addEventListener("click", () => {
	location.reload()
})

container.style.display = "none"
success.style.display = "flex"
