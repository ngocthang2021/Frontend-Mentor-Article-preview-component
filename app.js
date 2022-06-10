const shareBtn = document.querySelector('.share');
const shareLinks = document.querySelector('.share-links');

shareBtn.addEventListener('click', () => {
    shareLinks.classList.toggle('active');   
});