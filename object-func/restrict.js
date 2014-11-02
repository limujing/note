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