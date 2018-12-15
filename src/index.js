const isJson = (myObject) => typeof myObject === 'object' && myObject !== null;
const replaceWithoutCaseSensitive = (jsonObject, keyToSearch, newValue) => {
    if (!isJson(jsonObject)) {
        return jsonObject;
    }
    Object.keys(jsonObject).map((key) => {
        if (key.toUpperCase() === keyToSearch.toUpperCase()) {
            jsonObject[key] = newValue;
        }
        else {
            replaceWithoutCaseSensitive(jsonObject[key], keyToSearch, newValue);
        }
    });
    return jsonObject;
};
const replace = (jsonObject, keyToSearch, newValue) => {
    if (!isJson(jsonObject)) {
        return jsonObject;
    }
    Object.keys(jsonObject).map((key) => {
        if (key === keyToSearch) {
            jsonObject[key] = newValue;
        }
        else {
            replace(jsonObject[key], keyToSearch, newValue);
        }
    });
    return jsonObject;
};
export { replace, replaceWithoutCaseSensitive, };
