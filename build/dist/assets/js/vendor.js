!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AirDatepicker=t():e.AirDatepicker=t()}(this,(function(){return function(){"use strict";var e={d:function(t,i){for(var s in i)e.o(i,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:i[s]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}},t={};e.d(t,{default:function(){return K}});var i={days:"days",months:"months",years:"years",day:"day",month:"month",year:"year",eventChangeViewDate:"changeViewDate",eventChangeCurrentView:"changeCurrentView",eventChangeFocusDate:"changeFocusDate",eventChangeSelectedDate:"changeSelectedDate",eventChangeTime:"changeTime",eventChangeLastSelectedDate:"changeLastSelectedDate",actionSelectDate:"selectDate",actionUnselectDate:"unselectDate",cssClassWeekend:"-weekend-"},s={classes:"",inline:!1,locale:{days:["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"],daysShort:["Вос","Пон","Вто","Сре","Чет","Пят","Суб"],daysMin:["Вс","Пн","Вт","Ср","Чт","Пт","Сб"],months:["Январь","Февраль","Март","Апрель","Май","Июнь","Июль","Август","Сентябрь","Октябрь","Ноябрь","Декабрь"],monthsShort:["Янв","Фев","Мар","Апр","Май","Июн","Июл","Авг","Сен","Окт","Ноя","Дек"],today:"Сегодня",clear:"Очистить",dateFormat:"dd.MM.yyyy",timeFormat:"HH:mm",firstDay:1},startDate:new Date,firstDay:"",weekends:[6,0],dateFormat:"",altField:"",altFieldDateFormat:"T",toggleSelected:!0,keyboardNav:!0,selectedDates:!1,container:"",isMobile:!1,visible:!1,position:"bottom left",offset:12,view:i.days,minView:i.days,showOtherMonths:!0,selectOtherMonths:!0,moveToOtherMonthsOnSelect:!0,showOtherYears:!0,selectOtherYears:!0,moveToOtherYearsOnSelect:!0,minDate:"",maxDate:"",disableNavWhenOutOfRange:!0,multipleDates:!1,multipleDatesSeparator:", ",range:!1,dynamicRange:!0,buttons:!1,monthsField:"monthsShort",showEvent:"focus",autoClose:!1,prevHtml:'<svg><path d="M 17,12 l -5,5 l 5,5"></path></svg>',nextHtml:'<svg><path d="M 14,12 l 5,5 l -5,5"></path></svg>',navTitles:{days:"MMMM, <i>yyyy</i>",months:"yyyy",years:"yyyy1 - yyyy2"},timepicker:!1,onlyTimepicker:!1,dateTimeSeparator:" ",timeFormat:"",minHours:0,maxHours:24,minMinutes:0,maxMinutes:59,hoursStep:1,minutesStep:1,onSelect:!1,onChangeViewDate:!1,onChangeView:!1,onRenderCell:!1,onShow:!1,onHide:!1,onClickDayName:!1};function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document;return"string"==typeof e?t.querySelector(e):e}function n(){let{tagName:e="div",className:t="",innerHtml:i="",id:s="",attrs:a={}}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=document.createElement(e);return t&&n.classList.add(...t.split(" ")),s&&(n.id=s),i&&(n.innerHTML=i),a&&r(n,a),n}function r(e,t){for(let[i,s]of Object.entries(t))void 0!==s&&e.setAttribute(i,s);return e}function h(e){return new Date(e.getFullYear(),e.getMonth()+1,0).getDate()}function o(e){let t=e.getHours(),{hours:i,dayPeriod:s}=l(t);return{year:e.getFullYear(),month:e.getMonth(),fullMonth:e.getMonth()+1<10?"0"+(e.getMonth()+1):e.getMonth()+1,date:e.getDate(),fullDate:e.getDate()<10?"0"+e.getDate():e.getDate(),day:e.getDay(),hours:t,fullHours:d(t),hours12:i,dayPeriod:s,fullHours12:d(i),minutes:e.getMinutes(),fullMinutes:e.getMinutes()<10?"0"+e.getMinutes():e.getMinutes()}}function l(e){return{dayPeriod:e>11?"pm":"am",hours:e%12==0?12:e%12}}function d(e){return e<10?"0"+e:e}function c(e){let t=10*Math.floor(e.getFullYear()/10);return[t,t+9]}function u(){let e=[];for(var t=arguments.length,i=new Array(t),s=0;s<t;s++)i[s]=arguments[s];return i.forEach((t=>{if("object"==typeof t)for(let i in t)t[i]&&e.push(i);else t&&e.push(t)})),e.join(" ")}function p(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:i.days;if(!e||!t)return!1;let a=o(e),n=o(t),r={[i.days]:a.date===n.date&&a.month===n.month&&a.year===n.year,[i.months]:a.month===n.month&&a.year===n.year,[i.years]:a.year===n.year};return r[s]}function m(e,t,i){let s=g(e,!1).getTime(),a=g(t,!1).getTime();return i?s>=a:s>a}function v(e,t){return!m(e,t,!0)}function g(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],i=new Date(e.getTime());return"boolean"!=typeof t||t||D(i),i}function D(e){return e.setHours(0,0,0,0),e}function y(e,t,i){e.length?e.forEach((e=>{e.addEventListener(t,i)})):e.addEventListener(t,i)}function f(e,t){return!(!e||e===document||e instanceof DocumentFragment)&&(e.matches(t)?e:f(e.parentNode,t))}function w(e,t,i){return e>i?i:e<t?t:e}function b(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];return i.filter((e=>e)).forEach((t=>{for(let[i,s]of Object.entries(t))if(void 0!==s&&"[object Object]"===s.toString()){let t=void 0!==e[i]?e[i].toString():void 0,a=s.toString(),n=Array.isArray(s)?[]:{};e[i]=e[i]?t!==a?n:e[i]:n,b(e[i],s)}else e[i]=s})),e}function k(e){let t=e;return e instanceof Date||(t=new Date(e)),isNaN(t.getTime())&&(console.log(`Unable to convert value "${e}" to Date object`),t=!1),t}function C(e){let t="\\s|\\.|-|/|\\\\|,|\\$|\\!|\\?|:|;";return new RegExp("(^|>|"+t+")("+e+")($|<|"+t+")","g")}function $(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class _{constructor(){let{type:e,date:t,dp:i,opts:s,body:a}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};$(this,"focus",(()=>{this.$cell.classList.add("-focus-"),this.focused=!0})),$(this,"removeFocus",(()=>{this.$cell.classList.remove("-focus-"),this.focused=!1})),$(this,"select",(()=>{this.$cell.classList.add("-selected-"),this.selected=!0})),$(this,"removeSelect",(()=>{this.$cell.classList.remove("-selected-","-range-from-","-range-to-"),this.selected=!1})),$(this,"onChangeSelectedDate",(()=>{this.isDisabled||(this._handleSelectedStatus(),this.opts.range&&this._handleRangeStatus())})),$(this,"onChangeFocusDate",(e=>{if(!e)return void(this.focused&&this.removeFocus());let t=p(e,this.date,this.type);t?this.focus():!t&&this.focused&&this.removeFocus(),this.opts.range&&this._handleRangeStatus()})),$(this,"render",(()=>(this.$cell.innerHTML=this._getHtml(),this.$cell.adpCell=this,this.$cell))),this.type=e,this.singleType=this.type.slice(0,-1),this.date=t,this.dp=i,this.opts=s,this.body=a,this.customData=!1,this.init()}init(){let{range:e,onRenderCell:t}=this.opts;t&&(this.customData=t({date:this.date,cellType:this.singleType,datepicker:this.dp})),this._createElement(),this._bindDatepickerEvents(),this._handleInitialFocusStatus(),this.dp.hasSelectedDates&&(this._handleSelectedStatus(),e&&this._handleRangeStatus())}_bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeFocusDate,this.onChangeFocusDate)}unbindDatepickerEvents(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeFocusDate,this.onChangeFocusDate)}_createElement(){var e;let{year:t,month:i,date:s}=o(this.date),a=(null===(e=this.customData)||void 0===e?void 0:e.attrs)||{};this.$cell=n({className:this._getClassName(),attrs:{"data-year":t,"data-month":i,"data-date":s,...a}})}_getClassName(){var e,t;let s=new Date,{selectOtherMonths:a,selectOtherYears:n}=this.opts,{minDate:r,maxDate:h}=this.dp,{day:l}=o(this.date),d=this._isOutOfMinMaxRange(),c=null===(e=this.customData)||void 0===e?void 0:e.disabled,m=u("air-datepicker-cell",`-${this.singleType}-`,{"-current-":p(s,this.date,this.type),"-min-date-":r&&p(r,this.date,this.type),"-max-date-":h&&p(h,this.date,this.type)}),v="";switch(this.type){case i.days:v=u({"-weekend-":this.dp.isWeekend(l),"-other-month-":this.isOtherMonth,"-disabled-":this.isOtherMonth&&!a||d||c});break;case i.months:v=u({"-disabled-":d||c});break;case i.years:v=u({"-other-decade-":this.isOtherDecade,"-disabled-":d||this.isOtherDecade&&!n||c})}return u(m,v,null===(t=this.customData)||void 0===t?void 0:t.classes)}_getHtml(){var e;let{year:t,month:s,date:a}=o(this.date),{showOtherMonths:n,showOtherYears:r}=this.opts;if(null!==(e=this.customData)&&void 0!==e&&e.html)return this.customData.html;switch(this.type){case i.days:return!n&&this.isOtherMonth?"":a;case i.months:return this.dp.locale[this.opts.monthsField][s];case i.years:return!r&&this.isOtherDecade?"":t}}_isOutOfMinMaxRange(){let{minDate:e,maxDate:t}=this.dp,{type:s,date:a}=this,{month:n,year:r,date:h}=o(a),l=s===i.days,d=s===i.years,c=!!e&&new Date(r,d?e.getMonth():n,l?h:e.getDate()),u=!!t&&new Date(r,d?t.getMonth():n,l?h:t.getDate());return e&&t?v(c,e)||m(u,t):e?v(c,e):t?m(u,t):void 0}destroy(){this.unbindDatepickerEvents()}_handleRangeStatus(){let{rangeDateFrom:e,rangeDateTo:t}=this.dp,i=u({"-in-range-":e&&t&&(s=this.date,a=e,n=t,m(s,a)&&v(s,n)),"-range-from-":e&&p(this.date,e,this.type),"-range-to-":t&&p(this.date,t,this.type)});var s,a,n;this.$cell.classList.remove("-range-from-","-range-to-","-in-range-"),i&&this.$cell.classList.add(...i.split(" "))}_handleSelectedStatus(){let e=this.dp._checkIfDateIsSelected(this.date,this.type);e?this.select():!e&&this.selected&&this.removeSelect()}_handleInitialFocusStatus(){p(this.dp.focusDate,this.date,this.type)&&this.focus()}get isDisabled(){return this.$cell.matches(".-disabled-")}get isOtherMonth(){return this.dp.isOtherMonth(this.date)}get isOtherDecade(){return this.dp.isOtherDecade(this.date)}}function M(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let S={[i.days]:`<div class="air-datepicker-body--day-names"></div><div class="air-datepicker-body--cells -${i.days}-"></div>`,[i.months]:`<div class="air-datepicker-body--cells -${i.months}-"></div>`,[i.years]:`<div class="air-datepicker-body--cells -${i.years}-"></div>`};const T=".air-datepicker-cell";class F{constructor(e){let{dp:t,type:s,opts:a}=e;M(this,"handleClick",(e=>{let t=e.target.closest(T).adpCell;if(t.isDisabled)return;if(!this.dp.isMinViewReached)return void this.dp.down();let i=this.dp._checkIfDateIsSelected(t.date,t.type);i?this.dp._handleAlreadySelectedDates(i,t.date):this.dp.selectDate(t.date)})),M(this,"handleDayNameClick",(e=>{let t=e.target.getAttribute("data-day-index");this.opts.onClickDayName({dayIndex:Number(t),datepicker:this.dp})})),M(this,"onChangeCurrentView",(e=>{e!==this.type?this.hide():(this.show(),this.render())})),M(this,"onMouseOverCell",(e=>{let t=f(e.target,T);this.dp.setFocusDate(!!t&&t.adpCell.date)})),M(this,"onMouseOutCell",(()=>{this.dp.setFocusDate(!1)})),M(this,"onClickBody",(e=>{let{onClickDayName:t}=this.opts,i=e.target;i.closest(T)&&this.handleClick(e),t&&i.closest(".air-datepicker-body--day-name")&&this.handleDayNameClick(e)})),M(this,"onMouseDown",(e=>{this.pressed=!0;let t=f(e.target,T),i=t&&t.adpCell;p(i.date,this.dp.rangeDateFrom)&&(this.rangeFromFocused=!0),p(i.date,this.dp.rangeDateTo)&&(this.rangeToFocused=!0)})),M(this,"onMouseMove",(e=>{if(!this.pressed||!this.dp.isMinViewReached)return;e.preventDefault();let t=f(e.target,T),i=t&&t.adpCell,{selectedDates:s,rangeDateTo:a,rangeDateFrom:n}=this.dp;if(!i||i.isDisabled)return;let{date:r}=i;if(2===s.length){if(this.rangeFromFocused&&!m(r,a)){let{hours:e,minutes:t}=o(n);r.setHours(e),r.setMinutes(t),this.dp.rangeDateFrom=r,this.dp.replaceDate(n,r)}if(this.rangeToFocused&&!v(r,n)){let{hours:e,minutes:t}=o(a);r.setHours(e),r.setMinutes(t),this.dp.rangeDateTo=r,this.dp.replaceDate(a,r)}}})),M(this,"onMouseUp",(()=>{this.pressed=!1,this.rangeFromFocused=!1,this.rangeToFocused=!1})),M(this,"onChangeViewDate",((e,t)=>{if(!this.isVisible)return;let s=c(e),a=c(t);switch(this.dp.currentView){case i.days:if(p(e,t,i.months))return;break;case i.months:if(p(e,t,i.years))return;break;case i.years:if(s[0]===a[0]&&s[1]===a[1])return}this.render()})),M(this,"render",(()=>{this.destroyCells(),this._generateCells(),this.cells.forEach((e=>{this.$cells.appendChild(e.render())}))})),this.dp=t,this.type=s,this.opts=a,this.cells=[],this.$el="",this.pressed=!1,this.isVisible=!0,this.init()}init(){this._buildBaseHtml(),this.type===i.days&&this.renderDayNames(),this.render(),this._bindEvents(),this._bindDatepickerEvents()}_bindEvents(){let{range:e,dynamicRange:t}=this.opts;y(this.$el,"mouseover",this.onMouseOverCell),y(this.$el,"mouseout",this.onMouseOutCell),y(this.$el,"click",this.onClickBody),e&&t&&(y(this.$el,"mousedown",this.onMouseDown),y(this.$el,"mousemove",this.onMouseMove),y(window.document,"mouseup",this.onMouseUp))}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView)}_buildBaseHtml(){this.$el=n({className:`air-datepicker-body -${this.type}-`,innerHtml:S[this.type]}),this.$names=a(".air-datepicker-body--day-names",this.$el),this.$cells=a(".air-datepicker-body--cells",this.$el)}_getDayNamesHtml(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.dp.locale.firstDay,t="",s=this.dp.isWeekend,{onClickDayName:a}=this.opts,n=e,r=0;for(;r<7;){let e=n%7;t+=`<div class="${u("air-datepicker-body--day-name",{[i.cssClassWeekend]:s(e),"-clickable-":!!a})}" data-day-index='${e}'>${this.dp.locale.daysMin[e]}</div>`,r++,n++}return t}_getDaysCells(){let{viewDate:e,locale:{firstDay:t}}=this.dp,i=h(e),{year:s,month:a}=o(e),n=new Date(s,a,1),r=new Date(s,a,i),l=n.getDay()-t,d=6-r.getDay()+t;l=l<0?l+7:l,d=d>6?d-7:d;let c=function(e,t){let{year:i,month:s,date:a}=o(e);return new Date(i,s,a-t)}(n,l),u=i+l+d,p=c.getDate(),{year:m,month:v}=o(c),g=0;for(;g<u;){let e=new Date(m,v,p+g);this._generateCell(e),g++}}_generateCell(e){let{type:t,dp:i,opts:s}=this,a=new _({type:t,dp:i,opts:s,date:e,body:this});return this.cells.push(a),a}_generateDayCells(){this._getDaysCells()}_generateMonthCells(){let{year:e}=this.dp.parsedViewDate,t=0;for(;t<12;)this.cells.push(this._generateCell(new Date(e,t))),t++}_generateYearCells(){let e=c(this.dp.viewDate),t=e[0]-1,i=e[1]+1,s=t;for(;s<=i;)this.cells.push(this._generateCell(new Date(s,0))),s++}renderDayNames(){this.$names.innerHTML=this._getDayNamesHtml()}_generateCells(){switch(this.type){case i.days:this._generateDayCells();break;case i.months:this._generateMonthCells();break;case i.years:this._generateYearCells()}}show(){this.isVisible=!0,this.$el.classList.remove("-hidden-")}hide(){this.isVisible=!1,this.$el.classList.add("-hidden-")}destroyCells(){this.cells.forEach((e=>e.destroy())),this.cells=[],this.$cells.innerHTML=""}destroy(){this.destroyCells(),this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView)}}function V(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class x{constructor(e){let{dp:t,opts:i}=e;V(this,"onClickNav",(e=>{let t=f(e.target,".air-datepicker-nav--action");if(!t)return;let i=t.dataset.action;this.dp[i]()})),V(this,"onChangeViewDate",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),V(this,"onChangeCurrentView",(()=>{this.render(),this._resetNavStatus(),this.handleNavStatus()})),V(this,"onClickNavTitle",(()=>{this.dp.isFinalView||this.dp.up()})),V(this,"update",(()=>{let{prevHtml:e,nextHtml:t}=this.opts;this.$prev.innerHTML=e,this.$next.innerHTML=t,this._resetNavStatus(),this.render(),this.handleNavStatus()})),V(this,"renderDelay",(()=>{setTimeout(this.render)})),V(this,"render",(()=>{this.$title.innerHTML=this._getTitle(),function(e,t){for(let i in t)t[i]?e.classList.add(i):e.classList.remove(i)}(this.$title,{"-disabled-":this.dp.isFinalView})})),this.dp=t,this.opts=i,this.init()}init(){this._createElement(),this._buildBaseHtml(),this._defineDOM(),this.render(),this.handleNavStatus(),this._bindEvents(),this._bindDatepickerEvents()}_defineDOM(){this.$title=a(".air-datepicker-nav--title",this.$el),this.$prev=a('[data-action="prev"]',this.$el),this.$next=a('[data-action="next"]',this.$el)}_bindEvents(){this.$el.addEventListener("click",this.onClickNav),this.$title.addEventListener("click",this.onClickNavTitle)}_bindDatepickerEvents(){this.dp.on(i.eventChangeViewDate,this.onChangeViewDate),this.dp.on(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.on(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.on(i.eventChangeTime,this.render))}destroy(){this.dp.off(i.eventChangeViewDate,this.onChangeViewDate),this.dp.off(i.eventChangeCurrentView,this.onChangeCurrentView),this.isNavIsFunction&&(this.dp.off(i.eventChangeSelectedDate,this.renderDelay),this.dp.opts.timepicker&&this.dp.off(i.eventChangeTime,this.render))}_createElement(){this.$el=n({tagName:"nav",className:"air-datepicker-nav"})}_getTitle(){let{dp:e,opts:t}=this,i=t.navTitles[e.currentView];return"function"==typeof i?i(e):e.formatDate(e.viewDate,i)}handleNavStatus(){let{disableNavWhenOutOfRange:e}=this.opts,{minDate:t,maxDate:s}=this.dp;if(!t&&!s||!e)return;let{year:a,month:n}=this.dp.parsedViewDate,r=!!t&&o(t),h=!!s&&o(s);switch(this.dp.currentView){case i.days:t&&r.month>=n&&r.year>=a&&this._disableNav("prev"),s&&h.month<=n&&h.year<=a&&this._disableNav("next");break;case i.months:t&&r.year>=a&&this._disableNav("prev"),s&&h.year<=a&&this._disableNav("next");break;case i.years:{let e=c(this.dp.viewDate);t&&r.year>=e[0]&&this._disableNav("prev"),s&&h.year<=e[1]&&this._disableNav("next");break}}}_disableNav(e){a('[data-action="'+e+'"]',this.$el).classList.add("-disabled-")}_resetNavStatus(){!function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];e.length?e.forEach((e=>{e.classList.remove(...i)})):e.classList.remove(...i)}(this.$el.querySelectorAll(".air-datepicker-nav--action"),"-disabled-")}_buildBaseHtml(){let{prevHtml:e,nextHtml:t}=this.opts;this.$el.innerHTML=`<div class="air-datepicker-nav--action" data-action="prev">${e}</div><div class="air-datepicker-nav--title"></div><div class="air-datepicker-nav--action" data-action="next">${t}</div>`}get isNavIsFunction(){let{navTitles:e}=this.opts;return Object.keys(e).find((t=>"function"==typeof e[t]))}}var H={today:{content:e=>e.locale.today,onClick:e=>e.setViewDate(new Date)},clear:{content:e=>e.locale.clear,onClick:e=>e.clear()}};class E{constructor(e){let{dp:t,opts:i}=e;this.dp=t,this.opts=i,this.init()}init(){this.createElement(),this.render()}createElement(){this.$el=n({className:"air-datepicker-buttons"})}destroy(){this.$el.parentNode.removeChild(this.$el)}clearHtml(){return this.$el.innerHTML="",this}generateButtons(){let{buttons:e}=this.opts;Array.isArray(e)||(e=[e]),e.forEach((e=>{let t=e;"string"==typeof e&&H[e]&&(t=H[e]);let i=this.createButton(t);t.onClick&&this.attachEventToButton(i,t.onClick),this.$el.appendChild(i)}))}attachEventToButton(e,t){e.addEventListener("click",(()=>{t(this.dp)}))}createButton(e){let{content:t,className:i,tagName:s="button",attrs:a={}}=e;return n({tagName:s,innerHtml:`<span tabindex='-1'>${"function"==typeof t?t(this.dp):t}</span>`,className:u("air-datepicker-button",i),attrs:a})}render(){this.generateButtons()}}function L(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class O{constructor(){let{opts:e,dp:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};L(this,"toggleTimepickerIsActive",(e=>{this.dp.timepickerIsActive=e})),L(this,"onChangeSelectedDate",(e=>{let{date:t,updateTime:i=!1}=e;t&&(this.setMinMaxTime(t),this.setCurrentTime(!!i&&t),this.addTimeToDate(t))})),L(this,"onChangeLastSelectedDate",(e=>{e&&(this.setTime(e),this.render())})),L(this,"onChangeInputRange",(e=>{let t=e.target;this[t.getAttribute("name")]=t.value,this.updateText(),this.dp.trigger(i.eventChangeTime,{hours:this.hours,minutes:this.minutes})})),L(this,"onMouseEnterLeave",(e=>{let t=e.target.getAttribute("name"),i=this.$minutesText;"hours"===t&&(i=this.$hoursText),i.classList.toggle("-focus-")})),L(this,"onFocus",(()=>{this.toggleTimepickerIsActive(!0)})),L(this,"onBlur",(()=>{this.toggleTimepickerIsActive(!1)})),this.opts=e,this.dp=t;let{timeFormat:s}=this.dp.locale;s&&(s.match(C("h"))||s.match(C("hh")))&&(this.ampm=!0),this.init()}init(){this.setTime(this.dp.lastSelectedDate||this.dp.viewDate),this.createElement(),this.buildHtml(),this.defineDOM(),this.render(),this.bindDatepickerEvents(),this.bindDOMEvents()}bindDatepickerEvents(){this.dp.on(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.on(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate)}bindDOMEvents(){let e="input";navigator.userAgent.match(/trident/gi)&&(e="change"),y(this.$ranges,e,this.onChangeInputRange),y(this.$ranges,"mouseenter",this.onMouseEnterLeave),y(this.$ranges,"mouseleave",this.onMouseEnterLeave),y(this.$ranges,"focus",this.onFocus),y(this.$ranges,"mousedown",this.onFocus),y(this.$ranges,"blur",this.onBlur)}createElement(){this.$el=n({className:u("air-datepicker-time",{"-am-pm-":this.dp.ampm})})}destroy(){this.dp.off(i.eventChangeSelectedDate,this.onChangeSelectedDate),this.dp.off(i.eventChangeLastSelectedDate,this.onChangeLastSelectedDate),this.$el.parentNode.removeChild(this.$el)}buildHtml(){let{ampm:e,hours:t,displayHours:i,minutes:s,minHours:a,minMinutes:n,maxHours:r,maxMinutes:h,dayPeriod:o,opts:{hoursStep:l,minutesStep:c}}=this;this.$el.innerHTML=`<div class="air-datepicker-time--current">   <span class="air-datepicker-time--current-hours">${d(i)}</span>   <span class="air-datepicker-time--current-colon">:</span>   <span class="air-datepicker-time--current-minutes">${d(s)}</span>   `+(e?`<span class='air-datepicker-time--current-ampm'>${o}</span>`:"")+'</div><div class="air-datepicker-time--sliders">   <div class="air-datepicker-time--row">'+`      <input type="range" name="hours" value="${t}" min="${a}" max="${r}" step="${l}"/>   </div>   <div class="air-datepicker-time--row">`+`      <input type="range" name="minutes" value="${s}" min="${n}" max="${h}" step="${c}"/>   </div></div>`}defineDOM(){let e=e=>a(e,this.$el);this.$ranges=this.$el.querySelectorAll('[type="range"]'),this.$hours=e('[name="hours"]'),this.$minutes=e('[name="minutes"]'),this.$hoursText=e(".air-datepicker-time--current-hours"),this.$minutesText=e(".air-datepicker-time--current-minutes"),this.$ampm=e(".air-datepicker-time--current-ampm")}setTime(e){this.setMinMaxTime(e),this.setCurrentTime(e)}addTimeToDate(e){e&&(e.setHours(this.hours),e.setMinutes(this.minutes))}setMinMaxTime(e){if(this.setMinMaxTimeFromOptions(),e){let{minDate:t,maxDate:i}=this.dp;t&&p(e,t)&&this.setMinTimeFromMinDate(t),i&&p(e,i)&&this.setMaxTimeFromMaxDate(i)}}setCurrentTime(e){let{hours:t,minutes:i}=e?o(e):this;this.hours=w(t,this.minHours,this.maxHours),this.minutes=w(i,this.minMinutes,this.maxMinutes)}setMinMaxTimeFromOptions(){let{minHours:e,minMinutes:t,maxHours:i,maxMinutes:s}=this.opts;this.minHours=w(e,0,23),this.minMinutes=w(t,0,59),this.maxHours=w(i,0,23),this.maxMinutes=w(s,0,59)}setMinTimeFromMinDate(e){let{lastSelectedDate:t}=this.dp;this.minHours=e.getHours(),t&&t.getHours()>e.getHours()?this.minMinutes=this.opts.minMinutes:this.minMinutes=e.getMinutes()}setMaxTimeFromMaxDate(e){let{lastSelectedDate:t}=this.dp;this.maxHours=e.getHours(),t&&t.getHours()<e.getHours()?this.maxMinutes=this.opts.maxMinutes:this.maxMinutes=e.getMinutes()}updateSliders(){r(this.$hours,{min:this.minHours,max:this.maxHours}).value=this.hours,r(this.$minutes,{min:this.minMinutes,max:this.maxMinutes}).value=this.minutes}updateText(){this.$hoursText.innerHTML=d(this.displayHours),this.$minutesText.innerHTML=d(this.minutes),this.ampm&&(this.$ampm.innerHTML=this.dayPeriod)}set hours(e){this._hours=e;let{hours:t,dayPeriod:i}=l(e);this.displayHours=this.ampm?t:e,this.dayPeriod=i}get hours(){return this._hours}render(){this.updateSliders(),this.updateText()}}function A(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class N{constructor(e){let{dp:t,opts:i}=e;A(this,"pressedKeys",new Set),A(this,"hotKeys",new Map([[[["Control","ArrowRight"],["Control","ArrowUp"]],e=>e.month++],[[["Control","ArrowLeft"],["Control","ArrowDown"]],e=>e.month--],[[["Shift","ArrowRight"],["Shift","ArrowUp"]],e=>e.year++],[[["Shift","ArrowLeft"],["Shift","ArrowDown"]],e=>e.year--],[[["Alt","ArrowRight"],["Alt","ArrowUp"]],e=>e.year+=10],[[["Alt","ArrowLeft"],["Alt","ArrowDown"]],e=>e.year-=10],[["Control","Shift","ArrowUp"],(e,t)=>t.up()]])),A(this,"handleHotKey",(e=>{let t=this.hotKeys.get(e),i=o(this.getInitialFocusDate());t(i,this.dp);let{year:s,month:a,date:n}=i,r=h(new Date(s,a));r<n&&(n=r);let l=this.dp.getClampedDate(new Date(s,a,n));this.dp.setFocusDate(l,{viewDateTransition:!0})})),A(this,"isHotKeyPressed",(()=>{let e=!1,t=this.pressedKeys.size,i=e=>this.pressedKeys.has(e);for(let[s]of this.hotKeys){if(e)break;if(Array.isArray(s[0]))s.forEach((a=>{e||t!==a.length||(e=a.every(i)&&s)}));else{if(t!==s.length)continue;e=s.every(i)&&s}}return e})),A(this,"isArrow",(e=>e>=37&&e<=40)),A(this,"onKeyDown",(e=>{let{key:t,which:i}=e,{dp:s,dp:{focusDate:a},opts:n}=this;this.registerKey(t);let r=this.isHotKeyPressed();if(r)return e.preventDefault(),void this.handleHotKey(r);if(this.isArrow(i))return e.preventDefault(),void this.focusNextCell(t);if("Enter"===t){if(s.currentView!==n.minView)return void s.down();if(a){let e=s._checkIfDateIsSelected(a);return void(e?s._handleAlreadySelectedDates(e,a):s.selectDate(a))}}"Escape"===t&&this.dp.hide()})),A(this,"onKeyUp",(e=>{this.removeKey(e.key)})),this.dp=t,this.opts=i,this.init()}init(){this.bindKeyboardEvents()}bindKeyboardEvents(){let{$el:e}=this.dp;e.addEventListener("keydown",this.onKeyDown),e.addEventListener("keyup",this.onKeyUp)}destroy(){let{$el:e}=this.dp;e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("keyup",this.onKeyUp),this.hotKeys=null,this.pressedKeys=null}getInitialFocusDate(){let{focusDate:e,currentView:t,selectedDates:s,parsedViewDate:{year:a,month:n}}=this.dp,r=e||s[s.length-1];if(!r)switch(t){case i.days:r=new Date(a,n,(new Date).getDate());break;case i.months:r=new Date(a,n,1);break;case i.years:r=new Date(a,0,1)}return r}focusNextCell(e){let t=this.getInitialFocusDate(),{currentView:s}=this.dp,{days:a,months:n,years:r}=i,h=o(t),l=h.year,d=h.month,c=h.date;switch(e){case"ArrowLeft":s===a&&(c-=1),s===n&&(d-=1),s===r&&(l-=1);break;case"ArrowUp":s===a&&(c-=7),s===n&&(d-=3),s===r&&(l-=4);break;case"ArrowRight":s===a&&(c+=1),s===n&&(d+=1),s===r&&(l+=1);break;case"ArrowDown":s===a&&(c+=7),s===n&&(d+=3),s===r&&(l+=4)}let u=this.dp.getClampedDate(new Date(l,d,c));this.dp.setFocusDate(u,{viewDateTransition:!0})}registerKey(e){this.pressedKeys.add(e)}removeKey(e){this.pressedKeys.delete(e)}}let I={on(e,t){this.__events||(this.__events={}),this.__events[e]?this.__events[e].push(t):this.__events[e]=[t]},off(e,t){this.__events&&this.__events[e]&&(this.__events[e]=this.__events[e].filter((e=>e!==t)))},removeAllEvents(){this.__events={}},trigger(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),s=1;s<t;s++)i[s-1]=arguments[s];this.__events&&this.__events[e]&&this.__events[e].forEach((e=>{e(...i)}))}};function P(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!=typeof s)return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}let j="",R="",B=!1;class K{static buildGlobalContainer(e){B=!0,j=n({className:e,id:e}),a("body").appendChild(j)}constructor(e,t){var r=this;if(P(this,"viewIndexes",[i.days,i.months,i.years]),P(this,"next",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t+1,1));break;case i.months:this.setViewDate(new Date(e+1,t,1));break;case i.years:this.setViewDate(new Date(e+10,0,1))}})),P(this,"prev",(()=>{let{year:e,month:t}=this.parsedViewDate;switch(this.currentView){case i.days:this.setViewDate(new Date(e,t-1,1));break;case i.months:this.setViewDate(new Date(e-1,t,1));break;case i.years:this.setViewDate(new Date(e-10,0,1))}})),P(this,"_finishHide",(()=>{this.hideAnimation=!1,this._destroyComponents(),this.$container.removeChild(this.$datepicker)})),P(this,"setPosition",(function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("function"==typeof(e=e||r.opts.position))return void(r.customHide=e({$datepicker:r.$datepicker,$target:r.$el,$pointer:r.$pointer,isViewChange:t,done:r._finishHide}));let i,s,{isMobile:a}=r.opts,n=r.$el.getBoundingClientRect(),h=r.$el.getBoundingClientRect(),o=r.$datepicker.offsetParent,l=r.$el.offsetParent,d=r.$datepicker.getBoundingClientRect(),c=e.split(" "),u=window.scrollY,p=window.scrollX,m=r.opts.offset,v=c[0],g=c[1];if(a)r.$datepicker.style.cssText="left: 50%; top: 50%";else{if(o===l&&o!==document.body&&(h={top:r.$el.offsetTop,left:r.$el.offsetLeft,width:n.width,height:r.$el.offsetHeight},u=0,p=0),o!==l&&o!==document.body){let e=o.getBoundingClientRect();h={top:n.top-e.top,left:n.left-e.left,width:n.width,height:n.height},u=0,p=0}switch(v){case"top":i=h.top-d.height-m;break;case"right":s=h.left+h.width+m;break;case"bottom":i=h.top+h.height+m;break;case"left":s=h.left-d.width-m}switch(g){case"top":i=h.top;break;case"right":s=h.left+h.width-d.width;break;case"bottom":i=h.top+h.height-d.height;break;case"left":s=h.left;break;case"center":/left|right/.test(v)?i=h.top+h.height/2-d.height/2:s=h.left+h.width/2-d.width/2}r.$datepicker.style.cssText=`left: ${s+p}px; top: ${i+u}px`}})),P(this,"_setInputValue",(()=>{let{opts:e,$altField:t,locale:{dateFormat:i}}=this,{altFieldDateFormat:s,altField:a}=e;a&&t&&(t.value=this._getInputValue(s)),this.$el.value=this._getInputValue(i)})),P(this,"_getInputValue",(e=>{let{selectedDates:t,opts:i}=this,{multipleDates:s,multipleDatesSeparator:a}=i;if(!t.length)return"";let n="function"==typeof e,r=n?e(s?t:t[0]):t.map((t=>this.formatDate(t,e)));return r=n?r:r.join(a),r})),P(this,"_checkIfDateIsSelected",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.days,s=!1;return r.selectedDates.some((i=>{let a=p(e,i,t);return s=a&&i,a})),s})),P(this,"_scheduleCallAfterTransition",(e=>{this._cancelScheduledCall(),e&&e(!1),this._onTransitionEnd=()=>{e&&e(!0)},this.$datepicker.addEventListener("transitionend",this._onTransitionEnd,{once:!0})})),P(this,"_cancelScheduledCall",(()=>{this.$datepicker.removeEventListener("transitionend",this._onTransitionEnd)})),P(this,"setViewDate",(e=>{if(!((e=k(e))instanceof Date))return;if(p(e,this.viewDate))return;let t=this.viewDate;this.viewDate=e;let{onChangeViewDate:s}=this.opts;if(s){let{month:e,year:t}=this.parsedViewDate;s({month:e,year:t,decade:this.curDecade})}this.trigger(i.eventChangeViewDate,e,t)})),P(this,"setFocusDate",(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};(!e||(e=k(e))instanceof Date)&&(r.focusDate=e,r.opts.range&&e&&r._handleRangeOnFocus(),r.trigger(i.eventChangeFocusDate,e,t))})),P(this,"setCurrentView",(e=>{if(this.viewIndexes.includes(e)){if(this.currentView=e,this.elIsInput&&this.visible&&this.setPosition(void 0,!0),this.trigger(i.eventChangeCurrentView,e),!this.views[e]){let t=this.views[e]=new F({dp:this,opts:this.opts,type:e});this.shouldUpdateDOM&&this.$content.appendChild(t.$el)}this.opts.onChangeView&&this.opts.onChangeView(e)}})),P(this,"_updateLastSelectedDate",(e=>{this.lastSelectedDate=e,this.trigger(i.eventChangeLastSelectedDate,e)})),P(this,"destroy",(()=>{let{showEvent:e,isMobile:t}=this.opts,i=this.$datepicker.parentNode;i&&i.removeChild(this.$datepicker),this.$el.removeEventListener(e,this._onFocus),this.$el.removeEventListener("blur",this._onBlur),window.removeEventListener("resize",this._onResize),t&&this._removeMobileAttributes(),this.keyboardNav&&this.keyboardNav.destroy(),this.views=null,this.nav=null,this.$datepicker=null,this.opts=null,this.$customContainer=null,this.viewDate=null,this.focusDate=null,this.selectedDates=null,this.rangeDateFrom=null,this.rangeDateTo=null})),P(this,"update",(e=>{let t=b({},this.opts);b(this.opts,e);let{timepicker:s,buttons:a,range:n,selectedDates:r,isMobile:h}=this.opts,o=this.visible||this.treatAsInline;this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this._handleLocale(),!t.selectedDates&&r&&this.selectDate(r),e.view&&this.setCurrentView(e.view),this._setInputValue(),t.range&&!n?(this.rangeDateTo=!1,this.rangeDateFrom=!1):!t.range&&n&&this.selectedDates.length&&(this.rangeDateFrom=this.selectedDates[0],this.rangeDateTo=this.selectedDates[1]),t.timepicker&&!s?(o&&this.timepicker.destroy(),this.timepicker=!1,this.$timepicker.parentNode.removeChild(this.$timepicker)):!t.timepicker&&s&&this._addTimepicker(),!t.buttons&&a?this._addButtons():t.buttons&&!a?(this.buttons.destroy(),this.$buttons.parentNode.removeChild(this.$buttons)):o&&t.buttons&&a&&this.buttons.clearHtml().render(),!t.isMobile&&h?(this.treatAsInline||R||this._createMobileOverlay(),this._addMobileAttributes(),this.visible&&this._showMobileOverlay()):t.isMobile&&!h&&(this._removeMobileAttributes(),this.visible&&(R.classList.remove("-active-"),"function"!=typeof this.opts.position&&this.setPosition())),o&&(this.nav.update(),this.views[this.currentView].render(),this.currentView===i.days&&this.views[this.currentView].renderDayNames())})),P(this,"isOtherMonth",(e=>{let{month:t}=o(e);return t!==this.parsedViewDate.month})),P(this,"isOtherYear",(e=>{let{year:t}=o(e);return t!==this.parsedViewDate.year})),P(this,"isOtherDecade",(e=>{let{year:t}=o(e),[i,s]=c(this.viewDate);return t<i||t>s})),P(this,"_onChangeSelectedDate",(e=>{let{silent:t}=e;setTimeout((()=>{this._setInputValue(),this.opts.onSelect&&!t&&this._triggerOnSelect()}))})),P(this,"_onChangeFocusedDate",(function(e){let{viewDateTransition:t}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!e)return;let i=!1;t&&(i=r.isOtherMonth(e)||r.isOtherYear(e)||r.isOtherDecade(e)),i&&r.setViewDate(e)})),P(this,"_onChangeTime",(e=>{let{hours:t,minutes:i}=e,s=new Date,{lastSelectedDate:a,opts:{onSelect:n}}=this,r=a;a||(r=s);let h=this.getCell(r,this.currentViewSingular),o=h&&h.adpCell;o&&o.isDisabled||(r.setHours(t),r.setMinutes(i),a?(this._setInputValue(),n&&this._triggerOnSelect()):this.selectDate(r))})),P(this,"_onFocus",(e=>{this.visible||this.show()})),P(this,"_onBlur",(e=>{this.inFocus||!this.visible||this.opts.isMobile||this.hide()})),P(this,"_onMouseDown",(e=>{this.inFocus=!0})),P(this,"_onMouseUp",(e=>{this.inFocus=!1,this.$el.focus()})),P(this,"_onResize",(()=>{this.visible&&"function"!=typeof this.opts.position&&this.setPosition()})),P(this,"_onClickOverlay",(()=>{this.visible&&this.hide()})),P(this,"isWeekend",(e=>this.opts.weekends.includes(e))),P(this,"getClampedDate",(e=>{let{minDate:t,maxDate:i}=this,s=e;return i&&m(e,i)?s=i:t&&v(e,t)&&(s=t),s})),this.$el=a(e),!this.$el)return;this.$datepicker=n({className:"air-datepicker"}),this.opts=b({},s,t),this.$customContainer=!!this.opts.container&&a(this.opts.container),this.$altField=a(this.opts.altField||!1);let{view:h,startDate:l}=this.opts;l||(this.opts.startDate=new Date),"INPUT"===this.$el.nodeName&&(this.elIsInput=!0),this.inited=!1,this.visible=!1,this.viewDate=k(this.opts.startDate),this.focusDate=!1,this.initialReadonly=this.$el.getAttribute("readonly"),this.customHide=!1,this.currentView=h,this.selectedDates=[],this.views={},this.keys=[],this.rangeDateFrom="",this.rangeDateTo="",this.timepickerIsActive=!1,this.treatAsInline=this.opts.inline||!this.elIsInput,this.init()}init(){let{opts:e,treatAsInline:t,opts:{inline:i,isMobile:s,selectedDates:n,keyboardNav:r,onlyTimepicker:h}}=this,o=a("body");(!B||B&&j&&!o.contains(j))&&!i&&this.elIsInput&&!this.$customContainer&&K.buildGlobalContainer(K.defaultGlobalContainerId),!s||R||t||this._createMobileOverlay(),this._handleLocale(),this._bindSubEvents(),this._createMinMaxDates(),this._limitViewDateByMaxMinDates(),this.elIsInput&&(i||this._bindEvents(),r&&!h&&(this.keyboardNav=new N({dp:this,opts:e}))),n&&this.selectDate(n,{silent:!0}),this.opts.visible&&!t&&this.show(),s&&!t&&this.$el.setAttribute("readonly",!0),t&&this._createComponents()}_createMobileOverlay(){R=n({className:"air-datepicker-overlay"}),j.appendChild(R)}_createComponents(){let{opts:e,treatAsInline:t,opts:{inline:i,buttons:s,timepicker:a,position:n,classes:r,onlyTimepicker:h,isMobile:o}}=this;this._buildBaseHtml(),this.elIsInput&&(i||this._setPositionClasses(n)),!i&&this.elIsInput||this.$datepicker.classList.add("-inline-"),r&&this.$datepicker.classList.add(...r.split(" ")),h&&this.$datepicker.classList.add("-only-timepicker-"),o&&!t&&this._addMobileAttributes(),this.views[this.currentView]=new F({dp:this,type:this.currentView,opts:e}),this.nav=new x({dp:this,opts:e}),a&&this._addTimepicker(),s&&this._addButtons(),this.$content.appendChild(this.views[this.currentView].$el),this.$nav.appendChild(this.nav.$el)}_destroyComponents(){for(let e in this.views)this.views[e].destroy();this.views={},this.nav.destroy(),this.timepicker&&this.timepicker.destroy()}_addMobileAttributes(){R.addEventListener("click",this._onClickOverlay),this.$datepicker.classList.add("-is-mobile-"),this.$el.setAttribute("readonly",!0)}_removeMobileAttributes(){R.removeEventListener("click",this._onClickOverlay),this.$datepicker.classList.remove("-is-mobile-"),this.initialReadonly||""===this.initialReadonly||this.$el.removeAttribute("readonly")}_createMinMaxDates(){let{minDate:e,maxDate:t}=this.opts;this.minDate=!!e&&k(e),this.maxDate=!!t&&k(t)}_addTimepicker(){this.$timepicker=n({className:"air-datepicker--time"}),this.$datepicker.appendChild(this.$timepicker),this.timepicker=new O({dp:this,opts:this.opts}),this.$timepicker.appendChild(this.timepicker.$el)}_addButtons(){this.$buttons=n({className:"air-datepicker--buttons"}),this.$datepicker.appendChild(this.$buttons),this.buttons=new E({dp:this,opts:this.opts}),this.$buttons.appendChild(this.buttons.$el)}_bindSubEvents(){this.on(i.eventChangeSelectedDate,this._onChangeSelectedDate),this.on(i.eventChangeFocusDate,this._onChangeFocusedDate),this.on(i.eventChangeTime,this._onChangeTime)}_buildBaseHtml(){let{inline:e}=this.opts;var t,i;this.elIsInput?e?(t=this.$datepicker,(i=this.$el).parentNode.insertBefore(t,i.nextSibling)):this.$container.appendChild(this.$datepicker):this.$el.appendChild(this.$datepicker),this.$datepicker.innerHTML='<i class="air-datepicker--pointer"></i><div class="air-datepicker--navigation"></div><div class="air-datepicker--content"></div>',this.$content=a(".air-datepicker--content",this.$datepicker),this.$pointer=a(".air-datepicker--pointer",this.$datepicker),this.$nav=a(".air-datepicker--navigation",this.$datepicker)}_handleLocale(){let{locale:e,dateFormat:t,firstDay:i,timepicker:s,onlyTimepicker:a,timeFormat:n,dateTimeSeparator:r}=this.opts;var h;this.locale=(h=e,JSON.parse(JSON.stringify(h))),t&&(this.locale.dateFormat=t),void 0!==n&&""!==n&&(this.locale.timeFormat=n);let{timeFormat:o}=this.locale;if(""!==i&&(this.locale.firstDay=i),s&&"function"!=typeof t){let e=o?r:"";this.locale.dateFormat=[this.locale.dateFormat,o||""].join(e)}a&&"function"!=typeof t&&(this.locale.dateFormat=this.locale.timeFormat)}_setPositionClasses(e){if("function"==typeof e)return void this.$datepicker.classList.add("-custom-position-");let t=(e=e.split(" "))[0],i=`air-datepicker -${t}-${e[1]}- -from-${t}-`;this.$datepicker.classList.add(...i.split(" "))}_bindEvents(){this.$el.addEventListener(this.opts.showEvent,this._onFocus),this.$el.addEventListener("blur",this._onBlur),this.$datepicker.addEventListener("mousedown",this._onMouseDown),this.$datepicker.addEventListener("mouseup",this._onMouseUp),window.addEventListener("resize",this._onResize)}_limitViewDateByMaxMinDates(){let{viewDate:e,minDate:t,maxDate:i}=this;i&&m(e,i)&&this.setViewDate(i),t&&v(e,t)&&this.setViewDate(t)}formatDate(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.viewDate,t=arguments.length>1?arguments[1]:void 0;if(e=k(e),!(e instanceof Date))return;let i=t,s=this.locale,a=o(e),n=a.dayPeriod,r=c(e),h=K.replacer,l={T:e.getTime(),m:a.minutes,mm:a.fullMinutes,h:a.hours12,hh:a.fullHours12,H:a.hours,HH:a.fullHours,aa:n,AA:n.toUpperCase(),E:s.daysShort[a.day],EEEE:s.days[a.day],d:a.date,dd:a.fullDate,M:a.month+1,MM:a.fullMonth,MMM:s.monthsShort[a.month],MMMM:s.months[a.month],yy:a.year.toString().slice(-2),yyyy:a.year,yyyy1:r[0],yyyy2:r[1]};for(let[e,t]of Object.entries(l))i=h(i,C(e),t);return i}down(e){this._handleUpDownActions(e,"down")}up(e){this._handleUpDownActions(e,"up")}selectDate(e){let t,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{currentView:a,parsedViewDate:n,selectedDates:r}=this,{updateTime:h}=s,{moveToOtherMonthsOnSelect:o,moveToOtherYearsOnSelect:l,multipleDates:d,range:c,autoClose:u}=this.opts,p=r.length;if(Array.isArray(e))return e.forEach((e=>{this.selectDate(e,s)})),new Promise((e=>{setTimeout(e)}));if((e=k(e))instanceof Date){if(a===i.days&&e.getMonth()!==n.month&&o&&(t=new Date(e.getFullYear(),e.getMonth(),1)),a===i.years&&e.getFullYear()!==n.year&&l&&(t=new Date(e.getFullYear(),0,1)),t&&this.setViewDate(t),d&&!c){if(p===d)return;this._checkIfDateIsSelected(e)||r.push(e)}else if(c)switch(p){case 1:r.push(e),this.rangeDateTo||(this.rangeDateTo=e),m(this.rangeDateFrom,this.rangeDateTo)&&(this.rangeDateTo=this.rangeDateFrom,this.rangeDateFrom=e),this.selectedDates=[this.rangeDateFrom,this.rangeDateTo];break;case 2:this.selectedDates=[e],this.rangeDateFrom=e,this.rangeDateTo="";break;default:this.selectedDates=[e],this.rangeDateFrom=e}else this.selectedDates=[e];return this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,silent:null==s?void 0:s.silent,date:e,updateTime:h}),this._updateLastSelectedDate(e),u&&!this.timepickerIsActive&&this.visible&&(d||c?c&&1===p&&this.hide():this.hide()),new Promise((e=>{setTimeout(e)}))}}unselectDate(e){let t=this.selectedDates,s=this;if((e=k(e))instanceof Date)return t.some(((a,n)=>{if(p(a,e))return t.splice(n,1),s.selectedDates.length?s._updateLastSelectedDate(s.selectedDates[s.selectedDates.length-1]):(s.rangeDateFrom="",s.rangeDateTo="",s._updateLastSelectedDate(!1)),this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,date:e}),!0}))}replaceDate(e,t){let s=this.selectedDates.find((t=>p(t,e,this.currentView))),a=this.selectedDates.indexOf(s);a<0||p(this.selectedDates[a],t,this.currentView)||(this.selectedDates[a]=t,this.trigger(i.eventChangeSelectedDate,{action:i.actionSelectDate,date:t,updateTime:!0}),this._updateLastSelectedDate(t))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.selectedDates=[],this.rangeDateFrom=!1,this.rangeDateTo=!1,this.trigger(i.eventChangeSelectedDate,{action:i.actionUnselectDate,silent:e.silent}),new Promise((e=>{setTimeout(e)}))}show(){let{onShow:e,isMobile:t}=this.opts;this._cancelScheduledCall(),this.visible||this.hideAnimation||this._createComponents(),this.setPosition(this.opts.position),this.$datepicker.classList.add("-active-"),this.visible=!0,e&&this._scheduleCallAfterTransition(e),t&&this._showMobileOverlay()}hide(){let{onHide:e,isMobile:t}=this.opts,i=this._hasTransition();this.visible=!1,this.hideAnimation=!0,this.$datepicker.classList.remove("-active-"),this.customHide&&this.customHide(),this.elIsInput&&this.$el.blur(),this._scheduleCallAfterTransition((t=>{!this.customHide&&(t&&i||!t&&!i)&&this._finishHide(),e&&e(t)})),t&&R.classList.remove("-active-")}_triggerOnSelect(){let e=[],t=[],{selectedDates:i,locale:s,opts:{onSelect:a,multipleDates:n,range:r}}=this,h=n||r,o="function"==typeof s.dateFormat;i.length&&(e=i.map(g),t=o?n?s.dateFormat(e):e.map((e=>s.dateFormat(e))):e.map((e=>this.formatDate(e,s.dateFormat)))),a({date:h?e:e[0],formattedDate:h?t:t[0],datepicker:this})}_handleAlreadySelectedDates(e,t){let{range:i,toggleSelected:s}=this.opts;i?s?this.unselectDate(t):2!==this.selectedDates.length&&this.selectDate(t):s&&this.unselectDate(t),s||this._updateLastSelectedDate(e)}_handleUpDownActions(e,t){if(!((e=k(e||this.focusDate||this.viewDate))instanceof Date))return;let i="up"===t?this.viewIndex+1:this.viewIndex-1;i>2&&(i=2),i<0&&(i=0),this.setViewDate(new Date(e.getFullYear(),e.getMonth(),1)),this.setCurrentView(this.viewIndexes[i])}_handleRangeOnFocus(){1===this.selectedDates.length&&(m(this.selectedDates[0],this.focusDate)?(this.rangeDateTo=this.selectedDates[0],this.rangeDateFrom=this.focusDate):(this.rangeDateTo=this.focusDate,this.rangeDateFrom=this.selectedDates[0]))}getCell(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.day;if(!((e=k(e))instanceof Date))return;let{year:s,month:a,date:n}=o(e),r=`[data-year="${s}"]`,h=`[data-month="${a}"]`,l={[i.day]:`${r}${h}[data-date="${n}"]`,[i.month]:`${r}${h}`,[i.year]:`${r}`};return this.views[this.currentView].$el.querySelector(l[t])}_showMobileOverlay(){R.classList.add("-active-")}_hasTransition(){return window.getComputedStyle(this.$datepicker).getPropertyValue("transition-duration").split(", ").reduce(((e,t)=>parseFloat(t)+e),0)>0}get shouldUpdateDOM(){return this.visible||this.treatAsInline}get parsedViewDate(){return o(this.viewDate)}get currentViewSingular(){return this.currentView.slice(0,-1)}get curDecade(){return c(this.viewDate)}get viewIndex(){return this.viewIndexes.indexOf(this.currentView)}get isFinalView(){return this.currentView===i.years}get hasSelectedDates(){return this.selectedDates.length>0}get isMinViewReached(){return this.currentView===this.opts.minView||this.currentView===i.days}get $container(){return this.$customContainer||j}static replacer(e,t,i){return e.replace(t,(function(e,t,s,a){return t+i+a}))}}var U;return P(K,"defaults",s),P(K,"version","3.3.5"),P(K,"defaultGlobalContainerId","air-datepicker-global-container"),U=K.prototype,Object.assign(U,I),t.default}()}));
// @fancyapps/ui/Fancybox v4.0.31
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&h(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=c(t);if(e){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return u(this,i)}}function v(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=c(t)););return t}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,i){var n=v(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:i):o.value}},p.apply(this,arguments)}function g(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,a=[],s=!0,r=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return a}(t,e)||y(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(t){return function(t){if(Array.isArray(t))return b(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||y(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,e){if(t){if("string"==typeof t)return b(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?b(t,e):void 0}}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function x(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=y(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}var w=function(t){return"object"===n(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},k=function t(){for(var e=!1,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];"boolean"==typeof o[0]&&(e=o.shift());var s=o[0];if(!s||"object"!==n(s))throw new Error("extendee must be an object");for(var r=o.slice(1),l=r.length,c=0;c<l;c++){var h=r[c];for(var d in h)if(h.hasOwnProperty(d)){var u=h[d];if(e&&(Array.isArray(u)||w(u))){var f=Array.isArray(u)?[]:{};s[d]=t(!0,s.hasOwnProperty(d)?s[d]:f,u)}else s[d]=u}}return s},S=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},C=function t(e){return!!(e&&"object"===n(e)&&e instanceof Element&&e!==document.body)&&(!e.__Panzoom&&(function(t){var e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode)))},$="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){o(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return s(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),E=s((function t(e){o(this,t),this.id=self.Touch&&e instanceof Touch?e.identifier:-1,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY})),P=function(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0},T=function(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t},L=function(t){return"changedTouches"in t},_=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.start,s=void 0===a?function(){return!0}:a,r=n.move,l=void 0===r?function(){}:r,c=n.end,h=void 0===c?function(){}:c;o(this,t),this._element=e,this.startPointers=[],this.currentPointers=[],this._pointerStart=function(t){if(!(t.buttons>0&&0!==t.button)){var e=new E(t);i.currentPointers.some((function(t){return t.id===e.id}))||i._triggerPointerStart(e,t)&&(window.addEventListener("mousemove",i._move),window.addEventListener("mouseup",i._pointerEnd))}},this._touchStart=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerStart(new E(o),t)}},this._move=function(t){var e,n=i.currentPointers.slice(),o=L(t)?Array.from(t.changedTouches).map((function(t){return new E(t)})):[new E(t)],a=[],s=x(o);try{var r=function(){var t=e.value,n=i.currentPointers.findIndex((function(e){return e.id===t.id}));if(n<0)return"continue";a.push(t),i.currentPointers[n]=t};for(s.s();!(e=s.n()).done;)r()}catch(t){s.e(t)}finally{s.f()}i._moveCallback(n,i.currentPointers.slice(),t)},this._triggerPointerEnd=function(t,e){var n=i.currentPointers.findIndex((function(e){return e.id===t.id}));return!(n<0)&&(i.currentPointers.splice(n,1),i.startPointers.splice(n,1),i._endCallback(t,e),!0)},this._pointerEnd=function(t){t.buttons>0&&0!==t.button||i._triggerPointerEnd(new E(t),t)&&(window.removeEventListener("mousemove",i._move,{passive:!1}),window.removeEventListener("mouseup",i._pointerEnd,{passive:!1}))},this._touchEnd=function(t){for(var e=0,n=Array.from(t.changedTouches||[]);e<n.length;e++){var o=n[e];i._triggerPointerEnd(new E(o),t)}},this._startCallback=s,this._moveCallback=l,this._endCallback=h,this._element.addEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.addEventListener("touchstart",this._touchStart,{passive:!1}),this._element.addEventListener("touchmove",this._move,{passive:!1}),this._element.addEventListener("touchend",this._touchEnd),this._element.addEventListener("touchcancel",this._touchEnd)}return s(t,[{key:"stop",value:function(){this._element.removeEventListener("mousedown",this._pointerStart,{passive:!1}),this._element.removeEventListener("touchstart",this._touchStart,{passive:!1}),this._element.removeEventListener("touchmove",this._move,{passive:!1}),this._element.removeEventListener("touchend",this._touchEnd),this._element.removeEventListener("touchcancel",this._touchEnd),window.removeEventListener("mousemove",this._move),window.removeEventListener("mouseup",this._pointerEnd)}},{key:"_triggerPointerStart",value:function(t,e){return!!this._startCallback(t,e)&&(this.currentPointers.push(t),this.startPointers.push(t),!0)}}]),t}(),A=function(t,e){return t.split(".").reduce((function(t,e){return t&&t[e]}),e)},O=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=k(!0,{},e),this.plugins=[],this.events={};for(var i=0,n=["on","once"];i<n.length;i++)for(var a=n[i],s=0,r=Object.entries(this.options[a]||{});s<r.length;s++){var l=r[s];this[a].apply(this,m(l))}}return s(t,[{key:"option",value:function(t,e){t=String(t);var i=A(t,this.options);if("function"==typeof i){for(var n,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];i=(n=i).call.apply(n,[this,this].concat(a))}return void 0===i?e:i}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return t=(t=String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var a="";o?a=e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):n&&(a=e.option("l10n.".concat(n))),a||(a=t);for(var s=0;s<i.length;s++)a=a.split(i[s][0]).join(i[s][1]);return a}))).replace(/\{\{(.*)\}\}/,(function(t,e){return e}))}},{key:"on",value:function(t,e){var i=this;if(w(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.on.apply(this,m(a))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(w(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.once.apply(this,m(a))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];e.call.apply(e,[i,i].concat(a))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!w(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,a=0,s=n.length;a<s;a++){var r=n[a];if(r&&(r===e||r._===e)){o=a;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.off.apply(this,m(a))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,a=x(m(this.events[t]||[]).slice());try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){a.e(t)}finally{a.f()}var r,l=x(m(this.events["*"]||[]).slice());try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c&&!1===c.call.apply(c,[this,t,this].concat(i)))return!1}}catch(t){l.e(t)}finally{l.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=g(n[i],2),a=o[0],s=o[1];!1===this.options[a]||this.plugins[a]||(this.options[a]=k({},s.defaults||{},this.options[a]),e[a]=new s(this))}for(var r=0,l=Object.entries(e);r<l.length;r++){var c=g(l[r],2);c[0],c[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}(),z={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1},M=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),(i=e.call(this,k(!0,{},z,a))).state="init",i.$container=t;for(var s=0,r=["onLoad","onWheel","onClick"];s<r.length;s++){var l=r[s];i[l]=i[l].bind(d(i))}return i.initLayout(),i.resetValues(),i.attachPlugins(n.Plugins),i.trigger("init"),i.updateMetrics(),i.attachEvents(),i.trigger("ready"),!1===i.option("centerOnStart")?i.state="ready":i.panTo({friction:0}),t.__Panzoom=d(i),i}return s(n,[{key:"initLayout",value:function(){var t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");var e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;var i,n=this.option("viewport")||t.querySelector(".panzoom__viewport");n||!1===this.option("wrapInner")||((n=document.createElement("div")).classList.add("panzoom__viewport"),(i=n).append.apply(i,m(t.childNodes)),t.appendChild(n));this.$viewport=n||e.parentNode}},{key:"resetValues",value:function(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origWidth:0,origHeight:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}},{key:"onLoad",value:function(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}},{key:"onClick",value:function(t){if(!(t.defaultPrevented||document.activeElement&&document.activeElement.closest("[contenteditable]")))if(!this.option("textSelection")||!window.getSelection().toString().length||t.target&&t.target.hasAttribute("data-fancybox-close")){var e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}else t.stopPropagation()}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale,n=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),n=i):(this.changedDelta=0,n=Math.max(Math.min(n,this.option("maxScale")),this.option("minScale"))),!(this.changedDelta>this.option("wheelLimit"))&&(t.preventDefault(),n!==i)){var o=this.$content.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top;this.zoomTo(n,{x:a,y:s})}}},{key:"zoomWithClick",value:function(t){var e=this.$content.getClientRects()[0],i=t.clientX-e.left,n=t.clientY-e.top;this.toggleZoom({x:i,y:n})}},{key:"attachEvents",value:function(){var t=this;this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();var e=new _(this.$container,{start:function(i,n){if(!t.option("touch"))return!1;if(t.velocity.scale<0)return!1;var o=n.composedPath()[0];if(!e.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(o.nodeName))return!1;if(t.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),a=0;a<n.length;a++){var s=n[a];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var r=o.getBoundingClientRect();if(e>=r.left&&i>=r.top&&e<=r.right&&i<=r.bottom)return s}}return!1}(o,i.clientX,i.clientY))return!1}return!C(o)&&(!1!==t.trigger("touchStart",n)&&("mousedown"===n.type&&n.preventDefault(),t.state="pointerdown",t.resetDragPosition(),t.dragPosition.midPoint=null,t.dragPosition.time=Date.now(),!0))},move:function(i,n,o){if("pointerdown"===t.state)if(!1!==t.trigger("touchMove",o)){if(!(n.length<2&&!0===t.option("panOnlyZoomed")&&t.content.width<=t.viewport.width&&t.content.height<=t.viewport.height&&t.transform.scale<=t.option("baseScale"))&&(!(n.length>1)||t.option("zoom")&&!1!==t.option("pinchToZoom"))){var a=T(i[0],i[1]),s=T(n[0],n[1]),r=s.clientX-a.clientX,l=s.clientY-a.clientY,c=P(i[0],i[1]),h=P(n[0],n[1]),d=c&&h?h/c:1;t.dragOffset.x+=r,t.dragOffset.y+=l,t.dragOffset.scale*=d,t.dragOffset.time=Date.now()-t.dragPosition.time;var u=1===t.dragStart.scale&&t.option("lockAxis");if(u&&!t.lockAxis){if(Math.abs(t.dragOffset.x)<6&&Math.abs(t.dragOffset.y)<6)return void o.preventDefault();var f=Math.abs(180*Math.atan2(t.dragOffset.y,t.dragOffset.x)/Math.PI);t.lockAxis=f>45&&f<135?"y":"x"}if("xy"===u||"y"!==t.lockAxis){if(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),t.lockAxis&&(t.dragOffset["x"===t.lockAxis?"y":"x"]=0),t.$container.classList.add(t.option("draggingClass")),t.transform.scale===t.option("baseScale")&&"y"===t.lockAxis||(t.dragPosition.x=t.dragStart.x+t.dragOffset.x),t.transform.scale===t.option("baseScale")&&"x"===t.lockAxis||(t.dragPosition.y=t.dragStart.y+t.dragOffset.y),t.dragPosition.scale=t.dragStart.scale*t.dragOffset.scale,n.length>1){var v=T(e.startPointers[0],e.startPointers[1]),p=v.clientX-t.dragStart.rect.x,g=v.clientY-t.dragStart.rect.y,m=t.getZoomDelta(t.content.scale*t.dragOffset.scale,p,g),y=m.deltaX,b=m.deltaY;t.dragPosition.x-=y,t.dragPosition.y-=b,t.dragPosition.midPoint=s}else t.setDragResistance();t.transform={x:t.dragPosition.x,y:t.dragPosition.y,scale:t.dragPosition.scale},t.startAnimation()}}}else o.preventDefault()},end:function(n,o){if("pointerdown"===t.state)if(t._dragOffset=i({},t.dragOffset),e.currentPointers.length)t.resetDragPosition();else if(t.state="decel",t.friction=t.option("decelFriction"),t.recalculateTransform(),t.$container.classList.remove(t.option("draggingClass")),!1!==t.trigger("touchEnd",o)&&"decel"===t.state){var a=t.option("minScale");if(t.transform.scale<a)t.zoomTo(a,{friction:.64});else{var s=t.option("maxScale");if(t.transform.scale-s>.01){var r=t.dragPosition.midPoint||n,l=t.$content.getClientRects()[0];t.zoomTo(s,{friction:.64,x:r.clientX-l.left,y:r.clientY-l.top})}else;}}}});this.pointerTracker=e}},{key:"initObserver",value:function(){var t=this;this.resizeObserver||(this.resizeObserver=new $((function(){t.updateTimer||(t.updateTimer=setTimeout((function(){var e=t.$container.getBoundingClientRect();e.width&&e.height?((Math.abs(e.width-t.container.width)>1||Math.abs(e.height-t.container.height)>1)&&(t.isAnimating()&&t.endAnimation(!0),t.updateMetrics(),t.panTo({x:t.content.x,y:t.content.y,scale:t.option("baseScale"),friction:0})),t.updateTimer=null):t.updateTimer=null}),t.updateRate))})),this.resizeObserver.observe(this.$container))}},{key:"resetDragPosition",value:function(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};var t=this.content,e=t.x,n=t.y,o=t.scale;this.dragStart={rect:this.$content.getBoundingClientRect(),x:e,y:n,scale:o},this.dragPosition=i(i({},this.dragPosition),{},{x:e,y:n,scale:o}),this.dragOffset={x:0,y:0,scale:1,time:0}}},{key:"updateMetrics",value:function(t){!0!==t&&this.trigger("beforeUpdate");var e,n=this.$container,o=this.$content,a=this.$viewport,s=o instanceof HTMLImageElement,r=this.option("zoom"),l=this.option("resizeParent",r),c=this.option("width"),h=this.option("height"),d=c||(e=o,Math.max(parseFloat(e.naturalWidth||0),parseFloat(e.width&&e.width.baseVal&&e.width.baseVal.value||0),parseFloat(e.offsetWidth||0),parseFloat(e.scrollWidth||0))),u=h||function(t){return Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0))}(o);Object.assign(o.style,{width:c?"".concat(c,"px"):"",height:h?"".concat(h,"px"):"",maxWidth:"",maxHeight:""}),l&&Object.assign(a.style,{width:"",height:""});var f=this.option("ratio");c=d=S(d*f),h=u=S(u*f);var v=o.getBoundingClientRect(),p=a.getBoundingClientRect(),g=a==n?p:n.getBoundingClientRect(),m=Math.max(a.offsetWidth,S(p.width)),y=Math.max(a.offsetHeight,S(p.height)),b=window.getComputedStyle(a);if(m-=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight),y-=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom),this.viewport.width=m,this.viewport.height=y,r){if(Math.abs(d-v.width)>.1||Math.abs(u-v.height)>.1){var x=function(t,e,i,n){var o=Math.min(i/t||0,n/e);return{width:t*o||0,height:e*o||0}}(d,u,Math.min(d,v.width),Math.min(u,v.height));c=S(x.width),h=S(x.height)}Object.assign(o.style,{width:"".concat(c,"px"),height:"".concat(h,"px"),transform:""})}if(l&&(Object.assign(a.style,{width:"".concat(c,"px"),height:"".concat(h,"px")}),this.viewport=i(i({},this.viewport),{},{width:c,height:h})),s&&r&&"function"!=typeof this.options.maxScale){var w=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:w}}this.content=i(i({},this.content),{},{origWidth:d,origHeight:u,fitWidth:c,fitHeight:h,width:c,height:h,scale:1,isZoomable:r}),this.container={width:g.width,height:g.height},!0!==t&&this.trigger("afterUpdate")}},{key:"zoomIn",value:function(t){this.zoomTo(this.content.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.content.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale"),n=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(n,t)}},{key:"zoomTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.option("baseScale"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,a=void 0===o?null:o;t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var s=S(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===n&&(n=this.content.width*s*.5),null===a&&(a=this.content.height*s*.5);var r=this.getZoomDelta(t,n,a),l=r.deltaX,c=r.deltaY;n=this.content.x-l,a=this.content.y-c,this.panTo({x:n,y:a,scale:t,friction:this.option("zoomFriction")})}},{key:"getZoomDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,a=e>0&&n?e/n:0,s=i>0&&o?i/o:0,r=this.content.fitWidth*t,l=this.content.fitHeight*t,c=(r-n)*a,h=(l-o)*s;return{deltaX:c,deltaY:h}}},{key:"panTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?this.content.x:e,o=t.y,a=void 0===o?this.content.y:o,s=t.scale,r=t.friction,l=void 0===r?this.option("friction"):r,c=t.ignoreBounds,h=void 0!==c&&c;if(s=s||this.content.scale||1,!h){var d=this.getBounds(s),u=d.boundX,f=d.boundY;u&&(n=Math.max(Math.min(n,u.to),u.from)),f&&(a=Math.max(Math.min(a,f.to),f.from))}this.friction=l,this.transform=i(i({},this.transform),{},{x:n,y:a,scale:s}),l?(this.state="panning",this.velocity={x:(1/this.friction-1)*(n-this.content.x),y:(1/this.friction-1)*(a-this.content.y),scale:(1/this.friction-1)*(s-this.content.scale)},this.startAnimation()):this.endAnimation()}},{key:"startAnimation",value:function(){var t=this;this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return void this.endAnimation();this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"getBounds",value:function(t){var e=this.boundX,i=this.boundY;if(void 0!==e&&void 0!==i)return{boundX:e,boundY:i};e={from:0,to:0},i={from:0,to:0},t=t||this.transform.scale;var n=this.content.fitWidth*t,o=this.content.fitHeight*t,a=this.viewport.width,s=this.viewport.height;if(n<a){var r=S(.5*(a-n));e.from=r,e.to=r}else e.from=S(a-n);if(o<s){var l=.5*(s-o);i.from=l,i.to=l}else i.from=S(s-o);return{boundX:e,boundY:i}}},{key:"setEdgeForce",value:function(){if("decel"===this.state){var t,e,i,n,o=this.option("bounceForce"),a=this.getBounds(Math.max(this.transform.scale,this.content.scale)),s=a.boundX,r=a.boundY;if(s&&(t=this.content.x<s.from,e=this.content.x>s.to),r&&(i=this.content.y<r.from,n=this.content.y>r.to),t||e){var l=((t?s.from:s.to)-this.content.x)*o,c=this.content.x+(this.velocity.x+l)/this.friction;c>=s.from&&c<=s.to&&(l+=this.velocity.x),this.velocity.x=l,this.recalculateTransform()}if(i||n){var h=((i?r.from:r.to)-this.content.y)*o,d=this.content.y+(h+this.velocity.y)/this.friction;d>=r.from&&d<=r.to&&(h+=this.velocity.y),this.velocity.y=h,this.recalculateTransform()}}}},{key:"setDragResistance",value:function(){if("pointerdown"===this.state){var t,e,i,n,o=this.getBounds(this.dragPosition.scale),a=o.boundX,s=o.boundY;if(a&&(t=this.dragPosition.x<a.from,e=this.dragPosition.x>a.to),s&&(i=this.dragPosition.y<s.from,n=this.dragPosition.y>s.to),(t||e)&&(!t||!e)){var r=t?a.from:a.to,l=r-this.dragPosition.x;this.dragPosition.x=r-.3*l}if((i||n)&&(!i||!n)){var c=i?s.from:s.to,h=c-this.dragPosition.y;this.dragPosition.y=c-.3*h}}}},{key:"setDragForce",value:function(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}},{key:"recalculateTransform",value:function(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}},{key:"isAnimating",value:function(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}},{key:"setTransform",value:function(t){var e,n,o,a,s;(t?(e=S(this.transform.x),n=S(this.transform.y),o=this.transform.scale,this.content=i(i({},this.content),{},{x:e,y:n,scale:o})):(e=S(this.content.x),n=S(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content=i(i({},this.content),{},{x:e,y:n})),this.trigger("beforeTransform"),e=S(this.content.x),n=S(this.content.y),t&&this.option("zoom"))?(a=S(this.content.fitWidth*o),s=S(this.content.fitHeight*o),this.content.width=a,this.content.height=s,this.transform=i(i({},this.transform),{},{width:a,height:s,scale:o}),Object.assign(this.$content.style,{width:"".concat(a,"px"),height:"".concat(s,"px"),maxWidth:"none",maxHeight:"none",transform:"translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(1)")})):this.$content.style.transform="translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(").concat(o,")");this.trigger("afterTransform")}},{key:"endAnimation",value:function(t){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor(),!0!==t&&this.trigger("endAnimation")}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}},{key:"detachEvents",value:function(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}]),n}(O);M.version="4.0.31",M.Plugins={};var I=function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<e))return i=n,t.apply(void 0,arguments)}},R=function(){function t(e){o(this,t),this.$container=null,this.$prev=null,this.$next=null,this.carousel=e,this.onRefresh=this.onRefresh.bind(this)}return s(t,[{key:"option",value:function(t){return this.carousel.option("Navigation.".concat(t))}},{key:"createButton",value:function(t){var e,i=this,n=document.createElement("button");n.setAttribute("title",this.carousel.localize("{{".concat(t.toUpperCase(),"}}")));var o=this.option("classNames.button")+" "+this.option("classNames.".concat(t));return(e=n.classList).add.apply(e,m(o.split(" "))),n.setAttribute("tabindex","0"),n.innerHTML=this.carousel.localize(this.option("".concat(t,"Tpl"))),n.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),i.carousel["slide".concat("next"===t?"Next":"Prev")]()})),n}},{key:"build",value:function(){var t;this.$container||(this.$container=document.createElement("div"),(t=this.$container.classList).add.apply(t,m(this.option("classNames.main").split(" "))),this.carousel.$container.appendChild(this.$container));this.$next||(this.$next=this.createButton("next"),this.$container.appendChild(this.$next)),this.$prev||(this.$prev=this.createButton("prev"),this.$container.appendChild(this.$prev))}},{key:"onRefresh",value:function(){var t=this.carousel.pages.length;t<=1||t>1&&this.carousel.elemDimWidth<this.carousel.wrapDimWidth&&!Number.isInteger(this.carousel.option("slidesPerPage"))?this.cleanup():(this.build(),this.$prev.removeAttribute("disabled"),this.$next.removeAttribute("disabled"),this.carousel.option("infiniteX",this.carousel.option("infinite"))||(this.carousel.page<=0&&this.$prev.setAttribute("disabled",""),this.carousel.page>=t-1&&this.$next.setAttribute("disabled","")))}},{key:"cleanup",value:function(){this.$prev&&this.$prev.remove(),this.$prev=null,this.$next&&this.$next.remove(),this.$next=null,this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.carousel.on("refresh change",this.onRefresh)}},{key:"detach",value:function(){this.carousel.off("refresh change",this.onRefresh),this.cleanup()}}]),t}();R.defaults={prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',classNames:{main:"carousel__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}};var F=function(){function t(e){o(this,t),this.carousel=e,this.$list=null,this.events={change:this.onChange.bind(this),refresh:this.onRefresh.bind(this)}}return s(t,[{key:"buildList",value:function(){var t=this;if(!(this.carousel.pages.length<this.carousel.option("Dots.minSlideCount"))){var e=document.createElement("ol");return e.classList.add("carousel__dots"),e.addEventListener("click",(function(e){if("page"in e.target.dataset){e.preventDefault(),e.stopPropagation();var i=parseInt(e.target.dataset.page,10),n=t.carousel;i!==n.page&&(n.pages.length<3&&n.option("infinite")?n[0==i?"slidePrev":"slideNext"]():n.slideTo(i))}})),this.$list=e,this.carousel.$container.appendChild(e),this.carousel.$container.classList.add("has-dots"),e}}},{key:"removeList",value:function(){this.$list&&(this.$list.parentNode.removeChild(this.$list),this.$list=null),this.carousel.$container.classList.remove("has-dots")}},{key:"rebuildDots",value:function(){var t=this,e=this.$list,i=!!e,n=this.carousel.pages.length;if(n<2)i&&this.removeList();else{i||(e=this.buildList());var o=this.$list.children.length;if(o>n)for(var a=n;a<o;a++)this.$list.removeChild(this.$list.lastChild);else{for(var s=function(e){var i=document.createElement("li");i.classList.add("carousel__dot"),i.dataset.page=e,i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("title",t.carousel.localize("{{GOTO}}",[["%d",e+1]])),i.addEventListener("keydown",(function(t){var e,n=t.code;"Enter"===n||"NumpadEnter"===n?e=i:"ArrowRight"===n?e=i.nextSibling:"ArrowLeft"===n&&(e=i.previousSibling),e&&e.click()})),t.$list.appendChild(i)},r=o;r<n;r++)s(r);this.setActiveDot()}}}},{key:"setActiveDot",value:function(){if(this.$list){this.$list.childNodes.forEach((function(t){t.classList.remove("is-selected")}));var t=this.$list.childNodes[this.carousel.page];t&&t.classList.add("is-selected")}}},{key:"onChange",value:function(){this.setActiveDot()}},{key:"onRefresh",value:function(){this.rebuildDots()}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.removeList(),this.carousel.off(this.events),this.carousel=null}}]),t}(),N=function(){function t(e){o(this,t),this.carousel=e,this.selectedIndex=null,this.friction=0,this.onNavReady=this.onNavReady.bind(this),this.onNavClick=this.onNavClick.bind(this),this.onNavCreateSlide=this.onNavCreateSlide.bind(this),this.onTargetChange=this.onTargetChange.bind(this)}return s(t,[{key:"addAsTargetFor",value:function(t){this.target=this.carousel,this.nav=t,this.attachEvents()}},{key:"addAsNavFor",value:function(t){this.target=t,this.nav=this.carousel,this.attachEvents()}},{key:"attachEvents",value:function(){this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.on("createSlide",this.onNavCreateSlide),this.nav.on("Panzoom.click",this.onNavClick),this.target.on("change",this.onTargetChange),this.target.on("Panzoom.afterUpdate",this.onTargetChange)}},{key:"onNavReady",value:function(){this.onTargetChange(!0)}},{key:"onNavClick",value:function(t,e,i){var n=i.target.closest(".carousel__slide");if(n){i.stopPropagation();var o=parseInt(n.dataset.index,10),a=this.target.findPageForSlide(o);this.target.page!==a&&this.target.slideTo(a,{friction:this.friction}),this.markSelectedSlide(o)}}},{key:"onNavCreateSlide",value:function(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}},{key:"onTargetChange",value:function(){var t=this.target.pages[this.target.page].indexes[0],e=this.nav.findPageForSlide(t);this.nav.slideTo(e),this.markSelectedSlide(t)}},{key:"markSelectedSlide",value:function(t){this.selectedIndex=t,m(this.nav.slides).filter((function(t){return t.$el&&t.$el.classList.remove("is-nav-selected")}));var e=this.nav.slides[t];e&&e.$el&&e.$el.classList.add("is-nav-selected")}},{key:"attach",value:function(t){var e=t.options.Sync;(e.target||e.nav)&&(e.target?this.addAsNavFor(e.target):e.nav&&this.addAsTargetFor(e.nav),this.friction=e.friction)}},{key:"detach",value:function(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("createSlide",this.onNavCreateSlide)),this.target&&(this.target.off("Panzoom.afterUpdate",this.onTargetChange),this.target.off("change",this.onTargetChange))}}]),t}();N.defaults={friction:.92};var D={Navigation:R,Dots:F,Sync:N},B={slides:[],preload:0,slidesPerPage:"auto",initialPage:null,initialSlide:null,friction:.92,center:!0,infinite:!0,fill:!0,dragFree:!1,prefix:"",classNames:{viewport:"carousel__viewport",track:"carousel__track",slide:"carousel__slide",slideSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}},H=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,n),a=k(!0,{},B,a),(i=e.call(this,a)).state="init",i.$container=t,!(i.$container instanceof HTMLElement))throw new Error("No root element provided");return i.slideNext=I(i.slideNext.bind(d(i)),250),i.slidePrev=I(i.slidePrev.bind(d(i)),250),i.init(),t.__Carousel=d(i),i}return s(n,[{key:"init",value:function(){this.pages=[],this.page=this.pageIndex=null,this.prevPage=this.prevPageIndex=null,this.attachPlugins(n.Plugins),this.trigger("init"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.$track&&this.pages.length&&(this.$track.style.transform="translate3d(".concat(-1*this.pages[this.page].left,"px, 0px, 0) scale(1)")),this.manageSlideVisiblity(),this.initPanzoom(),this.state="ready",this.trigger("ready")}},{key:"initLayout",value:function(){var t,e,i,n,o=this.option("prefix"),a=this.option("classNames");(this.$viewport=this.option("viewport")||this.$container.querySelector(".".concat(o).concat(a.viewport)),this.$viewport)||(this.$viewport=document.createElement("div"),(t=this.$viewport.classList).add.apply(t,m((o+a.viewport).split(" "))),(e=this.$viewport).append.apply(e,m(this.$container.childNodes)),this.$container.appendChild(this.$viewport));(this.$track=this.option("track")||this.$container.querySelector(".".concat(o).concat(a.track)),this.$track)||(this.$track=document.createElement("div"),(i=this.$track.classList).add.apply(i,m((o+a.track).split(" "))),(n=this.$track).append.apply(n,m(this.$viewport.childNodes)),this.$viewport.appendChild(this.$track))}},{key:"initSlides",value:function(){var t=this;this.slides=[],this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e){var i={$el:e,isDom:!0};t.slides.push(i),t.trigger("createSlide",i,t.slides.length)})),Array.isArray(this.options.slides)&&(this.slides=k(!0,m(this.slides),this.options.slides))}},{key:"updateMetrics",value:function(){var t,e=this,n=0,o=[];this.slides.forEach((function(i,a){var s=i.$el,r=i.isDom||!t?e.getSlideMetrics(s):t;i.index=a,i.width=r,i.left=n,t=r,n+=r,o.push(a)}));var a=Math.max(this.$track.offsetWidth,S(this.$track.getBoundingClientRect().width)),s=getComputedStyle(this.$track);a-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),this.contentWidth=n,this.viewportWidth=a;var r=[],l=this.option("slidesPerPage");if(Number.isInteger(l)&&n>a)for(var c=0;c<this.slides.length;c+=l)r.push({indexes:o.slice(c,c+l),slides:this.slides.slice(c,c+l)});else for(var h=0,d=0,u=0;u<this.slides.length;u+=1){var f=this.slides[u];(!r.length||d+f.width>a)&&(r.push({indexes:[],slides:[]}),h=r.length-1,d=0),d+=f.width,r[h].indexes.push(u),r[h].slides.push(f)}var v=this.option("center"),p=this.option("fill");r.forEach((function(t,i){t.index=i,t.width=t.slides.reduce((function(t,e){return t+e.width}),0),t.left=t.slides[0].left,v&&(t.left+=.5*(a-t.width)*-1),p&&!e.option("infiniteX",e.option("infinite"))&&n>a&&(t.left=Math.max(t.left,0),t.left=Math.min(t.left,n-a))}));var g,y=[];r.forEach((function(t){var e=i({},t);g&&e.left===g.left?(g.width+=e.width,g.slides=[].concat(m(g.slides),m(e.slides)),g.indexes=[].concat(m(g.indexes),m(e.indexes))):(e.index=y.length,g=e,y.push(e))})),this.pages=y;var b=this.page;if(null===b){var x=this.option("initialSlide");b=null!==x?this.findPageForSlide(x):parseInt(this.option("initialPage",0),10)||0,y[b]||(b=y.length&&b>y.length?y[y.length-1].index:0),this.page=b,this.pageIndex=b}this.updatePanzoom(),this.trigger("refresh")}},{key:"getSlideMetrics",value:function(t){if(!t){var e,i,n=this.slides[0];if((t=document.createElement("div")).dataset.isTestEl=1,t.style.visibility="hidden",(e=t.classList).add.apply(e,m((this.option("prefix")+this.option("classNames.slide")).split(" "))),n.customClass)(i=t.classList).add.apply(i,m(n.customClass.split(" ")));this.$track.prepend(t)}var o=Math.max(t.offsetWidth,S(t.getBoundingClientRect().width)),a=t.currentStyle||window.getComputedStyle(t);return o=o+(parseFloat(a.marginLeft)||0)+(parseFloat(a.marginRight)||0),t.dataset.isTestEl&&t.remove(),o}},{key:"findPageForSlide",value:function(t){t=parseInt(t,10)||0;var e=this.pages.find((function(e){return e.indexes.indexOf(t)>-1}));return e?e.index:null}},{key:"slideNext",value:function(){this.slideTo(this.pageIndex+1)}},{key:"slidePrev",value:function(){this.slideTo(this.pageIndex-1)}},{key:"slideTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?-1*this.setPage(t,!0):i,o=e.y,a=void 0===o?0:o,s=e.friction,r=void 0===s?this.option("friction"):s;this.Panzoom.content.x===n&&!this.Panzoom.velocity.x&&r||(this.Panzoom.panTo({x:n,y:a,friction:r,ignoreBounds:!0}),"ready"===this.state&&"ready"===this.Panzoom.state&&this.trigger("settle"))}},{key:"initPanzoom",value:function(){var t=this;this.Panzoom&&this.Panzoom.destroy();var e=k(!0,{},{content:this.$track,wrapInner:!1,resizeParent:!1,zoom:!1,click:!1,lockAxis:"x",x:this.pages.length?-1*this.pages[this.page].left:0,centerOnStart:!1,textSelection:function(){return t.option("textSelection",!1)},panOnlyZoomed:function(){return this.content.width<=this.viewport.width}},this.option("Panzoom"));this.Panzoom=new M(this.$container,e),this.Panzoom.on({"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Panzoom.".concat(e)].concat(n))},afterUpdate:function(){t.updatePage()},beforeTransform:this.onBeforeTransform.bind(this),touchEnd:this.onTouchEnd.bind(this),endAnimation:function(){t.trigger("settle")}}),this.updateMetrics(),this.manageSlideVisiblity()}},{key:"updatePanzoom",value:function(){this.Panzoom&&(this.Panzoom.content=i(i({},this.Panzoom.content),{},{fitWidth:this.contentWidth,origWidth:this.contentWidth,width:this.contentWidth}),this.pages.length>1&&this.option("infiniteX",this.option("infinite"))?this.Panzoom.boundX=null:this.pages.length&&(this.Panzoom.boundX={from:-1*this.pages[this.pages.length-1].left,to:-1*this.pages[0].left}),this.option("infiniteY",this.option("infinite"))?this.Panzoom.boundY=null:this.Panzoom.boundY={from:0,to:0},this.Panzoom.handleCursor())}},{key:"manageSlideVisiblity",value:function(){var t=this,e=this.contentWidth,i=this.viewportWidth,n=this.Panzoom?-1*this.Panzoom.content.x:this.pages.length?this.pages[this.page].left:0,o=this.option("preload"),a=this.option("infiniteX",this.option("infinite")),s=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-left")),r=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-right"));this.slides.forEach((function(l){var c,h,d=0;c=n-s,h=n+i+r,c-=o*(i+s+r),h+=o*(i+s+r);var u=l.left+l.width>c&&l.left<h;c=n+e-s,h=n+e+i+r,c-=o*(i+s+r);var f=a&&l.left+l.width>c&&l.left<h;c=n-e-s,h=n-e+i+r,c-=o*(i+s+r);var v=a&&l.left+l.width>c&&l.left<h;f||u||v?(t.createSlideEl(l),u&&(d=0),f&&(d=-1),v&&(d=1),l.left+l.width>n&&l.left<=n+i+r&&(d=0)):t.removeSlideEl(l),l.hasDiff=d}));var l=0,c=0;this.slides.forEach((function(t,i){var n=0;t.$el?(i!==l||t.hasDiff?n=c+t.hasDiff*e:c=0,t.$el.style.left=Math.abs(n)>.1?"".concat(c+t.hasDiff*e,"px"):"",l++):c+=t.width})),this.markSelectedSlides()}},{key:"createSlideEl",value:function(t){var e;if(t){if(!t.$el){var i,n=document.createElement("div");if(n.dataset.index=t.index,(e=n.classList).add.apply(e,m((this.option("prefix")+this.option("classNames.slide")).split(" "))),t.customClass)(i=n.classList).add.apply(i,m(t.customClass.split(" ")));t.html&&(n.innerHTML=t.html);var o=[];this.slides.forEach((function(t,e){t.$el&&o.push(e)}));var a=t.index,s=null;if(o.length){var r=o.reduce((function(t,e){return Math.abs(e-a)<Math.abs(t-a)?e:t}));s=this.slides[r]}return this.$track.insertBefore(n,s&&s.$el?s.index<t.index?s.$el.nextSibling:s.$el:null),t.$el=n,this.trigger("createSlide",t,a),t}var l,c=t.$el.dataset.index;c&&parseInt(c,10)===t.index||(t.$el.dataset.index=t.index,t.$el.querySelectorAll("[data-lazy-srcset]").forEach((function(t){t.srcset=t.dataset.lazySrcset})),t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t){var e=t.dataset.lazySrc;t instanceof HTMLImageElement?t.src=e:t.style.backgroundImage="url('".concat(e,"')")})),(l=t.$el.dataset.lazySrc)&&(t.$el.style.backgroundImage="url('".concat(l,"')")),t.state="ready")}}},{key:"removeSlideEl",value:function(t){t.$el&&!t.isDom&&(this.trigger("removeSlide",t),t.$el.remove(),t.$el=null)}},{key:"markSelectedSlides",value:function(){var t=this,e=this.option("classNames.slideSelected"),i="aria-hidden";this.slides.forEach((function(n,o){var a=n.$el;if(a){var s=t.pages[t.page];s&&s.indexes&&s.indexes.indexOf(o)>-1?(e&&!a.classList.contains(e)&&(a.classList.add(e),t.trigger("selectSlide",n)),a.removeAttribute(i)):(e&&a.classList.contains(e)&&(a.classList.remove(e),t.trigger("unselectSlide",n)),a.setAttribute(i,!0))}}))}},{key:"updatePage",value:function(){this.updateMetrics(),this.slideTo(this.page,{friction:0})}},{key:"onBeforeTransform",value:function(){this.option("infiniteX",this.option("infinite"))&&this.manageInfiniteTrack(),this.manageSlideVisiblity()}},{key:"manageInfiniteTrack",value:function(){var t=this.contentWidth,e=this.viewportWidth;if(!(!this.option("infiniteX",this.option("infinite"))||this.pages.length<2||t<e)){var i=this.Panzoom,n=!1;return i.content.x<-1*(t-e)&&(i.content.x+=t,this.pageIndex=this.pageIndex-this.pages.length,n=!0),i.content.x>e&&(i.content.x-=t,this.pageIndex=this.pageIndex+this.pages.length,n=!0),n&&"pointerdown"===i.state&&i.resetDragPosition(),n}}},{key:"onTouchEnd",value:function(t,e){var i=this.option("dragFree");if(!i&&this.pages.length>1&&t.dragOffset.time<350&&Math.abs(t.dragOffset.y)<1&&Math.abs(t.dragOffset.x)>5)this[t.dragOffset.x<0?"slideNext":"slidePrev"]();else if(i){var n=g(this.getPageFromPosition(-1*t.transform.x),2)[1];this.setPage(n)}else this.slideToClosest()}},{key:"slideToClosest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getPageFromPosition(-1*this.Panzoom.content.x),i=g(e,2),n=i[1];this.slideTo(n,t)}},{key:"getPageFromPosition",value:function(t){var e=this.pages.length;this.option("center")&&(t+=.5*this.viewportWidth);var i=Math.floor(t/this.contentWidth);t-=i*this.contentWidth;var n=this.slides.find((function(e){return e.left<=t&&e.left+e.width>t}));if(n){var o=this.findPageForSlide(n.index);return[o,o+i*e]}return[0,0]}},{key:"setPage",value:function(t,e){var i=0,n=parseInt(t,10)||0,o=this.page,a=this.pageIndex,s=this.pages.length,r=this.contentWidth,l=this.viewportWidth;if(t=(n%s+s)%s,this.option("infiniteX",this.option("infinite"))&&r>l){var c=Math.floor(n/s)||0,h=r;if(i=this.pages[t].left+c*h,!0===e&&s>2){var d=-1*this.Panzoom.content.x,u=i-h,f=i+h,v=Math.abs(d-i),p=Math.abs(d-u),g=Math.abs(d-f);g<v&&g<=p?(i=f,n+=s):p<v&&p<g&&(i=u,n-=s)}}else t=n=Math.max(0,Math.min(n,s-1)),i=this.pages.length?this.pages[t].left:0;return this.page=t,this.pageIndex=n,null!==o&&t!==o&&(this.prevPage=o,this.prevPageIndex=a,this.trigger("change",t,o)),i}},{key:"destroy",value:function(){var t=this;this.state="destroy",this.slides.forEach((function(e){t.removeSlideEl(e)})),this.slides=[],this.Panzoom.destroy(),this.detachPlugins()}}]),n}(O);H.version="4.0.31",H.Plugins=D;var W=!("undefined"==typeof window||!window.document||!window.document.createElement),j=null,X=["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'],q=function(t){if(t&&W){null===j&&document.createElement("div").focus({get preventScroll(){return j=!0,!1}});try{if(t.setActive)t.setActive();else if(j)t.focus({preventScroll:!0});else{var e=window.pageXOffset||document.body.scrollTop,i=window.pageYOffset||document.body.scrollLeft;t.focus(),document.body.scrollTo({top:e,left:i,behavior:"auto"})}}catch(t){}}},U=function(){function t(e){o(this,t),this.fancybox=e,this.viewport=null,this.pendingUpdate=null;for(var i=0,n=["onReady","onResize","onTouchstart","onTouchmove"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}}return s(t,[{key:"onReady",value:function(){var t=window.visualViewport;t&&(this.viewport=t,this.startY=0,t.addEventListener("resize",this.onResize),this.updateViewport()),window.addEventListener("touchstart",this.onTouchstart,{passive:!1}),window.addEventListener("touchmove",this.onTouchmove,{passive:!1}),window.addEventListener("wheel",this.onWheel,{passive:!1})}},{key:"onResize",value:function(){this.updateViewport()}},{key:"updateViewport",value:function(){var t=this.fancybox,e=this.viewport,i=e.scale||1,n=t.$container;if(n){var o="",a="",s="";i-1>.1&&(o="".concat(e.width*i,"px"),a="".concat(e.height*i,"px"),s="translate3d(".concat(e.offsetLeft,"px, ").concat(e.offsetTop,"px, 0) scale(").concat(1/i,")")),n.style.width=o,n.style.height=a,n.style.transform=s}}},{key:"onTouchstart",value:function(t){this.startY=t.touches?t.touches[0].screenY:t.screenY}},{key:"onTouchmove",value:function(t){var e=this.startY,i=window.innerWidth/window.document.documentElement.clientWidth;if(t.cancelable&&!(t.touches.length>1||1!==i)){var n=C(t.composedPath()[0]);if(n){var o=window.getComputedStyle(n),a=parseInt(o.getPropertyValue("height"),10),s=t.touches?t.touches[0].screenY:t.screenY,r=e<=s&&0===n.scrollTop,l=e>=s&&n.scrollHeight-n.scrollTop===a;(r||l)&&t.preventDefault()}else t.preventDefault()}}},{key:"onWheel",value:function(t){C(t.composedPath()[0])||t.preventDefault()}},{key:"cleanup",value:function(){this.pendingUpdate&&(cancelAnimationFrame(this.pendingUpdate),this.pendingUpdate=null);var t=this.viewport;t&&(t.removeEventListener("resize",this.onResize),this.viewport=null),window.removeEventListener("touchstart",this.onTouchstart,!1),window.removeEventListener("touchmove",this.onTouchmove,!1),window.removeEventListener("wheel",this.onWheel,{passive:!1})}},{key:"attach",value:function(){this.fancybox.on("initLayout",this.onReady)}},{key:"detach",value:function(){this.fancybox.off("initLayout",this.onReady),this.cleanup()}}]),t}(),Y=function(){function t(e){o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var i=0,n=["onPrepare","onClosing","onKeydown"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={prepare:this.onPrepare,closing:this.onClosing,keydown:this.onKeydown}}return s(t,[{key:"onPrepare",value:function(){this.getSlides().length<this.fancybox.option("Thumbs.minSlideCount")?this.state="disabled":!0===this.fancybox.option("Thumbs.autoStart")&&this.fancybox.Carousel.Panzoom.content.height>=this.fancybox.option("Thumbs.minScreenHeight")&&this.build()}},{key:"onClosing",value:function(){this.Carousel&&this.Carousel.Panzoom.detachEvents()}},{key:"onKeydown",value:function(t,e){e===t.option("Thumbs.key")&&this.toggle()}},{key:"build",value:function(){var t=this;if(!this.$container){var e=document.createElement("div");e.classList.add("fancybox__thumbs"),this.fancybox.$carousel.parentNode.insertBefore(e,this.fancybox.$carousel.nextSibling),this.Carousel=new H(e,k(!0,{Dots:!1,Navigation:!1,Sync:{friction:0},infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,preload:1},this.fancybox.option("Thumbs.Carousel"),{Sync:{target:this.fancybox.Carousel},slides:this.getSlides()})),this.Carousel.Panzoom.on("wheel",(function(e,i){i.preventDefault(),t.fancybox[i.deltaY<0?"prev":"next"]()})),this.$container=e,this.state="visible"}}},{key:"getSlides",value:function(){var t,e=[],i=x(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=n.thumb;o&&e.push({html:this.fancybox.option("Thumbs.tpl").replace(/\{\{src\}\}/gi,o),customClass:"has-thumb has-".concat(n.type||"image")})}}catch(t){i.e(t)}finally{i.f()}return e}},{key:"toggle",value:function(){"visible"===this.state?this.hide():"hidden"===this.state?this.show():this.build()}},{key:"show",value:function(){"hidden"===this.state&&(this.$container.style.display="",this.Carousel.Panzoom.attachEvents(),this.state="visible")}},{key:"hide",value:function(){"visible"===this.state&&(this.Carousel.Panzoom.detachEvents(),this.$container.style.display="none",this.state="hidden")}},{key:"cleanup",value:function(){this.Carousel&&(this.Carousel.destroy(),this.Carousel=null),this.$container&&(this.$container.remove(),this.$container=null),this.state="init"}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();Y.defaults={minSlideCount:2,minScreenHeight:500,autoStart:!0,key:"t",Carousel:{},tpl:'<div class="fancybox__thumb" style="background-image:url(\'{{src}}\')"></div>'};var V=function(t,e){for(var i=new URL(t),n=new URLSearchParams(i.search),o=new URLSearchParams,a=0,s=[].concat(m(n),m(Object.entries(e)));a<s.length;a++){var r=g(s[a],2),l=r[0],c=r[1];"t"===l?o.set("start",parseInt(c)):o.set(l,c)}o=o.toString();var h=t.match(/#t=((.*)?\d+s)/);return h&&(o+="#t=".concat(h[1])),o},Z={video:{autoplay:!0,ratio:16/9},youtube:{autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},vimeo:{hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},html5video:{tpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',format:""}},G=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onInit","onReady","onCreateSlide","onRemoveSlide","onSelectSlide","onUnselectSlide","onRefresh","onMessage"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={init:this.onInit,ready:this.onReady,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide,"Carousel.selectSlide":this.onSelectSlide,"Carousel.unselectSlide":this.onUnselectSlide,"Carousel.refresh":this.onRefresh}}return s(t,[{key:"onInit",value:function(){var t,e=x(this.fancybox.items);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.processType(i)}}catch(t){e.e(t)}finally{e.f()}}},{key:"processType",value:function(t){if(t.html)return t.src=t.html,t.type="html",void delete t.html;var e=t.src||"",i=t.type||this.fancybox.options.type,n=null;if(!e||"string"==typeof e){if(n=e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){var o=V(e,this.fancybox.option("Html.youtube")),a=encodeURIComponent(n[1]);t.videoId=a,t.src="https://www.youtube-nocookie.com/embed/".concat(a,"?").concat(o),t.thumb=t.thumb||"https://i.ytimg.com/vi/".concat(a,"/mqdefault.jpg"),t.vendor="youtube",i="video"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)){var s=V(e,this.fancybox.option("Html.vimeo")),r=encodeURIComponent(n[1]);t.videoId=r,t.src="https://player.vimeo.com/video/".concat(r,"?").concat(s),t.vendor="vimeo",i="video"}else(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src="//maps.google.".concat(n[1],"/?ll=").concat((n[2]?n[2]+"&z="+Math.floor(n[3])+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&"),"&output=").concat(n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"),i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src="//maps.google.".concat(n[1],"/maps?q=").concat(n[2].replace("query=","q=").replace("api=1",""),"&output=embed"),i="map");i||("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.format=t.format||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),t.type=i||this.fancybox.option("defaultType","image"),"html5video"!==i&&"video"!==i||(t.video=k({},this.fancybox.option("Html.video"),t.video),t._width&&t._height?t.ratio=parseFloat(t._width)/parseFloat(t._height):t.ratio=t.ratio||t.video.ratio||Z.video.ratio)}}},{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&(t.setContent(e),e.index===t.fancybox.getSlide().index&&t.playVideo(e))}))}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"loadInlineContent",value:function(t){var e;if(t.src instanceof HTMLElement)e=t.src;else if("string"==typeof t.src){var i=t.src.split("#",2),n=2===i.length&&""===i[0]?i[1]:i[0];e=document.getElementById(n)}if(e){if("clone"===t.type||e.$placeHolder){var o=(e=e.cloneNode(!0)).getAttribute("id");o=o?"".concat(o,"--clone"):"clone-".concat(this.fancybox.id,"-").concat(t.index),e.setAttribute("id",o)}else{var a=document.createElement("div");a.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(a,e),e.$placeHolder=a}this.fancybox.setContent(t,e)}else this.fancybox.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"loadAjaxContent",value:function(t){var e=this.fancybox,i=new XMLHttpRequest;e.showLoading(t),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&"ready"===e.state&&(e.hideLoading(t),200===i.status?e.setContent(t,i.responseText):e.setError(t,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))};var n=t.ajax||null;i.open(n?"POST":"GET",t.src),i.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(n),t.xhr=i}},{key:"loadIframeContent",value:function(t){var e=this,i=this.fancybox,n=document.createElement("iframe");if(n.className="fancybox__iframe",n.setAttribute("id","fancybox__iframe_".concat(i.id,"_").concat(t.index)),n.setAttribute("allow","autoplay; fullscreen"),n.setAttribute("scrolling","auto"),t.$iframe=n,"iframe"!==t.type||!1===t.preload)return n.setAttribute("src",t.src),this.fancybox.setContent(t,n),void this.resizeIframe(t);i.showLoading(t);var o=document.createElement("div");o.style.visibility="hidden",this.fancybox.setContent(t,o),o.appendChild(n),n.onerror=function(){i.setError(t,"{{IFRAME_ERROR}}")},n.onload=function(){i.hideLoading(t);var o=!1;n.isReady||(n.isReady=!0,o=!0),n.src.length&&(n.parentNode.style.visibility="",e.resizeIframe(t),o&&i.revealContent(t))},n.setAttribute("src",t.src)}},{key:"setAspectRatio",value:function(t){var e=t.$content,i=t.ratio;if(e){var n=t._width,o=t._height;if(i||n&&o){Object.assign(e.style,{width:n&&o?"100%":"",height:n&&o?"100%":"",maxWidth:"",maxHeight:""});var a=e.offsetWidth,s=e.offsetHeight;if(o=o||s,(n=n||a)>a||o>s){var r=Math.min(a/n,s/o);n*=r,o*=r}Math.abs(n/o-i)>.01&&(i<n/o?n=o*i:o=n/i),Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(o,"px")})}}}},{key:"resizeIframe",value:function(t){var e=t.$iframe;if(e){var i=t._width||0,n=t._height||0;i&&n&&(t.autoSize=!1);var o=e.parentNode,a=o&&o.style;if(!1!==t.preload&&!1!==t.autoSize&&a)try{var s=window.getComputedStyle(o),r=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),l=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom),c=e.contentWindow.document,h=c.getElementsByTagName("html")[0],d=c.body;a.width="",d.style.overflow="hidden",i=i||h.scrollWidth+r,a.width="".concat(i,"px"),d.style.overflow="",a.flex="0 0 auto",a.height="".concat(d.scrollHeight,"px"),n=h.scrollHeight+l}catch(t){}if(i||n){var u={flex:"0 1 auto"};i&&(u.width="".concat(i,"px")),n&&(u.height="".concat(n,"px")),Object.assign(a,u)}}}},{key:"onRefresh",value:function(t,e){var i=this;e.slides.forEach((function(t){t.$el&&(t.$iframe&&i.resizeIframe(t),t.ratio&&i.setAspectRatio(t))}))}},{key:"setContent",value:function(t){if(t&&!t.isDom){switch(t.type){case"html":this.fancybox.setContent(t,t.src);break;case"html5video":this.fancybox.setContent(t,this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.format||t.html5video&&t.html5video.format||"").replace("{{poster}}",t.poster||t.thumb||""));break;case"inline":case"clone":this.loadInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"pdf":case"video":case"map":t.preload=!1;case"iframe":this.loadIframeContent(t)}t.ratio&&this.setAspectRatio(t)}}},{key:"onSelectSlide",value:function(t,e,i){"ready"===t.state&&this.playVideo(i)}},{key:"playVideo",value:function(t){if("html5video"===t.type&&t.video.autoplay)try{var e=t.$el.querySelector("video");if(e){var i=e.play();void 0!==i&&i.then((function(){})).catch((function(t){e.muted=!0,e.play()}))}}catch(t){}if("video"===t.type&&t.$iframe&&t.$iframe.contentWindow){!function e(){if("done"===t.state&&t.$iframe&&t.$iframe.contentWindow){var i;if(t.$iframe.isReady)return t.video&&t.video.autoplay&&(i="youtube"==t.vendor?{event:"command",func:"playVideo"}:{method:"play",value:"true"}),void(i&&t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"));"youtube"===t.vendor&&(i={event:"listening",id:t.$iframe.getAttribute("id")},t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"))}t.poller=setTimeout(e,250)}()}}},{key:"onUnselectSlide",value:function(t,e,i){if("html5video"!==i.type){var n=!1;"vimeo"==i.vendor?n={method:"pause",value:"true"}:"youtube"===i.vendor&&(n={event:"command",func:"pauseVideo"}),n&&i.$iframe&&i.$iframe.contentWindow&&i.$iframe.contentWindow.postMessage(JSON.stringify(n),"*"),clearTimeout(i.poller)}else try{i.$el.querySelector("video").pause()}catch(t){}}},{key:"onRemoveSlide",value:function(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null),i.$iframe&&(i.$iframe.onload=i.$iframe.onerror=null,i.$iframe.src="//about:blank",i.$iframe=null);var n=i.$content;"inline"===i.type&&n&&(n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none")),i.$closeButton&&(i.$closeButton.remove(),i.$closeButton=null);var o=n&&n.$placeHolder;o&&(o.parentNode.insertBefore(n,o),o.remove(),n.$placeHolder=null)}},{key:"onMessage",value:function(t){try{var e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event){var i,n=x(document.getElementsByClassName("fancybox__iframe"));try{for(n.s();!(i=n.n()).done;){var o=i.value;o.contentWindow===t.source&&(o.isReady=1)}}catch(t){n.e(t)}finally{n.f()}}}else"https://www.youtube-nocookie.com"===t.origin&&"onReady"===e.event&&(document.getElementById(e.id).isReady=1)}catch(t){}}},{key:"attach",value:function(){this.fancybox.on(this.events),window.addEventListener("message",this.onMessage,!1)}},{key:"detach",value:function(){this.fancybox.off(this.events),window.removeEventListener("message",this.onMessage,!1)}}]),t}();G.defaults=Z;var K=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onReady","onClosing","onDone","onPageChange","onCreateSlide","onRemoveSlide","onImageStatusChange"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={ready:this.onReady,closing:this.onClosing,done:this.onDone,"Carousel.change":this.onPageChange,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide}}return s(t,[{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&t.setContent(e)}))}},{key:"onDone",value:function(t,e){this.handleCursor(e)}},{key:"onClosing",value:function(t){clearTimeout(this.clickTimer),this.clickTimer=null,t.Carousel.slides.forEach((function(t){t.$image&&(t.state="destroy"),t.Panzoom&&t.Panzoom.detachEvents()})),"closing"===this.fancybox.state&&this.canZoom(t.getSlide())&&this.zoomOut()}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"onRemoveSlide",value:function(t,e,i){i.$image&&(i.$el.classList.remove(t.option("Image.canZoomInClass")),i.$image.remove(),i.$image=null),i.Panzoom&&(i.Panzoom.destroy(),i.Panzoom=null),i.$el&&i.$el.dataset&&delete i.$el.dataset.imageFit}},{key:"setContent",value:function(t){var e=this;if(!(t.isDom||t.html||t.type&&"image"!==t.type||t.$image)){t.type="image",t.state="loading";var i=document.createElement("div");i.style.visibility="hidden";var n=document.createElement("img");n.addEventListener("load",(function(i){i.stopImmediatePropagation(),e.onImageStatusChange(t)})),n.addEventListener("error",(function(){e.onImageStatusChange(t)})),n.src=t.src,n.alt="",n.draggable=!1,n.classList.add("fancybox__image"),t.srcset&&n.setAttribute("srcset",t.srcset),t.sizes&&n.setAttribute("sizes",t.sizes),t.$image=n;var o=this.fancybox.option("Image.wrap");if(o){var a=document.createElement("div");a.classList.add("string"==typeof o?o:"fancybox__image-wrap"),a.appendChild(n),i.appendChild(a),t.$wrap=a}else i.appendChild(n);t.$el.dataset.imageFit=this.fancybox.option("Image.fit"),this.fancybox.setContent(t,i),n.complete||n.error?this.onImageStatusChange(t):this.fancybox.showLoading(t)}}},{key:"onImageStatusChange",value:function(t){var e=this,i=t.$image;i&&"loading"===t.state&&(i.complete&&i.naturalWidth&&i.naturalHeight?(this.fancybox.hideLoading(t),"contain"===this.fancybox.option("Image.fit")&&this.initSlidePanzoom(t),t.$el.addEventListener("wheel",(function(i){return e.onWheel(t,i)}),{passive:!1}),t.$content.addEventListener("click",(function(i){return e.onClick(t,i)}),{passive:!1}),this.revealContent(t)):this.fancybox.setError(t,"{{IMAGE_ERROR}}"))}},{key:"initSlidePanzoom",value:function(t){var e=this;t.Panzoom||(t.Panzoom=new M(t.$el,k(!0,this.fancybox.option("Image.Panzoom",{}),{viewport:t.$wrap,content:t.$image,width:t._width,height:t._height,wrapInner:!1,textSelection:!0,touch:this.fancybox.option("Image.touch"),panOnlyZoomed:!0,click:!1,wheel:!1})),t.Panzoom.on("startAnimation",(function(){e.fancybox.trigger("Image.startAnimation",t)})),t.Panzoom.on("endAnimation",(function(){"zoomIn"===t.state&&e.fancybox.done(t),e.handleCursor(t),e.fancybox.trigger("Image.endAnimation",t)})),t.Panzoom.on("afterUpdate",(function(){e.handleCursor(t),e.fancybox.trigger("Image.afterUpdate",t)})))}},{key:"revealContent",value:function(t){null===this.fancybox.Carousel.prevPage&&t.index===this.fancybox.options.startIndex&&this.canZoom(t)?this.zoomIn():this.fancybox.revealContent(t)}},{key:"getZoomInfo",value:function(t){var e=t.$thumb.getBoundingClientRect(),i=e.width,n=e.height,o=t.$content.getBoundingClientRect(),a=o.width,s=o.height,r=o.top-e.top,l=o.left-e.left,c=this.fancybox.option("Image.zoomOpacity");return"auto"===c&&(c=Math.abs(i/n-a/s)>.1),{top:r,left:l,scale:a&&i?i/a:1,opacity:c}}},{key:"canZoom",value:function(t){var e=this.fancybox,i=e.$container;if(window.visualViewport&&1!==window.visualViewport.scale)return!1;if(t.Panzoom&&!t.Panzoom.content.width)return!1;if(!e.option("Image.zoom")||"contain"!==e.option("Image.fit"))return!1;var n=t.$thumb;if(!n||"loading"===t.state)return!1;i.classList.add("fancybox__no-click");var o,a=n.getBoundingClientRect();if(this.fancybox.option("Image.ignoreCoveredThumbnail")){var s=document.elementFromPoint(a.left+1,a.top+1)===n,r=document.elementFromPoint(a.right-1,a.bottom-1)===n;o=s&&r}else o=document.elementFromPoint(a.left+.5*a.width,a.top+.5*a.height)===n;return i.classList.remove("fancybox__no-click"),o}},{key:"zoomIn",value:function(){var t=this.fancybox,e=t.getSlide(),i=e.Panzoom,n=this.getZoomInfo(e),o=n.top,a=n.left,s=n.scale,r=n.opacity;t.trigger("reveal",e),i.panTo({x:-1*a,y:-1*o,scale:s,friction:0,ignoreBounds:!0}),e.$content.style.visibility="",e.state="zoomIn",!0===r&&i.on("afterTransform",(function(t){"zoomIn"!==e.state&&"zoomOut"!==e.state||(t.$content.style.opacity=Math.min(1,1-(1-t.content.scale)/(1-s)))})),i.panTo({x:0,y:0,scale:1,friction:this.fancybox.option("Image.zoomFriction")})}},{key:"zoomOut",value:function(){var t=this,e=this.fancybox,i=e.getSlide(),n=i.Panzoom;if(n){i.state="zoomOut",e.state="customClosing",i.$caption&&(i.$caption.style.visibility="hidden");var o=this.fancybox.option("Image.zoomFriction"),a=function(e){var a=t.getZoomInfo(i),s=a.top,r=a.left,l=a.scale,c=a.opacity;e||c||(o*=.82),n.panTo({x:-1*r,y:-1*s,scale:l,friction:o,ignoreBounds:!0}),o*=.98};window.addEventListener("scroll",a),n.once("endAnimation",(function(){window.removeEventListener("scroll",a),e.destroy()})),a()}}},{key:"handleCursor",value:function(t){if("image"===t.type&&t.$el){var e=t.Panzoom,i=this.fancybox.option("Image.click",!1,t),n=this.fancybox.option("Image.touch"),o=t.$el.classList,a=this.fancybox.option("Image.canZoomInClass"),s=this.fancybox.option("Image.canZoomOutClass");if(o.remove(s),o.remove(a),e&&"toggleZoom"===i)e&&1===e.content.scale&&e.option("maxScale")-e.content.scale>.01?o.add(a):e.content.scale>1&&!n&&o.add(s);else"close"===i&&o.add(s)}}},{key:"onWheel",value:function(t,e){if("ready"===this.fancybox.state&&!1!==this.fancybox.trigger("Image.wheel",e))switch(this.fancybox.option("Image.wheel")){case"zoom":"done"===t.state&&t.Panzoom&&t.Panzoom.zoomWithWheel(e);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[e.deltaY<0?"prev":"next"]()}}},{key:"onClick",value:function(t,e){var i=this;if("ready"===this.fancybox.state){var n=t.Panzoom;if(!n||!n.dragPosition.midPoint&&0===n.dragOffset.x&&0===n.dragOffset.y&&1===n.dragOffset.scale){if(this.fancybox.Carousel.Panzoom.lockAxis)return!1;var o=function(n){switch(n){case"toggleZoom":e.stopPropagation(),t.Panzoom&&t.Panzoom.zoomWithClick(e);break;case"close":i.fancybox.close();break;case"next":e.stopPropagation(),i.fancybox.next()}},a=this.fancybox.option("Image.click"),s=this.fancybox.option("Image.doubleClick");s?this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null,o(s)):this.clickTimer=setTimeout((function(){i.clickTimer=null,o(a)}),300):o(a)}}}},{key:"onPageChange",value:function(t,e){var i=t.getSlide();e.slides.forEach((function(t){t.Panzoom&&"done"===t.state&&t.index!==i.index&&t.Panzoom.panTo({x:0,y:0,scale:1,friction:.8})}))}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events)}}]),t}();K.defaults={canZoomInClass:"can-zoom_in",canZoomOutClass:"can-zoom_out",zoom:!0,zoomOpacity:"auto",zoomFriction:.82,ignoreCoveredThumbnail:!1,touch:!0,click:"toggleZoom",doubleClick:null,wheel:"zoom",fit:"contain",wrap:!1,Panzoom:{ratio:1}};var J=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onChange","onClosing"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={initCarousel:this.onChange,"Carousel.change":this.onChange,closing:this.onClosing},this.hasCreatedHistory=!1,this.origHash="",this.timer=null}return s(t,[{key:"onChange",value:function(t){var e=this,i=t.Carousel;this.timer&&clearTimeout(this.timer);var n=null===i.prevPage,o=t.getSlide(),a=new URL(document.URL).hash,s=!1;if(o.slug)s="#"+o.slug;else{var r=o.$trigger&&o.$trigger.dataset,l=t.option("slug")||r&&r.fancybox;l&&l.length&&"true"!==l&&(s="#"+l+(i.slides.length>1?"-"+(o.index+1):""))}n&&(this.origHash=a!==s?a:""),s&&a!==s&&(this.timer=setTimeout((function(){try{window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+s),n&&(e.hasCreatedHistory=!0)}catch(t){}}),300))}},{key:"onClosing",value:function(){if(this.timer&&clearTimeout(this.timer),!0!==this.hasSilentClose)try{return void window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash||""))}catch(t){}}},{key:"attach",value:function(t){t.on(this.events)}},{key:"detach",value:function(t){t.off(this.events)}}],[{key:"startFromUrl",value:function(){var e=t.Fancybox;if(e&&!e.getInstance()&&!1!==e.defaults.Hash){var i=t.getParsedURL(),n=i.hash,o=i.slug,a=i.index;if(o){var s=document.querySelector('[data-slug="'.concat(n,'"]'));if(s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),!e.getInstance()){var r=document.querySelectorAll('[data-fancybox="'.concat(o,'"]'));r.length&&(null===a&&1===r.length?s=r[0]:a&&(s=r[a-1]),s&&s.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}}}}},{key:"onHashChange",value:function(){var e=t.getParsedURL(),i=e.slug,n=e.index,o=t.Fancybox,a=o&&o.getInstance();if(a&&a.plugins.Hash){if(i){var s=a.Carousel;if(i===a.option("slug"))return s.slideTo(n-1);var r,l=x(s.slides);try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c.slug&&c.slug===i)return s.slideTo(c.index)}}catch(t){l.e(t)}finally{l.f()}var h=a.getSlide(),d=h.$trigger&&h.$trigger.dataset;if(d&&d.fancybox===i)return s.slideTo(n-1)}a.plugins.Hash.hasSilentClose=!0,a.close()}t.startFromUrl()}},{key:"create",value:function(e){function i(){window.addEventListener("hashchange",t.onHashChange,!1),t.startFromUrl()}t.Fancybox=e,W&&window.requestAnimationFrame((function(){/complete|interactive|loaded/.test(document.readyState)?i():document.addEventListener("DOMContentLoaded",i)}))}},{key:"destroy",value:function(){window.removeEventListener("hashchange",t.onHashChange,!1)}},{key:"getParsedURL",value:function(){var t=window.location.hash.substr(1),e=t.split("-"),i=e.length>1&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||null;return{hash:t,slug:e.join("-"),index:i}}}]),t}(),Q={pageXOffset:0,pageYOffset:0,element:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement},activate:function(t){Q.pageXOffset=window.pageXOffset,Q.pageYOffset=window.pageYOffset,t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},deactivate:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},tt=function(){function t(e){o(this,t),this.fancybox=e,this.active=!1,this.handleVisibilityChange=this.handleVisibilityChange.bind(this)}return s(t,[{key:"isActive",value:function(){return this.active}},{key:"setTimer",value:function(){var t=this;if(this.active&&!this.timer){var e=this.fancybox.option("slideshow.delay",3e3);this.timer=setTimeout((function(){t.timer=null,t.fancybox.option("infinite")||t.fancybox.getSlide().index!==t.fancybox.Carousel.slides.length-1?t.fancybox.next():t.fancybox.jumpTo(0,{friction:0})}),e);var i=this.$progress;i||((i=document.createElement("div")).classList.add("fancybox__progress"),this.fancybox.$carousel.parentNode.insertBefore(i,this.fancybox.$carousel),this.$progress=i,i.offsetHeight),i.style.transitionDuration="".concat(e,"ms"),i.style.transform="scaleX(1)"}}},{key:"clearTimer",value:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&(this.$progress.style.transitionDuration="",this.$progress.style.transform="",this.$progress.offsetHeight)}},{key:"activate",value:function(){this.active||(this.active=!0,this.fancybox.$container.classList.add("has-slideshow"),"done"===this.fancybox.getSlide().state&&this.setTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange,!1))}},{key:"handleVisibilityChange",value:function(){this.deactivate()}},{key:"deactivate",value:function(){this.active=!1,this.clearTimer(),this.fancybox.$container.classList.remove("has-slideshow"),document.removeEventListener("visibilitychange",this.handleVisibilityChange,!1)}},{key:"toggle",value:function(){this.active?this.deactivate():this.fancybox.Carousel.slides.length>1&&this.activate()}}]),t}(),et={display:["counter","zoom","slideshow","fullscreen","thumbs","close"],autoEnable:!0,items:{counter:{position:"left",type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',attr:{tabindex:-1}},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',attr:{"data-fancybox-prev":""}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',attr:{"data-fancybox-next":""}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',click:function(t){t.preventDefault(),Q.element()?Q.deactivate():Q.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',click:function(t){t.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click:function(t){t.preventDefault();var e=this.fancybox.getSlide().Panzoom;e&&e.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click:function(t){t.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',click:function(t){t.stopPropagation();var e=this.fancybox.plugins.Thumbs;e&&e.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',attr:{"data-fancybox-close":"",tabindex:0}}}},it=function(){function t(e){var i=this;o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var n=0,a=["onInit","onPrepare","onDone","onKeydown","onClosing","onChange","onSettle","onRefresh"];n<a.length;n++){var s=a[n];this[s]=this[s].bind(this)}this.events={init:this.onInit,prepare:this.onPrepare,done:this.onDone,keydown:this.onKeydown,closing:this.onClosing,"Carousel.change":this.onChange,"Carousel.settle":this.onSettle,"Carousel.Panzoom.touchStart":function(){return i.onRefresh()},"Image.startAnimation":function(t,e){return i.onRefresh(e)},"Image.afterUpdate":function(t,e){return i.onRefresh(e)}}}return s(t,[{key:"onInit",value:function(){if(this.fancybox.option("Toolbar.autoEnable")){var t,e=!1,i=x(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){if("image"===t.value.type){e=!0;break}}}catch(t){i.e(t)}finally{i.f()}if(!e)return void(this.state="disabled")}var n,o=x(this.fancybox.option("Toolbar.display"));try{for(o.s();!(n=o.n()).done;){var a=n.value;if("close"===(w(a)?a.id:a)){this.fancybox.options.closeButton=!1;break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"onPrepare",value:function(){var t=this.fancybox;if("init"===this.state&&(this.build(),this.update(),this.Slideshow=new tt(t),!t.Carousel.prevPage&&(t.option("slideshow.autoStart")&&this.Slideshow.activate(),t.option("fullscreen.autoStart")&&!Q.element())))try{Q.activate(t.$container)}catch(t){}}},{key:"onFsChange",value:function(){window.scrollTo(Q.pageXOffset,Q.pageYOffset)}},{key:"onSettle",value:function(){var t=this.fancybox,e=this.Slideshow;e&&e.isActive()&&(t.getSlide().index!==t.Carousel.slides.length-1||t.option("infinite")?"done"===t.getSlide().state&&e.setTimer():e.deactivate())}},{key:"onChange",value:function(){this.update(),this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer()}},{key:"onDone",value:function(t,e){var i=this.Slideshow;e.index===t.getSlide().index&&(this.update(),i&&i.isActive()&&(t.option("infinite")||e.index!==t.Carousel.slides.length-1?i.setTimer():i.deactivate()))}},{key:"onRefresh",value:function(t){t&&t.index!==this.fancybox.getSlide().index||(this.update(),!this.Slideshow||!this.Slideshow.isActive()||t&&"done"!==t.state||this.Slideshow.deactivate())}},{key:"onKeydown",value:function(t,e,i){" "===e&&this.Slideshow&&(this.Slideshow.toggle(),i.preventDefault())}},{key:"onClosing",value:function(){this.Slideshow&&this.Slideshow.deactivate(),document.removeEventListener("fullscreenchange",this.onFsChange)}},{key:"createElement",value:function(t){var e,i;("div"===t.type?e=document.createElement("div"):(e=document.createElement("link"===t.type?"a":"button")).classList.add("carousel__button"),e.innerHTML=t.html,e.setAttribute("tabindex",t.tabindex||0),t.class)&&(i=e.classList).add.apply(i,m(t.class.split(" ")));for(var n in t.attr)e.setAttribute(n,t.attr[n]);t.label&&e.setAttribute("title",this.fancybox.localize("{{".concat(t.label,"}}"))),t.click&&e.addEventListener("click",t.click.bind(this)),"prev"===t.id&&e.setAttribute("data-fancybox-prev",""),"next"===t.id&&e.setAttribute("data-fancybox-next","");var o=e.querySelector("svg");return o&&(o.setAttribute("role","img"),o.setAttribute("tabindex","-1"),o.setAttribute("xmlns","http://www.w3.org/2000/svg")),e}},{key:"build",value:function(){var t=this;this.cleanup();var e,i=this.fancybox.option("Toolbar.items"),n=[{position:"left",items:[]},{position:"center",items:[]},{position:"right",items:[]}],o=this.fancybox.plugins.Thumbs,a=x(this.fancybox.option("Toolbar.display"));try{var s=function(){var a=e.value,s=void 0,r=void 0;if(w(a)?(s=a.id,r=k({},i[s],a)):r=i[s=a],["counter","next","prev","slideshow"].includes(s)&&t.fancybox.items.length<2)return"continue";if("fullscreen"===s){if(!document.fullscreenEnabled||window.fullScreen)return"continue";document.addEventListener("fullscreenchange",t.onFsChange)}if("thumbs"===s&&(!o||"disabled"===o.state))return"continue";if(!r)return"continue";var l=r.position||"right",c=n.find((function(t){return t.position===l}));c&&c.items.push(r)};for(a.s();!(e=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}var r=document.createElement("div");r.classList.add("fancybox__toolbar");for(var l=0,c=n;l<c.length;l++){var h=c[l];if(h.items.length){var d=document.createElement("div");d.classList.add("fancybox__toolbar__items"),d.classList.add("fancybox__toolbar__items--".concat(h.position));var u,f=x(h.items);try{for(f.s();!(u=f.n()).done;){var v=u.value;d.appendChild(this.createElement(v))}}catch(t){f.e(t)}finally{f.f()}r.appendChild(d)}}this.fancybox.$carousel.parentNode.insertBefore(r,this.fancybox.$carousel),this.$container=r}},{key:"update",value:function(){var t,e=this.fancybox.getSlide(),i=e.index,n=this.fancybox.items.length,o=e.downloadSrc||("image"!==e.type||e.error?null:e.src),a=x(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));try{for(a.s();!(t=a.n()).done;){var s=t.value;o?(s.removeAttribute("disabled"),s.removeAttribute("tabindex"),s.setAttribute("href",o),s.setAttribute("download",o),s.setAttribute("target","_blank")):(s.setAttribute("disabled",""),s.setAttribute("tabindex",-1),s.removeAttribute("href"),s.removeAttribute("download"))}}catch(t){a.e(t)}finally{a.f()}var r,l=e.Panzoom,c=l&&l.option("maxScale")>l.option("baseScale"),h=x(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));try{for(h.s();!(r=h.n()).done;){var d=r.value;c?d.removeAttribute("disabled"):d.setAttribute("disabled","")}}catch(t){h.e(t)}finally{h.f()}var u,f=x(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));try{for(f.s();!(u=f.n()).done;){u.value.innerHTML=e.index+1}}catch(t){f.e(t)}finally{f.f()}var v,p=x(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));try{for(p.s();!(v=p.n()).done;){v.value.innerHTML=n}}catch(t){p.e(t)}finally{p.f()}if(!this.fancybox.option("infinite")){var g,m=x(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));try{for(m.s();!(g=m.n()).done;){var y=g.value;0===i?y.setAttribute("disabled",""):y.removeAttribute("disabled")}}catch(t){m.e(t)}finally{m.f()}var b,w=x(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));try{for(w.s();!(b=w.n()).done;){var k=b.value;i===n-1?k.setAttribute("disabled",""):k.removeAttribute("disabled")}}catch(t){w.e(t)}finally{w.f()}}}},{key:"cleanup",value:function(){this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer(),this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();it.defaults=et;var nt={ScrollLock:U,Thumbs:Y,Html:G,Toolbar:it,Image:K,Hash:J},ot={startIndex:0,preload:1,infinite:!0,showClass:"fancybox-zoomInUp",hideClass:"fancybox-fadeOut",animated:!0,hideScrollbar:!0,parentEl:null,mainClass:null,autoFocus:!0,trapFocus:!0,placeFocusBack:!0,click:"close",closeButton:"inside",dragToClose:!0,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"next",ArrowDown:"prev",ArrowRight:"next",ArrowLeft:"prev"},template:{closeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',main:null},l10n:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}},at=new Map,st=0,rt=function(t){l(i,t);var e=f(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,i),t=t.map((function(t){return t.width&&(t._width=t.width),t.height&&(t._height=t.height),t})),(n=e.call(this,k(!0,{},ot,a))).bindHandlers(),n.state="init",n.setItems(t),n.attachPlugins(i.Plugins),n.trigger("init"),!0===n.option("hideScrollbar")&&n.hideScrollbar(),n.initLayout(),n.initCarousel(),n.attachEvents(),at.set(n.id,d(n)),n.trigger("prepare"),n.state="ready",n.trigger("ready"),n.$container.setAttribute("aria-hidden","false"),n.option("trapFocus")&&n.focus(),n}return s(i,[{key:"option",value:function(t){for(var e,n=this.getSlide(),o=n?n[t]:void 0,a=arguments.length,s=new Array(a>1?a-1:0),r=1;r<a;r++)s[r-1]=arguments[r];if(void 0!==o){var l;if("function"==typeof o)o=(l=o).call.apply(l,[this,this].concat(s));return o}return(e=p(c(i.prototype),"option",this)).call.apply(e,[this,t].concat(s))}},{key:"bindHandlers",value:function(){for(var t=0,e=["onMousedown","onKeydown","onClick","onFocus","onCreateSlide","onSettle","onTouchMove","onTouchEnd","onTransform"];t<e.length;t++){var i=e[t];this[i]=this[i].bind(this)}}},{key:"attachEvents",value:function(){document.addEventListener("mousedown",this.onMousedown),document.addEventListener("keydown",this.onKeydown,!0),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),this.$container.addEventListener("click",this.onClick)}},{key:"detachEvents",value:function(){document.removeEventListener("mousedown",this.onMousedown),document.removeEventListener("keydown",this.onKeydown,!0),document.removeEventListener("focus",this.onFocus,!0),this.$container.removeEventListener("click",this.onClick)}},{key:"initLayout",value:function(){var t=this;this.$root=this.option("parentEl")||document.body;var e=this.option("template.main");e&&(this.$root.insertAdjacentHTML("beforeend",this.localize(e)),this.$container=this.$root.querySelector(".fancybox__container")),this.$container||(this.$container=document.createElement("div"),this.$root.appendChild(this.$container)),this.$container.onscroll=function(){return t.$container.scrollLeft=0,!1},Object.entries({class:"fancybox__container",role:"dialog",tabIndex:"-1","aria-modal":"true","aria-hidden":"true","aria-label":this.localize("{{MODAL}}")}).forEach((function(e){var i;return(i=t.$container).setAttribute.apply(i,m(e))})),this.option("animated")&&this.$container.classList.add("is-animated"),this.$backdrop=this.$container.querySelector(".fancybox__backdrop"),this.$backdrop||(this.$backdrop=document.createElement("div"),this.$backdrop.classList.add("fancybox__backdrop"),this.$container.appendChild(this.$backdrop)),this.$carousel=this.$container.querySelector(".fancybox__carousel"),this.$carousel||(this.$carousel=document.createElement("div"),this.$carousel.classList.add("fancybox__carousel"),this.$container.appendChild(this.$carousel)),this.$container.Fancybox=this,this.id=this.$container.getAttribute("id"),this.id||(this.id=this.options.id||++st,this.$container.setAttribute("id","fancybox-"+this.id));var i,n=this.option("mainClass");n&&(i=this.$container.classList).add.apply(i,m(n.split(" ")));return document.documentElement.classList.add("with-fancybox"),this.trigger("initLayout"),this}},{key:"setItems",value:function(t){var e,i=[],n=x(t);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=o.$trigger;if(a){var s=a.dataset||{};o.src=s.src||a.getAttribute("href")||o.src,o.type=s.type||o.type,!o.src&&a instanceof HTMLImageElement&&(o.src=a.currentSrc||o.$trigger.src)}var r=o.$thumb;if(!r){var l=o.$trigger&&o.$trigger.origTarget;l&&(r=l instanceof HTMLImageElement?l:l.querySelector("img:not([aria-hidden])")),!r&&o.$trigger&&(r=o.$trigger instanceof HTMLImageElement?o.$trigger:o.$trigger.querySelector("img:not([aria-hidden])"))}o.$thumb=r||null;var c=o.thumb;!c&&r&&!(c=r.currentSrc||r.src)&&r.dataset&&(c=r.dataset.lazySrc||r.dataset.src),c||"image"!==o.type||(c=o.src),o.thumb=c||null,o.caption=o.caption||"",i.push(o)}}catch(t){n.e(t)}finally{n.f()}this.items=i}},{key:"initCarousel",value:function(){var t=this;return this.Carousel=new H(this.$carousel,k(!0,{},{prefix:"",classNames:{viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"},textSelection:!0,preload:this.option("preload"),friction:.88,slides:this.items,initialPage:this.options.startIndex,slidesPerPage:1,infiniteX:this.option("infinite"),infiniteY:!0,l10n:this.option("l10n"),Dots:!1,Navigation:{classNames:{main:"fancybox__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}},Panzoom:{textSelection:!0,panOnlyZoomed:function(){return t.Carousel&&t.Carousel.pages&&t.Carousel.pages.length<2&&!t.option("dragToClose")},lockAxis:function(){if(t.Carousel){var e="x";return t.option("dragToClose")&&(e+="y"),e}}},on:{"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Carousel.".concat(e)].concat(n))},init:function(e){return t.Carousel=e},createSlide:this.onCreateSlide,settle:this.onSettle}},this.option("Carousel"))),this.option("dragToClose")&&this.Carousel.Panzoom.on({touchMove:this.onTouchMove,afterTransform:this.onTransform,touchEnd:this.onTouchEnd}),this.trigger("initCarousel"),this}},{key:"onCreateSlide",value:function(t,e){var i=e.caption||"";if("function"==typeof this.options.caption&&(i=this.options.caption.call(this,this,this.Carousel,e)),"string"==typeof i&&i.length){var n=document.createElement("div"),o="fancybox__caption_".concat(this.id,"_").concat(e.index);n.className="fancybox__caption",n.innerHTML=i,n.setAttribute("id",o),e.$caption=e.$el.appendChild(n),e.$el.classList.add("has-caption"),e.$el.setAttribute("aria-labelledby",o)}}},{key:"onSettle",value:function(){this.option("autoFocus")&&this.focus()}},{key:"onFocus",value:function(t){this.isTopmost()&&this.focus(t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented){var e=t.composedPath()[0];if(e.matches("[data-fancybox-close]"))return t.preventDefault(),void i.close(!1,t);if(e.matches("[data-fancybox-next]"))return t.preventDefault(),void i.next();if(e.matches("[data-fancybox-prev]"))return t.preventDefault(),void i.prev();var n=document.activeElement;if(n){if(n.closest("[contenteditable]"))return;e.matches(X)||n.blur()}if(!e.closest(".fancybox__content"))if(!getSelection().toString().length)if(!1!==this.trigger("click",t))switch(this.option("click")){case"close":this.close();break;case"next":this.next()}}}},{key:"onTouchMove",value:function(){var t=this.getSlide().Panzoom;return!t||1===t.content.scale}},{key:"onTouchEnd",value:function(t){var e=t.dragOffset.y;Math.abs(e)>=150||Math.abs(e)>=35&&t.dragOffset.time<350?(this.option("hideClass")&&(this.getSlide().hideClass="fancybox-throwOut".concat(t.content.y<0?"Up":"Down")),this.close()):"y"===t.lockAxis&&t.panTo({y:0})}},{key:"onTransform",value:function(t){if(this.$backdrop){var e=Math.abs(t.content.y),i=e<1?"":Math.max(.33,Math.min(1,1-e/t.content.fitHeight*1.5));this.$container.style.setProperty("--fancybox-ts",i?"0s":""),this.$container.style.setProperty("--fancybox-opacity",i)}}},{key:"onMousedown",value:function(){"ready"===this.state&&document.body.classList.add("is-using-mouse")}},{key:"onKeydown",value:function(t){if(this.isTopmost()){document.body.classList.remove("is-using-mouse");var e=t.key,i=this.option("keyboard");if(i&&!t.ctrlKey&&!t.altKey&&!t.shiftKey){var n=t.composedPath()[0],o=document.activeElement&&document.activeElement.classList,a=o&&o.contains("carousel__button");if("Escape"!==e&&!a)if(t.target.isContentEditable||-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.nodeName))return;if(!1!==this.trigger("keydown",e,t)){var s=i[e];"function"==typeof this[s]&&this[s]()}}}}},{key:"getSlide",value:function(){var t=this.Carousel;if(!t)return null;var e=null===t.page?t.option("initialPage"):t.page,i=t.pages||[];return i.length&&i[e]?i[e].slides[0]:null}},{key:"focus",value:function(t){if(!(i.ignoreFocusChange||["init","closing","customClosing","destroy"].indexOf(this.state)>-1)){var e=this.$container,n=this.getSlide(),o="done"===n.state?n.$el:null;if(!o||!o.contains(document.activeElement)){t&&t.preventDefault(),i.ignoreFocusChange=!0;for(var a,s=[],r=0,l=Array.from(e.querySelectorAll(X));r<l.length;r++){var c=l[r],h=c.offsetParent,d=o&&o.contains(c),u=!this.Carousel.$viewport.contains(c);h&&(d||u)?(s.push(c),void 0!==c.dataset.origTabindex&&(c.tabIndex=c.dataset.origTabindex,c.removeAttribute("data-orig-tabindex")),(c.hasAttribute("autoFocus")||!a&&d&&!c.classList.contains("carousel__button"))&&(a=c)):(c.dataset.origTabindex=void 0===c.dataset.origTabindex?c.getAttribute("tabindex"):c.dataset.origTabindex,c.tabIndex=-1)}t?s.indexOf(t.target)>-1?this.lastFocus=t.target:this.lastFocus===e?q(s[s.length-1]):q(e):this.option("autoFocus")&&a?q(a):s.indexOf(document.activeElement)<0&&q(e),this.lastFocus=document.activeElement,i.ignoreFocusChange=!1}}}},{key:"hideScrollbar",value:function(){if(W){var t=window.innerWidth-document.documentElement.getBoundingClientRect().width,e="fancybox-style-noscroll",i=document.getElementById(e);i||t>0&&((i=document.createElement("style")).id=e,i.type="text/css",i.innerHTML=".compensate-for-scrollbar {padding-right: ".concat(t,"px;}"),document.getElementsByTagName("head")[0].appendChild(i),document.body.classList.add("compensate-for-scrollbar"))}}},{key:"revealScrollbar",value:function(){document.body.classList.remove("compensate-for-scrollbar");var t=document.getElementById("fancybox-style-noscroll");t&&t.remove()}},{key:"clearContent",value:function(t){this.Carousel.trigger("removeSlide",t),t.$content&&(t.$content.remove(),t.$content=null),t.$closeButton&&(t.$closeButton.remove(),t.$closeButton=null),t._className&&t.$el.classList.remove(t._className)}},{key:"setContent",value:function(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.$el;if(e instanceof HTMLElement)["img","iframe","video","audio"].indexOf(e.nodeName.toLowerCase())>-1?(i=document.createElement("div")).appendChild(e):i=e;else{var a=document.createRange().createContextualFragment(e);(i=document.createElement("div")).appendChild(a)}if(t.filter&&!t.error&&(i=i.querySelector(t.filter)),i instanceof Element)return t._className="has-".concat(n.suffix||t.type||"unknown"),o.classList.add(t._className),i.classList.add("fancybox__content"),"none"!==i.style.display&&"none"!==getComputedStyle(i).getPropertyValue("display")||(i.style.display=t.display||this.option("defaultDisplay")||"flex"),t.id&&i.setAttribute("id",t.id),t.$content=i,o.prepend(i),this.manageCloseButton(t),"loading"!==t.state&&this.revealContent(t),i;this.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"manageCloseButton",value:function(t){var e=this,i=void 0===t.closeButton?this.option("closeButton"):t.closeButton;if(i&&("top"!==i||!this.$closeButton)){var n=document.createElement("button");n.classList.add("carousel__button","is-close"),n.setAttribute("title",this.options.l10n.CLOSE),n.innerHTML=this.option("template.closeButton"),n.addEventListener("click",(function(t){return e.close(t)})),"inside"===i?(t.$closeButton&&t.$closeButton.remove(),t.$closeButton=t.$content.appendChild(n)):this.$closeButton=this.$container.insertBefore(n,this.$container.firstChild)}}},{key:"revealContent",value:function(t){var e=this;this.trigger("reveal",t),t.$content.style.visibility="";var i=!1;t.error||"loading"===t.state||null!==this.Carousel.prevPage||t.index!==this.options.startIndex||(i=void 0===t.showClass?this.option("showClass"):t.showClass),i?(t.state="animating",this.animateCSS(t.$content,i,(function(){e.done(t)}))):this.done(t)}},{key:"animateCSS",value:function(t,e,i){if(t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!0,cancelable:!0})),t&&e){t.addEventListener("animationend",(function n(o){o.currentTarget===this&&(t.removeEventListener("animationend",n),i&&i(),t.classList.remove(e))})),t.classList.add(e)}else"function"==typeof i&&i()}},{key:"done",value:function(t){t.state="done",this.trigger("done",t);var e=this.getSlide();e&&t.index===e.index&&this.option("autoFocus")&&this.focus()}},{key:"setError",value:function(t,e){t.error=e,this.hideLoading(t),this.clearContent(t);var i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i,{suffix:"error"})}},{key:"showLoading",value:function(t){var e=this;t.state="loading",t.$el.classList.add("is-loading");var i=t.$el.querySelector(".fancybox__spinner");i||((i=document.createElement("div")).classList.add("fancybox__spinner"),i.innerHTML=this.option("template.spinner"),i.addEventListener("click",(function(){e.Carousel.Panzoom.velocity||e.close()})),t.$el.prepend(i))}},{key:"hideLoading",value:function(t){var e=t.$el&&t.$el.querySelector(".fancybox__spinner");e&&(e.remove(),t.$el.classList.remove("is-loading")),"loading"===t.state&&(this.trigger("load",t),t.state="ready")}},{key:"next",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slideNext()}},{key:"prev",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slidePrev()}},{key:"jumpTo",value:function(){var t;this.Carousel&&(t=this.Carousel).slideTo.apply(t,arguments)}},{key:"isClosing",value:function(){return["closing","customClosing","destroy"].includes(this.state)}},{key:"isTopmost",value:function(){return i.getInstance().id==this.id}},{key:"close",value:function(t){var e=this;if(t&&t.preventDefault(),!this.isClosing()&&!1!==this.trigger("shouldClose",t)&&(this.state="closing",this.Carousel.Panzoom.destroy(),this.detachEvents(),this.trigger("closing",t),"destroy"!==this.state)){this.$container.setAttribute("aria-hidden","true"),this.$container.classList.add("is-closing");var i=this.getSlide();if(this.Carousel.slides.forEach((function(t){t.$content&&t.index!==i.index&&e.Carousel.trigger("removeSlide",t)})),"closing"===this.state){var n=void 0===i.hideClass?this.option("hideClass"):i.hideClass;this.animateCSS(i.$content,n,(function(){e.destroy()}),!0)}}}},{key:"destroy",value:function(){if("destroy"!==this.state){this.state="destroy",this.trigger("destroy");var t=this.option("placeFocusBack")?this.option("triggerTarget",this.getSlide().$trigger):null;this.Carousel.destroy(),this.detachPlugins(),this.Carousel=null,this.options={},this.events={},this.$container.remove(),this.$container=this.$backdrop=this.$carousel=null,t&&q(t),at.delete(this.id);var e=i.getInstance();e?e.focus():(document.documentElement.classList.remove("with-fancybox"),document.body.classList.remove("is-using-mouse"),this.revealScrollbar())}}}],[{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new i(t,e)}},{key:"fromEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.defaultPrevented&&!(t.button&&0!==t.button||t.ctrlKey||t.metaKey||t.shiftKey)){var n,o,a,s=t.composedPath()[0],r=s;if((r.matches("[data-fancybox-trigger]")||(r=r.closest("[data-fancybox-trigger]")))&&(e.triggerTarget=r,n=r&&r.dataset&&r.dataset.fancyboxTrigger),n){var l=document.querySelectorAll('[data-fancybox="'.concat(n,'"]')),c=parseInt(r.dataset.fancyboxIndex,10)||0;r=l.length?l[c]:r}Array.from(i.openers.keys()).reverse().some((function(e){a=r||s;var i=!1;try{a instanceof Element&&("string"==typeof e||e instanceof String)&&(i=a.matches(e)||(a=a.closest(e)))}catch(t){}return!!i&&(t.preventDefault(),o=e,!0)}));var h=!1;if(o){e.event=t,e.target=a,a.origTarget=s,h=i.fromOpener(o,e);var d=i.getInstance();d&&"ready"===d.state&&t.detail&&document.body.classList.add("is-using-mouse")}return h}}},{key:"fromOpener",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(t){for(var e=["false","0","no","null","undefined"],i=["true","1","yes"],n=Object.assign({},t.dataset),o={},a=0,s=Object.entries(n);a<s.length;a++){var r=g(s[a],2),l=r[0],c=r[1];if("fancybox"!==l)if("width"===l||"height"===l)o["_".concat(l)]=c;else if("string"==typeof c||c instanceof String)if(e.indexOf(c)>-1)o[l]=!1;else if(i.indexOf(o[l])>-1)o[l]=!0;else try{o[l]=JSON.parse(c)}catch(t){o[l]=c}else o[l]=c}return t instanceof Element&&(o.$trigger=t),o},o=[],a=e.startIndex||0,s=e.target||null,r=void 0!==(e=k({},e,i.openers.get(t))).groupAll&&e.groupAll,l=void 0===e.groupAttr?"data-fancybox":e.groupAttr,c=l&&s?s.getAttribute("".concat(l)):"";if(!s||c||r){var h=e.root||(s?s.getRootNode():document.body);o=[].slice.call(h.querySelectorAll(t))}if(s&&!r&&(o=c?o.filter((function(t){return t.getAttribute("".concat(l))===c})):[s]),!o.length)return!1;var d=i.getInstance();return!(d&&o.indexOf(d.options.$trigger)>-1)&&(a=s?o.indexOf(s):a,new i(o=o.map(n),k({},e,{startIndex:a,$trigger:s})))}},{key:"bind",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(){document.body.addEventListener("click",i.fromEvent,!1)}W&&(i.openers.size||(/complete|interactive|loaded/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n)),i.openers.set(t,e))}},{key:"unbind",value:function(t){i.openers.delete(t),i.openers.size||i.destroy()}},{key:"destroy",value:function(){for(var t;t=i.getInstance();)t.destroy();i.openers=new Map,document.body.removeEventListener("click",i.fromEvent,!1)}},{key:"getInstance",value:function(t){return t?at.get(t):Array.from(at.values()).reverse().find((function(t){return!t.isClosing()&&t}))||null}},{key:"close",value:function(){var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=arguments.length>1?arguments[1]:void 0;if(t){var n,o=x(at.values());try{for(o.s();!(n=o.n()).done;){var a=n.value;a.close(e)}}catch(t){o.e(t)}finally{o.f()}}else{var s=i.getInstance();s&&s.close(e)}}},{key:"next",value:function(){var t=i.getInstance();t&&t.next()}},{key:"prev",value:function(){var t=i.getInstance();t&&t.prev()}}]),i}(O);rt.version="4.0.31",rt.defaults=ot,rt.openers=new Map,rt.Plugins=nt,rt.bind("[data-fancybox]");for(var lt=0,ct=Object.entries(rt.Plugins||{});lt<ct.length;lt++){var ht=g(ct[lt],2);ht[0];var dt=ht[1];"function"==typeof dt.create&&dt.create(rt)}t.Carousel=H,t.Fancybox=rt,t.Panzoom=M}));
/*!
 * GSAP 3.12.2
 * https://greensock.com
 * 
 * @license Copyright 2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function r(t){return"string"==typeof t}function s(t){return"function"==typeof t}function t(t){return"number"==typeof t}function u(t){return void 0===t}function v(t){return"object"==typeof t}function w(t){return!1!==t}function x(){return"undefined"!=typeof window}function y(t){return s(t)||r(t)}function P(t){return(i=yt(t,ot))&&Ee}function Q(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function R(t,e){return!e&&console.warn(t)}function S(t,e){return t&&(ot[t]=e)&&i&&(i[t]=e)||ot}function T(){return 0}function ea(t){var e,r,i=t[0];if(v(i)||s(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=gt.length;r--&&!gt[r].targetTest(i););e=gt[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Vt(t[r],e)))||t.splice(r,1);return t}function fa(t){return t._gsap||ea(Ot(t))[0]._gsap}function ga(t,e,r){return(r=t[e])&&s(r)?t[e]():u(r)&&t.getAttribute&&t.getAttribute(e)||r}function ha(t,e){return(t=t.split(",")).forEach(e)||t}function ia(t){return Math.round(1e5*t)/1e5||0}function ja(t){return Math.round(1e7*t)/1e7||0}function ka(t,e){var r=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),"+"===r?t+i:"-"===r?t-i:"*"===r?t*i:t/i}function la(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ma(){var t,e,r=ct.length,i=ct.slice(0);for(dt={},t=ct.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function na(t,e,r,i){ct.length&&!L&&ma(),t.render(e,r,i||L&&e<0&&(t._initted||t._startAt)),ct.length&&!L&&ma()}function oa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(at).length<2?e:r(t)?t.trim():t}function pa(t){return t}function qa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ta(t,e){for(var r in e)"__proto__"!==r&&"constructor"!==r&&"prototype"!==r&&(t[r]=v(e[r])?ta(t[r]||(t[r]={}),e[r]):e[r]);return t}function ua(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function va(t){var e=t.parent||I,r=t.keyframes?function _setKeyframeDefaults(i){return function(t,e){for(var r in e)r in t||"duration"===r&&i||"ease"===r||(t[r]=e[r])}}($(t.keyframes)):qa;if(w(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent||e._dp;return t}function xa(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t,e}function ya(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function za(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0}function Aa(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var r=t;r;)r._dirty=1,r=r.parent;return t}function Ca(t,e,r,i){return t._startAt&&(L?t._startAt.revert(ht):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))}function Ea(t){return t._repeat?Tt(t._tTime,t=t.duration()+t._rDelay)*t:0}function Ga(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function Ha(t){return t._end=ja(t._start+(t._tDur/Math.abs(t._ts||t._rts||X)||0))}function Ia(t,e){var r=t._dp;return r&&r.smoothChildTiming&&t._ts&&(t._start=ja(r._time-(0<t._ts?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ha(t),r._dirty||Aa(r,t)),t}function Ja(t,e){var r;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(r=Ga(t.rawTime(),e),(!e._dur||kt(0,e.totalDuration(),r)-e._tTime>X)&&e.render(r,!0)),Aa(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-X}}function Ka(e,r,i,n){return r.parent&&za(r),r._start=ja((t(i)?i:i||e!==I?xt(e,i,r):e._time)+r._delay),r._end=ja(r._start+(r.totalDuration()/Math.abs(r.timeScale())||0)),xa(e,r,"_first","_last",e._sort?"_start":0),bt(r)||(e._recent=r),n||Ja(e,r),e._ts<0&&Ia(e,e._tTime),e}function La(t,e){return(ot.ScrollTrigger||Q("scrollTrigger",e))&&ot.ScrollTrigger.create(e,t)}function Ma(t,e,r,i,n){return Gt(t,e,n),t._initted?!r&&t._pt&&!L&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&f!==Rt.frame?(ct.push(t),t._lazy=[n,i],1):void 0:1}function Ra(t,e,r,i){var n=t._repeat,a=ja(e)||0,s=t._tTime/t._tDur;return s&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=n?n<0?1e10:ja(a*(n+1)+t._rDelay*n):a,0<s&&!i&&Ia(t,t._tTime=t._tDur*s),t.parent&&Ha(t),r||Aa(t.parent,t),t}function Sa(t){return t instanceof Xt?Aa(t):Ra(t,t._dur)}function Va(e,r,i){var n,a,s=t(r[1]),o=(s?2:1)+(e<2?0:1),u=r[o];if(s&&(u.duration=r[1]),u.parent=i,e){for(n=u,a=i;a&&!("immediateRender"in n);)n=a.vars.defaults||{},a=w(a.vars.inherit)&&a.parent;u.immediateRender=w(n.immediateRender),e<2?u.runBackwards=1:u.startAt=r[o-1]}return new Zt(r[0],u,r[1+o])}function Wa(t,e){return t||0===t?e(t):e}function Ya(t,e){return r(t)&&(e=st.exec(t))?e[1]:""}function _a(t,e){return t&&v(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&v(t[0]))&&!t.nodeType&&t!==h}function cb(r){return r=Ot(r)[0]||R("Invalid scope")||{},function(t){var e=r.current||r.nativeElement||r;return Ot(t,e.querySelectorAll?e:e===r?R("Invalid scope")||a.createElement("div"):r)}}function db(t){return t.sort(function(){return.5-Math.random()})}function eb(t){if(s(t))return t;var p=v(t)?t:{each:t},_=jt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,y={},e=0<m&&m<1,T=isNaN(m)||e,b=p.axis,w=m,x=m;return r(m)?w=x={center:.5,edges:.5,end:1}[m]||0:!e&&T&&(w=m[0],x=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,c=(r||p).length,d=y[c];if(!d){if(!(f="auto"===p.grid?0:(p.grid||[1,U])[1])){for(h=-U;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(d=y[c]=[],i=T?Math.min(f,c)*w-.5:m%f,n=f===U?0:T?c*x/f-.5:m/f|0,l=U,u=h=0;u<c;u++)a=u%f-i,s=n-(u/f|0),d[u]=o=b?Math.abs("y"===b?s:a):K(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&db(d),d.max=h-l,d.min=l,d.v=c=(parseFloat(p.amount)||parseFloat(p.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),d.b=c<0?g-c:g,d.u=Ya(p.amount||p.each)||0,_=_&&c<0?Yt(_):_}return c=(d[t]-d.min)/d.max||0,ja(d.b+(_?_(c):c)*d.v)+d.u}}function fb(i){var n=Math.pow(10,((i+"").split(".")[1]||"").length);return function(e){var r=ja(Math.round(parseFloat(e)/i)*i*n);return(r-r%1)/n+(t(e)?0:Ya(e))}}function gb(h,e){var l,f,r=$(h);return!r&&v(h)&&(l=r=h.radius||U,h.values?(h=Ot(h.values),(f=!t(h[0]))&&(l*=l)):h=fb(h.increment)),Wa(e,r?s(h)?function(t){return f=h(t),Math.abs(f-t)<=l?f:t}:function(e){for(var r,i,n=parseFloat(f?e.x:e),a=parseFloat(f?e.y:0),s=U,o=0,u=h.length;u--;)(r=f?(r=h[u].x-n)*r+(i=h[u].y-a)*i:Math.abs(h[u]-n))<s&&(s=r,o=u);return o=!l||s<=l?h[o]:e,f||o===e||t(e)?o:o+Ya(e)}:fb(h))}function hb(t,e,r,i){return Wa($(t)?!e:!0===r?!!(r=0):!i,function(){return $(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&Math.floor(Math.round((t-r/2+Math.random()*(e-t+.99*r))/r)*r*i)/i})}function lb(e,r,t){return Wa(t,function(t){return e[~~r(t)]})}function ob(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?at:tt),s+=t.substr(a,e-a)+hb(n?r:+r[0],n?0:+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function rb(t,e,r){var i,n,a,s=t.labels,o=U;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function tb(t){return za(t),t.scrollTrigger&&t.scrollTrigger.kill(!!L),t.progress()<1&&At(t,"onInterrupt"),t}function wb(t){if(x()&&t){var e=(t=!t.name&&t.default||t).name,r=s(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:T,render:he,add:Qt,kill:ce,modifier:fe,rawVars:0},a={targetTest:0,get:0,getSetter:ne,aliases:{},register:0};if(Ft(),t!==i){if(pt[e])return;qa(i,qa(ua(t,n),a)),yt(i.prototype,yt(n,ua(t,a))),pt[i.prop=e]=i,t.targetTest&&(gt.push(i),ft[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}S(e,i),t.register&&t.register(Ee,i,_e)}else t&&Ct.push(t)}function zb(t,e,r){return(6*(t+=t<0?1:1<t?-1:0)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*St+.5|0}function Ab(e,r,i){var n,a,s,o,u,h,l,f,c,d,p=e?t(e)?[e>>16,e>>8&St,e&St]:0:Et.black;if(!p){if(","===e.substr(-1)&&(e=e.substr(0,e.length-1)),Et[e])p=Et[e];else if("#"===e.charAt(0)){if(e.length<6&&(e="#"+(n=e.charAt(1))+n+(a=e.charAt(2))+a+(s=e.charAt(3))+s+(5===e.length?e.charAt(4)+e.charAt(4):"")),9===e.length)return[(p=parseInt(e.substr(1,6),16))>>16,p>>8&St,p&St,parseInt(e.substr(7),16)/255];p=[(e=parseInt(e.substr(1),16))>>16,e>>8&St,e&St]}else if("hsl"===e.substr(0,3))if(p=d=e.match(tt),r){if(~e.indexOf("="))return p=e.match(et),i&&p.length<4&&(p[3]=1),p}else o=+p[0]%360/360,u=p[1]/100,n=2*(h=p[2]/100)-(a=h<=.5?h*(u+1):h+u-h*u),3<p.length&&(p[3]*=1),p[0]=zb(o+1/3,n,a),p[1]=zb(o,n,a),p[2]=zb(o-1/3,n,a);else p=e.match(tt)||Et.transparent;p=p.map(Number)}return r&&!d&&(n=p[0]/St,a=p[1]/St,s=p[2]/St,h=((l=Math.max(n,a,s))+(f=Math.min(n,a,s)))/2,l===f?o=u=0:(c=l-f,u=.5<h?c/(2-l-f):c/(l+f),o=l===n?(a-s)/c+(a<s?6:0):l===a?(s-n)/c+2:(n-a)/c+4,o*=60),p[0]=~~(o+.5),p[1]=~~(100*u+.5),p[2]=~~(100*h+.5)),i&&p.length<4&&(p[3]=1),p}function Bb(t){var r=[],i=[],n=-1;return t.split(Dt).forEach(function(t){var e=t.match(rt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function Cb(t,e,r){var i,n,a,s,o="",u=(t+o).match(Dt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=Ab(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=Bb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(Dt,"1").split(rt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(Dt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function Fb(t){var e,r=t.join(" ");if(Dt.lastIndex=0,Dt.test(r))return e=zt.test(r),t[1]=Cb(t[1],e),t[0]=Cb(t[0],e,Bb(t[1])),!0}function Ob(t){var e=(t+"").split("("),r=Bt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(It,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:function _valueInParentheses(t){var e=t.indexOf("(")+1,r=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<r?t.indexOf(")",r+1):r)}(t).split(",").map(oa)):Bt._CE&&Lt.test(t)?Bt._CE("",t):r}function Qb(t,e){for(var r,i=t._first;i;)i instanceof Xt?Qb(i,e):!i.vars.yoyoEase||i._yoyo&&i._repeat||i._yoyo===e||(i.timeline?Qb(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next}function Sb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return ha(t,function(t){for(var e in Bt[t]=ot[t]=a,Bt[n=t.toLowerCase()]=r,a)Bt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Bt[t+"."+e]=a[e]}),a}function Tb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Ub(r,t,e){function Jm(t){return 1===t?1:i*Math.pow(2,-10*t)*H((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/N*(Math.asin(1/i)||0),s="out"===r?Jm:"in"===r?function(t){return 1-Jm(1-t)}:Tb(Jm);return n=N/n,s.config=function(t,e){return Ub(r,t,e)},s}function Vb(e,r){function Rm(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?Rm:"in"===e?function(t){return 1-Rm(1-t)}:Tb(Rm);return t.config=function(t){return Vb(e,t)},t}var B,L,l,I,h,n,a,i,o,f,c,d,p,_,m,g,b,k,M,O,A,C,E,D,z,F,Y,j,q={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},V={duration:.5,overwrite:!1,delay:0},U=1e8,X=1/U,N=2*Math.PI,W=N/4,G=0,K=Math.sqrt,J=Math.cos,H=Math.sin,Z="function"==typeof ArrayBuffer&&ArrayBuffer.isView||function(){},$=Array.isArray,tt=/(?:-?\.?\d|\.)+/gi,et=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,rt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,it=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,nt=/[+-]=-?[.\d]+/,at=/[^,'"\[\]\s]+/gi,st=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ot={},ut={suppressEvents:!0,isStart:!0,kill:!1},ht={suppressEvents:!0,kill:!1},lt={suppressEvents:!0},ft={},ct=[],dt={},pt={},_t={},mt=30,gt=[],vt="",yt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},Tt=function _animationCycle(t,e){var r=Math.floor(t/=e);return t&&r===t?r-1:r},bt=function _isFromOrFromStart(t){var e=t.data;return"isFromStart"===e||"isStart"===e},wt={_start:0,endTime:T,totalDuration:T},xt=function _parsePosition(t,e,i){var n,a,s,o=t.labels,u=t._recent||wt,h=t.duration()>=U?u.endTime(!1):t._dur;return r(e)&&(isNaN(e)||e in o)?(a=e.charAt(0),s="%"===e.substr(-1),n=e.indexOf("="),"<"===a||">"===a?(0<=n&&(e=e.replace(/=/,"")),("<"===a?u._start:u.endTime(0<=u._repeat))+(parseFloat(e.substr(1))||0)*(s?(n<0?u:i).totalDuration()/100:1)):n<0?(e in o||(o[e]=h),o[e]):(a=parseFloat(e.charAt(n-1)+e.substr(n+1)),s&&i&&(a=a/100*($(i)?i[0]:i).totalDuration()),1<n?_parsePosition(t,e.substr(0,n-1),i)+a:h+a)):null==e?h:+e},kt=function _clamp(t,e,r){return r<t?t:e<r?e:r},Mt=[].slice,Ot=function toArray(t,e,i){return l&&!e&&l.selector?l.selector(t):!r(t)||i||!n&&Ft()?$(t)?function _flatten(t,e,i){return void 0===i&&(i=[]),t.forEach(function(t){return r(t)&&!e||_a(t,1)?i.push.apply(i,Ot(t)):i.push(t)})||i}(t,i):_a(t)?Mt.call(t,0):t?[t]:[]:Mt.call((e||a).querySelectorAll(t),0)},Pt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Wa(n,function(t){return r+((t-e)/a*s||0)})},At=function _callback(t,e,r){var i,n,a,s=t.vars,o=s[e],u=l,h=t._ctx;if(o)return i=s[e+"Params"],n=s.callbackScope||t,r&&ct.length&&ma(),h&&(l=h),a=i?o.apply(n,i):o.call(n),l=u,a},Ct=[],St=255,Et={aqua:[0,St,St],lime:[0,St,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,St],navy:[0,0,128],white:[St,St,St],olive:[128,128,0],yellow:[St,St,0],orange:[St,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[St,0,0],pink:[St,192,203],cyan:[0,St,St],transparent:[St,St,St,0]},Dt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";for(t in Et)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),zt=/hsl[a]?\(/,Rt=(M=Date.now,O=500,A=33,C=M(),E=C,z=D=1e3/240,g={time:0,frame:0,tick:function tick(){yl(!0)},deltaRatio:function deltaRatio(t){return b/(1e3/(t||60))},wake:function wake(){o&&(!n&&x()&&(h=n=window,a=h.document||{},ot.gsap=Ee,(h.gsapVersions||(h.gsapVersions=[])).push(Ee.version),P(i||h.GreenSockGlobals||!h.gsap&&h||{}),m=h.requestAnimationFrame,Ct.forEach(wb)),p&&g.sleep(),_=m||function(t){return setTimeout(t,z-1e3*g.time+1|0)},d=1,yl(2))},sleep:function sleep(){(m?h.cancelAnimationFrame:clearTimeout)(p),d=0,_=T},lagSmoothing:function lagSmoothing(t,e){O=t||1/0,A=Math.min(e||33,O)},fps:function fps(t){D=1e3/(t||240),z=1e3*g.time+D},add:function add(n,t,e){var a=t?function(t,e,r,i){n(t,e,r,i),g.remove(a)}:n;return g.remove(n),F[e?"unshift":"push"](a),Ft(),a},remove:function remove(t,e){~(e=F.indexOf(t))&&F.splice(e,1)&&e<=k&&k--},_listeners:F=[]}),Ft=function _wake(){return!d&&Rt.wake()},Bt={},Lt=/^[\d.\-M][\d.\-,\s]/,It=/["']/g,Yt=function _invertEase(e){return function(t){return 1-e(1-t)}},jt=function _parseEase(t,e){return t&&(s(t)?t:Bt[t]||Ob(t))||e};function yl(t){var e,r,i,n,a=M()-E,s=!0===t;if(O<a&&(C+=a-A),(0<(e=(i=(E+=a)-C)-z)||s)&&(n=++g.frame,b=i-1e3*g.time,g.time=i/=1e3,z+=e+(D<=e?4:D-e),r=1),s||(p=_(yl)),r)for(k=0;k<F.length;k++)F[k](i,b,n,t)}function gn(t){return t<j?Y*t*t:t<.7272727272727273?Y*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?Y*(t-=2.25/2.75)*t+.9375:Y*Math.pow(t-2.625/2.75,2)+.984375}ha("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;Sb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Bt.Linear.easeNone=Bt.none=Bt.Linear.easeIn,Sb("Elastic",Ub("in"),Ub("out"),Ub()),Y=7.5625,j=1/2.75,Sb("Bounce",function(t){return 1-gn(1-t)},gn),Sb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),Sb("Circ",function(t){return-(K(1-t*t)-1)}),Sb("Sine",function(t){return 1===t?1:1-J(t*W)}),Sb("Back",Vb("in"),Vb("out"),Vb()),Bt.SteppedEase=Bt.steps=ot.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*kt(0,.99999999,t)|0)+n)*r}}},V.ease=Bt["quad.out"],ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return vt+=t+","+t+"Params,"});var qt,Vt=function GSCache(t,e){this.id=G++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:ga,this.set=e?e.getSetter:ne},Ut=((qt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},qt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},qt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Ra(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},qt.totalTime=function totalTime(t,e){if(Ft(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(Ia(this,t),!r._dp||r.parent||Ja(r,this);r&&r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(0<this._ts&&t<this._tDur||this._ts<0&&0<t||!this._tDur&&!t)&&Ka(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===X||!t&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=t),na(this,t,e)),this},qt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+Ea(this))%(this._dur+this._rDelay)||(t?this._dur:0),e):this._time},qt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},qt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+Ea(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},qt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?Tt(this._tTime,r)+1:1},qt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-X?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?Ga(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-X?0:this._rts,this.totalTime(kt(-Math.abs(this._delay),this._tDur,e),!0),Ha(this),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this)},qt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ft(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&Math.abs(this._zTime)!==X&&(this._tTime-=X)))),this):this._ps},qt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||Ka(e,this,t-this._delay),this}return this._start},qt.endTime=function endTime(t){return this._start+(w(t)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},qt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Ga(e.rawTime(t),this):this._tTime:this._tTime},qt.revert=function revert(t){void 0===t&&(t=lt);var e=L;return L=t,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(t),this.totalTime(-.01,t.suppressEvents)),"nested"!==this.data&&!1!==t.kill&&this.kill(),L=e,this},qt.globalTime=function globalTime(t){for(var e=this,r=arguments.length?t:e.rawTime();e;)r=e._start+r/(e._ts||1),e=e._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1/0:this._sat.globalTime(t):r},qt.repeat=function repeat(t){return arguments.length?(this._repeat=t===1/0?-2:t,Sa(this)):-2===this._repeat?1/0:this._repeat},qt.repeatDelay=function repeatDelay(t){if(arguments.length){var e=this._time;return this._rDelay=t,Sa(this),e?this.time(e):this}return this._rDelay},qt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},qt.seek=function seek(t,e){return this.totalTime(xt(this,t),w(e))},qt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,w(e))},qt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},qt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},qt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},qt.resume=function resume(){return this.paused(!1)},qt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-X:0)),this):this._rts<0},qt.invalidate=function invalidate(){return this._initted=this._act=0,this._zTime=-X,this},qt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!(e&&!(this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-X))},qt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},qt.then=function then(t){var i=this;return new Promise(function(e){function Bo(){var t=i.then;i.then=null,s(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=s(t)?t:pa;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Bo():i._prom=Bo})},qt.kill=function kill(){tb(this)},Animation);function Animation(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ra(this,+t.duration,1,1),this.data=t.data,l&&(this._ctx=l).data.push(this),d||Rt.wake()}qa(Ut.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-X,_prom:0,_ps:!1,_rts:1});var Xt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=w(t.sortChildren),I&&Ka(t.parent||I,_assertThisInitialized(r),e),t.reversed&&r.reverse(),t.paused&&r.paused(!0),t.scrollTrigger&&La(_assertThisInitialized(r),t.scrollTrigger),r}_inheritsLoose(Timeline,i);var e=Timeline.prototype;return e.to=function to(t,e,r){return Va(0,arguments,this),this},e.from=function from(t,e,r){return Va(1,arguments,this),this},e.fromTo=function fromTo(t,e,r,i){return Va(2,arguments,this),this},e.set=function set(t,e,r){return e.duration=0,e.parent=this,va(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Zt(t,e,xt(this,r),1),this},e.call=function call(t,e,r){return Ka(this,Zt.delayedCall(0,t,e),r)},e.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Zt(t,r,xt(this,n)),this},e.staggerFrom=function staggerFrom(t,e,r,i,n,a,s){return r.runBackwards=1,va(r).immediateRender=w(r.immediateRender),this.staggerTo(t,e,r,i,n,a,s)},e.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,s,o){return i.startAt=r,va(i).immediateRender=w(i.immediateRender),this.staggerTo(t,e,i,n,a,s,o)},e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=t<=0?0:ja(t),y=this._zTime<0!=t<0&&(this._initted||!g);if(this!==I&&m<v&&0<=t&&(v=m),v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat){if(d=this._yoyo,o=g+this._rDelay,this._repeat<-1&&t<0)return this.totalTime(100*o+t,e,r);if(i=ja(v%o),v===m?(s=this._repeat,i=g):((s=~~(v/o))&&s===v/o&&(i=g,s--),g<i&&(i=g)),c=Tt(this._tTime,o),!_&&this._tTime&&c!==s&&this._tTime-c*o-this._dur<=0&&(c=s),d&&1&s&&(i=g-i,p=1),s!==c&&!this._lock){var T=d&&1&c,b=T===(d&&1&s);if(s<c&&(T=!T),_=T?0:v%g?g:v,this._lock=1,this.render(_||(p?0:ja(s*o)),e,!g)._lock=0,this._tTime=v,!e&&this.parent&&At(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_&&_!==this._time||u!=!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(g=this._dur,m=this._tDur,b&&(this._lock=2,_=T?g:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this;Qb(this,p)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if("isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if("isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,ja(_),ja(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t,_=0),!_&&i&&!e&&!s&&(At(this,"onStart"),this._tTime!==v))return this;if(_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-X);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r||L&&(n._initted||n._startAt)),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-X:X);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-X)._zTime=_<=i?1:-1,this._ts))return this._start=f,Ha(this),this.render(t,e,r);this._onUpdate&&!e&&At(this,"onUpdate",!0),(v===m&&this._tTime>=this.totalDuration()||!v&&_)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(v===m&&0<this._ts||!v&&this._ts<0)||za(this,1),e||t<0&&!_||!v&&!_&&m||(At(this,v===m&&0<=t?"onComplete":"onReverseComplete",!0),!this._prom||v<m&&0<this.timeScale()||this._prom())))}return this},e.add=function add(e,i){var n=this;if(t(i)||(i=xt(this,i,e)),!(e instanceof Ut)){if($(e))return e.forEach(function(t){return n.add(t,i)}),this;if(r(e))return this.addLabel(e,i);if(!s(e))return this;e=Zt.delayedCall(0,e)}return this!==e?Ka(this,e,i):this},e.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-U);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Zt?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},e.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},e.remove=function remove(t){return r(t)?this.removeLabel(t):s(t)?this.killTweensOf(t):(ya(this,t),t===this._recent&&(this._recent=this._last),Aa(this))},e.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=ja(Rt.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},e.addLabel=function addLabel(t,e){return this.labels[t]=xt(this,e),this},e.removeLabel=function removeLabel(t){return delete this.labels[t],this},e.addPause=function addPause(t,e,r){var i=Zt.delayedCall(0,e||T,r);return i.data="isPause",this._hasPause=1,Ka(this,i,xt(this,t))},e.removePause=function removePause(t){var e=this._first;for(t=xt(this,t);e;)e._start===t&&"isPause"===e.data&&za(e),e=e._next},e.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Nt!==i[n]&&i[n].kill(t,e);return this},e.getTweensOf=function getTweensOf(e,r){for(var i,n=[],a=Ot(e),s=this._first,o=t(r);s;)s instanceof Zt?la(s._targets,a)&&(o?(!Nt||s._initted&&s._ts)&&s.globalTime(0)<=r&&s.globalTime(s.totalDuration())>r:!r||s.isActive())&&n.push(s):(i=s.getTweensOf(a,r)).length&&n.push.apply(n,i),s=s._next;return n},e.tweenTo=function tweenTo(t,e){e=e||{};var r,i=this,n=xt(i,t),a=e.startAt,s=e.onStart,o=e.onStartParams,u=e.immediateRender,h=Zt.to(i,qa({ease:e.ease||"none",lazy:!1,immediateRender:!1,time:n,overwrite:"auto",duration:e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale())||X,onStart:function onStart(){if(i.pause(),!r){var t=e.duration||Math.abs((n-(a&&"time"in a?a.time:i._time))/i.timeScale());h._dur!==t&&Ra(h,t,0,1).render(h._time,!0,!0),r=1}s&&s.apply(h,o||[])}},e));return u?h.render(0):h},e.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,qa({startAt:{time:xt(this,t)}},r))},e.recent=function recent(){return this._recent},e.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t))},e.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),rb(this,xt(this,t),1)},e.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+X)},e.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t,n._end+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return Aa(this)},e.invalidate=function invalidate(t){var e=this._first;for(this._lock=0;e;)e.invalidate(t),e=e._next;return i.prototype.invalidate.call(this,t)},e.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._dp&&(this._time=this._tTime=this._pTime=0),t&&(this.labels={}),Aa(this)},e.totalDuration=function totalDuration(t){var e,r,i,n=0,a=this,s=a._last,o=U;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-t:t));if(a._dirty){for(i=a.parent;s;)e=s._prev,s._dirty&&s.totalDuration(),o<(r=s._start)&&a._sort&&s._ts&&!a._lock?(a._lock=1,Ka(a,s,r-s._delay,1)._lock=0):o=r,r<0&&s._ts&&(n-=r,(!i&&!a._dp||i&&i.smoothChildTiming)&&(a._start+=r/a._ts,a._time-=r,a._tTime-=r),a.shiftChildren(-r,!1,-Infinity),o=0),s._end>n&&s._ts&&(n=s._end),s=e;Ra(a,a===I&&a._time>n?a._time:n,1,1),a._dirty=0}return a._tDur},Timeline.updateRoot=function updateRoot(t){if(I._ts&&(na(I,Ga(t,I)),f=Rt.frame),Rt.frame>=mt){mt+=q.autoSleep||120;var e=I._first;if((!e||!e._ts)&&q.autoSleep&&Rt._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Rt.sleep()}}},Timeline}(Ut);qa(Xt.prototype,{_lock:0,_hasPause:0,_forcing:0});function ac(t,e,i,n,a,o){var u,h,l,f;if(pt[t]&&!1!==(u=new pt[t]).init(a,u.rawVars?e[t]:function _processVars(t,e,i,n,a){if(s(t)&&(t=Kt(t,a,e,i,n)),!v(t)||t.style&&t.nodeType||$(t)||Z(t))return r(t)?Kt(t,a,e,i,n):t;var o,u={};for(o in t)u[o]=Kt(t[o],a,e,i,n);return u}(e[t],n,a,o,i),i,n,o)&&(i._pt=h=new _e(i._pt,a,t,0,1,u.render,u,0,u.priority),i!==c))for(l=i._ptLookup[i._targets.indexOf(a)],f=u._props.length;f--;)l[u._props[f]]=h;return u}function gc(t,r,e,i){var n,a,s=r.ease||i||"power1.inOut";if($(r))a=e[t]||(e[t]=[]),r.forEach(function(t,e){return a.push({t:e/(r.length-1)*100,v:t,e:s})});else for(n in r)a=e[n]||(e[n]=[]),"ease"===n||a.push({t:parseFloat(t),v:r[n],e:s})}var Nt,Wt,Qt=function _addPropTween(t,e,i,n,a,o,u,h,l,f){s(n)&&(n=n(a||0,t,o));var c,d=t[e],p="get"!==i?i:s(d)?l?t[e.indexOf("set")||!s(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,_=s(d)?l?re:te:$t;if(r(n)&&(~n.indexOf("random(")&&(n=ob(n)),"="===n.charAt(1)&&(!(c=ka(p,n)+(Ya(p)||0))&&0!==c||(n=c))),!f||p!==n||Wt)return isNaN(p*n)||""===n?(d||e in t||Q(e,n),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,c,d,p,_=new _e(this._pt,t,e,0,1,ue,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(d=~(i+="").indexOf("random("))&&(i=ob(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(it)||[];o=it.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?ka(c,l)-c:parseFloat(l)-c,m:h&&h<4?Math.round:0},m=it.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(nt.test(i)||d)&&(_.e=0),this._pt=_}.call(this,t,e,p,n,_,h||q.stringFilter,l)):(c=new _e(this._pt,t,e,+p||0,n-(p||0),"boolean"==typeof d?se:ae,0,_),l&&(c.fp=l),u&&c.modifier(u,this,t),this._pt=c)},Gt=function _initTween(t,e,r){var i,n,a,s,o,u,h,l,f,c,d,p,_,m=t.vars,g=m.ease,v=m.startAt,y=m.immediateRender,T=m.lazy,b=m.onUpdate,x=m.onUpdateParams,k=m.callbackScope,M=m.runBackwards,O=m.yoyoEase,P=m.keyframes,A=m.autoRevert,C=t._dur,S=t._startAt,E=t._targets,D=t.parent,z=D&&"nested"===D.data?D.vars.targets:E,R="auto"===t._overwrite&&!B,F=t.timeline;if(!F||P&&g||(g="none"),t._ease=jt(g,V.ease),t._yEase=O?Yt(jt(!0===O?g:O,V.ease)):0,O&&t._yoyo&&!t._repeat&&(O=t._yEase,t._yEase=t._ease,t._ease=O),t._from=!F&&!!m.runBackwards,!F||P&&!m.stagger){if(p=(l=E[0]?fa(E[0]).harness:0)&&m[l.prop],i=ua(m,ft),S&&(S._zTime<0&&S.progress(1),e<0&&M&&y&&!A?S.render(-1,!0):S.revert(M&&C?ht:ut),S._lazy=0),v){if(za(t._startAt=Zt.set(E,qa({data:"isStart",overwrite:!1,parent:D,immediateRender:!0,lazy:!S&&w(T),startAt:null,delay:0,onUpdate:b,onUpdateParams:x,callbackScope:k,stagger:0},v))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L||!y&&!A)&&t._startAt.revert(ht),y&&C&&e<=0&&r<=0)return void(e&&(t._zTime=e))}else if(M&&C&&!S)if(e&&(y=!1),a=qa({overwrite:!1,data:"isFromStart",lazy:y&&!S&&w(T),immediateRender:y,stagger:0,parent:D},i),p&&(a[l.prop]=p),za(t._startAt=Zt.set(E,a)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(L?t._startAt.revert(ht):t._startAt.render(-1,!0)),t._zTime=e,y){if(!e)return}else _initTween(t._startAt,X,X);for(t._pt=t._ptCache=0,T=C&&w(T)||T&&!C,n=0;n<E.length;n++){if(h=(o=E[n])._gsap||ea(E)[n]._gsap,t._ptLookup[n]=c={},dt[h.id]&&ct.length&&ma(),d=z===E?n:z.indexOf(o),l&&!1!==(f=new l).init(o,p||i,t,d,z)&&(t._pt=s=new _e(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=s}),f.priority&&(u=1)),!l||p)for(a in i)pt[a]&&(f=ac(a,i,t,d,o,z))?f.priority&&(u=1):c[a]=s=Qt.call(t,o,a,"get",i[a],d,z,0,m.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),R&&t._pt&&(Nt=t,I.killTweensOf(o,c,t.globalTime(e)),_=!t.parent,Nt=0),t._pt&&T&&(dt[h.id]=1)}u&&pe(t),t._onInit&&t._onInit(t)}t._onUpdate=b,t._initted=(!t._op||t._pt)&&!_,P&&e<=0&&F.render(U,!0,!0)},Kt=function _parseFuncOrString(t,e,i,n,a){return s(t)?t.call(e,i,n,a):r(t)&&~t.indexOf("random(")?ob(t):t},Jt=vt+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ht={};ha(Jt+",id,stagger,delay,duration,paused,scrollTrigger",function(t){return Ht[t]=1});var Zt=function(z){function Tween(e,r,i,n){var a;"number"==typeof r&&(i.duration=r,r=i,i=null);var s,o,u,h,l,f,c,d,p=(a=z.call(this,n?r:va(r))||this).vars,_=p.duration,m=p.delay,g=p.immediateRender,T=p.stagger,b=p.overwrite,x=p.keyframes,k=p.defaults,M=p.scrollTrigger,O=p.yoyoEase,P=r.parent||I,A=($(e)||Z(e)?t(e[0]):"length"in r)?[e]:Ot(e);if(a._targets=A.length?ea(A):R("GSAP target "+e+" not found. https://greensock.com",!q.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=b,x||T||y(_)||y(m)){if(r=a.vars,(s=a.timeline=new Xt({data:"nested",defaults:k||{},targets:P&&"nested"===P.data?P.vars.targets:A})).kill(),s.parent=s._dp=_assertThisInitialized(a),s._start=0,T||y(_)||y(m)){if(h=A.length,c=T&&eb(T),v(T))for(l in T)~Jt.indexOf(l)&&((d=d||{})[l]=T[l]);for(o=0;o<h;o++)(u=ua(r,Ht)).stagger=0,O&&(u.yoyoEase=O),d&&yt(u,d),f=A[o],u.duration=+Kt(_,_assertThisInitialized(a),o,f,A),u.delay=(+Kt(m,_assertThisInitialized(a),o,f,A)||0)-a._delay,!T&&1===h&&u.delay&&(a._delay=m=u.delay,a._start+=m,u.delay=0),s.to(f,u,c?c(o,f,A):0),s._ease=Bt.none;s.duration()?_=m=0:a.timeline=0}else if(x){va(qa(s.vars.defaults,{ease:"none"})),s._ease=jt(x.ease||r.ease||"none");var C,S,E,D=0;if($(x))x.forEach(function(t){return s.to(A,t,">")}),s.duration();else{for(l in u={},x)"ease"===l||"easeEach"===l||gc(l,x[l],u,x.easeEach);for(l in u)for(C=u[l].sort(function(t,e){return t.t-e.t}),o=D=0;o<C.length;o++)(E={ease:(S=C[o]).e,duration:(S.t-(o?C[o-1].t:0))/100*_})[l]=S.v,s.to(A,E,D),D+=E.duration;s.duration()<_&&s.to({},{duration:_-s.duration()})}}_||a.duration(_=s.duration())}else a.timeline=0;return!0!==b||B||(Nt=_assertThisInitialized(a),I.killTweensOf(A),Nt=0),Ka(P,_assertThisInitialized(a),i),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(g||!_&&!x&&a._start===ja(P._time)&&w(g)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==P.data)&&(a._tTime=-X,a.render(Math.max(0,-m)||0)),M&&La(_assertThisInitialized(a),M),a}_inheritsLoose(Tween,z);var e=Tween.prototype;return e.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,c=this._time,d=this._tDur,p=this._dur,_=t<0,m=d-X<t&&!_?d:t<X?0:t;if(p){if(m!==this._tTime||!t||r||!this._initted&&this._tTime||this._startAt&&this._zTime<0!=_){if(i=m,l=this.timeline,this._repeat){if(s=p+this._rDelay,this._repeat<-1&&_)return this.totalTime(100*s+t,e,r);if(i=ja(m%s),m===d?(a=this._repeat,i=p):((a=~~(m/s))&&a===m/s&&(i=p,a--),p<i&&(i=p)),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=Tt(this._tTime,s),i===c&&!r&&this._initted)return this._tTime=m,this;a!==o&&(l&&this._yEase&&Qb(l,u),!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(ja(s*a),!0).invalidate()._lock=0))}if(!this._initted){if(Ma(this,_?t:i,r,e,m))return this._tTime=0,this;if(c!==this._time)return this;if(p!==this._dur)return this.render(t,e,r)}if(this._tTime=m,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),i&&!c&&!e&&!a&&(At(this,"onStart"),this._tTime!==m))return this;for(n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-X:l._dur*l._ease(i/this._dur),e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(_&&Ca(this,t,0,r),At(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&At(this,"onRepeat"),m!==this._tDur&&m||this._tTime!==m||(_&&!this._onUpdate&&Ca(this,t,0,!0),!t&&p||!(m===this._tDur&&0<this._ts||!m&&this._ts<0)||za(this,1),e||_&&!c||!(m||c||u)||(At(this,m===d?"onComplete":"onReverseComplete",!0),!this._prom||m<d&&0<this.timeScale()||this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a,s,o=t.ratio,u=e<0||!e&&(!t._start&&function _parentPlayheadIsBeforeStart(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||_parentPlayheadIsBeforeStart(e))}(t)&&(t._initted||!bt(t))||(t._ts<0||t._dp._ts<0)&&!bt(t))?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&(l=kt(0,t._tDur,e),a=Tt(l,h),t._yoyo&&1&a&&(u=1-u),a!==Tt(t._tTime,h)&&(o=1-u,t.vars.repeatRefresh&&t._initted&&t.invalidate())),u!==o||L||i||t._zTime===X||!e&&t._zTime){if(!t._initted&&Ma(t,e,i,r,l))return;for(s=t._zTime,t._zTime=e||(r?X:0),r=r||e&&!s,t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,n=t._pt;n;)n.r(u,n.d),n=n._next;e<0&&Ca(t,e,0,!0),t._onUpdate&&!r&&At(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&At(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(u&&za(t,1),r||L||(At(t,u?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)}(this,t,e,r);return this},e.targets=function targets(){return this._targets},e.invalidate=function invalidate(t){return t&&this.vars.runBackwards||(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(t),z.prototype.invalidate.call(this,t)},e.resetTo=function resetTo(t,e,r,i){d||Rt.wake(),this._ts||this.play();var n,a=Math.min(this._dur,(this._dp._time-this._start)*this._ts);return this._initted||Gt(this,a),n=this._ease(a/this._dur),function _updatePropTweens(t,e,r,i,n,a,s){var o,u,h,l,f=(t._pt&&t._ptCache||(t._ptCache={}))[e];if(!f)for(f=t._ptCache[e]=[],h=t._ptLookup,l=t._targets.length;l--;){if((o=h[l][e])&&o.d&&o.d._pt)for(o=o.d._pt;o&&o.p!==e&&o.fp!==e;)o=o._next;if(!o)return Wt=1,t.vars[e]="+=0",Gt(t,s),Wt=0,1;f.push(o)}for(l=f.length;l--;)(o=(u=f[l])._pt||u).s=!i&&0!==i||n?o.s+(i||0)+a*o.c:i,o.c=r-o.s,u.e&&(u.e=ia(r)+Ya(u.e)),u.b&&(u.b=o.s+Ya(u.b))}(this,t,e,r,i,n,a)?this.resetTo(t,e,r,i):(Ia(this,0),this.parent||xa(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e))return this._lazy=this._pt=0,this.parent?tb(this):this;if(this.timeline){var i=this.timeline.totalDuration();return this.timeline.killTweensOf(t,e,Nt&&!0!==Nt.vars.overwrite)._first||tb(this),this.parent&&i!==this.timeline.totalDuration()&&Ra(this,this._dur*this.timeline._tDur/i,0,1),this}var n,a,s,o,u,h,l,f=this._targets,c=t?Ot(t):f,d=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(f,c))return"all"===e&&(this._pt=0),tb(this);for(n=this._op=this._op||[],"all"!==e&&(r(e)&&(u={},ha(e,function(t){return u[t]=1}),e=u),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?fa(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=yt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(f,e)),l=f.length;l--;)if(~c.indexOf(f[l]))for(u in a=d[l],"all"===e?(n[l]=e,o=a,s={}):(s=n[l]=n[l]||{},o=e),o)(h=a&&a[u])&&("kill"in h.d&&!0!==h.d.kill(u)||ya(this,h,"_pt"),delete a[u]),"all"!==s&&(s[u]=1);return this._initted&&!this._pt&&p&&tb(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return Va(1,arguments)},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return Va(2,arguments)},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return I.killTweensOf(t,e,r)},Tween}(Ut);qa(Zt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),ha("staggerTo,staggerFrom,staggerFromTo",function(r){Zt[r]=function(){var t=new Xt,e=Mt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function oc(t,e,r){return t.setAttribute(e,r)}function wc(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var $t=function _setterPlain(t,e,r){return t[e]=r},te=function _setterFunc(t,e,r){return t[e](r)},re=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},ne=function _getSetter(t,e){return s(t[e])?te:u(t[e])&&t.setAttribute?oc:$t},ae=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e6*(e.s+e.c*t))/1e6,e)},se=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ue=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},he=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},fe=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},ce=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?ya(this,i,"_pt"):i.dep||(e=1),i=r;return!e},pe=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},_e=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=wc,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||ae,this.d=s||this,this.set=o||$t,this.pr=u||0,(this._next=t)&&(t._prev=this)}ha(vt+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(t){return ft[t]=1}),ot.TweenMax=ot.TweenLite=Zt,ot.TimelineLite=ot.TimelineMax=Xt,I=new Xt({sortChildren:!1,defaults:V,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),q.stringFilter=Fb;function Ec(t){return(ye[t]||Te).map(function(t){return t()})}function Fc(){var t=Date.now(),o=[];2<t-Me&&(Ec("matchMediaInit"),ge.forEach(function(t){var e,r,i,n,a=t.queries,s=t.conditions;for(r in a)(e=h.matchMedia(a[r]).matches)&&(i=1),e!==s[r]&&(s[r]=e,n=1);n&&(t.revert(),i&&o.push(t))}),Ec("matchMediaRevert"),o.forEach(function(t){return t.onMatch(t)}),Me=t,Ec("matchMedia"))}var me,ge=[],ye={},Te=[],Me=0,Oe=0,Pe=((me=Context.prototype).add=function add(t,i,n){function Ew(){var t,e=l,r=a.selector;return e&&e!==a&&e.data.push(a),n&&(a.selector=cb(n)),l=a,t=i.apply(a,arguments),s(t)&&a._r.push(t),l=e,a.selector=r,a.isReverted=!1,t}s(t)&&(n=i,i=t,t=s);var a=this;return a.last=Ew,t===s?Ew(a):t?a[t]=Ew:Ew},me.ignore=function ignore(t){var e=l;l=null,t(this),l=e},me.getTweens=function getTweens(){var e=[];return this.data.forEach(function(t){return t instanceof Context?e.push.apply(e,t.getTweens()):t instanceof Zt&&!(t.parent&&"nested"===t.parent.data)&&e.push(t)}),e},me.clear=function clear(){this._r.length=this.data.length=0},me.kill=function kill(e,t){var r=this;if(e){var i=this.getTweens();this.data.forEach(function(t){"isFlip"===t.data&&(t.revert(),t.getChildren(!0,!0,!1).forEach(function(t){return i.splice(i.indexOf(t),1)}))}),i.map(function(t){return{g:t.globalTime(0),t:t}}).sort(function(t,e){return e.g-t.g||-1/0}).forEach(function(t){return t.t.revert(e)}),this.data.forEach(function(t){return!(t instanceof Zt)&&t.revert&&t.revert(e)}),this._r.forEach(function(t){return t(e,r)}),this.isReverted=!0}else this.data.forEach(function(t){return t.kill&&t.kill()});if(this.clear(),t)for(var n=ge.length;n--;)ge[n].id===this.id&&ge.splice(n,1)},me.revert=function revert(t){this.kill(t||{})},Context);function Context(t,e){this.selector=e&&cb(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Oe++,t&&this.add(t)}var Ae,Ce=((Ae=MatchMedia.prototype).add=function add(t,e,r){v(t)||(t={matches:t});var i,n,a,s=new Pe(0,r||this.scope),o=s.conditions={};for(n in l&&!s.selector&&(s.selector=l.selector),this.contexts.push(s),e=s.add("onMatch",e),s.queries=t)"all"===n?a=1:(i=h.matchMedia(t[n]))&&(ge.indexOf(s)<0&&ge.push(s),(o[n]=i.matches)&&(a=1),i.addListener?i.addListener(Fc):i.addEventListener("change",Fc));return a&&e(s),this},Ae.revert=function revert(t){this.kill(t||{})},Ae.kill=function kill(e){this.contexts.forEach(function(t){return t.kill(e,!0)})},MatchMedia);function MatchMedia(t){this.contexts=[],this.scope=t}var Se={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return wb(t)})},timeline:function timeline(t){return new Xt(t)},getTweensOf:function getTweensOf(t,e){return I.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,n){r(i)&&(i=Ot(i)[0]);var a=fa(i||{}).get,s=e?pa:oa;return"native"===e&&(e=""),i?t?s((pt[t]&&pt[t].get||a)(i,t,e,n)):function(t,e,r){return s((pt[t]&&pt[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=Ot(r)).length){var n=r.map(function(t){return Ee.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=pt[e],o=fa(r),u=o.harness&&(o.harness.aliases||{})[e]||e,h=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&he(1,c)}:o.set(r,u);return s?h:function(t){return h(r,u,i?t+i:t,o,1)}},quickTo:function quickTo(t,i,e){function Wx(t,e,r){return n.resetTo(i,t,e,r)}var r,n=Ee.to(t,yt(((r={})[i]="+=0.1",r.paused=!0,r),e||{}));return Wx.tween=n,Wx},isTweening:function isTweening(t){return 0<I.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=jt(t.ease,V.ease)),ta(V,t||{})},config:function config(t){return ta(q,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,r=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!pt[t]&&!ot[t]&&R(i+" effect requires "+t+" plugin.")}),_t[i]=function(t,e,r){return n(Ot(t),qa(e||{},a),r)},r&&(Xt.prototype[i]=function(t,e,r){return this.add(_t[i](t,v(e)?e:(r=e)&&{},this),r)})},registerEase:function registerEase(t,e){Bt[t]=jt(e)},parseEase:function parseEase(t,e){return arguments.length?jt(t,e):Bt},getById:function getById(t){return I.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Xt(t);for(n.smoothChildTiming=w(t.smoothChildTiming),I.remove(n),n._dp=0,n._time=n._tTime=I._time,r=I._first;r;)i=r._next,!e&&!r._dur&&r instanceof Zt&&r.vars.onComplete===r._targets[0]||Ka(n,r,r._start-r._delay),r=i;return Ka(I,n,0),n},context:function context(t,e){return t?new Pe(t,e):l},matchMedia:function matchMedia(t){return new Ce(t)},matchMediaRefresh:function matchMediaRefresh(){return ge.forEach(function(t){var e,r,i=t.conditions;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Fc()},addEventListener:function addEventListener(t,e){var r=ye[t]||(ye[t]=[]);~r.indexOf(e)||r.push(e)},removeEventListener:function removeEventListener(t,e){var r=ye[t],i=r&&r.indexOf(e);0<=i&&r.splice(i,1)},utils:{wrap:function wrap(e,t,r){var i=t-e;return $(e)?lb(e,wrap(0,e.length),t):Wa(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return $(e)?lb(e,wrapYoyo(0,e.length-1),t):Wa(r,function(t){return e+(i<(t=(n+(t-e)%n)%n||0)?n-t:t)})},distribute:eb,random:hb,snap:gb,normalize:function normalize(t,e,r){return Pt(t,e,0,1,r)},getUnit:Ya,clamp:function clamp(e,r,t){return Wa(t,function(t){return kt(e,r,t)})},splitColor:Ab,toArray:Ot,selector:cb,mapRange:Pt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ya(t))}},interpolate:function interpolate(e,i,t,n){var a=isNaN(e+i)?0:function(t){return(1-t)*e+t*i};if(!a){var s,o,u,h,l,f=r(e),c={};if(!0===t&&(n=1)&&(t=null),f)e={p:e},i={p:i};else if($(e)&&!$(i)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=i}else n||(e=yt($(e)?[]:{},e));if(!u){for(s in i)Qt.call(c,e,s,"get",i[s]);a=function func(t){return he(t,c)||(f?e.p:e)}}}return Wa(t,a)},shuffle:db},install:P,effects:_t,ticker:Rt,updateRoot:Xt.updateRoot,plugins:pt,globalTimeline:I,core:{PropTween:_e,globals:S,Tween:Zt,Timeline:Xt,Animation:Ut,getCache:fa,_removeLinkedListItem:ya,reverting:function reverting(){return L},context:function context(t){return t&&l&&(l.data.push(t),t._ctx=l),l},suppressOverwrites:function suppressOverwrites(t){return B=t}}};ha("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return Se[t]=Zt[t]}),Rt.add(Xt.updateRoot),c=Se.to({},{duration:0});function Jc(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function Lc(t,a){return{name:t,rawVars:1,init:function init(t,n,e){e._onInit=function(t){var e,i;if(r(n)&&(e={},ha(n,function(t){return e[t]=1}),n=e),a){for(i in e={},n)e[i]=a(n[i]);n=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=Jc(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,n)}}}}var Ee=Se.registerPlugin({name:"attr",init:function init(t,e,r,i,n){var a,s,o;for(a in this.tween=r,e)o=t.getAttribute(a)||"",(s=this.add(t,"setAttribute",(o||0)+"",e[a],i,n,0,0,a)).op=a,s.b=o,this._props.push(a)},render:function render(t,e){for(var r=e._pt;r;)L?r.set(r.t,r.p,r.b,r):r.r(t,r.d),r=r._next}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r],0,0,0,0,0,1)}},Lc("roundProps",fb),Lc("modifiers"),Lc("snap",gb))||Se;Zt.version=Xt.version=Ee.version="3.12.2",o=1,x()&&Ft();function vd(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function wd(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function xd(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function yd(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function zd(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Ad(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Bd(t,e,r){return t.style[e]=r}function Cd(t,e,r){return t.style.setProperty(e,r)}function Dd(t,e,r){return t._gsap[e]=r}function Ed(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Fd(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function Gd(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function Jd(t,e){var r=this,i=this.target,n=i.style;if(t in ar&&n){if(this.tfm=this.tfm||{},"transform"===t)return cr.transform.split(",").forEach(function(t){return Jd.call(r,t,e)});if(~(t=cr[t]||t).indexOf(",")?t.split(",").forEach(function(t){return r.tfm[t]=yr(i,t)}):this.tfm[t]=i._gsap.x?i._gsap[t]:yr(i,t),0<=this.props.indexOf(dr))return;i._gsap.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(pr,e,"")),t=dr}(n||e)&&this.props.push(t,e,n[t])}function Kd(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))}function Ld(){var t,e,r=this.props,i=this.target,n=i.style,a=i._gsap;for(t=0;t<r.length;t+=3)r[t+1]?i[r[t]]=r[t+2]:r[t+2]?n[r[t]]=r[t+2]:n.removeProperty("--"===r[t].substr(0,2)?r[t]:r[t].replace(hr,"-$1").toLowerCase());if(this.tfm){for(e in this.tfm)a[e]=this.tfm[e];a.svg&&(a.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),(t=Ie())&&t.isStart||n[dr]||(Kd(n),a.uncache=1)}}function Md(t,e){var r={target:t,props:[],revert:Ld,save:Jd};return t._gsap||Ee.core.getCache(t),e&&e.split(",").forEach(function(t){return r.save(t)}),r}function Od(t,e){var r=ze.createElementNS?ze.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ze.createElement(t);return r.style?r:ze.createElement(t)}function Pd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hr,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&Pd(t,mr(e)||e,1)||""}function Sd(){(function _windowExists(){return"undefined"!=typeof window})()&&window.document&&(De=window,ze=De.document,Re=ze.documentElement,Be=Od("div")||{style:{}},Od("div"),dr=mr(dr),pr=dr+"Origin",Be.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ye=!!mr("perspective"),Ie=Ee.core.reverting,Fe=1)}function Td(t){var e,r=Od("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(Re.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=Td}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),Re.removeChild(r),this.style.cssText=a,e}function Ud(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function Vd(e){var r;try{r=e.getBBox()}catch(t){r=Td.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===Td||(r=Td.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}}function Wd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!Vd(t))}function Xd(t,e){if(e){var r=t.style;e in ar&&e!==pr&&(e=dr),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(hr,"-$1").toLowerCase())):r.removeAttribute(e)}}function Yd(t,e,r,i,n,a){var s=new _e(t._pt,e,r,0,1,a?Ad:zd);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function _d(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=Be.style,f=lr.test(e),c="svg"===t.tagName.toLowerCase(),d=(c?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||gr[i]||gr[h]?u:("px"===h||p||(u=_d(t,e,r,"px")),o=t.getCTM&&Wd(t),!_&&"%"!==h||!ar[e]&&!~e.indexOf("adius")?(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ze&&a.appendChild||(a=ze.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Rt.time&&!s.uncache?ia(u/s.width*100):(!_&&"%"!==h||vr[Pd(a,"display")]||(l.position=Pd(t,"position")),a===t&&(l.position="static"),a.appendChild(Be),n=Be[d],a.removeChild(Be),l.position="absolute",f&&_&&((s=fa(a)).time=Rt.time,s.width=a[d]),ia(p?n*u/100:n&&u?100/n*u:0))):(n=o?t.getBBox()[f?"width":"height"]:t[d],ia(_?u/n*100:u/100*n)))}function be(t,e,r,i){if(!r||"none"===r){var n=mr(e,t,1),a=n&&Pd(t,n,1);a&&a!==r?(e=n,r=a):"borderColor"===e&&(r=Pd(t,"borderTopColor"))}var s,o,u,h,l,f,c,d,p,_,m,g=new _e(this._pt,t.style,e,0,1,ue),v=0,y=0;if(g.b=r,g.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=Pd(t,e)||i,t.style[e]=r),Fb(s=[r,i]),i=s[1],u=(r=s[0]).match(rt)||[],(i.match(rt)||[]).length){for(;o=rt.exec(i);)c=o[0],p=i.substring(v,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),c!==(f=u[y++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),"="===c.charAt(1)&&(c=ka(h,c)+m),d=parseFloat(c),_=c.substr((d+"").length),v=rt.lastIndex-_.length,_||(_=_||q.units[e]||m,v===i.length&&(i+=_,g.e+=_)),m!==_&&(h=_d(t,e,f,_)||0),g._pt={_next:g._pt,p:p||1===y?p:",",s:h,c:d-h,m:l&&l<4||"zIndex"===e?Math.round:0});g.c=v<i.length?i.substring(v,i.length):""}else g.r="display"===e&&"none"===i?Ad:zd;return nt.test(i)&&(g.e=0),this._pt=g}function de(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Tr[r]||r,e[1]=Tr[i]||i,e.join(" ")}function ee(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],ar[r]&&(i=1,r="transformOrigin"===r?pr:dr),Xd(a,r);i&&(Xd(a,dr),u&&(u.svg&&a.removeAttribute("transform"),kr(a,1),u.uncache=1,Kd(s)))}}function ie(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function je(t){var e=Pd(t,dr);return ie(e)?wr:e.substr(7).match(et).map(ia)}function ke(t,e){var r,i,n,a,s=t._gsap||fa(t),o=t.style,u=je(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?wr:u:(u!==wr||t.offsetParent||t===Re||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextElementSibling,Re.appendChild(t)),u=je(t),n?o.display=n:Xd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):Re.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function le(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||ke(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,d=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==wr&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=Vd(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-c,h.xOffset=d+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[pr]="0px 0px",a&&(Yd(a,h,"xOrigin",f,w),Yd(a,h,"yOrigin",c,x),Yd(a,h,"xOffset",d,h.xOffset),Yd(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function oe(t,e,r){var i=Ya(e);return ia(parseFloat(e)+parseFloat(_d(t,"x",r+"px",i)))+i}function ve(t,e,i,n,a){var s,o,u=360,h=r(a),l=parseFloat(a)*(h&&~a.indexOf("rad")?sr:1)-n,f=n+l+"deg";return h&&("short"===(s=a.split("_")[1])&&(l%=u)!==l%180&&(l+=l<0?u:-u),"cw"===s&&l<0?l=(l+36e9)%u-~~(l/u)*u:"ccw"===s&&0<l&&(l=(l-36e9)%u-~~(l/u)*u)),t._pt=o=new _e(t._pt,e,i,n,l,wd),o.e=f,o.u="deg",t._props.push(i),o}function we(t,e){for(var r in e)t[r]=e[r];return t}function xe(t,e,r){var i,n,a,s,o,u,h,l=we({},r._gsap),f=r.style;for(n in l.svg?(a=r.getAttribute("transform"),r.setAttribute("transform",""),f[dr]=e,i=kr(r,1),Xd(r,dr),r.setAttribute("transform",a)):(a=getComputedStyle(r)[dr],f[dr]=e,i=kr(r,1),f[dr]=a),ar)(a=l[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ya(a)!==(h=Ya(s))?_d(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new _e(t._pt,i,n,o,u-o,vd),t._pt.u=h||0,t._props.push(n));we(i,l)}var De,ze,Re,Fe,Be,Le,Ie,Ye,qe=Bt.Power0,Ve=Bt.Power1,Ue=Bt.Power2,Xe=Bt.Power3,Ne=Bt.Power4,We=Bt.Linear,Qe=Bt.Quad,Ge=Bt.Cubic,Ke=Bt.Quart,Je=Bt.Quint,He=Bt.Strong,Ze=Bt.Elastic,$e=Bt.Back,tr=Bt.SteppedEase,er=Bt.Bounce,rr=Bt.Sine,ir=Bt.Expo,nr=Bt.Circ,ar={},sr=180/Math.PI,or=Math.PI/180,ur=Math.atan2,hr=/([A-Z])/g,lr=/(left|right|width|margin|padding|x)/i,fr=/[\s,\(]\S/,cr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},dr="transform",pr=dr+"Origin",_r="O,Moz,ms,Ms,Webkit".split(","),mr=function _checkPropPrefix(t,e,r){var i=(e||Be).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(_r[n]+t in i););return n<0?null:(3===n?"ms":0<=n?_r[n]:"")+t},gr={deg:1,rad:1,turn:1},vr={grid:1,flex:1},yr=function _get(t,e,r,i){var n;return Fe||Sd(),e in cr&&"transform"!==e&&~(e=cr[e]).indexOf(",")&&(e=e.split(",")[0]),ar[e]&&"transform"!==e?(n=kr(t,i),n="transformOrigin"!==e?n[e]:n.svg?n.origin:Mr(Pd(t,pr))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=br[e]&&br[e](t,e,r)||Pd(t,e)||ga(t,e)||("opacity"===e?1:0)),r&&!~(n+"").trim().indexOf(" ")?_d(t,e,n,r)+r:n},Tr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},br={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new _e(t._pt,e,r,0,0,ee);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},wr=[1,0,0,1,0,0],xr={},kr=function _parseTransform(t,e){var r=t._gsap||new Vt(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w,x,k,M,O,P,A,C,S,E,D,z,R,F=t.style,B=r.scaleX<0,L="deg",I=getComputedStyle(t),Y=Pd(t,pr)||"0";return i=n=a=u=h=l=f=c=d=0,s=o=1,r.svg=!(!t.getCTM||!Wd(t)),I.translate&&("none"===I.translate&&"none"===I.scale&&"none"===I.rotate||(F[dr]=("none"!==I.translate?"translate3d("+(I.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+("none"!==I.rotate?"rotate("+I.rotate+") ":"")+("none"!==I.scale?"scale("+I.scale.split(" ").join(",")+") ":"")+("none"!==I[dr]?I[dr]:"")),F.scale=F.rotate=F.translate="none"),m=ke(t,r.svg),r.svg&&(O=r.uncache?(P=t.getBBox(),Y=r.xOrigin-P.x+"px "+(r.yOrigin-P.y)+"px",""):!e&&t.getAttribute("data-svg-origin"),le(t,O||Y,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==wr&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?ur(b,T)*sr:0,(f=w||x?ur(w,x)*sr+u:0)&&(o*=Math.abs(Math.cos(f*or))),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(R=m[6],D=m[7],C=m[8],S=m[9],E=m[10],z=m[11],i=m[12],n=m[13],a=m[14],h=(g=ur(R,E))*sr,g&&(O=k*(v=Math.cos(-g))+C*(y=Math.sin(-g)),P=M*v+S*y,A=R*v+E*y,C=k*-y+C*v,S=M*-y+S*v,E=R*-y+E*v,z=D*-y+z*v,k=O,M=P,R=A),l=(g=ur(-w,E))*sr,g&&(v=Math.cos(-g),z=x*(y=Math.sin(-g))+z*v,T=O=T*v-C*y,b=P=b*v-S*y,w=A=w*v-E*y),u=(g=ur(b,T))*sr,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),P=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=P),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=ia(Math.sqrt(T*T+b*b+w*w)),o=ia(Math.sqrt(M*M+R*R)),g=ur(k,M),f=2e-4<Math.abs(g)?g*sr:0,d=z?1/(z<0?-z:z):0),r.svg&&(O=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!ie(Pd(t,dr)),O&&t.setAttribute("transform",O))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),e=e||r.uncache,r.x=i-((r.xPercent=i&&(!e&&r.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)))?t.offsetWidth*r.xPercent/100:0)+"px",r.y=n-((r.yPercent=n&&(!e&&r.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)))?t.offsetHeight*r.yPercent/100:0)+"px",r.z=a+"px",r.scaleX=ia(s),r.scaleY=ia(o),r.rotation=ia(u)+L,r.rotationX=ia(h)+L,r.rotationY=ia(l)+L,r.skewX=f+L,r.skewY=c+L,r.transformPerspective=d+"px",(r.zOrigin=parseFloat(Y.split(" ")[2])||0)&&(F[pr]=Mr(Y)),r.xOffset=r.yOffset=0,r.force3D=q.force3D,r.renderTransform=r.svg?Er:Ye?Sr:Or,r.uncache=0,r},Mr=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},Or=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Sr(t,e)},Pr="0deg",Ar="0px",Cr=") ",Sr=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,d=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Pr||h!==Pr)){var b,w=parseFloat(h)*or,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*or,b=Math.cos(w),a=oe(g,a,x*b*-v),s=oe(g,s,-Math.sin(w)*-v),o=oe(g,o,k*b*-v+v)}_!==Ar&&(y+="perspective("+_+Cr),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===Ar&&s===Ar&&o===Ar||(y+=o!==Ar||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Cr),u!==Pr&&(y+="rotate("+u+Cr),h!==Pr&&(y+="rotateY("+h+Cr),l!==Pr&&(y+="rotateX("+l+Cr),f===Pr&&c===Pr||(y+="skew("+f+", "+c+Cr),1===d&&1===p||(y+="scale("+d+", "+p+Cr),g.style[dr]=y||"translate(0, 0)"},Er=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,d=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),d=parseFloat(d),(p=parseFloat(p))&&(d+=p=parseFloat(p),c+=p),c||d?(c*=or,d*=or,r=Math.cos(c)*_,i=Math.sin(c)*_,n=Math.sin(c-d)*-m,a=Math.cos(c-d)*m,d&&(p*=or,s=Math.tan(d-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=ia(r),i=ia(i),n=ia(n),a=ia(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=_d(g,"x",l,"px"),k=_d(g,"y",f,"px")),(v||y||T||b)&&(x=ia(x+v-(v*r+y*n)+T),k=ia(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=ia(x+u/100*s.width),k=ia(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[dr]=s)};ha("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});br[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return yr(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var Dr,zr,Rr,Fr={name:"css",register:Sd,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,i,n,a){var s,o,u,h,l,f,c,d,p,_,m,g,v,y,T,b,w=this._props,x=t.style,k=i.vars.startAt;for(c in Fe||Sd(),this.styles=this.styles||Md(t),b=this.styles.props,this.tween=i,e)if("autoRound"!==c&&(o=e[c],!pt[c]||!ac(c,e,i,n,t,a)))if(l=typeof o,f=br[c],"function"===l&&(l=typeof(o=o.call(i,n,t,a))),"string"===l&&~o.indexOf("random(")&&(o=ob(o)),f)f(this,t,c,o,i)&&(T=1);else if("--"===c.substr(0,2))s=(getComputedStyle(t).getPropertyValue(c)+"").trim(),o+="",Dt.lastIndex=0,Dt.test(s)||(d=Ya(s),p=Ya(o)),p?d!==p&&(s=_d(t,c,s,p)+p):d&&(o+=d),this.add(x,"setProperty",s,o,n,a,0,0,c),w.push(c),b.push(c,0,x[c]);else if("undefined"!==l){if(k&&c in k?(s="function"==typeof k[c]?k[c].call(i,n,t,a):k[c],r(s)&&~s.indexOf("random(")&&(s=ob(s)),Ya(s+"")||(s+=q.units[c]||Ya(yr(t,c))||""),"="===(s+"").charAt(1)&&(s=yr(t,c))):s=yr(t,c),h=parseFloat(s),(_="string"===l&&"="===o.charAt(1)&&o.substr(0,2))&&(o=o.substr(2)),u=parseFloat(o),c in cr&&("autoAlpha"===c&&(1===h&&"hidden"===yr(t,"visibility")&&u&&(h=0),b.push("visibility",0,x.visibility),Yd(this,x,"visibility",h?"inherit":"hidden",u?"inherit":"hidden",!u)),"scale"!==c&&"transform"!==c&&~(c=cr[c]).indexOf(",")&&(c=c.split(",")[0])),m=c in ar)if(this.styles.save(c),g||((v=t._gsap).renderTransform&&!e.parseTransform||kr(t,e.parseTransform),y=!1!==e.smoothOrigin&&v.smooth,(g=this._pt=new _e(this._pt,x,dr,0,1,v.renderTransform,v,0,-1)).dep=1),"scale"===c)this._pt=new _e(this._pt,v,"scaleY",v.scaleY,(_?ka(v.scaleY,_+u):u)-v.scaleY||0,vd),this._pt.u=0,w.push("scaleY",c),c+="X";else{if("transformOrigin"===c){b.push(pr,0,x[pr]),o=de(o),v.svg?le(t,o,0,y,0,this):((p=parseFloat(o.split(" ")[2])||0)!==v.zOrigin&&Yd(this,v,"zOrigin",v.zOrigin,p),Yd(this,x,c,Mr(s),Mr(o)));continue}if("svgOrigin"===c){le(t,o,1,y,0,this);continue}if(c in xr){ve(this,v,c,h,_?ka(h,_+o):o);continue}if("smoothOrigin"===c){Yd(this,v,"smooth",v.smooth,o);continue}if("force3D"===c){v[c]=o;continue}if("transform"===c){xe(this,o,t);continue}}else c in x||(c=mr(c)||c);if(m||(u||0===u)&&(h||0===h)&&!fr.test(o)&&c in x)u=u||0,(d=(s+"").substr((h+"").length))!==(p=Ya(o)||(c in q.units?q.units[c]:d))&&(h=_d(t,c,s,p)),this._pt=new _e(this._pt,m?v:x,c,h,(_?ka(h,_+u):u)-h,m||"px"!==p&&"zIndex"!==c||!1===e.autoRound?vd:yd),this._pt.u=p||0,d!==p&&"%"!==p&&(this._pt.b=s,this._pt.r=xd);else if(c in x)be.call(this,t,c,s,_?_+o:o);else if(c in t)this.add(t,c,s||t[c],_?_+o:o,n,a);else if("parseTransform"!==c){Q(c,o);continue}m||(c in x?b.push(c,0,x[c]):b.push(c,1,s||t[c])),w.push(c)}T&&pe(this)},render:function render(t,e){if(e.tween._time||!Ie())for(var r=e._pt;r;)r.r(t,r.d),r=r._next;else e.styles.revert()},get:yr,aliases:cr,getSetter:function getSetter(t,e,r){var i=cr[e];return i&&i.indexOf(",")<0&&(e=i),e in ar&&e!==pr&&(t._gsap.x||yr(t,"x"))?r&&Le===r?"scale"===e?Ed:Dd:(Le=r||{})&&("scale"===e?Fd:Gd):t.style&&!u(t.style[e])?Bd:~e.indexOf("-")?Cd:ne(t,e)},core:{_removeProperty:Xd,_getMatrix:ke}};Ee.utils.checkPrefix=mr,Ee.core.getStyleSaver=Md,Rr=ha((Dr="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(zr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){ar[t]=1}),ha(zr,function(t){q.units[t]="deg",xr[t]=1}),cr[Rr[13]]=Dr+","+zr,ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");cr[e[1]]=Rr[e[0]]}),ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){q.units[t]="px"}),Ee.registerPlugin(Fr);var Br=Ee.registerPlugin(Fr)||Ee,Lr=Br.core.Tween;e.Back=$e,e.Bounce=er,e.CSSPlugin=Fr,e.Circ=nr,e.Cubic=Ge,e.Elastic=Ze,e.Expo=ir,e.Linear=We,e.Power0=qe,e.Power1=Ve,e.Power2=Ue,e.Power3=Xe,e.Power4=Ne,e.Quad=Qe,e.Quart=Ke,e.Quint=Je,e.Sine=rr,e.SteppedEase=tr,e.Strong=He,e.TimelineLite=Xt,e.TimelineMax=Xt,e.TweenLite=Zt,e.TweenMax=Lr,e.default=Br,e.gsap=Br;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});
!function(){"use strict";var t=function(t){this.input=null,this.inputDisplay=null,this.slider=null,this.sliderWidth=0,this.sliderLeft=0,this.pointerWidth=0,this.pointerR=null,this.pointerL=null,this.activePointer=null,this.selected=null,this.scale=null,this.step=0,this.tipL=null,this.tipR=null,this.timeout=null,this.valRange=!1,this.values={start:null,end:null},this.conf={target:null,values:null,set:null,range:!1,width:null,scale:!0,labels:!0,tooltip:!0,step:null,disabled:!1,onChange:null},this.cls={container:"rs-container",background:"rs-bg",selected:"rs-selected",pointer:"rs-pointer",scale:"rs-scale",noscale:"rs-noscale",tip:"rs-tooltip"};for(var i in this.conf)t.hasOwnProperty(i)&&(this.conf[i]=t[i]);this.init()};t.prototype.init=function(){return"object"==typeof this.conf.target?this.input=this.conf.target:this.input=document.getElementById(this.conf.target.replace("#","")),this.input?(this.inputDisplay=getComputedStyle(this.input,null).display,this.input.style.display="none",this.valRange=!(this.conf.values instanceof Array),!this.valRange||this.conf.values.hasOwnProperty("min")&&this.conf.values.hasOwnProperty("max")?this.createSlider():console.log("Missing min or max value...")):console.log("Cannot find target element...")},t.prototype.createSlider=function(){return this.slider=i("div",this.cls.container),this.slider.innerHTML='<div class="rs-bg"></div>',this.selected=i("div",this.cls.selected),this.pointerL=i("div",this.cls.pointer,["dir","left"]),this.scale=i("div",this.cls.scale),this.conf.tooltip&&(this.tipL=i("div",this.cls.tip),this.tipR=i("div",this.cls.tip),this.pointerL.appendChild(this.tipL)),this.slider.appendChild(this.selected),this.slider.appendChild(this.scale),this.slider.appendChild(this.pointerL),this.conf.range&&(this.pointerR=i("div",this.cls.pointer,["dir","right"]),this.conf.tooltip&&this.pointerR.appendChild(this.tipR),this.slider.appendChild(this.pointerR)),this.input.parentNode.insertBefore(this.slider,this.input.nextSibling),this.conf.width&&(this.slider.style.width=parseInt(this.conf.width)+"px"),this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.pointerWidth=this.pointerL.clientWidth,this.conf.scale||this.slider.classList.add(this.cls.noscale),this.setInitialValues()},t.prototype.setInitialValues=function(){if(this.disabled(this.conf.disabled),this.valRange&&(this.conf.values=s(this.conf)),this.values.start=0,this.values.end=this.conf.range?this.conf.values.length-1:0,this.conf.set&&this.conf.set.length&&n(this.conf)){var t=this.conf.set;this.conf.range?(this.values.start=this.conf.values.indexOf(t[0]),this.values.end=this.conf.set[1]?this.conf.values.indexOf(t[1]):null):this.values.end=this.conf.values.indexOf(t[0])}return this.createScale()},t.prototype.createScale=function(t){this.step=this.sliderWidth/(this.conf.values.length-1);for(var e=0,s=this.conf.values.length;e<s;e++){var n=i("span"),l=i("ins");n.appendChild(l),this.scale.appendChild(n),n.style.width=e===s-1?0:this.step+"px",this.conf.labels?l.innerHTML=this.conf.values[e]:0!==e&&e!==s-1||(l.innerHTML=this.conf.values[e]),l.style.marginLeft=l.clientWidth/2*-1+"px"}return this.addEvents()},t.prototype.updateScale=function(){this.step=this.sliderWidth/(this.conf.values.length-1);for(var t=this.slider.querySelectorAll("span"),i=0,e=t.length;i<e;i++)t[i].style.width=this.step+"px";return this.setValues()},t.prototype.addEvents=function(){var t=this.slider.querySelectorAll("."+this.cls.pointer),i=this.slider.querySelectorAll("span");e(document,"mousemove touchmove",this.move.bind(this)),e(document,"mouseup touchend touchcancel",this.drop.bind(this));for(var s=0,n=t.length;s<n;s++)e(t[s],"mousedown touchstart",this.drag.bind(this));for(var s=0,n=i.length;s<n;s++)e(i[s],"click",this.onClickPiece.bind(this));return window.addEventListener("resize",this.onResize.bind(this)),this.setValues()},t.prototype.drag=function(t){if(t.preventDefault(),!this.conf.disabled){var i=t.target.getAttribute("data-dir");return"left"===i&&(this.activePointer=this.pointerL),"right"===i&&(this.activePointer=this.pointerR),this.slider.classList.add("sliding")}},t.prototype.move=function(t){if(this.activePointer&&!this.conf.disabled){var i=("touchmove"===t.type?t.touches[0].clientX:t.pageX)-this.sliderLeft-this.pointerWidth/2;return(i=Math.round(i/this.step))<=0&&(i=0),i>this.conf.values.length-1&&(i=this.conf.values.length-1),this.conf.range?(this.activePointer===this.pointerL&&(this.values.start=i),this.activePointer===this.pointerR&&(this.values.end=i)):this.values.end=i,this.setValues()}},t.prototype.drop=function(){this.activePointer=null},t.prototype.setValues=function(t,i){var e=this.conf.range?"start":"end";return t&&this.conf.values.indexOf(t)>-1&&(this.values[e]=this.conf.values.indexOf(t)),i&&this.conf.values.indexOf(i)>-1&&(this.values.end=this.conf.values.indexOf(i)),this.conf.range&&this.values.start>this.values.end&&(this.values.start=this.values.end),this.pointerL.style.left=this.values[e]*this.step-this.pointerWidth/2+"px",this.conf.range?(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.start],this.tipR.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.start]+","+this.conf.values[this.values.end],this.pointerR.style.left=this.values.end*this.step-this.pointerWidth/2+"px"):(this.conf.tooltip&&(this.tipL.innerHTML=this.conf.values[this.values.end]),this.input.value=this.conf.values[this.values.end]),this.values.end>this.conf.values.length-1&&(this.values.end=this.conf.values.length-1),this.values.start<0&&(this.values.start=0),this.selected.style.width=(this.values.end-this.values.start)*this.step+"px",this.selected.style.left=this.values.start*this.step+"px",this.onChange()},t.prototype.onClickPiece=function(t){if(!this.conf.disabled){var i=Math.round((t.clientX-this.sliderLeft)/this.step);return i>this.conf.values.length-1&&(i=this.conf.values.length-1),i<0&&(i=0),this.conf.range&&i-this.values.start<=this.values.end-i?this.values.start=i:this.values.end=i,this.slider.classList.remove("sliding"),this.setValues()}},t.prototype.onChange=function(){var t=this;this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(function(){if(t.conf.onChange&&"function"==typeof t.conf.onChange)return t.conf.onChange(t.input.value)},500)},t.prototype.onResize=function(){return this.sliderLeft=this.slider.getBoundingClientRect().left,this.sliderWidth=this.slider.clientWidth,this.updateScale()},t.prototype.disabled=function(t){this.conf.disabled=t,this.slider.classList[t?"add":"remove"]("disabled")},t.prototype.getValue=function(){return this.input.value},t.prototype.destroy=function(){this.input.style.display=this.inputDisplay,this.slider.remove()};var i=function(t,i,e){var s=document.createElement(t);return i&&(s.className=i),e&&2===e.length&&s.setAttribute("data-"+e[0],e[1]),s},e=function(t,i,e){for(var s=i.split(" "),n=0,l=s.length;n<l;n++)t.addEventListener(s[n],e)},s=function(t){var i=[],e=t.values.max-t.values.min;if(!t.step)return console.log("No step defined..."),[t.values.min,t.values.max];for(var s=0,n=e/t.step;s<n;s++)i.push(t.values.min+s*t.step);return i.indexOf(t.values.max)<0&&i.push(t.values.max),i},n=function(t){return!t.set||t.set.length<1?null:t.values.indexOf(t.set[0])<0?null:!t.range||!(t.set.length<2||t.values.indexOf(t.set[1])<0)||null};window.rSlider=t}();
/**
 * Swiper 8.2.6
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: June 29, 2022
 */

 (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Swiper = factory());
})(this, (function () { 'use strict';

    /**
     * SSR Window 4.0.2
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2021, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: December 13, 2021
     */

    /* eslint-disable no-param-reassign */
    function isObject$1(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }

    function extend$1(target, src) {
      if (target === void 0) {
        target = {};
      }

      if (src === void 0) {
        src = {};
      }

      Object.keys(src).forEach(key => {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject$1(src[key]) && isObject$1(target[key]) && Object.keys(src[key]).length > 0) {
          extend$1(target[key], src[key]);
        }
      });
    }

    const ssrDocument = {
      body: {},

      addEventListener() {},

      removeEventListener() {},

      activeElement: {
        blur() {},

        nodeName: ''
      },

      querySelector() {
        return null;
      },

      querySelectorAll() {
        return [];
      },

      getElementById() {
        return null;
      },

      createEvent() {
        return {
          initEvent() {}

        };
      },

      createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},

          setAttribute() {},

          getElementsByTagName() {
            return [];
          }

        };
      },

      createElementNS() {
        return {};
      },

      importNode() {
        return null;
      },

      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };

    function getDocument() {
      const doc = typeof document !== 'undefined' ? document : {};
      extend$1(doc, ssrDocument);
      return doc;
    }

    const ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState() {},

        pushState() {},

        go() {},

        back() {}

      },
      CustomEvent: function CustomEvent() {
        return this;
      },

      addEventListener() {},

      removeEventListener() {},

      getComputedStyle() {
        return {
          getPropertyValue() {
            return '';
          }

        };
      },

      Image() {},

      Date() {},

      screen: {},

      setTimeout() {},

      clearTimeout() {},

      matchMedia() {
        return {};
      },

      requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }

        return setTimeout(callback, 0);
      },

      cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }

        clearTimeout(id);
      }

    };

    function getWindow() {
      const win = typeof window !== 'undefined' ? window : {};
      extend$1(win, ssrWindow);
      return win;
    }

    /**
     * Dom7 4.0.4
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2022, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: January 11, 2022
     */
    /* eslint-disable no-proto */

    function makeReactive(obj) {
      const proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get() {
          return proto;
        },

        set(value) {
          proto.__proto__ = value;
        }

      });
    }

    class Dom7 extends Array {
      constructor(items) {
        if (typeof items === 'number') {
          super(items);
        } else {
          super(...(items || []));
          makeReactive(this);
        }
      }

    }

    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }

      const res = [];
      arr.forEach(el => {
        if (Array.isArray(el)) {
          res.push(...arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }

    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }

    function arrayUnique(arr) {
      const uniqueArray = [];

      for (let i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }

      return uniqueArray;
    }


    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }

      const a = [];
      const res = context.querySelectorAll(selector);

      for (let i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }

      return a;
    }

    function $(selector, context) {
      const window = getWindow();
      const document = getDocument();
      let arr = [];

      if (!context && selector instanceof Dom7) {
        return selector;
      }

      if (!selector) {
        return new Dom7(arr);
      }

      if (typeof selector === 'string') {
        const html = selector.trim();

        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          let toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          const tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;

          for (let i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);

      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }

      return new Dom7(arrayUnique(arr));
    }

    $.fn = Dom7.prototype; // eslint-disable-next-line

    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.add(...classNames);
      });
      return this;
    }

    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        el.classList.remove(...classNames);
      });
      return this;
    }

    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      this.forEach(el => {
        classNames.forEach(className => {
          el.classList.toggle(className);
        });
      });
    }

    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }

      const classNames = arrayFlat(classes.map(c => c.split(' ')));
      return arrayFilter(this, el => {
        return classNames.filter(className => el.classList.contains(className)).length > 0;
      }).length > 0;
    }

    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs


      for (let i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (const attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    }

    function removeAttr(attr) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function transform(transform) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }

      return this;
    }

    function transition$1(duration) {
      for (let i = 0; i < this.length; i += 1) {
        this[i].style.transitionDuration = typeof duration !== 'string' ? `${duration}ms` : duration;
      }

      return this;
    }

    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;

      function handleLiveEvent(e) {
        const target = e.target;
        if (!target) return;
        const eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          const parents = $(target).parents(); // eslint-disable-line

          for (let k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) listener.apply(parents[k], eventData);
          }
        }
      }

      function handleEvent(e) {
        const eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      const events = eventType.split(' ');
      let j;

      for (let i = 0; i < this.length; i += 1) {
        const el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            const event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[event]) el.dom7LiveListeners[event] = [];
            el.dom7LiveListeners[event].push({
              listener,
              proxyListener: handleLiveEvent
            });
            el.addEventListener(event, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      let [eventType, targetSelector, listener, capture] = args;

      if (typeof args[1] === 'function') {
        [eventType, listener, capture] = args;
        targetSelector = undefined;
      }

      if (!capture) capture = false;
      const events = eventType.split(' ');

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];
          let handlers;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (let k = handlers.length - 1; k >= 0; k -= 1) {
              const handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function trigger() {
      const window = getWindow();

      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      const events = args[0].split(' ');
      const eventData = args[1];

      for (let i = 0; i < events.length; i += 1) {
        const event = events[i];

        for (let j = 0; j < this.length; j += 1) {
          const el = this[j];

          if (window.CustomEvent) {
            const evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter((data, dataIndex) => dataIndex > 0);
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }

      return this;
    }

    function transitionEnd$1(callback) {
      const dom = this;

      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }

      if (callback) {
        dom.on('transitionend', fireCallBack);
      }

      return this;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          const styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        const window = getWindow();
        const document = getDocument();
        const el = this[0];
        const box = el.getBoundingClientRect();
        const body = document.body;
        const clientTop = el.clientTop || body.clientTop || 0;
        const clientLeft = el.clientLeft || body.clientLeft || 0;
        const scrollTop = el === window ? window.scrollY : el.scrollTop;
        const scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function styles() {
      const window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }

    function css(props, value) {
      const window = getWindow();
      let i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (const prop in props) {
              this[i].style[prop] = props[prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    }

    function each(callback) {
      if (!callback) return this;
      this.forEach((el, index) => {
        callback.apply(el, [el, index]);
      });
      return this;
    }

    function filter(callback) {
      const result = arrayFilter(this, callback);
      return $(result);
    }

    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    }

    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }

      for (let i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      const window = getWindow();
      const document = getDocument();
      const el = this[0];
      let compareWith;
      let i;
      if (!el || typeof selector === 'undefined') return false;

      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      if (selector === document) {
        return el === document;
      }

      if (selector === window) {
        return el === window;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }

        return false;
      }

      return false;
    }

    function index() {
      let child = this[0];
      let i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }

        return i;
      }

      return undefined;
    }

    function eq(index) {
      if (typeof index === 'undefined') return this;
      const length = this.length;

      if (index > length - 1) {
        return $([]);
      }

      if (index < 0) {
        const returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }

      return $([this[index]]);
    }

    function append() {
      let newChild;
      const document = getDocument();

      for (let k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];

        for (let i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (let j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function prepend(newChild) {
      const document = getDocument();
      let i;
      let j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }

          return $([]);
        }

        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function nextAll(selector) {
      const nextEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.nextElementSibling) {
        const next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(next).is(selector)) nextEls.push(next);
        } else nextEls.push(next);

        el = next;
      }

      return $(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        const el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }

          return $([]);
        }

        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }

      return $([]);
    }

    function prevAll(selector) {
      const prevEls = [];
      let el = this[0];
      if (!el) return $([]);

      while (el.previousElementSibling) {
        const prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(prev).is(selector)) prevEls.push(prev);
        } else prevEls.push(prev);

        el = prev;
      }

      return $(prevEls);
    }

    function parent(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(parents);
    }

    function parents(selector) {
      const parents = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        let parent = this[i].parentNode; // eslint-disable-line

        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) parents.push(parent);
          } else {
            parents.push(parent);
          }

          parent = parent.parentNode;
        }
      }

      return $(parents);
    }

    function closest(selector) {
      let closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return $([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      const foundElements = [];

      for (let i = 0; i < this.length; i += 1) {
        const found = this[i].querySelectorAll(selector);

        for (let j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return $(foundElements);
    }

    function children(selector) {
      const children = []; // eslint-disable-line

      for (let i = 0; i < this.length; i += 1) {
        const childNodes = this[i].children;

        for (let j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return $(children);
    }

    function remove() {
      for (let i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }

      return this;
    }

    const Methods = {
      addClass,
      removeClass,
      hasClass,
      toggleClass,
      attr,
      removeAttr,
      transform,
      transition: transition$1,
      on,
      off,
      trigger,
      transitionEnd: transitionEnd$1,
      outerWidth,
      outerHeight,
      styles,
      offset,
      css,
      each,
      html,
      text,
      is,
      index,
      eq,
      append,
      prepend,
      next,
      nextAll,
      prev,
      prevAll,
      parent,
      parents,
      closest,
      find,
      children,
      filter,
      remove
    };
    Object.keys(Methods).forEach(methodName => {
      Object.defineProperty($.fn, methodName, {
        value: Methods[methodName],
        writable: true
      });
    });

    function deleteProps(obj) {
      const object = obj;
      Object.keys(object).forEach(key => {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }

        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }

    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }

      return setTimeout(callback, delay);
    }

    function now() {
      return Date.now();
    }

    function getComputedStyle$1(el) {
      const window = getWindow();
      let style;

      if (window.getComputedStyle) {
        style = window.getComputedStyle(el, null);
      }

      if (!style && el.currentStyle) {
        style = el.currentStyle;
      }

      if (!style) {
        style = el.style;
      }

      return style;
    }

    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }

      const window = getWindow();
      let matrix;
      let curTransform;
      let transformMatrix;
      const curStyle = getComputedStyle$1(el);

      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;

        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(a => a.replace(',', '.')).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case


        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }

      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
        else curTransform = parseFloat(matrix[4]);
      }

      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
        else curTransform = parseFloat(matrix[5]);
      }

      return curTransform || 0;
    }

    function isObject(o) {
      return typeof o === 'object' && o !== null && o.constructor && Object.prototype.toString.call(o).slice(8, -1) === 'Object';
    }

    function isNode(node) {
      // eslint-disable-next-line
      if (typeof window !== 'undefined' && typeof window.HTMLElement !== 'undefined') {
        return node instanceof HTMLElement;
      }

      return node && (node.nodeType === 1 || node.nodeType === 11);
    }

    function extend() {
      const to = Object(arguments.length <= 0 ? undefined : arguments[0]);
      const noExtend = ['__proto__', 'constructor', 'prototype'];

      for (let i = 1; i < arguments.length; i += 1) {
        const nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];

        if (nextSource !== undefined && nextSource !== null && !isNode(nextSource)) {
          const keysArray = Object.keys(Object(nextSource)).filter(key => noExtend.indexOf(key) < 0);

          for (let nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            const nextKey = keysArray[nextIndex];
            const desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

            if (desc !== undefined && desc.enumerable) {
              if (isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else if (!isObject(to[nextKey]) && isObject(nextSource[nextKey])) {
                to[nextKey] = {};

                if (nextSource[nextKey].__swiper__) {
                  to[nextKey] = nextSource[nextKey];
                } else {
                  extend(to[nextKey], nextSource[nextKey]);
                }
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }

      return to;
    }

    function setCSSProperty(el, varName, varValue) {
      el.style.setProperty(varName, varValue);
    }

    function animateCSSModeScroll(_ref) {
      let {
        swiper,
        targetPosition,
        side
      } = _ref;
      const window = getWindow();
      const startPosition = -swiper.translate;
      let startTime = null;
      let time;
      const duration = swiper.params.speed;
      swiper.wrapperEl.style.scrollSnapType = 'none';
      window.cancelAnimationFrame(swiper.cssModeFrameID);
      const dir = targetPosition > startPosition ? 'next' : 'prev';

      const isOutOfBound = (current, target) => {
        return dir === 'next' && current >= target || dir === 'prev' && current <= target;
      };

      const animate = () => {
        time = new Date().getTime();

        if (startTime === null) {
          startTime = time;
        }

        const progress = Math.max(Math.min((time - startTime) / duration, 1), 0);
        const easeProgress = 0.5 - Math.cos(progress * Math.PI) / 2;
        let currentPosition = startPosition + easeProgress * (targetPosition - startPosition);

        if (isOutOfBound(currentPosition, targetPosition)) {
          currentPosition = targetPosition;
        }

        swiper.wrapperEl.scrollTo({
          [side]: currentPosition
        });

        if (isOutOfBound(currentPosition, targetPosition)) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.scrollSnapType = '';
          setTimeout(() => {
            swiper.wrapperEl.style.overflow = '';
            swiper.wrapperEl.scrollTo({
              [side]: currentPosition
            });
          });
          window.cancelAnimationFrame(swiper.cssModeFrameID);
          return;
        }

        swiper.cssModeFrameID = window.requestAnimationFrame(animate);
      };

      animate();
    }

    let support;

    function calcSupport() {
      const window = getWindow();
      const document = getDocument();
      return {
        smoothScroll: document.documentElement && 'scrollBehavior' in document.documentElement.style,
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        passiveListener: function checkPassiveListener() {
          let supportsPassive = false;

          try {
            const opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get() {
                supportsPassive = true;
              }

            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }

    function getSupport() {
      if (!support) {
        support = calcSupport();
      }

      return support;
    }

    let deviceCached;

    function calcDevice(_temp) {
      let {
        userAgent
      } = _temp === void 0 ? {} : _temp;
      const support = getSupport();
      const window = getWindow();
      const platform = window.navigator.platform;
      const ua = userAgent || window.navigator.userAgent;
      const device = {
        ios: false,
        android: false
      };
      const screenWidth = window.screen.width;
      const screenHeight = window.screen.height;
      const android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      let ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      const windows = platform === 'Win32';
      let macos = platform === 'MacIntel'; // iPadOs 13 fix

      const iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];

      if (!ipad && macos && support.touch && iPadScreens.indexOf(`${screenWidth}x${screenHeight}`) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android


      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object


      return device;
    }

    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }

      if (!deviceCached) {
        deviceCached = calcDevice(overrides);
      }

      return deviceCached;
    }

    let browser;

    function calcBrowser() {
      const window = getWindow();

      function isSafari() {
        const ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }

    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }

      return browser;
    }

    function Resize(_ref) {
      let {
        swiper,
        on,
        emit
      } = _ref;
      const window = getWindow();
      let observer = null;
      let animationFrame = null;

      const resizeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('beforeResize');
        emit('resize');
      };

      const createObserver = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        observer = new ResizeObserver(entries => {
          animationFrame = window.requestAnimationFrame(() => {
            const {
              width,
              height
            } = swiper;
            let newWidth = width;
            let newHeight = height;
            entries.forEach(_ref2 => {
              let {
                contentBoxSize,
                contentRect,
                target
              } = _ref2;
              if (target && target !== swiper.el) return;
              newWidth = contentRect ? contentRect.width : (contentBoxSize[0] || contentBoxSize).inlineSize;
              newHeight = contentRect ? contentRect.height : (contentBoxSize[0] || contentBoxSize).blockSize;
            });

            if (newWidth !== width || newHeight !== height) {
              resizeHandler();
            }
          });
        });
        observer.observe(swiper.el);
      };

      const removeObserver = () => {
        if (animationFrame) {
          window.cancelAnimationFrame(animationFrame);
        }

        if (observer && observer.unobserve && swiper.el) {
          observer.unobserve(swiper.el);
          observer = null;
        }
      };

      const orientationChangeHandler = () => {
        if (!swiper || swiper.destroyed || !swiper.initialized) return;
        emit('orientationchange');
      };

      on('init', () => {
        if (swiper.params.resizeObserver && typeof window.ResizeObserver !== 'undefined') {
          createObserver();
          return;
        }

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('orientationchange', orientationChangeHandler);
      });
      on('destroy', () => {
        removeObserver();
        window.removeEventListener('resize', resizeHandler);
        window.removeEventListener('orientationchange', orientationChangeHandler);
      });
    }

    function Observer(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const observers = [];
      const window = getWindow();

      const attach = function (target, options) {
        if (options === void 0) {
          options = {};
        }

        const ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        const observer = new ObserverFunc(mutations => {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            emit('observerUpdate', mutations[0]);
            return;
          }

          const observerUpdate = function observerUpdate() {
            emit('observerUpdate', mutations[0]);
          };

          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        observers.push(observer);
      };

      const init = () => {
        if (!swiper.params.observer) return;

        if (swiper.params.observeParents) {
          const containerParents = swiper.$el.parents();

          for (let i = 0; i < containerParents.length; i += 1) {
            attach(containerParents[i]);
          }
        } // Observe container


        attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      };

      const destroy = () => {
        observers.forEach(observer => {
          observer.disconnect();
        });
        observers.splice(0, observers.length);
      };

      extendParams({
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      });
      on('init', init);
      on('destroy', destroy);
    }

    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(event => {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },

      once(events, handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;

        function onceHandler() {
          self.off(events, onceHandler);

          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          handler.apply(self, args);
        }

        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },

      onAny(handler, priority) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (typeof handler !== 'function') return self;
        const method = priority ? 'unshift' : 'push';

        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }

        return self;
      },

      offAny(handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsAnyListeners) return self;
        const index = self.eventsAnyListeners.indexOf(handler);

        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }

        return self;
      },

      off(events, handler) {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(event => {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach((eventHandler, index) => {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },

      emit() {
        const self = this;
        if (!self.eventsListeners || self.destroyed) return self;
        if (!self.eventsListeners) return self;
        let events;
        let data;
        let context;

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }

        data.unshift(context);
        const eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(event => {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(eventHandler => {
              eventHandler.apply(context, [event, ...data]);
            });
          }

          if (self.eventsListeners && self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(eventHandler => {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }

    };

    function updateSize() {
      const swiper = this;
      let width;
      let height;
      const $el = swiper.$el;

      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper.params.height !== 'undefined' && swiper.params.height !== null) {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      Object.assign(swiper, {
        width,
        height,
        size: swiper.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      const swiper = this;

      function getDirectionLabel(property) {
        if (swiper.isHorizontal()) {
          return property;
        } // prettier-ignore


        return {
          'width': 'height',
          'margin-top': 'margin-left',
          'margin-bottom ': 'margin-right',
          'margin-left': 'margin-top',
          'margin-right': 'margin-bottom',
          'padding-left': 'padding-top',
          'padding-right': 'padding-bottom',
          'marginRight': 'marginBottom'
        }[property];
      }

      function getDirectionPropertyValue(node, label) {
        return parseFloat(node.getPropertyValue(getDirectionLabel(label)) || 0);
      }

      const params = swiper.params;
      const {
        $wrapperEl,
        size: swiperSize,
        rtlTranslate: rtl,
        wrongRTL
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      const previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      const slides = $wrapperEl.children(`.${swiper.params.slideClass}`);
      const slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      let snapGrid = [];
      const slidesGrid = [];
      const slidesSizesGrid = [];
      let offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      let offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      const previousSnapGridLength = swiper.snapGrid.length;
      const previousSlidesGridLength = swiper.slidesGrid.length;
      let spaceBetween = params.spaceBetween;
      let slidePosition = -offsetBefore;
      let prevSlideSize = 0;
      let index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper.virtualSize = -spaceBetween; // reset margins

      if (rtl) slides.css({
        marginLeft: '',
        marginBottom: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: '',
        marginTop: ''
      }); // reset cssMode offsets

      if (params.centeredSlides && params.cssMode) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', '');
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', '');
      }

      const gridEnabled = params.grid && params.grid.rows > 1 && swiper.grid;

      if (gridEnabled) {
        swiper.grid.initSlides(slidesLength);
      } // Calc slides


      let slideSize;
      const shouldResetSlideSize = params.slidesPerView === 'auto' && params.breakpoints && Object.keys(params.breakpoints).filter(key => {
        return typeof params.breakpoints[key].slidesPerView !== 'undefined';
      }).length > 0;

      for (let i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        const slide = slides.eq(i);

        if (gridEnabled) {
          swiper.grid.updateSlide(i, slide, slidesLength, getDirectionLabel);
        }

        if (slide.css('display') === 'none') continue; // eslint-disable-line

        if (params.slidesPerView === 'auto') {
          if (shouldResetSlideSize) {
            slides[i].style[getDirectionLabel('width')] = ``;
          }

          const slideStyles = getComputedStyle(slide[0]);
          const currentTransform = slide[0].style.transform;
          const currentWebKitTransform = slide[0].style.webkitTransform;

          if (currentTransform) {
            slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            const width = getDirectionPropertyValue(slideStyles, 'width');
            const paddingLeft = getDirectionPropertyValue(slideStyles, 'padding-left');
            const paddingRight = getDirectionPropertyValue(slideStyles, 'padding-right');
            const marginLeft = getDirectionPropertyValue(slideStyles, 'margin-left');
            const marginRight = getDirectionPropertyValue(slideStyles, 'margin-right');
            const boxSizing = slideStyles.getPropertyValue('box-sizing');

            if (boxSizing && boxSizing === 'border-box') {
              slideSize = width + marginLeft + marginRight;
            } else {
              const {
                clientWidth,
                offsetWidth
              } = slide[0];
              slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
            }
          }

          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);

          if (slides[i]) {
            slides[i].style[getDirectionLabel('width')] = `${slideSize}px`;
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: `${swiper.virtualSize + params.spaceBetween}px`
        });
      }

      if (params.setWrapperSize) {
        $wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper.virtualSize + params.spaceBetween}px`
        });
      }

      if (gridEnabled) {
        swiper.grid.updateWrapperSize(slideSize, snapGrid, getDirectionLabel);
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        const newSlidesGrid = [];

        for (let i = 0; i < snapGrid.length; i += 1) {
          let slidesGridItem = snapGrid[i];
          if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);

          if (snapGrid[i] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) snapGrid = [0];

      if (params.spaceBetween !== 0) {
        const key = swiper.isHorizontal() && rtl ? 'marginLeft' : getDirectionLabel('marginRight');
        slides.filter((_, slideIndex) => {
          if (!params.cssMode) return true;

          if (slideIndex === slides.length - 1) {
            return false;
          }

          return true;
        }).css({
          [key]: `${spaceBetween}px`
        });
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        const maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(snap => {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        let allSlidesSize = 0;
        slidesSizesGrid.forEach(slideSizeValue => {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;

        if (allSlidesSize < swiperSize) {
          const allSlidesOffset = (swiperSize - allSlidesSize) / 2;
          snapGrid.forEach((snap, snapIndex) => {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach((snap, snapIndex) => {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Object.assign(swiper, {
        slides,
        snapGrid,
        slidesGrid,
        slidesSizesGrid
      });

      if (params.centeredSlides && params.cssMode && !params.centeredSlidesBounds) {
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-before', `${-snapGrid[0]}px`);
        setCSSProperty(swiper.wrapperEl, '--swiper-centered-offset-after', `${swiper.size / 2 - slidesSizesGrid[slidesSizesGrid.length - 1] / 2}px`);
        const addToSnapGrid = -swiper.snapGrid[0];
        const addToSlidesGrid = -swiper.slidesGrid[0];
        swiper.snapGrid = swiper.snapGrid.map(v => v + addToSnapGrid);
        swiper.slidesGrid = swiper.slidesGrid.map(v => v + addToSlidesGrid);
      }

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress) {
        swiper.updateSlidesOffset();
      }

      if (!isVirtual && !params.cssMode && (params.effect === 'slide' || params.effect === 'fade')) {
        const backFaceHiddenClass = `${params.containerModifierClass}backface-hidden`;
        const hasClassBackfaceClassAdded = swiper.$el.hasClass(backFaceHiddenClass);

        if (slidesLength <= params.maxBackfaceHiddenSlides) {
          if (!hasClassBackfaceClassAdded) swiper.$el.addClass(backFaceHiddenClass);
        } else if (hasClassBackfaceClassAdded) {
          swiper.$el.removeClass(backFaceHiddenClass);
        }
      }
    }

    function updateAutoHeight(speed) {
      const swiper = this;
      const activeSlides = [];
      const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
      let newHeight = 0;
      let i;

      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      }

      const getSlideByIndex = index => {
        if (isVirtual) {
          return swiper.slides.filter(el => parseInt(el.getAttribute('data-swiper-slide-index'), 10) === index)[0];
        }

        return swiper.slides.eq(index)[0];
      }; // Find slides currently in view


      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          (swiper.visibleSlides || $([])).each(slide => {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            const index = swiper.activeIndex + i;
            if (index > swiper.slides.length && !isVirtual) break;
            activeSlides.push(getSlideByIndex(index));
          }
        }
      } else {
        activeSlides.push(getSlideByIndex(swiper.activeIndex));
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          const height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight || newHeight === 0) swiper.$wrapperEl.css('height', `${newHeight}px`);
    }

    function updateSlidesOffset() {
      const swiper = this;
      const slides = swiper.slides;

      for (let i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }

      const swiper = this;
      const params = swiper.params;
      const {
        slides,
        rtlTranslate: rtl,
        snapGrid
      } = swiper;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      let offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides

      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (let i = 0; i < slides.length; i += 1) {
        const slide = slides[i];
        let slideOffset = slide.swiperSlideOffset;

        if (params.cssMode && params.centeredSlides) {
          slideOffset -= slides[0].swiperSlideOffset;
        }

        const slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const originalSlideProgress = (offsetCenter - snapGrid[0] + (params.centeredSlides ? swiper.minTranslate() : 0) - slideOffset) / (slide.swiperSlideSize + params.spaceBetween);
        const slideBefore = -(offsetCenter - slideOffset);
        const slideAfter = slideBefore + swiper.slidesSizesGrid[i];
        const isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

        if (isVisible) {
          swiper.visibleSlides.push(slide);
          swiper.visibleSlidesIndexes.push(i);
          slides.eq(i).addClass(params.slideVisibleClass);
        }

        slide.progress = rtl ? -slideProgress : slideProgress;
        slide.originalProgress = rtl ? -originalSlideProgress : originalSlideProgress;
      }

      swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
      const swiper = this;

      if (typeof translate === 'undefined') {
        const multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }

      const params = swiper.params;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      let {
        progress,
        isBeginning,
        isEnd
      } = swiper;
      const wasBeginning = isBeginning;
      const wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      Object.assign(swiper, {
        progress,
        isBeginning,
        isEnd
      });
      if (params.watchSlidesProgress || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
      const swiper = this;
      const {
        slides,
        params,
        $wrapperEl,
        activeIndex,
        realIndex
      } = swiper;
      const isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(`${params.slideActiveClass} ${params.slideNextClass} ${params.slidePrevClass} ${params.slideDuplicateActiveClass} ${params.slideDuplicateNextClass} ${params.slideDuplicatePrevClass}`);
      let activeSlide;

      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find(`.${params.slideClass}[data-swiper-slide-index="${activeIndex}"]`);
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${realIndex}"]`).addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      let nextSlide = activeSlide.nextAll(`.${params.slideClass}`).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      let prevSlide = activeSlide.prevAll(`.${params.slideClass}`).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${nextSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children(`.${params.slideClass}:not(.${params.slideDuplicateClass})[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass}[data-swiper-slide-index="${prevSlide.attr('data-swiper-slide-index')}"]`).addClass(params.slideDuplicatePrevClass);
        }
      }

      swiper.emitSlidesClasses();
    }

    function updateActiveIndex(newActiveIndex) {
      const swiper = this;
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      const {
        slidesGrid,
        snapGrid,
        params,
        activeIndex: previousIndex,
        realIndex: previousRealIndex,
        snapIndex: previousSnapIndex
      } = swiper;
      let activeIndex = newActiveIndex;
      let snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        const skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }

        return;
      } // Get real index


      const realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Object.assign(swiper, {
        snapIndex,
        realIndex,
        previousIndex,
        activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }

      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      const swiper = this;
      const params = swiper.params;
      const slide = $(e).closest(`.${params.slideClass}`)[0];
      let slideFound = false;
      let slideIndex;

      if (slide) {
        for (let i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
            slideIndex = i;
            break;
          }
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;

        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = slideIndex;
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize,
      updateSlides,
      updateAutoHeight,
      updateSlidesOffset,
      updateSlidesProgress,
      updateProgress,
      updateSlidesClasses,
      updateActiveIndex,
      updateClickedSlide
    };

    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }

      const swiper = this;
      const {
        params,
        rtlTranslate: rtl,
        translate,
        $wrapperEl
      } = swiper;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      let currentTranslate = getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      const swiper = this;
      const {
        rtlTranslate: rtl,
        params,
        $wrapperEl,
        wrapperEl,
        progress
      } = swiper;
      let x = 0;
      let y = 0;
      const z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform(`translate3d(${x}px, ${y}px, ${z}px)`);
      }

      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (translateBounds === void 0) {
        translateBounds = true;
      }

      const swiper = this;
      const {
        params,
        wrapperEl
      } = swiper;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      const minTranslate = swiper.minTranslate();
      const maxTranslate = swiper.maxTranslate();
      let newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress

      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        const isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: -newTranslate,
              side: isH ? 'left' : 'top'
            });
            return true;
          }

          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: -newTranslate,
            behavior: 'smooth'
          });
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate,
      minTranslate,
      maxTranslate,
      translateTo
    };

    function setTransition(duration, byController) {
      const swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }

    function transitionEmit(_ref) {
      let {
        swiper,
        runCallbacks,
        direction,
        step
      } = _ref;
      const {
        activeIndex,
        previousIndex
      } = swiper;
      let dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }

      swiper.emit(`transition${step}`);

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit(`slideResetTransition${step}`);
          return;
        }

        swiper.emit(`slideChangeTransition${step}`);

        if (dir === 'next') {
          swiper.emit(`slideNextTransition${step}`);
        } else {
          swiper.emit(`slidePrevTransition${step}`);
        }
      }
    }

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        params
      } = swiper;
      if (params.cssMode) return;

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'Start'
      });
    }

    function transitionEnd(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        params
      } = swiper;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      transitionEmit({
        swiper,
        runCallbacks,
        direction,
        step: 'End'
      });
    }

    var transition = {
      setTransition,
      transitionStart,
      transitionEnd
    };

    function slideTo(index, speed, runCallbacks, internal, initial) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof index}] given.`);
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        const indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        const isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      const swiper = this;
      let slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      const {
        params,
        snapGrid,
        slidesGrid,
        previousIndex,
        activeIndex,
        rtlTranslate: rtl,
        wrapperEl,
        enabled
      } = swiper;

      if (swiper.animating && params.preventInteractionOnTransition || !enabled && !internal && !initial) {
        return false;
      }

      const skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      let snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      const translate = -snapGrid[snapIndex]; // Update progress

      swiper.updateProgress(translate); // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (let i = 0; i < slidesGrid.length; i += 1) {
          const normalizedTranslate = -Math.floor(translate * 100);
          const normalizedGrid = Math.floor(slidesGrid[i] * 100);
          const normalizedGridNext = Math.floor(slidesGrid[i + 1] * 100);

          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext - (normalizedGridNext - normalizedGrid) / 2) {
              slideIndex = i;
            } else if (normalizedTranslate >= normalizedGrid && normalizedTranslate < normalizedGridNext) {
              slideIndex = i + 1;
            }
          } else if (normalizedTranslate >= normalizedGrid) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }

        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }

      let direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index

      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        swiper.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        const isH = swiper.isHorizontal();
        const t = rtl ? translate : -translate;

        if (speed === 0) {
          const isVirtual = swiper.virtual && swiper.params.virtual.enabled;

          if (isVirtual) {
            swiper.wrapperEl.style.scrollSnapType = 'none';
            swiper._immediateVirtual = true;
          }

          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;

          if (isVirtual) {
            requestAnimationFrame(() => {
              swiper.wrapperEl.style.scrollSnapType = '';
              swiper._swiperImmediateVirtual = false;
            });
          }
        } else {
          if (!swiper.support.smoothScroll) {
            animateCSSModeScroll({
              swiper,
              targetPosition: t,
              side: isH ? 'left' : 'top'
            });
            return true;
          }

          wrapperEl.scrollTo({
            [isH ? 'left' : 'top']: t,
            behavior: 'smooth'
          });
        }

        return true;
      }

      swiper.setTransition(speed);
      swiper.setTranslate(translate);
      swiper.updateActiveIndex(slideIndex);
      swiper.updateSlidesClasses();
      swiper.emit('beforeTransitionStart', speed, internal);
      swiper.transitionStart(runCallbacks, direction);

      if (speed === 0) {
        swiper.transitionEnd(runCallbacks, direction);
      } else if (!swiper.animating) {
        swiper.animating = true;

        if (!swiper.onSlideToWrapperTransitionEnd) {
          swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
            if (!swiper || swiper.destroyed) return;
            if (e.target !== this) return;
            swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
            swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
            swiper.onSlideToWrapperTransitionEnd = null;
            delete swiper.onSlideToWrapperTransitionEnd;
            swiper.transitionEnd(runCallbacks, direction);
          };
        }

        swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
        swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
      }

      return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }

      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        const indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */

        const isValidNumber = isFinite(indexAsNumber);

        if (!isValidNumber) {
          throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${index}] given.`);
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.


        index = indexAsNumber;
      }

      const swiper = this;
      let newIndex = index;

      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        animating,
        enabled,
        params
      } = swiper;
      if (!enabled) return swiper;
      let perGroup = params.slidesPerGroup;

      if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
        perGroup = Math.max(swiper.slidesPerViewDynamic('current', true), 1);
      }

      const increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : perGroup;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      if (params.rewind && swiper.isEnd) {
        return swiper.slideTo(0, speed, runCallbacks, internal);
      }

      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      const {
        params,
        animating,
        snapGrid,
        slidesGrid,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return swiper;

      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      const translate = rtlTranslate ? swiper.translate : -swiper.translate;

      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }

      const normalizedTranslate = normalize(translate);
      const normalizedSnapGrid = snapGrid.map(val => normalize(val));
      let prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        let prevSnapIndex;
        snapGrid.forEach((snap, snapIndex) => {
          if (normalizedTranslate >= snap) {
            // prevSnap = snap;
            prevSnapIndex = snapIndex;
          }
        });

        if (typeof prevSnapIndex !== 'undefined') {
          prevSnap = snapGrid[prevSnapIndex > 0 ? prevSnapIndex - 1 : prevSnapIndex];
        }
      }

      let prevIndex = 0;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;

        if (params.slidesPerView === 'auto' && params.slidesPerGroup === 1 && params.slidesPerGroupAuto) {
          prevIndex = prevIndex - swiper.slidesPerViewDynamic('previous', true) + 1;
          prevIndex = Math.max(prevIndex, 0);
        }
      }

      if (params.rewind && swiper.isBeginning) {
        const lastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        return swiper.slideTo(lastIndex, speed, runCallbacks, internal);
      }

      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      const swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }

    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }

      if (runCallbacks === void 0) {
        runCallbacks = true;
      }

      if (threshold === void 0) {
        threshold = 0.5;
      }

      const swiper = this;
      let index = swiper.activeIndex;
      const skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      const snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      const translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        const currentSnap = swiper.snapGrid[snapIndex];
        const nextSnap = swiper.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        const prevSnap = swiper.snapGrid[snapIndex - 1];
        const currentSnap = swiper.snapGrid[snapIndex];

        if (translate - prevSnap <= (currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      const swiper = this;
      const {
        params,
        $wrapperEl
      } = swiper;
      const slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      let slideToIndex = swiper.clickedIndex;
      let realIndex;

      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
            nextTick(() => {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children(`.${params.slideClass}[data-swiper-slide-index="${realIndex}"]:not(.${params.slideDuplicateClass})`).eq(0).index();
          nextTick(() => {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo,
      slideToLoop,
      slideNext,
      slidePrev,
      slideReset,
      slideToClosest,
      slideToClickedSlide
    };

    function loopCreate() {
      const swiper = this;
      const document = getDocument();
      const {
        params,
        $wrapperEl
      } = swiper; // Remove duplicated slides

      const $selector = $wrapperEl.children().length > 0 ? $($wrapperEl.children()[0].parentNode) : $wrapperEl;
      $selector.children(`.${params.slideClass}.${params.slideDuplicateClass}`).remove();
      let slides = $selector.children(`.${params.slideClass}`);

      if (params.loopFillGroupWithBlank) {
        const blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (let i = 0; i < blankSlidesNum; i += 1) {
            const blankNode = $(document.createElement('div')).addClass(`${params.slideClass} ${params.slideBlankClass}`);
            $selector.append(blankNode);
          }

          slides = $selector.children(`.${params.slideClass}`);
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;

      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      const prependSlides = [];
      const appendSlides = [];
      slides.each((el, index) => {
        const slide = $(el);

        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }

        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }

        slide.attr('data-swiper-slide-index', index);
      });

      for (let i = 0; i < appendSlides.length; i += 1) {
        $selector.append($(appendSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (let i = prependSlides.length - 1; i >= 0; i -= 1) {
        $selector.prepend($(prependSlides[i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix() {
      const swiper = this;
      swiper.emit('beforeLoopFix');
      const {
        activeIndex,
        slides,
        loopedSlides,
        allowSlidePrev,
        allowSlideNext,
        snapGrid,
        rtlTranslate: rtl
      } = swiper;
      let newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      const snapTranslate = -snapGrid[activeIndex];
      const diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        const slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }

      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }

    function loopDestroy() {
      const swiper = this;
      const {
        $wrapperEl,
        params,
        slides
      } = swiper;
      $wrapperEl.children(`.${params.slideClass}.${params.slideDuplicateClass},.${params.slideClass}.${params.slideBlankClass}`).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate,
      loopFix,
      loopDestroy
    };

    function setGrabCursor(moving) {
      const swiper = this;
      if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      const el = swiper.params.touchEventsTarget === 'container' ? swiper.el : swiper.wrapperEl;
      el.style.cursor = 'move';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
      const swiper = this;

      if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }

      swiper[swiper.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'].style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor,
      unsetGrabCursor
    };

    function closestElement(selector, base) {
      if (base === void 0) {
        base = this;
      }

      function __closestFrom(el) {
        if (!el || el === getDocument() || el === getWindow()) return null;
        if (el.assignedSlot) el = el.assignedSlot;
        const found = el.closest(selector);

        if (!found && !el.getRootNode) {
          return null;
        }

        return found || __closestFrom(el.getRootNode().host);
      }

      return __closestFrom(base);
    }

    function onTouchStart(event) {
      const swiper = this;
      const document = getDocument();
      const window = getWindow();
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        enabled
      } = swiper;
      if (!enabled) return;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }

      if (!swiper.animating && params.cssMode && params.loop) {
        swiper.loopFix();
      }

      let e = event;
      if (e.originalEvent) e = e.originalEvent;
      let $targetEl = $(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }

      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root component

      const swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';

      if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
        $targetEl = $(event.path[0]);
      }

      const noSwipingSelector = params.noSwipingSelector ? params.noSwipingSelector : `.${params.noSwipingClass}`;
      const isTargetShadow = !!(e.target && e.target.shadowRoot); // use closestElement for shadow root element to get the actual closest for nested shadow root element

      if (params.noSwiping && (isTargetShadow ? closestElement(noSwipingSelector, $targetEl[0]) : $targetEl.closest(noSwipingSelector)[0])) {
        swiper.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      const startX = touches.currentX;
      const startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore

      const edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      const edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.innerWidth - edgeSwipeThreshold)) {
        if (edgeSwipeDetection === 'prevent') {
          event.preventDefault();
        } else {
          return;
        }
      }

      Object.assign(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;

      if (e.type !== 'touchstart') {
        let preventDefault = true;

        if ($targetEl.is(data.focusableElements)) {
          preventDefault = false;

          if ($targetEl[0].nodeName === 'SELECT') {
            data.isTouched = false;
          }
        }

        if (document.activeElement && $(document.activeElement).is(data.focusableElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }

        const shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

        if ((params.touchStartForcePreventDefault || shouldPreventDefault) && !$targetEl[0].isContentEditable) {
          e.preventDefault();
        }
      }

      if (swiper.params.freeMode && swiper.params.freeMode.enabled && swiper.freeMode && swiper.animating && !params.cssMode) {
        swiper.freeMode.onTouchStart();
      }

      swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
      const document = getDocument();
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        enabled
      } = swiper;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type !== 'touchmove') return;
      const targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      const pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      const pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper.allowTouchMove) {
        if (!$(e.target).is(data.focusableElements)) {
          swiper.allowClick = false;
        }

        if (data.isTouched) {
          Object.assign(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.focusableElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      const diffX = touches.currentX - touches.startX;
      const diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(diffX ** 2 + diffY ** 2) < swiper.params.threshold) return;

      if (typeof data.isScrolling === 'undefined') {
        let touchAngle;

        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper.allowClick = false;

      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop && !params.cssMode) {
          swiper.loopFix();
        }

        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);

        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }

        swiper.emit('sliderFirstMove', e);
      }

      swiper.emit('sliderMove', e);
      data.isMoved = true;
      let diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      let disableParentSwiper = true;
      let resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + (-swiper.minTranslate() + data.startTranslate + diff) ** resistanceRatio;
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - (swiper.maxTranslate() - data.startTranslate - diff) ** resistanceRatio;
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && !swiper.allowSlideNext) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) return; // Update active index in free mode

      if (params.freeMode && params.freeMode.enabled && swiper.freeMode || params.watchSlidesProgress) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeMode && params.freeMode.enabled && swiper.freeMode) {
        swiper.freeMode.onTouchMove();
      } // Update progress


      swiper.updateProgress(data.currentTranslate); // Update translate

      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      const swiper = this;
      const data = swiper.touchEventsData;
      const {
        params,
        touches,
        rtlTranslate: rtl,
        slidesGrid,
        enabled
      } = swiper;
      if (!enabled) return;
      let e = event;
      if (e.originalEvent) e = e.originalEvent;

      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff


      const touchEndTime = now();
      const timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper.allowClick) {
        const pathTree = e.path || e.composedPath && e.composedPath();
        swiper.updateClickedSlide(pathTree && pathTree[0] || e.target);
        swiper.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = now();
      nextTick(() => {
        if (!swiper.destroyed) swiper.allowClick = true;
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      let currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (swiper.params.freeMode && params.freeMode.enabled) {
        swiper.freeMode.onTouchEnd({
          currentPos
        });
        return;
      } // Find current slide


      let stopIndex = 0;
      let groupSize = swiper.slidesSizesGrid[0];

      for (let i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        const increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      }

      let rewindFirstIndex = null;
      let rewindLastIndex = null;

      if (params.rewind) {
        if (swiper.isBeginning) {
          rewindLastIndex = swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual ? swiper.virtual.slides.length - 1 : swiper.slides.length - 1;
        } else if (swiper.isEnd) {
          rewindFirstIndex = 0;
        }
      } // Find current slide size


      const ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      const increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(params.rewind && swiper.isEnd ? rewindFirstIndex : stopIndex + increment);else swiper.slideTo(stopIndex);
        }

        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) {
            swiper.slideTo(stopIndex + increment);
          } else if (rewindLastIndex !== null && ratio < 0 && Math.abs(ratio) > params.longSwipesRatio) {
            swiper.slideTo(rewindLastIndex);
          } else {
            swiper.slideTo(stopIndex);
          }
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        const isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(rewindFirstIndex !== null ? rewindFirstIndex : stopIndex + increment);
          }

          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(rewindLastIndex !== null ? rewindLastIndex : stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      const swiper = this;
      const {
        params,
        el
      } = swiper;
      if (el && el.offsetWidth === 0) return; // Breakpoints

      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks


      const {
        allowSlideNext,
        allowSlidePrev,
        snapGrid
      } = swiper; // Disable locks on resize

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize


      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick(e) {
      const swiper = this;
      if (!swiper.enabled) return;

      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();

        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      const swiper = this;
      const {
        wrapperEl,
        rtlTranslate,
        enabled
      } = swiper;
      if (!enabled) return;
      swiper.previousTranslate = swiper.translate;

      if (swiper.isHorizontal()) {
        swiper.translate = -wrapperEl.scrollLeft;
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line


      if (swiper.translate === 0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      let newProgress;
      const translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }

    let dummyEventAttached = false;

    function dummyEventListener() {}

    const events = (swiper, method) => {
      const document = getDocument();
      const {
        params,
        touchEvents,
        el,
        wrapperEl,
        device,
        support
      } = swiper;
      const capture = !!params.nested;
      const domMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';
      const swiperMethod = method; // Touch Events

      if (!support.touch) {
        el[domMethod](touchEvents.start, swiper.onTouchStart, false);
        document[domMethod](touchEvents.move, swiper.onTouchMove, capture);
        document[domMethod](touchEvents.end, swiper.onTouchEnd, false);
      } else {
        const passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        el[domMethod](touchEvents.start, swiper.onTouchStart, passiveListener);
        el[domMethod](touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
          passive: false,
          capture
        } : capture);
        el[domMethod](touchEvents.end, swiper.onTouchEnd, passiveListener);

        if (touchEvents.cancel) {
          el[domMethod](touchEvents.cancel, swiper.onTouchEnd, passiveListener);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el[domMethod]('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl[domMethod]('scroll', swiper.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper[swiperMethod](device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper[swiperMethod]('observerUpdate', onResize, true);
      }
    };

    function attachEvents() {
      const swiper = this;
      const document = getDocument();
      const {
        params,
        support
      } = swiper;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);

      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }

      swiper.onClick = onClick.bind(swiper);

      if (support.touch && !dummyEventAttached) {
        document.addEventListener('touchstart', dummyEventListener);
        dummyEventAttached = true;
      }

      events(swiper, 'on');
    }

    function detachEvents() {
      const swiper = this;
      events(swiper, 'off');
    }

    var events$1 = {
      attachEvents,
      detachEvents
    };

    const isGridEnabled = (swiper, params) => {
      return swiper.grid && params.grid && params.grid.rows > 1;
    };

    function setBreakpoint() {
      const swiper = this;
      const {
        activeIndex,
        initialized,
        loopedSlides = 0,
        params,
        $el
      } = swiper;
      const breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters

      const breakpoint = swiper.getBreakpoint(breakpoints, swiper.params.breakpointsBase, swiper.el);
      if (!breakpoint || swiper.currentBreakpoint === breakpoint) return;
      const breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
      const breakpointParams = breakpointOnlyParams || swiper.originalParams;
      const wasMultiRow = isGridEnabled(swiper, params);
      const isMultiRow = isGridEnabled(swiper, breakpointParams);
      const wasEnabled = params.enabled;

      if (wasMultiRow && !isMultiRow) {
        $el.removeClass(`${params.containerModifierClass}grid ${params.containerModifierClass}grid-column`);
        swiper.emitContainerClasses();
      } else if (!wasMultiRow && isMultiRow) {
        $el.addClass(`${params.containerModifierClass}grid`);

        if (breakpointParams.grid.fill && breakpointParams.grid.fill === 'column' || !breakpointParams.grid.fill && params.grid.fill === 'column') {
          $el.addClass(`${params.containerModifierClass}grid-column`);
        }

        swiper.emitContainerClasses();
      } // Toggle navigation, pagination, scrollbar


      ['navigation', 'pagination', 'scrollbar'].forEach(prop => {
        const wasModuleEnabled = params[prop] && params[prop].enabled;
        const isModuleEnabled = breakpointParams[prop] && breakpointParams[prop].enabled;

        if (wasModuleEnabled && !isModuleEnabled) {
          swiper[prop].disable();
        }

        if (!wasModuleEnabled && isModuleEnabled) {
          swiper[prop].enable();
        }
      });
      const directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
      const needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

      if (directionChanged && initialized) {
        swiper.changeDirection();
      }

      extend(swiper.params, breakpointParams);
      const isEnabled = swiper.params.enabled;
      Object.assign(swiper, {
        allowTouchMove: swiper.params.allowTouchMove,
        allowSlideNext: swiper.params.allowSlideNext,
        allowSlidePrev: swiper.params.allowSlidePrev
      });

      if (wasEnabled && !isEnabled) {
        swiper.disable();
      } else if (!wasEnabled && isEnabled) {
        swiper.enable();
      }

      swiper.currentBreakpoint = breakpoint;
      swiper.emit('_beforeBreakpoint', breakpointParams);

      if (needsReLoop && initialized) {
        swiper.loopDestroy();
        swiper.loopCreate();
        swiper.updateSlides();
        swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
      }

      swiper.emit('breakpoint', breakpointParams);
    }

    function getBreakpoint(breakpoints, base, containerEl) {
      if (base === void 0) {
        base = 'window';
      }

      if (!breakpoints || base === 'container' && !containerEl) return undefined;
      let breakpoint = false;
      const window = getWindow();
      const currentHeight = base === 'window' ? window.innerHeight : containerEl.clientHeight;
      const points = Object.keys(breakpoints).map(point => {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          const minRatio = parseFloat(point.substr(1));
          const value = currentHeight * minRatio;
          return {
            value,
            point
          };
        }

        return {
          value: point,
          point
        };
      });
      points.sort((a, b) => parseInt(a.value, 10) - parseInt(b.value, 10));

      for (let i = 0; i < points.length; i += 1) {
        const {
          point,
          value
        } = points[i];

        if (base === 'window') {
          if (window.matchMedia(`(min-width: ${value}px)`).matches) {
            breakpoint = point;
          }
        } else if (value <= containerEl.clientWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint,
      getBreakpoint
    };

    function prepareClasses(entries, prefix) {
      const resultClasses = [];
      entries.forEach(item => {
        if (typeof item === 'object') {
          Object.keys(item).forEach(classNames => {
            if (item[classNames]) {
              resultClasses.push(prefix + classNames);
            }
          });
        } else if (typeof item === 'string') {
          resultClasses.push(prefix + item);
        }
      });
      return resultClasses;
    }

    function addClasses() {
      const swiper = this;
      const {
        classNames,
        params,
        rtl,
        $el,
        device,
        support
      } = swiper; // prettier-ignore

      const suffixes = prepareClasses(['initialized', params.direction, {
        'pointer-events': !support.touch
      }, {
        'free-mode': swiper.params.freeMode && params.freeMode.enabled
      }, {
        'autoheight': params.autoHeight
      }, {
        'rtl': rtl
      }, {
        'grid': params.grid && params.grid.rows > 1
      }, {
        'grid-column': params.grid && params.grid.rows > 1 && params.grid.fill === 'column'
      }, {
        'android': device.android
      }, {
        'ios': device.ios
      }, {
        'css-mode': params.cssMode
      }, {
        'centered': params.cssMode && params.centeredSlides
      }, {
        'watch-progress': params.watchSlidesProgress
      }], params.containerModifierClass);
      classNames.push(...suffixes);
      $el.addClass([...classNames].join(' '));
      swiper.emitContainerClasses();
    }

    function removeClasses() {
      const swiper = this;
      const {
        $el,
        classNames
      } = swiper;
      $el.removeClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }

    var classes = {
      addClasses,
      removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      const window = getWindow();
      let image;

      function onReady() {
        if (callback) callback();
      }

      const isPicture = $(imageEl).parent('picture')[0];

      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages() {
      const swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');

      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;

        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }

      for (let i = 0; i < swiper.imagesToLoad.length; i += 1) {
        const imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }

    var images = {
      loadImage,
      preloadImages
    };

    function checkOverflow() {
      const swiper = this;
      const {
        isLocked: wasLocked,
        params
      } = swiper;
      const {
        slidesOffsetBefore
      } = params;

      if (slidesOffsetBefore) {
        const lastSlideIndex = swiper.slides.length - 1;
        const lastSlideRightEdge = swiper.slidesGrid[lastSlideIndex] + swiper.slidesSizesGrid[lastSlideIndex] + slidesOffsetBefore * 2;
        swiper.isLocked = swiper.size > lastSlideRightEdge;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      if (params.allowSlideNext === true) {
        swiper.allowSlideNext = !swiper.isLocked;
      }

      if (params.allowSlidePrev === true) {
        swiper.allowSlidePrev = !swiper.isLocked;
      }

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
      }

      if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
      }
    }

    var checkOverflow$1 = {
      checkOverflow
    };

    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'wrapper',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      resizeObserver: true,
      nested: false,
      createElements: false,
      enabled: true,
      focusableElements: 'input, select, option, textarea, button, video, label',
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      breakpointsBase: 'window',
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: false,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: true,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // rewind
      rewind: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      maxBackfaceHiddenSlides: 10,
      // NS
      containerModifierClass: 'swiper-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };

    function moduleExtendParams(params, allModulesParams) {
      return function extendParams(obj) {
        if (obj === void 0) {
          obj = {};
        }

        const moduleParamName = Object.keys(obj)[0];
        const moduleParams = obj[moduleParamName];

        if (typeof moduleParams !== 'object' || moduleParams === null) {
          extend(allModulesParams, obj);
          return;
        }

        if (['navigation', 'pagination', 'scrollbar'].indexOf(moduleParamName) >= 0 && params[moduleParamName] === true) {
          params[moduleParamName] = {
            auto: true
          };
        }

        if (!(moduleParamName in params && 'enabled' in moduleParams)) {
          extend(allModulesParams, obj);
          return;
        }

        if (params[moduleParamName] === true) {
          params[moduleParamName] = {
            enabled: true
          };
        }

        if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
          params[moduleParamName].enabled = true;
        }

        if (!params[moduleParamName]) params[moduleParamName] = {
          enabled: false
        };
        extend(allModulesParams, obj);
      };
    }

    /* eslint no-param-reassign: "off" */
    const prototypes = {
      eventsEmitter,
      update,
      translate,
      transition,
      slide,
      loop,
      grabCursor,
      events: events$1,
      breakpoints,
      checkOverflow: checkOverflow$1,
      classes,
      images
    };
    const extendedDefaults = {};

    class Swiper {
      constructor() {
        let el;
        let params;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        if (args.length === 1 && args[0].constructor && Object.prototype.toString.call(args[0]).slice(8, -1) === 'Object') {
          params = args[0];
        } else {
          [el, params] = args;
        }

        if (!params) params = {};
        params = extend({}, params);
        if (el && !params.el) params.el = el;

        if (params.el && $(params.el).length > 1) {
          const swipers = [];
          $(params.el).each(containerEl => {
            const newParams = extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        } // Swiper Instance


        const swiper = this;
        swiper.__swiper__ = true;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
        swiper.modules = [...swiper.__modules__];

        if (params.modules && Array.isArray(params.modules)) {
          swiper.modules.push(...params.modules);
        }

        const allModulesParams = {};
        swiper.modules.forEach(mod => {
          mod({
            swiper,
            extendParams: moduleExtendParams(params, allModulesParams),
            on: swiper.on.bind(swiper),
            once: swiper.once.bind(swiper),
            off: swiper.off.bind(swiper),
            emit: swiper.emit.bind(swiper)
          });
        }); // Extend defaults with modules params

        const swiperParams = extend({}, defaults, allModulesParams); // Extend defaults with passed params

        swiper.params = extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend({}, swiper.params);
        swiper.passedParams = extend({}, params); // add event listeners

        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(eventName => {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }

        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        } // Save Dom lib


        swiper.$ = $; // Extend Swiper

        Object.assign(swiper, {
          enabled: swiper.params.enabled,
          el,
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],

          // isDirection
          isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },

          isVertical() {
            return swiper.params.direction === 'vertical';
          },

          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            const touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            const desktop = ['pointerdown', 'pointermove', 'pointerup'];
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            focusableElements: swiper.params.focusableElements,
            // Last click time
            lastClickTime: now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        });
        swiper.emit('_swiper'); // Init

        if (swiper.params.init) {
          swiper.init();
        } // Return app instance


        return swiper;
      }

      enable() {
        const swiper = this;
        if (swiper.enabled) return;
        swiper.enabled = true;

        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        swiper.emit('enable');
      }

      disable() {
        const swiper = this;
        if (!swiper.enabled) return;
        swiper.enabled = false;

        if (swiper.params.grabCursor) {
          swiper.unsetGrabCursor();
        }

        swiper.emit('disable');
      }

      setProgress(progress, speed) {
        const swiper = this;
        progress = Math.min(Math.max(progress, 0), 1);
        const min = swiper.minTranslate();
        const max = swiper.maxTranslate();
        const current = (max - min) * progress + min;
        swiper.translateTo(current, typeof speed === 'undefined' ? 0 : speed);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      emitContainerClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const cls = swiper.el.className.split(' ').filter(className => {
          return className.indexOf('swiper') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', cls.join(' '));
      }

      getSlideClasses(slideEl) {
        const swiper = this;
        if (swiper.destroyed) return '';
        return slideEl.className.split(' ').filter(className => {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      }

      emitSlidesClasses() {
        const swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        const updates = [];
        swiper.slides.each(slideEl => {
          const classNames = swiper.getSlideClasses(slideEl);
          updates.push({
            slideEl,
            classNames
          });
          swiper.emit('_slideClass', slideEl, classNames);
        });
        swiper.emit('_slideClasses', updates);
      }

      slidesPerViewDynamic(view, exact) {
        if (view === void 0) {
          view = 'current';
        }

        if (exact === void 0) {
          exact = false;
        }

        const swiper = this;
        const {
          params,
          slides,
          slidesGrid,
          slidesSizesGrid,
          size: swiperSize,
          activeIndex
        } = swiper;
        let spv = 1;

        if (params.centeredSlides) {
          let slideSize = slides[activeIndex].swiperSlideSize;
          let breakLoop;

          for (let i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }

          for (let i = activeIndex - 1; i >= 0; i -= 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          // eslint-disable-next-line
          if (view === 'current') {
            for (let i = activeIndex + 1; i < slides.length; i += 1) {
              const slideInView = exact ? slidesGrid[i] + slidesSizesGrid[i] - slidesGrid[activeIndex] < swiperSize : slidesGrid[i] - slidesGrid[activeIndex] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          } else {
            // previous
            for (let i = activeIndex - 1; i >= 0; i -= 1) {
              const slideInView = slidesGrid[activeIndex] - slidesGrid[i] < swiperSize;

              if (slideInView) {
                spv += 1;
              }
            }
          }
        }

        return spv;
      }

      update() {
        const swiper = this;
        if (!swiper || swiper.destroyed) return;
        const {
          snapGrid,
          params
        } = swiper; // Breakpoints

        if (params.breakpoints) {
          swiper.setBreakpoint();
        }

        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          const translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          const newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        let translated;

        if (swiper.params.freeMode && swiper.params.freeMode.enabled) {
          setTranslate();

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }

        swiper.emit('update');
      }

      changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }

        const swiper = this;
        const currentDirection = swiper.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }

        swiper.$el.removeClass(`${swiper.params.containerModifierClass}${currentDirection}`).addClass(`${swiper.params.containerModifierClass}${newDirection}`);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(slideEl => {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      }

      changeLanguageDirection(direction) {
        const swiper = this;
        if (swiper.rtl && direction === 'rtl' || !swiper.rtl && direction === 'ltr') return;
        swiper.rtl = direction === 'rtl';
        swiper.rtlTranslate = swiper.params.direction === 'horizontal' && swiper.rtl;

        if (swiper.rtl) {
          swiper.$el.addClass(`${swiper.params.containerModifierClass}rtl`);
          swiper.el.dir = 'rtl';
        } else {
          swiper.$el.removeClass(`${swiper.params.containerModifierClass}rtl`);
          swiper.el.dir = 'ltr';
        }

        swiper.update();
      }

      mount(el) {
        const swiper = this;
        if (swiper.mounted) return true; // Find el

        const $el = $(el || swiper.params.el);
        el = $el[0];

        if (!el) {
          return false;
        }

        el.swiper = swiper;

        const getWrapperSelector = () => {
          return `.${(swiper.params.wrapperClass || '').trim().split(' ').join('.')}`;
        };

        const getWrapper = () => {
          if (el && el.shadowRoot && el.shadowRoot.querySelector) {
            const res = $(el.shadowRoot.querySelector(getWrapperSelector())); // Children needs to return slot items

            res.children = options => $el.children(options);

            return res;
          }

          if (!$el.children) {
            return $($el).children(getWrapperSelector());
          }

          return $el.children(getWrapperSelector());
        }; // Find Wrapper


        let $wrapperEl = getWrapper();

        if ($wrapperEl.length === 0 && swiper.params.createElements) {
          const document = getDocument();
          const wrapper = document.createElement('div');
          $wrapperEl = $(wrapper);
          wrapper.className = swiper.params.wrapperClass;
          $el.append(wrapper);
          $el.children(`.${swiper.params.slideClass}`).each(slideEl => {
            $wrapperEl.append(slideEl);
          });
        }

        Object.assign(swiper, {
          $el,
          el,
          $wrapperEl,
          wrapperEl: $wrapperEl[0],
          mounted: true,
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box'
        });
        return true;
      }

      init(el) {
        const swiper = this;
        if (swiper.initialized) return swiper;
        const mounted = swiper.mount(el);
        if (mounted === false) return swiper;
        swiper.emit('beforeInit'); // Set breakpoint

        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes


        swiper.addClasses(); // Create loop

        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size


        swiper.updateSize(); // Update slides

        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor


        if (swiper.params.grabCursor && swiper.enabled) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide


        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit, false, true);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit, false, true);
        } // Attach events


        swiper.attachEvents(); // Init Flag

        swiper.initialized = true; // Emit

        swiper.emit('init');
        swiper.emit('afterInit');
        return swiper;
      }

      destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }

        if (cleanStyles === void 0) {
          cleanStyles = true;
        }

        const swiper = this;
        const {
          params,
          $el,
          $wrapperEl,
          slides
        } = swiper;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy'); // Init Flag

        swiper.initialized = false; // Detach events

        swiper.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy'); // Detach emitter events

        Object.keys(swiper.eventsListeners).forEach(eventName => {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }

        swiper.destroyed = true;
        return null;
      }

      static extendDefaults(newDefaults) {
        extend(extendedDefaults, newDefaults);
      }

      static get extendedDefaults() {
        return extendedDefaults;
      }

      static get defaults() {
        return defaults;
      }

      static installModule(mod) {
        if (!Swiper.prototype.__modules__) Swiper.prototype.__modules__ = [];
        const modules = Swiper.prototype.__modules__;

        if (typeof mod === 'function' && modules.indexOf(mod) < 0) {
          modules.push(mod);
        }
      }

      static use(module) {
        if (Array.isArray(module)) {
          module.forEach(m => Swiper.installModule(m));
          return Swiper;
        }

        Swiper.installModule(module);
        return Swiper;
      }

    }

    Object.keys(prototypes).forEach(prototypeGroup => {
      Object.keys(prototypes[prototypeGroup]).forEach(protoMethod => {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer]);

    function Virtual(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      });
      let cssModeTimeout;
      swiper.virtual = {
        cache: {},
        from: undefined,
        to: undefined,
        slides: [],
        offset: 0,
        slidesGrid: []
      };

      function renderSlide(slide, index) {
        const params = swiper.params.virtual;

        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }

        const $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $(`<div class="${swiper.params.slideClass}" data-swiper-slide-index="${index}">${slide}</div>`);
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
      }

      function update(force) {
        const {
          slidesPerView,
          slidesPerGroup,
          centeredSlides
        } = swiper.params;
        const {
          addSlidesBefore,
          addSlidesAfter
        } = swiper.params.virtual;
        const {
          from: previousFrom,
          to: previousTo,
          slides,
          slidesGrid: previousSlidesGrid,
          offset: previousOffset
        } = swiper.virtual;

        if (!swiper.params.cssMode) {
          swiper.updateActiveIndex();
        }

        const activeIndex = swiper.activeIndex || 0;
        let offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        let slidesAfter;
        let slidesBefore;

        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = slidesPerGroup + addSlidesBefore;
        }

        const from = Math.max((activeIndex || 0) - slidesBefore, 0);
        const to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        const offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Object.assign(swiper.virtual, {
          from,
          to,
          offset,
          slidesGrid: swiper.slidesGrid
        });

        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }

          emit('virtualUpdate');
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, `${offset}px`);
          }

          swiper.updateProgress();
          emit('virtualUpdate');
          return;
        }

        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset,
            from,
            to,
            slides: function getSlides() {
              const slidesToRender = [];

              for (let i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }

              return slidesToRender;
            }()
          });

          if (swiper.params.virtual.renderExternalUpdate) {
            onRendered();
          } else {
            emit('virtualUpdate');
          }

          return;
        }

        const prependIndexes = [];
        const appendIndexes = [];

        if (force) {
          swiper.$wrapperEl.find(`.${swiper.params.slideClass}`).remove();
        } else {
          for (let i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find(`.${swiper.params.slideClass}[data-swiper-slide-index="${i}"]`).remove();
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          if (i >= from && i <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(i);
            } else {
              if (i > previousTo) appendIndexes.push(i);
              if (i < previousFrom) prependIndexes.push(i);
            }
          }
        }

        appendIndexes.forEach(index => {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort((a, b) => b - a).forEach(index => {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, `${offset}px`);
        onRendered();
      }

      function appendSlide(slides) {
        if (typeof slides === 'object' && 'length' in slides) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }

        update(true);
      }

      function prependSlide(slides) {
        const activeIndex = swiper.activeIndex;
        let newActiveIndex = activeIndex + 1;
        let numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (let i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }

          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }

        if (swiper.params.virtual.cache) {
          const cache = swiper.virtual.cache;
          const newCache = {};
          Object.keys(cache).forEach(cachedIndex => {
            const $cachedEl = cache[cachedIndex];
            const cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + numberOfNewSlides);
            }

            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }

        update(true);
        swiper.slideTo(newActiveIndex, 0);
      }

      function removeSlide(slidesIndexes) {
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        let activeIndex = swiper.activeIndex;

        if (Array.isArray(slidesIndexes)) {
          for (let i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);

            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }

            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }

          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }

        update(true);
        swiper.slideTo(activeIndex, 0);
      }

      function removeAllSlides() {
        swiper.virtual.slides = [];

        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }

        update(true);
        swiper.slideTo(0, 0);
      }

      on('beforeInit', () => {
        if (!swiper.params.virtual.enabled) return;
        swiper.virtual.slides = swiper.params.virtual.slides;
        swiper.classNames.push(`${swiper.params.containerModifierClass}virtual`);
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;

        if (!swiper.params.initialSlide) {
          update();
        }
      });
      on('setTranslate', () => {
        if (!swiper.params.virtual.enabled) return;

        if (swiper.params.cssMode && !swiper._immediateVirtual) {
          clearTimeout(cssModeTimeout);
          cssModeTimeout = setTimeout(() => {
            update();
          }, 100);
        } else {
          update();
        }
      });
      on('init update resize', () => {
        if (!swiper.params.virtual.enabled) return;

        if (swiper.params.cssMode) {
          setCSSProperty(swiper.wrapperEl, '--swiper-virtual-size', `${swiper.virtualSize}px`);
        }
      });
      Object.assign(swiper.virtual, {
        appendSlide,
        prependSlide,
        removeSlide,
        removeAllSlides,
        update
      });
    }

    /* eslint-disable consistent-return */
    function Keyboard(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      const window = getWindow();
      swiper.keyboard = {
        enabled: false
      };
      extendParams({
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      });

      function handle(event) {
        if (!swiper.enabled) return;
        const {
          rtlTranslate: rtl
        } = swiper;
        let e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        const kc = e.keyCode || e.charCode;
        const pageUpDown = swiper.params.keyboard.pageUpDown;
        const isPageUp = pageUpDown && kc === 33;
        const isPageDown = pageUpDown && kc === 34;
        const isArrowLeft = kc === 37;
        const isArrowRight = kc === 39;
        const isArrowUp = kc === 38;
        const isArrowDown = kc === 40; // Directions locks

        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }

        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }

        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }

        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          let inView = false; // Check that swiper should be inside of visible area of window

          if (swiper.$el.parents(`.${swiper.params.slideClass}`).length > 0 && swiper.$el.parents(`.${swiper.params.slideActiveClass}`).length === 0) {
            return undefined;
          }

          const $el = swiper.$el;
          const swiperWidth = $el[0].clientWidth;
          const swiperHeight = $el[0].clientHeight;
          const windowWidth = window.innerWidth;
          const windowHeight = window.innerHeight;
          const swiperOffset = swiper.$el.offset();
          if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
          const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiperWidth, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiperHeight], [swiperOffset.left + swiperWidth, swiperOffset.top + swiperHeight]];

          for (let i = 0; i < swiperCoord.length; i += 1) {
            const point = swiperCoord[i];

            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

              inView = true;
            }
          }

          if (!inView) return undefined;
        }

        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }

          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }

        emit('keyPress', kc);
        return undefined;
      }

      function enable() {
        if (swiper.keyboard.enabled) return;
        $(document).on('keydown', handle);
        swiper.keyboard.enabled = true;
      }

      function disable() {
        if (!swiper.keyboard.enabled) return;
        $(document).off('keydown', handle);
        swiper.keyboard.enabled = false;
      }

      on('init', () => {
        if (swiper.params.keyboard.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        if (swiper.keyboard.enabled) {
          disable();
        }
      });
      Object.assign(swiper.keyboard, {
        enable,
        disable
      });
    }

    /* eslint-disable consistent-return */
    function Mousewheel(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null
        }
      });
      swiper.mousewheel = {
        enabled: false
      };
      let timeout;
      let lastScrollTime = now();
      let lastEventBeforeSnap;
      const recentWheelEvents = [];

      function normalize(e) {
        // Reasonable defaults
        const PIXEL_STEP = 10;
        const LINE_HEIGHT = 40;
        const PAGE_HEIGHT = 800;
        let sX = 0;
        let sY = 0; // spinX, spinY

        let pX = 0;
        let pY = 0; // pixelX, pixelY
        // Legacy

        if ('detail' in e) {
          sY = e.detail;
        }

        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }

        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }

        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll


        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }

        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined


        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }

        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      }

      function handleMouseEnter() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = true;
      }

      function handleMouseLeave() {
        if (!swiper.enabled) return;
        swiper.mouseEntered = false;
      }

      function animateSlider(newEvent) {
        if (swiper.params.mousewheel.thresholdDelta && newEvent.delta < swiper.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }

        if (swiper.params.mousewheel.thresholdTime && now() - lastScrollTime < swiper.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        } // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).


        if (newEvent.delta >= 6 && now() - lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.


        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time


        lastScrollTime = new window.Date().getTime(); // Return false as a default

        return false;
      }

      function releaseScroll(newEvent) {
        const params = swiper.params.mousewheel;

        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }

        return false;
      }

      function handle(event) {
        let e = event;
        let disableParentSwiper = true;
        if (!swiper.enabled) return;
        const params = swiper.params.mousewheel;

        if (swiper.params.cssMode) {
          e.preventDefault();
        }

        let target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }

        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix

        let delta = 0;
        const rtlFactor = swiper.rtlTranslate ? -1 : 1;
        const data = normalize(e);

        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) return true;
        if (params.invert) delta = -delta; // Get the scroll positions

        let positions = swiper.getTranslate() + delta * params.sensitivity;
        if (positions >= swiper.minTranslate()) positions = swiper.minTranslate();
        if (positions <= swiper.maxTranslate()) positions = swiper.maxTranslate(); // When loop is true:
        //     the disableParentSwiper will be true.
        // When loop is false:
        //     if the scroll positions is not on edge,
        //     then the disableParentSwiper will be true.
        //     if the scroll on edge positions,
        //     then the disableParentSwiper will be false.

        disableParentSwiper = swiper.params.loop ? true : !(positions === swiper.minTranslate() || positions === swiper.maxTranslate());
        if (disableParentSwiper && swiper.params.nested) e.stopPropagation();

        if (!swiper.params.freeMode || !swiper.params.freeMode.enabled) {
          // Register the new event in a variable which stores the relevant data
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events

          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.

          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              animateSlider(newEvent);
            }
          } else {
            animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.


          if (releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          const newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          const ignoreWheelEvents = lastEventBeforeSnap && newEvent.time < lastEventBeforeSnap.time + 500 && newEvent.delta <= lastEventBeforeSnap.delta && newEvent.direction === lastEventBeforeSnap.direction;

          if (!ignoreWheelEvents) {
            lastEventBeforeSnap = undefined;

            if (swiper.params.loop) {
              swiper.loopFix();
            }

            let position = swiper.getTranslate() + delta * params.sensitivity;
            const wasBeginning = swiper.isBeginning;
            const wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }

            if (swiper.params.freeMode.sticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(timeout);
              timeout = undefined;

              if (recentWheelEvents.length >= 15) {
                recentWheelEvents.shift(); // only store the last N events
              }

              const prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
              const firstEvent = recentWheelEvents[0];
              recentWheelEvents.push(newEvent);

              if (prevEvent && (newEvent.delta > prevEvent.delta || newEvent.direction !== prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents.splice(0);
              } else if (recentWheelEvents.length >= 15 && newEvent.time - firstEvent.time < 500 && firstEvent.delta - newEvent.delta >= 1 && newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                const snapToThreshold = delta > 0 ? 0.8 : 0.2;
                lastEventBeforeSnap = newEvent;
                recentWheelEvents.splice(0);
                timeout = nextTick(() => {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                timeout = nextTick(() => {
                  const snapToThreshold = 0.5;
                  lastEventBeforeSnap = newEvent;
                  recentWheelEvents.splice(0);
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event


            if (!ignoreWheelEvents) emit('scroll', e); // Stop autoplay

            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions

            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }

        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      }

      function events(method) {
        let target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }

        target[method]('mouseenter', handleMouseEnter);
        target[method]('mouseleave', handleMouseLeave);
        target[method]('wheel', handle);
      }

      function enable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener('wheel', handle);
          return true;
        }

        if (swiper.mousewheel.enabled) return false;
        events('on');
        swiper.mousewheel.enabled = true;
        return true;
      }

      function disable() {
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, handle);
          return true;
        }

        if (!swiper.mousewheel.enabled) return false;
        events('off');
        swiper.mousewheel.enabled = false;
        return true;
      }

      on('init', () => {
        if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
          disable();
        }

        if (swiper.params.mousewheel.enabled) enable();
      });
      on('destroy', () => {
        if (swiper.params.cssMode) {
          enable();
        }

        if (swiper.mousewheel.enabled) disable();
      });
      Object.assign(swiper.mousewheel, {
        enable,
        disable
      });
    }

    function createElementIfNotDefined(swiper, originalParams, params, checkProps) {
      const document = getDocument();

      if (swiper.params.createElements) {
        Object.keys(checkProps).forEach(key => {
          if (!params[key] && params.auto === true) {
            let element = swiper.$el.children(`.${checkProps[key]}`)[0];

            if (!element) {
              element = document.createElement('div');
              element.className = checkProps[key];
              swiper.$el.append(element);
            }

            params[key] = element;
            originalParams[key] = element;
          }
        });
      }

      return params;
    }

    function Navigation(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
          navigationDisabledClass: 'swiper-navigation-disabled'
        }
      });
      swiper.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null
      };

      function getEl(el) {
        let $el;

        if (el) {
          $el = $(el);

          if (swiper.params.uniqueNavElements && typeof el === 'string' && $el.length > 1 && swiper.$el.find(el).length === 1) {
            $el = swiper.$el.find(el);
          }
        }

        return $el;
      }

      function toggleEl($el, disabled) {
        const params = swiper.params.navigation;

        if ($el && $el.length > 0) {
          $el[disabled ? 'addClass' : 'removeClass'](params.disabledClass);
          if ($el[0] && $el[0].tagName === 'BUTTON') $el[0].disabled = disabled;

          if (swiper.params.watchOverflow && swiper.enabled) {
            $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
          }
        }
      }

      function update() {
        // Update Navigation Buttons
        if (swiper.params.loop) return;
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        toggleEl($prevEl, swiper.isBeginning && !swiper.params.rewind);
        toggleEl($nextEl, swiper.isEnd && !swiper.params.rewind);
      }

      function onPrevClick(e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slidePrev();
        emit('navigationPrev');
      }

      function onNextClick(e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop && !swiper.params.rewind) return;
        swiper.slideNext();
        emit('navigationNext');
      }

      function init() {
        const params = swiper.params.navigation;
        swiper.params.navigation = createElementIfNotDefined(swiper, swiper.originalParams.navigation, swiper.params.navigation, {
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev'
        });
        if (!(params.nextEl || params.prevEl)) return;
        const $nextEl = getEl(params.nextEl);
        const $prevEl = getEl(params.prevEl);

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', onPrevClick);
        }

        Object.assign(swiper.navigation, {
          $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });

        if (!swiper.enabled) {
          if ($nextEl) $nextEl.addClass(params.lockClass);
          if ($prevEl) $prevEl.addClass(params.lockClass);
        }
      }

      function destroy() {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }

      on('init', () => {
        if (swiper.params.navigation.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          update();
        }
      });
      on('toEdge fromEdge lock unlock', () => {
        update();
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;

        if ($nextEl) {
          $nextEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        }

        if ($prevEl) {
          $prevEl[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.navigation.lockClass);
        }
      });
      on('click', (_s, e) => {
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;
        const targetEl = e.target;

        if (swiper.params.navigation.hideOnClick && !$(targetEl).is($prevEl) && !$(targetEl).is($nextEl)) {
          if (swiper.pagination && swiper.params.pagination && swiper.params.pagination.clickable && (swiper.pagination.el === targetEl || swiper.pagination.el.contains(targetEl))) return;
          let isHidden;

          if ($nextEl) {
            isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
          } else if ($prevEl) {
            isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
          }

          if (isHidden === true) {
            emit('navigationShow');
          } else {
            emit('navigationHide');
          }

          if ($nextEl) {
            $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
          }

          if ($prevEl) {
            $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
          }
        }
      });

      const enable = () => {
        swiper.$el.removeClass(swiper.params.navigation.navigationDisabledClass);
        init();
        update();
      };

      const disable = () => {
        swiper.$el.addClass(swiper.params.navigation.navigationDisabledClass);
        destroy();
      };

      Object.assign(swiper.navigation, {
        enable,
        disable,
        update,
        init,
        destroy
      });
    }

    function classesToSelector(classes) {
      if (classes === void 0) {
        classes = '';
      }

      return `.${classes.trim().replace(/([\.:!\/])/g, '\\$1') // eslint-disable-line
  .replace(/ /g, '.')}`;
    }

    function Pagination(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const pfx = 'swiper-pagination';
      extendParams({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: number => number,
          formatFractionTotal: number => number,
          bulletClass: `${pfx}-bullet`,
          bulletActiveClass: `${pfx}-bullet-active`,
          modifierClass: `${pfx}-`,
          currentClass: `${pfx}-current`,
          totalClass: `${pfx}-total`,
          hiddenClass: `${pfx}-hidden`,
          progressbarFillClass: `${pfx}-progressbar-fill`,
          progressbarOppositeClass: `${pfx}-progressbar-opposite`,
          clickableClass: `${pfx}-clickable`,
          lockClass: `${pfx}-lock`,
          horizontalClass: `${pfx}-horizontal`,
          verticalClass: `${pfx}-vertical`,
          paginationDisabledClass: `${pfx}-disabled`
        }
      });
      swiper.pagination = {
        el: null,
        $el: null,
        bullets: []
      };
      let bulletSize;
      let dynamicBulletIndex = 0;

      function isPaginationDisabled() {
        return !swiper.params.pagination.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0;
      }

      function setSideBullets($bulletEl, position) {
        const {
          bulletActiveClass
        } = swiper.params.pagination;
        $bulletEl[position]().addClass(`${bulletActiveClass}-${position}`)[position]().addClass(`${bulletActiveClass}-${position}-${position}`);
      }

      function update() {
        // Render || Update Pagination bullets/items
        const rtl = swiper.rtl;
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el; // Current/Total

        let current;
        const total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }

          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          const bullets = swiper.pagination.bullets;
          let firstIndex;
          let lastIndex;
          let midIndex;

          if (params.dynamicBullets) {
            bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', `${bulletSize * (params.dynamicMainBullets + 4)}px`);

            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              dynamicBulletIndex += current - (swiper.previousIndex - swiper.loopedSlides || 0);

              if (dynamicBulletIndex > params.dynamicMainBullets - 1) {
                dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (dynamicBulletIndex < 0) {
                dynamicBulletIndex = 0;
              }
            }

            firstIndex = Math.max(current - dynamicBulletIndex, 0);
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass(['', '-next', '-next-next', '-prev', '-prev-prev', '-main'].map(suffix => `${params.bulletActiveClass}${suffix}`).join(' '));

          if ($el.length > 1) {
            bullets.each(bullet => {
              const $bullet = $(bullet);
              const bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(`${params.bulletActiveClass}-main`);
                }

                if (bulletIndex === firstIndex) {
                  setSideBullets($bullet, 'prev');
                }

                if (bulletIndex === lastIndex) {
                  setSideBullets($bullet, 'next');
                }
              }
            });
          } else {
            const $bullet = bullets.eq(current);
            const bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              const $firstDisplayedBullet = bullets.eq(firstIndex);
              const $lastDisplayedBullet = bullets.eq(lastIndex);

              for (let i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(`${params.bulletActiveClass}-main`);
              }

              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length) {
                  for (let i = params.dynamicMainBullets; i >= 0; i -= 1) {
                    bullets.eq(bullets.length - i).addClass(`${params.bulletActiveClass}-main`);
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(`${params.bulletActiveClass}-prev`);
                } else {
                  setSideBullets($firstDisplayedBullet, 'prev');
                  setSideBullets($lastDisplayedBullet, 'next');
                }
              } else {
                setSideBullets($firstDisplayedBullet, 'prev');
                setSideBullets($lastDisplayedBullet, 'next');
              }
            }
          }

          if (params.dynamicBullets) {
            const dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            const bulletsOffset = (bulletSize * dynamicBulletsLength - bulletSize) / 2 - midIndex * bulletSize;
            const offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', `${bulletsOffset}px`);
          }
        }

        if (params.type === 'fraction') {
          $el.find(classesToSelector(params.currentClass)).text(params.formatFractionCurrent(current + 1));
          $el.find(classesToSelector(params.totalClass)).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          let progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }

          const scale = (current + 1) / total;
          let scaleX = 1;
          let scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find(classesToSelector(params.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${scaleX}) scaleY(${scaleY})`).transition(swiper.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          emit('paginationRender', $el[0]);
        } else {
          emit('paginationUpdate', $el[0]);
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          $el[swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      }

      function render() {
        // Render Container
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        const $el = swiper.pagination.$el;
        let paginationHTML = '';

        if (params.type === 'bullets') {
          let numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.loop && numberOfBullets > slidesLength) {
            numberOfBullets = slidesLength;
          }

          for (let i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += `<${params.bulletElement} class="${params.bulletClass}"></${params.bulletElement}>`;
            }
          }

          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find(classesToSelector(params.bulletClass));
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = `<span class="${params.currentClass}"></span>` + ' / ' + `<span class="${params.totalClass}"></span>`;
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = `<span class="${params.progressbarFillClass}"></span>`;
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          emit('paginationRender', swiper.pagination.$el[0]);
        }
      }

      function init() {
        swiper.params.pagination = createElementIfNotDefined(swiper, swiper.originalParams.pagination, swiper.params.pagination, {
          el: 'swiper-pagination'
        });
        const params = swiper.params.pagination;
        if (!params.el) return;
        let $el = $(params.el);
        if ($el.length === 0) return;

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el); // check if it belongs to another nested Swiper

          if ($el.length > 1) {
            $el = $el.filter(el => {
              if ($(el).parents('.swiper')[0] !== swiper.el) return false;
              return true;
            });
          }
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);
        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass(`${params.modifierClass}${params.type}-dynamic`);
          dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', classesToSelector(params.bulletClass), function onClick(e) {
            e.preventDefault();
            let index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }

        Object.assign(swiper.pagination, {
          $el,
          el: $el[0]
        });

        if (!swiper.enabled) {
          $el.addClass(params.lockClass);
        }
      }

      function destroy() {
        const params = swiper.params.pagination;
        if (isPaginationDisabled()) return;
        const $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        if (swiper.pagination.bullets && swiper.pagination.bullets.removeClass) swiper.pagination.bullets.removeClass(params.bulletActiveClass);

        if (params.clickable) {
          $el.off('click', classesToSelector(params.bulletClass));
        }
      }

      on('init', () => {
        if (swiper.params.pagination.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          render();
          update();
        }
      });
      on('activeIndexChange', () => {
        if (swiper.params.loop) {
          update();
        } else if (typeof swiper.snapIndex === 'undefined') {
          update();
        }
      });
      on('snapIndexChange', () => {
        if (!swiper.params.loop) {
          update();
        }
      });
      on('slidesLengthChange', () => {
        if (swiper.params.loop) {
          render();
          update();
        }
      });
      on('snapGridLengthChange', () => {
        if (!swiper.params.loop) {
          render();
          update();
        }
      });
      on('destroy', () => {
        destroy();
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper.pagination;

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.pagination.lockClass);
        }
      });
      on('lock unlock', () => {
        update();
      });
      on('click', (_s, e) => {
        const targetEl = e.target;
        const {
          $el
        } = swiper.pagination;

        if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && $el && $el.length > 0 && !$(targetEl).hasClass(swiper.params.pagination.bulletClass)) {
          if (swiper.navigation && (swiper.navigation.nextEl && targetEl === swiper.navigation.nextEl || swiper.navigation.prevEl && targetEl === swiper.navigation.prevEl)) return;
          const isHidden = $el.hasClass(swiper.params.pagination.hiddenClass);

          if (isHidden === true) {
            emit('paginationShow');
          } else {
            emit('paginationHide');
          }

          $el.toggleClass(swiper.params.pagination.hiddenClass);
        }
      });

      const enable = () => {
        swiper.$el.removeClass(swiper.params.pagination.paginationDisabledClass);

        if (swiper.pagination.$el) {
          swiper.pagination.$el.removeClass(swiper.params.pagination.paginationDisabledClass);
        }

        init();
        render();
        update();
      };

      const disable = () => {
        swiper.$el.addClass(swiper.params.pagination.paginationDisabledClass);

        if (swiper.pagination.$el) {
          swiper.pagination.$el.addClass(swiper.params.pagination.paginationDisabledClass);
        }

        destroy();
      };

      Object.assign(swiper.pagination, {
        enable,
        disable,
        render,
        update,
        init,
        destroy
      });
    }

    function Scrollbar(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const document = getDocument();
      let isTouched = false;
      let timeout = null;
      let dragTimeout = null;
      let dragStartPos;
      let dragSize;
      let trackSize;
      let divider;
      extendParams({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
          scrollbarDisabledClass: 'swiper-scrollbar-disabled',
          horizontalClass: `swiper-scrollbar-horizontal`,
          verticalClass: `swiper-scrollbar-vertical`
        }
      });
      swiper.scrollbar = {
        el: null,
        dragEl: null,
        $el: null,
        $dragEl: null
      };

      function setTranslate() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar,
          rtlTranslate: rtl,
          progress
        } = swiper;
        const {
          $dragEl,
          $el
        } = scrollbar;
        const params = swiper.params.scrollbar;
        let newSize = dragSize;
        let newPos = (trackSize - dragSize) * progress;

        if (rtl) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }

        if (swiper.isHorizontal()) {
          $dragEl.transform(`translate3d(${newPos}px, 0, 0)`);
          $dragEl[0].style.width = `${newSize}px`;
        } else {
          $dragEl.transform(`translate3d(0px, ${newPos}px, 0)`);
          $dragEl[0].style.height = `${newSize}px`;
        }

        if (params.hide) {
          clearTimeout(timeout);
          $el[0].style.opacity = 1;
          timeout = setTimeout(() => {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      }

      function setTransition(duration) {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
      }

      function updateSize() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        const {
          scrollbar
        } = swiper;
        const {
          $dragEl,
          $el
        } = scrollbar;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        divider = swiper.size / (swiper.virtualSize + swiper.params.slidesOffsetBefore - (swiper.params.centeredSlides ? swiper.snapGrid[0] : 0));

        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }

        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = `${dragSize}px`;
        } else {
          $dragEl[0].style.height = `${dragSize}px`;
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }

        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }

        if (swiper.params.watchOverflow && swiper.enabled) {
          scrollbar.$el[swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
        }
      }

      function getPointerPosition(e) {
        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }

        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      }

      function setDragPosition(e) {
        const {
          scrollbar,
          rtlTranslate: rtl
        } = swiper;
        const {
          $el
        } = scrollbar;
        let positionRatio;
        positionRatio = (getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);

        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        const position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      function onDragStart(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el,
          $dragEl
        } = scrollbar;
        isTouched = true;
        dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        setDragPosition(e);
        clearTimeout(dragTimeout);
        $el.transition(0);

        if (params.hide) {
          $el.css('opacity', 1);
        }

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }

        emit('scrollbarDragStart', e);
      }

      function onDragMove(e) {
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el,
          $dragEl
        } = scrollbar;
        if (!isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        emit('scrollbarDragMove', e);
      }

      function onDragEnd(e) {
        const params = swiper.params.scrollbar;
        const {
          scrollbar,
          $wrapperEl
        } = swiper;
        const {
          $el
        } = scrollbar;
        if (!isTouched) return;
        isTouched = false;

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }

        if (params.hide) {
          clearTimeout(dragTimeout);
          dragTimeout = nextTick(() => {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }

        emit('scrollbarDragEnd', e);

        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      }

      function events(method) {
        const {
          scrollbar,
          touchEventsTouch,
          touchEventsDesktop,
          params,
          support
        } = swiper;
        const $el = scrollbar.$el;
        if (!$el) return;
        const target = $el[0];
        const activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        const passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        if (!target) return;
        const eventMethod = method === 'on' ? 'addEventListener' : 'removeEventListener';

        if (!support.touch) {
          target[eventMethod](touchEventsDesktop.start, onDragStart, activeListener);
          document[eventMethod](touchEventsDesktop.move, onDragMove, activeListener);
          document[eventMethod](touchEventsDesktop.end, onDragEnd, passiveListener);
        } else {
          target[eventMethod](touchEventsTouch.start, onDragStart, activeListener);
          target[eventMethod](touchEventsTouch.move, onDragMove, activeListener);
          target[eventMethod](touchEventsTouch.end, onDragEnd, passiveListener);
        }
      }

      function enableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('on');
      }

      function disableDraggable() {
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        events('off');
      }

      function init() {
        const {
          scrollbar,
          $el: $swiperEl
        } = swiper;
        swiper.params.scrollbar = createElementIfNotDefined(swiper, swiper.originalParams.scrollbar, swiper.params.scrollbar, {
          el: 'swiper-scrollbar'
        });
        const params = swiper.params.scrollbar;
        if (!params.el) return;
        let $el = $(params.el);

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        $el.addClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        let $dragEl = $el.find(`.${swiper.params.scrollbar.dragClass}`);

        if ($dragEl.length === 0) {
          $dragEl = $(`<div class="${swiper.params.scrollbar.dragClass}"></div>`);
          $el.append($dragEl);
        }

        Object.assign(scrollbar, {
          $el,
          el: $el[0],
          $dragEl,
          dragEl: $dragEl[0]
        });

        if (params.draggable) {
          enableDraggable();
        }

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      }

      function destroy() {
        const params = swiper.params.scrollbar;
        const $el = swiper.scrollbar.$el;

        if ($el) {
          $el.removeClass(swiper.isHorizontal() ? params.horizontalClass : params.verticalClass);
        }

        disableDraggable();
      }

      on('init', () => {
        if (swiper.params.scrollbar.enabled === false) {
          // eslint-disable-next-line
          disable();
        } else {
          init();
          updateSize();
          setTranslate();
        }
      });
      on('update resize observerUpdate lock unlock', () => {
        updateSize();
      });
      on('setTranslate', () => {
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        setTransition(duration);
      });
      on('enable disable', () => {
        const {
          $el
        } = swiper.scrollbar;

        if ($el) {
          $el[swiper.enabled ? 'removeClass' : 'addClass'](swiper.params.scrollbar.lockClass);
        }
      });
      on('destroy', () => {
        destroy();
      });

      const enable = () => {
        swiper.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);

        if (swiper.scrollbar.$el) {
          swiper.scrollbar.$el.removeClass(swiper.params.scrollbar.scrollbarDisabledClass);
        }

        init();
        updateSize();
        setTranslate();
      };

      const disable = () => {
        swiper.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);

        if (swiper.scrollbar.$el) {
          swiper.scrollbar.$el.addClass(swiper.params.scrollbar.scrollbarDisabledClass);
        }

        destroy();
      };

      Object.assign(swiper.scrollbar, {
        enable,
        disable,
        updateSize,
        setTranslate,
        init,
        destroy
      });
    }

    function Parallax(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        parallax: {
          enabled: false
        }
      });

      const setTransform = (el, progress) => {
        const {
          rtl
        } = swiper;
        const $el = $(el);
        const rtlFactor = rtl ? -1 : 1;
        const p = $el.attr('data-swiper-parallax') || '0';
        let x = $el.attr('data-swiper-parallax-x');
        let y = $el.attr('data-swiper-parallax-y');
        const scale = $el.attr('data-swiper-parallax-scale');
        const opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if (x.indexOf('%') >= 0) {
          x = `${parseInt(x, 10) * progress * rtlFactor}%`;
        } else {
          x = `${x * progress * rtlFactor}px`;
        }

        if (y.indexOf('%') >= 0) {
          y = `${parseInt(y, 10) * progress}%`;
        } else {
          y = `${y * progress}px`;
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          const currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }

        if (typeof scale === 'undefined' || scale === null) {
          $el.transform(`translate3d(${x}, ${y}, 0px)`);
        } else {
          const currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform(`translate3d(${x}, ${y}, 0px) scale(${currentScale})`);
        }
      };

      const setTranslate = () => {
        const {
          $el,
          slides,
          progress,
          snapGrid
        } = swiper;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
          setTransform(el, progress);
        });
        slides.each((slideEl, slideIndex) => {
          let slideProgress = slideEl.progress;

          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }

          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(el => {
            setTransform(el, slideProgress);
          });
        });
      };

      const setTransition = function (duration) {
        if (duration === void 0) {
          duration = swiper.params.speed;
        }

        const {
          $el
        } = swiper;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(parallaxEl => {
          const $parallaxEl = $(parallaxEl);
          let parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      };

      on('beforeInit', () => {
        if (!swiper.params.parallax.enabled) return;
        swiper.params.watchSlidesProgress = true;
        swiper.originalParams.watchSlidesProgress = true;
      });
      on('init', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTranslate', () => {
        if (!swiper.params.parallax.enabled) return;
        setTranslate();
      });
      on('setTransition', (_swiper, duration) => {
        if (!swiper.params.parallax.enabled) return;
        setTransition(duration);
      });
    }

    function Zoom(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      const window = getWindow();
      extendParams({
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      });
      swiper.zoom = {
        enabled: false
      };
      let currentScale = 1;
      let isScaling = false;
      let gesturesEnabled;
      let fakeGestureTouched;
      let fakeGestureMoved;
      const gesture = {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3
      };
      const image = {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {}
      };
      const velocity = {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined
      };
      let scale = 1;
      Object.defineProperty(swiper.zoom, 'scale', {
        get() {
          return scale;
        },

        set(value) {
          if (scale !== value) {
            const imageEl = gesture.$imageEl ? gesture.$imageEl[0] : undefined;
            const slideEl = gesture.$slideEl ? gesture.$slideEl[0] : undefined;
            emit('zoomChange', value, imageEl, slideEl);
          }

          scale = value;
        }

      });

      function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        const x1 = e.targetTouches[0].pageX;
        const y1 = e.targetTouches[0].pageY;
        const x2 = e.targetTouches[1].pageX;
        const y2 = e.targetTouches[1].pageY;
        const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
        return distance;
      } // Events


      function onGestureStart(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        fakeGestureTouched = false;
        fakeGestureMoved = false;

        if (!support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }

          fakeGestureTouched = true;
          gesture.scaleStart = getDistanceBetweenTouches(e);
        }

        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }

        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }

        isScaling = true;
      }

      function onGestureChange(e) {
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;

        if (!support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }

          fakeGestureMoved = true;
          gesture.scaleMove = getDistanceBetweenTouches(e);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          if (e.type === 'gesturechange') onGestureStart(e);
          return;
        }

        if (support.gestures) {
          zoom.scale = e.scale * currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * currentScale;
        }

        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + (zoom.scale - gesture.maxRatio + 1) ** 0.5;
        }

        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - (params.minRatio - zoom.scale + 1) ** 0.5;
        }

        gesture.$imageEl.transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }

      function onGestureEnd(e) {
        const device = swiper.device;
        const support = swiper.support;
        const params = swiper.params.zoom;
        const zoom = swiper.zoom;

        if (!support.gestures) {
          if (!fakeGestureTouched || !fakeGestureMoved) {
            return;
          }

          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
            return;
          }

          fakeGestureTouched = false;
          fakeGestureMoved = false;
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
        currentScale = zoom.scale;
        isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      }

      function onTouchStart(e) {
        const device = swiper.device;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      }

      function onTouchMove(e) {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
        } // Define if we need image drag


        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }

          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }

        if (e.cancelable) {
          e.preventDefault();
        }

        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - (image.minX - image.currentX + 1) ** 0.8;
        }

        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + (image.currentX - image.maxX + 1) ** 0.8;
        }

        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - (image.minY - image.currentY + 1) ** 0.8;
        }

        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + (image.currentY - image.maxY + 1) ** 0.8;
        } // Velocity


        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }

      function onTouchEnd() {
        const zoom = swiper.zoom;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;

        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }

        image.isTouched = false;
        image.isMoved = false;
        let momentumDurationX = 300;
        let momentumDurationY = 300;
        const momentumDistanceX = velocity.x * momentumDurationX;
        const newPositionX = image.currentX + momentumDistanceX;
        const momentumDistanceY = velocity.y * momentumDurationY;
        const newPositionY = image.currentY + momentumDistanceY; // Fix duration

        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        const momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag

        const scaledWidth = image.width * zoom.scale;
        const scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform(`translate3d(${image.currentX}px, ${image.currentY}px,0)`);
      }

      function onTransitionEnd() {
        const zoom = swiper.zoom;

        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }

          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }

          zoom.scale = 1;
          currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      }

      function zoomIn(e) {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;

        if (!gesture.$slideEl) {
          if (e && e.target) {
            gesture.$slideEl = $(e.target).closest(`.${swiper.params.slideClass}`);
          }

          if (!gesture.$slideEl) {
            if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
              gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
            } else {
              gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
            }
          }

          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = 'hidden';
          swiper.wrapperEl.style.touchAction = 'none';
        }

        gesture.$slideEl.addClass(`${params.zoomedSlideClass}`);
        let touchX;
        let touchY;
        let offsetX;
        let offsetY;
        let diffX;
        let diffY;
        let translateX;
        let translateY;
        let imageWidth;
        let imageHeight;
        let scaledWidth;
        let scaledHeight;
        let translateMinX;
        let translateMinY;
        let translateMaxX;
        let translateMaxY;
        let slideWidth;
        let slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left + window.scrollX;
          offsetY = gesture.$slideEl.offset().top + window.scrollY;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }

          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }

          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }

        gesture.$imageWrapEl.transition(300).transform(`translate3d(${translateX}px, ${translateY}px,0)`);
        gesture.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${zoom.scale})`);
      }

      function zoomOut() {
        const zoom = swiper.zoom;
        const params = swiper.params.zoom;

        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children(`.${swiper.params.slideActiveClass}`);
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find(`.${params.containerClass}`).eq(0).find('picture, img, svg, canvas, .swiper-zoom-target').eq(0);
          gesture.$imageWrapEl = gesture.$imageEl.parent(`.${params.containerClass}`);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0 || !gesture.$imageWrapEl || gesture.$imageWrapEl.length === 0) return;

        if (swiper.params.cssMode) {
          swiper.wrapperEl.style.overflow = '';
          swiper.wrapperEl.style.touchAction = '';
        }

        zoom.scale = 1;
        currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass(`${params.zoomedSlideClass}`);
        gesture.$slideEl = undefined;
      } // Toggle Zoom


      function zoomToggle(e) {
        const zoom = swiper.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoomOut();
        } else {
          // Zoom In
          zoomIn(e);
        }
      }

      function getListeners() {
        const support = swiper.support;
        const passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        const activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        return {
          passiveListener,
          activeListenerWithCapture
        };
      }

      function getSlideSelector() {
        return `.${swiper.params.slideClass}`;
      }

      function toggleGestures(method) {
        const {
          passiveListener
        } = getListeners();
        const slideSelector = getSlideSelector();
        swiper.$wrapperEl[method]('gesturestart', slideSelector, onGestureStart, passiveListener);
        swiper.$wrapperEl[method]('gesturechange', slideSelector, onGestureChange, passiveListener);
        swiper.$wrapperEl[method]('gestureend', slideSelector, onGestureEnd, passiveListener);
      }

      function enableGestures() {
        if (gesturesEnabled) return;
        gesturesEnabled = true;
        toggleGestures('on');
      }

      function disableGestures() {
        if (!gesturesEnabled) return;
        gesturesEnabled = false;
        toggleGestures('off');
      } // Attach/Detach Events


      function enable() {
        const zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        const support = swiper.support;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image

        if (support.gestures) {
          swiper.$wrapperEl.on(swiper.touchEvents.start, enableGestures, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.on(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }

      function disable() {
        const zoom = swiper.zoom;
        if (!zoom.enabled) return;
        const support = swiper.support;
        zoom.enabled = false;
        const {
          passiveListener,
          activeListenerWithCapture
        } = getListeners();
        const slideSelector = getSlideSelector(); // Scale image

        if (support.gestures) {
          swiper.$wrapperEl.off(swiper.touchEvents.start, enableGestures, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.end, disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.off(swiper.touchEvents.move, `.${swiper.params.zoom.containerClass}`, onTouchMove, activeListenerWithCapture);
      }

      on('init', () => {
        if (swiper.params.zoom.enabled) {
          enable();
        }
      });
      on('destroy', () => {
        disable();
      });
      on('touchStart', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchStart(e);
      });
      on('touchEnd', (_s, e) => {
        if (!swiper.zoom.enabled) return;
        onTouchEnd();
      });
      on('doubleTap', (_s, e) => {
        if (!swiper.animating && swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
          zoomToggle(e);
        }
      });
      on('transitionEnd', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
          onTransitionEnd();
        }
      });
      on('slideChange', () => {
        if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
          onTransitionEnd();
        }
      });
      Object.assign(swiper.zoom, {
        enable,
        disable,
        in: zoomIn,
        out: zoomOut,
        toggle: zoomToggle
      });
    }

    function Lazy(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      extendParams({
        lazy: {
          checkInView: false,
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      });
      swiper.lazy = {};
      let scrollHandlerAttached = false;
      let initialImageLoaded = false;

      function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) {
          loadInDuplicate = true;
        }

        const params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        const $slideEl = isVirtual ? swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-swiper-slide-index="${index}"]`) : swiper.slides.eq(index);
        const $images = $slideEl.find(`.${params.elementClass}:not(.${params.loadedClass}):not(.${params.loadingClass})`);

        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images.push($slideEl[0]);
        }

        if ($images.length === 0) return;
        $images.each(imageEl => {
          const $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);
          const background = $imageEl.attr('data-background');
          const src = $imageEl.attr('data-src');
          const srcset = $imageEl.attr('data-srcset');
          const sizes = $imageEl.attr('data-sizes');
          const $pictureEl = $imageEl.parent('picture');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, () => {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;

            if (background) {
              $imageEl.css('background-image', `url("${background}")`);
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }

              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }

              if ($pictureEl.length) {
                $pictureEl.children('source').each(sourceEl => {
                  const $source = $(sourceEl);

                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }

              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find(`.${params.preloaderClass}`).remove();

            if (swiper.params.loop && loadInDuplicate) {
              const slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                const originalSlide = swiper.$wrapperEl.children(`[data-swiper-slide-index="${slideOriginalIndex}"]:not(.${swiper.params.slideDuplicateClass})`);
                loadInSlide(originalSlide.index(), false);
              } else {
                const duplicatedSlide = swiper.$wrapperEl.children(`.${swiper.params.slideDuplicateClass}[data-swiper-slide-index="${slideOriginalIndex}"]`);
                loadInSlide(duplicatedSlide.index(), false);
              }
            }

            emit('lazyImageReady', $slideEl[0], $imageEl[0]);

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      }

      function load() {
        const {
          $wrapperEl,
          params: swiperParams,
          slides,
          activeIndex
        } = swiper;
        const isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        const params = swiperParams.lazy;
        let slidesPerView = swiperParams.slidesPerView;

        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children(`.${swiperParams.slideClass}[data-swiper-slide-index="${index}"]`).length) {
              return true;
            }
          } else if (slides[index]) return true;

          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }

          return $(slideEl).index();
        }

        if (!initialImageLoaded) initialImageLoaded = true;

        if (swiper.params.watchSlidesProgress) {
          $wrapperEl.children(`.${swiperParams.slideVisibleClass}`).each(slideEl => {
            const index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (let i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) loadInSlide(i);
          }
        } else {
          loadInSlide(activeIndex);
        }

        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            const amount = params.loadPrevNextAmount;
            const spv = Math.ceil(slidesPerView);
            const maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            const minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (let i = activeIndex + spv; i < maxIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            } // Prev Slides


            for (let i = minIndex; i < activeIndex; i += 1) {
              if (slideExist(i)) loadInSlide(i);
            }
          } else {
            const nextSlide = $wrapperEl.children(`.${swiperParams.slideNextClass}`);
            if (nextSlide.length > 0) loadInSlide(slideIndex(nextSlide));
            const prevSlide = $wrapperEl.children(`.${swiperParams.slidePrevClass}`);
            if (prevSlide.length > 0) loadInSlide(slideIndex(prevSlide));
          }
        }
      }

      function checkInViewOnLoad() {
        const window = getWindow();
        if (!swiper || swiper.destroyed) return;
        const $scrollElement = swiper.params.lazy.scrollingElement ? $(swiper.params.lazy.scrollingElement) : $(window);
        const isWindow = $scrollElement[0] === window;
        const scrollElementWidth = isWindow ? window.innerWidth : $scrollElement[0].offsetWidth;
        const scrollElementHeight = isWindow ? window.innerHeight : $scrollElement[0].offsetHeight;
        const swiperOffset = swiper.$el.offset();
        const {
          rtlTranslate: rtl
        } = swiper;
        let inView = false;
        if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
        const swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

        for (let i = 0; i < swiperCoord.length; i += 1) {
          const point = swiperCoord[i];

          if (point[0] >= 0 && point[0] <= scrollElementWidth && point[1] >= 0 && point[1] <= scrollElementHeight) {
            if (point[0] === 0 && point[1] === 0) continue; // eslint-disable-line

            inView = true;
          }
        }

        const passiveListener = swiper.touchEvents.start === 'touchstart' && swiper.support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (inView) {
          load();
          $scrollElement.off('scroll', checkInViewOnLoad, passiveListener);
        } else if (!scrollHandlerAttached) {
          scrollHandlerAttached = true;
          $scrollElement.on('scroll', checkInViewOnLoad, passiveListener);
        }
      }

      on('beforeInit', () => {
        if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
          swiper.params.preloadImages = false;
        }
      });
      on('init', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('scroll', () => {
        if (swiper.params.freeMode && swiper.params.freeMode.enabled && !swiper.params.freeMode.sticky) {
          load();
        }
      });
      on('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('transitionStart', () => {
        if (swiper.params.lazy.enabled) {
          if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !initialImageLoaded) {
            if (swiper.params.lazy.checkInView) {
              checkInViewOnLoad();
            } else {
              load();
            }
          }
        }
      });
      on('transitionEnd', () => {
        if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
          if (swiper.params.lazy.checkInView) {
            checkInViewOnLoad();
          } else {
            load();
          }
        }
      });
      on('slideChange', () => {
        const {
          lazy,
          cssMode,
          watchSlidesProgress,
          touchReleaseOnEdges,
          resistanceRatio
        } = swiper.params;

        if (lazy.enabled && (cssMode || watchSlidesProgress && (touchReleaseOnEdges || resistanceRatio === 0))) {
          load();
        }
      });
      on('destroy', () => {
        if (!swiper.$el) return;
        swiper.$el.find(`.${swiper.params.lazy.loadingClass}`).removeClass(swiper.params.lazy.loadingClass);
      });
      Object.assign(swiper.lazy, {
        load,
        loadInSlide
      });
    }

    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */
    function Controller(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'

        }
      });
      swiper.controller = {
        control: undefined
      };

      function LinearSpline(x, y) {
        const binarySearch = function search() {
          let maxIndex;
          let minIndex;
          let guess;
          return (array, val) => {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;

              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();

        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        let i1;
        let i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):

          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        return this;
      } // xxx: for now i will just save one spline function to to


      function getInterpolateFunction(c) {
        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new LinearSpline(swiper.slidesGrid, c.slidesGrid) : new LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      }

      function setTranslate(_t, byController) {
        const controlled = swiper.controller.control;
        let multiplier;
        let controlledTranslate;
        const Swiper = swiper.constructor;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          const translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

          if (swiper.params.controller.by === 'slide') {
            getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }

          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }

        if (Array.isArray(controlled)) {
          for (let i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      }

      function setTransition(duration, byController) {
        const Swiper = swiper.constructor;
        const controlled = swiper.controller.control;
        let i;

        function setControlledTransition(c) {
          c.setTransition(duration, swiper);

          if (duration !== 0) {
            c.transitionStart();

            if (c.params.autoHeight) {
              nextTick(() => {
                c.updateAutoHeight();
              });
            }

            c.$wrapperEl.transitionEnd(() => {
              if (!controlled) return;

              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }

              c.transitionEnd();
            });
          }
        }

        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }

      function removeSpline() {
        if (!swiper.controller.control) return;

        if (swiper.controller.spline) {
          swiper.controller.spline = undefined;
          delete swiper.controller.spline;
        }
      }

      on('beforeInit', () => {
        swiper.controller.control = swiper.params.controller.control;
      });
      on('update', () => {
        removeSpline();
      });
      on('resize', () => {
        removeSpline();
      });
      on('observerUpdate', () => {
        removeSpline();
      });
      on('setTranslate', (_s, translate, byController) => {
        if (!swiper.controller.control) return;
        swiper.controller.setTranslate(translate, byController);
      });
      on('setTransition', (_s, duration, byController) => {
        if (!swiper.controller.control) return;
        swiper.controller.setTransition(duration, byController);
      });
      Object.assign(swiper.controller, {
        setTranslate,
        setTransition
      });
    }

    function A11y(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
          id: null
        }
      });
      let liveRegion = null;

      function notify(message) {
        const notification = liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      }

      function getRandomNumber(size) {
        if (size === void 0) {
          size = 16;
        }

        const randomChar = () => Math.round(16 * Math.random()).toString(16);

        return 'x'.repeat(size).replace(/x/g, randomChar);
      }

      function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
      }

      function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
      }

      function addElRole($el, role) {
        $el.attr('role', role);
      }

      function addElRoleDescription($el, description) {
        $el.attr('aria-roledescription', description);
      }

      function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
      }

      function addElLabel($el, label) {
        $el.attr('aria-label', label);
      }

      function addElId($el, id) {
        $el.attr('id', id);
      }

      function addElLive($el, live) {
        $el.attr('aria-live', live);
      }

      function disableEl($el) {
        $el.attr('aria-disabled', true);
      }

      function enableEl($el) {
        $el.attr('aria-disabled', false);
      }

      function onEnterOrSpaceKey(e) {
        if (e.keyCode !== 13 && e.keyCode !== 32) return;
        const params = swiper.params.a11y;
        const $targetEl = $(e.target);

        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }

          if (swiper.isEnd) {
            notify(params.lastSlideMessage);
          } else {
            notify(params.nextSlideMessage);
          }
        }

        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }

          if (swiper.isBeginning) {
            notify(params.firstSlideMessage);
          } else {
            notify(params.prevSlideMessage);
          }
        }

        if (swiper.pagination && $targetEl.is(classesToSelector(swiper.params.pagination.bulletClass))) {
          $targetEl[0].click();
        }
      }

      function updateNavigation() {
        if (swiper.params.loop || swiper.params.rewind || !swiper.navigation) return;
        const {
          $nextEl,
          $prevEl
        } = swiper.navigation;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            disableEl($prevEl);
            makeElNotFocusable($prevEl);
          } else {
            enableEl($prevEl);
            makeElFocusable($prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            disableEl($nextEl);
            makeElNotFocusable($nextEl);
          } else {
            enableEl($nextEl);
            makeElFocusable($nextEl);
          }
        }
      }

      function hasPagination() {
        return swiper.pagination && swiper.pagination.bullets && swiper.pagination.bullets.length;
      }

      function hasClickablePagination() {
        return hasPagination() && swiper.params.pagination.clickable;
      }

      function updatePagination() {
        const params = swiper.params.a11y;
        if (!hasPagination()) return;
        swiper.pagination.bullets.each(bulletEl => {
          const $bulletEl = $(bulletEl);

          if (swiper.params.pagination.clickable) {
            makeElFocusable($bulletEl);

            if (!swiper.params.pagination.renderBullet) {
              addElRole($bulletEl, 'button');
              addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
          }

          if ($bulletEl.is(`.${swiper.params.pagination.bulletActiveClass}`)) {
            $bulletEl.attr('aria-current', 'true');
          } else {
            $bulletEl.removeAttr('aria-current');
          }
        });
      }

      const initNavEl = ($el, wrapperId, message) => {
        makeElFocusable($el);

        if ($el[0].tagName !== 'BUTTON') {
          addElRole($el, 'button');
          $el.on('keydown', onEnterOrSpaceKey);
        }

        addElLabel($el, message);
        addElControls($el, wrapperId);
      };

      const handleFocus = e => {
        const slideEl = e.target.closest(`.${swiper.params.slideClass}`);
        if (!slideEl || !swiper.slides.includes(slideEl)) return;
        const isActive = swiper.slides.indexOf(slideEl) === swiper.activeIndex;
        const isVisible = swiper.params.watchSlidesProgress && swiper.visibleSlides && swiper.visibleSlides.includes(slideEl);
        if (isActive || isVisible) return;
        swiper.slideTo(swiper.slides.indexOf(slideEl), 0);
      };

      const initSlides = () => {
        const params = swiper.params.a11y;

        if (params.itemRoleDescriptionMessage) {
          addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
        }

        addElRole($(swiper.slides), params.slideRole);
        const slidesLength = swiper.params.loop ? swiper.slides.filter(el => !el.classList.contains(swiper.params.slideDuplicateClass)).length : swiper.slides.length;

        if (params.slideLabelMessage) {
          swiper.slides.each((slideEl, index) => {
            const $slideEl = $(slideEl);
            const slideIndex = swiper.params.loop ? parseInt($slideEl.attr('data-swiper-slide-index'), 10) : index;
            const ariaLabelMessage = params.slideLabelMessage.replace(/\{\{index\}\}/, slideIndex + 1).replace(/\{\{slidesLength\}\}/, slidesLength);
            addElLabel($slideEl, ariaLabelMessage);
          });
        }
      };

      const init = () => {
        const params = swiper.params.a11y;
        swiper.$el.append(liveRegion); // Container

        const $containerEl = swiper.$el;

        if (params.containerRoleDescriptionMessage) {
          addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        }

        if (params.containerMessage) {
          addElLabel($containerEl, params.containerMessage);
        } // Wrapper


        const $wrapperEl = swiper.$wrapperEl;
        const wrapperId = params.id || $wrapperEl.attr('id') || `swiper-wrapper-${getRandomNumber(16)}`;
        const live = swiper.params.autoplay && swiper.params.autoplay.enabled ? 'off' : 'polite';
        addElId($wrapperEl, wrapperId);
        addElLive($wrapperEl, live); // Slide

        initSlides(); // Navigation

        let $nextEl;
        let $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl && $nextEl.length) {
          initNavEl($nextEl, wrapperId, params.nextSlideMessage);
        }

        if ($prevEl && $prevEl.length) {
          initNavEl($prevEl, wrapperId, params.prevSlideMessage);
        } // Pagination


        if (hasClickablePagination()) {
          swiper.pagination.$el.on('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
        } // Tab focus


        swiper.$el.on('focus', handleFocus, true);
      };

      function destroy() {
        if (liveRegion && liveRegion.length > 0) liveRegion.remove();
        let $nextEl;
        let $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          $nextEl.off('keydown', onEnterOrSpaceKey);
        }

        if ($prevEl) {
          $prevEl.off('keydown', onEnterOrSpaceKey);
        } // Pagination


        if (hasClickablePagination()) {
          swiper.pagination.$el.off('keydown', classesToSelector(swiper.params.pagination.bulletClass), onEnterOrSpaceKey);
        } // Tab focus


        swiper.$el.off('focus', handleFocus, true);
      }

      on('beforeInit', () => {
        liveRegion = $(`<span class="${swiper.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
      });
      on('afterInit', () => {
        if (!swiper.params.a11y.enabled) return;
        init();
      });
      on('slidesLengthChange snapGridLengthChange slidesGridLengthChange', () => {
        if (!swiper.params.a11y.enabled) return;
        initSlides();
      });
      on('fromEdge toEdge afterInit lock unlock', () => {
        if (!swiper.params.a11y.enabled) return;
        updateNavigation();
      });
      on('paginationUpdate', () => {
        if (!swiper.params.a11y.enabled) return;
        updatePagination();
      });
      on('destroy', () => {
        if (!swiper.params.a11y.enabled) return;
        destroy();
      });
    }

    function History(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        history: {
          enabled: false,
          root: '',
          replaceState: false,
          key: 'slides',
          keepQuery: false
        }
      });
      let initialized = false;
      let paths = {};

      const slugify = text => {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      };

      const getPathValues = urlOverride => {
        const window = getWindow();
        let location;

        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }

        const pathArray = location.pathname.slice(1).split('/').filter(part => part !== '');
        const total = pathArray.length;
        const key = pathArray[total - 2];
        const value = pathArray[total - 1];
        return {
          key,
          value
        };
      };

      const setHistory = (key, index) => {
        const window = getWindow();
        if (!initialized || !swiper.params.history.enabled) return;
        let location;

        if (swiper.params.url) {
          location = new URL(swiper.params.url);
        } else {
          location = window.location;
        }

        const slide = swiper.slides.eq(index);
        let value = slugify(slide.attr('data-history'));

        if (swiper.params.history.root.length > 0) {
          let root = swiper.params.history.root;
          if (root[root.length - 1] === '/') root = root.slice(0, root.length - 1);
          value = `${root}/${key}/${value}`;
        } else if (!location.pathname.includes(key)) {
          value = `${key}/${value}`;
        }

        if (swiper.params.history.keepQuery) {
          value += location.search;
        }

        const currentState = window.history.state;

        if (currentState && currentState.value === value) {
          return;
        }

        if (swiper.params.history.replaceState) {
          window.history.replaceState({
            value
          }, null, value);
        } else {
          window.history.pushState({
            value
          }, null, value);
        }
      };

      const scrollToSlide = (speed, value, runCallbacks) => {
        if (value) {
          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides.eq(i);
            const slideHistory = slugify(slide.attr('data-history'));

            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      };

      const setHistoryPopState = () => {
        paths = getPathValues(swiper.params.url);
        scrollToSlide(swiper.params.speed, paths.value, false);
      };

      const init = () => {
        const window = getWindow();
        if (!swiper.params.history) return;

        if (!window.history || !window.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }

        initialized = true;
        paths = getPathValues(swiper.params.url);
        if (!paths.key && !paths.value) return;
        scrollToSlide(0, paths.value, swiper.params.runCallbacksOnInit);

        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', setHistoryPopState);
        }
      };

      const destroy = () => {
        const window = getWindow();

        if (!swiper.params.history.replaceState) {
          window.removeEventListener('popstate', setHistoryPopState);
        }
      };

      on('init', () => {
        if (swiper.params.history.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.history.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHistory(swiper.params.history.key, swiper.activeIndex);
        }
      });
    }

    function HashNavigation(_ref) {
      let {
        swiper,
        extendParams,
        emit,
        on
      } = _ref;
      let initialized = false;
      const document = getDocument();
      const window = getWindow();
      extendParams({
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      });

      const onHashChange = () => {
        emit('hashChange');
        const newHash = document.location.hash.replace('#', '');
        const activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

        if (newHash !== activeSlideHash) {
          const newIndex = swiper.$wrapperEl.children(`.${swiper.params.slideClass}[data-hash="${newHash}"]`).index();
          if (typeof newIndex === 'undefined') return;
          swiper.slideTo(newIndex);
        }
      };

      const setHash = () => {
        if (!initialized || !swiper.params.hashNavigation.enabled) return;

        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, `#${swiper.slides.eq(swiper.activeIndex).attr('data-hash')}` || '');
          emit('hashSet');
        } else {
          const slide = swiper.slides.eq(swiper.activeIndex);
          const hash = slide.attr('data-hash') || slide.attr('data-history');
          document.location.hash = hash || '';
          emit('hashSet');
        }
      };

      const init = () => {
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        initialized = true;
        const hash = document.location.hash.replace('#', '');

        if (hash) {
          const speed = 0;

          for (let i = 0, length = swiper.slides.length; i < length; i += 1) {
            const slide = swiper.slides.eq(i);
            const slideHash = slide.attr('data-hash') || slide.attr('data-history');

            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              const index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }

        if (swiper.params.hashNavigation.watchState) {
          $(window).on('hashchange', onHashChange);
        }
      };

      const destroy = () => {
        if (swiper.params.hashNavigation.watchState) {
          $(window).off('hashchange', onHashChange);
        }
      };

      on('init', () => {
        if (swiper.params.hashNavigation.enabled) {
          init();
        }
      });
      on('destroy', () => {
        if (swiper.params.hashNavigation.enabled) {
          destroy();
        }
      });
      on('transitionEnd _freeModeNoMomentumRelease', () => {
        if (initialized) {
          setHash();
        }
      });
      on('slideChange', () => {
        if (initialized && swiper.params.cssMode) {
          setHash();
        }
      });
    }

    /* eslint no-underscore-dangle: "off" */
    function Autoplay(_ref) {
      let {
        swiper,
        extendParams,
        on,
        emit
      } = _ref;
      let timeout;
      swiper.autoplay = {
        running: false,
        paused: false
      };
      extendParams({
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false,
          pauseOnMouseEnter: false
        }
      });

      function run() {
        const $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        let delay = swiper.params.autoplay.delay;

        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }

        clearTimeout(timeout);
        timeout = nextTick(() => {
          let autoplayResult;

          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper.isBeginning) {
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              emit('autoplay');
            } else {
              stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.isEnd) {
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
            emit('autoplay');
          } else {
            stop();
          }

          if (swiper.params.cssMode && swiper.autoplay.running) run();else if (autoplayResult === false) {
            run();
          }
        }, delay);
      }

      function start() {
        if (typeof timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        emit('autoplayStart');
        run();
        return true;
      }

      function stop() {
        if (!swiper.autoplay.running) return false;
        if (typeof timeout === 'undefined') return false;

        if (timeout) {
          clearTimeout(timeout);
          timeout = undefined;
        }

        swiper.autoplay.running = false;
        emit('autoplayStop');
        return true;
      }

      function pause(speed) {
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (timeout) clearTimeout(timeout);
        swiper.autoplay.paused = true;

        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          run();
        } else {
          ['transitionend', 'webkitTransitionEnd'].forEach(event => {
            swiper.$wrapperEl[0].addEventListener(event, onTransitionEnd);
          });
        }
      }

      function onVisibilityChange() {
        const document = getDocument();

        if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
          pause();
        }

        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
          run();
          swiper.autoplay.paused = false;
        }
      }

      function onTransitionEnd(e) {
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
        swiper.autoplay.paused = false;

        if (!swiper.autoplay.running) {
          stop();
        } else {
          run();
        }
      }

      function onMouseEnter() {
        if (swiper.params.autoplay.disableOnInteraction) {
          stop();
        } else {
          emit('autoplayPause');
          pause();
        }

        ['transitionend', 'webkitTransitionEnd'].forEach(event => {
          swiper.$wrapperEl[0].removeEventListener(event, onTransitionEnd);
        });
      }

      function onMouseLeave() {
        if (swiper.params.autoplay.disableOnInteraction) {
          return;
        }

        swiper.autoplay.paused = false;
        emit('autoplayResume');
        run();
      }

      function attachMouseEvents() {
        if (swiper.params.autoplay.pauseOnMouseEnter) {
          swiper.$el.on('mouseenter', onMouseEnter);
          swiper.$el.on('mouseleave', onMouseLeave);
        }
      }

      function detachMouseEvents() {
        swiper.$el.off('mouseenter', onMouseEnter);
        swiper.$el.off('mouseleave', onMouseLeave);
      }

      on('init', () => {
        if (swiper.params.autoplay.enabled) {
          start();
          const document = getDocument();
          document.addEventListener('visibilitychange', onVisibilityChange);
          attachMouseEvents();
        }
      });
      on('beforeTransitionStart', (_s, speed, internal) => {
        if (swiper.autoplay.running) {
          if (internal || !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.pause(speed);
          } else {
            stop();
          }
        }
      });
      on('sliderFirstMove', () => {
        if (swiper.autoplay.running) {
          if (swiper.params.autoplay.disableOnInteraction) {
            stop();
          } else {
            pause();
          }
        }
      });
      on('touchEnd', () => {
        if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
          run();
        }
      });
      on('destroy', () => {
        detachMouseEvents();

        if (swiper.autoplay.running) {
          stop();
        }

        const document = getDocument();
        document.removeEventListener('visibilitychange', onVisibilityChange);
      });
      Object.assign(swiper.autoplay, {
        pause,
        run,
        start,
        stop
      });
    }

    function Thumb(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs'
        }
      });
      let initialized = false;
      let swiperCreated = false;
      swiper.thumbs = {
        swiper: null
      };

      function onThumbClick() {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const clickedIndex = thumbsSwiper.clickedIndex;
        const clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        let slideToIndex;

        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }

        if (swiper.params.loop) {
          let currentIndex = swiper.activeIndex;

          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }

          const prevIndex = swiper.slides.eq(currentIndex).prevAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          const nextIndex = swiper.slides.eq(currentIndex).nextAll(`[data-swiper-slide-index="${slideToIndex}"]`).eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }

        swiper.slideTo(slideToIndex);
      }

      function init() {
        const {
          thumbs: thumbsParams
        } = swiper.params;
        if (initialized) return false;
        initialized = true;
        const SwiperClass = swiper.constructor;

        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Object.assign(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Object.assign(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (isObject(thumbsParams.swiper)) {
          const thumbsSwiperParams = Object.assign({}, thumbsParams.swiper);
          Object.assign(thumbsSwiperParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          swiper.thumbs.swiper = new SwiperClass(thumbsSwiperParams);
          swiperCreated = true;
        }

        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', onThumbClick);
        return true;
      }

      function update(initial) {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        const slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView; // Activate thumbs

        let thumbsToActivate = 1;
        const thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }

        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);

        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children(`[data-swiper-slide-index="${swiper.realIndex + i}"]`).addClass(thumbActiveClass);
          }
        } else {
          for (let i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + i).addClass(thumbActiveClass);
          }
        }

        const autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        const useOffset = autoScrollOffset && !thumbsSwiper.params.loop;

        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          let currentThumbsIndex = thumbsSwiper.activeIndex;
          let newThumbsIndex;
          let direction;

          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line

              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to


            const prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();
            const nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll(`[data-swiper-slide-index="${swiper.realIndex}"]`).eq(0).index();

            if (typeof prevThumbsIndex === 'undefined') {
              newThumbsIndex = nextThumbsIndex;
            } else if (typeof nextThumbsIndex === 'undefined') {
              newThumbsIndex = prevThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = thumbsSwiper.params.slidesPerGroup > 1 ? nextThumbsIndex : currentThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = nextThumbsIndex;
            } else {
              newThumbsIndex = prevThumbsIndex;
            }

            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }

          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex && thumbsSwiper.params.slidesPerGroup === 1) ;

            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        }
      }

      on('beforeInit', () => {
        const {
          thumbs
        } = swiper.params;
        if (!thumbs || !thumbs.swiper) return;
        init();
        update(true);
      });
      on('slideChange update resize observerUpdate', () => {
        update();
      });
      on('setTransition', (_s, duration) => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;
        thumbsSwiper.setTransition(duration);
      });
      on('beforeDestroy', () => {
        const thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper || thumbsSwiper.destroyed) return;

        if (swiperCreated) {
          thumbsSwiper.destroy();
        }
      });
      Object.assign(swiper.thumbs, {
        init,
        update
      });
    }

    function freeMode(_ref) {
      let {
        swiper,
        extendParams,
        emit,
        once
      } = _ref;
      extendParams({
        freeMode: {
          enabled: false,
          momentum: true,
          momentumRatio: 1,
          momentumBounce: true,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: false,
          minimumVelocity: 0.02
        }
      });

      function onTouchStart() {
        const translate = swiper.getTranslate();
        swiper.setTranslate(translate);
        swiper.setTransition(0);
        swiper.touchEventsData.velocities.length = 0;
        swiper.freeMode.onTouchEnd({
          currentPos: swiper.rtl ? swiper.translate : -swiper.translate
        });
      }

      function onTouchMove() {
        const {
          touchEventsData: data,
          touches
        } = swiper; // Velocity

        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      }

      function onTouchEnd(_ref2) {
        let {
          currentPos
        } = _ref2;
        const {
          params,
          $wrapperEl,
          rtlTranslate: rtl,
          snapGrid,
          touchEventsData: data
        } = swiper; // Time diff

        const touchEndTime = now();
        const timeDiff = touchEndTime - data.touchStartTime;

        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }

          return;
        }

        if (params.freeMode.momentum) {
          if (data.velocities.length > 1) {
            const lastMoveEvent = data.velocities.pop();
            const velocityEvent = data.velocities.pop();
            const distance = lastMoveEvent.position - velocityEvent.position;
            const time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;

            if (Math.abs(swiper.velocity) < params.freeMode.minimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }

          swiper.velocity *= params.freeMode.momentumVelocityRatio;
          data.velocities.length = 0;
          let momentumDuration = 1000 * params.freeMode.momentumRatio;
          const momentumDistance = swiper.velocity * momentumDuration;
          let newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          let doBounce = false;
          let afterBouncePosition;
          const bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeMode.momentumBounceRatio;
          let needsLoopFix;

          if (newPosition < swiper.maxTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeMode.momentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }

            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeMode.sticky) {
            let nextSlide;

            for (let j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            once('transitionEnd', () => {
              swiper.loopFix();
            });
          } // Fix duration


          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }

            if (params.freeMode.sticky) {
              // If freeMode.sticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              const moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              const currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeMode.sticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeMode.momentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(() => {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(() => {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(() => {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            emit('_freeModeNoMomentumRelease');
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);

            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(() => {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeMode.sticky) {
          swiper.slideToClosest();
          return;
        } else if (params.freeMode) {
          emit('_freeModeNoMomentumRelease');
        }

        if (!params.freeMode.momentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
      }

      Object.assign(swiper, {
        freeMode: {
          onTouchStart,
          onTouchMove,
          onTouchEnd
        }
      });
    }

    function Grid(_ref) {
      let {
        swiper,
        extendParams
      } = _ref;
      extendParams({
        grid: {
          rows: 1,
          fill: 'column'
        }
      });
      let slidesNumberEvenToRows;
      let slidesPerRow;
      let numFullColumns;

      const initSlides = slidesLength => {
        const {
          slidesPerView
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid;
        slidesPerRow = slidesNumberEvenToRows / rows;
        numFullColumns = Math.floor(slidesLength / rows);

        if (Math.floor(slidesLength / rows) === slidesLength / rows) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / rows) * rows;
        }

        if (slidesPerView !== 'auto' && fill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, slidesPerView * rows);
        }
      };

      const updateSlide = (i, slide, slidesLength, getDirectionLabel) => {
        const {
          slidesPerGroup,
          spaceBetween
        } = swiper.params;
        const {
          rows,
          fill
        } = swiper.params.grid; // Set slides order

        let newSlideOrderIndex;
        let column;
        let row;

        if (fill === 'row' && slidesPerGroup > 1) {
          const groupIndex = Math.floor(i / (slidesPerGroup * rows));
          const slideIndexInGroup = i - rows * slidesPerGroup * groupIndex;
          const columnsInGroup = groupIndex === 0 ? slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * rows * slidesPerGroup) / rows), slidesPerGroup);
          row = Math.floor(slideIndexInGroup / columnsInGroup);
          column = slideIndexInGroup - row * columnsInGroup + groupIndex * slidesPerGroup;
          newSlideOrderIndex = column + row * slidesNumberEvenToRows / rows;
          slide.css({
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex
          });
        } else if (fill === 'column') {
          column = Math.floor(i / rows);
          row = i - column * rows;

          if (column > numFullColumns || column === numFullColumns && row === rows - 1) {
            row += 1;

            if (row >= rows) {
              row = 0;
              column += 1;
            }
          }
        } else {
          row = Math.floor(i / slidesPerRow);
          column = i - row * slidesPerRow;
        }

        slide.css(getDirectionLabel('margin-top'), row !== 0 ? spaceBetween && `${spaceBetween}px` : '');
      };

      const updateWrapperSize = (slideSize, snapGrid, getDirectionLabel) => {
        const {
          spaceBetween,
          centeredSlides,
          roundLengths
        } = swiper.params;
        const {
          rows
        } = swiper.params.grid;
        swiper.virtualSize = (slideSize + spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / rows) - spaceBetween;
        swiper.$wrapperEl.css({
          [getDirectionLabel('width')]: `${swiper.virtualSize + spaceBetween}px`
        });

        if (centeredSlides) {
          snapGrid.splice(0, snapGrid.length);
          const newSlidesGrid = [];

          for (let i = 0; i < snapGrid.length; i += 1) {
            let slidesGridItem = snapGrid[i];
            if (roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }

          snapGrid.push(...newSlidesGrid);
        }
      };

      swiper.grid = {
        initSlides,
        updateSlide,
        updateWrapperSize
      };
    }

    function appendSlide(slides) {
      const swiper = this;
      const {
        $wrapperEl,
        params
      } = swiper;

      if (params.loop) {
        swiper.loopDestroy();
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }
    }

    function prependSlide(slides) {
      const swiper = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper;

      if (params.loop) {
        swiper.loopDestroy();
      }

      let newActiveIndex = activeIndex + 1;

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }

      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      const swiper = this;
      const {
        $wrapperEl,
        params,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
      }

      const baseLength = swiper.slides.length;

      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }

      let newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      const slidesBuffer = [];

      for (let i = baseLength - 1; i >= index; i -= 1) {
        const currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (typeof slides === 'object' && 'length' in slides) {
        for (let i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (let i = 0; i < slidesBuffer.length; i += 1) {
        $wrapperEl.append(slidesBuffer[i]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      const swiper = this;
      const {
        params,
        $wrapperEl,
        activeIndex
      } = swiper;
      let activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children(`.${params.slideClass}`);
      }

      let newActiveIndex = activeIndexBuffer;
      let indexToRemove;

      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (let i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!params.observer) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      const swiper = this;
      const slidesIndexes = [];

      for (let i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper.removeSlide(slidesIndexes);
    }

    function Manipulation(_ref) {
      let {
        swiper
      } = _ref;
      Object.assign(swiper, {
        appendSlide: appendSlide.bind(swiper),
        prependSlide: prependSlide.bind(swiper),
        addSlide: addSlide.bind(swiper),
        removeSlide: removeSlide.bind(swiper),
        removeAllSlides: removeAllSlides.bind(swiper)
      });
    }

    function effectInit(params) {
      const {
        effect,
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams,
        perspective,
        recreateShadows,
        getEffectParams
      } = params;
      on('beforeInit', () => {
        if (swiper.params.effect !== effect) return;
        swiper.classNames.push(`${swiper.params.containerModifierClass}${effect}`);

        if (perspective && perspective()) {
          swiper.classNames.push(`${swiper.params.containerModifierClass}3d`);
        }

        const overwriteParamsResult = overwriteParams ? overwriteParams() : {};
        Object.assign(swiper.params, overwriteParamsResult);
        Object.assign(swiper.originalParams, overwriteParamsResult);
      });
      on('setTranslate', () => {
        if (swiper.params.effect !== effect) return;
        setTranslate();
      });
      on('setTransition', (_s, duration) => {
        if (swiper.params.effect !== effect) return;
        setTransition(duration);
      });
      on('transitionEnd', () => {
        if (swiper.params.effect !== effect) return;

        if (recreateShadows) {
          if (!getEffectParams || !getEffectParams().slideShadows) return; // remove shadows

          swiper.slides.each(slideEl => {
            const $slideEl = swiper.$(slideEl);
            $slideEl.find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').remove();
          }); // create new one

          recreateShadows();
        }
      });
      let requireUpdateOnVirtual;
      on('virtualUpdate', () => {
        if (swiper.params.effect !== effect) return;

        if (!swiper.slides.length) {
          requireUpdateOnVirtual = true;
        }

        requestAnimationFrame(() => {
          if (requireUpdateOnVirtual && swiper.slides && swiper.slides.length) {
            setTranslate();
            requireUpdateOnVirtual = false;
          }
        });
      });
    }

    function effectTarget(effectParams, $slideEl) {
      if (effectParams.transformEl) {
        return $slideEl.find(effectParams.transformEl).css({
          'backface-visibility': 'hidden',
          '-webkit-backface-visibility': 'hidden'
        });
      }

      return $slideEl;
    }

    function effectVirtualTransitionEnd(_ref) {
      let {
        swiper,
        duration,
        transformEl,
        allSlides
      } = _ref;
      const {
        slides,
        activeIndex,
        $wrapperEl
      } = swiper;

      if (swiper.params.virtualTranslate && duration !== 0) {
        let eventTriggered = false;
        let $transitionEndTarget;

        if (allSlides) {
          $transitionEndTarget = transformEl ? slides.find(transformEl) : slides;
        } else {
          $transitionEndTarget = transformEl ? slides.eq(activeIndex).find(transformEl) : slides.eq(activeIndex);
        }

        $transitionEndTarget.transitionEnd(() => {
          if (eventTriggered) return;
          if (!swiper || swiper.destroyed) return;
          eventTriggered = true;
          swiper.animating = false;
          const triggerEvents = ['webkitTransitionEnd', 'transitionend'];

          for (let i = 0; i < triggerEvents.length; i += 1) {
            $wrapperEl.trigger(triggerEvents[i]);
          }
        });
      }
    }

    function EffectFade(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        fadeEffect: {
          crossFade: false,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          slides
        } = swiper;
        const params = swiper.params.fadeEffect;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = swiper.slides.eq(i);
          const offset = $slideEl[0].swiperSlideOffset;
          let tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          let ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }

          const slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.css({
            opacity: slideOpacity
          }).transform(`translate3d(${tx}px, ${ty}px, 0px)`);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.fadeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides: true
        });
      };

      effectInit({
        effect: 'fade',
        swiper,
        on,
        setTranslate,
        setTransition,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCube(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      });

      const createSlideShadows = ($slideEl, progress, isHorizontal) => {
        let shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'left' : 'top'}"></div>`);
          $slideEl.append(shadowBefore);
        }

        if (shadowAfter.length === 0) {
          shadowAfter = $(`<div class="swiper-slide-shadow-${isHorizontal ? 'right' : 'bottom'}"></div>`);
          $slideEl.append(shadowAfter);
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      };

      const recreateShadows = () => {
        // create new ones
        const isHorizontal = swiper.isHorizontal();
        swiper.slides.each(slideEl => {
          const progress = Math.max(Math.min(slideEl.progress, 1), -1);
          createSlideShadows($(slideEl), progress, isHorizontal);
        });
      };

      const setTranslate = () => {
        const {
          $el,
          $wrapperEl,
          slides,
          width: swiperWidth,
          height: swiperHeight,
          rtlTranslate: rtl,
          size: swiperSize,
          browser
        } = swiper;
        const params = swiper.params.cubeEffect;
        const isHorizontal = swiper.isHorizontal();
        const isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        let wrapperRotate = 0;
        let $cubeShadowEl;

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }

            $cubeShadowEl.css({
              height: `${swiperWidth}px`
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let slideIndex = i;

          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }

          let slideAngle = slideIndex * 90;
          let round = Math.floor(slideAngle / 360);

          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }

          const progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          let tx = 0;
          let ty = 0;
          let tz = 0;

          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }

          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          const transform = `rotateX(${isHorizontal ? 0 : -slideAngle}deg) rotateY(${isHorizontal ? slideAngle : 0}deg) translate3d(${tx}px, ${ty}px, ${tz}px)`;

          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }

          $slideEl.transform(transform);

          if (params.slideShadows) {
            createSlideShadows($slideEl, progress, isHorizontal);
          }
        }

        $wrapperEl.css({
          '-webkit-transform-origin': `50% 50% -${swiperSize / 2}px`,
          'transform-origin': `50% 50% -${swiperSize / 2}px`
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform(`translate3d(0px, ${swiperWidth / 2 + params.shadowOffset}px, ${-swiperWidth / 2}px) rotateX(90deg) rotateZ(0deg) scale(${params.shadowScale})`);
          } else {
            const shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            const multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            const scale1 = params.shadowScale;
            const scale2 = params.shadowScale / multiplier;
            const offset = params.shadowOffset;
            $cubeShadowEl.transform(`scale3d(${scale1}, 1, ${scale2}) translate3d(0px, ${swiperHeight / 2 + offset}px, ${-swiperHeight / 2 / scale2}px) rotateX(-90deg)`);
          }
        }

        const zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform(`translate3d(0px,0,${zFactor}px) rotateX(${swiper.isHorizontal() ? 0 : wrapperRotate}deg) rotateY(${swiper.isHorizontal() ? -wrapperRotate : 0}deg)`);
        $wrapperEl[0].style.setProperty('--swiper-cube-translate-z', `${zFactor}px`);
      };

      const setTransition = duration => {
        const {
          $el,
          slides
        } = swiper;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      };

      effectInit({
        effect: 'cube',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper.params.cubeEffect,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: false,
          virtualTranslate: true
        })
      });
    }

    function createShadow(params, $slideEl, side) {
      const shadowClass = `swiper-slide-shadow${side ? `-${side}` : ''}`;
      const $shadowContainer = params.transformEl ? $slideEl.find(params.transformEl) : $slideEl;
      let $shadowEl = $shadowContainer.children(`.${shadowClass}`);

      if (!$shadowEl.length) {
        $shadowEl = $(`<div class="swiper-slide-shadow${side ? `-${side}` : ''}"></div>`);
        $shadowContainer.append($shadowEl);
      }

      return $shadowEl;
    }

    function EffectFlip(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        flipEffect: {
          slideShadows: true,
          limitRotation: true,
          transformEl: null
        }
      });

      const createSlideShadows = ($slideEl, progress, params) => {
        let shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        let shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

        if (shadowBefore.length === 0) {
          shadowBefore = createShadow(params, $slideEl, swiper.isHorizontal() ? 'left' : 'top');
        }

        if (shadowAfter.length === 0) {
          shadowAfter = createShadow(params, $slideEl, swiper.isHorizontal() ? 'right' : 'bottom');
        }

        if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
        if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
      };

      const recreateShadows = () => {
        // Set shadows
        const params = swiper.params.flipEffect;
        swiper.slides.each(slideEl => {
          const $slideEl = $(slideEl);
          let progress = $slideEl[0].progress;

          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min(slideEl.progress, 1), -1);
          }

          createSlideShadows($slideEl, progress, params);
        });
      };

      const setTranslate = () => {
        const {
          slides,
          rtlTranslate: rtl
        } = swiper;
        const params = swiper.params.flipEffect;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          let progress = $slideEl[0].progress;

          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }

          const offset = $slideEl[0].swiperSlideOffset;
          const rotate = -180 * progress;
          let rotateY = rotate;
          let rotateX = 0;
          let tx = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (params.slideShadows) {
            createSlideShadows($slideEl, progress, params);
          }

          const transform = `translate3d(${tx}px, ${ty}px, 0px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.flipEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl
        });
      };

      effectInit({
        effect: 'flip',
        swiper,
        on,
        setTranslate,
        setTransition,
        recreateShadows,
        getEffectParams: () => swiper.params.flipEffect,
        perspective: () => true,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: true,
          spaceBetween: 0,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCoverflow(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true,
          transformEl: null
        }
      });

      const setTranslate = () => {
        const {
          width: swiperWidth,
          height: swiperHeight,
          slides,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.coverflowEffect;
        const isHorizontal = swiper.isHorizontal();
        const transform = swiper.translate;
        const center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        const rotate = isHorizontal ? params.rotate : -params.rotate;
        const translate = params.depth; // Each slide offset from center

        for (let i = 0, length = slides.length; i < length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideSize = slidesSizesGrid[i];
          const slideOffset = $slideEl[0].swiperSlideOffset;
          const centerOffset = (center - slideOffset - slideSize / 2) / slideSize;
          const offsetMultiplier = typeof params.modifier === 'function' ? params.modifier(centerOffset) : centerOffset * params.modifier;
          let rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          let rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

          let translateZ = -translate * Math.abs(offsetMultiplier);
          let stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }

          let translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          let translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          let scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values

          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          const slideTransform = `translate3d(${translateX}px,${translateY}px,${translateZ}px)  rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

          if (params.slideShadows) {
            // Set shadows
            let $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            let $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = createShadow(params, $slideEl, isHorizontal ? 'left' : 'top');
            }

            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = createShadow(params, $slideEl, isHorizontal ? 'right' : 'bottom');
            }

            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.coverflowEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      };

      effectInit({
        effect: 'coverflow',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true
        })
      });
    }

    function EffectCreative(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: false,
          progressMultiplier: 1,
          perspective: true,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1
          }
        }
      });

      const getTranslateValue = value => {
        if (typeof value === 'string') return value;
        return `${value}px`;
      };

      const setTranslate = () => {
        const {
          slides,
          $wrapperEl,
          slidesSizesGrid
        } = swiper;
        const params = swiper.params.creativeEffect;
        const {
          progressMultiplier: multiplier
        } = params;
        const isCenteredSlides = swiper.params.centeredSlides;

        if (isCenteredSlides) {
          const margin = slidesSizesGrid[0] / 2 - swiper.params.slidesOffsetBefore || 0;
          $wrapperEl.transform(`translateX(calc(50% - ${margin}px))`);
        }

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max($slideEl[0].progress, -params.limitProgress), params.limitProgress);
          let originalProgress = progress;

          if (!isCenteredSlides) {
            originalProgress = Math.min(Math.max($slideEl[0].originalProgress, -params.limitProgress), params.limitProgress);
          }

          const offset = $slideEl[0].swiperSlideOffset;
          const t = [swiper.params.cssMode ? -offset - swiper.translate : -offset, 0, 0];
          const r = [0, 0, 0];
          let custom = false;

          if (!swiper.isHorizontal()) {
            t[1] = t[0];
            t[0] = 0;
          }

          let data = {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            scale: 1,
            opacity: 1
          };

          if (progress < 0) {
            data = params.next;
            custom = true;
          } else if (progress > 0) {
            data = params.prev;
            custom = true;
          } // set translate


          t.forEach((value, index) => {
            t[index] = `calc(${value}px + (${getTranslateValue(data.translate[index])} * ${Math.abs(progress * multiplier)}))`;
          }); // set rotates

          r.forEach((value, index) => {
            r[index] = data.rotate[index] * Math.abs(progress * multiplier);
          });
          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const translateString = t.join(', ');
          const rotateString = `rotateX(${r[0]}deg) rotateY(${r[1]}deg) rotateZ(${r[2]}deg)`;
          const scaleString = originalProgress < 0 ? `scale(${1 + (1 - data.scale) * originalProgress * multiplier})` : `scale(${1 - (1 - data.scale) * originalProgress * multiplier})`;
          const opacityString = originalProgress < 0 ? 1 + (1 - data.opacity) * originalProgress * multiplier : 1 - (1 - data.opacity) * originalProgress * multiplier;
          const transform = `translate3d(${translateString}) ${rotateString} ${scaleString}`; // Set shadows

          if (custom && data.shadow || !custom) {
            let $shadowEl = $slideEl.children('.swiper-slide-shadow');

            if ($shadowEl.length === 0 && data.shadow) {
              $shadowEl = createShadow(params, $slideEl);
            }

            if ($shadowEl.length) {
              const shadowOpacity = params.shadowPerProgress ? progress * (1 / params.limitProgress) : progress;
              $shadowEl[0].style.opacity = Math.min(Math.max(Math.abs(shadowOpacity), 0), 1);
            }
          }

          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform).css({
            opacity: opacityString
          });

          if (data.origin) {
            $targetEl.css('transform-origin', data.origin);
          }
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.creativeEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl,
          allSlides: true
        });
      };

      effectInit({
        effect: 'creative',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => swiper.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    function EffectCards(_ref) {
      let {
        swiper,
        extendParams,
        on
      } = _ref;
      extendParams({
        cardsEffect: {
          slideShadows: true,
          transformEl: null,
          rotate: true
        }
      });

      const setTranslate = () => {
        const {
          slides,
          activeIndex
        } = swiper;
        const params = swiper.params.cardsEffect;
        const {
          startTranslate,
          isTouched
        } = swiper.touchEventsData;
        const currentTranslate = swiper.translate;

        for (let i = 0; i < slides.length; i += 1) {
          const $slideEl = slides.eq(i);
          const slideProgress = $slideEl[0].progress;
          const progress = Math.min(Math.max(slideProgress, -4), 4);
          let offset = $slideEl[0].swiperSlideOffset;

          if (swiper.params.centeredSlides && !swiper.params.cssMode) {
            swiper.$wrapperEl.transform(`translateX(${swiper.minTranslate()}px)`);
          }

          if (swiper.params.centeredSlides && swiper.params.cssMode) {
            offset -= slides[0].swiperSlideOffset;
          }

          let tX = swiper.params.cssMode ? -offset - swiper.translate : -offset;
          let tY = 0;
          const tZ = -100 * Math.abs(progress);
          let scale = 1;
          let rotate = -2 * progress;
          let tXAdd = 8 - Math.abs(progress) * 0.75;
          const slideIndex = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.from + i : i;
          const isSwipeToNext = (slideIndex === activeIndex || slideIndex === activeIndex - 1) && progress > 0 && progress < 1 && (isTouched || swiper.params.cssMode) && currentTranslate < startTranslate;
          const isSwipeToPrev = (slideIndex === activeIndex || slideIndex === activeIndex + 1) && progress < 0 && progress > -1 && (isTouched || swiper.params.cssMode) && currentTranslate > startTranslate;

          if (isSwipeToNext || isSwipeToPrev) {
            const subProgress = (1 - Math.abs((Math.abs(progress) - 0.5) / 0.5)) ** 0.5;
            rotate += -28 * progress * subProgress;
            scale += -0.5 * subProgress;
            tXAdd += 96 * subProgress;
            tY = `${-25 * subProgress * Math.abs(progress)}%`;
          }

          if (progress < 0) {
            // next
            tX = `calc(${tX}px + (${tXAdd * Math.abs(progress)}%))`;
          } else if (progress > 0) {
            // prev
            tX = `calc(${tX}px + (-${tXAdd * Math.abs(progress)}%))`;
          } else {
            tX = `${tX}px`;
          }

          if (!swiper.isHorizontal()) {
            const prevY = tY;
            tY = tX;
            tX = prevY;
          }

          const scaleString = progress < 0 ? `${1 + (1 - scale) * progress}` : `${1 - (1 - scale) * progress}`;
          const transform = `
        translate3d(${tX}, ${tY}, ${tZ}px)
        rotateZ(${params.rotate ? rotate : 0}deg)
        scale(${scaleString})
      `;

          if (params.slideShadows) {
            // Set shadows
            let $shadowEl = $slideEl.find('.swiper-slide-shadow');

            if ($shadowEl.length === 0) {
              $shadowEl = createShadow(params, $slideEl);
            }

            if ($shadowEl.length) $shadowEl[0].style.opacity = Math.min(Math.max((Math.abs(progress) - 0.5) / 0.5, 0), 1);
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(slideProgress)) + slides.length;
          const $targetEl = effectTarget(params, $slideEl);
          $targetEl.transform(transform);
        }
      };

      const setTransition = duration => {
        const {
          transformEl
        } = swiper.params.cardsEffect;
        const $transitionElements = transformEl ? swiper.slides.find(transformEl) : swiper.slides;
        $transitionElements.transition(duration).find('.swiper-slide-shadow').transition(duration);
        effectVirtualTransitionEnd({
          swiper,
          duration,
          transformEl
        });
      };

      effectInit({
        effect: 'cards',
        swiper,
        on,
        setTranslate,
        setTransition,
        perspective: () => true,
        overwriteParams: () => ({
          watchSlidesProgress: true,
          virtualTranslate: !swiper.params.cssMode
        })
      });
    }

    // Swiper Class
    const modules = [Virtual, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar, Parallax, Zoom, Lazy, Controller, A11y, History, HashNavigation, Autoplay, Thumb, freeMode, Grid, Manipulation, EffectFade, EffectCube, EffectFlip, EffectCoverflow, EffectCreative, EffectCards];
    Swiper.use(modules);

    return Swiper;

}));
//# sourceMappingURL=swiper-bundle.js.map