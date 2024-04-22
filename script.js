let  appId = '46baba18ad5f794842530d018f36eeef';
let units = 'imperial';
let searchMethod = 'zip';
function searchWeather(searchTerm)
{
    fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${searchTerm}&APPID=${appId}&units=${units}`).then(result =>{
        return result.json();
}).then(result => {
    IntersectionObserver();
})
}
function init(resultFromServer){
    console.log(resultFromServer);

}
document.getElementById('searchBtn').addEventListener('click',() => {
    let searchTerm = document.getElementById('searchInput').ariaValueMax;
    if(searchTerm)
    searchWeather(searchTerm);
})