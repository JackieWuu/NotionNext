import BLOG from '@/blog.config'
import FileCache from './local_file_cache'
import MemoryCache from './memory_cache'
import RedisCache from './redis_cache'

// 配置是否开启Vercel环境中的缓存，因为Vercel中现有两种缓存方式在无服务环境下基本都是无意义的，纯粹的浪费资源
const enableCacheInVercel =
  process.env.npm_lifecycle_event === 'build' ||
  process.env.npm_lifecycle_event === 'export' ||
  !BLOG['isProd']

/**
 * 尝试从缓存中获取数据，如果没有则尝试获取数据并写入缓存，最终返回所需数据
 * @param key
 * @param getDataFunction
 * @param getDataArgs
 * @returns {Promise<*|null>}
 */
export async function getOrSetDataWithCache(
  key,
  getDataFunction,
  ...getDataArgs
) {
  return getOrSetDataWithCustomCache(key, null, getDataFunction, ...getDataArgs)
}

/**
 * 尝试从缓存中获取数据，如果没有则尝试获取数据并自定义写入缓存，最终返回所需数据
 * @param key
 * @param customCacheTime
 * @param getDataFunction
 * @param getDataArgs
 * @returns {Promise<*|null>}
 */
export async function getOrSetDataWithCustomCache(
  key,
  customCacheTime,
  getDataFunction,
  ...getDataArgs
) {
  const dataFromCache = await getDataFromCache(key)
  if (dataFromCache) {
    console.log('[缓存-->>API]:', key)
    return dataFromCache
  }
  const data = await getDataFunction(...getDataArgs)
  if (data) {
    console.log('[API-->>缓存]:', key)
    await setDataToCache(key, data, customCacheTime)
  }
  return data || null
}

let api
if (process.env.MONGO_DB_URL && process.env.MONGO_DB_NAME) {
  api = MongoCache
} else if (process.env.ENABLE_FILE_CACHE) {
  api = FileCache
} else {
  api = MemoryCache
}

/**
 * 为减少频繁接口请求，notion数据将被缓存
 * @param {*} key
 * @returns
 */
export async function getDataFromCache(key, force) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
  if (BLOG.ENABLE_CACHE || force) {
    const dataFromCache = await api.getCache(key)
    if (JSON.stringify(dataFromCache) === '[]') {
      return null
    }
    return api.getCache(key)
=======
>>>>>>> tangly1024-main
  if (JSON.parse(BLOG.ENABLE_CACHE) || force) {
    const dataFromCache = await getApi().getCache(key)
    if (!dataFromCache || JSON.stringify(dataFromCache) === '[]') {
      return null
    }
    // console.trace('[API-->>缓存]:', key, dataFromCache)
    return dataFromCache
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
  } else {
    return null
  }
}

/**
 * 写入缓存
 * @param {*} key
 * @param {*} data
 * @param {*} customCacheTime
 * @returns
 */
export async function setDataToCache(key, data, customCacheTime) {
  if (!enableCacheInVercel || !data) {
    return
  }
<<<<<<< HEAD
  //   console.trace('[API-->>缓存写入]:', key)
  await getApi().setCache(key, data, customCacheTime)
=======
<<<<<<< HEAD
  await api.setCache(key, data)
=======
  //   console.trace('[API-->>缓存写入]:', key)
  await getApi().setCache(key, data, customCacheTime)
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}

export async function delCacheData(key) {
  if (!JSON.parse(BLOG.ENABLE_CACHE)) {
    return
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
  await api.delCache(key)
=======
>>>>>>> tangly1024-main
  await getApi().delCache(key)
}

/**
 * 缓存实现类
 * @returns
 */
export function getApi() {
  if (BLOG.REDIS_URL) {
    return RedisCache
  } else if (process.env.ENABLE_FILE_CACHE) {
    return FileCache
  } else {
    return MemoryCache
  }
<<<<<<< HEAD
=======
>>>>>>> eff5b4c022e6c99542a25f282c187e11d9d0f6d0
>>>>>>> tangly1024-main
}
