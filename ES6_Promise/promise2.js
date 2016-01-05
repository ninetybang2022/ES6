/**
 * Promise异步操作
 * 结果有可能是一个值，也有可能是另一个异步操作
 * var p1 = new Promise((resolve,reject)=>{
 * 	//..
 * })
 * var p2 = new Promise((resolve,reject)=>{
 * 	//..
 * 	resolve(p1);
 * })
 * 上面的代码中，p1和p2都是promise的实例，但是p2的resolve方法 将p1作为
 * 参数，即一个异步操作的结果是返回另一个异步操作
 *
 * 注意：这时p1的状态就会传递给p2，也就是说p1的状态决定p2的状态，如果p1
 * 的状态为pending，那么p2的回调函数就会等待p1的状态改变，如果p1的状态
 * 已经是resolved或者reject，那么p2的加高函数将会立即执行
 */

var p1 = new Promise((resolve,reject)=>{
	setTimeout(()=>reject(new Error('fail')),3000);
});
var p2 = new Promise((resolve,reject)=>{
	setTimeout(()=>resolve(p1),1000);
});

p2.then(result=>console.log(result));
p2.catch(err=>console.log(err));

/**
 * 上面的代码中，p1是一个promise 3 秒之后变为reject p2的状态由p1决定，1秒后
 * p2调用resolve方法，但是此时p1的状态还没有改变，因此p2的状态也不会变，又过了2秒p1变为reject p2也跟着变为了reject
 */