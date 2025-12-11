'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ImageUpload } from '@/components/admin/image-upload'
import Link from 'next/link'

type Carousel = {
  id: number
  title: string
  titleEn: string | null
  subtitle: string | null
  subtitleEn: string | null
  image: string
  imageEn: string | null
  link: string | null
  order: number
  isActive: boolean
}

export default function AdminCarousels() {
  const router = useRouter()
  const [carousels, setCarousels] = useState<Carousel[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingCarousel, setEditingCarousel] = useState<Carousel | null>(null)
  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    subtitle: '',
    subtitleEn: '',
    image: '',
    imageEn: '',
    link: '',
    order: 0,
    isActive: true
  })

  useEffect(() => {
    const loggedIn = localStorage.getItem('admin_logged_in')
    if (!loggedIn) {
      router.push('/admin')
      return
    }
    fetchCarousels()
  }, [router])

  const fetchCarousels = async () => {
    try {
      const res = await fetch('/api/admin/carousels')
      const data = await res.json()
      setCarousels(data)
    } catch (error) {
      console.error('Failed to fetch carousels:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingCarousel) {
        await fetch(`/api/admin/carousels/${editingCarousel.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      } else {
        await fetch('/api/admin/carousels', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      }
      
      setIsModalOpen(false)
      setEditingCarousel(null)
      resetForm()
      fetchCarousels()
    } catch (error) {
      console.error('Failed to save carousel:', error)
      alert('保存失败，请重试')
    }
  }

  const handleEdit = (carousel: Carousel) => {
    setEditingCarousel(carousel)
    setFormData({
      title: carousel.title,
      titleEn: carousel.titleEn || '',
      subtitle: carousel.subtitle || '',
      subtitleEn: carousel.subtitleEn || '',
      image: carousel.image,
      imageEn: carousel.imageEn || '',
      link: carousel.link || '',
      order: carousel.order,
      isActive: carousel.isActive
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这个轮播图吗？')) return

    try {
      await fetch(`/api/admin/carousels/${id}`, {
        method: 'DELETE'
      })
      fetchCarousels()
    } catch (error) {
      console.error('Failed to delete carousel:', error)
      alert('删除失败，请重试')
    }
  }

  const resetForm = () => {
    setFormData({
      title: '',
      titleEn: '',
      subtitle: '',
      subtitleEn: '',
      image: '',
      imageEn: '',
      link: '',
      order: 0,
      isActive: true
    })
  }

  const handleLogout = () => {
    localStorage.removeItem('admin_logged_in')
    router.push('/admin')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-lg">加载中...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部 */}
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-gray-800">轮播图管理</h1>
            <nav className="flex gap-4">
              <Link href="/admin/products" className="text-gray-600 hover:text-gray-900">产品管理</Link>
              <Link href="/admin/carousels" className="text-blue-600 font-medium">轮播图管理</Link>
              <Link href="/admin/cases" className="text-gray-600 hover:text-gray-900">案例管理</Link>
              <span className="text-gray-300">|</span>
              <Link href="/admin/change-password" className="text-gray-600 hover:text-gray-900">修改密码</Link>
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
        <div className="mb-6 flex justify-between items-center">
          <div className="text-lg text-gray-600">
            共 {carousels.length} 个轮播图
          </div>
          <button
            onClick={() => {
              setEditingCarousel(null)
              resetForm()
              setIsModalOpen(true)
            }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + 添加轮播图
          </button>
        </div>

        {/* 轮播图列表 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">排序</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">副标题</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">图片</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">状态</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {carousels.map((carousel) => (
                <tr key={carousel.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{carousel.order}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="text-gray-900">{carousel.title}</div>
                    {carousel.titleEn && <div className="text-gray-500 text-xs">{carousel.titleEn}</div>}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="text-gray-500">{carousel.subtitle}</div>
                    {carousel.subtitleEn && <div className="text-gray-400 text-xs">{carousel.subtitleEn}</div>}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <img src={carousel.image} alt={carousel.title} className="h-10 w-20 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded text-xs ${carousel.isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
                      {carousel.isActive ? '启用' : '禁用'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleEdit(carousel)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDelete(carousel.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* 添加/编辑模态框 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full my-8">
            <h2 className="text-xl font-bold mb-4">
              {editingCarousel ? '编辑轮播图' : '添加轮播图'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    标题（中文）*
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    标题（英文）
                  </label>
                  <input
                    type="text"
                    value={formData.titleEn}
                    onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    副标题（中文）
                  </label>
                  <input
                    type="text"
                    value={formData.subtitle}
                    onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    副标题（英文）
                  </label>
                  <input
                    type="text"
                    value={formData.subtitleEn}
                    onChange={(e) => setFormData({ ...formData, subtitleEn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <ImageUpload
                  label="轮播图（中文）*"
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                />
              </div>

              <div>
                <ImageUpload
                  label="轮播图（英文）"
                  value={formData.imageEn}
                  onChange={(url) => setFormData({ ...formData, imageEn: url })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  链接
                </label>
                <input
                  type="text"
                  value={formData.link}
                  onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="/products"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    排序
                  </label>
                  <input
                    type="number"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    状态
                  </label>
                  <select
                    value={formData.isActive ? 'true' : 'false'}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.value === 'true' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="true">启用</option>
                    <option value="false">禁用</option>
                  </select>
                </div>
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
                >
                  保存
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsModalOpen(false)
                    setEditingCarousel(null)
                    resetForm()
                  }}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 rounded-lg transition-colors"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

