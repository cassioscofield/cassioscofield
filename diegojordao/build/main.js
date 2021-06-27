webpackJsonp([0],{

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_menu_controller__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__ = __webpack_require__(161);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.nav = navCtrl;
        _this.categoryQuizes = [
            { title: 'QUIZ_TORAX', name: 'torax', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_ABDOMEN', name: 'abdome', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_PELVE_PERINEO', name: 'pelve', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_DORSO', name: 'dorso', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_MEMBRO_INFERIOR', name: 'inferior', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_MEMBRO_SUPERIOR', name: 'superior', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_CABECA', name: 'cabeca', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_PESCOCO', name: 'pescoco', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_NERVOS_CARNIANOS', name: 'nervos', icon: _this.getIconByUserType(), color: _this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
        ];
        _this.freeQuizes = [
            { title: 'QUIZ_MIX_1', name: 'mix-1', icon: __WEBPACK_IMPORTED_MODULE_2__app_menu_controller__["a" /* MenuController */].UNLOCK_ICON, color: __WEBPACK_IMPORTED_MODULE_2__app_menu_controller__["a" /* MenuController */].UNLOCK_COLOR, component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_MIX_2', name: 'mix-2', icon: __WEBPACK_IMPORTED_MODULE_2__app_menu_controller__["a" /* MenuController */].UNLOCK_ICON, color: __WEBPACK_IMPORTED_MODULE_2__app_menu_controller__["a" /* MenuController */].UNLOCK_COLOR, component: __WEBPACK_IMPORTED_MODULE_3__quiz_quiz__["a" /* QuizPage */] }
        ];
        return _this;
    }
    HomePage.prototype.openPage = function (page) {
        this.openPageWithNav(page, this.nav);
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__app_menu_controller__["a" /* MenuController */]));
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar secondary>\n    <ion-title>\n      DIAX - AnatoQuiz\n    </ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <div style="margin: 0 auto; width: 50%" text-center>\n    <img src="assets/icon/icon.png"/>\n  </div>\n\n  <h5 [translate]="\'TITLE_FREE\'" text-center></h5>\n  \n  <hr/>\n\n  <ion-row>\n    <ion-col *ngFor="let page of freeQuizes" (click)="openPage(page)"\n      text-center>\n      <button ion-button\n        color="{{page.color}}"\n        icon-only\n        class="level-button">\n        <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n      </button>\n      <br/>\n      <span class="level-label" [translate]="page.title"></span>\n    </ion-col>\n  </ion-row>\n  \n  <br/>\n  <h5 [translate]="\'TITLE_CATEGORIES\'" text-center></h5>\n  \n  <hr/>\n\n  <ion-row>\n    <ion-col\n      *ngFor="let page of categoryQuizes.slice(0, 3);"\n      (click)="openPage(page)"\n      text-center>\n      <button ion-button\n        color="{{page.color}}"\n        icon-only\n        class="level-button">\n        <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n      </button>\n      <br/>\n      <span class="level-label" [translate]="page.title"></span>\n    </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n    <ion-col\n      *ngFor="let page of categoryQuizes.slice(3, 6);"\n      (click)="openPage(page)"\n      text-center>\n      <button ion-button\n        color="{{page.color}}"\n        icon-only\n        class="level-button">\n        <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n      </button>\n      <br/>\n      <span class="level-label" [translate]="page.title"></span>\n    </ion-col>\n  </ion-row>\n  <br/>\n  <ion-row>\n    <ion-col\n      *ngFor="let page of categoryQuizes.slice(6);"\n      (click)="openPage(page)"\n      text-center>\n      <button ion-button\n        color="{{page.color}}"\n        icon-only\n        class="level-button">\n        <ion-icon name="{{page.icon}}" *ngIf="page.icon"></ion-icon>\n      </button>\n      <br/>\n      <span class="level-label" [translate]="page.title"></span>\n    </ion-col>\n  </ion-row>\n    \n  <br/>\n  \n  \n</ion-content>\n\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IAPController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var IAPController = (function () {
    function IAPController(store, toastController, translate) {
        this.store = store;
        this.toastController = toastController;
        this.translate = translate;
        this.store = store;
        this.toastController = toastController;
    }
    IAPController.prototype.setUserType = function (userType) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('iapController.setUserType', userType);
                        IAPController.userType = userType;
                        IAPController.userChangedObserver.next(userType);
                        return [4 /*yield*/, this.toastController.create({
                                message: this.translate.instant('PURCHASE_SUCCESS'),
                                duration: 2000,
                                closeButtonText: 'x',
                                showCloseButton: true
                            })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    IAPController.prototype.getUserType = function () {
        return IAPController.userType;
    };
    IAPController.prototype.order = function () {
        console.log('order.product', IAPController.product);
        this.store.order(IAPController.PRODUCT_ID);
    };
    IAPController.prototype.isStoreEnabled = function (isCordovaAvailable) {
        console.log('isStoreEnabled.store', this.store, 'isCordovaAvailable', isCordovaAvailable);
        return this.store && isCordovaAvailable;
    };
    IAPController.prototype.iapSetup = function () {
        // this.store.verbosity = this.store.DEBUG;
        this.store.register({
            id: IAPController.PRODUCT_ID,
            alias: IAPController.PRODUCT_ID,
            type: this.store.NON_CONSUMABLE,
        });
        this.store.get(IAPController.PRODUCT_ID);
        this.registerHandlersForPurchase(IAPController.PRODUCT_ID);
        // restore purchase
        this.store.refresh();
    };
    IAPController.prototype.registerHandlersForPurchase = function (productId) {
        var self = this.store;
        this.store.when(productId).updated(function (product) {
            console.log("updated " + JSON.stringify(product));
            if (product && product.price) {
                IAPController.product = product;
            }
            if (product && product.state === self.OWNED) {
                IAPController.userType = IAPController.USER_TYPE_PREMIUM;
            }
            if (product.loaded && product.valid && product.state === self.APPROVED && product.transaction != null) {
                product.finish();
            }
        });
        this.store.when(productId).registered(function (product) {
            IAPController.userType = IAPController.USER_TYPE_PREMIUM;
            console.log("registered " + product.owned);
        });
        this.store.when(productId).owned(function (product) {
            console.log("owned " + product.owned);
            IAPController.userType = IAPController.USER_TYPE_PREMIUM;
            product.finish();
        });
        this.store.when(productId).approved(function (product) {
            IAPController.userType = IAPController.USER_TYPE_PREMIUM;
            console.log('approved', product);
            product.finish();
        });
        this.store.when(productId).refunded(function (product) {
            IAPController.userType = IAPController.USER_TYPE_FREE;
            console.log('refunded', product);
        });
        this.store.when(productId).expired(function (product) {
            IAPController.userType = IAPController.USER_TYPE_FREE;
            console.log('expired', product);
        });
    };
    return IAPController;
}());

IAPController.PRODUCT_ID = 'premium';
IAPController.USER_TYPE_FREE = 'free';
IAPController.USER_TYPE_PREMIUM = 'premium';
IAPController.PREMIUM_PRICE = 'R$0.99';
IAPController.userType = IAPController.USER_TYPE_FREE;
IAPController.userChangedObserver = new __WEBPACK_IMPORTED_MODULE_0_rxjs__["BehaviorSubject"](null);
//# sourceMappingURL=iap.controller.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuizPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MAX_TIME = 30;
var LAST_SECONDS = 3;
var NOT_ANSWERED = 'x';
var QuizPage = (function () {
    function QuizPage(navCtrl, navParams, http, translate, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.items = [];
        this.index = 0;
        this.total = 0;
        this.correctAnswers = 0;
        this.wrongAnswers = 0;
        this.notAnswered = 0;
        this.finished = false;
        this.remainingTime = MAX_TIME;
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
        this.setupTimer();
        this.getContent();
        this.translate.onLangChange.subscribe(function (event) {
            _this.getContent(event.lang);
        });
    };
    QuizPage.prototype.answerClicked = function (selectValue) {
        this.selectedAnswer = selectValue;
        this.stopTimer();
    };
    QuizPage.prototype.isCorrect = function () {
        return this.selectedAnswer === this.question.answers[0];
    };
    QuizPage.prototype.isWrong = function () {
        if (this.selectedAnswer && this.selectedAnswer !== NOT_ANSWERED) {
            return this.selectedAnswer !== this.question.answers[0];
        }
    };
    QuizPage.prototype.isWrongAnswer = function (value) {
        return this.selectedAnswer === value && value !== this.question.answers[0];
    };
    QuizPage.prototype.isCorrectAnswer = function (value) {
        return this.selectedAnswer && value === this.question.answers[0];
    };
    QuizPage.prototype.isTimeout = function () {
        return this.selectedAnswer === NOT_ANSWERED;
    };
    QuizPage.prototype.getTimerColor = function () {
        if (this.isTimeout()) {
            return 'danger';
        }
        if (this.remainingTime <= LAST_SECONDS) {
            return 'warning';
        }
    };
    QuizPage.prototype.isNextOrFinishEnabled = function () {
        return !this.selectedAnswer;
    };
    QuizPage.prototype.setupTimer = function () {
        if (this.timer) {
            this.stopTimer();
        }
        this.remainingTime = MAX_TIME;
    };
    QuizPage.prototype.stopTimer = function () {
        clearTimeout(this.timer);
    };
    QuizPage.prototype.endQuestion = function () {
        this.selectedAnswer = NOT_ANSWERED;
    };
    QuizPage.prototype.startTimer = function () {
        var _this = this;
        this.timer = setTimeout(function (x) {
            if (_this.remainingTime > 0) {
                _this.remainingTime -= 1;
                if (_this.remainingTime > 0) {
                    _this.startTimer();
                }
                else {
                    _this.endQuestion();
                }
            }
        }, 1000);
    };
    QuizPage.prototype.getProgress = function () {
        if (this.total > 0) {
            var current = (this.index + 1);
            return ' - ' + current + '/' + this.total;
        }
        return '';
    };
    QuizPage.prototype.getContent = function (lang) {
        var _this = this;
        if (lang === void 0) { lang = this.language; }
        var category = this.navParams.get('name');
        var filename = "quiz-" + category + ".json";
        console.log('category', category);
        this.http.get('assets/descriptions/' + lang + '/' + filename).subscribe(function (data) {
            var content = JSON.parse(data['_body']);
            _this.items = content;
            console.log('items', _this.items);
            if (_this.items[0]) {
                _this.question = _this.items[0];
                console.log('question', _this.question);
            }
            _this.total = _this.items.length;
            _this.startTimer();
        });
    };
    QuizPage.prototype.getRemainingTime = function () {
        if (this.remainingTime < 10) {
            return '0' + this.remainingTime;
        }
        return this.remainingTime;
    };
    QuizPage.prototype.nextQuestion = function () {
        if (this.selectedAnswer == NOT_ANSWERED) {
            ++this.notAnswered;
        }
        else {
            if (this.items[this.index].answers.indexOf(this.selectedAnswer) !== -1) {
                ++this.correctAnswers;
            }
            else {
                ++this.wrongAnswers;
            }
        }
        console.log('correctAnswers', this.correctAnswers);
        console.log('wrongAnswers', this.wrongAnswers);
        console.log('notAnswered', this.notAnswered);
        this.index++;
        this.question = this.items[this.index];
        this.selectedAnswer = null;
        this.setupTimer();
        this.startTimer();
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
        selector: 'page-quiz',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/quiz/quiz.html"*/'<ion-header>\n\n  <ion-navbar secondary>\n    <ion-buttons right>\n      <button ion-button icon-only menuToggle style="visibility: hidden;">\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!finished">{{ title | translate }} {{getProgress()}}</ion-title>\n    <ion-title *ngIf="finished">{{ title | translate }} - {{ \'RESULT\' | translate }}</ion-title>\n    <ion-buttons left>\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu">\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content *ngIf="!question" padding>\n  \n\n  <h5 text-justify padding>\n    {{ \'TITLE_ERROR\' | translate }}\n  </h5>\n\n  <ion-list>\n    <ion-item>\n      <ion-label text-justify>\n        {{ \'ERROR_LOAD_QUIZ\' | translate }}\n      </ion-label>\n    </ion-item>\n  \n  </ion-list>\n\n</ion-content>\n\n<ion-content *ngIf="question && !finished" padding>\n\n  <p style="font-size: 15px;" text-center>\n\n    <ion-chip>\n      <ion-icon name="stopwatch" color="{{getTimerColor()}}"></ion-icon>\n      <ion-label>{{ \'REMAINING_TIME\' | translate }} <b>{{getRemainingTime()}}</b> {{ \'SECONDS\' | translate }}</ion-label>\n    </ion-chip>\n\n    <br/>\n\n    <span *ngIf="isTimeout()">\n      {{ \'QUIZ_RESULT_RAN_OUT_OF_TIME\' | translate }}\n    </span>\n\n  </p>\n  \n  <hr/>\n\n  <h5 text-justify [innerHTML]="question.question"></h5>\n  \n  <img *ngIf="question.image" \n    alt="question image"\n    width="100%" \n    height="auto" \n    src="{{question.image}}" \n    imageViewer />\n\n  <ion-list radio-group [(ngModel)]="selectedAnswer">\n      <ion-item \n        [class.correct-answer]="isCorrectAnswer(option.value)"\n        [class.wrong-answer]="isWrongAnswer(option.value)"\n        *ngFor="let option of question.options">\n        <ion-label text-justify>{{option.value}}) {{option.label}}</ion-label>\n        <ion-radio \n          [disabled]="selectedAnswer!=null"\n          (ionSelect)="answerClicked(option.value)"\n          value="{{option.value}}">\n        </ion-radio>\n      </ion-item>\n    \n  </ion-list>\n\n  <p text-justify>{{question.caption}}</p>\n\n  <p style="font-size: 15px;" text-center>\n    <span *ngIf="isWrong()">\n      {{ \'QUIZ_RESULT_WRONG\' | translate }}\n    </span>\n  \n    <span *ngIf="isCorrect()">\n      {{ \'QUIZ_RESULT_CORRECT\' | translate }}\n    </span>\n  </p>\n\n  <button ion-button \n    *ngIf="index < items.length-1"\n    [disabled]="isNextOrFinishEnabled()" \n    (click)="nextQuestion()"\n    style="width: 100%;">\n    {{ \'NEXT\' | translate }}\n  </button>\n\n  <button ion-button \n    *ngIf="index == items.length-1"\n    [disabled]="isNextOrFinishEnabled()" \n    (click)="finishQuiz()"\n    style="width: 100%;">\n    {{ \'FINISH_QUIZ\' | translate }}\n  </button>\n\n</ion-content>\n\n<ion-content class="results" *ngIf="question && finished" padding>\n  <ion-card>\n    <ion-card-content text-justify>\n      <div class="result-title-group">\n        <div class="result-title">{{ \'YOUR_SCORE\' | translate }}</div>\n        <div class="result-percentage">{{(correctAnswers/items.length)*100 | number:\'2.1-1\'}}%</div>\n      </div>\n      <ion-grid class="result-content">\n        <ion-row>\n          <ion-col>\n            <div>{{ \'CORRECT\' | translate }}</div>\n            <div class="correct">{{correctAnswers}}</div>\n          </ion-col>\n          <ion-col>\n            <div>{{ \'WRONG\' | translate }}</div>\n            <div class="wrong">{{wrongAnswers}}</div>\n          </ion-col>\n          <ion-col>\n            <div>{{ \'NOT_ANSWERED\' | translate }}</div>\n            <div class="not-answered">{{notAnswered}}</div>\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n    </ion-card-content>\n  </ion-card>\n\n  <div class="row">\n    <div style="margin: 10px; width: 100%">\n      <button ion-button \n        (click)="resetQuiz()" style="width: 100%">\n        {{ \'TRY_AGAIN_QUIZ\' | translate }}\n      </button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/quiz/quiz.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
], QuizPage);

//# sourceMappingURL=quiz.js.map

/***/ }),

/***/ 174:
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
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 217:
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
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_paywall_paywall__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iap_controller__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var MenuController = MenuController_1 = (function () {
    function MenuController() {
    }
    MenuController.prototype.getFreeCategories = function () {
        return [
            { title: 'QUIZ_MIX_1', name: 'mix-1', icon: MenuController_1.UNLOCK_ICON, color: MenuController_1.UNLOCK_COLOR, component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_MIX_2', name: 'mix-2', icon: MenuController_1.UNLOCK_ICON, color: MenuController_1.UNLOCK_COLOR, component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] }
        ];
    };
    MenuController.prototype.getPremiumCategories = function () {
        return [
            { title: 'QUIZ_TORAX', name: 'torax', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_ABDOMEN', name: 'abdome', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_PELVE_PERINEO', name: 'pelve', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_DORSO', name: 'dorso', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_MEMBRO_INFERIOR', name: 'inferior', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_MEMBRO_SUPERIOR', name: 'superior', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_CABECA', name: 'cabeca', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_PESCOCO', name: 'pescoco', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
            { title: 'QUIZ_NERVOS_CARNIANOS', name: 'nervos', icon: this.getIconByUserType(), color: this.getColorByUserType(), component: __WEBPACK_IMPORTED_MODULE_2__pages_quiz_quiz__["a" /* QuizPage */] },
        ];
    };
    MenuController.prototype.getColorByUserType = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__iap_controller__["a" /* IAPController */].userType === __WEBPACK_IMPORTED_MODULE_3__iap_controller__["a" /* IAPController */].USER_TYPE_PREMIUM) {
            return MenuController_1.UNLOCK_COLOR;
        }
        return MenuController_1.LOCK_COLOR;
    };
    MenuController.prototype.getIconByUserType = function () {
        if (__WEBPACK_IMPORTED_MODULE_3__iap_controller__["a" /* IAPController */].userType === __WEBPACK_IMPORTED_MODULE_3__iap_controller__["a" /* IAPController */].USER_TYPE_PREMIUM) {
            return MenuController_1.UNLOCK_ICON;
        }
        return MenuController_1.LOCK_ICON;
    };
    MenuController.prototype.openPaywallWithNav = function (page, nav) {
        nav.push(__WEBPACK_IMPORTED_MODULE_1__pages_paywall_paywall__["a" /* PaywallPage */]);
    };
    MenuController.prototype.openPageWithNav = function (page, nav) {
        console.log('openPage', page);
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (page.icon === MenuController_1.LOCK_ICON) {
            this.openPaywallWithNav(page, nav);
            return;
        }
        nav.setRoot(page.component, { title: page.title, name: page.name, showReference: page.showReference });
    };
    return MenuController;
}());
MenuController.LOCK_ICON = 'lock';
MenuController.UNLOCK_ICON = 'md-play';
MenuController.LOCK_COLOR = 'danger';
MenuController.UNLOCK_COLOR = 'primary';
MenuController = MenuController_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], MenuController);

var MenuController_1;
//# sourceMappingURL=menu.controller.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaywallPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_purchase_2__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_iap_controller__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaywallPage = (function () {
    function PaywallPage(navCtrl, navParams, platform, store, toastController, translateService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.platform = platform;
        this.store = store;
        this.toastController = toastController;
        this.translateService = translateService;
        this.isPlatformCordovaAvailable = false;
        this.store = store;
        this.isPlatformCordovaAvailable = platform.is('cordova');
        this.iapController = new __WEBPACK_IMPORTED_MODULE_5__app_iap_controller__["a" /* IAPController */](store, toastController, translateService);
        console.log('store', this.store);
        if (this.iapController.isStoreEnabled(this.isPlatformCordovaAvailable)) {
            console.log('PaywallPage.isStoreEnabled', true);
            this.iapController.iapSetup();
        }
    }
    PaywallPage.prototype.getPrice = function () {
        var price = __WEBPACK_IMPORTED_MODULE_5__app_iap_controller__["a" /* IAPController */].PREMIUM_PRICE;
        if (__WEBPACK_IMPORTED_MODULE_5__app_iap_controller__["a" /* IAPController */].product && __WEBPACK_IMPORTED_MODULE_5__app_iap_controller__["a" /* IAPController */].product.price) {
            price = __WEBPACK_IMPORTED_MODULE_5__app_iap_controller__["a" /* IAPController */].product.price;
        }
        return price.replace('.', ',').replace('R$', 'R$ ');
    };
    PaywallPage.prototype.onClickBuy = function () {
        console.log('onClickBuy');
        if (this.iapController.isStoreEnabled(this.isPlatformCordovaAvailable)) {
            this.iapController.order();
        }
        else {
            console.log('mockOrder');
            this.iapController.setUserType(__WEBPACK_IMPORTED_MODULE_5__app_iap_controller__["a" /* IAPController */].USER_TYPE_PREMIUM);
            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
        }
    };
    PaywallPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaywallPage');
    };
    PaywallPage.prototype.ngOnInit = function () {
        console.log('ngOnInit PaywallPage');
    };
    return PaywallPage;
}());
PaywallPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-paywall',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/paywall/paywall.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{ \'TITLE_PAYWALL\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <div padding text-center>\n\n    <h5>\n      {{ \'PAYWALL_DESCRIPTION\' | translate }}\n    </h5>\n    <p>\n      {{ \'PAYWALL_DESCRIPTION_2\' | translate }}\n    </p>\n\n    <div padding>\n      <div text-left>\n        {{ \'PAYWALL_BENEFITS_1\' | translate }}\n        <ul>\n          <li>\n            {{ \'QUIZ_TORAX\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_ABDOMEN\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_PELVE_PERINEO\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_DORSO\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_MEMBRO_INFERIOR\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_MEMBRO_SUPERIOR\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_CABECA\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_PESCOCO\' | translate }}\n          </li>\n          <li>\n            {{ \'QUIZ_NERVOS_CARNIANOS\' | translate }}\n          </li>\n        </ul>\n      </div>\n      <div text-left>\n        {{ \'PAYWALL_BENEFITS_2\' | translate }}\n      </div>\n    </div>\n\n    <br/>\n\n    <div text-center>\n      <button ion-button color="primary" (click)="onClickBuy()">\n        {{ \'PAYWALL_BUTTON_LABEL\' | translate}}\n        &nbsp;\n        <strong>\n          {{ getPrice() }}\n        </strong>\n      </button>\n    </div>\n  </div>\n\n  <br/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/paywall/paywall.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["n" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular_platform_platform__["a" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["r" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */]])
], PaywallPage);

