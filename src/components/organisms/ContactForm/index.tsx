'use client'

import { useDictionary } from '@/hooks/useDictionary'
import Link from 'next/link'
import { Button } from '@/components/atoms/button'
import { Input } from '@/components/atoms/input'
import { Label } from '@/components/atoms/label'
import { Textarea } from '@/components/atoms/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/atoms/card'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const { dictionary } = useDictionary()
  const t = dictionary.contact

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Left Column: Info & Socials */}
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h2 className="text-primary text-sm font-bold uppercase tracking-[0.2em] flex items-center gap-2 font-sans">
            <span className="w-8 h-[2px] bg-yellow"></span> {t.tagline}
          </h2>
          <h1 className="text-navy dark:text-white text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight font-sans">
            {t.title.split(' ').map((word, i) => (
              <span
                key={i}
                className={word === 'ayudarte' || word === 'help' ? 'text-primary' : ''}
              >
                {word}{' '}
              </span>
            ))}
          </h1>
          <p className="text-navy/70 dark:text-gray-400 text-lg font-normal leading-relaxed max-w-[480px] font-sans">
            {t.description}
          </p>
        </div>

        {/* Info Cards */}
        <div className="flex flex-col gap-6">
          {/* Email Card */}
          <div className="group flex items-start gap-6 rounded-2xl border-2 border-transparent bg-white dark:bg-navy/20 p-8 shadow-sm transition-all hover:border-yellow hover:shadow-xl hover:-translate-y-1">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white group-hover:bg-yellow group-hover:text-navy transition-colors">
              <Mail className="h-8 w-8" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-navy dark:text-white text-xl font-bold leading-tight font-sans">
                {t.info.emailTitle}
              </h3>
              <p className="text-navy/60 dark:text-gray-400 text-base font-normal font-sans">
                {t.info.emailDescription}
              </p>
              <p className="text-primary dark:text-cyan font-bold text-lg mt-1 font-sans">
                {t.info.email}
              </p>
            </div>
          </div>

          {/* Location Card */}
          <div className="group flex items-start gap-6 rounded-2xl border-2 border-transparent bg-white dark:bg-navy/20 p-8 shadow-sm transition-all hover:border-yellow hover:shadow-xl hover:-translate-y-1">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-primary text-white group-hover:bg-yellow group-hover:text-navy transition-colors">
              <MapPin className="h-8 w-8" />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-navy dark:text-white text-xl font-bold leading-tight font-sans">
                {t.info.addressTitle}
              </h3>
              <p className="text-navy/60 dark:text-gray-400 text-base font-normal font-sans">
                {t.info.addressDescription}
              </p>
              <p className="text-primary dark:text-cyan font-bold text-lg mt-1 font-sans">
                {t.info.address}
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-5 pt-4">
          <h4 className="text-navy dark:text-white text-sm font-bold uppercase tracking-wider font-sans">
            {t.info.socialTitle}
          </h4>
          <div className="flex flex-wrap gap-6">
            {/* LinkedIn */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="rounded-full bg-white dark:bg-navy border border-gray-200 dark:border-navy/50 p-4 text-navy dark:text-white group-hover:bg-purple group-hover:text-white group-hover:scale-110 transition-all shadow-sm">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
              <p className="text-navy dark:text-gray-300 text-xs font-bold font-sans">LinkedIn</p>
            </div>
            {/* Twitter/X */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="rounded-full bg-white dark:bg-navy border border-gray-200 dark:border-navy/50 p-4 text-navy dark:text-white group-hover:bg-cyan group-hover:text-navy group-hover:scale-110 transition-all shadow-sm">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </div>
              <p className="text-navy dark:text-gray-300 text-xs font-bold font-sans">Twitter</p>
            </div>
            {/* Instagram */}
            <div className="flex flex-col items-center gap-2 group cursor-pointer">
              <div className="rounded-full bg-white dark:bg-navy border border-gray-200 dark:border-navy/50 p-4 text-navy dark:text-white group-hover:bg-yellow group-hover:text-navy group-hover:scale-110 transition-all shadow-sm">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </div>
              <p className="text-navy dark:text-gray-300 text-xs font-bold font-sans">Instagram</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Form Card */}
      <Card className="bg-white dark:bg-navy/40 border border-gray-100 dark:border-navy/30 rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden font-sans">
        <div className="absolute top-0 right-0 w-32 h-32 bg-yellow/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

        <h3 className="text-navy dark:text-white text-3xl font-bold leading-tight pb-8 relative font-sans">
          {t.info.title.split(' ').map((word, i) => (
            <span
              key={i}
              className={
                word === 'mensaje' || word === 'message'
                  ? 'text-primary underline decoration-yellow decoration-4 underline-offset-8'
                  : ''
              }
            >
              {word}{' '}
            </span>
          ))}
        </h3>

        <form className="space-y-6 relative font-sans">
          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col gap-2">
              <Label
                htmlFor="name"
                className="text-sm font-bold text-navy/80 dark:text-gray-300 font-sans"
              >
                {t.form.fullName}
              </Label>
              <Input
                id="name"
                placeholder={t.form.fullNamePlaceholder}
                className="w-full px-5 py-4 h-auto rounded-xl border border-gray-200 dark:border-navy/60 bg-slate-50 dark:bg-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white placeholder:text-navy/30 font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="email"
                className="text-sm font-bold text-navy/80 dark:text-gray-300 font-sans"
              >
                {t.form.email}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t.form.emailPlaceholder}
                className="w-full px-5 py-4 h-auto rounded-xl border border-gray-200 dark:border-navy/60 bg-slate-50 dark:bg-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white placeholder:text-navy/30 font-sans"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="subject"
                className="text-sm font-bold text-navy/80 dark:text-gray-300 font-sans"
              >
                {t.form.subject}
              </Label>
              <select
                id="subject"
                className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-navy/60 bg-slate-50 dark:bg-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white appearance-none font-sans"
                defaultValue=""
              >
                <option value="" disabled>
                  {t.form.subjectPlaceholder}
                </option>
                <option value="general">{t.form.subjects.general}</option>
                <option value="collab">{t.form.subjects.collaboration}</option>
                <option value="feedback">{t.form.subjects.feedback}</option>
                <option value="other">{t.form.subjects.other}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <Label
                htmlFor="message"
                className="text-sm font-bold text-navy/80 dark:text-gray-300 font-sans"
              >
                {t.form.message}
              </Label>
              <Textarea
                id="message"
                placeholder={t.form.messagePlaceholder}
                className="w-full px-5 py-4 rounded-xl border border-gray-200 dark:border-navy/60 bg-slate-50 dark:bg-navy/40 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all dark:text-white resize-none placeholder:text-navy/30 min-h-[150px] font-sans"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="group w-full bg-primary text-white py-8 rounded-xl font-bold text-lg shadow-xl shadow-primary/20 hover:bg-secondary hover:shadow-primary/30 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 h-auto font-sans"
          >
            {t.form.submit}
            <svg
              className="h-5 w-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Button>

          <p className="text-center text-xs text-navy/40 dark:text-gray-500 font-sans">
            {t.form.privacyNote.split(t.form.privacyLink)[0]}
            <Link href="#" className="underline hover:text-primary transition-colors font-sans">
              {t.form.privacyLink}
            </Link>
            {t.form.privacyNote.split(t.form.privacyLink)[1]}
          </p>
        </form>
      </Card>
    </div>
  )
}
