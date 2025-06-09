"use client"

import * as React from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  image?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  signup: (email: string, password: string, name: string) => Promise<void>
  logout: () => Promise<void>
  loginWithProvider: (provider: "google" | "github") => Promise<void>
}

const AuthContext = React.createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<User | null>(null)
  const [isLoading, setIsLoading] = React.useState(true)
  const router = useRouter()

  // Simulate checking for an existing session
  React.useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would check for an existing session here
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Authentication error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Mock login - in a real app, you would call your auth API
      const mockUser = {
        id: "user_123",
        name: "John Doe",
        email,
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Login error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      // Mock signup - in a real app, you would call your auth API
      const mockUser = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name,
        email,
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error("Signup error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      // Mock logout - in a real app, you would call your auth API
      setUser(null)
      localStorage.removeItem("user")
      router.push("/")
    } catch (error) {
      console.error("Logout error:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const loginWithProvider = async (provider: "google" | "github") => {
    setIsLoading(true)
    try {
      // Mock OAuth login - in a real app, you would redirect to the provider
      const mockUser = {
        id: "user_" + Math.random().toString(36).substr(2, 9),
        name: provider === "google" ? "Google User" : "GitHub User",
        email: `user@${provider}.com`,
        image: `/placeholder.svg?height=40&width=40`,
      }
      setUser(mockUser)
      localStorage.setItem("user", JSON.stringify(mockUser))
      router.push("/dashboard")
    } catch (error) {
      console.error(`${provider} login error:`, error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const value = {
    user,
    isLoading,
    login,
    signup,
    logout,
    loginWithProvider,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = React.useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
