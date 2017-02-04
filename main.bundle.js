webpackJsonp([2,5],{

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SerialService = (function () {
    function SerialService(af, auth) {
        this.af = af;
        this.auth = auth;
    }
    SerialService.prototype.getSerialsList = function () {
        var _this = this;
        return this.af.database.object("/subscriptions/" + this.auth.getUserId())
            .map(function (subscriptions) { return Object.keys(subscriptions); })
            .map(function (serialIds) { return serialIds.filter(function (id) { return !id.startsWith('$'); }); })
            .map(function (serialIds) { return serialIds.map(function (id) { return _this.af.database.object("serials/" + id); }); })
            .flatMap(function (serials$) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].combineLatest(serials$); });
    };
    SerialService.prototype.getDatesStringForSerial = function (serial) {
        var startYear = this.getYearFromDate(serial.first_air_date);
        return serial.in_production
            ? startYear + " - now"
            : startYear + " - " + this.getYearFromDate(serial.last_air_date);
    };
    SerialService.prototype.addToWatchList = function (serial) {
        var _this = this;
        this.getSerialInfo(serial.id).set(serial).then(function (res) {
            console.log(res);
            _this.af.database.object("/subscriptions/" + _this.auth.getUserId()).update((_a = {},
                _a[serial.id] = true,
                _a
            ));
            var _a;
        });
    };
    SerialService.prototype.isWatchingSerial = function (serial) {
        return this.af.database.object("/subscriptions/" + this.auth.getUserId() + "/" + serial.id)
            .map(function (val) { return val.$exists(); });
    };
    SerialService.prototype.getYearFromDate = function (date) {
        return date.substr(0, 4);
    };
    SerialService.prototype.getSubscriptionsForSerialId = function (serialId) {
        return this.af.database.list("/subscriptions/" + this.auth.getUserId() + "/" + serialId);
    };
    SerialService.prototype.getSeasonsConfigs = function (serialId, seasons) {
        var _this = this;
        return this.getSubscriptionsForSerialId(serialId)
            .map(function (subscriptions) {
            return _this.calculateProgress(subscriptions, seasons);
        });
    };
    SerialService.prototype.calculateProgress = function (subscriptions, seasons) {
        var latestEpisodes = {};
        var episodesCount = {};
        subscriptions.forEach(function (s) {
            if (!latestEpisodes[s.season] || s.episode > latestEpisodes[s.season]) {
                latestEpisodes[s.season] = s.episode;
            }
            episodesCount[s.season] = episodesCount[s.season] ? episodesCount[s.season] + 1 : 1;
        });
        var seasonsProgress = {};
        seasons.forEach(function (season) {
            var progress = episodesCount[season.season_number] / season.episode_count * 100;
            seasonsProgress[season.season_number] = {
                latestEpisode: latestEpisodes[season.season_number],
                progress: Number.isNaN(progress) ? null : progress
            };
        });
        return seasonsProgress;
    };
    SerialService.prototype.getSerialInfo = function (serialId) {
        return this.af.database.object("serials/" + serialId);
    };
    SerialService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__auth_service__["a" /* AuthService */]) === 'function' && _b) || Object])
    ], SerialService);
    return SerialService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial.service.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__User__ = __webpack_require__(709);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    function AuthService(af, router) {
        var _this = this;
        this.af = af;
        this.router = router;
        this.user$ = this.af.auth.map(function (authInfo) {
            if (authInfo) {
                return new __WEBPACK_IMPORTED_MODULE_2__User__["a" /* User */](authInfo.auth.providerData[0]['displayName'], authInfo.uid, authInfo.auth.providerData[0]['email']);
            }
            return null;
        })
            .do(function (user) { return _this.user = user; });
        this.user$.subscribe();
    }
    AuthService.prototype.isLoggedIn = function () {
        return !!this.user;
    };
    AuthService.prototype.login = function () {
        var _this = this;
        this.af.auth.login().then(function () {
            _this.router.navigateByUrl('/tracker');
        });
    };
    AuthService.prototype.getUser$ = function () {
        return this.user$;
    };
    AuthService.prototype.logout = function () {
        this.af.auth.logout();
    };
    AuthService.prototype.getUserId = function () {
        return this.user && this.user.uid;
    };
    AuthService.UNAUTHORIZED_ROOT = '/search';
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthService);
    return AuthService;
    var _a, _b;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/auth.service.js.map

/***/ }),

/***/ 1155:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(536);


