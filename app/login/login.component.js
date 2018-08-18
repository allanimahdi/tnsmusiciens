"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var tnsOAuthModule = require("nativescript-oauth");
var router_1 = require("@angular/router");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.onButtonTap = function () {
        var _this = this;
        tnsOAuthModule
            .ensureValidToken()
            .then(function (token) {
            console.log("token: " + token);
            _this.router.navigateByUrl("/register");
        })
            .catch(function (er) {
            //do something with the error
        });
    };
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1EQUFvRDtBQUNwRCwwQ0FBd0M7QUFReEM7SUFHRSx3QkFBb0IsTUFBYztRQUFkLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBSSxDQUFDO0lBR2hDLG9DQUFXLEdBQWxCO1FBQUEsaUJBVUc7UUFUQyxjQUFjO2FBQ1QsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLFVBQUMsS0FBYTtZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUMvQixLQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUMxQyxDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsVUFBQSxFQUFFO1lBQ0wsNkJBQTZCO1FBQ2pDLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUdELGlDQUFRLEdBQVIsY0FBYSxDQUFDO0lBbkJMLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHdCQUF3QixDQUFDO1NBQ3RDLENBQUM7eUNBSTRCLGVBQU07T0FIdkIsY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIHRuc09BdXRoTW9kdWxlIGZyb20gJ25hdGl2ZXNjcmlwdC1vYXV0aCdcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6ICdhcHAtbG9naW4nLFxuICB0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgfVxuXG5cbiAgcHVibGljIG9uQnV0dG9uVGFwKCl7XG4gICAgICB0bnNPQXV0aE1vZHVsZVxuICAgICAgICAgIC5lbnN1cmVWYWxpZFRva2VuKClcbiAgICAgICAgICAudGhlbigodG9rZW46IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOiBcIiArIHRva2VuKTtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGVCeVVybChcIi9yZWdpc3RlclwiKVxuICAgICAgICAgIH0pXG4gICAgICAgICAgLmNhdGNoKGVyID0+IHtcbiAgICAgICAgICAgICAgLy9kbyBzb21ldGhpbmcgd2l0aCB0aGUgZXJyb3JcbiAgICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG5nT25Jbml0KCkgeyB9XG5cbn1cbiJdfQ==