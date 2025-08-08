"use client";

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Trash2, LogOut, Mail, Calendar, User } from "lucide-react"

interface Contact {
  id: string
  name: string
  email: string
  message: string
  isRead: boolean
  createdAt: string
}

interface LoginForm {
  email: string
  password: string
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: '', password: '' })
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [error, setError] = useState('')
  const router = useRouter()

  // Check authentication on mount
  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    try {
      const response = await fetch('/api/admin/contacts')
      if (response.ok) {
        setIsAuthenticated(true)
        loadContacts()
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm)
      })

      const data = await response.json()

      if (response.ok) {
        setIsAuthenticated(true)
        loadContacts()
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (error) {
      setError('Network error occurred')
    }
  }

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' })
      setIsAuthenticated(false)
      setContacts([])
      setSelectedContact(null)
      router.push('/')
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const loadContacts = async () => {
    try {
      const response = await fetch('/api/admin/contacts')
      const data = await response.json()
      
      if (response.ok) {
        setContacts(data.data)
      }
    } catch (error) {
      console.error('Failed to load contacts:', error)
    }
  }

  const markAsRead = async (id: string, isRead: boolean) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isRead })
      })

      if (response.ok) {
        setContacts(contacts.map(c => 
          c.id === id ? { ...c, isRead } : c
        ))
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact({ ...selectedContact, isRead })
        }
      }
    } catch (error) {
      console.error('Failed to update contact:', error)
    }
  }

  const deleteContact = async (id: string) => {
    if (!confirm('Are you sure you want to delete this contact?')) return
    
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'DELETE'
      })

      if (response.ok) {
        setContacts(contacts.filter(c => c.id !== id))
        if (selectedContact && selectedContact.id === id) {
          setSelectedContact(null)
        }
      }
    } catch (error) {
      console.error('Failed to delete contact:', error)
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50 dark:bg-neutral-900">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Admin Login</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="p-3 text-sm text-red-600 bg-red-50 dark:bg-red-900/20 rounded">
                  {error}
                </div>
              )}
              <Input
                type="email"
                placeholder="Email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                required
              />
              <Input
                type="password"
                placeholder="Password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                required
              />
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <div className="bg-white dark:bg-neutral-800 border-b border-neutral-200 dark:border-neutral-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <Button onClick={handleLogout} variant="outline">
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contacts List */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Messages ({contacts.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.map((contact) => (
                    <div
                      key={contact.id}
                      className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                        selectedContact?.id === contact.id
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                          : 'border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800'
                      }`}
                      onClick={() => setSelectedContact(contact)}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex items-center gap-2">
                          <User className="h-4 w-4" />
                          <span className="font-medium">{contact.name}</span>
                          {!contact.isRead && (
                            <Badge variant="destructive" className="text-xs">
                              New
                            </Badge>
                          )}
                        </div>
                        <div className="flex gap-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation()
                              markAsRead(contact.id, !contact.isRead)
                            }}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation()
                              deleteContact(contact.id)
                            }}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        {contact.email}
                      </p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1 line-clamp-2">
                        {contact.message}
                      </p>
                      <div className="flex items-center gap-2 mt-2 text-xs text-neutral-500">
                        <Calendar className="h-3 w-3" />
                        {new Date(contact.createdAt).toLocaleString()}
                      </div>
                    </div>
                  ))}
                  {contacts.length === 0 && (
                    <p className="text-center text-neutral-500 py-8">
                      No messages yet
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Detail */}
          <div>
            {selectedContact ? (
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        {selectedContact.name}
                        {!selectedContact.isRead && (
                          <Badge variant="destructive" className="text-xs">
                            New
                          </Badge>
                        )}
                      </CardTitle>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                        {selectedContact.email}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => markAsRead(selectedContact.id, !selectedContact.isRead)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        {selectedContact.isRead ? 'Mark Unread' : 'Mark Read'}
                      </Button>
                      <Button
                        size="sm"
                        variant="destructive"
                        onClick={() => deleteContact(selectedContact.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-sm text-neutral-500">
                      <Calendar className="h-4 w-4" />
                      {new Date(selectedContact.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg">
                    <p className="whitespace-pre-wrap">{selectedContact.message}</p>
                  </div>
                  <div className="mt-4">
                    <Button
                      onClick={() => window.open(`mailto:${selectedContact.email}?subject=Re: Portfolio Contact`)}
                      className="w-full"
                    >
                      <Mail className="h-4 w-4 mr-2" />
                      Reply via Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="flex items-center justify-center h-64">
                  <p className="text-neutral-500">Select a message to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}