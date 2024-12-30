function downloadCVAndScroll() {
    const link = document.createElement('a');
    link.href = "";
    link.download = 'Archie_Forde_CV.pdf'; 
    link.click();

    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}

function scrollToContact() {
    document.querySelector('#contact').scrollIntoView({
        behavior: 'smooth'
    });
}


document.getElementById('toggle-about').addEventListener('click', function() {
    var content = document.getElementById('about-content');
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        this.textContent = 'Read Less';
    } else {
        content.classList.add('hidden');
        this.textContent = 'Read More';
    }
});
