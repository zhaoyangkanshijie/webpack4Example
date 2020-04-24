//参考：https://juejin.im/post/5cf6777ff265da1bcd37c56f

const loaderUtils = require('loader-utils');

//这个函数不能是箭头函数，因为webpack调用loader的时候会对this做一些变更
module.exports = function(source) {
    //webpack配置文件参数对象
    //console.log(this.query);
    //官方推荐我们使用loader-utils来传参
    const options = loaderUtils.getOptions(this);
    const callback = this.async();//调用async才能进行异步操作
    setTimeout(() => {
        const result = source.replace('world', options.name);
        //return source.replace('world', options.name);
        //返回结果
        // this.callback(
        //     err: Error | null,//错误
        //     content: string | Buffer,//结果
        //     sourceMap?: SourceMap,//sourcemap
        //     meta?: any//任何内容（比如元数据）
        // );
        callback(null, result);
    }, 1000);
}