const requester = require('./requester');

class Track{
    constructor( name, duration, genres ){
        this.name = name;
        this.duration = duration;
        this.genres = genres;
        this.lyrics = null;
    }

    includesGenres( genres ){
        return this.genres.some( genre => genres.includes(genre) )
    }

    getLyrics(){
        let req = new requester.Requester();
        //si tiene
        if ( !this.lyrics ) {
            req.requestLyricsByTrackName( this );
        }
        return this.lyrics
    }
}

module.exports = {
    Track,
  };
