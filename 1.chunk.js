webpackJsonp([1,5],{

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracker_routing__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tracker_tracker_component__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serials_page_serials_page_component__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__serial_tiles_list_serial_tiles_list_component__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__serial_tile_item_serial_tile_item_component__ = __webpack_require__(1169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tracker_serial_page_tracker_serial_page_component__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_material__ = __webpack_require__(217);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrackerModule", function() { return TrackerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var TrackerModule = (function () {
    function TrackerModule() {
    }
    TrackerModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__tracker_tracker_component__["a" /* TrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_4__serials_page_serials_page_component__["a" /* SerialsPageComponent */],
                __WEBPACK_IMPORTED_MODULE_6__serial_tiles_list_serial_tiles_list_component__["a" /* SerialTilesListComponent */],
                __WEBPACK_IMPORTED_MODULE_7__serial_tile_item_serial_tile_item_component__["a" /* SerialTileItemComponent */],
                __WEBPACK_IMPORTED_MODULE_8__tracker_serial_page_tracker_serial_page_component__["a" /* TrackerSerialPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_2__tracker_routing__["a" /* TrackerRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["MdIconModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9__angular_material__["MdCardModule"].forRoot()
            ],
            exports: [],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], TrackerModule);
    return TrackerModule;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/tracker.module.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_serial_service__ = __webpack_require__(111);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialsPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SerialsPageComponent = (function () {
    function SerialsPageComponent(serialService) {
        this.serialService = serialService;
    }
    SerialsPageComponent.prototype.ngOnInit = function () {
        this.serials$ = this.serialService.getSerialsList();
    };
    SerialsPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serials-page',
            template: __webpack_require__(1189),
            styles: [__webpack_require__(1180)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_serial_service__["a" /* SerialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_serial_service__["a" /* SerialService */]) === 'function' && _a) || Object])
    ], SerialsPageComponent);
    return SerialsPageComponent;
    var _a;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serials-page.component.js.map

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_serial_service__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_tmdb_service__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(91);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerSerialPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TrackerSerialPageComponent = (function () {
    function TrackerSerialPageComponent(auth, serialService, tmdb, route) {
        this.auth = auth;
        this.serialService = serialService;
        this.tmdb = tmdb;
        this.route = route;
    }
    TrackerSerialPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.serialService.getSerialInfo(+params['id']).subscribe(function (serial) { return _this.onSerialReady(serial); });
        });
        this.auth.getUser$().subscribe(function (user) { return _this.isLoggedIn = !!user; });
    };
    TrackerSerialPageComponent.prototype.getPosterUrl = function () {
        return "http://image.tmdb.org/t/p/w500" + this.serial.poster_path;
    };
    TrackerSerialPageComponent.prototype.watchSerial = function () {
        this.serialService.addToWatchList(this.serial);
    };
    TrackerSerialPageComponent.prototype.archiveSerial = function () {
        console.log('Will be archived someday');
    };
    TrackerSerialPageComponent.prototype.onSerialReady = function (serial) {
        var _this = this;
        this.serial = serial;
        this.serialService.isWatchingSerial(this.serial).subscribe(function (isWatching) { return _this.isWatching = isWatching; });
    };
    TrackerSerialPageComponent.prototype.login = function () {
        this.auth.login();
    };
    TrackerSerialPageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-tracker-serial-page',
            template: __webpack_require__(1190),
            styles: [__webpack_require__(1174)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_serial_service__["a" /* SerialService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_services_serial_service__["a" /* SerialService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_services_tmdb_service__["a" /* TmdbService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__shared_services_tmdb_service__["a" /* TmdbService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === 'function' && _d) || Object])
    ], TrackerSerialPageComponent);
    return TrackerSerialPageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/tracker-serial-page.component.js.map

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TrackerComponent = (function () {
    function TrackerComponent() {
    }
    TrackerComponent.prototype.ngOnInit = function () {
    };
    TrackerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-tracker',
            template: __webpack_require__(1191),
            styles: [__webpack_require__(1181)]
        }), 
        __metadata('design:paramtypes', [])
    ], TrackerComponent);
    return TrackerComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/tracker.component.js.map

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services_TmdbSerial__ = __webpack_require__(325);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialTileItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SerialTileItemComponent = (function () {
    function SerialTileItemComponent() {
    }
    SerialTileItemComponent.prototype.ngOnInit = function () {
    };
    SerialTileItemComponent.prototype.getImageSrc = function (path) {
        return "http://image.tmdb.org/t/p/w300" + path;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_services_TmdbSerial__["b" /* TmdbSerial */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_services_TmdbSerial__["b" /* TmdbSerial */]) === 'function' && _a) || Object)
    ], SerialTileItemComponent.prototype, "serial", void 0);
    SerialTileItemComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-tile-item',
            template: __webpack_require__(1187),
            styles: [__webpack_require__(1178)]
        }), 
        __metadata('design:paramtypes', [])
    ], SerialTileItemComponent);
    return SerialTileItemComponent;
    var _a;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-tile-item.component.js.map

