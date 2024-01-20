import { Metadata } from 'next';
import Customer from '@/app/ui/customers/table'
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import Table from '@/app/ui/customers/table';
import { customers } from '@/app/lib/placeholder-data';
import CustomersTableSkeleton from '@/app/ui/skeletons';
import { custom } from 'zod';

export const metadata: Metadata = {
  title: 'Customers',
};

export default function Page() {
  return (
    <main>
      <div className='w-full'>
        <div className='flex w-full items-center justify-between'>
            <h1 className={ `${lusitana.className} text-2xl`}></h1>
        </div>
        <Suspense key={query + customers} fallback={<CustomersTableSkeleton/>}>
          <CustomersTable customers={customers}/>
        </Suspense>
      </div>
    </main>
  )
}