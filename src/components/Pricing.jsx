import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Check, Sprout, Zap, Crown } from 'lucide-react'

const plans = [
  {
    icon: Sprout,
    name: 'Kisan Free',
    price: '₹0',
    period: '/month',
    desc: 'Perfect for small farmers starting their digital agriculture journey.',
    color: 'text-green-400',
    borderColor: 'border-green-500/20',
    features: [
      'Soil health summary (weekly)',
      'Basic weather alerts (3-day)',
      '1 crop tracking',
      'Community support',
      'Basic biofertilizer tips',
    ],
    cta: 'Start Free',
    popular: false,
  },
  {
    icon: Zap,
    name: 'Kisan Pro',
    price: '₹299',
    period: '/month',
    desc: 'For serious farmers who want AI-powered insights and carbon credit earnings.',
    color: 'text-yellow-400',
    borderColor: 'border-yellow-500/40',
    features: [
      'Real-time soil monitoring (NPK)',
      'Hyper-local 14-day forecast',
      'Up to 5 crops tracking',
      'AI biofertilizer recommendations',
      'Carbon credit tracking & MRV',
      'WhatsApp alerts',
      'Priority support',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    icon: Crown,
    name: 'Kisan Enterprise',
    price: '₹999',
    period: '/month',
    desc: 'For FPOs, cooperatives, and agri-enterprises managing large farmland.',
    color: 'text-purple-400',
    borderColor: 'border-purple-500/20',
    features: [
      'Unlimited farm parcels',
      'IoT sensor integration',
      'Satellite field mapping',
      'Carbon credit marketplace access',
      'Dedicated farm advisor',
      'Custom API & data export',
      'Government subsidy navigator',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
]

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="pricing" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#071508] to-[#0a1f0f]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      <div ref={ref} className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-tag mx-auto mb-5"
          >
            <Zap className="w-3 h-3" />
            Simple Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-[Outfit] text-white mb-4"
          >
            Grow More,{' '}
            <span className="gradient-text">Pay Less</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-green-100/50 max-w-xl mx-auto"
          >
            Transparent plans built for Indian farmers. No hidden fees. Cancel anytime.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative glass-card p-7 flex flex-col ${
                  plan.popular
                    ? 'border-yellow-500/40 bg-yellow-500/5 shadow-xl shadow-yellow-500/10'
                    : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-500 to-yellow-400 text-black text-xs font-black px-4 py-1 rounded-full tracking-wider">
                    MOST POPULAR
                  </div>
                )}

                <div className={`w-11 h-11 rounded-2xl bg-white/5 flex items-center justify-center mb-4`}>
                  <Icon className={`w-5 h-5 ${plan.color}`} />
                </div>

                <h3 className="text-xl font-black font-[Outfit] text-white mb-1">{plan.name}</h3>
                <p className="text-green-100/50 text-sm mb-5">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-6">
                  <span className={`text-4xl font-black font-[Outfit] ${plan.color}`}>{plan.price}</span>
                  <span className="text-white/40 text-sm mb-1.5">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-green-100/70">
                      <Check className={`w-4 h-4 ${plan.color} flex-shrink-0 mt-0.5`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full font-bold text-sm font-[Outfit] transition-all duration-300 ${
                    plan.popular
                      ? 'btn-primary'
                      : `border ${plan.borderColor} ${plan.color} hover:bg-white/5`
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/30 text-sm mt-10"
        >
          All plans include 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  )
}
