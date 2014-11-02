/**
 * @description 如果o中的属性在p中存在同名属性，则从o中删除这个属性，返回o
 * @param  {Object} o [description]
 * @param  {Object} p [description]
 * @return {Object} o [返回的对象]
 */
function subtract (o,p) {
	for(prop in o){
		if(prop in p) delete o[prop];
	}
	return o;
}