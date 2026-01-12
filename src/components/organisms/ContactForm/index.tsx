'use client'

import { useDictionary } from '@/hooks/useDictionary'
import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { Textarea } from '@/components/atoms/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/atoms/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const { dictionary } = useDictionary()
  const t = dictionary.contact

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Contact Information Column */}
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-3xl font-bold font-sans mb-4">{t.title}</h2>
          <p className="text-muted-foreground text-lg mb-8 font-secondary">{t.description}</p>
        </div>

        <div className="grid gap-6">
          <Card className="border-none shadow-md">
            <CardHeader>
              <CardTitle className="font-sans">{t.info.title}</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="text-sm font-semibold">{t.info.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Phone</p>
                  <p className="text-sm font-semibold">{t.info.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Address</p>
                  <p className="text-sm font-semibold">{t.info.address}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Form Column */}
      <Card className="shadow-lg border-slate-200">
        <CardContent className="p-6 md:p-8">
          <form className="grid gap-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="firstName" className="font-sans">
                  {t.form.firstName}
                </Label>
                <Input
                  id="firstName"
                  placeholder={t.form.firstNamePlaceholder}
                  className="font-secondary"
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="lastName" className="font-sans">
                  {t.form.lastName}
                </Label>
                <Input
                  id="lastName"
                  placeholder={t.form.lastNamePlaceholder}
                  className="font-secondary"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="email" className="font-sans">
                {t.form.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t.form.emailPlaceholder}
                className="font-secondary"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="subject" className="font-sans">
                {t.form.subject}
              </Label>
              <Input
                id="subject"
                placeholder={t.form.subjectPlaceholder}
                className="font-secondary"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message" className="font-sans">
                {t.form.message}
              </Label>
              <Textarea
                id="message"
                placeholder={t.form.messagePlaceholder}
                className="min-h-[150px] font-secondary"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#39A900] hover:bg-[#007832] font-sans font-bold text-lg h-12"
            >
              {t.form.submit}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