/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(182);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TmdbService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TmdbService = (function () {
    function TmdbService(http) {
        this.http = http;
    }
    TmdbService.prototype.searchSerial = function (searchString) {
        var options = this.getRequestOptions();
        options.search.set('query', searchString);
        return this.http.get(TmdbService.API_URL + "/search/tv", options)
            .map(function (response) { return response.json(); });
    };
    TmdbService.prototype.getSerialInfo = function (id) {
        var options = this.getRequestOptions();
        return this.http.get(TmdbService.API_URL + "/tv/" + id, options)
            .map(function (response) { return response.json(); });
    };
    TmdbService.prototype.getRequestOptions = function () {
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.set('api_key', TmdbService.API_KEY);
        params.set('language', 'en-US');
        options.search = params;
        return options;
    };
    TmdbService.API_KEY = '9706cfacd9dcaa86df597c461ff04386';
    TmdbService.API_URL = 'https://api.themoviedb.org/3';
    TmdbService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], TmdbService);
    return TmdbService;
    var _a;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/tmdb.service.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TmdbSerial; });
/* unused harmony export Person */
/* unused harmony export Genre */
/* unused harmony export Network */
/* unused harmony export ProductionCompany */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Season; });
var TmdbSerial = (function () {
    function TmdbSerial() {
    }
    return TmdbSerial;
}());
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Genre = (function () {
    function Genre() {
    }
    return Genre;
}());
var Network = (function () {
    function Network() {
    }
    return Network;
}());
var ProductionCompany = (function () {
    function ProductionCompany() {
    }
    return ProductionCompany;
}());
var Season = (function () {
    function Season() {
    }
    return Season;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/TmdbSerial.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate([__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */].UNAUTHORIZED_ROOT]);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/auth-guard.service.js.map

/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/search/search.module": [
		1157,
		0
	],
	"app/tracker/tracker.module": [
		1158,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 535;


/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(668);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(710);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(698);





var firebase = __webpack_require__(107);
var firebaseui = __webpack_require__(877);
if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/main.js.map

/***/ }),

/***/ 538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_serial_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_tmdb_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serial_info_serial_info_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__serial_actions_serial_actions_component__ = __webpack_require__(705);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__serial_title_serial_title_component__ = __webpack_require__(708);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__serial_genres_list_serial_genres_list_component__ = __webpack_require__(706);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__serial_runtime_serial_runtime_component__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__length_text_length_text_component__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__seasons_list_seasons_list_component__ = __webpack_require__(704);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__active_season_active_season_component__ = __webpack_require__(702);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdChipsModule"].forRoot(),
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdIconModule"].forRoot(),
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdButtonModule"].forRoot(),
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdProgressBarModule"].forRoot(),
    __WEBPACK_IMPORTED_MODULE_6__angular_material__["MdCardModule"].forRoot()
];
var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__serial_info_serial_info_component__["a" /* SerialInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__serial_actions_serial_actions_component__["a" /* SerialActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__serial_title_serial_title_component__["a" /* SerialTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__serial_genres_list_serial_genres_list_component__["a" /* SerialGenresListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__serial_runtime_serial_runtime_component__["a" /* SerialRuntimeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__length_text_length_text_component__["a" /* LengthTextComponent */],
                __WEBPACK_IMPORTED_MODULE_13__seasons_list_seasons_list_component__["a" /* SeasonsListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__active_season_active_season_component__["a" /* ActiveSeasonComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]
            ].concat(MATERIAL_MODULES),
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__serial_info_serial_info_component__["a" /* SerialInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_8__serial_actions_serial_actions_component__["a" /* SerialActionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__serial_title_serial_title_component__["a" /* SerialTitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__serial_genres_list_serial_genres_list_component__["a" /* SerialGenresListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__serial_runtime_serial_runtime_component__["a" /* SerialRuntimeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__length_text_length_text_component__["a" /* LengthTextComponent */],
                __WEBPACK_IMPORTED_MODULE_13__seasons_list_seasons_list_component__["a" /* SeasonsListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__active_season_active_season_component__["a" /* ActiveSeasonComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_serial_service__["a" /* SerialService */],
                __WEBPACK_IMPORTED_MODULE_3__services_tmdb_service__["a" /* TmdbService */],
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SharedModule);
    return SharedModule;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/shared.module.js.map

/***/ }),

