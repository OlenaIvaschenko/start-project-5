import TravellersStories from "@/components/TravellersStories/TravellersStories";

const TravellerProfile = async () => {
  const testArray: string[] = ["1", "2", "3", "4", "5", "6"];

  return (
    <div>
      <div>
        <p>Traveller</p>
      </div>



      <div>
        <TravellersStories testArray={testArray} />
      </div>
    </div>
  );
};

export default TravellerProfile;
