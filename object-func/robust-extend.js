/*
 *给Object.property添加一个不可枚举的extend()方法
 *这个方法继承自调用它的对象，将作为参数传入的对象一一复制
 *除了值之外，也复制属性的所有特性，除非在目标对象中存在同名属性
 *参数对象的所有自有对象（包括不可枚举的属性）也会一一复制
 */
Object.defineProperty(Object.prototype,
	"extend",																//定义Object.prototype.extend
	{writable:true,																	
	enumerable:false,														//将其定义为不可枚举的
	configurable:true,
	value:function(o){														//值就是这个函数
		var names=Object.getOwnPropertyNames(o);							//得到自有属性包括不可枚举属性
		for(var i=0;i<names.length;i++){									//遍历它们
			if(names[i] in this) continue;									//如果属性以存在则跳过它们
			var desc=Object.getOwnPropertyDescriptor(o,names[i]);			//获取o中属性的描述符
			Object.defineProperty(this,names[i],desc);						//用它给this创建一个属性
		}
	}
});