import CategoryProducts from "@/components/CategoryProducts";

export default function Page() {
  return (
    
    <section className="flex justify-center  bg-[#FFFFFF] ">
        <div className="flex">
            <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">Camaras</h1>
            
            </div>
      <CategoryProducts categoryId={3} />
    </section>
  );
}