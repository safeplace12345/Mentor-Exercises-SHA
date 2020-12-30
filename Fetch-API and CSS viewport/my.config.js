export default [{
    input: "src/script.js",
    output: {
        file: "dist/base.js",
        format: "iife"
    }
}, {
    input : "src/script-2.js",
    output : [
        {
            file: "#.cjs",
            format: "cjs"
        },{
            file: '#.js',
            format : "iife"
        },{
            file : '#.js',
            format: "es"
        }
    ]
}]