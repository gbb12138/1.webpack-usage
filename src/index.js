// import './index.css'
// import './less.less'
// import './sass.scss'
// console.log(xxx);
// console.log(process.env.NODE_ENV);

// 引入第三方模块
// import isArray from 'isarray'; // 直接引入， 会打包到输出文件中
// console.log(isArray)

// 访问接口
fetch('/api/users').then(res => res.json()).then(res => {
   console.log(res)
})

