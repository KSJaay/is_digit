function is_Digit(value){
    switch (typeof value){
        case 'string': {
            if(/^\d$/.test(value)){
                return true;
            };
            return false;
        }
        case 'number': {
            return true;
        }
        case 'bigint': {
            return true;
        }
        case 'object': {
            if(Array.isArray(value)){
                let check = value.filter(x => !(/^\d$/.test(x)));
                if(check.length > 0) return false;
                return true;
            };
            let keys = Object.keys(value).filter(x => !(/^\d$/.test(x)));
            let values = Object.values(value).filter(x => !(/^\d$/.test(x)));
            if(keys.length > 0 || values.length > 0){
                return false;
            };

            return true;
        }
        default: {
            return false;
        }
    }
};

function is_Object_Digits(data, key, value){
    if(typeof data !== 'object' || (Array.isArray(data) === true)){
        return false;
    };

    let keys = !key ? [] : Object.keys(data).filter(x => !(/^\d$/.test(x)));
    let values = !value ? [] : Object.values(data).filter(x => !(/^\d$/.test(x)));

    if(keys.length > 0 || values.length > 0){
        return false;
    };

    return true;
};

module.exports = {
    is_Digit: is_Digit,
    is_Object_Digit: is_Object_Digits
}