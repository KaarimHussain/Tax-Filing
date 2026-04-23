import GetStartedForm from "@/components/GetStartedForm";

export default function GetStarted() {
  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-brand-navy">Start Your <span className="text-brand-red">Growth Journey</span></h1>
          <p className="text-brand-navy/60">Tell us about your business, the services you need, and where you want support. Our team will review your requirements and get back to you with the right next steps.</p>
        </div>

        <GetStartedForm />

        <div className="mt-12 text-center text-brand-navy/30 text-sm">
          <p>By submitting this form, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </div>
    </div>
  );
}
