// src/components/AddressesSection.tsx

type Location = {
  city: string;
  address: string;
};

const locations: Location[] = [
  {
    city: "Dubai",
    address: "Business Bay, Dubai, UAE",
  },
  {
    city: "Indore",
    address: "Shagun Arcade, Indore, India",
  },
  {
    city: "New Palasia",
    address: "New Palasia, Indore, India",
  },
];

export const AddressesSection = () => {
  return (
    <div className="space-y-3 text-sm text-foreground/70">
      {locations.map((location) => (
        <div key={location.city} className="space-y-1">
          <p className="font-medium text-white">{location.city}</p>
          <p className="text-xs text-foreground/60 leading-relaxed">
            {location.address}
          </p>
        </div>
      ))}
    </div>
  );
};