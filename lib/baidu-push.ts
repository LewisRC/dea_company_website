/**
 * 百度主动推送API
 * 帮助百度更快发现和收录新页面
 * 
 * 使用方法：
 * 1. 在百度站长平台获取推送接口的调用地址
 * 2. 在.env.local中添加：BAIDU_PUSH_TOKEN=your_token
 * 3. 在页面更新时调用 pushUrlToBaidu()
 */

export async function pushUrlToBaidu(urls: string | string[]) {
  const token = process.env.BAIDU_PUSH_TOKEN
  
  if (!token) {
    console.warn('百度推送token未配置，跳过主动推送')
    return
  }

  const urlList = Array.isArray(urls) ? urls : [urls]
  const apiUrl = `http://data.zz.baidu.com/urls?site=https://www.dsakj.com&token=${token}`

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: urlList.join('\n'),
    })

    const result = await response.json()
    console.log('百度推送结果:', result)
    return result
  } catch (error) {
    console.error('百度推送失败:', error)
  }
}

/**
 * 获取所有需要推送的URL
 */
export function getAllUrls() {
  const baseUrl = 'https://www.dsakj.com'
  
  return [
    baseUrl,
    `${baseUrl}/company-profile`,
    `${baseUrl}/contact-us`,
    `${baseUrl}/smart-community`,
    `${baseUrl}/smart-healthcare`,
    `${baseUrl}/smart-hospital`,
    `${baseUrl}/smart-building`,
    `${baseUrl}/digital-medical-intercom`,
    `${baseUrl}/two-wire-medical-intercom`,
    `${baseUrl}/wireless-call-system`,
    `${baseUrl}/info-center`,
  ]
}
