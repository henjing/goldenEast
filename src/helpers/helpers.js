// 识别,并统计中文字符
export function chineseOnly(string) {
    var length = string.length;
    var single;
    var strLength = 0;
    for ( var i = 0; i < length; i++) {
        single = string.charAt(i);
        if (escape(single).length > 4) {
            strLength++;
        } else {
            return false;
        }
    }
    return strLength;
}

// 毫秒数转成日期
export function milisecToDate(miliseconds) {
    return (new Date(miliseconds * 1000)).toLocaleDateString()
}

// 毫秒转成日期 + 时间(精确到秒)
export function milisecToDateTime(miliseconds) {
    var millSec = parseInt(miliseconds);
    var time = new Date(millSec * 1000);
    return time.toLocaleDateString() + ' ' + time.toLocaleTimeString();
}

// outline页面中所有不是{display : none}的元素
export function outline() {
    return [].forEach.call(document.querySelectorAll("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)});
}

// 深拷贝
export function cloneObj(obj){
    var str, newobj = obj.constructor === Array ? [] : {};
    if(typeof obj !== 'object'){
        return;
    } else if(window.JSON){
        str = JSON.stringify(obj), //系列化对象
        newobj = JSON.parse(str); //还原
    } else {
        for(var i in obj){
            newobj[i] = typeof obj[i] === 'object' ? 
            cloneObj(obj[i]) : obj[i]; 
        }
    }
    return newobj;
}

// Object-assign, deep merge
/**
 * Simple is object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
export function mergeDeep(target, source) {
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  return target;
}