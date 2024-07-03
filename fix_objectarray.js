///TODO: Fix Function Below
let musicQueue = {
    songs: ["Party Rock Anthem", "I Gotta Feeling", "Macarena"],
    get nextSong() {
        for (i = 0; i < songs.length; i++) {
        if (nextSong < songs.length) {
            this.nextSong = nextSong++;
            console.log(i + " - " + songs[nextSong]);
            return nextSong;
        } 
        else nextSong = 0;
        }
        },
    set nextSong(value) {
        this.nextSong = value;
    },
}
// Run through the queue three times
for (let c = 0; c < musicQueue.songs.length * 3; c++) {
    console.log("Now playing: " + musicQueue.next);
 }
 
 // Test the next setter
 musicQueue.next = 2;
 console.log(musicQueue.next);   // Macarena
 musicQueue.next = 3;
 console.log(musicQueue.next);   // Party Rock Anthem
 musicQueue.next = -1;
 console.log(musicQueue.next);   // Party Rock Anthem
 