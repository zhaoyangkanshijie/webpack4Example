//参考：https://juejin.im/post/5cf7c6c0f265da1bd1464728

class CopyrightWebpackPlugin {
    //接收传参,options为参数对象
    constructor(options) {
        console.log(options);
    }

    apply(compiler) {
        //compiler有许多钩子，compiler.hooks.emit代表生成资源到output目录之前的钩子
        //异步操作,跟着tapAsync
        compiler.hooks.emit.tapAsync('CopyrightWebpackPlugin', (compilation,cb) => {
            //运行debug模式可在浏览器调试
            //debugger;
            //assets添加文件
            compilation.assets['copyright.txt'] = {
                //source代表文件中的内容
                source: function() {
                    return 'copyright';
                },
                //size代表文件大小
                size: function() {
                    return 9;
                }
            }
            cb();
        });
        //同步写法
        //异步操作,跟着tap
        compiler.hooks.compile.tap('CopyrightWebpackPlugin', (compilation) => {
            console.log(compiler);
        })
    }
}

module.exports = CopyrightWebpackPlugin;