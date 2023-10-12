import Details from "@/components/Details";
import Search from "@/components/Search";

export default function Weather() {
  return (
    <main className="w-full max-w-1500 flex flex-row justify-between p-5 gap-4 max-lg:flex-col max-md:p-2">
      <Search />
      <Details />
    </main>
  );
}
