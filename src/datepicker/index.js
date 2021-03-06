require('../dateparser');
require('../isClass');
require('../position');
require('../../template/datepicker/datepicker.html.js');
require('../../template/datepicker/day.html.js');
require('../../template/datepicker/month.html.js');
require('../../template/datepicker/year.html.js');
require('../../template/datepicker/popup.html.js');
require('./datepicker');

require('./datepicker.css');

var MODULE_NAME = 'ui.bootstrap.module.datepicker';

angular.module(MODULE_NAME, ['ui.bootstrap.datepicker', 'uib/template/datepicker/datepicker.html', 'uib/template/datepicker/day.html', 'uib/template/datepicker/month.html', 'uib/template/datepicker/year.html', 'uib/template/datepicker/popup.html']);

module.exports = MODULE_NAME;
