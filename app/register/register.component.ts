import { Component, OnInit } from '@angular/core';
import { ListPicker } from "ui/list-picker";
import { Router } from "@angular/router"

let MusicGenresList = [
    "Blues",
    "Classic Rock",
    "Country",
    "Dance",
    "Disco",
    "Funk",
    "Grunge",
    "Hip-Hop",
    "Jazz",
    "Metal",
    "New Age",
    "Oldies",
    "Other",
    "Pop",
    "R&B",
    "Rap",
    "Reggae",
    "Rock",
    "Techno",
    "Industrial",
    "Alternative",
    "Ska",
    "Death Metal",
    "Pranks",
    "Soundtrack",
    "Euro-Techno",
    "Ambient",
    "Trip-Hop",
    "Vocal",
    "Jazz+Funk",
    "Fusion",
    "Trance",
    "Classical",
    "Instrumental",
    "Acid",
    "House",
    "Game",
    "Sound Clip",
    "Gospel",
    "Noise",
    "Alternative Rock",
    "Bass",
    "Soul",
    "Punk",
    "Space",
    "Meditative",
    "Instrumental Pop",
    "Instrumental Rock",
    "Ethnic",
    "Gothic",
    "Darkwave",
    "Techno-Industrial",
    "Electronic",
    "Pop-Folk",
    "Eurodance",
    "Dream",
    "Southern Rock",
    "Comedy",
    "Cult",
    "Gangsta",
    "Top 40",
    "Christian Rap",
    "Pop/Funk",
    "Jungle",
    "Native US",
    "Cabaret",
    "New Wave",
    "Psychadelic",
    "Rave",
    "Showtunes",
    "Trailer",
    "Lo-Fi",
    "Tribal",
    "Acid Punk",
    "Acid Jazz",
    "Polka",
    "Retro",
    "Musical",
    "Rock & Roll",
    "Hard Rock",
    "Folk",
    "Folk-Rock",
    "National Folk",
    "Swing",
    "Fast Fusion",
    "Bebob",
    "Latin",
    "Revival",
    "Celtic",
    "Bluegrass",
    "Avantgarde",
    "Gothic Rock",
    "Progressive Rock",
    "Psychedelic Rock",
    "Symphonic Rock",
    "Slow Rock",
    "Big Band",
    "Chorus",
    "Easy Listening",
    "Acoustic",
    "Humour",
    "Speech",
    "Chanson",
    "Opera",
    "Chamber Music",
    "Sonata",
    "Symphony",
    "Booty Bass",
    "Primus",
    "Porn Groove",
    "Satire",
    "Slow Jam",
    "Club",
    "Tango",
    "Samba",
    "Folklore",
    "Ballad",
    "Power Ballad",
    "Rhythmic Soul",
    "Freestyle",
    "Duet",
    "Punk Rock",
    "Drum Solo",
    "Acapella",
    "Euro-House",
    "Dance Hall",
    "Goa",
    "Drum & Bass",
    "Club - House",
    "Hardcore",
    "Terror",
    "Indie",
    "BritPop",
    "Negerpunk",
    "Polsk Punk",
    "Beat",
    "Christian Gangsta Rap",
    "Heavy Metal",
    "Black Metal",
    "Crossover",
    "Contemporary Christian",
    "Christian Rock",
    "Merengue",
    "Salsa",
    "Thrash Metal",
    "Anime",
    "JPop",
    "Synthpop"
];

@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    public genres: Array<string>;
    public index: number;

    constructor(private router: Router) {
        this.genres = [];

        for (let i = 0; i < MusicGenresList.length; i++) {
            this.genres.push(MusicGenresList[i]);
        }
    }

    private onButtonTap(){

        this.router.navigateByUrl("/lieu")

    }


    public selectedIndexChanged(args) {
        let picker = <ListPicker>args.object;
        console.log("picker selection: " + picker.selectedIndex);
    }
    data = [];


    ngOnInit(): void {
        this.data.push({ text: "Bulbasaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" });
        this.data.push({ text: "Ivysaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" });
        this.data.push({ text: "Venusaur", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png" });
        this.data.push({ text: "Charmander", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png" });
        this.data.push({ text: "Charmeleon", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png" });
        this.data.push({ text: "Charizard", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" });
        this.data.push({ text: "Squirtle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" });
        this.data.push({ text: "Wartortle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png" });
        this.data.push({ text: "Blastoise", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png" });
        this.data.push({ text: "Caterpie", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png" });
        this.data.push({ text: "Metapod", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png" });
        this.data.push({ text: "Butterfree", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png" });
        this.data.push({ text: "Weedle", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png" });
        this.data.push({ text: "Kakuna", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png" });
        this.data.push({ text: "Beedrill", src: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png" });
    }

    onItemTap(args) {
        console.log("You tapped: " + this.data[args.index].text);
    }
}