/***/ 539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_serial_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tmdb_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SerialInfoComponent = (function () {
    function SerialInfoComponent(auth, serialService, tmdb, route) {
        this.auth = auth;
        this.serialService = serialService;
        this.tmdb = tmdb;
        this.route = route;
    }
    SerialInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.tmdb.getSerialInfo(+params['id']).subscribe(function (serial) { return _this.onSerialReady(serial); });
        });
        this.auth.getUser$().subscribe(function (user) { return _this.isLoggedIn = !!user; });
    };
    SerialInfoComponent.prototype.getPosterUrl = function () {
        return "http://image.tmdb.org/t/p/w500" + this.serial.poster_path;
    };
    SerialInfoComponent.prototype.watchSerial = function () {
        this.serialService.addToWatchList(this.serial);
    };
    SerialInfoComponent.prototype.archiveSerial = function () {
        console.log('Will be archived someday');
    };
    SerialInfoComponent.prototype.onSerialReady = function (serial) {
        var _this = this;
        this.serial = serial;
        this.serialService.isWatchingSerial(this.serial).subscribe(function (isWatching) { return _this.isWatching = isWatching; });
    };
    SerialInfoComponent.prototype.login = function () {
        this.auth.login();
    };
    SerialInfoComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-info',
            template: __webpack_require__(896),
            styles: [__webpack_require__(883)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_serial_service__["a" /* SerialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_serial_service__["a" /* SerialService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_tmdb_service__["a" /* TmdbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_tmdb_service__["a" /* TmdbService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], SerialInfoComponent);
    return SerialInfoComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-info.component.js.map

/***/ }),

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'SerialTracker';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(889),
            styles: [__webpack_require__(885)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/app.component.js.map

/***/ }),

/***/ 698:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(697);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__(699);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_services_auth_guard_service__ = __webpack_require__(462);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var firebaseConfig = {
    apiKey: "AIzaSyBGn6GcIMf1C6u4GWv7To89nM0mKYQTIIc",
    authDomain: "serialtracker-e5b43.firebaseapp.com",
    databaseURL: "https://serialtracker-e5b43.firebaseio.com",
    storageBucket: "serialtracker-e5b43.appspot.com"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AuthProviders */].Facebook,
    method: __WEBPACK_IMPORTED_MODULE_6_angularfire2__["b" /* AuthMethods */].Popup
};
var MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_7__angular_material__["MaterialModule"].forRoot(),
    __WEBPACK_IMPORTED_MODULE_7__angular_material__["MdToolbarModule"].forRoot(),
    __WEBPACK_IMPORTED_MODULE_7__angular_material__["MdIconModule"].forRoot()
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */]
            ].concat(MATERIAL_MODULES, [
                __WEBPACK_IMPORTED_MODULE_8__layout_layout_module__["a" /* LayoutModule */],
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
            ]),
            providers: [__WEBPACK_IMPORTED_MODULE_9__shared_services_auth_guard_service__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/app.module.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__ = __webpack_require__(462);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    { path: '', redirectTo: 'tracker', pathMatch: 'full' },
    { path: 'tracker', loadChildren: 'app/tracker/tracker.module#TrackerModule', canActivate: [__WEBPACK_IMPORTED_MODULE_1__shared_services_auth_guard_service__["a" /* AuthGuard */]] },
    { path: 'search', loadChildren: 'app/search/search.module#SearchModule' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/app.routing.js.map

/***/ }),

/***/ 700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toolbar_toolbar_component__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(538);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LayoutModule = (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__toolbar_toolbar_component__["a" /* ToolbarComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdIconModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdToolbarModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["MdButtonModule"].forRoot()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__toolbar_toolbar_component__["a" /* ToolbarComponent */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], LayoutModule);
    return LayoutModule;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/layout.module.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__(112);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(auth) {
        this.auth = auth;
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getUser$()
            .subscribe(function (user) { return _this.userName = user && user.name; });
    };
    ToolbarComponent.prototype.login = function () {
        this.auth.login();
    };
    ToolbarComponent.prototype.logout = function () {
        this.auth.logout();
    };
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__(890),
            styles: [__webpack_require__(879)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/toolbar.component.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TmdbSerial__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_serial_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActiveSeasonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActiveSeasonComponent = (function () {
    function ActiveSeasonComponent(serialService) {
        this.serialService = serialService;
    }
    ActiveSeasonComponent.prototype.ngOnInit = function () {
    };
    ActiveSeasonComponent.prototype.getYear = function (date) {
        return this.serialService.getYearFromDate(date);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TmdbSerial__["a" /* Season */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_TmdbSerial__["a" /* Season */]) === 'function' && _a) || Object)
    ], ActiveSeasonComponent.prototype, "season", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Number)
    ], ActiveSeasonComponent.prototype, "progress", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Number)
    ], ActiveSeasonComponent.prototype, "latestWatchedEpisodeNumber", void 0);
    ActiveSeasonComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-active-season',
            template: __webpack_require__(891),
            styles: [__webpack_require__(886)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_serial_service__["a" /* SerialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_serial_service__["a" /* SerialService */]) === 'function' && _b) || Object])
    ], ActiveSeasonComponent);
    return ActiveSeasonComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/active-season.component.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LengthTextComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LengthTextComponent = (function () {
    function LengthTextComponent() {
    }
    LengthTextComponent.prototype.ngOnInit = function () {
    };
    LengthTextComponent.prototype.expandText = function () {
        this.isExpanded = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', String)
    ], LengthTextComponent.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Number)
    ], LengthTextComponent.prototype, "length", void 0);
    LengthTextComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-length-text',
            template: __webpack_require__(892),
            styles: [__webpack_require__(880)]
        }), 
        __metadata('design:paramtypes', [])
    ], LengthTextComponent);
    return LengthTextComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/length-text.component.js.map

