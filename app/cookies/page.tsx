"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { InfoIcon } from "lucide-react"

export default function CookiePreferences() {
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: false,
    advertising: false,
  })

  const [saved, setSaved] = useState(false)

  const handleToggle = (category: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [category]: !prev[category] }))
    setSaved(false)
  }

  const handleSave = () => {
    // Here you would typically save the preferences to your backend or local storage
    console.log("Saving preferences:", preferences)
    setSaved(true)
    // Simulate saving delay
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-3xl">
      <h1 className="text-3xl font-bold mb-6">Cookie Preferences</h1>
      <Card>
        <CardHeader>
          <CardTitle>Manage Your Cookie Settings</CardTitle>
          <CardDescription>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking &apos;Accept All&apos;, you consent to our use of cookies.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="necessary" className="flex flex-col space-y-1">
                <span>Strictly Necessary Cookies</span>
                <span className="font-normal text-sm text-muted-foreground">These cookies are essential for the website to function properly.</span>
              </Label>
              <Switch id="necessary" checked={preferences.necessary} onCheckedChange={() => {}} disabled />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="functional" className="flex flex-col space-y-1">
                <span>Functional Cookies</span>
                <span className="font-normal text-sm text-muted-foreground">These cookies enable personalized features and functionality.</span>
              </Label>
              <Switch id="functional" checked={preferences.functional} onCheckedChange={() => handleToggle("functional")} />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="analytics" className="flex flex-col space-y-1">
                <span>Analytics Cookies</span>
                <span className="font-normal text-sm text-muted-foreground">These cookies help us understand how visitors interact with the website.</span>
              </Label>
              <Switch id="analytics" checked={preferences.analytics} onCheckedChange={() => handleToggle("analytics")} />
            </div>
            <div className="flex items-center justify-between space-x-2">
              <Label htmlFor="advertising" className="flex flex-col space-y-1">
                <span>Advertising Cookies</span>
                <span className="font-normal text-sm text-muted-foreground">These cookies are used to serve you with personalized advertisements.</span>
              </Label>
              <Switch id="advertising" checked={preferences.advertising} onCheckedChange={() => handleToggle("advertising")} />
            </div>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="what-are-cookies">
              <AccordionTrigger>What are cookies?</AccordionTrigger>
              <AccordionContent>
                Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the owners of the site.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="why-use-cookies">
              <AccordionTrigger>Why do we use cookies?</AccordionTrigger>
              <AccordionContent>
                We use cookies for various purposes, including:
                <ul className="list-disc list-inside mt-2">
                  <li>To provide essential website functionality</li>
                  <li>To remember your preferences and settings</li>
                  <li>To analyze how our website is used and improve our services</li>
                  <li>To deliver personalized advertisements (if you consent)</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="manage-cookies">
              <AccordionTrigger>How can I manage my cookies?</AccordionTrigger>
              <AccordionContent>
                You can manage your cookie preferences using the toggles above. Additionally, most web browsers allow you to control cookies through their settings. Please note that disabling certain cookies may impact the functionality of our website.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter className="flex flex-col items-start space-y-4">
          <Button onClick={handleSave} className="w-full">Save Preferences</Button>
          {saved && (
            <Alert>
              <InfoIcon className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your cookie preferences have been saved.
              </AlertDescription>
            </Alert>
          )}
          <p className="text-sm text-muted-foreground">
            For more information about how we use cookies and your personal data, please read our{" "}
            <a href="/privacy-policy" className="text-primary hover:underline">Privacy Policy</a>.
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}