fetch('https://newsapi.org/v2/top-headlines?category=technology&apiKey=51d0259fbb0a42f7b89fc5721cd6730d')
.then (response => response.json())
.then (response => {
    news=response.articles
    displayNews()
})
.catch(error => console.error('Error', error));

function displayNews() {

    const container = document.getElementById('container')

    news.forEach (article => {
        const newsContainer = document.createElement('div')
        newsContainer.classList.add('news-container')

        const newsImage = document.createElement('img')
       // newsImage.src = 'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/09/apple-watch-10-vs-ultra-2.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1'
       newsImage.src = article.urlToImage

       const newsTitle = document.createElement('h1')
       newsTitle.innerText = article.title

       const newsDesc = document.createElement('p')
       newsDesc.innerText = article.description
        
       const newsAuthor = document.createElement('div')
       newsAuthor.innerText='Published By:' + article.author

       const newsDate = document.createElement('div')
       newsDate.innerText='Published At:' + article.publishedAt

       const readMoreLink = document.createElement('a')
       readMoreLink.href=article.url
       readMoreLink.target='_blank'
       readMoreLink.classList.add('read-more-link')
       readMoreLink.innerText='Read more'

       newsContainer.append(newsImage, newsTitle, newsDesc, newsAuthor, newsDate, readMoreLink)
       container.append(newsContainer)
    })
}
