webpackJsonp([0],{

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToraxContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__torax_content_details_torax_content_details__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToraxContentPage = (function () {
    function ToraxContentPage(navCtrl, navParams, http, translate, modalCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.platform = platform;
        this.items = [];
    }
    ToraxContentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToraxContent');
    };
    ToraxContentPage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit this.navParams', this.navParams);
        this.title = this.navParams.get('title');
        this.showReference = this.navParams.get('showReference');
        this.language = this.translate.currentLang;
        if (!this.language) {
            this.language = 'pt';
        }
        if (this.language != 'en' && this.language != 'pt' && this.language != 'es') {
            this.language = 'en';
        }
        this.getContent();
        this.translate.onLangChange.subscribe(function (event) {
            _this.getContent(event.lang);
        });
    };
    ToraxContentPage.prototype.getContent = function (lang) {
        var _this = this;
        if (lang === void 0) { lang = this.language; }
        this.http.get('assets/descriptions/' + lang + '/' + this.navParams.get('name') + '.json').subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            if (_this.platform.is('ios')) {
                for (var i = 0; i < _this.items.length; i++) {
                    if (_this.items[i].id == 'covid') {
                        _this.items.splice(i, 1);
                    }
                }
            }
        });
    };
    ToraxContentPage.prototype.openDetailsModal = function (item) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_0__torax_content_details_torax_content_details__["a" /* ToraxContentDetailsPage */], { item: item });
        profileModal.present();
    };
    return ToraxContentPage;
}());
ToraxContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-torax-content',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/torax-content/torax-content.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title text-center>{{ title | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <ion-list-header *ngFor="let item of items" (click)="openDetailsModal(item)">\n      {{ item.title }}\n      <ion-icon name="ios-arrow-forward" float-right></ion-icon>\n    </ion-list-header>\n  </ion-list>\n\n  <ion-footer *ngIf="showReference">\n    <ion-card class="reference">\n      <ion-card-content text-justify>\n          <b>{{ \'REFERENCE\' | translate}}:</b>\n          <a class="large" href="https://medcraveonline.com/IJRRT/chest-x-ray-tips-for-the-clinician.html">https://medcraveonline.com/IJRRT/chest-x-ray-tips-for-the-clinician.html</a>\n          <br/>\n          <span class="large">Ecclissato PCL, Dias DJL, Dias ASDS, et al. Chest x-ray: tips for the clinician. Int J Radiol Radiat Ther. 2019;6(5):179-184. DOI: 10.15406/ijrrt.2019.06.00243</span>\n      </ion-card-content>\n    </ion-card>\n  </ion-footer>\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/torax-content/torax-content.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */]])
], ToraxContentPage);

//# sourceMappingURL=torax-content.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbcdePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__abcde_details_abcde_details__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AbcdePage = (function () {
    function AbcdePage(navCtrl, navParams, translate, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.items = [];
    }
    AbcdePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbcdePage');
    };
    AbcdePage.prototype.ngOnInit = function () {
        var _this = this;
        console.log('ngOnInit AbcdePage', this.navParams);
        this.title = this.navParams.get('title');
        this.showReference = this.navParams.get('showReference');
        this.language = this.translate.currentLang;
        if (!this.language) {
            this.language = 'pt';
        }
        if (this.language != 'en' && this.language != 'pt' && this.language != 'es') {
            this.language = 'en';
        }
        this.http.get('assets/descriptions/' + this.language + '/' + this.navParams.get('name') + '.json').subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
        });
    };
    AbcdePage.prototype.openDetailsModal = function (item) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__abcde_details_abcde_details__["a" /* AbcdeDetailsPage */], { item: item });
        profileModal.present();
    };
    return AbcdePage;
}());
AbcdePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-abcde',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/abcde/abcde.html"*/'<ion-header>\n  \n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title text-center>{{ title | translate }}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content padding>\n    <div *ngFor="let item of items">\n      <p *ngIf="item.resume" text-justify padding [innerHtml]="item.resume"></p>\n    </div>\n      <ion-list>\n        <div *ngFor="let item of items">\n          <ion-item  *ngIf="item.label" (click)="openDetailsModal(item)" text-wrap>\n            <div [ngClass]="{\'button button-md button-default button-default-md button-md-primary button-inner\': item.id.indexOf(\'eccli\')>-1}">\n              <span [translate]="item.title" style="font-size:18px; font-weight: bold;"></span>\n              <span *ngIf="item.label && item.title">-</span>\n              <span *ngIf="item.label" [translate]="item.label" style="font-size:16px;"></span>\n            </div>\n            <p *ngIf="item.phrase" [translate]="item.phrase"></p>\n          </ion-item>\n      </div>\n      </ion-list>\n    <div *ngFor="let item of items">\n      <ion-card *ngIf="item.resumeReference" class="reference">\n        <ion-card-content text-justify>\n            <b>{{ \'REFERENCE\' | translate}}:</b> <span class="large" [innerHtml]="item.resumeReference"></span>\n        </ion-card-content>\n      </ion-card>\n    </div>\n\n    <ion-footer *ngIf="showReference">\n      <ion-card class="reference">\n        <ion-card-content text-justify>\n            <b>{{ \'REFERENCE\' | translate}}:</b>\n            <span class="large">\n              Duong M. et al. ABC’s of Chest X-rays. TSMJ Volume 2 2001: Clinical Medicine.\n            </span>\n        </ion-card-content>\n      </ion-card>\n    </ion-footer>\n    \n  </ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/abcde/abcde.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]])
], AbcdePage);

