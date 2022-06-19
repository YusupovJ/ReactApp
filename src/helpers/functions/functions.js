import { useEffect, useState, useRef } from "react";

/*------------------------------------*/

// Конвертация из px в rem em и %

export function rem(num) {
	return num / 16 + "rem";
}

export function em(num, fz = 16) {
	return num / fz + "em";
}

export function per(num, parent) {
	return (num * 100) / parent + "%";
}

/*------------------------------------*/

// Проверка на тачскрин

export let isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows()
		);
	},
};
