import { Metadata } from 'next';
import Customer from '@/app/ui/customers/table'
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return <main className='w-full'>
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Customers</h1>
            </div>
              <Suspense>
                <CustomersTable customers={[]}/>
              </Suspense>
        </main>
}