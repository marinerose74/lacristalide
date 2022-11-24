const ratio = 0.1
const options_2 = {
    root: null,
    rootMargin: '0px',
    threshold: ratio
}

const handleIntersect = function (entries, observer) {
    entries.forEach(function(entry) {
    if (entry.IntersectionRatio > ratio) {
        console.log('visible')
    } else {
        console.log('invisble')
    }  
})
} 
        
const observer = new IntersectionObserver(handleIntersect, options_2)
observer.observe(document.querySelector('.footer'))