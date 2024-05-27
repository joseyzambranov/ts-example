type Genre = 'rock' | 'pop' | 'electronic' | 'rap'

class Vinyl {
  public title: string;
  public artist: string;
  public genres: Genre[];

  constructor (title: string, artist: string, genres: Genre[]) {
    this.title = title;
    this.artist = artist;
    this.genres = genres;
  } 

  public printSummary (): void {
    console.log(`Hello , ${this.title} is an album by ${this.artist}`);
  }
}

const vinyl = new Vinyl('Goo', 'Sonic Youth', ['rock']);
console.log(vinyl.title)    // 'Goo'
console.log(vinyl.artist)   // 'Sonic Youth'
console.log(vinyl.genres)   // ['rock']
vinyl.printSummary();	      // 'Goo is an album by Sonic Youth'