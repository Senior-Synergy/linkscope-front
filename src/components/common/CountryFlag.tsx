import ReactCountryFlag from "react-country-flag";
import { FaQuestionCircle } from "react-icons/fa";

interface CountryFlagProps {
  country: string | null;
}
function CountryFlag({ country }: CountryFlagProps) {
  return (
    <div className="shrink-0">
      {country ? (
        <ReactCountryFlag
          style={{
            width: "1.5em",
          }}
          className="rounded"
          countryCode={country}
          svg
        />
      ) : (
        <FaQuestionCircle
          style={{
            width: "1.5em",
          }}
        />
      )}
    </div>
  );
}

export default CountryFlag;
