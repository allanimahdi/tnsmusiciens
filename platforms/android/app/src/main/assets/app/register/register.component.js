"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var MusicGenresList = [
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
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
        this.data = [];
        this.genres = [];
        for (var i = 0; i < MusicGenresList.length; i++) {
            this.genres.push(MusicGenresList[i]);
        }
    }
    RegisterComponent.prototype.onButtonTap = function () {
        this.router.navigateByUrl("/lieu");
    };
    RegisterComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        console.log("picker selection: " + picker.selectedIndex);
    };
    RegisterComponent.prototype.ngOnInit = function () {
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
    };
    RegisterComponent.prototype.onItemTap = function (args) {
        console.log("You tapped: " + this.data[args.index].text);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELDBDQUF3QztBQUV4QyxJQUFJLGVBQWUsR0FBRztJQUNsQixPQUFPO0lBQ1AsY0FBYztJQUNkLFNBQVM7SUFDVCxPQUFPO0lBQ1AsT0FBTztJQUNQLE1BQU07SUFDTixRQUFRO0lBQ1IsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixPQUFPO0lBQ1AsS0FBSztJQUNMLEtBQUs7SUFDTCxLQUFLO0lBQ0wsUUFBUTtJQUNSLE1BQU07SUFDTixRQUFRO0lBQ1IsWUFBWTtJQUNaLGFBQWE7SUFDYixLQUFLO0lBQ0wsYUFBYTtJQUNiLFFBQVE7SUFDUixZQUFZO0lBQ1osYUFBYTtJQUNiLFNBQVM7SUFDVCxVQUFVO0lBQ1YsT0FBTztJQUNQLFdBQVc7SUFDWCxRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxjQUFjO0lBQ2QsTUFBTTtJQUNOLE9BQU87SUFDUCxNQUFNO0lBQ04sWUFBWTtJQUNaLFFBQVE7SUFDUixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixNQUFNO0lBQ04sTUFBTTtJQUNOLE9BQU87SUFDUCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFVBQVU7SUFDVixXQUFXO0lBQ1gsT0FBTztJQUNQLGVBQWU7SUFDZixRQUFRO0lBQ1IsTUFBTTtJQUNOLFNBQVM7SUFDVCxRQUFRO0lBQ1IsZUFBZTtJQUNmLFVBQVU7SUFDVixRQUFRO0lBQ1IsV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLE1BQU07SUFDTixXQUFXO0lBQ1gsU0FBUztJQUNULE9BQU87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QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsZ0ZBQWdGLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsZ0ZBQWdGLEVBQUUsQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsZ0ZBQWdGLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsZ0ZBQWdGLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsaUZBQWlGLEVBQUUsQ0FBQyxDQUFDO1FBQzdILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsaUZBQWlGLEVBQUUsQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsaUZBQWlGLEVBQUUsQ0FBQyxDQUFDO1FBQy9ILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsaUZBQWlGLEVBQUUsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsaUZBQWlGLEVBQUUsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsaUZBQWlGLEVBQUUsQ0FBQyxDQUFDO0lBQ2pJLENBQUM7SUFFRCxxQ0FBUyxHQUFULFVBQVUsSUFBSTtRQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdELENBQUM7SUE5Q1EsaUJBQWlCO1FBTjdCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGNBQWM7WUFDeEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQUs4QixlQUFNO09BSnpCLGlCQUFpQixDQStDN0I7SUFBRCx3QkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCJcblxubGV0IE11c2ljR2VucmVzTGlzdCA9IFtcbiAgICBcIkJsdWVzXCIsXG4gICAgXCJDbGFzc2ljIFJvY2tcIixcbiAgICBcIkNvdW50cnlcIixcbiAgICBcIkRhbmNlXCIsXG4gICAgXCJEaXNjb1wiLFxuICAgIFwiRnVua1wiLFxuICAgIFwiR3J1bmdlXCIsXG4gICAgXCJIaXAtSG9wXCIsXG4gICAgXCJKYXp6XCIsXG4gICAgXCJNZXRhbFwiLFxuICAgIFwiTmV3IEFnZVwiLFxuICAgIFwiT2xkaWVzXCIsXG4gICAgXCJPdGhlclwiLFxuICAgIFwiUG9wXCIsXG4gICAgXCJSJkJcIixcbiAgICBcIlJhcFwiLFxuICAgIFwiUmVnZ2FlXCIsXG4gICAgXCJSb2NrXCIsXG4gICAgXCJUZWNobm9cIixcbiAgICBcIkluZHVzdHJpYWxcIixcbiAgICBcIkFsdGVybmF0aXZlXCIsXG4gICAgXCJTa2FcIixcbiAgICBcIkRlYXRoIE1ldGFsXCIsXG4gICAgXCJQcmFua3NcIixcbiAgICBcIlNvdW5kdHJhY2tcIixcbiAgICBcIkV1cm8tVGVjaG5vXCIsXG4gICAgXCJBbWJpZW50XCIsXG4gICAgXCJUcmlwLUhvcFwiLFxuICAgIFwiVm9jYWxcIixcbiAgICBcIkphenorRnVua1wiLFxuICAgIFwiRnVzaW9uXCIsXG4gICAgXCJUcmFuY2VcIixcbiAgICBcIkNsYXNzaWNhbFwiLFxuICAgIFwiSW5zdHJ1bWVudGFsXCIsXG4gICAgXCJBY2lkXCIsXG4gICAgXCJIb3VzZVwiLFxuICAgIFwiR2FtZVwiLFxuICAgIFwiU291bmQgQ2xpcFwiLFxuICAgIFwiR29zcGVsXCIsXG4gICAgXCJOb2lzZVwiLFxuICAgIFwiQWx0ZXJuYXRpdmUgUm9ja1wiLFxuICAgIFwiQmFzc1wiLFxuICAgIFwiU291bFwiLFxuICAgIFwiUHVua1wiLFxuICAgIFwiU3BhY2VcIixcbiAgICBcIk1lZGl0YXRpdmVcIixcbiAgICBcIkluc3RydW1lbnRhbCBQb3BcIixcbiAgICBcIkluc3RydW1lbnRhbCBSb2NrXCIsXG4gICAgXCJFdGhuaWNcIixcbiAgICBcIkdvdGhpY1wiLFxuICAgIFwiRGFya3dhdmVcIixcbiAgICBcIlRlY2huby1JbmR1c3RyaWFsXCIsXG4gICAgXCJFbGVjdHJvbmljXCIsXG4gICAgXCJQb3AtRm9sa1wiLFxuICAgIFwiRXVyb2RhbmNlXCIsXG4gICAgXCJEcmVhbVwiLFxuICAgIFwiU291dGhlcm4gUm9ja1wiLFxuICAgIFwiQ29tZWR5XCIsXG4gICAgXCJDdWx0XCIsXG4gICAgXCJHYW5nc3RhXCIsXG4gICAgXCJUb3AgNDBcIixcbiAgICBcIkNocmlzdGlhbiBSYXBcIixcbiAgICBcIlBvcC9GdW5rXCIsXG4gICAgXCJKdW5nbGVcIixcbiAgICBcIk5hdGl2ZSBVU1wiLFxuICAgIFwiQ2FiYXJldFwiLFxuICAgIFwiTmV3IFdhdmVcIixcbiAgICBcIlBzeWNoYWRlbGljXCIsXG4gICAgXCJSYXZlXCIsXG4gICAgXCJTaG93dHVuZXNcIixcbiAgICBcIlRyYWlsZXJcIixcbiAgICBcIkxvLUZpXCIsXG4gICAgXCJUcmliYWxcIixcbiAgICBcIkFjaWQgUHVua1wiLFxuICAgIFwiQWNpZCBKYXp6XCIsXG4gICAgXCJQb2xrYVwiLFxuICAgIFwiUmV0cm9cIixcbiAgICBcIk11c2ljYWxcIixcbiAgICBcIlJvY2sgJiBSb2xsXCIsXG4gICAgXCJIYXJkIFJvY2tcIixcbiAgICBcIkZvbGtcIixcbiAgICBcIkZvbGstUm9ja1wiLFxuICAgIFwiTmF0aW9uYWwgRm9sa1wiLFxuICAgIFwiU3dpbmdcIixcbiAgICBcIkZhc3QgRnVzaW9uXCIsXG4gICAgXCJCZWJvYlwiLFxuICAgIFwiTGF0aW5cIixcbiAgICBcIlJldml2YWxcIixcbiAgICBcIkNlbHRpY1wiLFxuICAgIFwiQmx1ZWdyYXNzXCIsXG4gICAgXCJBdmFudGdhcmRlXCIsXG4gICAgXCJHb3RoaWMgUm9ja1wiLFxuICAgIFwiUHJvZ3Jlc3NpdmUgUm9ja1wiLFxuICAgIFwiUHN5Y2hlZGVsaWMgUm9ja1wiLFxuICAgIFwiU3ltcGhvbmljIFJvY2tcIixcbiAgICBcIlNsb3cgUm9ja1wiLFxuICAgIFwiQmlnIEJhbmRcIixcbiAgICBcIkNob3J1c1wiLFxuICAgIFwiRWFzeSBMaXN0ZW5pbmdcIixcbiAgICBcIkFjb3VzdGljXCIsXG4gICAgXCJIdW1vdXJcIixcbiAgICBcIlNwZWVjaFwiLFxuICAgIFwiQ2hhbnNvblwiLFxuICAgIFwiT3BlcmFcIixcbiAgICBcIkNoYW1iZXIgTXVzaWNcIixcbiAgICBcIlNvbmF0YVwiLFxuICAgIFwiU3ltcGhvbnlcIixcbiAgICBcIkJvb3R5IEJhc3NcIixcbiAgICBcIlByaW11c1wiLFxuICAgIFwiUG9ybiBHcm9vdmVcIixcbiAgICBcIlNhdGlyZVwiLFxuICAgIFwiU2xvdyBKYW1cIixcbiAgICBcIkNsdWJcIixcbiAgICBcIlRhbmdvXCIsXG4gICAgXCJTYW1iYVwiLFxuICAgIFwiRm9sa2xvcmVcIixcbiAgICBcIkJhbGxhZFwiLFxuICAgIFwiUG93ZXIgQmFsbGFkXCIsXG4gICAgXCJSaHl0aG1pYyBTb3VsXCIsXG4gICAgXCJGcmVlc3R5bGVcIixcbiAgICBcIkR1ZXRcIixcbiAgICBcIlB1bmsgUm9ja1wiLFxuICAgIFwiRHJ1bSBTb2xvXCIsXG4gICAgXCJBY2FwZWxsYVwiLFxuICAgIFwiRXVyby1Ib3VzZVwiLFxuICAgIFwiRGFuY2UgSGFsbFwiLFxuICAgIFwiR29hXCIsXG4gICAgXCJEcnVtICYgQmFzc1wiLFxuICAgIFwiQ2x1YiAtIEhvdXNlXCIsXG4gICAgXCJIYXJkY29yZVwiLFxuICAgIFwiVGVycm9yXCIsXG4gICAgXCJJbmRpZVwiLFxuICAgIFwiQnJpdFBvcFwiLFxuICAgIFwiTmVnZXJwdW5rXCIsXG4gICAgXCJQb2xzayBQdW5rXCIsXG4gICAgXCJCZWF0XCIsXG4gICAgXCJDaHJpc3RpYW4gR2FuZ3N0YSBSYXBcIixcbiAgICBcIkhlYXZ5IE1ldGFsXCIsXG4gICAgXCJCbGFjayBNZXRhbFwiLFxuICAgIFwiQ3Jvc3NvdmVyXCIsXG4gICAgXCJDb250ZW1wb3JhcnkgQ2hyaXN0aWFuXCIsXG4gICAgXCJDaHJpc3RpYW4gUm9ja1wiLFxuICAgIFwiTWVyZW5ndWVcIixcbiAgICBcIlNhbHNhXCIsXG4gICAgXCJUaHJhc2ggTWV0YWxcIixcbiAgICBcIkFuaW1lXCIsXG4gICAgXCJKUG9wXCIsXG4gICAgXCJTeW50aHBvcFwiXG5dO1xuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtcmVnaXN0ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFJlZ2lzdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgZ2VucmVzOiBBcnJheTxzdHJpbmc+O1xuICAgIHB1YmxpYyBpbmRleDogbnVtYmVyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xuICAgICAgICB0aGlzLmdlbnJlcyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgTXVzaWNHZW5yZXNMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLmdlbnJlcy5wdXNoKE11c2ljR2VucmVzTGlzdFtpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uQnV0dG9uVGFwKCl7XG5cbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9saWV1XCIpXG5cbiAgICB9XG5cblxuICAgIHB1YmxpYyBzZWxlY3RlZEluZGV4Q2hhbmdlZChhcmdzKSB7XG4gICAgICAgIGxldCBwaWNrZXIgPSA8TGlzdFBpY2tlcj5hcmdzLm9iamVjdDtcbiAgICAgICAgY29uc29sZS5sb2coXCJwaWNrZXIgc2VsZWN0aW9uOiBcIiArIHBpY2tlci5zZWxlY3RlZEluZGV4KTtcbiAgICB9XG4gICAgZGF0YSA9IFtdO1xuXG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBcIkJ1bGJhc2F1clwiLCBzcmM6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzEucG5nXCIgfSk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJJdnlzYXVyXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vMi5wbmdcIiB9KTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBcIlZlbnVzYXVyXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vMy5wbmdcIiB9KTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBcIkNoYXJtYW5kZXJcIiwgc3JjOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi80LnBuZ1wiIH0pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiQ2hhcm1lbGVvblwiLCBzcmM6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzUucG5nXCIgfSk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJDaGFyaXphcmRcIiwgc3JjOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi82LnBuZ1wiIH0pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiU3F1aXJ0bGVcIiwgc3JjOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi83LnBuZ1wiIH0pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiV2FydG9ydGxlXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vOC5wbmdcIiB9KTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBcIkJsYXN0b2lzZVwiLCBzcmM6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzkucG5nXCIgfSk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJDYXRlcnBpZVwiLCBzcmM6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzEwLnBuZ1wiIH0pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiTWV0YXBvZFwiLCBzcmM6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzExLnBuZ1wiIH0pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiQnV0dGVyZnJlZVwiLCBzcmM6IFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL1Bva2VBUEkvc3ByaXRlcy9tYXN0ZXIvc3ByaXRlcy9wb2tlbW9uLzEyLnBuZ1wiIH0pO1xuICAgICAgICB0aGlzLmRhdGEucHVzaCh7IHRleHQ6IFwiV2VlZGxlXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vMTMucG5nXCIgfSk7XG4gICAgICAgIHRoaXMuZGF0YS5wdXNoKHsgdGV4dDogXCJLYWt1bmFcIiwgc3JjOiBcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Qb2tlQVBJL3Nwcml0ZXMvbWFzdGVyL3Nwcml0ZXMvcG9rZW1vbi8xNC5wbmdcIiB9KTtcbiAgICAgICAgdGhpcy5kYXRhLnB1c2goeyB0ZXh0OiBcIkJlZWRyaWxsXCIsIHNyYzogXCJodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vUG9rZUFQSS9zcHJpdGVzL21hc3Rlci9zcHJpdGVzL3Bva2Vtb24vMTUucG5nXCIgfSk7XG4gICAgfVxuXG4gICAgb25JdGVtVGFwKGFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJZb3UgdGFwcGVkOiBcIiArIHRoaXMuZGF0YVthcmdzLmluZGV4XS50ZXh0KTtcbiAgICB9XG59XG4iXX0=