/***/ }),

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialTilesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SerialTilesListComponent = (function () {
    function SerialTilesListComponent() {
    }
    SerialTilesListComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* Input */])(), 
        __metadata('design:type', Array)
    ], SerialTilesListComponent.prototype, "serials", void 0);
    SerialTilesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
            selector: 'app-serial-tiles-list',
            template: __webpack_require__(1188),
            styles: [__webpack_require__(1179)]
        }), 
        __metadata('design:paramtypes', [])
    ], SerialTilesListComponent);
    return SerialTilesListComponent;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/serial-tiles-list.component.js.map

/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tracker_tracker_component__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serials_page_serials_page_component__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tracker_serial_page_tracker_serial_page_component__ = __webpack_require__(1162);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackerRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__tracker_tracker_component__["a" /* TrackerComponent */],
        children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_3__serials_page_serials_page_component__["a" /* SerialsPageComponent */] },
            { path: 'serial/:id', component: __WEBPACK_IMPORTED_MODULE_4__tracker_serial_page_tracker_serial_page_component__["a" /* TrackerSerialPageComponent */] }
        ]
    },
];
var TrackerRoutingModule = (function () {
    function TrackerRoutingModule() {
    }
    TrackerRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
        }), 
        __metadata('design:paramtypes', [])
    ], TrackerRoutingModule);
    return TrackerRoutingModule;
}());
//# sourceMappingURL=/Users/ykravch/projects/SerialTracker/src/tracker.routing.js.map

/***/ }),

/***/ 1174:
/***/ (function(module, exports) {

module.exports = ".serial-info-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .serial-info-container .poster-image {\n    height: calc(100vh - 64px); }\n  .serial-info-container .content-container {\n    padding: 0 15px;\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2; }\n    .serial-info-container .content-container h3 {\n      color: #54b0ff; }\n      .serial-info-container .content-container h3 .info-icon {\n        margin-right: 10px; }\n"

/***/ }),

/***/ 1178:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1179:
/***/ (function(module, exports) {

module.exports = ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  height: calc(100vh - 64px);\n  overflow: auto;\n}\n"

/***/ }),

/***/ 1180:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1181:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 1187:
/***/ (function(module, exports) {

module.exports = "<div class=\"serial-list-item\">\n  <div class=\"poster-container\">\n    <a [routerLink]=\"['../serial', serial.id]\" *ngIf=\"serial.poster_path\">\n      <img [src]=\"getImageSrc(serial.poster_path)\" alt=\"No Poster\">\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ 1188:
/***/ (function(module, exports) {

module.exports = "<app-serial-tile-item *ngFor=\"let serial of serials\" [serial]=\"serial\"></app-serial-tile-item>\n"

/***/ }),

/***/ 1189:
/***/ (function(module, exports) {

module.exports = "<app-serial-tiles-list [serials]=\"serials$ | async\"></app-serial-tiles-list>\n"

/***/ }),

/***/ 1190:
/***/ (function(module, exports) {

module.exports = "<div class=\"serial-info-container\" *ngIf=\"serial\">\n  <div *ngIf=\"serial.poster_path\">\n    <img class=\"poster-image\" [src]=\"getPosterUrl()\" />\n  </div>\n  <div class=\"content-container\">\n    <app-serial-title [serial]=\"serial\"></app-serial-title>\n\n    <app-serial-genres-list [genres]=\"serial.genres\"></app-serial-genres-list>\n    <app-serial-runtime [minutes]=\"serial.episode_run_time[0]\"></app-serial-runtime>\n\n    <p>\n      <app-length-text [text]=\"serial.overview\" [length]=\"100\"></app-length-text>\n    </p>\n\n\n    <p>\n      <app-serial-actions\n        *ngIf=\"isLoggedIn\"\n        [isWatching]=\"isWatching\"\n        [isArchived]=\"false\"\n        (onWatch)=\"watchSerial()\"\n        (onArchive)=\"archiveSerial()\"\n      ></app-serial-actions>\n      <md-card *ngIf=\"!isLoggedIn\">\n        <md-card-content>\n          <h3 class=\"vertical-centered-flex\">\n            <md-icon class=\"info-icon\">info_outlined</md-icon>\n            <span class=\"clickable\" (click)=\"login()\">Log in to track progress</span>\n          </h3>\n        </md-card-content>\n      </md-card>\n    </p>\n\n    <app-seasons-list [serialId]=\"serial.id\" [seasons]=\"serial.seasons\"></app-seasons-list>\n  </div>\n</div>\n"

/***/ }),

/***/ 1191:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ })

});
//# sourceMappingURL=1.bundle.map