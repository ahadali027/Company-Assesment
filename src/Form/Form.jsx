import React, { useState } from "react";

import SectionWrapper from "../components/SectionWrapper";
import FormHeader from "../components/FormHeader";
import CustomInput, { SuburbInput } from "../components/CustomInput";
import SearchableDropdownExample from "../components/DropDownSearchBox";
import ShareClassForm from "../components/FormTable";
import NumberDropdown from "../components/FormDropdown";

// Sample data for countries and their states
const countryData = {
  Australia: {
    states: [
      "New South Wales",
      "Victoria",
      "Queensland",
      "Western Australia",
      "South Australia",
      "Tasmania",
      "Australian Capital Territory",
      "Northern Territory",
    ],
    postcodes: {
      "New South Wales": ["2000", "2001", "2002"],
      Victoria: ["3000", "3001", "3002"],
      Queensland: ["4000", "4001", "4002"],
      "Western Australia": ["6000", "6001", "6002"],
      "South Australia": ["5000", "5001", "5002"],
      Tasmania: ["7000", "7001", "7002"],
      "Australian Capital Territory": ["2600", "2601", "2602"],
      "Northern Territory": ["0800", "0801", "0802"],
    },
  },
  "United States": {
    states: ["California", "New York", "Texas", "Florida", "Illinois"],
    postcodes: {
      California: ["90001", "90002", "90003"],
      "New York": ["10001", "10002", "10003"],
      Texas: ["75001", "75002", "75003"],
      Florida: ["32001", "32002", "32003"],
      Illinois: ["60001", "60002", "60003"],
    },
  },
};

