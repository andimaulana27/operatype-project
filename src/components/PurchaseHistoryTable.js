// src/components/PurchaseHistoryTable.js
import Button from './Button';

const PurchaseHistoryTable = ({ purchases }) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full text-left">
        <thead className="border-b border-gray-300">
          <tr>
            {/* PERBAIKAN 3: Font diubah menjadi medium */}
            <th scope="col" className="py-3.5 px-6 text-sm font-medium text-gray-500">Date</th>
            <th scope="col" className="py-3.5 px-6 text-sm font-medium text-gray-500">Product</th>
            <th scope="col" className="py-3.5 px-6 text-sm font-medium text-gray-500">License</th>
            <th scope="col" className="relative py-3.5 px-6">
              <span className="sr-only">Download</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {purchases.map((purchase, index) => (
            // PERBAIKAN 4: Menambahkan warna baris selang-seling
            <tr key={index} className="border-b border-gray-200 even:bg-[#f2f2f2]">
              <td className="whitespace-nowrap py-4 px-6 text-sm font-light text-[#3F3F3F]">
                {purchase.date}
              </td>
              {/* PERBAIKAN 3: Font diubah menjadi medium */}
              <td className="whitespace-nowrap py-4 px-6 text-sm font-medium text-[#3F3F3F]">
                {purchase.product}
              </td>
              <td className="whitespace-nowrap py-4 px-6 text-sm font-light text-gray-500">
                {purchase.license}
              </td>
              <td className="whitespace-nowrap py-4 px-6 text-right text-sm">
                <Button href="#" variant="primary" className="px-6 py-2 text-xs rounded-lg font-medium">
                  Download
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistoryTable;