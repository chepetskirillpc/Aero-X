const btn_fleet = document.querySelector("#explore-fleet");

btn_fleet.addEventListener("click", () => {
    gtag('event', 'clicks_on_explore_fleet');
    console.log("Explore Fleet button clicked");
});