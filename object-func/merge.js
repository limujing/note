/**
 * @description 将p中的可枚举的属性复制到o中，如果o和p中有同名属性，o中的属性不受影响，返回o（这个函数不处理getter和setter以及复制属性）
 * @param  {Object} o [description]
 * @param  {Object} p [description]
 * @return {Object} o  [返回的对象]
 */
function merge (o,p) {
	for(prop in p){
		if(o.hasOwnproperty[prop]) continue;
		o[prop]=p[prop];
	}
	return o;
}