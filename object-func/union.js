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
/**
 * @description 返回一个新对象，这个对象同时拥有o的属性和p的属性，如果o和p中有同名属性，使用p中的属性，返回o
 * @param  {Object} o [description]
 * @param  {Object} p [description]
 * @return {Object} o [返回的对象]
 */
function union (o,p) {
	return extend(extend({},o),p);	
}