require(['jquery', 'common', 'template', 'waves', 'bootstrapDateTimePicker', 'bootstrapDateTimePickerLocal_zh_CN'], function ($, common, template, waves, bootstrapDateTimePicker, bootstrapDateTimePickerLocal_zh_CN) {
    /**
     *
     * @constructor
     */
    function HomePage() {
        var args = arguments.length ? arguments.length[0] : arguments;
        this.ACTIVE = args['ACTIVE'] ? args['ACTIVE'] : 'active';
        this.NAV_BAR = args['NAV_BAR'] ? args['NAV_BAR'] : '.nav-bar';
        this.NAV_ITEM = args['NAV_ITEM'] ? args['NAV_ITEM'] : '.nav-item';

        this.init();
    };

    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.init = function () {
        this.wavesInit();
        this.showSubNavigation();

        $('.form-date').datetimepicker({
            language: 'zh-CN',
            format: 'yyyy-mm-dd',
            minView: 'month',
            autoclose: true,
        });
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.wavesInit = function () {
        //Set Waves
        waves.attach('h3.nav-title,h4.nav-title', ['waves-block']);
        waves.init();
        return this;
    };
    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.dateTimePickerInit = function () {
        return this;
    };

    /**
     *
     * @returns {HomePage}
     */
    HomePage.prototype.showSubNavigation = function () {
        var _this = this;
        $(document).on('click', this.NAV_ITEM, function (e) {
            e.stopPropagation();
            var subNavigation = $(this).find(_this.NAV_BAR);
            if (subNavigation[0]) {
                $(_this.NAV_ITEM).not(this).removeClass(_this.ACTIVE);
                $(_this.NAV_ITEM).not(this).find(_this.NAV_BAR).slideUp();
                if ($(this).hasClass(_this.ACTIVE)) {
                    subNavigation.slideUp('fast');
                    $(this).removeClass(_this.ACTIVE);
                } else {
                    subNavigation.slideDown('fast');
                    $(this).addClass(_this.ACTIVE);
                }
            }
        });
        return this;
    };

    /**
     *
     * @type {HomePage}
     */
    var homePage = new HomePage();
});
