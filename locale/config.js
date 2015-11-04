// Custom French Moment.js Localization
// Based on: https://github.com/moment/moment/blob/develop/locale/fr.js

moment.locale('it', {
  months : 'gennaio_febbario_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split('_'),
  monthsShort : 'gen._feb._mar._apr._mag._giu._lug._ago._set._ott._nov._dic.'.split('_'),
  weekdays : 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato'.split('_'),
  weekdaysShort : 'dom._lun._mar._mer._gio._ven._sab.'.split('_'),
  weekdaysMin : 'Do_Lu_Ma_Me_Gi_Ve_Sa'.split('_'),
  longDateFormat : {
    LT : 'HH:mm',
    LTS : 'HH:mm:ss',
    L : 'DD/MM/YYYY', // Swiss French uses DD.MM.YYYY. Canadian French uses YYYY-MM-DD.
    LL : 'D MMMM YYYY',
    LLL : 'D MMMM YYYY HH:mm',
    LLLL : 'dddd D MMMM YYYY HH:mm'
  },
  calendar : {
    sameDay: '[Oggi alle] LT',
    nextDay: '[Domani alle] LT',
    nextWeek: 'dddd [alle] LT',
    lastDay: '[Ieri alle] LT',
    lastWeek: 'dddd [alle] LT',
    sameElse: 'L'
  },
  relativeTime : {
    future : 'in %s',
    past : 'li ha %s',
    s : 'qualche secondo',
    m : 'un minuto',
    mm : '%d minuti',
    h : 'un ora',
    hh : '%d ore',
    d : 'un giorno',
    dd : '%d giorni',
    M : 'un mese',
    MM : '%d mesi',
    y : 'un anno',
    yy : '%d anni'
  },
  ordinalParse: /\d{1,2}(er|e)/,
  ordinal : function (number) {
    return number + (number === 1 ? 'er' : 'e');
  },
  week : {
    dow : 1, // Monday is the first day of the week. Canadian French uses 0, because Sunday is the first day of the week.
    doy : 4  // The week that contains Jan 4th is the first week of the year. Canadian French uses 6, because the week that contains Jan 1st is the first week of the year.
  }
});
