import CategoryProducts from "@/components/CategoryProducts";

export default function Page() {
  return (
    <section className="flex justify-center  bg-[#FFFFFF] ">
      <CategoryProducts categoryId={3} />
    </section>
  );
}