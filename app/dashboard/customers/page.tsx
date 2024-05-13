import React from 'react'
import Table from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};
export default function page() {
  return (
    <>
      <div className="w-full">
        <Table customers={[]}/>  
      </div>
    </>
  
  )
}
