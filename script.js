window.onload = () => {
    const articles = document.querySelectorAll('.article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = '1';
            article.classList.add('active');
        }, index * 1000);
    });
};