/***/ }),

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_serial_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SeasonsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SeasonsListComponent = (function () {
    function SeasonsListComponent(serialService) {
        this.serialService = serialService;
    }
    SeasonsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serialService.getSeasonsConfigs(this.serialId, this.seasons)
            .subscribe(function (s) { return _this.seasonConfigs = s; });
    };
    SeasonsListComponent.prototype.getYear = function (date) {
        return this.serialService.getYearFromDate(date);
    };
    SeasonsListComponent.prototype.isActiveSeasonByNumber = function (seasonNumber) {
        return this.seasonConfigs && this.seasonConfigs[seasonNumber] &&
            this.seasonConfigs[seasonNumber].progress !== 100 &&
            this.seasonConfigs[seasonNumber].progress;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Array)
    ], SeasonsListComponent.prototype, "seasons", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Number)
    ], SeasonsListComponent.prototype, "serialId", void 0);
    SeasonsListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-seasons-list',
            template: __webpack_require__(893),
            styles: [__webpack_require__(887)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_serial_service__["a" /* SerialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_serial_service__["a" /* SerialService */]) === 'function' && _a) || Object])
    ], SeasonsListComponent);
    return SeasonsListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/seasons-list.component.js.map

/***/ }),

/***/ 705:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialActionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SerialActionsComponent = (function () {
    function SerialActionsComponent() {
        this.onWatch = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onArchive = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    SerialActionsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], SerialActionsComponent.prototype, "isWatching", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], SerialActionsComponent.prototype, "isArchived", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Output */])(), 
        __metadata('design:type', Object)
    ], SerialActionsComponent.prototype, "onWatch", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Output */])(), 
        __metadata('design:type', Object)
    ], SerialActionsComponent.prototype, "onArchive", void 0);
    SerialActionsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-actions',
            template: __webpack_require__(894),
            styles: [__webpack_require__(881)]
        }), 
        __metadata('design:paramtypes', [])
    ], SerialActionsComponent);
    return SerialActionsComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-actions.component.js.map

/***/ }),

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialGenresListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SerialGenresListComponent = (function () {
    function SerialGenresListComponent() {
    }
    SerialGenresListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Array)
    ], SerialGenresListComponent.prototype, "genres", void 0);
    SerialGenresListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-genres-list',
            template: __webpack_require__(895),
            styles: [__webpack_require__(882)]
        }), 
        __metadata('design:paramtypes', [])
    ], SerialGenresListComponent);
    return SerialGenresListComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-genres-list.component.js.map

/***/ }),

