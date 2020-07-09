import { getPlaces } from "./providers/OpenCageDataProvider";

export const getPlacesByName = async (q: any) => {
  if (typeof q === "undefined" || q.length < 3) {
    return {
      type: "FeatureCollection",
      features: []
    };
  }

  return await getPlaces(q);
};