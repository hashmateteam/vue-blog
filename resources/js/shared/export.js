const files = require.context('.', true, /^.*\.js$/)
const modules = []

files.keys().forEach((key) => {
    //console.log(key);
    if (key.includes('index.js')) {
        console.log(key.replace(/(\.\/|\.js)/g, ''));
        console.log(files(key).default);
        return
        modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
    } else {
        //console.log(key)
    }
})

export default modules