//# sourceMappingURL=abcde.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizPage = (function () {
    function QuizPage(navCtrl, navParams, http, translate, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.items = [];
        this.question = {};
        this.index = 0;
        this.total = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.finished = false;
    }
    QuizPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Quiz');
    };
    QuizPage.prototype.ngOnInit = function () {
        var _this = this;
        this.title = this.navParams.get('title');
        this.language = this.translate.currentLang;
        if (!this.language) {
            this.language = 'pt';
        }
        if (this.language != 'en' && this.language != 'pt' && this.language != 'es') {
            this.language = 'en';
        }
        this.getContent();
        this.translate.onLangChange.subscribe(function (event) {
            _this.getContent(event.lang);
        });
    };
    QuizPage.prototype.getContent = function (lang) {
        var _this = this;
        if (lang === void 0) { lang = this.language; }
        this.http.get('assets/descriptions/' + lang + '/' + this.navParams.get('name') + '.json').subscribe(function (data) {
            _this.items = JSON.parse(data['_body']);
            _this.question = _this.items[0];
            _this.total = _this.items.length;
        });
    };
    QuizPage.prototype.nextQuestion = function () {
        if (this.items[this.index].answers.indexOf(this.selectedAnswer) !== -1) {
            ++this.correctAnswers;
        }
        else {
            ++this.wrongAnswers;
        }
        this.index++;
        this.question = this.items[this.index];
        this.selectedAnswer = null;
    };
    QuizPage.prototype.finishQuiz = function () {
        if (this.items[this.index].answers.indexOf(this.selectedAnswer) !== -1) {
            ++this.correctAnswers;
        }
        else {
            ++this.wrongAnswers;
        }
        this.finished = true;
    };
    QuizPage.prototype.resetQuiz = function () {
        this.selectedAnswer = null;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.index = 0;
        this.finished = false;
        this.question = this.items[0];
    };
    return QuizPage;
}());
QuizPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-quiz',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/quiz/quiz.html"*/'<ion-header>\n\n  <ion-navbar secondary>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle style="visibility: hidden;">\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!finished">{{ title | translate }} - {{index+1}}/{{total}}</ion-title>\n    <ion-title *ngIf="finished">{{ title | translate }} - {{ \'RESULT\' | translate }}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="!finished" padding>\n  \n  <h5 text-justify>{{question.question}}</h5>\n  <img *ngIf="question.image"\n    width="100%" \n    height="auto" \n    src="{{question.image}}" \n    imageViewer />\n\n  <ion-list radio-group [(ngModel)]="selectedAnswer">\n      <ion-item \n        [class.correct-answer]="selectedAnswer && option.value === question.answers[0]"\n        [class.wrong-answer]="selectedAnswer === option.value && option.value !== question.answers[0]"\n        *ngFor="let option of question.options">\n        <ion-label text-justify>{{option.value}}) {{option.label}}</ion-label>\n        <ion-radio [disabled]="selectedAnswer!=null" value="{{option.value}}"></ion-radio>\n      </ion-item>\n    \n  </ion-list>\n\n  <p text-justify>{{question.caption}}</p>\n\n  <button ion-button \n    *ngIf="index < items.length-1"\n    [disabled]="!selectedAnswer" \n    (click)="nextQuestion()"\n    style="width: 100%;">\n    {{ \'NEXT\' | translate }}\n  </button>\n\n  <button ion-button \n    *ngIf="index == items.length-1"\n    [disabled]="!selectedAnswer" \n    (click)="finishQuiz()"\n    style="width: 100%;">\n    {{ \'FINISH_QUIZ\' | translate }}\n  </button>\n\n</ion-content>\n\n<ion-content class="results" *ngIf="finished" padding>\n  <ion-card>\n    <ion-card-content text-justify>\n      <div class="result-title-group">\n        <div class="result-title">{{ \'YOUR_SCORE\' | translate }}</div>\n        <div class="result-percentage">{{(correctAnswers/items.length)*100 | number:\'2.1-1\'}}%</div>\n      </div>\n      <ion-grid class="result-content">\n        <ion-row>\n          <ion-col>\n            <div>{{ \'CORRECT\' | translate }}</div>\n            <div class="correct">{{correctAnswers}}</div>\n          </ion-col>\n          <ion-col>\n            <div>{{ \'WRONG\' | translate }}</div>\n            <div class="wrong">{{wrongAnswers}}</div>\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="row">\n    <div style="margin: 10px; width: 100%">\n      <button ion-button \n        (click)="resetQuiz()" style="width: 100%">\n        {{ \'TRY_AGAIN_QUIZ\' | translate }}\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/quiz/quiz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], QuizPage);

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 175:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 175;

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbcdeDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbcdeDetailsPage = (function () {
    function AbcdeDetailsPage(navCtrl, navParams, translate, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.item = { content: [], summary: [] };
    }
    AbcdeDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AbcdePage');
    };
    AbcdeDetailsPage.prototype.ngOnInit = function () {
        this.item = this.navParams.get('item');
    };
    AbcdeDetailsPage.prototype.closeModal = function () {
        if (this.item.summary && this.slides.getActiveIndex() !== 0) {
            this.slides.slideTo(0);
        }
        else {
            this.navCtrl.pop();
        }
    };
    AbcdeDetailsPage.prototype.goToSlide = function (index) {
        this.slides.slideTo(index, 1);
    };
    AbcdeDetailsPage.prototype.getActiveSlide = function () {
        return this.slides.getActiveIndex() === this.item.content.length ? this.item.content.length - 1 : this.slides.getActiveIndex();
    };
    return AbcdeDetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* Slides */])
], AbcdeDetailsPage.prototype, "slides", void 0);
AbcdeDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-abcde-details',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/abcde/abcde-details/abcde-details.html"*/'<!--\n  Generated template for the AnatomyToraxDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n      <ion-buttons start>\n        <button (click)="closeModal()" ion-button icon-only>\n          <ion-icon name="arrow-back"></ion-icon>\n        </button>\n      </ion-buttons>\n      <ion-title>{{item.title}} {{item.title ? \'-\' : \'\'}} {{item.label}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-slides pager>\n    <ion-slide *ngIf="item.summary" >\n      <div class="slide-content slide-content-summary" >\n        <div class="content-image">\n          <img *ngIf="item.summary.image"\n            width="100%" \n            height="100%" \n            src="{{item.summary.image}}" \n            imageViewer />\n        </div>\n        <div *ngFor="let column of item.summary.columns">\n          <span>{{column.title}}</span>\n          <button color="{{item.color}}" ion-button class="summary-button" (click)="goToSlide(item.slide)" *ngFor="let item of column.items;">\n            {{item.title}}\n          </button>\n          <br>\n          <br>\n        </div>\n      </div>\n    </ion-slide>\n      <ion-slide *ngFor="let content of item.content">\n        <div class="slide-content" >\n          <h3 class="title-detail">{{content.title}}</h3>\n          <br *ngIf="content.title">\n          <div class="content-image" *ngFor="let image of content.image">\n            <img *ngIf="image.url"\n              width="100%" \n              height="100%" \n              src="{{image.url}}" \n              imageViewer />\n            <ion-card>\n              <ion-card-content *ngIf="image.subtitle" text-justify>\n                <b>{{ \'SUBTITLE\' | translate}}:</b> {{image.subtitle}}\n              </ion-card-content>\n            </ion-card>\n          </div>\n          <ion-card \n            *ngIf="content.description.length > 0"\n            class="step-by-step">\n            <ion-card-content text-justify>\n              <div *ngFor="let desc of content.description">\n                <li><span class="large" [innerHtml]="desc"></span></li>\n              </div>\n            </ion-card-content>\n          </ion-card>\n          <ion-card class="studyKey" *ngFor="let studyKey of content.studyKeys">\n            <ion-card-content text-justify>\n                <b>{{ \'STUDY_KEY\' | translate}}:</b> {{studyKey}}\n            </ion-card-content>\n          </ion-card>\n          <ion-card class="reference" *ngFor="let reference of content.reference">\n            <ion-card-content text-justify>\n                <b>{{ \'REFERENCE\' | translate}}:</b> {{reference}}\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    <!--div *ngFor="let content of item.content">\n      <ion-card>  \n      <img *ngFor="let image of content.image"\n          width="100%" \n          height="100%" \n          src="{{image}}" \n          imageViewer />\n\n          <div *ngFor="let desc of content.description">\n            <hr/>\n            <span text-justify float-left>{{desc}}</span>\n          </div>\n          <div *ngFor="let studyKey of content.studyKeys">\n            <hr/>\n            <span class="studyKey" text-justify float-left>\n              <b>Chaves de estudo:</b>\n              {{studyKey}}\n            </span>\n          </div>\n        </ion-card>\n        </div-->\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/abcde/abcde-details/abcde-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ModalController */]])
], AbcdeDetailsPage);

