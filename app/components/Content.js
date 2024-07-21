const Content = ({cardName,heading}) => {
    return (
        <>
            <h1 className="textcenter">{heading}</h1>

            <section class="top-news">
                <div class="news-card">
                    <img src="images/content_image.jpg" alt="News 1"></img>
                    <h3>{cardName} title</h3>
                    <p>{cardName} description.</p>
                </div>
                <div class="news-card">
                    <img src="images/content_image.jpg" alt="News 1"></img>
                    <h3>{cardName} title</h3>
                    <p>{cardName} description.</p>
                </div>                <div class="news-card">
                    <img src="images/content_image.jpg" alt="News 1"></img>
                    <h3>{cardName} title</h3>
                    <p>{cardName} description.</p>
                </div>
            </section>
        </>
    )
}

export default Content