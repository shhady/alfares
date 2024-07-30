import ClientComponent from '@/components/new-properties/ClientComponent';

export default async function NewProperties() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PROD_URL ? process.env.NEXT_PUBLIC_BACKEND_PROD_URL : process.env.NEXT_PUBLIC_BACKEND_DEV_URL }/api/properties/get-properties`,
    { next: { revalidate: 360 } });

  if (!response.ok) {
    return <div className='mt-8 flex justify-center items-center'>No products found</div>;
  }

  const data = await response.json();

  return (
    <div className='bg-white text-black min-h-screen'>
      <div className='p-8 text-center flex flex-col gap-4 max-w-screen-2xl m-auto'>
        <h1 className='text-4xl'>احدث العقارات</h1>
        <div className='border-b-2 md:w-80 w-40 mx-auto'></div>
        <p className=''>اطّلع على أحدث العقارات المعروضة في الإمارات</p>
        <ClientComponent data={data} />
      </div>
    </div>
  );
}
