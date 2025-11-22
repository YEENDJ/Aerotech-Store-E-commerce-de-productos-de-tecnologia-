import CategoryProducts from "@/components/CategoryProducts";

export default function dronesList() {
  return (
    
    <section className="flex justify-center  bg-[#FFFFFF] ">
        <div className="flex">
            <h1 className="text-2xl font-bold mb-4 flex justify-center items-center">DRONES</h1>
            
            </div>
      <CategoryProducts categoryId={1} />
    </section>
  );
}