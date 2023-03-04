const fs = require('fs');

function search(name) {
    const source = fs.readFileSync('./growth');
    var results = [];
    var index;
    var entry;
    // const jsonList = require("./growth.json")

    // const source = JSON.parse(jsonList)
    name = name.toUpperCase();
    for (index = 0; index < source.length; ++index) {
        entry = source[index];
        if (entry && entry.name && entry.name.toUpperCase().indexOf(name) !== -1) {
            results.push(entry);
        }
    }

    return results;
}

module.exports = {search}