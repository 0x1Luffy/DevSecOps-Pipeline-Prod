"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    jobTitle: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        jobTitle: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    }, 1500)
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-white/10 shadow-[0_0_50px_-12px_rgba(147,51,234,0.2)]">
      {submitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-purple-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
          <p className="text-gray-400">Thank you for contacting us. We'll get back to you soon.</p>
        </div>
      ) : (
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label className="text-sm text-gray-400">First name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Jane"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-gray-400">Last name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Smith"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="grid gap-2">
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                required
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm text-gray-400">Job title</label>
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Software Engineer"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
                focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <label className="text-sm text-gray-400">How can we help?</label>
            <textarea
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="I need help with optimizing my resume for ATS systems"
              required
              className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder:text-gray-500
              focus:outline-none focus:ring-2 focus:ring-purple-600 resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-white text-black hover:bg-gray-100 w-full sm:w-auto sm:justify-self-center px-8"
          >
            {isSubmitting ? "Sending..." : "Send message"}
          </Button>
        </form>
      )}
    </div>
  )
}
