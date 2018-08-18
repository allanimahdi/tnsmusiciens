"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var geolocation = require("nativescript-geolocation");
var enums_1 = require("ui/enums"); // used to describe at what accuracy the location should be get
var observable_1 = require("data/observable");
var LieuComponent = /** @class */ (function (_super) {
    __extends(LieuComponent, _super);
    function LieuComponent() {
        var _this = _super.call(this) || this;
        _this.lat = "";
        _this.lon = "";
        _this.speed = "";
        _this.addr = "";
        return _this;
    }
    LieuComponent.prototype.getLocation = function (args) {
        var _this = this;
        geolocation.getCurrentLocation({ desiredAccuracy: enums_1.Accuracy.high, maximumAge: 5000, timeout: 20000 })
            .then(function (res) {
            _this.set("lat", res.latitude);
            _this.set("lon", res.longitude);
            _this.set("speed", res.speed);
            // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
            fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyAHXRKEBZ4f0Lq74lYuTYaSkY1BrWCY4nMY")
                .then(function (response) { return response.json(); }).then(function (r) {
                _this.set("addr", r.results[0].formatted_address);
            });
        });
        console.log("hola hola");
    };
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
}(observable_1.Observable));
exports.LieuComponent = LieuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlldS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaWV1LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBd0Q7QUFDeEQsa0NBQW9DLENBQUMsK0RBQStEO0FBQ3BHLDhDQUE2QztBQVE3QztJQUFtQyxpQ0FBVTtJQUUzQztRQUFBLFlBQ00saUJBQU8sU0FFVjtRQUVELFNBQUcsR0FBRyxFQUFFLENBQUM7UUFDVCxTQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ1QsV0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLFVBQUksR0FBRyxFQUFFLENBQUM7O0lBTFYsQ0FBQztJQU9ELG1DQUFXLEdBQVgsVUFBWSxJQUFJO1FBQWhCLGlCQWFDO1FBWkcsV0FBVyxDQUFDLGtCQUFrQixDQUFDLEVBQUUsZUFBZSxFQUFFLGdCQUFRLENBQUMsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQy9GLElBQUksQ0FBQyxVQUFBLEdBQUc7WUFDTCxLQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDOUIsS0FBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQy9CLEtBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM3QiwwREFBMEQ7WUFDMUQsS0FBSyxDQUFDLDJEQUEyRCxHQUFHLEdBQUcsQ0FBQyxRQUFRLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsK0NBQStDLENBQUM7aUJBQ3BKLElBQUksQ0FBQyxVQUFDLFFBQVEsSUFBSyxPQUFBLFFBQVEsQ0FBQyxJQUFJLEVBQUUsRUFBZixDQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxDQUFDO2dCQUM1QyxLQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQXpCUSxhQUFhO1FBTnpCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLHVCQUF1QjtZQUNwQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNyQyxDQUFDOztPQUNXLGFBQWEsQ0E0QnpCO0lBQUQsb0JBQUM7Q0FBQSxBQTVCRCxDQUFtQyx1QkFBVSxHQTRCNUM7QUE1Qlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0ICogYXMgZ2VvbG9jYXRpb24gZnJvbSBcIm5hdGl2ZXNjcmlwdC1nZW9sb2NhdGlvblwiO1xuaW1wb3J0IHsgQWNjdXJhY3kgfSBmcm9tIFwidWkvZW51bXNcIjsgLy8gdXNlZCB0byBkZXNjcmliZSBhdCB3aGF0IGFjY3VyYWN5IHRoZSBsb2NhdGlvbiBzaG91bGQgYmUgZ2V0XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuQENvbXBvbmVudCh7XG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiAnYXBwLWxpZXUnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlldS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpZXUuY29tcG9uZW50LnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaWV1Q29tcG9uZW50IGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgIH1cblxuICAgIGxhdCA9IFwiXCI7XG4gICAgbG9uID0gXCJcIjtcbiAgICBzcGVlZCA9IFwiXCI7XG4gICAgYWRkciA9IFwiXCI7XG5cbiAgICBnZXRMb2NhdGlvbihhcmdzKTogdm9pZCB7XG4gICAgICAgIGdlb2xvY2F0aW9uLmdldEN1cnJlbnRMb2NhdGlvbih7IGRlc2lyZWRBY2N1cmFjeTogQWNjdXJhY3kuaGlnaCwgbWF4aW11bUFnZTogNTAwMCwgdGltZW91dDogMjAwMDAgfSlcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXQoXCJsYXRcIiwgcmVzLmxhdGl0dWRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChcImxvblwiLCByZXMubG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChcInNwZWVkXCIsIHJlcy5zcGVlZCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBhZGRyZXNzIChSRVFVSVJFUyBZT1VSIE9XTiBHT09HTEUgTUFQIEFQSSBLRVkhKVxuICAgICAgICAgICAgICAgIGZldGNoKFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2dlb2NvZGUvanNvbj9sYXRsbmc9XCIgKyByZXMubGF0aXR1ZGUgKyBcIixcIiArIHJlcy5sb25naXR1ZGUgKyBcIiZrZXk9QUl6YVN5QUhYUktFQlo0ZjBMcTc0bFl1VFlhU2tZMUJyV0NZNG5NWVwiKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigocikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChcImFkZHJcIiwgci5yZXN1bHRzWzBdLmZvcm1hdHRlZF9hZGRyZXNzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcImhvbGEgaG9sYVwiKTtcbiAgICB9XG5cblxufVxuIl19