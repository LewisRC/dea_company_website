/**
 * 百度主动推送脚本
 * 用于将网站URL主动推送给百度，加速收录
 * 
 * 使用方法：
 * 1. 在.env.local中配置 BAIDU_PUSH_TOKEN
 * 2. 运行：node scripts/push-to-baidu.js
 */

require('dotenv').config({ path: '.env.local' })

const token = process.env.BAIDU_PUSH_TOKEN

if (!token) {
  console.error('❌ 错误：未配置 BAIDU_PUSH_TOKEN')
  console.log('\n请在 .env.local 文件中添加：')
  console.log('BAIDU_PUSH_TOKEN=your_token_here\n')
  console.log('Token 获取方式：')
  console.log('1. 登录百度站长平台: https://ziyuan.baidu.com')
  console.log('2. 进入"数据引入" → "链接提交"')
  console.log('3. 选择"主动推送"获取接口调用地址和token\n')
  process.exit(1)
}

const urls = [
  'https://www.dsakj.com',
  'https://www.dsakj.com/company-profile',
  'https://www.dsakj.com/contact-us',
  'https://www.dsakj.com/recruitment',
  'https://www.dsakj.com/smart-community',
  'https://www.dsakj.com/smart-healthcare',
  'https://www.dsakj.com/smart-hospital',
  'https://www.dsakj.com/smart-building',
  'https://www.dsakj.com/digital-medical-intercom',
  'https://www.dsakj.com/two-wire-medical-intercom',
  'https://www.dsakj.com/wireless-call-system',
  'https://www.dsakj.com/wireless-infusion-call',
  'https://www.dsakj.com/icu-visit-intercom',
  'https://www.dsakj.com/info-center',
]

const apiUrl = `http://data.zz.baidu.com/urls?site=https://www.dsakj.com&token=${token}`

console.log('🚀 开始推送URL到百度...\n')
console.log(`📝 准备推送 ${urls.length} 个URL`)

fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'text/plain',
  },
  body: urls.join('\n'),
})
  .then(response => response.json())
  .then(result => {
    console.log('\n✅ 推送成功！\n')
    console.log('返回结果：')
    console.log(JSON.stringify(result, null, 2))
    
    if (result.success !== undefined) {
      console.log(`\n✨ 成功推送：${result.success} 条`)
      if (result.remain !== undefined) {
        console.log(`📊 今日剩余配额：${result.remain} 条`)
      }
    }
    
    if (result.not_same_site && result.not_same_site.length > 0) {
      console.warn('\n⚠️  警告：以下URL不属于当前站点：')
      result.not_same_site.forEach(url => console.log(`  - ${url}`))
    }
    
    if (result.not_valid && result.not_valid.length > 0) {
      console.warn('\n⚠️  警告：以下URL格式不正确：')
      result.not_valid.forEach(url => console.log(`  - ${url}`))
    }
  })
  .catch(error => {
    console.error('\n❌ 推送失败：', error.message)
    console.log('\n可能的原因：')
    console.log('1. Token不正确')
    console.log('2. 超过每日推送配额')
    console.log('3. 网络连接问题')
  })
