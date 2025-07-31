"use client"

import { useState, useEffect } from "react"
import { FiCopy, FiCheck, FiSun, FiMoon, FiInfo } from "react-icons/fi"
import "./App.css"

const App = () => {
  const [longUrl, setLongUrl] = useState("")
  const [shortUrl, setShortUrl] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [copied, setCopied] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme) {
      setDarkMode(savedTheme === 'dark')
    } else {
      setDarkMode(prefersDark)
    }
  }, [])

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light')
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shortUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const handleSubmit = async (e) => {
    if (e) e.preventDefault()
    if (!longUrl) return
    setLoading(true)
    setShortUrl("")
    setError("")
    try {
      const res = await fetch("http://localhost:9808/create-short-url", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ long_url: longUrl, user_id: "frontend-user" }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || "Failed to shorten URL")
      }
      const data = await res.json()
      setShortUrl(data.short_url)
    } catch (err) {
      setError(err.message || "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  const handleClear = () => {
    setLongUrl("")
    setShortUrl("")
    setError("")
    setCopied(false)
  }

  return (
    <div className="app-container">
      <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
      
      <div className="main-card">
        <div className="header-section">
          <div className="header">Shorten your URL!</div>
          <div className="info-container">
            <FiInfo className="info-icon" />
            <div className="info-tooltip">
              Transform long URLs into short, shareable links. Perfect for social media, emails, and SMS messages.
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="form-container">
          <div className="input-row">
            <input
              type="url"
              placeholder="Paste your long URL here..."
              value={longUrl}
              onChange={(e) => setLongUrl(e.target.value)}
              className="url-input"
              required
              autoFocus
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit(e)
              }}
            />
            <div className="clear-button-container">
              <button
                type="button"
                className="clear-button"
                onClick={handleClear}
                disabled={loading && !longUrl}
                aria-label="Clear URL"
              >
                Clear
              </button>
            </div>
          </div>
          
          <button
            type="submit"
            className="shorten-button"
            disabled={loading || !longUrl}
            aria-label="Shorten URL"
          >
            {loading ? "Shortening..." : "Shorten URL"}
          </button>
        </form>

        <div className="error-message">{error}</div>

        {shortUrl && (
          <div className="url-box">
            <span className="url-label">Short URL:</span>
            <br />
            <div className="url-result">
              <a href={shortUrl} target="_blank" rel="noopener noreferrer" className="short-url-link">
                {shortUrl}
              </a>
              <button 
                className="copy-button" 
                onClick={copyToClipboard}
                aria-label="Copy to clipboard"
              >
                {copied ? <FiCheck /> : <FiCopy />}
              </button>
            </div>
            {copied && <div className="copy-success">Copied to clipboard!</div>}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
