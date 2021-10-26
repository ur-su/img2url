const { default: tinify } = require("tinify/lib/tinify");
tinify.key = "zt4Kwjfd6t60YtJzsdSrxHqHb41gj326";
function compressBuffer(sourceData,key = 'xxx'){
    return new Promise((resolve,reject)=>{
        tinify.key = key;
        tinify.fromBuffer(sourceData).toBuffer(function(err,resultData){
            if(resultData){
                resolve(resultData)
            }
            if(err){
                reject(err);
            }
        })
    })
}