import React from "react";

const FQA = () => {
  return (
    <div className="py-12 bg-base-100">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Got questions about how Zap Shift Resources works? We’ve got
            answers.
          </p>
        </div>

        <div className="space-y-4">
          <div className="collapse collapse-arrow bg-base-100 rounded-box border border-base-300">
            <input type="radio" name="faq-accordion" defaultChecked />
            <div className="collapse-title text-lg font-semibold">
              How do merchants book parcels?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>
                Merchants can log in and use the dashboard to enter parcel
                details, select delivery type, and make payments.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              Can admins assign delivery agents manually?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>
                Yes, admins can assign or auto-assign delivery agents based on
                location and availability.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              How are delivery charges calculated?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>
                Charges depend on parcel type (document/non-document), weight,
                and destination. See pricing table for details.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              What happens if a delivery fails?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>
                Failed deliveries are rescheduled, and merchants receive
                notifications via email/SMS.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              Is OTP confirmation mandatory for delivery?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>
                Yes, OTP is required to confirm successful delivery and prevent
                fraud.
              </p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-100 rounded-box border border-base-300">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title text-lg font-semibold">
              Does Zap Shift support nationwide delivery?
            </div>
            <div className="collapse-content text-sm text-gray-700">
              <p>
                Yes, we provide services across all 64 districts in Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FQA;
