import { useEffect } from 'react'

function ImgList({ listImg, loadCount }) {

    useEffect(() => {
        const lazyload = () => {
            const lazyloadImages = document.querySelectorAll("img.lazy");
            let lazyloadThrottleTimeout;

            lazyloadThrottleTimeout = setTimeout( () => {
                let scrollTop = window.pageYOffset;
                lazyloadImages.forEach(img => {
                    if (img.offsetTop < (window.innerHeight + scrollTop)) {
                        console.log(img.offsetTop);
                        console.log(window.innerHeight + scrollTop);
                        console.log('img', img.naturalHeigh);
                        img.src = img.dataset.src;
                        img.classList.remove('lazy');
                    }
                });
                if (lazyloadImages.length === 0) {
                    clearTimeout(lazyloadThrottleTimeout)
                }
            }, 20);
        }

        document.addEventListener("scroll", lazyload);

        return () => document.removeEventListener("scroll", lazyload);
    });

    return (
        <div className="conteiner">
            {loadCount && listImg.map((sorce, key) => {
                if (key < loadCount) {
                    return <img key={key} src={sorce} alt={sorce} />
                }
                return <img key={key} data-src={sorce} className="lazy" alt={sorce} />
            })}
        </div>
    )
}

export default ImgList;