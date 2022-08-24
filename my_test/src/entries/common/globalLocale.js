export default class GlobalLocale {
  static locale = null;
  static setLocale(locale) {
    this.locale = locale;
  }
  static getLocale() {
    return this.locale;
  }
}
