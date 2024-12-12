import Header from '@/components/layout/header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'

type DashboardLayoutProps = {
    children: React.ReactNode;
  };

const defaultOpen = true;

const DashboardLayout : React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
        <SidebarInset>
          <Header />
          {/* page main content */}
          {children}
          {/* page main content ends */}
        </SidebarInset>
      </SidebarProvider>
  )
}

export default DashboardLayout