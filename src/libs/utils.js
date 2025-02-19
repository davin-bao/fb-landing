import { I18N } from './config'

const formatter =
  I18N?.dateFormatter ||
  new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  })

/**
 * 使用点符号来访问对象的属性
 */
export const getObjectValue = (obj, key) => {
    var properties = key.split('.')
    for (var i = 0; i < properties.length - 1; i++) {
        if (!obj || typeof obj !== 'object') {
            return undefined;
        }
        obj = obj[properties[i]] // 依次根据每个属性名称获取相应的属性值

        if (!obj || typeof obj !== 'object') {
            return undefined; // 若当前属性不存在或者不是对象类型，则返回 undefined
        }
    }

    return obj[properties[properties.length - 1]]
}

export const trim = (str = '', ch) => {
    let start = 0,
      end = str.length || 0;
    while (start < end && str[start] === ch) ++start;
    while (end > start && str[end - 1] === ch) --end;
    return start > 0 || end < str.length ? str.substring(start, end) : str;
}


export const getFormattedDate = (date) => (date ? formatter.format(date) : '')