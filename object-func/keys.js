/**
 * @description 返回一个数组这个数组包含的是o中可枚举的自有属性的名字
 * @param  {Object} o [description]
 * @return {Array} result  [自有属性的名字的数组]
 */
function keys (o) {
	if(typeof o !== "object") throw TypeError();			//参数必须是对象
	var result=[];											//将要返回的数组
	for(var prop in o){										//遍历所有可枚举的数组
		if(o.hasOwnProperty(prop))							//判断是否是自有属性
			result.push(prop)								//将属性名添加至数组中
	}
	return result;
}