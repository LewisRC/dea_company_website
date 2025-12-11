'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ImageUpload } from '@/components/admin/image-upload'
import Link from 'next/link'

type Product = {
  id: number
  name: string
  nameEn: string | null
  category: string
  categoryEn: string | null
  description: string | null
  descriptionEn: string | null
  image: string
  href: string
}

export default function AdminProducts() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    nameEn: '',
    category: '',
    categoryEn: '',
    description: '',
    descriptionEn: '',
    image: '',
    href: ''
  })

  useEffect(() => {
    // 检查登录状态
    const loggedIn = localStorage.getItem('admin_logged_in')
    if (!loggedIn) {
      router.push('/admin')
      return
    }
    fetchProducts()
  }, [router])

  const fetchProducts = async () => {
    try {
      const res = await fetch('/api/admin/products')
      const data = await res.json()
      setProducts(data)
    } catch (error) {
      console.error('Failed to fetch products:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      if (editingProduct) {
        // 更新产品
        await fetch(`/api/admin/products/${editingProduct.id}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      } else {
        // 创建新产品
        await fetch('/api/admin/products', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        })
      }
      
      setIsModalOpen(false)
      setEditingProduct(null)
      setFormData({ name: '', nameEn: '', category: '', categoryEn: '', description: '', descriptionEn: '', image: '', href: '' })
      fetchProducts()
    } catch (error) {
      console.error('Failed to save product:', error)
      alert('保存失败，请重试')
    }
  }

  const handleEdit = (product: Product) => {
    setEditingProduct(product)
    setFormData({
      name: product.name,
      nameEn: product.nameEn || '',
      category: product.category,
      categoryEn: product.categoryEn || '',
      description: product.description || '',
      descriptionEn: product.descriptionEn || '',
      image: product.image,
      href: product.href
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: number) => {
    if (!confirm('确定要删除这个产品吗？')) return

    try {
      await fetch(`/api/admin/products/${id}`, {
        method: 'DELETE'
      })
      fetchProducts()
    } catch (error) {
      console.error('Failed to delete product:', error)
      alert('删除失败，请重试')
    }
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
            <h1 className="text-2xl font-bold text-gray-800">产品管理</h1>
            <nav className="flex gap-4">
              <Link href="/admin/products" className="text-blue-600 font-medium">产品管理</Link>
              <Link href="/admin/carousels" className="text-gray-600 hover:text-gray-900">轮播图管理</Link>
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
            共 {products.length} 个产品
          </div>
          <button
            onClick={() => {
              setEditingProduct(null)
              setFormData({ name: '', nameEn: '', category: '', categoryEn: '', description: '', descriptionEn: '', image: '', href: '' })
              setIsModalOpen(true)
            }}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            + 添加产品
          </button>
        </div>

        {/* 产品列表 */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">产品名称</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">分类</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">图片</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{product.id}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="text-gray-900">{product.name}</div>
                    {product.nameEn && <div className="text-gray-500 text-xs">{product.nameEn}</div>}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="text-gray-500">{product.category}</div>
                    {product.categoryEn && <div className="text-gray-400 text-xs">{product.categoryEn}</div>}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    <img src={product.image} alt={product.name} className="h-10 w-10 object-cover rounded" />
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <button
                      onClick={() => handleEdit(product)}
                      className="text-blue-600 hover:text-blue-800 mr-4"
                    >
                      编辑
                    </button>
                    <button
                      onClick={() => handleDelete(product.id)}
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              {editingProduct ? '编辑产品' : '添加产品'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    产品名称（中文）*
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    产品名称（英文）
                  </label>
                  <input
                    type="text"
                    value={formData.nameEn}
                    onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    分类（中文）*
                  </label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    分类（英文）
                  </label>
                  <input
                    type="text"
                    value={formData.categoryEn}
                    onChange={(e) => setFormData({ ...formData, categoryEn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    描述（中文）
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    描述（英文）
                  </label>
                  <textarea
                    value={formData.descriptionEn}
                    onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>
              </div>

              <div>
                <ImageUpload
                  label="产品图片*"
                  value={formData.image}
                  onChange={(url) => setFormData({ ...formData, image: url })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  链接*
                </label>
                <input
                  type="text"
                  value={formData.href}
                  onChange={(e) => setFormData({ ...formData, href: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="/product/1"
                  required
                />
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
                    setEditingProduct(null)
                    setFormData({ name: '', nameEn: '', category: '', categoryEn: '', description: '', descriptionEn: '', image: '', href: '' })
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