//# sourceMappingURL=paywall.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        selector: 'page-about',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'REFERENCES_AND_CONTACT\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding text-justify>\n    <h5>\n      {{ \'REFERENCES\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'REFERENCES_DESCRIPTION\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'CONTACT_TITLE\' | translate }}\n    </h5>\n    <br/>\n    <b>{{ \'CONTACT_NAME\' | translate }}</b>\n    <br/><br/>\n    <i>\n      {{ \'CONTACT_DESCRIPTION\' | translate }}\n      <br/>\n      <br/>\n    </i>\n    <ion-row>\n      <ion-col col-12>{{ \'CONTACT_EMAIL\' | translate }}</ion-col>\n    </ion-row>\n    \n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'ACKNOWLEDGMENT\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'ACKNOWLEDGMENT_DESCRIPTION\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'THANKS\' | translate }}\n    </h5>\n    <br/>\n    <i>\n      {{ \'THANKS_DESCRIPTION\' | translate }}\n      <br/>\n      <br/>\n    </i>\n    <i>\n      {{ \'THANKS_DESCRIPTION_2\' | translate }}\n      <br/>\n      <br/>\n    </i>\n    <i>\n      {{ \'THANKS_DESCRIPTION_3\' | translate }}\n      <br/>\n    </i>\n  </div>\n\n  <br/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/about/about.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], AboutPage);

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        selector: 'page-terms',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/terms/terms.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'TERMS\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  \n  <div padding text-justify>\n      {{ \'TERMS_CONTENT\' | translate }}\n  </div>\n\n  <div padding text-justify>\n    <h5>\n      {{ \'DISCLAIMER\' | translate }}\n    </h5>\n    <br/>\n    <p>{{ \'DISCLAIMER_CONTENT_1\' | translate }}</p>\n    <p>{{ \'DISCLAIMER_CONTENT_2\' | translate }}</p>\n    <p>{{ \'DISCLAIMER_CONTENT_3\' | translate }}</p>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/terms/terms.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
], TermsPage);

