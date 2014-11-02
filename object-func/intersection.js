/** 
 * @description 如果o中的属性在p中没有同名属性，则删除o中的这个属性，返回o
 * @param  {Object} o [description]
 * @param  {Object} p [description]
 * @return {Object} o  [返回的对象]
 */
function restrict (o,p) {
	for(prop in o){
		if (!(prop in p)) delete o[prop];
	}
	return o;
}
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
 * @description 返回一个新对象这个对象拥有同时在o和p中出现的属性，使用o中属性的值。
 * @param  {[type]} o [description]
 * @param  {[type]} p [description]
 * @return {[type]}   [description]
 */
function intersection (o,p) {
	return restrict(extend({},o),p);
}