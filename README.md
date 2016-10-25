# react-slide
使用webpack依赖管理的基于react开发的轮播图组件

安装依赖
* npm install

运行
* npm start

打包（会把`index.html`和`image`文件夹拷贝到`/dist`）
* npm dist

如果需要更换图片，直接进入`src/image`替换文件，在`src`目录下运行`node readImage.js`会重写
`Image.json`文件，然后再重复上述步骤即可

由于一开始使用本地下载的`react`和`react-dom`依赖后发现发布后的文件太大了，有160KB，这是
因为本身`react`和`react-dom`的文件太大了，所以后期使用了cdn加速服务的`react`和`react-dom`，
虽然大小并没有改变，但可以有效避免以后的重复请求，也可以加快请求速度
