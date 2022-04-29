/**
 * 获取唯一的id或者key
 */
const getUniquekey = () => (Math.random()*10000).toString() + Date.now().toString();
export default getUniquekey;