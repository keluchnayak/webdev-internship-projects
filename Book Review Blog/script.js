// Simple comment functionality for review pages
function addComment() {
    const commentSection = document.getElementById("commentSection");
    const commentInput = document.getElementById("commentInput");
    
    if (commentInput.value) {
      const newComment = document.createElement("p");
      newComment.textContent = commentInput.value;
      commentSection.appendChild(newComment);
      commentInput.value = ""; // Clear input
    }
  }
  