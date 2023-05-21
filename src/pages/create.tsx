import { NextPage } from "next";
import { useState } from "react";

import { Button } from "@components/basic/button";
import { FileDropzone } from "@components/basic/file-dropzone";
import { useCreatePublication } from "@lib/use-create-publication";

const CreatePage: NextPage = () => {
  const [file, setFile] = useState<File | undefined>();

  const { mutate: createPublication, isLoading } = useCreatePublication({
    onSuccess() {
      console.log("success");
    },
  });

  const onCreatePage = () => {
    if (!file) return;
    createPublication({
      title: "How the government leaked sensitive data",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque porro iste, nihil quos corporis, fugit repudiandae placeat asperiores fugiat eius, voluptatum dolorum minus consectetur id laboriosam? Illo atque deserunt quis aspernatur libero hic, enim sed sapiente temporibus consequatur molestiae esse doloribus tempora quod, eaque harum? Tenetur, facere quidem placeat pariatur odio ea est eos earum enim sunt blanditiis. Dicta vero molestiae iure consequatur, impedit quod nam sequi unde, alias possimus neque? Perferendis eos culpa autem accusantium totam doloribus, itaque tempore quos inventore odio eaque, assumenda voluptas excepturi odit, esse voluptatum quasi. A, quod. Ullam ipsum, exercitationem voluptas odio in suscipit.",
      file,
    });
  };

  return (
    <div className="mt-10 flex justify-center">
      <FileDropzone
        value={file}
        onValueChange={setFile}
        accept={{
          "application/pdf": [".pdf"],
        }}
        label="File"
      />
      <Button onClick={onCreatePage} loading={isLoading} disabled={isLoading}>
        Create
      </Button>
    </div>
  );
};

export default CreatePage;
