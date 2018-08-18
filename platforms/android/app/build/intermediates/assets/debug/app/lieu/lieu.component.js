"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums"); // used to describe at what accuracy the location should be get
var LieuComponent = /** @class */ (function () {
    function LieuComponent() {
    }
    LieuComponent.prototype.AllowPosition = function () {
        geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 20000 });
        console.log(geolocation);
    };
    LieuComponent.prototype.ngOnInit = function () { };
    LieuComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-lieu',
            templateUrl: './lieu.component.html',
            styleUrls: ['./lieu.component.scss']
        }),
        __metadata("design:paramtypes", [])
    ], LieuComponent);
    return LieuComponent;
}());
exports.LieuComponent = LieuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlldS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWV1LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBd0Q7QUFDeEQsa0NBQW9DLENBQUMsK0RBQStEO0FBUXBHO0lBRUU7SUFBZ0IsQ0FBQztJQUVWLHFDQUFhLEdBQXBCO1FBQ0ksV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7UUFFcEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsZ0NBQVEsR0FBUixjQUFhLENBQUM7SUFWSCxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDOztPQUNXLGFBQWEsQ0FhekI7SUFBRCxvQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGdlb2xvY2F0aW9uIGZyb20gXCJuYXRpdmVzY3JpcHQtZ2VvbG9jYXRpb25cIjtcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSBcInVpL2VudW1zXCI7IC8vIHVzZWQgdG8gZGVzY3JpYmUgYXQgd2hhdCBhY2N1cmFjeSB0aGUgbG9jYXRpb24gc2hvdWxkIGJlIGdldFxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbGlldScsXG4gIHRlbXBsYXRlVXJsOiAnLi9saWV1LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlldS5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpZXVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgcHVibGljIEFsbG93UG9zaXRpb24oKXtcbiAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMjAwMDAgfSlcblxuICAgICAgY29uc29sZS5sb2coZ2VvbG9jYXRpb24pO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7IH1cblxuXG59XG4iXX0=