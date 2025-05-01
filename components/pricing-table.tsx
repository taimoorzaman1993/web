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
            <td className="border p-3 ">Account Receivable (AR)</td>
            <td className="border p-3 text-center ">4.99%</td>
            <td className="border p-3 text-center ">5.99%</td>
            <td className="border p-3 text-center ">6.49%</td>
          </tr>


          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Eligibility Verification (per encounter)</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
          </tr>
          
          
          <tr>
            <td className="border p-3 ">Verification of Benefits (per encounter)</td>
            <td className="border p-3 text-center ">$5.00</td>
            <td className="border p-3 text-center ">$5.00</td>
            <td className="border p-3 text-center ">$5.00</td>
          </tr>


          <tr>
            <td className="border p-3 bg-[#F8F7FF]">Prior Authorization (per DOS)</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
            <td className="border p-3 text-center bg-[#F8F7FF]">$5.00</td>
          </tr>
          
          
          <tr>
            <td className="border p-3 ">Virtual Assistant</td>
            <td className="border p-3 text-center ">40 H/W <br /><b>($1000 per month)</b></td>
            <td className="border p-3 text-center ">20 H/W <br /><b>($600 per month)</b></td>
            <td className="border p-3 text-center ">Custom Plan </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
