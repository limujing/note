/**
 * @description 返回对象的类属性
 * @param  {Object} o [description]
 * @return {String}   [description]
 */
function classof (o) {
	if (o === null) return "Null";
	if (o === undefined) return "Undefined";
	return Object.prototype.toString.call(o).slice(8,-1);
}