'use strict';

// ##########################################################
// Vars
// ##########################################################

var last_id = 0;
var holy_days = [];

// ##########################################################
// Functions
// ##########################################################

function get_uid(max_id) {
    let uid = max_id + 1;
    last_id = uid;
    return uid;
}

class HolyDay {
    constructor(name, date, obligation = false, feast = undefined, saints = undefined) {
        this.id = get_uid(last_id);
        this.name = name;
        this.date = date;
        this.obigation = obligation; // boolean
        this.feast_or_fast = feast;
        this.saints = saints; // array
    }
}

function new_holy_day(name, date, obligation = false, feast = undefined, saints = undefined) {
    var holy_day = new HolyDay(name, date, obligation, feast, saints);
    console.log('Holy Day: ');
    console.log(holy_day);
    holy_days.push(holy_day);
    console.log('Holy Days: ');
    console.log(holy_days);
}

// ##########################################################
// Script
// ##########################################################


date = new Date(2019, 0, 1);
date2 = new Date(2019, 3, 4);

new_holy_day("Feast of Saint Ithumbert", date);
new_holy_day("Solemnity of the Greater Heart of Two Solstices", date2);
