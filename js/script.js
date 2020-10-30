$('body').addClass('text-center');

function handleGetData(event) {
  event.preventDefault();
  // Load in the value of the search textbox:
  const searchText = $("#search").val()
  console.log(searchText);
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://shazam.p.rapidapi.com/search?locale=en-US&offset=0&limit=5&term=" + searchText,
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": "e07f31d146mshdc69100a3e58e76p17b405jsn6d637c545128"
    }
  }
  $.ajax(settings).done(function (response) {
    let $blank = $("#artist"); $blank.text("Artist is: " + response.tracks.hits[0].track.subtitle);
  });
$.ajax(settings).done(function (response) {
  console.log(response.tracks[0]);
  let $blank = $("#song");
  $blank.text("Song is: " + response.tracks.hits[0].track.title);
});

$.ajax(settings).done(function (response) {
  console.log(response.tracks[0]);
  let $blank = $("#album");
  $blank.attr("href", response.tracks.hits[0]
    .track.url);
  $blank.text(response.tracks.hits[0].track.url)
});
}
$('form').on("submit", handleGetData)