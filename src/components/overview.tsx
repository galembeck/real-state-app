import { SearchForm } from "./search-form";

export function Overview() {
  return (
    <div className="min-h-screen overview flex justify-center items-center">
      <div className="max-w-4xl flex flex-col gap-6 items-center pb-10">
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-center text-white">
            Easy way to find your dream home
          </h1>
          <p className="text-slate-300 text-center">
            A great platform to buy, sell and rent your properties without any agent or commissions.
          </p>
        </div>
        
        <SearchForm />
      </div>
    </div>
  );
}