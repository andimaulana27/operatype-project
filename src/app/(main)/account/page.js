// src/app/(main)/account/page.js
import AccountSidebar from '@/components/AccountSidebar';
import PurchaseHistoryTable from '@/components/PurchaseHistoryTable';

const userData = {
  name: 'John doe',
  email: 'johndoe@gmail.com',
};

const purchaseHistory = [
    { date: '01/07/2025', product: 'Grande Amstera', license: 'Business License' },
    { date: '01/07/2025', product: 'Royales Horizon', license: 'Desktop License' },
    { date: '01/07/2025', product: 'Artfully Stylish', license: 'Business License' },
    { date: '01/07/2025', product: 'Flower Blossom', license: 'Desktop License' },
    { date: '01/07/2025', product: 'Brookside Pasture', license: 'Corporate License' },
    { date: '01/07/2025', product: 'Santuary Portrait', license: 'Business License' },
    { date: '01/07/2025', product: 'Pullwist', license: 'Desktop License' },
];

export default function MyAccountPage() {
  return (
    <div className="bg-[#f9f9f9]">
      <div className="container mx-auto max-w-[1748px] px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-medium text-[#3F3F3F]">My Account</h1>
          <div className="w-24 h-1 bg-[#C8705C] mx-auto mt-6"></div>
          <p className="mt-4 text-lg font-light text-gray-500">
            Welcome back, {userData.name}!
          </p>
          <p className="mt-1 text-base font-light text-gray-500">
            Here you can view your purchase history and re-download your fonts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* PERBAIKAN 2: Menambahkan garis pemisah di kanan sidebar */}
          <div className="lg:col-span-1 lg:border-r lg:border-gray-200 lg:pr-12">
            <AccountSidebar user={userData} />
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-2xl font-medium text-[#3F3F3F]">Purchase History</h2>
            
            {/* PERBAIKAN 1: Menghapus card putih dan shadow */}
            <div className="mt-6">
              <PurchaseHistoryTable purchases={purchaseHistory} />
            </div>
            
          </div>

        </div>
      </div>
    </div>
  );
}