//# sourceMappingURL=abcde-details.js.map

/***/ }),

/***/ 236:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 236;

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToraxContentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__ = __webpack_require__(129);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AnatomyToraxDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ToraxContentDetailsPage = ToraxContentDetailsPage_1 = (function () {
    function ToraxContentDetailsPage(navCtrl, navParams, http, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.modalCtrl = modalCtrl;
        this.item = { content: [], summary: [] };
        this.item = this.navParams.get('item');
    }
    ToraxContentDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ToraxContentDetailsPage');
    };
    ToraxContentDetailsPage.prototype.closeModal = function () {
        if (this.item.summary && this.slides.getActiveIndex() !== 0) {
            this.slides.slideTo(0);
        }
        else {
            this.navCtrl.pop();
        }
    };
    ToraxContentDetailsPage.prototype.goToSlide = function (index) {
        this.slides.slideTo(index, 1);
    };
    ToraxContentDetailsPage.prototype.getActiveSlide = function () {
        return this.slides.getActiveIndex() === this.item.content.length ? this.item.content.length - 1 : this.slides.getActiveIndex();
    };
    ToraxContentDetailsPage.prototype.openLinkedTo = function (linkedTo) {
        var _this = this;
        console.log('openLinkedTo, linkedTo:', linkedTo);
        if (linkedTo) {
            this.http.get(linkedTo.url).subscribe(function (data) {
                var jsonResponse = JSON.parse(data['_body']);
                for (var _i = 0, jsonResponse_1 = jsonResponse; _i < jsonResponse_1.length; _i++) {
                    var item = jsonResponse_1[_i];
                    if (item.id == linkedTo.id) {
                        var profileModal = _this.modalCtrl.create(ToraxContentDetailsPage_1, { item: item });
                        profileModal.present();
                    }
                }
            });
        }
    };
    return ToraxContentDetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* Slides */])
], ToraxContentDetailsPage.prototype, "slides", void 0);
ToraxContentDetailsPage = ToraxContentDetailsPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-torax-content-details',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/torax-content/torax-content-details/torax-content-details.html"*/'<!--\n  Generated template for the AnatomyToraxDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-buttons start>\n          <button (click)="closeModal()" ion-button icon-only>\n            <ion-icon name="arrow-back"></ion-icon>\n          </button>\n        </ion-buttons>\n        <ion-title>{{item.title}}</ion-title>\n      </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-slides [pager]="item.content.length > 1">\n      <ion-slide *ngIf="item.summary" >\n        <div class="slide-content slide-content-summary" >\n          <div *ngFor="let column of item.summary.columns">\n            <span>{{column.title}}</span>\n            <button ion-button class="summary-button" (click)="goToSlide(item.slide)" *ngFor="let item of column.items;">\n              {{item.title}}\n            </button>\n            <br>\n            <br>\n          </div>\n        </div>\n      </ion-slide>\n        \n      <ion-slide *ngFor="let content of item.content">\n        <div class="slide-content" >\n          <h3 class="title">{{content.title}}</h3>\n          <br *ngIf="content.title">\n          <div class="content-image" *ngFor="let image of content.image">\n            <img *ngIf="image.url"\n              width="100%" \n              height="100%" \n              src="{{image.url}}" \n              imageViewer />\n            <ion-card>\n              <ion-card-content *ngIf="image.subtitle" text-justify>\n                <b>{{ \'SUBTITLE\' | translate}}:</b>\n                <span class="large" [innerHtml]="image.subtitle"></span>\n              </ion-card-content>\n            </ion-card>\n          </div>\n          <ion-card class="report" *ngIf="content.report">\n            <ion-card-content text-justify>\n              <span\n                [attr.data-index]="i"\n                *ngFor="let desc of content.report let i = index"\n                class="large"\n                [innerHtml]="desc"\n              ></span>\n            </ion-card-content>\n          </ion-card>\n          <ion-card \n            (click)="openLinkedTo(content.linkedTo)"\n            class="observation"\n            *ngFor="let desc of content.description let i = index" \n            [attr.data-index]="i">\n            <ion-card-content text-justify>\n              <b>{{ \'COMMENT\' | translate}}{{(content.description.length === 1 ? \'\' : \' \'+(i+1))}}:</b>\n              <span class="large" [innerHtml]="desc"></span>\n            </ion-card-content>\n          </ion-card>\n          <ion-card \n            (click)="openLinkedTo(content.linkedTo)"\n            class="observation"\n            *ngFor="let desc of content.findings let i = index" \n            [attr.data-index]="i">\n            <ion-card-content text-justify>\n              <b>{{ \'FINDINGS\' | translate}}{{(content.findings.length === 1 ? \'\' : \' \'+(i+1))}}:</b>\n              <span class="large" [innerHtml]="desc"></span>\n            </ion-card-content>\n          </ion-card>\n          <ion-card class="studyKey" *ngFor="let studyKey of content.studyKeys"\n            (click)="openLinkedTo(content.linkedTo)">\n            <ion-card-content text-justify>\n                <b>{{ \'STUDY_KEY\' | translate}}:</b>\n                <span class="large" [innerHtml]="studyKey"></span>\n            </ion-card-content>\n          </ion-card>\n          <ion-card class="reference" *ngFor="let reference of content.reference">\n            <ion-card-content text-justify>\n                <b>{{ \'REFERENCE\' | translate}}:</b>\n                <span class="large" [innerHtml]="reference"></span>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-slide>\n    </ion-slides>\n    \n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/torax-content/torax-content-details/torax-content-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_modal_modal_controller__["a" /* ModalController */]])
], ToraxContentDetailsPage);