/***/ 707:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialRuntimeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SerialRuntimeComponent = (function () {
    function SerialRuntimeComponent() {
    }
    SerialRuntimeComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Number)
    ], SerialRuntimeComponent.prototype, "minutes", void 0);
    SerialRuntimeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-runtime',
            template: __webpack_require__(897),
            styles: [__webpack_require__(888)]
        }), 
        __metadata('design:paramtypes', [])
    ], SerialRuntimeComponent);
    return SerialRuntimeComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-runtime.component.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_TmdbSerial__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_serial_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialTitleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SerialTitleComponent = (function () {
    function SerialTitleComponent(serialService) {
        this.serialService = serialService;
    }
    SerialTitleComponent.prototype.ngOnInit = function () {
    };
    SerialTitleComponent.prototype.generateDatesString = function () {
        return this.serialService.getDatesStringForSerial(this.serial);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_TmdbSerial__["b" /* TmdbSerial */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_TmdbSerial__["b" /* TmdbSerial */]) === 'function' && _a) || Object)
    ], SerialTitleComponent.prototype, "serial", void 0);
    SerialTitleComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-title',
            template: __webpack_require__(898),
            styles: [__webpack_require__(884)]
        }), 
        __metadata('design:paramtypes', [(typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_serial_service__["a" /* SerialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_serial_service__["a" /* SerialService */]) === 'function' && _b) || Object])
    ], SerialTitleComponent);
    return SerialTitleComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-title.component.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(name, uid, email) {
        this.name = name;
        this.uid = uid;
        this.email = email;
    }
    return User;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/User.js.map

/***/ }),

/***/ 710:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/environment.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(729);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(733);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(730);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/polyfills.js.map

/***/ }),

/***/ 879:
/***/ (function(module, exports) {

module.exports = ".toolbar-spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.title {\n  margin-right: 50px;\n  font-family: 'Indie Flower', sans-serif;\n  font-size: 30px; }\n\n.button-link {\n  text-transform: uppercase; }\n\n.is-active {\n  background-color: rgba(0, 0, 0, 0.12); }\n\n.account {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .account .user-icon {\n    margin-right: 10px; }\n  .account .logout-icon {\n    margin-left: 10px; }\n  .account md-icon {\n    cursor: pointer; }\n"

/***/ }),

/***/ 880:
/***/ (function(module, exports) {

module.exports = ".expand {\n  color: lightblue; }\n  .expand:hover {\n    color: #00d0ff; }\n"

/***/ }),

/***/ 881:
/***/ (function(module, exports) {

module.exports = ".actions {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .actions button {\n    margin-right: 10px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center; }\n    .actions button.watch-button:hover md-icon.material-icons {\n      color: #00d0ff; }\n    .actions button.archive-button:hover md-icon.material-icons {\n      color: grey; }\n    .actions button md-icon {\n      margin-right: 5px; }\n"

/***/ }),

/***/ 882:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 883:
/***/ (function(module, exports) {

module.exports = ".serial-info-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .serial-info-container .poster-image {\n    height: calc(100vh - 64px); }\n  .serial-info-container .content-container {\n    padding: 0 15px;\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2; }\n    .serial-info-container .content-container h3 {\n      color: #54b0ff; }\n      .serial-info-container .content-container h3 .info-icon {\n        margin-right: 10px; }\n"

/***/ }),

/***/ 884:
/***/ (function(module, exports) {

module.exports = ".title {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n"

/***/ }),

/***/ 885:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 886:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 887:
/***/ (function(module, exports) {

module.exports = ".finished-season {\n  opacity: 0.6;\n}\n"

/***/ }),

/***/ 888:
/***/ (function(module, exports) {

module.exports = ".runtime {\n  font-size: smaller;\n  color: grey;\n}\n"

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

module.exports = "<md-toolbar color=\"primary\">\n  <span class=\"title\">Serial Tracker</span>\n  <button *ngIf=\"auth.isLoggedIn()\" md-button class=\"button-link\" routerLink=\"/tracker\" routerLinkActive=\"is-active\">\n    Tracker\n  </button>\n  <button md-button class=\"button-link\" routerLink=\"/search\" routerLinkActive=\"is-active\">\n    Search\n  </button>\n  <span class=\"toolbar-spacer\"></span>\n  <div class=\"account\">\n    <div (click)=\"login()\" class=\"user-icon\">\n      <md-icon *ngIf=\"!userName\">account_circle</md-icon>\n    </div>\n    <span *ngIf=\"userName\">{{userName}}</span>\n    <div (click)=\"logout()\" class=\"logout-icon\">\n      <md-icon *ngIf=\"userName\">exit_to_app</md-icon>\n    </div>\n  </div>\n</md-toolbar>\n"

/***/ }),

/***/ 891:
/***/ (function(module, exports) {

module.exports = "<md-card>\n  <md-card-content>\n    <h2>Season {{season.season_number}} <span class=\"small\">({{getYear(season.air_date)}})</span></h2>\n\n\n    <h3>Next episode: </h3>\n\n\n    <!-- Progress -->\n    <span>\n      {{latestWatchedEpisodeNumber}} /\n    </span>{{season.episode_count}} episodes.\n    <md-progress-bar\n      [mode]=\"'determinate'\"\n      [value]=\"progress\"\n    >\n    </md-progress-bar>\n\n  </md-card-content>\n</md-card>\n"

/***/ }),

