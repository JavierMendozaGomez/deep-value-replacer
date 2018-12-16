const isJson = (myObject: object): boolean => typeof myObject === 'object' && myObject !== null;
const replaceWithoutCaseSensitive = (jsonObject: object, keyToSearch: string, newValue: string | number): object => {
    if (!isJson(jsonObject)) {
        return jsonObject;
    }
    Object.keys(jsonObject).map((key) => {
        if (key.toUpperCase() === keyToSearch.toUpperCase()) {
            (<any>jsonObject)[key] = newValue;
        } else {
            replaceWithoutCaseSensitive((<any>jsonObject)[key], keyToSearch, newValue);
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
            (<any>jsonObject)[key] = newValue;
        } else {
            replace((<any>jsonObject)[key], keyToSearch, newValue);
        }
    });
    return jsonObject;
};

export {
    replace,
    replaceWithoutCaseSensitive,
};
