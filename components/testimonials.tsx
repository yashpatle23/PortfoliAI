"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer",
    company: "Tech Corp",
    content:
      "ResumeAI helped me land my dream job! The AI-generated content was spot-on and saved me hours of writing.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Michael Chen",
    role: "Product Manager",
    company: "StartupXYZ",
    content: "The portfolio builder is incredible. I was able to create a professional website in minutes, not days.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Emily Rodriguez",
    role: "UX Designer",
    company: "Design Studio",
    content: "The templates are beautiful and the customization options are endless. Highly recommend!",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">What Our Users Say</h2>
          <p className="text-muted-foreground">
            Join thousands of professionals who have successfully landed their dream jobs with ResumeAI.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <blockquote className="mb-4 text-sm leading-relaxed">&ldquo;{testimonial.content}&rdquo;</blockquote>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role} at {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
