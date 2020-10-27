function handleGetData(event){
    event.preventDefault();
    // Load in the value of the search textbox:
    const searchText = $("#search").val()
    $.ajax({url:`http://api.openweathermap.org/data/2.5/weather?q=${searchText}&units=imperial&APPID=beb365ff76ed8b50dd570a7cef7bb822` })

  $('form').on("submit", handleGetData)

        .then(
        (data) => {
          console.log(data);
          
          let $blank = $("#song");
          $blank.text("Song is " + data.name);
          
          let $artist = $("#artist");
          $artist.text("Artist Name is" + data.main.artist);
         
          let $title =$("#title");
          $title.text("The title of the song is "  + data.main.title);
  
          let $album =$("#album");
          $album.text("The album title is "  + data.main.album);
        },
        (error) => {
          console.log("bad request: ", error)
        }
      )
  }
  