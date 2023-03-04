
function searchKtable(name) {
    
    const plantsKtable = [
        {crop:'Broccoli', Kini:0.7, Kmid:1.05, Kend:0.95, MaxH:0.3},
        {crop:'Potato', Kini:0.5, Kmid:1.05, Kend:0.95, MaxH:0.4},
        {crop:'Corn', Kini:0.7, Kmid:1.15, Kend:1.05, MaxH:1.5},
        {crop:'Zucchini', Kini:0.5, Kmid:0.95, Kend:0.75, MaxH:0.3},
        {crop:'Pineapple', Kini:0.50, Kmid:0.30, Kend:0.30, MaxH:0.6}
    ];

    const plantkinfo = plantsKtable.find(e => e.crop.toUpperCase() == name.toUpperCase());



    return plantkinfo
}

function searchGtable(name){
    const plantsGtable = [
        {crop:'Broccoli', ini:35, dev: 45, mid:40, late:15, total:135},
        {crop:'Potato', ini:25, dev: 30, mid:30, late:30, total:115},
        {crop:'Corn', ini:20, dev: 20, mid:30, late:10, total:80},
        {crop:'Zucchini', ini:25, dev: 35, mid:25, late:15, total:100},
        {crop:'Pineapple', ini:60, dev: 120, mid:600, late:10, total:790}
    ];

    const plantGinfo = plantsGtable.find(e => e.crop.toUpperCase() == name.toUpperCase());

    return plantGinfo
}

function calcTrueK(name, days){
    const kinfo = searchKtable(name)
    const ginfo = searchGtable(name)
    var kval
    const inidays = ginfo.ini
    const devdays = ginfo.dev
    const middays = ginfo.mid
    const latedays = ginfo.late
    const totaldays = ginfo.total
    if(0<days && days<=inidays){
        kval = kinfo.Kini
    }
    else if(days>inidays && days<=inidays+devdays){
        kval = kinfo.Kini - kinfo.Kmid


    }
    else if(days>inidays+devdays && days<=inidays+devdays+middays){
        kval = kinfo.Kmid
    }
    else if(days>inidays+devdays+middays && days<=inidays+devdays+middays+latedays){
        kval = abs(kinfo.Kmid - kinfo.Kend)
    }
    else{
        kval = 404
    }
    return kval

}

module.exports = {calcTrueK}

