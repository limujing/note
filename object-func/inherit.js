/**
 * @destination 返回一个继承自原型对象o的属性的新对象
 * @param  {Object} o [原型对象]
 * @return {Object} f [返回的新对象]
 */
function inherit (o) {
	if(o=null) throw TypeError();														//p是一个对象但不能是null
	if(Object.create) return Object.create(o);											//检测Object.create()的存在，存在就直接使用它
	var t=typeof o;																		
	if(t !== "object" && t !== "function") throw TypeError();							//进行进一步的检测
	function f () {};																	//定义一个空构造函数
	f.prototype=o;																		//将其原型属性设置为o
	return new f();																		//使用f()创建o的继承对象
}