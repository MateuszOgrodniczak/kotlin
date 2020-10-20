if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'weather_app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'weather_app'.");
}
var weather_app = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var addClass = Kotlin.kotlin.dom.addClass_hhb33f$;
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwUPAE = Kotlin.throwUPAE;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var toString = Kotlin.toString;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var toShort = Kotlin.toShort;
  function CardBuilder() {
  }
  function CardBuilder$addInput$lambda(closure$addCityInputElement) {
    return function (it) {
      var cityStorePresenter = new CityStorePresenter();
      var cityStorePage = new CityStorePage(cityStorePresenter);
      cityStorePresenter.attach_dev39x$(cityStorePage);
      cityStorePresenter.loadCity_61zpoe$(closure$addCityInputElement.value);
      return Unit;
    };
  }
  CardBuilder.prototype.addInput = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var titleElement = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var addCityInputElement = Kotlin.isType(tmp$_1 = document.createElement('input'), HTMLInputElement) ? tmp$_1 : throwCCE();
    var addCityButtonElement = Kotlin.isType(tmp$_2 = document.createElement('button'), HTMLButtonElement) ? tmp$_2 : throwCCE();
    addClass(containerElement, ['card', 'card-shadow', 'card-input']);
    addClass(titleElement, ['text-title']);
    addClass(addCityInputElement, ['float-left']);
    addClass(addCityButtonElement, ['view-details', 'ripple', 'float-right']);
    titleElement.innerHTML = 'Search for a city';
    addCityInputElement.placeholder = 'Add new city';
    addCityInputElement.id = 'addCityInput';
    addCityButtonElement.innerHTML = 'Add';
    addCityButtonElement.addEventListener('click', CardBuilder$addInput$lambda(addCityInputElement));
    containerElement.appendChild(titleElement);
    containerElement.appendChild(Kotlin.isType(tmp$_3 = document.createElement('br'), HTMLBRElement) ? tmp$_3 : throwCCE());
    containerElement.appendChild(addCityInputElement);
    containerElement.appendChild(addCityButtonElement);
    return containerElement;
  };
  CardBuilder.prototype.build_190uj$ = function (city) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var containerElement = Kotlin.isType(tmp$ = document.createElement('div'), HTMLDivElement) ? tmp$ : throwCCE();
    var imageElement = Kotlin.isType(tmp$_0 = document.createElement('img'), HTMLImageElement) ? tmp$_0 : throwCCE();
    var cityElement = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var tempElement = Kotlin.isType(tmp$_2 = document.createElement('div'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var perceptibleTempElement = Kotlin.isType(tmp$_3 = document.createElement('div'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var minTempElement = Kotlin.isType(tmp$_4 = document.createElement('div'), HTMLDivElement) ? tmp$_4 : throwCCE();
    var maxTempElement = Kotlin.isType(tmp$_5 = document.createElement('div'), HTMLDivElement) ? tmp$_5 : throwCCE();
    var pressureElement = Kotlin.isType(tmp$_6 = document.createElement('div'), HTMLDivElement) ? tmp$_6 : throwCCE();
    var humidityElement = Kotlin.isType(tmp$_7 = document.createElement('div'), HTMLDivElement) ? tmp$_7 : throwCCE();
    var cloudsElement = Kotlin.isType(tmp$_8 = document.createElement('div'), HTMLDivElement) ? tmp$_8 : throwCCE();
    var windElement = Kotlin.isType(tmp$_9 = document.createElement('div'), HTMLDivElement) ? tmp$_9 : throwCCE();
    var infoButtonElement = Kotlin.isType(tmp$_10 = document.createElement('button'), HTMLButtonElement) ? tmp$_10 : throwCCE();
    this.bind_0(city, cityElement, imageElement, tempElement, perceptibleTempElement, minTempElement, maxTempElement, pressureElement, humidityElement, cloudsElement, windElement, infoButtonElement);
    this.applyStyle_0(containerElement, cityElement, imageElement, tempElement, perceptibleTempElement, minTempElement, maxTempElement, pressureElement, humidityElement, cloudsElement, windElement, infoButtonElement);
    this.appendChild_0(containerElement, [cityElement, imageElement, tempElement, perceptibleTempElement, minTempElement, maxTempElement, pressureElement, humidityElement, cloudsElement, windElement, infoButtonElement]);
    return containerElement;
  };
  CardBuilder.prototype.applyStyle_0 = function (containerElement, cityElement, imageElement, tempElement, perceptibleTempElement, minTempElement, maxTempElement, pressureElement, humidityElement, cloudsElement, windElement, infoButtonElement) {
    addClass(containerElement, ['card', 'card-shadow']);
    addClass(cityElement, ['text-title']);
    addClass(imageElement, ['cover-image']);
    addClass(tempElement, ['text-description']);
    addClass(perceptibleTempElement, ['text-description']);
    addClass(minTempElement, ['text-description', 'hidden']);
    addClass(maxTempElement, ['text-description', 'hidden']);
    addClass(pressureElement, ['text-description', 'hidden']);
    addClass(humidityElement, ['text-description', 'hidden']);
    addClass(cloudsElement, ['text-description', 'hidden']);
    addClass(windElement, ['text-description', 'hidden']);
    addClass(infoButtonElement, ['view-details', 'ripple', 'float-right']);
  };
  function CardBuilder$bind$lambda(closure$infoButtonElement, closure$minTempElement, closure$maxTempElement, closure$pressureElement, closure$humidityElement, closure$cloudsElement, closure$windElement) {
    return function (it) {
      if (equals(closure$infoButtonElement.innerHTML, 'show more')) {
        closure$minTempElement.classList.remove('hidden');
        closure$maxTempElement.classList.remove('hidden');
        closure$pressureElement.classList.remove('hidden');
        closure$humidityElement.classList.remove('hidden');
        closure$cloudsElement.classList.remove('hidden');
        closure$windElement.classList.remove('hidden');
        closure$infoButtonElement.innerHTML = 'hide';
      }
       else {
        closure$minTempElement.classList.add('hidden');
        closure$maxTempElement.classList.add('hidden');
        closure$pressureElement.classList.add('hidden');
        closure$humidityElement.classList.add('hidden');
        closure$cloudsElement.classList.add('hidden');
        closure$windElement.classList.add('hidden');
        closure$infoButtonElement.innerHTML = 'show more';
      }
      return Unit;
    };
  }
  CardBuilder.prototype.bind_0 = function (city, cityElement, imageElement, tempElement, perceptibleTempElement, minTempElement, maxTempElement, pressureElement, humidityElement, cloudsElement, windElement, infoButtonElement) {
    imageElement.src = 'img/' + city.weather[0].icon + '.png';
    imageElement.title = city.weather[0].main;
    var title = city.name;
    if (city.sys != null) {
      title += ', ' + city.sys.country;
    }
    cityElement.innerHTML = title;
    tempElement.innerHTML = '<strong>Temperature: <\/strong>' + city.main.temp + ' &#8451;';
    perceptibleTempElement.innerHTML = '<strong>Perceptible temperature: <\/strong>' + city.main.feels_like + ' &#8451;';
    minTempElement.innerHTML = '<strong>Minimal temperature: <\/strong>' + city.main.temp_min + ' &#8451;';
    maxTempElement.innerHTML = '<strong>Maximal temperature: <\/strong>' + city.main.temp_max + ' &#8451;';
    pressureElement.innerHTML = '<strong>Pressure: <\/strong>' + city.main.pressure + ' hPa';
    humidityElement.innerHTML = '<strong>Humidity: <\/strong>' + city.main.humidity + '%';
    var cloudiness = city.clouds.all;
    if (cloudiness !== undefined) {
      cloudiness += '%';
    }
     else {
      cloudiness = 'N/A';
    }
    cloudsElement.innerHTML = '<strong>Cloudiness: <\/strong>' + cloudiness;
    var windDegrees = city.wind.deg;
    if (windDegrees !== undefined) {
      windDegrees += '&#176;';
    }
     else {
      windDegrees = 'N/A';
    }
    windElement.innerHTML = '<strong>Wind: <\/strong>' + city.wind.speed + ' m/s, ' + windDegrees;
    infoButtonElement.innerHTML = 'show more';
    infoButtonElement.addEventListener('click', CardBuilder$bind$lambda(infoButtonElement, minTempElement, maxTempElement, pressureElement, humidityElement, cloudsElement, windElement));
  };
  CardBuilder.prototype.appendChild_0 = function ($receiver, elements) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== elements.length; ++tmp$) {
      var element = elements[tmp$];
      $receiver.appendChild(element);
    }
  };
  CardBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardBuilder',
    interfaces: []
  };
  function City(name, sys, weather, main, clouds, wind) {
    this.name = name;
    this.sys = sys;
    this.weather = weather;
    this.main = main;
    this.clouds = clouds;
    this.wind = wind;
  }
  City.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'City',
    interfaces: []
  };
  City.prototype.component1 = function () {
    return this.name;
  };
  City.prototype.component2 = function () {
    return this.sys;
  };
  City.prototype.component3 = function () {
    return this.weather;
  };
  City.prototype.component4 = function () {
    return this.main;
  };
  City.prototype.component5 = function () {
    return this.clouds;
  };
  City.prototype.component6 = function () {
    return this.wind;
  };
  City.prototype.copy_iz0exl$ = function (name, sys, weather, main, clouds, wind) {
    return new City(name === void 0 ? this.name : name, sys === void 0 ? this.sys : sys, weather === void 0 ? this.weather : weather, main === void 0 ? this.main : main, clouds === void 0 ? this.clouds : clouds, wind === void 0 ? this.wind : wind);
  };
  City.prototype.toString = function () {
    return 'City(name=' + Kotlin.toString(this.name) + (', sys=' + Kotlin.toString(this.sys)) + (', weather=' + Kotlin.toString(this.weather)) + (', main=' + Kotlin.toString(this.main)) + (', clouds=' + Kotlin.toString(this.clouds)) + (', wind=' + Kotlin.toString(this.wind)) + ')';
  };
  City.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.sys) | 0;
    result = result * 31 + Kotlin.hashCode(this.weather) | 0;
    result = result * 31 + Kotlin.hashCode(this.main) | 0;
    result = result * 31 + Kotlin.hashCode(this.clouds) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind) | 0;
    return result;
  };
  City.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.sys, other.sys) && Kotlin.equals(this.weather, other.weather) && Kotlin.equals(this.main, other.main) && Kotlin.equals(this.clouds, other.clouds) && Kotlin.equals(this.wind, other.wind)))));
  };
  function CityStoreContract() {
  }
  function CityStoreContract$View() {
  }
  CityStoreContract$View.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'View',
    interfaces: []
  };
  function CityStoreContract$Presenter() {
  }
  CityStoreContract$Presenter.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Presenter',
    interfaces: []
  };
  CityStoreContract.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'CityStoreContract',
    interfaces: []
  };
  function CityStorePage(presenter) {
    this.presenter_0 = presenter;
    var tmp$, tmp$_0;
    this.loader_0 = Kotlin.isType(tmp$ = document.getElementById('loader'), HTMLDivElement) ? tmp$ : throwCCE();
    this.content_0 = Kotlin.isType(tmp$_0 = document.getElementById('content'), HTMLDivElement) ? tmp$_0 : throwCCE();
    this.cardBuilder_0 = new CardBuilder();
  }
  CityStorePage.prototype.show = function () {
    this.presenter_0.attach_dev39x$(this);
    this.presenter_0.loadCities();
  };
  CityStorePage.prototype.showCities_4uhy68$ = function (cities) {
    var tmp$;
    tmp$ = cities.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      this.showCity_190uj$(element);
    }
  };
  CityStorePage.prototype.showCity_190uj$ = function (city) {
    var card = this.cardBuilder_0.build_190uj$(city);
    this.content_0.appendChild(card);
  };
  CityStorePage.prototype.showNewCityInput = function () {
    var input = this.cardBuilder_0.addInput();
    this.content_0.appendChild(input);
  };
  CityStorePage.prototype.showLoader = function () {
    this.loader_0.style.visibility = 'visible';
  };
  CityStorePage.prototype.hideLoader = function () {
    this.loader_0.style.visibility = 'hidden';
  };
  CityStorePage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CityStorePage',
    interfaces: [CityStoreContract$View]
  };
  function CityStorePresenter() {
    this.view_jztz0n$_0 = this.view_jztz0n$_0;
  }
  Object.defineProperty(CityStorePresenter.prototype, 'view_0', {
    get: function () {
      if (this.view_jztz0n$_0 == null)
        return throwUPAE('view');
      return this.view_jztz0n$_0;
    },
    set: function (view) {
      this.view_jztz0n$_0 = view;
    }
  });
  CityStorePresenter.prototype.attach_dev39x$ = function (view) {
    this.view_0 = view;
  };
  function CityStorePresenter$loadCities$lambda(this$CityStorePresenter) {
    return function (response) {
      var responseEntity = JSON.parse(response);
      this$CityStorePresenter.view_0.showCities_4uhy68$(toList(responseEntity.list));
      return Unit;
    };
  }
  CityStorePresenter.prototype.loadCities = function () {
    this.view_0.showLoader();
    this.getAsync_0(API_URL, CityStorePresenter$loadCities$lambda(this));
    this.view_0.hideLoader();
  };
  function CityStorePresenter$loadCity$lambda(this$CityStorePresenter) {
    return function (response) {
      var responseSingleCity = JSON.parse(response);
      this$CityStorePresenter.view_0.showCity_190uj$(responseSingleCity);
      return Unit;
    };
  }
  CityStorePresenter.prototype.loadCity_61zpoe$ = function (name) {
    this.view_0.showLoader();
    var url = NEW_CITY_URL + name + APP_ID;
    this.getAsync_0(url, CityStorePresenter$loadCity$lambda(this));
    this.view_0.hideLoader();
  };
  function CityStorePresenter$getAsync$lambda(closure$xmlHttp, closure$callback) {
    return function (it) {
      print('ReadyState: ' + toString(closure$xmlHttp.readyState) + ', status: ' + toString(closure$xmlHttp.status));
      if (closure$xmlHttp.readyState === toShort(4) && closure$xmlHttp.status === toShort(200)) {
        closure$callback(closure$xmlHttp.responseText);
      }
      return Unit;
    };
  }
  CityStorePresenter.prototype.getAsync_0 = function (url, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', url);
    xmlHttp.onload = CityStorePresenter$getAsync$lambda(xmlHttp, callback);
    xmlHttp.send();
  };
  CityStorePresenter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CityStorePresenter',
    interfaces: [CityStoreContract$Presenter]
  };
  function Cloudiness(all) {
    this.all = all;
  }
  Cloudiness.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cloudiness',
    interfaces: []
  };
  Cloudiness.prototype.component1 = function () {
    return this.all;
  };
  Cloudiness.prototype.copy_61zpoe$ = function (all) {
    return new Cloudiness(all === void 0 ? this.all : all);
  };
  Cloudiness.prototype.toString = function () {
    return 'Cloudiness(all=' + Kotlin.toString(this.all) + ')';
  };
  Cloudiness.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.all) | 0;
    return result;
  };
  Cloudiness.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.all, other.all))));
  };
  function Country(country) {
    this.country = country;
  }
  Country.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Country',
    interfaces: []
  };
  Country.prototype.component1 = function () {
    return this.country;
  };
  Country.prototype.copy_61zpoe$ = function (country) {
    return new Country(country === void 0 ? this.country : country);
  };
  Country.prototype.toString = function () {
    return 'Country(country=' + Kotlin.toString(this.country) + ')';
  };
  Country.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.country) | 0;
    return result;
  };
  Country.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.country, other.country))));
  };
  var API_URL;
  var NEW_CITY_URL;
  var APP_ID;
  function main(args) {
    var cityStorePresenter = new CityStorePresenter();
    var cityStorePage = new CityStorePage(cityStorePresenter);
    cityStorePage.show();
    cityStorePage.showNewCityInput();
  }
  function ResponseObject(list) {
    this.list = list;
  }
  ResponseObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResponseObject',
    interfaces: []
  };
  ResponseObject.prototype.component1 = function () {
    return this.list;
  };
  ResponseObject.prototype.copy_b4vg4j$ = function (list) {
    return new ResponseObject(list === void 0 ? this.list : list);
  };
  ResponseObject.prototype.toString = function () {
    return 'ResponseObject(list=' + Kotlin.toString(this.list) + ')';
  };
  ResponseObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.list) | 0;
    return result;
  };
  ResponseObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.list, other.list))));
  };
  function Temperature(temp, feels_like, temp_min, temp_max, pressure, humidity) {
    this.temp = temp;
    this.feels_like = feels_like;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.pressure = pressure;
    this.humidity = humidity;
  }
  Temperature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Temperature',
    interfaces: []
  };
  Temperature.prototype.component1 = function () {
    return this.temp;
  };
  Temperature.prototype.component2 = function () {
    return this.feels_like;
  };
  Temperature.prototype.component3 = function () {
    return this.temp_min;
  };
  Temperature.prototype.component4 = function () {
    return this.temp_max;
  };
  Temperature.prototype.component5 = function () {
    return this.pressure;
  };
  Temperature.prototype.component6 = function () {
    return this.humidity;
  };
  Temperature.prototype.copy_r3y0ew$ = function (temp, feels_like, temp_min, temp_max, pressure, humidity) {
    return new Temperature(temp === void 0 ? this.temp : temp, feels_like === void 0 ? this.feels_like : feels_like, temp_min === void 0 ? this.temp_min : temp_min, temp_max === void 0 ? this.temp_max : temp_max, pressure === void 0 ? this.pressure : pressure, humidity === void 0 ? this.humidity : humidity);
  };
  Temperature.prototype.toString = function () {
    return 'Temperature(temp=' + Kotlin.toString(this.temp) + (', feels_like=' + Kotlin.toString(this.feels_like)) + (', temp_min=' + Kotlin.toString(this.temp_min)) + (', temp_max=' + Kotlin.toString(this.temp_max)) + (', pressure=' + Kotlin.toString(this.pressure)) + (', humidity=' + Kotlin.toString(this.humidity)) + ')';
  };
  Temperature.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.temp) | 0;
    result = result * 31 + Kotlin.hashCode(this.feels_like) | 0;
    result = result * 31 + Kotlin.hashCode(this.temp_min) | 0;
    result = result * 31 + Kotlin.hashCode(this.temp_max) | 0;
    result = result * 31 + Kotlin.hashCode(this.pressure) | 0;
    result = result * 31 + Kotlin.hashCode(this.humidity) | 0;
    return result;
  };
  Temperature.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.temp, other.temp) && Kotlin.equals(this.feels_like, other.feels_like) && Kotlin.equals(this.temp_min, other.temp_min) && Kotlin.equals(this.temp_max, other.temp_max) && Kotlin.equals(this.pressure, other.pressure) && Kotlin.equals(this.humidity, other.humidity)))));
  };
  function WeatherEntity(main, icon) {
    this.main = main;
    this.icon = icon;
  }
  WeatherEntity.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeatherEntity',
    interfaces: []
  };
  WeatherEntity.prototype.component1 = function () {
    return this.main;
  };
  WeatherEntity.prototype.component2 = function () {
    return this.icon;
  };
  WeatherEntity.prototype.copy_puj7f4$ = function (main, icon) {
    return new WeatherEntity(main === void 0 ? this.main : main, icon === void 0 ? this.icon : icon);
  };
  WeatherEntity.prototype.toString = function () {
    return 'WeatherEntity(main=' + Kotlin.toString(this.main) + (', icon=' + Kotlin.toString(this.icon)) + ')';
  };
  WeatherEntity.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.main) | 0;
    result = result * 31 + Kotlin.hashCode(this.icon) | 0;
    return result;
  };
  WeatherEntity.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.main, other.main) && Kotlin.equals(this.icon, other.icon)))));
  };
  function Wind(speed, deg) {
    this.speed = speed;
    this.deg = deg;
  }
  Wind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Wind',
    interfaces: []
  };
  Wind.prototype.component1 = function () {
    return this.speed;
  };
  Wind.prototype.component2 = function () {
    return this.deg;
  };
  Wind.prototype.copy_puj7f4$ = function (speed, deg) {
    return new Wind(speed === void 0 ? this.speed : speed, deg === void 0 ? this.deg : deg);
  };
  Wind.prototype.toString = function () {
    return 'Wind(speed=' + Kotlin.toString(this.speed) + (', deg=' + Kotlin.toString(this.deg)) + ')';
  };
  Wind.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.speed) | 0;
    result = result * 31 + Kotlin.hashCode(this.deg) | 0;
    return result;
  };
  Wind.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.speed, other.speed) && Kotlin.equals(this.deg, other.deg)))));
  };
  _.CardBuilder = CardBuilder;
  _.City = City;
  CityStoreContract.View = CityStoreContract$View;
  CityStoreContract.Presenter = CityStoreContract$Presenter;
  _.CityStoreContract = CityStoreContract;
  _.CityStorePage = CityStorePage;
  _.CityStorePresenter = CityStorePresenter;
  _.Cloudiness = Cloudiness;
  _.Country = Country;
  Object.defineProperty(_, 'API_URL', {
    get: function () {
      return API_URL;
    }
  });
  Object.defineProperty(_, 'NEW_CITY_URL', {
    get: function () {
      return NEW_CITY_URL;
    }
  });
  Object.defineProperty(_, 'APP_ID', {
    get: function () {
      return APP_ID;
    }
  });
  _.main_kand9s$ = main;
  _.ResponseObject = ResponseObject;
  _.Temperature = Temperature;
  _.WeatherEntity = WeatherEntity;
  _.Wind = Wind;
  var tmp$, tmp$_0, tmp$_1;
  API_URL = typeof (tmp$ = getApiUrl()) === 'string' ? tmp$ : throwCCE();
  NEW_CITY_URL = typeof (tmp$_0 = getNewCityUrl()) === 'string' ? tmp$_0 : throwCCE();
  APP_ID = typeof (tmp$_1 = getAppId()) === 'string' ? tmp$_1 : throwCCE();
  main([]);
  Kotlin.defineModule('weather_app', _);
  return _;
}(typeof weather_app === 'undefined' ? {} : weather_app, kotlin);
