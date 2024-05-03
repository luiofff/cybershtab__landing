document.querySelector('.calendar-cardBlock').addEventListener('click', function() {
    let menuBlock = this.querySelector('.calendar-card__MenuBlock');
    if (menuBlock.style.display === 'none') {
        menuBlock.style.display = 'grid';
    } else {
        menuBlock.style.display = 'none';
    }
});