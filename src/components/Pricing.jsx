import React, { useEffect } from 'react'
import { Check, Sprout, Zap, Crown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const PLANS = [
  {
    icon: Sprout,
    name: 'Kisan Free',
    price: '₹0',
    period: '/month',
    desc: 'Perfect for small farmers starting their digital agriculture journey.',
    features: [
      'Soil health summary (weekly)',
      'Basic weather alerts (3-day)',
      '1 crop tracking',
      'Community support',
      'Basic biofertilizer tips',
    ],
    cta: 'Start Free',
    popular: false,
    variant: 'outline',
  },
  {
    icon: Zap,
    name: 'Kisan Basic',
    price: '₹500',
    amountInPaise: 50000,
    period: '/month',
    desc: 'For serious farmers who want AI-powered insights.',
    features: [
      'Real-time soil monitoring (NPK)',
      'Hyper-local 14-day forecast',
      'Up to 5 crops tracking',
      'AI biofertilizer recommendations',
      'WhatsApp alerts',
    ],
    cta: 'Start Free Trial',
    popular: false,
    variant: 'terracotta',
    razorpay: true,
  },
  {
    icon: Crown,
    name: 'Kisan Premium',
    price: '₹999',
    period: '/month',
    desc: 'For enterprise farming and managing large farmland.',
    features: [
      'Unlimited farm parcels',
      'IoT sensor integration',
      'Satellite field mapping',
      'Carbon credit marketplace',
      'Dedicated farm advisor',
      'Custom API & data export',
      'Government subsidy navigator',
    ],
    cta: 'Contact Sales',
    popular: true,
    variant: 'green',
  },
]

export default function Pricing() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!document.getElementById('razorpay-v1')) {
      const script = document.createElement('script')
      script.id = 'razorpay-v1'
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'
      script.async = true
      document.body.appendChild(script)
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible')
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('.fade-slide-up').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleRazorpay = (amount) => {
    if (!window.Razorpay) { alert('Razorpay SDK failed to load. Are you offline?'); return }
    const options = {
      key: 'rzp_test_YourTestKey',
      amount,
      currency: 'INR',
      name: 'AgriVeda',
      description: 'Basic Plan Monthly Subscription',
      handler(response) {
        alert(`Payment successful! ID: ${response.razorpay_payment_id}`)
        navigate('/dashboard')
      },
      prefill: { name: 'Farmer User', email: 'farmer@agriveda.io', contact: '9999999999' },
      theme: { color: '#C8520A' },
    }
    new window.Razorpay(options).open()
  }

  const getButtonStyle = (variant) => {
    if (variant === 'green')      return { background: '#1A5C38', color: '#fff', border: 'none' }
    if (variant === 'terracotta') return { background: '#C8520A', color: '#fff', border: 'none' }
    return { background: 'transparent', color: '#1A5C38', border: '2px solid #1A5C38' }
  }

  const getButtonHoverClass = (variant) => {
    if (variant === 'outline') return 'hover:bg-[#E8F4EC]'
    return 'hover:opacity-90 hover:-translate-y-0.5'
  }

  return (
    <section id="pricing" className="bg-white py-24 relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-[0.03]"
        style={{ background: 'radial-gradient(ellipse at center, #1A5C38 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 fade-slide-up">
          <div className="inline-flex items-center gap-2 text-[#1A5C38] font-bold text-sm tracking-wider mb-5 justify-center uppercase">
            <Zap className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2
            className="text-4xl md:text-5xl font-black text-[#2C1A0E] mb-4"
            style={{ fontFamily: 'Syne,sans-serif' }}
          >
            Grow more, <span className="text-[#1A5C38]">pay less</span>
          </h2>
          <p className="text-[#2C1A0E]/60 max-w-xl mx-auto text-lg">
            Transparent plans built for Indian farmers. No hidden fees. Cancel anytime.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon
            return (
              <div
                key={plan.name}
                className={`fade-slide-up relative bg-white rounded-2xl p-8 flex flex-col border transition-all duration-400 hover:-translate-y-2 hover:shadow-premium ${
                  plan.popular
                    ? 'border-[#F5A623] shadow-amber-glow ring-4 ring-[#F5A623]/8'
                    : 'border-black/10 shadow-card'
                }`}
                style={{ transitionDelay: `${i * 90}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F5A623] text-[#2C1A0E] text-[11px] font-bold px-4 py-1.5 rounded-full tracking-widest shadow-md uppercase">
                    Most Popular
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-[#E8F4EC] flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-[#1A5C38]" />
                </div>

                <h3
                  className="text-2xl font-black text-[#2C1A0E] mb-2"
                  style={{ fontFamily: 'Syne,sans-serif' }}
                >
                  {plan.name}
                </h3>
                <p className="text-[#8D6E63] text-sm mb-6 min-h-[40px]">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-8">
                  <span
                    className="text-4xl font-black text-[#1A5C38]"
                    style={{ fontFamily: 'Syne,sans-serif' }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-[#8D6E63] text-sm mb-1.5 font-medium">{plan.period}</span>
                </div>

                <ul className="space-y-3.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-[#2C1A0E]/75 font-medium">
                      <Check className="w-4 h-4 text-[#1A5C38] flex-shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    plan.razorpay ? handleRazorpay(plan.amountInPaise) : navigate('/login')
                  }
                  className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 ${getButtonHoverClass(plan.variant)}`}
                  style={{
                    fontFamily: 'Syne,sans-serif',
                    ...getButtonStyle(plan.variant),
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>

        {/* Guarantee note */}
        <p className="text-center text-[#8D6E63] text-sm mt-10 font-medium">
          🔒 Secure payment · No credit card needed for free plan · Cancel anytime
        </p>
      </div>
    </section>
  )
}
