const isJson = (myObject): boolean => typeof myObject === 'object' && myObject !== null;
const replaceWithoutCaseSensitive = (jsonObject: object, keyToSearch: string, newValue: string | number): object => {
    if (!isJson(jsonObject)) {
        return jsonObject;
    }
    Object.keys(jsonObject).map((key) => {
        if (key.toUpperCase() === keyToSearch.toUpperCase()) {
            jsonObject[key] = newValue;
        } else {
            replaceWithoutCaseSensitive(jsonObject[key], keyToSearch, newValue);
        }
    });
    return jsonObject;
};
const replace = (jsonObject: object, keyToSearch: string, newValue: string | number): object => {
    if (!isJson(jsonObject)) {
        return jsonObject;
    }
    Object.keys(jsonObject).map((key) => {
        if (key === keyToSearch) {
            jsonObject[key] = newValue;
        } else {
            replace(jsonObject[key], keyToSearch, newValue);
        }
    });
    return jsonObject;
};

export {
    replace,
    replaceWithoutCaseSensitive,
};
