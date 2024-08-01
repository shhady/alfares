
import AdminComponents from '@/components/adminComponents/AdminComponents'
import { checkRole } from "@/utils/roles";
import { redirect } from 'next/navigation';

export default async function page() {
    const role = await checkRole();
    if (role !== 'admin') {
        redirect('/');  // Absolute URL is not required here
      }
  return (
    <div>
      <AdminComponents />  
    </div>
  )
}
