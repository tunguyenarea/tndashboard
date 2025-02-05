import { fetchFilteredCustomers } from '@/app/lib/data';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';
import { fetchCustomersPages } from '@/app/lib/data';

export const metadata: Metadata = {
  title: 'Customers | Acme Dashboard',
};

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';

  const customers = await fetchFilteredCustomers(query);
  const totalPages = await fetchCustomersPages();

  return (
    <main>
      <CustomersTable customers={customers} />
    </main>
  );
}