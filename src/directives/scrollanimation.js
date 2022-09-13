const animatedScrollObserver = new IntersectionObserver((entries, animatedScrollObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-enter');
            animatedScrollObserver.unobserve(entry.target);
        }
    });
}, {rootMargin: '0px 0px -10% 0px'} );

export default {
    mounted(el) {
        el.classList.add('scroll-before-enter');
        animatedScrollObserver.observe(el);
    }
}