import { Check } from "lucide-react"

export function PricingTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-3 bg-purple-600 text-white text-center">Collections</th>
            <th className="border p-3 bg-purple-600 text-white text-center">$500K+</th>
            <th className="border p-3 bg-purple-600 text-white text-center">$100K-$500K</th>
            <th className="border p-3 bg-purple-600 text-white text-center">$100K</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-3">Credentialing (Each Pair)</td>
            <td className="border p-3 text-center">$200.00</td>
            <td className="border p-3 text-center">$200.00</td>
            <td className="border p-3 text-center">$200.00</td>
          </tr>
          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Billing (in network)</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">2.99%</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">3.99%</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">4.99%</td>
          </tr>
          <tr>
            <td className="border p-3">Coding</td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
          </tr>
          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Claim Submission</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto " />
            </td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
          </tr>

          
          <tr>
            <td className="border p-3">Claims Management</td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
          </tr>


          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Appeals on Denied Claims</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
          </tr>


          <tr>
            <td className="border p-3">Patient Management</td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
          </tr>


          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Reporting (15 days)</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
            <td className="border p-3 text-center bg-[#F8F7FF]">
              <Check className="w-5 h-5 text-purple-600 mx-auto" />
            </td>
          </tr>


          <tr>
            <td className="border p-3">Patient Statement (per mail)</td>
            <td className="border p-3 text-center">$1.00</td>
            <td className="border p-3 text-center">$1.00</td>
            <td className="border p-3 text-center">$1.00</td>
          </tr>
          
          
          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Insurance Web Portals</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$20.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$30.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$35.00</td>
          </tr>


          <tr>
            <td className="border p-3">Out of Network (Billing-Addon)</td>
            <td className="border p-3 text-center">1.00%</td>
            <td className="border p-3 text-center">1.00%</td>
            <td className="border p-3 text-center">1.00%</td>
          </tr>
          
          
          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Account Receivable (AR)</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">4.99%</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">5.99%</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">6.49%</td>
          </tr>


          <tr>
            <td className="border p-3">Eligibility Verification (per encounter)</td>
            <td className="border p-3 text-center">$5.00</td>
            <td className="border p-3 text-center">$5.00</td>
            <td className="border p-3 text-center">$5.00</td>
          </tr>
          
          
          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Verification of Benefits (per encounter)</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
          </tr>


          <tr>
            <td className="border p-3">Prior Authorization (per DOS)</td>
            <td className="border p-3 text-center">$5.00</td>
            <td className="border p-3 text-center">$5.00</td>
            <td className="border p-3 text-center">$5.00</td>
          </tr>
          
          
          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Virtual Assistant</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">40 H/W <br /><b>($1000 per month)</b></td>
            <td className="border p-3 text-center bg-[#F8F7FF]">20 H/W <br /><b>($600 per month)</b></td>
            <td className="border p-3 text-center bg-[#F8F7FF]">Custom Plan </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
