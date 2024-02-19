const API_KEY=`dd80fe8681ae4aa49d81b93b700e1d06`
let news = []
const getLatestNews = async ()=>{
    const url = new URL (
        `https://shimmering-buttercream-e6a4db.netlify.app/top-headlines?country=us&apiKey=${API_KEY}`
        ); 
    const response = await fetch(url);
    const data = await response.json();
    news = data.articles;
    console.log("dddd",news);
};
getLatestNews();