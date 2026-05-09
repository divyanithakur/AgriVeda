import React, { useEffect } from 'react'
import { Check, Sprout, Zap, Crown } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const plans = [
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
    cta: 'Start Free Trial — ₹500/mo',
    popular: false,
    razorpay: true,
  },
  {
    icon: Crown,
    name: 'Kisan Premium',
    price: '₹999',
    period: '/month',
    desc: 'For enterprise farming, managing large farmland.',
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
    popular: true,
  },
]

export default function Pricing() {
  const navigate = useNavigate();

  useEffect(() => {
    // Add Razorpay script to document
    if (!document.getElementById('razorpay-v1')) {
      const script = document.createElement('script');
      script.id = 'razorpay-v1';
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      document.body.appendChild(script);
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-slide-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleRazorpay = (amount) => {
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Are you offline?");
      return;
    }
    const options = {
      key: "rzp_test_YourTestKey", // Using a dummy key for UI mockup
      amount: amount,
      currency: "INR",
      name: "AgriVeda",
      description: "Basic Plan Monthly Subscription",
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate('/dashboard');
      },
      prefill: {
        name: "Farmer User",
        email: "farmer@agriveda.io",
        contact: "9999999999"
      },
      theme: {
        color: "#C8520A"
      }
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <section id="pricing" className="bg-white py-24 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-slide-up">
          <div className="inline-flex items-center gap-2 text-primary-green font-bold text-sm tracking-uppercase mb-5 justify-center">
            <Zap className="w-4 h-4" />
            Simple Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-black font-display text-dark-text mb-4">
            Grow More, <span className="text-primary-green">Pay Less</span>
          </h2>
          <p className="text-dark-text/70 max-w-xl mx-auto text-lg">
            Transparent plans built for Indian farmers. No hidden fees. Cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`fade-slide-up relative bg-white rounded-2xl p-8 flex flex-col border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                  plan.popular ? 'border-amber shadow-[0_10px_40px_rgba(245,166,35,0.15)] ring-4 ring-amber/10' : 'border-dark-text/10 shadow-sm'
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber text-dark-text text-[12px] font-bold px-4 py-1.5 rounded-full tracking-wider shadow-md">
                    MOST POPULAR
                  </div>
                )}

                <div className="w-12 h-12 rounded-xl bg-green-bg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary-green" />
                </div>

                <h3 className="text-2xl font-black font-display text-dark-text mb-2">{plan.name}</h3>
                <p className="text-dark-text/60 text-sm mb-6 h-10">{plan.desc}</p>

                <div className="flex items-end gap-1 mb-8">
                  <span className="text-4xl font-black font-display text-primary-green">{plan.price}</span>
                  <span className="text-dark-text/50 text-sm mb-1.5 font-medium">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-dark-text/80 font-medium">
                      <Check className="w-5 h-5 text-primary-green flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => plan.razorpay ? handleRazorpay(plan.amountInPaise) : navigate('/login')}
                  className={`w-full py-3.5 rounded-lg font-bold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-primary-green text-white hover:bg-mid-green'
                      : 'border-2 border-primary-green text-primary-green hover:bg-green-bg'
                  }`}
                  style={plan.razorpay ? { backgroundColor: '#C8520A', color: 'white', borderColor: '#C8520A' } : {}}
                >
                  {plan.cta}
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
