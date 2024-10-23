"use client"

import { useState } from 'react'
import { ChevronDown, ChevronUp, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function AdvisorSection() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">Our Advisor</h2>
        <Card className="max-w-[90%] mx-auto shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-primary">Dr. Pankush Kalgotra</CardTitle>
            <p className="text-base text-muted-foreground">Assistant Professor at Auburn University</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-foreground/90">
              We are proud to have Dr. Pankush Kalgotra as an advisor at Proton DataLabs. Dr. Kalgotra is an Assistant
              Professor at Auburn University, specializing in healthcare analytics, network science, and the
              intersection of neuroimaging and information systems.
            </p>
            <div className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-foreground/90">
                His extensive research, which has been widely published and cited in leading academic journals, brings
                invaluable expertise to our team. With a PhD in Management Science and Information Systems, Dr.
                Kalgotra&apos;s guidance enhances our ability to provide cutting-edge AI, data science, and business
                intelligence solutions to small and mid-sized companies.
              </p>
              <p className="text-foreground/90">
                His deep knowledge of healthcare analytics and innovative data approaches aligns perfectly with our
                mission of delivering tailored tech solutions that empower businesses to unlock growth and thrive in
                today&apos;s fast-paced digital landscape. Dr. Kalgotra has been a mentor and guide in the field of
                analytics since the early days of our journey, and his strategic insight continues to help us shape
                innovative and impactful solutions for our clients.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <Button
                variant="outline"
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full sm:w-auto"
              >
                {isExpanded ? 'Read less' : 'Read more'}
                {isExpanded ? <ChevronUp className="ml-2 h-4 w-4" /> : <ChevronDown className="ml-2 h-4 w-4" />}
              </Button>
              <a
                href="https://harbert.auburn.edu/directory/pankush-kalgotra.html"
                className="inline-flex items-center text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Profile
                <ExternalLink className="ml-2 w-4 h-4" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}