var ToraxContentDetailsPage_1;
//# sourceMappingURL=torax-content-details.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__abcde_abcde__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.mainPages = [
            { title: 'TITLE_ANATOMY_TORAX', name: 'anatomy-torax', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_ANATOMY_RADIOLOGY', name: 'anatomy-radiological', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_POSITIONS', name: 'positions-radiological', color: 'primary', component: __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_TOMOGRAFY', name: 'tomografy', component: __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_PATHOLOGIES_FINDINGS', name: 'pathologies-findings', component: __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_STANDARD_REPORT', name: 'standard-report', component: __WEBPACK_IMPORTED_MODULE_2__torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
        ];
        this.methodsPages = [
            //{ title: 'TITLE_ABCDE', name: 'abcde-method', color: 'secondary', component: AbcdePage },
            { title: 'TITLE_ABCDEFGH', name: 'abcdefgh-method', color: 'secondary', component: __WEBPACK_IMPORTED_MODULE_3__abcde_abcde__["a" /* AbcdePage */], showReference: true },
            { title: 'TITLE_ECLISSATO', name: 'ecclissato-method', color: 'secondary', component: __WEBPACK_IMPORTED_MODULE_3__abcde_abcde__["a" /* AbcdePage */] },
        ];
        this.otherPages = [
            { title: 'QUIZ_1', name: 'quiz', color: 'tertiary', component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_2', name: 'quiz-2', color: 'tertiary', component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_3', name: 'quiz-3', color: 'tertiary', component: __WEBPACK_IMPORTED_MODULE_4__quiz_quiz__["a" /* QuizPage */] },
        ];
    }
    HomePage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component, { name: page.name, title: page.title, showReference: page.showReference });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar secondary>\n    <ion-title>\n      {{ \'APP_NAME\' | translate }}\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div style="margin: 0 auto; width: 48%" text-center>\n    <img src="assets/icon/icon.png"/>\n  </div>\n  \n  <h5 [translate]="\'MAIN\'" text-center></h5>\n\n  <button ion-button *ngFor="let page of mainPages" \n    (click)="openPage(page)"\n    color="{{page.color}}"\n    icon-only\n    style="width: 84%; margin-left: 8%; margin-right: 8%; font-size: 12px">\n    <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n    <span style="font-size: 15px" [translate]="page.title"></span>\n  </button>\n\n  <br/>\n  <h5 [translate]="\'METHODS\'" text-center></h5>\n\n  <button ion-button *ngFor="let page of methodsPages" \n    (click)="openPage(page)"\n    color="{{page.color}}"\n    icon-only\n    style="width: 84%; margin-left: 8%; margin-right: 8%; font-size: 12px">\n    <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n    <span style="font-size: 15px" [translate]="page.title"></span>\n  </button>\n\n  <br/>\n  <h5 [translate]="\'TITLE_QUIZ\'" text-center></h5>\n  \n  <button ion-button *ngFor="let page of otherPages" \n    (click)="openPage(page)"\n    color="{{page.color}}"\n    icon-only\n    style="width: 84%; margin-left: 8%; margin-right: 8%; font-size: 12px">\n    <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n    <span style="font-size: 15px" [translate]="page.title"></span>\n  </button>\n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
    };
    AboutPage.prototype.ngOnInit = function () {
        this.descriptions = [
            'Greulich WW, Pyle SI. Radiographics atlas of skeletal development of the hand and wrist. 2nd ed. Stanford: Stanford University Press, 1959.',
            'Werlang HZ, et al. Manual do residente de radiologia. 2ª ed. Rio de Janeiro: Guanabara Koogan, 2015.',
            'Gilsanz V, Ratib O. A digital atlas of skeletal maturity. Springer-Verlag Berlin Heidelberg, 2005. '
        ];
    };
    return AboutPage;
}());
AboutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'REFERENCES_AND_CONTACT\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding text-justify>\n    <h5>\n      {{ \'REFERENCES\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'REFERENCES_DESCRIPTION\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'CONTACT_TITLE\' | translate }}\n    </h5>\n    <br/>\n    <b>{{ \'CONTACT_NAME\' | translate }}</b>\n    <br/><br/>\n    <i>\n      {{ \'CONTACT_DESCRIPTION\' | translate }}\n      <br/>\n      <br/>\n    </i>\n    <ion-row>\n      <ion-col col-12>{{ \'CONTACT_EMAIL\' | translate }}</ion-col>\n    </ion-row>\n    \n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'ACKNOWLEDGMENT\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'ACKNOWLEDGMENT_DESCRIPTION\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'THANKS\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'THANKS_DESCRIPTION\' | translate }}\n      <br/>\n      <br/>\n    </i>\n    <i>\n      {{ \'THANKS_DESCRIPTION_2\' | translate }}\n      <br/>\n      <br/>\n    </i>\n    <i>\n      {{ \'THANKS_DESCRIPTION_3\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'ILLUSTRATIONS\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'ILLUSTRATIONS_DESCRIPTION\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <br/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TermsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsPage = (function () {
    function TermsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TermsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsPage');
    };
    return TermsPage;
}());
TermsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/terms/terms.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'TERMS\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div padding text-justify>\n      {{ \'TERMS_CONTENT\' | translate }}\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'DISCLAIMER\' | translate }}\n    </h5>\n    <br/>\n    <p>{{ \'DISCLAIMER_CONTENT_1\' | translate }}</p>\n    <p>{{ \'DISCLAIMER_CONTENT_2\' | translate }}</p>\n    <p>{{ \'DISCLAIMER_CONTENT_3\' | translate }}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DeveloperPage = (function () {
    function DeveloperPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DeveloperPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DeveloperPage');
    };
    DeveloperPage.prototype.ngOnInit = function () {
    };
    return DeveloperPage;
}());
DeveloperPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-developer',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/developer/developer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'DEVELOPER\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding text-justify>\n    <h5>\n      {{ \'DEVELOPER_TITLE\' | translate }}\n    </h5>\n    <br/>\n    <b>{{ \'DEVELOPER_NAME\' | translate }}</b>\n    <br/><br/>\n    <i>\n      {{ \'DEVELOPER_DESCRIPTION\' | translate }}\n      <br/>\n      <br/>\n      {{ \'DEVELOPER_DESCRIPTION_2\' | translate }}\n      <br/><br/>\n    </i>\n    <br/>\n    <span>{{ \'DEVELOPER_EMAIL\' | translate }}</span>\n    <br/>\n    <br/>\n    <span>{{ \'DEVELOPER_WEBSITE\' | translate }}</span>\n    <br/>\n    <br/>\n    <br/>\n    <img src="./assets/images/contact/bitflip.png"/>\n    \n  </div>\n\n  <br/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/developer/developer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], DeveloperPage);

//# sourceMappingURL=developer.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(384);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_abcde_abcde_details_abcde_details__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_torax_content_torax_content_details_torax_content_details__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_rate__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_home_home__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_torax_content_torax_content__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_abcde_abcde__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_abcdefgh_abcdefgh__ = __webpack_require__(701);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_eclissato_eclissato__ = __webpack_require__(702);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_quiz_quiz__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_description_description__ = __webpack_require__(703);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_about_about__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_developer_developer__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser_ngx__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_safari_view_controller__ = __webpack_require__(371);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_10__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_torax_content_torax_content__["a" /* ToraxContentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_abcde_abcde__["a" /* AbcdePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_abcdefgh_abcdefgh__["a" /* AbcdefghPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_eclissato_eclissato__["a" /* EclissatoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_description_description__["a" /* DescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_developer_developer__["a" /* DeveloperPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_torax_content_torax_content_details_torax_content_details__["a" /* ToraxContentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_abcde_abcde_details_abcde_details__["a" /* AbcdeDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_quiz_quiz__["a" /* QuizPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_9__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {
                platforms: {
                    ios: {
                        statusbarPadding: false,
                        tabsHideOnSubPages: false
                    }
                }
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_23_ionic_img_viewer__["b" /* IonicImageViewerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["i" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_13__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_torax_content_torax_content__["a" /* ToraxContentPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_abcde_abcde__["a" /* AbcdePage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_abcdefgh_abcdefgh__["a" /* AbcdefghPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_eclissato_eclissato__["a" /* EclissatoPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_description_description__["a" /* DescriptionPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_developer_developer__["a" /* DeveloperPage */],
            __WEBPACK_IMPORTED_MODULE_1__pages_torax_content_torax_content_details_torax_content_details__["a" /* ToraxContentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_0__pages_abcde_abcde_details_abcde_details__["a" /* AbcdeDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_quiz_quiz__["a" /* QuizPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_safari_view_controller__["a" /* SafariViewController */],
            { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_app_rate__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_about_about__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_developer_developer__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_abcde_abcde__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_quiz_quiz__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, translate, appRate, inAppBrowser, safariViewController) {
        var _this = this;
        this.translate = translate;
        this.appRate = appRate;
        this.inAppBrowser = inAppBrowser;
        this.safariViewController = safariViewController;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */];
        this.isPlatformIOS = false;
        this.linkIOS = 'http://bitflip.com.br/diego-jordao/';
        // linkIOS: string = 'https://apps.apple.com/br/developer/diego-dias/id1296654434';
        // linkIOS: string = 'itms-apps://itunes.apple.com/developer/id463855590';
        // linkIOS: string = "https://apps.apple.com/br/app/diax-idade-ossea/id1296654435";
        this.linkAndroid = "https://play.google.com/store/apps/collection/cluster?clp=igNAChkKEzY3NjY5MzY2NDU2MjUzOTM0MjkQCBgDEiEKG2JyLm1lZC5kaWVnb2pvcmRhby50b3JheFBybxABGAMYAQ%3D%3D:S:ANO1ljJ1IDM&gsr=CkOKA0AKGQoTNjc2NjkzNjY0NTYyNTM5MzQyORAIGAMSIQobYnIubWVkLmRpZWdvam9yZGFvLnRvcmF4UHJvEAEYAxgB:S:ANO1ljI3cUA";
        this.isPlatformIOS = platform.is('ios');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            statusBar.hide();
            statusBar.overlaysWebView(false);
            splashScreen.hide();
            var language = window.localStorage.getItem('language');
            if (language) {
                translate.setDefaultLang(language);
            }
            else {
                translate.setDefaultLang('pt');
                if (translate.getBrowserLang() !== undefined) {
                    translate.use(translate.getBrowserLang());
                }
                else {
                    translate.use('en'); // Set your fallback language here
                }
            }
            if (platform.is('cordova')) {
                _this.appRate.preferences.usesUntilPrompt = 5;
                _this.appRate.preferences.useLanguage = translate.getDefaultLang();
                _this.appRate.preferences.storeAppURL = {
                    ios: '1296654435',
                    android: 'market://details?id=br.med.diegojordao.idadeOssea'
                };
                _this.appRate.promptForRating(false);
            }
        });
        this.homePages = [
            { title: 'HOME', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */] },
        ];
        this.mainPages = [
            { title: 'TITLE_ANATOMY_TORAX', name: 'anatomy-torax', component: __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_ANATOMY_RADIOLOGY', name: 'anatomy-radiological', component: __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_POSITIONS', name: 'positions-radiological', component: __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_TOMOGRAFY', name: 'tomografy', component: __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_PATHOLOGIES_FINDINGS', name: 'pathologies-findings', component: __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
            { title: 'TITLE_STANDARD_REPORT', name: 'standard-report', component: __WEBPACK_IMPORTED_MODULE_12__pages_torax_content_torax_content__["a" /* ToraxContentPage */], showReference: true },
        ];
        this.methodsPages = [
            //{ title: 'TITLE_ABCDE', name:'abcde-method', component: AbcdePage },
            { title: 'TITLE_ABCDEFGH', name: 'abcdefgh-method', component: __WEBPACK_IMPORTED_MODULE_13__pages_abcde_abcde__["a" /* AbcdePage */], showReference: true },
            { title: 'TITLE_ECLISSATO', name: 'ecclissato-method', component: __WEBPACK_IMPORTED_MODULE_13__pages_abcde_abcde__["a" /* AbcdePage */] },
        ];
        this.helperPages = [
            { title: 'CONTACT', icon: 'md-chatboxes', component: __WEBPACK_IMPORTED_MODULE_9__pages_about_about__["a" /* AboutPage */] },
            { title: 'TERMS', icon: 'md-document', component: __WEBPACK_IMPORTED_MODULE_10__pages_terms_terms__["a" /* TermsPage */] },
            { title: 'DEVELOPER', icon: 'md-bulb', component: __WEBPACK_IMPORTED_MODULE_11__pages_developer_developer__["a" /* DeveloperPage */] }
        ];
        this.otherPages = [
            { title: 'QUIZ_1', name: 'quiz', component: __WEBPACK_IMPORTED_MODULE_14__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_2', name: 'quiz-2', component: __WEBPACK_IMPORTED_MODULE_14__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_3', name: 'quiz-3', component: __WEBPACK_IMPORTED_MODULE_14__pages_quiz_quiz__["a" /* QuizPage */] }
        ];
        this.languages = [
            {
                title: 'LANGUAGE_PT',
                file: 'pt',
                image: './assets/icon/icon-pt.png'
            },
            {
                title: 'LANGUAGE_EN',
                file: 'en',
                image: './assets/icon/icon-en.png'
            },
            {
                title: 'LANGUAGE_ES',
                file: 'es',
                image: './assets/icon/icon-es.png'
            }
        ];
    }
    MyApp.prototype.getLink = function () {
        console.log('getLink, isPlatformIOS:', this.isPlatformIOS);
        if (!this.isPlatformIOS) {
            return this.linkAndroid;
        }
        return this.linkIOS;
    };
    MyApp.prototype.redirect = function () {
        if (this.isPlatformIOS) {
            console.log('redirectIos');
            this.openSafari();
        }
        else {
            console.log('redirectElse');
            this.openInAppBrowser();
        }
    };
    MyApp.prototype.openInAppBrowser = function () {
        this.inAppBrowser.create(this.getLink());
    };
    MyApp.prototype.openSafari = function () {
        var _this = this;
        this.safariViewController.isAvailable()
            .then(function (available) {
            if (available) {
                _this.safariViewController.show({
                    url: _this.linkIOS,
                    hidden: false,
                    animated: false,
                    transition: 'curl',
                    enterReaderModeIfAvailable: true,
                    tintColor: '#ff0000'
                })
                    .subscribe(function (result) {
                    if (result.event === 'opened')
                        console.log('Opened');
                    else if (result.event === 'loaded')
                        console.log('Loaded');
                    else if (result.event === 'closed')
                        console.log('Closed');
                }, function (error) { return console.error(error); });
            }
            else {
                _this.openInAppBrowser();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component, { title: page.title, name: page.name, showReference: page.showReference });
    };
    MyApp.prototype.onChangeLanguage = function (language) {
        this.translate.use(language);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{ \'MENU\' | translate }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let page of homePages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header id="header-main">\n        <b>{{\'MAIN\' | translate}}</b>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of mainPages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n    \n    <ion-list>\n      <ion-list-header id="header-methods">\n        <b>{{\'METHODS\' | translate}}</b>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of methodsPages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header id="header-methods">\n        <b>{{\'TITLE_QUIZ\' | translate}}</b>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of otherPages" (click)="openPage(page)">\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n\n    <ion-list id="languages">\n      <ion-list-header>{{ \'MENU_LANGUAGES\' | translate }}</ion-list-header>\n      <ion-item detail *ngFor="let language of languages; let i = index" (click)="onChangeLanguage(language.file)">\n          <ion-label>\n              <img [src]="language.image" />\n              {{ language.title | translate }}\n          </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <br/>\n    \n    <ion-list>\n     <ion-list-header id="header-about">\n      <b>{{\'ABOUT\' | translate}}</b>\n     </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of helperPages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n      <a menuClose ion-item (click)="redirect()">\n        <ion-icon name="md-apps"></ion-icon>\n        <span [translate]="\'OTHER_APPS\'"></span>\n      </a>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_app_rate__["a" /* AppRate */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__["a" /* SafariViewController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbcdefghPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AbcdefghPage = (function () {
    function AbcdefghPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.items = [
            { title: 'A', label: 'Assessment of quality / Airway', descriptions: [] },
            { title: 'B', label: 'Bones and soft tissues', descriptions: [] },
            { title: 'C', label: 'Cardiac', descriptions: [] },
            { title: 'D', label: 'Diaphragm', descriptions: [] },
            { title: 'E', label: 'Effusions / Extrathoracic soft tissue', descriptions: [] },
            { title: 'F', label: 'Fields, fissures and foreign bodies', descriptions: [] },
            { title: 'G', label: 'Great vessels / Gastric bubble', descriptions: [] },
            { title: 'H', label: 'Hila and mediastinum', descriptions: [] },
        ];
    }
    AbcdefghPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Abcdefgh');
    };
    AbcdefghPage.prototype.ngOnInit = function () {
    };
    return AbcdefghPage;
}());
AbcdefghPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-abcdefgh',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/abcdefgh/abcdefgh.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'TITLE_ABCDEFGH\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item of items" text-wrap>\n      <div>\n        <span [translate]="item.title" style="font-size:22px; font-weight: bold;"></span>\n        <span *ngIf="item.label">-</span>\n        <span *ngIf="item.label" [translate]="item.label" style="font-size:20px;"></span>\n      </div>\n      <p *ngIf="item.frase" [translate]="item.frase"></p>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/abcdefgh/abcdefgh.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], AbcdefghPage);

