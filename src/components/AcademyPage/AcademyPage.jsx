import React, { useMemo, useState } from 'react'
import { logoBlack } from '../../assets'
import { SubscribeToAcademyWaitlist } from '../../services/AcademyWaitlistService'

const AcademyPage = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        notes: '',
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [feedback, setFeedback] = useState({ type: '', message: '' })

    const canSubmit = useMemo(() => {
        return formData.fullName.trim().length > 1 && formData.email.trim().length > 4 && !isSubmitting
    }, [formData, isSubmitting])

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
        if (feedback.message) {
            setFeedback({ type: '', message: '' })
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email.trim())) {
            setFeedback({ type: 'error', message: 'Te rog introdu o adresa de email valida.' })
            return
        }

        setIsSubmitting(true)

        const response = await SubscribeToAcademyWaitlist({
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            notes: formData.notes,
        })

        if (response.success) {
            setFeedback({
                type: 'success',
                message: response.alreadyRegistered
                    ? 'Email-ul este deja inregistrat. Te vom anunta la lansare.'
                    : 'Perfect! Te-am adaugat pe lista. Revino curand pentru detalii.',
            })
            if (!response.alreadyRegistered) {
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    notes: '',
                })
            }
        } else {
            setFeedback({ type: 'error', message: response.message })
        }

        setIsSubmitting(false)
    }

    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-[#171819] px-6 py-24 sm:px-8 lg:px-12">
            <div className="absolute left-[-120px] top-[18%] h-80 w-80 rounded-full border border-[#8fa99e]/40" />
            <div className="absolute bottom-[15%] right-[-100px] h-72 w-72 rounded-full border border-[#cba15c]/40" />

            <div className="relative mx-auto grid max-w-5xl overflow-hidden rounded-[28px] border border-white/15 bg-[#101213]/80 shadow-[0_20px_55px_rgba(0,0,0,0.34)] backdrop-blur-sm md:grid-cols-2">
                <div className="flex flex-col gap-3 border-b border-white/15 p-8 sm:p-10 md:border-b-0 md:border-r md:p-12">
                    <img src={logoBlack} className="w-[220px] max-w-full" alt="Armony Hair Studio logo black" />
                    <p className="mt-2 text-[11px] font-medium tracking-[0.52em] text-[#b8c6be]">ACADEMY</p>
                    <h1 className="mt-2 font-serif text-4xl leading-none text-white sm:text-5xl">Comunitatea care deschide drumul</h1>
                    <p className="max-w-md text-sm leading-7 text-[#f0f0ee]/80">
                        Academia Armony urmeaza sa se deschida. Lasa-ne datele tale si vei fi printre primii
                        care afla despre inscrieri, locuri disponibile si data lansarii.
                    </p>
                </div>

                <form className="flex flex-col gap-4 p-8 sm:p-10 md:p-12" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullName" className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#dbddd9]">
                            Nume complet
                        </label>
                        <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="Ex: Mihai Popescu"
                            value={formData.fullName}
                            onChange={handleChange}
                            maxLength={120}
                            required
                            className="rounded-xl border border-white/25 bg-white/5 px-3.5 py-3 text-[15px] text-white placeholder:text-white/50 focus:border-[#8fa99e] focus:outline-none focus:ring-4 focus:ring-[#8fa99e]/20"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#dbddd9]">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Ex: mihai@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            maxLength={180}
                            required
                            className="rounded-xl border border-white/25 bg-white/5 px-3.5 py-3 text-[15px] text-white placeholder:text-white/50 focus:border-[#8fa99e] focus:outline-none focus:ring-4 focus:ring-[#8fa99e]/20"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="phone" className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#dbddd9]">
                            Telefon (optional)
                        </label>
                        <input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="Ex: 07xx xxx xxx"
                            value={formData.phone}
                            onChange={handleChange}
                            maxLength={30}
                            className="rounded-xl border border-white/25 bg-white/5 px-3.5 py-3 text-[15px] text-white placeholder:text-white/50 focus:border-[#8fa99e] focus:outline-none focus:ring-4 focus:ring-[#8fa99e]/20"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="notes" className="text-[11px] font-medium uppercase tracking-[0.12em] text-[#dbddd9]">
                            Ce ai vrea sa inveti? (optional)
                        </label>
                        <textarea
                            id="notes"
                            name="notes"
                            placeholder="Spune-ne pe scurt ce te intereseaza in program."
                            value={formData.notes}
                            onChange={handleChange}
                            maxLength={500}
                            rows={4}
                            className="min-h-[110px] resize-y rounded-xl border border-white/25 bg-white/5 px-3.5 py-3 text-[15px] text-white placeholder:text-white/50 focus:border-[#8fa99e] focus:outline-none focus:ring-4 focus:ring-[#8fa99e]/20"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!canSubmit}
                        className="mt-2 rounded-full bg-gradient-to-r from-[#8fa99e] to-[#c4ad86] px-6 py-3 text-sm font-semibold uppercase tracking-[0.08em] text-[#1f2321] transition hover:translate-y-[-1px] hover:shadow-[0_8px_18px_rgba(143,169,158,0.38)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                        {isSubmitting ? 'Trimitem...' : 'Vreau sa fiu notificat'}
                    </button>

                    {feedback.message && (
                        <p className={`text-sm ${feedback.type === 'success' ? 'text-[#8fd3ab]' : 'text-[#ff9494]'}`}>
                            {feedback.message}
                        </p>
                    )}
                </form>
            </div>
        </section>
    )
}

export default AcademyPage