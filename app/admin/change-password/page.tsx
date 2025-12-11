'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function ChangePassword() {
  const router = useRouter()
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in')
    if (!loggedIn) {
      router.push('/admin')
    }
  }, [router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    // 验证当前密码
    if (currentPassword !== 'Dsa@2025#Admin!') {
      setError('当前密码错误')
      setLoading(false)
      return
    }

    // 验证新密码
    if (newPassword.length < 8) {
      setError('新密码长度不能少于8位')
      setLoading(false)
      return
    }

    if (newPassword !== confirmPassword) {
      setError('两次输入的新密码不一致')
      setLoading(false)
      return
    }

    // 密码强度验证
    const hasUpperCase = /[A-Z]/.test(newPassword)
    const hasLowerCase = /[a-z]/.test(newPassword)
    const hasNumber = /[0-9]/.test(newPassword)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword)

    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecial) {
      setError('新密码必须包含大小写字母、数字和特殊字符')
      setLoading(false)
      return
    }

    // 这里应该调用 API 更新密码
    // 目前只是演示，实际应该在服务器端处理
    setSuccess('密码修改成功！请妥善保管新密码。')
    
    // 提示用户需要手动更新代码中的密码
    setTimeout(() => {
      alert('⚠️ 注意：当前为演示版本，需要开发人员手动更新代码中的密码验证逻辑。\n\n您的新密码是：' + newPassword + '\n\n请将此密码提供给开发人员更新到 /app/admin/page.tsx 和 /app/admin/change-password/page.tsx 文件中。')
    }, 1000)

    setLoading(false)
    setCurrentPassword('')
    setNewPassword('')
    setConfirmPassword('')
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in')
    localStorage.removeItem('admin_username')
    router.push('/admin')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-gray-800">修改密码</h1>
            <nav className="flex gap-4">
              <Link href="/admin/products" className="text-gray-600 hover:text-gray-900">产品管理</Link>
              <Link href="/admin/carousels" className="text-gray-600 hover:text-gray-900">轮播图管理</Link>
              <Link href="/admin/cases" className="text-gray-600 hover:text-gray-900">案例管理</Link>
              <Link href="/admin/change-password" className="text-blue-600 font-medium">修改密码</Link>
            </nav>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
          >
            退出登录
          </button>
        </div>
      </header>

      {/* 主内容 */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-8">
          <h2 className="text-xl font-bold mb-6 text-gray-800">修改管理员密码</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                当前密码 *
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入当前密码"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                新密码 *
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请输入新密码"
                required
              />
              <p className="mt-1 text-xs text-gray-500">
                密码长度至少8位，必须包含大小写字母、数字和特殊字符
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                确认新密码 *
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="请再次输入新密码"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {success}
              </div>
            )}

            <div className="flex gap-3 pt-4">
              <button
                type="submit"
                disabled={loading}
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors disabled:opacity-50"
              >
                {loading ? '修改中...' : '确认修改'}
              </button>
              <Link
                href="/admin/products"
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors text-center"
              >
                返回
              </Link>
            </div>
          </form>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              <strong>⚠️ 重要提示：</strong><br />
              当前为演示版本，修改密码后需要联系开发人员更新系统配置。<br />
              生产环境应使用数据库存储加密密码。
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