/***/ 892:
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"!isExpanded\">{{text.substr(0, length)}}{{'...'}}</span>\n<span *ngIf=\"!isExpanded\" class=\"clickable expand\" (click)=\"expandText()\">Read more</span>\n\n<span *ngIf=\"isExpanded\">{{text}}</span>\n"

/***/ }),

/***/ 893:
/***/ (function(module, exports) {

module.exports = "<h3>Seasons: {{seasons.length - 1}}</h3>\n<div *ngFor=\"let season of seasons; let i = index\">\n  <p *ngIf=\"season.season_number > 0\">\n\n    <app-active-season *ngIf=\"isActiveSeasonByNumber(season.season_number)\"\n                       [season]=\"season\"\n                       [progress]=\"seasonConfigs && seasonConfigs[season.season_number].progress || 0\"\n                       [latestWatchedEpisodeNumber]=\"seasonConfigs[season.season_number].latestEpisode\"\n    ></app-active-season>\n\n\n\n    <span *ngIf=\"!isActiveSeasonByNumber(season.season_number)\"\n          [ngClass]=\"{'finished-season': !isActiveSeasonByNumber(season.season_number)}\">\n\n      <strong>Season {{season.season_number}}:</strong>\n      <span>{{season.episode_count}} episodes. ({{getYear(season.air_date)}})</span>\n\n    </span>\n  </p>\n</div>\n"

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

module.exports = "<p class=\"actions\">\n  <button *ngIf=\"!isWatching\" md-button class=\"watch-button\" (click)=\"onWatch.next()\">\n    <md-icon>add_box</md-icon>\n    Watch\n  </button>\n  <button *ngIf=\"isWatching\" md-button class=\"watch-button\" disabled>\n    <md-icon>video_label</md-icon>\n    Watching\n  </button>\n  <button md-button class=\"archive-button\" (click)=\"onArchive.next()\">\n    <md-icon>archive</md-icon>\n    Archive\n  </button>\n</p>\n"

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

module.exports = "<md-chip-list>\n  <md-chip *ngFor=\"let genre of genres\">{{genre.name}}</md-chip>\n</md-chip-list>\n"

/***/ }),

/***/ 896:
/***/ (function(module, exports) {

module.exports = "<div class=\"serial-info-container\" *ngIf=\"serial\">\n  <div *ngIf=\"serial.poster_path\">\n    <img class=\"poster-image\" [src]=\"getPosterUrl()\" />\n  </div>\n  <div class=\"content-container\">\n    <app-serial-title [serial]=\"serial\"></app-serial-title>\n\n    <app-serial-genres-list [genres]=\"serial.genres\"></app-serial-genres-list>\n    <app-serial-runtime [minutes]=\"serial.episode_run_time[0]\"></app-serial-runtime>\n\n    <p>\n      <app-length-text [text]=\"serial.overview\" [length]=\"100\"></app-length-text>\n    </p>\n\n\n    <p>\n      <app-serial-actions\n        *ngIf=\"isLoggedIn\"\n        [isWatching]=\"isWatching\"\n        [isArchived]=\"false\"\n        (onWatch)=\"watchSerial()\"\n        (onArchive)=\"archiveSerial()\"\n      ></app-serial-actions>\n      <md-card *ngIf=\"!isLoggedIn\">\n        <md-card-content>\n          <h3 class=\"vertical-centered-flex\">\n            <md-icon class=\"info-icon\">info_outlined</md-icon>\n            <span class=\"clickable\" (click)=\"login()\">Log in to track progress</span>\n          </h3>\n        </md-card-content>\n      </md-card>\n    </p>\n\n    <app-seasons-list [serialId]=\"serial.id\" [seasons]=\"serial.seasons\"></app-seasons-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 897:
/***/ (function(module, exports) {

module.exports = "<p class=\"runtime\">Run time {{minutes}} min</p>\n"

/***/ }),

/***/ 898:
/***/ (function(module, exports) {

module.exports = "<h2 class=\"title\">\n  <span>{{serial.name}} ({{generateDatesString()}})</span>\n  <span *ngIf=\"serial.vote_count > 0\" class=\"rating\">Rating: {{serial.vote_average}} ({{serial.vote_count}})</span>\n</h2>\n"

/***/ })

},[1155]);
//# sourceMappingURL=main.bundle.map