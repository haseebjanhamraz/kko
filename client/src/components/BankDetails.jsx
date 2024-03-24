import React from "react";

const Accounts = [
  {
    name: "Bank Al Habi",
    number: "asdasdasd12312412",
    currency: "PKR",
    iban: "12312IBANBAH178917234123",
    swift: "SWIF7129837123789",
    className: "whitespace-nowrap px-4 py-2 text-gray-700",
  },
];

const BankDetails = () => {
  return (
    <div className="mt-10 overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <thead className="ltr:text-left rtl:text-right">
          <tr>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Bank Name
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Account Number
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Currency
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              IBAN Number
            </th>
            <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
              Swift Code
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-200">
          {Accounts.map((item) => (
            <tr className="odd:bg-gray-50">
              <td key={item.name} className={item.className}>
                {item.name}
              </td>
              <td key={item.number} className={item.className}>
                {item.number}
              </td>
              <td key={item.currency} className={item.className}>
                {item.currency}
              </td>
              <td key={item.iban} className={item.className}>
                {item.iban}
              </td>
              <td key={item.swift} className={item.className}>
                {item.swift}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BankDetails;
