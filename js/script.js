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
      "x-rapidapi-key": "f4d2747f12msh60e62a78f607b93p1cd5cajsnd8d8505fa600"
    }
  }
  $.ajax(settings).done(function (response) {
    console.log(response.tracks[0]);
    let $blank = $("#artist");
    $blank.text("Artist is: " + response.tracks.hits[0].track.subtitle);
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