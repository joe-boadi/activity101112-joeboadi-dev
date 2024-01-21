import { Metadata } from 'next';
import { lusitana } from '@/app/ui/fonts';
import CustomersTable from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTableSkeleton from '@/app/ui/skeletons';
// import { custom } from 'zod';
// import Table from '@/app/ui/customers/table';
// import { customers } from '@/app/lib/placeholder-data';
// import Customer from '@/app/ui/customers/table'
// import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime';


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
        <Suspense key={query + customers} fallback={<CustomersTableSkeleton/>}>
          <CustomersTable customers={customers}/>
        </Suspense>
      </div>
    </main>
  )
}