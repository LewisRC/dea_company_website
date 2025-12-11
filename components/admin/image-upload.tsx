'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'

type ImageUploadProps = {
  value: string
  onChange: (url: string) => void
  label?: string
}

export function ImageUpload({ value, onChange, label = '图片' }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false)
  const [preview, setPreview] = useState<string>(value)
  const [error, setError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // 验证文件类型
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp']
    if (!allowedTypes.includes(file.type)) {
      setError('只支持图片文件 (jpg, jpeg, png, gif, webp)')
      return
    }

    // 验证文件大小
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      setError('文件大小不能超过 5MB')
      return
    }

    setError('')
    setUploading(true)

    try {
      // 创建本地预览
      const reader = new FileReader()
      reader.onload = (e) => {
        setPreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)

      // 上传文件
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || '上传失败')
      }

      // 更新表单值
      onChange(data.url)
      setPreview(data.url)
    } catch (err) {
      console.error('上传失败:', err)
      setError(err instanceof Error ? err.message : '上传失败，请重试')
      setPreview(value) // 恢复原来的预览
    } finally {
      setUploading(false)
    }
  }

  const handleRemove = () => {
    onChange('')
    setPreview('')
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>

      {/* 预览区域 */}
      {preview && (
        <div className="mb-3 relative inline-block">
          <div className="relative w-40 h-40 border-2 border-gray-200 rounded-lg overflow-hidden">
            <Image
              src={preview}
              alt="预览"
              fill
              className="object-cover"
            />
          </div>
          <button
            type="button"
            onClick={handleRemove}
            className="absolute -top-2 -right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm"
          >
            ×
          </button>
        </div>
      )}

      {/* 上传按钮 */}
      <div className="flex items-center gap-3">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          disabled={uploading}
        />
        
        <button
          type="button"
          onClick={() => fileInputRef.current?.click()}
          disabled={uploading}
          className="px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg transition-colors border border-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? '上传中...' : preview ? '更换图片' : '选择图片'}
        </button>

        {/* 手动输入URL */}
        <div className="flex-1">
          <input
            type="text"
            value={value}
            onChange={(e) => {
              onChange(e.target.value)
              setPreview(e.target.value)
            }}
            placeholder="或直接输入图片URL"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* 错误提示 */}
      {error && (
        <div className="mt-2 text-sm text-red-600">
          {error}
        </div>
      )}

      {/* 提示信息 */}
      <div className="mt-2 text-xs text-gray-500">
        支持 JPG、PNG、GIF、WebP 格式，最大 5MB
      </div>
    </div>
  )
}

