//防抖函数
export function debounce(fn, delay){
  let timer = null;
  return function(...args) {
    if(timer) clearTimeout(timer);
    timer = setTimeout(() => {
            fn.apply(this, args);
          }, delay);
  }
}

export function getElemDocPosition(el) {
	var parent = el.offsetParent,
		offsetLeft = el.offsetLeft,
		offsetTop = el.offsetTop;
	while (parent) {
		offsetLeft += parent.offsetLeft;
		offsetTop += parent.offsetTop;
		parent = parent.offsetParent;
	}
	return {
		left: offsetLeft,
		top: offsetTop
	}
}
//日期格式化
export function dateFormat(fmt, date) {
	let ret;
	const opt = {
			"Y+": date.getFullYear().toString(),        // 年
			"m+": (date.getMonth() + 1).toString(),     // 月
			"d+": date.getDate().toString(),            // 日
			"H+": date.getHours().toString(),           // 时
			"M+": date.getMinutes().toString(),         // 分
			"S+": date.getSeconds().toString()          // 秒
			// 有其他格式化字符需求可以继续添加，必须转化成字符串
	};
	for (let k in opt) {
			ret = new RegExp("(" + k + ")").exec(fmt);
			if (ret) {
					fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
				};
	};
	return fmt;
}