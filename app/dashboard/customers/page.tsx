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
  return <p>Customers Page</p>
}