//# sourceMappingURL=terms.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeveloperPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
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
        selector: 'page-developer',template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/developer/developer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ \'DEVELOPER\' | translate }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  \n  <div padding text-justify>\n    <h5>\n      {{ \'DEVELOPER_TITLE\' | translate }}\n    </h5>\n    <br/>\n    <b>{{ \'DEVELOPER_NAME\' | translate }}</b>\n    <br/><br/>\n    <i>\n      {{ \'DEVELOPER_DESCRIPTION\' | translate }}\n      <br/>\n      <br/>\n      {{ \'DEVELOPER_DESCRIPTION_2\' | translate }}\n      <br/><br/>\n    </i>\n    <br/>\n    <span>{{ \'DEVELOPER_EMAIL\' | translate }}</span>\n    <br/>\n    <br/>\n    <span>{{ \'DEVELOPER_WEBSITE\' | translate }}</span>\n    <br/>\n    <br/>\n    <br/>\n    <img src="./assets/images/contact/bitflip.png"/>\n    \n  </div>\n\n  <br/>\n\n</ion-content>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/pages/developer/developer.html"*/,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_rate__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_quiz_quiz__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_terms_terms__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_developer_developer__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__ = __webpack_require__(700);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser_ngx__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_safari_view_controller__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_paywall_paywall__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_purchase_2__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_paywall_paywall__["a" /* PaywallPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_developer_developer__["a" /* DeveloperPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_quiz_quiz__["a" /* QuizPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */], {
                platforms: {
                    ios: {
                        statusbarPadding: false,
                        tabsHideOnSubPages: false
                    }
                }
            }, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_16_ionic_img_viewer__["a" /* IonicImageViewerModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_paywall_paywall__["a" /* PaywallPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_terms_terms__["a" /* TermsPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_developer_developer__["a" /* DeveloperPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_quiz_quiz__["a" /* QuizPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_app_rate__["a" /* AppRate */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_safari_view_controller__["a" /* SafariViewController */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_app_rate__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase_2__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_about_about__ = __webpack_require__(374);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_developer_developer__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__menu_controller__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__iap_controller__ = __webpack_require__(160);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var MyApp = (function (_super) {
    __extends(MyApp, _super);
    function MyApp(platform, statusBar, splashScreen, translate, appRate, inAppBrowser, store, safariViewController, toastController, translateService) {
        var _this = _super.call(this) || this;
        _this.translate = translate;
        _this.appRate = appRate;
        _this.inAppBrowser = inAppBrowser;
        _this.store = store;
        _this.safariViewController = safariViewController;
        _this.toastController = toastController;
        _this.translateService = translateService;
        _this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */];
        _this.isPlatformIOS = false;
        _this.isPlatformCordovaAvailable = false;
        _this.linkIOS = 'http://bitflip.com.br/diego-jordao/';
        _this.linkAndroid = "https://play.google.com/store/apps/collection/cluster?clp=igNAChkKEzY3NjY5MzY2NDU2MjUzOTM0MjkQCBgDEiEKG2JyLm1lZC5kaWVnb2pvcmRhby50b3JheFBybxABGAMYAQ%3D%3D:S:ANO1ljJ1IDM&gsr=CkOKA0AKGQoTNjc2NjkzNjY0NTYyNTM5MzQyORAIGAMSIQobYnIubWVkLmRpZWdvam9yZGFvLnRvcmF4UHJvEAEYAxgB:S:ANO1ljI3cUA";
        _this.store = store;
        _this.isPlatformIOS = platform.is('ios');
        _this.isPlatformCordovaAvailable = platform.is('cordova');
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            statusBar.hide();
            statusBar.overlaysWebView(false);
            splashScreen.hide();
            // this.setLanguage(translate);
            translate.setDefaultLang('pt');
            console.log('this.platforms', platform.platforms());
            if (platform.is('cordova')) {
                _this.appRate.preferences.usesUntilPrompt = 5;
                _this.appRate.preferences.useLanguage = translate.getDefaultLang();
                _this.appRate.preferences.storeAppURL = {
                    ios: '1296654435',
                    android: 'market://details?id=br.med.diegojordao.idadeOssea'
                };
                _this.appRate.promptForRating(false);
            }
            _this.iapController = new __WEBPACK_IMPORTED_MODULE_14__iap_controller__["a" /* IAPController */](store, toastController, translateService);
            console.log('store', _this.store);
            if (_this.iapController.isStoreEnabled(_this.isPlatformCordovaAvailable)) {
                console.log('app.component.isStoreEnabled', true);
                _this.iapController.iapSetup();
            }
            __WEBPACK_IMPORTED_MODULE_14__iap_controller__["a" /* IAPController */].userChangedObserver.subscribe(function (userType) {
                console.log('userChangedObserver.subscribe', userType);
                _this.initMenu();
            });
        });
        _this.initMenu();
        return _this;
    }
    MyApp.prototype.initMenu = function () {
        this.homePages = [
            { title: 'HOME', icon: 'home', component: __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */] },
        ];
        this.helperPages = [
            { title: 'CONTACT', icon: 'md-chatboxes', component: __WEBPACK_IMPORTED_MODULE_10__pages_about_about__["a" /* AboutPage */] },
            { title: 'TERMS', icon: 'md-document', component: __WEBPACK_IMPORTED_MODULE_11__pages_terms_terms__["a" /* TermsPage */] },
            { title: 'DEVELOPER', icon: 'md-bulb', component: __WEBPACK_IMPORTED_MODULE_12__pages_developer_developer__["a" /* DeveloperPage */] }
        ];
        this.freeQuizes = this.getFreeCategories();
        this.categoryQuizes = this.getPremiumCategories();
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
    };
    MyApp.prototype.getUserType = function () {
        if (this.iapController) {
            return this.iapController.getUserType();
        }
        return '';
    };
    MyApp.prototype.setLanguage = function (translate) {
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
    };
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
    MyApp.prototype.onChangeLanguage = function (language) {
        this.translate.use(language);
    };
    MyApp.prototype.openPage = function (page) {
        this.openPageWithNav(page, this.nav);
    };
    return MyApp;
}(__WEBPACK_IMPORTED_MODULE_13__menu_controller__["a" /* MenuController */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/cassioscofield/bitflip/anatoquiz/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>{{ \'MENU\' | translate }}</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n\n    <ion-list>\n      <button menuClose ion-item *ngFor="let page of homePages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header id="header-methods">\n        <b>{{\'TITLE_FREE\' | translate}}</b>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of freeQuizes" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header id="header-methods">\n        <b>{{\'TITLE_CATEGORIES\' | translate}}</b>\n      </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of categoryQuizes" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n    </ion-list>\n\n    <!--\n    <ion-list id="languages">\n      <ion-list-header>{{ \'MENU_LANGUAGES\' | translate }}</ion-list-header>\n      <ion-item detail *ngFor="let language of languages; let i = index" (click)="onChangeLanguage(language.file)">\n          <ion-label>\n              <img [src]="language.image" />\n              {{ language.title | translate }}\n          </ion-label>\n      </ion-item>\n    </ion-list>\n\n    <br/>\n    -->\n    \n    <ion-list>\n     <ion-list-header id="header-about">\n      <b>{{\'ABOUT\' | translate}}</b>\n     </ion-list-header>\n      <button menuClose ion-item *ngFor="let page of helperPages" (click)="openPage(page)">\n        <ion-icon name="{{page.icon}}"></ion-icon>\n        <span [translate]="page.title"></span>\n      </button>\n      <a menuClose ion-item (click)="redirect()">\n        <ion-icon name="md-apps"></ion-icon>\n        <span [translate]="\'OTHER_APPS\'"></span>\n      </a>\n    </ion-list>\n\n    <ion-list>\n      <ion-list-header id="header-about">\n        <span [translate]="\'VERSION\'"></span> - \n        <span>{{getUserType().toUpperCase()}}</span>\n      </ion-list-header>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/cassioscofield/bitflip/anatoquiz/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_0__ionic_native_app_rate__["a" /* AppRate */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_in_app_browser_ngx__["a" /* InAppBrowser */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_in_app_purchase_2__["a" /* InAppPurchase2 */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_safari_view_controller__["a" /* SafariViewController */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[379]);
//# sourceMappingURL=main.js.map