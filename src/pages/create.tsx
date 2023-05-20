import { NextPage } from "next";

import { Button } from "@components/basic/button";
import { useCreatePublication } from "@lib/use-create-publication";

const CreatePage: NextPage = () => {
  const { mutate: createPublication, isLoading } = useCreatePublication({
    onSuccess() {
      console.log("success");
    },
  });

  const onCreatePage = () => {
    createPublication({
      title: "Title",
      description: "Description 3",
    });
  };

  return (
    <div className="mt-10 flex justify-center">
      <Button onClick={onCreatePage} loading={isLoading} disabled={isLoading}>
        Create
      </Button>
    </div>
  );
};

export default CreatePage;
