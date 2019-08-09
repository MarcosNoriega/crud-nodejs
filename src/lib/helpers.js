const helpers = {};

helpers.disable = (v1, v2) => {
    if (v1 == v2) {
        return 'yes'
    }else {
        return 'no'
    }

};

helpers.for = (from, to, incr, block) => { 
    var accum = ''; 
    for(var i = from; i < to; i += incr) 
     accum += block.fn(i); 
    return accum; 
}; 

module.exports = helpers;