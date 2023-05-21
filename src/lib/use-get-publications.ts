import { profileId, usePublications } from "@lens-protocol/react-web";

import { CHAIN } from "@constants/chains";
import { WIKILEAKS_PROFILE_ID } from "@constants/lens";

export const useGetPublications = () => {
  const profId = profileId(WIKILEAKS_PROFILE_ID[CHAIN.id]);
  console.log("Profile Id: ", profId);

  return usePublications({
    profileId: profileId(WIKILEAKS_PROFILE_ID[CHAIN.id]),
  });
};