//# sourceMappingURL=abcdefgh.js.map

/***/ }),

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EclissatoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EclissatoPage = EclissatoPage_1 = (function () {
    function EclissatoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { title: 'ECLISATO_BUTTON_AVALIACAO', component: EclissatoPage_1 },
        ];
        this.aboutDrEclissato = [
            '• Graduado em 1975 pela Faculdade: Fundação Municipal de Ensino Superior de Marília.',
            '• Docente da Fundação Municipal de Ensino Superior de Marília desde 1990.',
            '• Título de especialista em Radiologia e Diagnóstico por Imagem.',
            '• Membro Titular do Colégio Brasileiro de Radiologia e Sociedade Paulista de Radiologia.',
            '• Áreas de atuação: Radiologia Geral e Contrastada, Ultrassonografia geral, Mamografia e Biópsias de Mama e Próstata (intervencionista)',
        ];
    }
    EclissatoPage.prototype.openPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    EclissatoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Eclissato');
    };
    EclissatoPage.prototype.ngOnInit = function () {
    };
    return EclissatoPage;
}());
EclissatoPage = EclissatoPage_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-eclissato',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/eclissato/eclissato.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'TITLE_ECLISSATO\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <p text-justify padding>{{\'ECLISATO_ABOUT\' | translate}}</p>\n\n  <br/>\n\n  <button ion-button *ngFor="let page of pages" \n    (click)="openPage(page)"\n    color="secondary"\n    icon-only\n    style="width: 84%; margin-left: 8%; margin-right: 8%; font-size: 12px">\n    <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n    <span style="font-size: 15px" [translate]="page.title"></span>\n  </button>\n\n  <br/>\n  <br/>\n\n  <p [translate]="\'REFERENCES\'"></p>\n\n  <ul *ngFor="let item of aboutDrEclissato" padding-right>\n    <li>{{item}}</li>\n  </ul>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/eclissato/eclissato.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], EclissatoPage);

var EclissatoPage_1;
//# sourceMappingURL=eclissato.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DescriptionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__ = __webpack_require__(376);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DescriptionPage = (function () {
    function DescriptionPage(navCtrl, navParams, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imageViewerCtrl = imageViewerCtrl;
        this._imageViewerCtrl = imageViewerCtrl;
    }
    DescriptionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DescriptionPage');
    };
    DescriptionPage.prototype.ngOnInit = function () {
        this.title = this.navParams.get('title');
        this.descriptions = this.navParams.get('descriptions');
        this.image = this.navParams.get('image');
    };
    DescriptionPage.prototype.presentImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    return DescriptionPage;
}());
DescriptionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-description',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/description/description.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n    <div *ngIf="image"\n      style="background-color: black; display: inline-block; overflow: hidden; width: 100%">\n      <img \n      #myImage (click)="presentImage(myImage)" \n      style="width: 100%; display: block; margin: auto; max-width: 80%" src="{{image}}"/>\n    </div>\n\n    <ul *ngFor="let item of descriptions" padding-right>\n      <li>{{item}}</li>\n      <br/>\n    </ul>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/torax-ionic/src/pages/description/description.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_img_viewer__["a" /* ImageViewerController */]])
], DescriptionPage);

//# sourceMappingURL=description.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map