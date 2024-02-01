import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { TableRowSkeleton } from '@/app/ui/skeletons';


export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page({
  searchParams,
}:{
  searchParams?:{
    query?: string;
  }
}) {
    const query = searchParams?.query || '';
    const customers = (await fetchFilteredCustomers(query))

  return (
    <main>
      <div className='w-full'>
        <div className='flex w-full items-center justify-between'>
            <h1 className={ `${lusitana.className} text-2xl`}></h1>
        </div>
        <Suspense key={query + customers} fallback={<TableRowSkeleton/>}>
          <CustomersTable customers={customers}/>
        </Suspense>
      </div>
    </main>
  )
}