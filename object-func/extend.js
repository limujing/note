/**
 * @description 把p中可枚举的属性复制到o中并返回o，如果o和p中有同名属性，则覆盖o中的属性
 * @param  {Object} o [description]
 * @param  {Obejct} p [description]
 * @return {Object} o  [返回的对象]
 */
function extend (o,p) {
	for(prop in p){
		o[prop]=p[prop];
	}
	return o;
}