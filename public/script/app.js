console.log("hello")

var buttonElement = document.querySelector(".submit-button")
var textareaElement = document.querySelector(".user-input")
var postsElement = document.querySelector(".posts")

buttonElement.addEventListener("click", function(){
	fetch("/post", {
		method: "post", 
		body: textareaElement.value
	}).then(function(){
		var a = createPostElement(textareaElement.value)
		postsElement.insertBefore(a, postsElement.firstChild)
		textareaElement.value = ""
	})
})



// createPostElement takes in a string and returns back a p tag with the content
function createPostElement(content){
	var newPost = document.createElement("p")
	var textElement = document.createTextNode(content)
	newPost.appendChild(textElement)
	return newPost
}

fetch("/posts").then(function(response){
	return response.json()
}).then(function(posts){
	posts.forEach(function(post){
		var postText = createPostElement(post)
		postsElement.appendChild(postText)
	})

})