window.onload = () => {
    const articles = document.querySelectorAll('.article');
    articles.forEach((article, index) => {
        setTimeout(() => {
            article.style.opacity = '1';
        }, index * 1000);
    });
};
