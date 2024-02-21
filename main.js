const API_KEY=`dd80fe8681ae4aa49d81b93b700e1d06`
let newsList = []
const getLatestNews = async ()=>{
    const url = new URL (
        `https://shimmering-buttercream-e6a4db.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
        ); 
    const response = await fetch(url);
    const data = await response.json();
    newsList = data.articles;
    render();
    console.log("dddd",newsList);
};
    const openNav = () => {
    document.getElementById("mySidenav").style.width = "250px";
    };
  
    const closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
    };

    const openSearchBox = () => {
        let inputArea = document.getElementById("input-area");
        if (inputArea.style.display === "inline") {
          inputArea.style.display = "none";
        } else {
          inputArea.style.display = "inline";
        }
      };

const render=()=>{
    const newsHTML = newsList.map
    (news => ` <div class="row news">
    <div class="col-lg-4">
        <img class="news-img-size"
            src=${news.urlToImage} />
        <img class="news-img"
        src="${
        news.media ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqEWgS0uxxEYJ0PsOb2OgwyWvC0Gjp8NUdPw&usqp=CAU"
        }" />
    </div>
    <div class="col-lg-8">
        <h2>
        ${news.title}
        </h2>
        <p>
        ${news.description}
        ${
            news.summary == null || news.summary == ""
              ? "..."
              : news.summary.length > 200
              ? news.summary.substring(0, 200) + "내용없음"
              : news.summary
        }
        </p>
        <div>
            ${news.source.name} * ${news.publishedAT}
        </div>

        <div>${news.rights || "no source"}  ${moment(
            news.published_date
         ).fromNow()}</div>

    </div>`
    )
    .join('');
    console.log("html", newsHTML);

    document.getElementById("news-board").innerHTML = newsHTML
}
getLatestNews();