import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import TravellerDetailsClient from "./TravellerDetailsClient";

const TravellerProfile = async () => {
  const queryClient = new QueryClient();
  const testArray: string[] = ["1", "2", "3", "4", "5", "6"];

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <TravellerDetailsClient testArray={testArray} />
    </HydrationBoundary>
  );
};

export default TravellerProfile;
