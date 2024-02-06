
function toggleLike(postId) {
    const likeButton = document.getElementById(`likeButton${postId}`);
    const likeCount = document.getElementById(`likeCount${postId}`);
    // Check if the like button is active
    const isLiked = likeButton.classList.contains('active');

    if (isLiked) {
        // Unlike the post
        likeButton.classList.remove('active');
        decrementLikeCount(postId);
    } else {
        // Like the post
        likeButton.classList.add('active');
        incrementLikeCount(postId);
    }
}
function myFunction(x) {
    // x.classList.toggle("fa-thumbs-up");
    x.classList.toggle("fa-thumbs-down"); // Toggle the class to change the icon
    x.classList.toggle("fa-thumbs-up"); 
  }
// Function to increment the like count
function incrementLikeCount(postId) {
    let count = parseInt(localStorage.getItem(`likeCount${postId}`)) || 0;
    count++;
    // if (count>20) {
    //     localStorage.clear();
    //     initialLikeCount();
    // }
    // Update the UI and store the updated count in local storage
    updateLikeCount(postId, count);
}
// Function to decrement the like count
function decrementLikeCount(postId) {
    let count = parseInt(localStorage.getItem(`likeCount${postId}`)) || 0;
    
    // Ensure the count doesn't go below zero
    count = Math.max(0, count - 1);

    // Update the UI and store the updated count in local storage
    updateLikeCount(postId, count);
}
// Function to update the UI and store the like count in local storage
function updateLikeCount(postId, count) {
    const likeCount = document.getElementById(`likeCount${postId}`);
    likeCount.innerText = `${count} Likes`;

    // Store the updated count in local storage
    localStorage.setItem(`likeCount${postId}`, count);
}
// Initialize the like count when the page loads
document.addEventListener('DOMContentLoaded', function() {
    for (let i = 1; i <= 2; i++) {
        const initialLikeCount = parseInt(localStorage.getItem(`likeCount${i}`)) || 0;
        updateLikeCount(i, initialLikeCount);
    }
});