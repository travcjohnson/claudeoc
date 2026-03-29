interface LogoCloudProps {
  companies: string[];
  universities?: string[];
}

export function LogoCloud({ companies, universities }: LogoCloudProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {companies.map((name) => (
          <div
            key={name}
            className="rounded-lg border border-slate-dark/5 bg-white px-4 py-3 text-center font-sans text-sm font-semibold text-slate-medium"
          >
            {name}
          </div>
        ))}
      </div>
      {universities && universities.length > 0 && (
        <p className="mt-4 font-serif text-sm text-cloud-dark">
          + {universities.join(", ")}...
        </p>
      )}
    </div>
  );
}