function Form() {
  const [companyType, setCompanyType] = useState("");
  const [form, setForm] = useState({
    careOf: "",
    unit: "",
    streetAddress: "",
    suburb: "",
    state: "",
    postCode: "",
    country: "Australia",
  });

  const [isStateEnabled, setIsStateEnabled] = useState(false);
  const [isPostCodeEnabled, setIsPostCodeEnabled] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (country) => {
    setForm((prev) => ({
      ...prev,
      country,
      state: "",
      postCode: "",
    }));
    setIsStateEnabled(true);
    setIsPostCodeEnabled(false);
  };

  const handleStateChange = (state) => {
    setForm((prev) => ({
      ...prev,
      state,
      postCode: "",
    }));
    setIsPostCodeEnabled(true);
  };

  const handleSuburbSearch = () => {
    // Implement suburb search logic here
    console.log("Searching for suburb:", form.suburb);
  };

  const companyOptions = [
    "Private Limited",
    "Public Limited",
    "Sole Proprietorship",
    "Partnership",
    "LLC",
  ];
  return (
    <div className="px-10 mt-3">
      <form action="">
        <div>
          <FormHeader heading="Please provide your email address for document delivery purposes" />
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-5 mt-3 w-full">
              <CustomInput
                label="Email Addess"
                inputProps={{ className: "w-full" }}
              />
              <CustomInput
                label="Confirm Email Addess"
                inputProps={{ className: "w-full" }}
              />
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Do you have a proposed name for your company?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl">
                If you tick "No", a company will have an automatically generated
                number assigned by ASIC to its name i.e. 987 789 987 Pty Ltd.
              </p>
            </div>
          </div>
        </div>
        <div>
          <FormHeader heading="How do you wish your Proprietary Limited to be described?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-5 mt-3 w-full">
              <CustomInput
                label="Proposed Name"
                inputProps={{
                  className: "w-full text-sm text-gray-700",
                  placeholder: "ENTER YOUR COMPANY PROPRIETARY NAME",
                }}
              />
              <div className="flex items-center justify-between w-full">
                <label className="text-sm text-gray-700">Type of Company</label>
                <select
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  className="border w-full focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 shadow-sm text-gray-700"
                >
                  <option value="" disabled></option>
                  {companyOptions.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl">
                ASIC requires company names to be in capital letters (company
                name only excluding PTY LTD).
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Is your company name the same as your registered business name?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl mt-2">
                If you are a sole trader and own a business name and wish to set
                up a company with the same business name, please enter your
                Australian Business Number (ABN) – for business names registered
                with ASIC after 28th May 2012. Alternatively please enter your
                state business number if you wish to transfer the business name
                to a company (for registrations before 28th May 2012)
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="I am interested in obtaining a free quote for Website Design or SEO Marketing services from an Aussie based specialist." />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl mt-2">
                SEO & Online Marketing help local business to rank higher and
                obtain more traffic from Google to acquire more customers and
                grow their business via the internet. Take the first step to
                grow and expand your business today by speaking to an Aussie
                based specialist .
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Would you like Xero Accounting subscription at 90% Off retail price?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Has your company name been reserved with ASIC?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl mt-2">
                A company name may be reserved before it is registered with
                ASIC. If you reserved the name with ASIC previously please enter
                a reservation number, otherwise select No to the question.
              </p>
            </div>
          </div>
        </div>
        <div>
          <FormHeader heading="Please select which State/Territory you wish to register the company in?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col gap-5 mt-3 w-full">
              <div className="flex items-center gap-5 justify-between w-full">
                <label className="text-sm text-gray-700">State</label>
                <select
                  value={companyType}
                  onChange={(e) => setCompanyType(e.target.value)}
                  className="border w-full focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 shadow-sm text-gray-700"
                >
                  <option value="" className="text-sm text-gray-700" disabled>
                    List of States
                  </option>
                  {companyOptions.map((option, idx) => (
                    <option key={idx} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Will the company be acting only as a trustee of a Self Managed Super Fund (SMSF)?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl mt-2">
                Annual registration fees vary for trustee companies of SMSFs
                compared to standard pty ltd companies.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Will the company have an ultimate holding company?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader
            heading="Please enter a registered address for the company."
            subHeading="Every company is required to have a registered office in Australia for the purpose of all the communications and notices, which ASIC must be advised of. A post office box cannot be used as a registered office of a company."
          />
          <div className="mt-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-5">
                <CustomInput
                  label="Care of (optional)"
                  name="careOf"
                  inputProps={{ type: "text", className: "w-full" }}
                />
                <CustomInput
                  label="Unit / Level   (optional)"
                  name="unit"
                  inputProps={{ type: "text", className: "w-full" }}
                />
                <div>
                  <CustomInput
                    label="Street Address"
                    name="streetAddress"
                    inputProps={{ type: "text", className: "w-full" }}
                  />
                </div>
                <div className="w-full">
                  <SuburbInput
                    value={form.suburb}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, suburb: e.target.value }))
                    }
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Type few characters in suburb and then select from drop down
                    list.
                  </p>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <label className="text-sm text-gray-700 min-w-[120px]">
                    State
                  </label>
                  <select
                    value={form.state}
                    onChange={(e) => handleStateChange(e.target.value)}
                    disabled={!isStateEnabled}
                    className={`w-full border focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 shadow-sm text-gray-700 ${
                      !isStateEnabled ? "bg-gray-100" : ""
                    }`}
                  >
                    <option value="">Select State</option>
                    {countryData[form.country]?.states.map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <label className="text-sm text-gray-700 min-w-[120px]">
                    Post code
                  </label>
                  <select
                    value={form.postCode}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, postCode: e.target.value }))
                    }
                    disabled={!isPostCodeEnabled}
                    className={`w-full border focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 shadow-sm text-gray-700 ${
                      !isPostCodeEnabled ? "bg-gray-100" : ""
                    }`}
                  >
                    <option value="">Select Post Code</option>
                    {countryData[form.country]?.postcodes[form.state]?.map(
                      (postcode) => (
                        <option key={postcode} value={postcode}>
                          {postcode}
                        </option>
                      )
                    )}
                  </select>
                </div>
                <div className="flex items-center gap-2 w-full">
                  <label className="text-sm text-gray-700 min-w-[120px]">
                    Country
                  </label>
                  <select
                    value={form.country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                    className="w-full border focus:outline-none focus:ring-2 focus:ring-blue-300 px-4 py-2 shadow-sm text-gray-700"
                  >
                    {Object.keys(countryData).map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Does any other company occupy the registered address other than the new company?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl mt-2">
                Where the company does not occupy the premises where its
                registered office is located, the occupier of the premises must
                agree in writing to have the company’s registered office located
                in the premises.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <FormHeader heading="Will the Company’s registered Office be the principal place of business in Australia?" />
          <div className="grid grid-cols-2 gap-4 items-center">
            <div className="flex flex-col mt-3 w-full">
              <CustomInput
                rtl
                label="Yes"
                inputProps={{ type: "radio", className: "w-4" }}
              />
              <CustomInput
                rtl
                label="No"
                inputProps={{ type: "radio", className: "w-4" }}
              />
            </div>
            <div>
              <p className="text-sm text-[#515151] max-w-2xl mt-2">
                If a company has a principal place of business that is different
                from its registered office, ASIC must be notified of the
                principal place of business if it differs from the registered
                office.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 w-full">
          <FormHeader
            heading="Share Structure – Select the class of shares that will be issued by the company."
            subHeading="(In most cases ORDINARY shares are appropriate for a basic trading company)"
          />
          <ShareClassForm />
        </div>
        <div className="mt-8 w-full">
          <FormHeader
            heading="How many Individual Directors will your company have?"
            subHeading="According to ASIC rules a proprietary company must have at least 1 director normally residing in Australia.Í"
          />
          <div className="flex items-center gap-2 justify-center">
            <p className="text-sm text-gray-700">
              Number of Individual Directors (may also own shares) in the
              company
            </p>
            <NumberDropdown />
            <p className="text-sm text-gray-700">(Min. 1 Max. 10 allowed)</p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <FormHeader
            heading="How many Individual Shareholders will your company have who will not be acting as Directors?"
            subHeading="Shareholders can be selected who are not directors of your company."
          />
          <div className="flex items-center gap-2 justify-center">
            <p className="text-sm text-gray-700">
              Number of Individual Shareholders who will not act as Directors of
              the company
            </p>
            <NumberDropdown />
            <p className="text-sm text-gray-700">(Min. 0 Max. 5 allowed)</p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <FormHeader heading="Are there other companies who will own shares in your company? If yes, select number." />
          <div className="flex items-center gap-2 justify-center">
            <p className="text-sm text-gray-700">
              Number of companies who will own shares
            </p>
            <NumberDropdown />
            <p className="text-sm text-gray-700">(Min. 0 Max. 5 allowed)</p>
          </div>
        </div>
        <div className="mt-8 w-full">
          <FormHeader
            heading="Will there be any Joint Shareholders who will own shares in your company? If yes, select a number."
            subHeading="There is a maximum of Two Individuals or Two Companies who can own shares your company jointly."
          />
          <div className="flex items-center gap-2 justify-center">
            <p className="text-sm text-gray-700">
              Number of Joint Shareholders who will own shares
            </p>
            <NumberDropdown />
            <p className="text-sm text-gray-700">(Min. 0 Max. 5 allowed)</p>
          </div>
        </div>
        <div className="flex  justify-end">
          <button className="p-2 border-2 bg-white  text-gray-600 hover:bg-gray-300  ">
            Proceed
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
