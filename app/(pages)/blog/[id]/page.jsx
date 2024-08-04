// pages/blog/[id].jsx

import ClientSideComponent from "@/components/edit-delete-blog/ClientSideComponent";

// This should be a server-side function to fetch initial data
export default async function page({ params }) {
  const { id } = params;

  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/blogs/get-blog/${id}`,
    { next: { revalidate: 360 } });

  if (!response.ok) {
    return { props: { initialData: null } };
  }
  
  const data = await response.json();
  return (
    <ClientSideComponent initialData={data} />
  );
}
