import { DocumentIcon } from "@heroicons/react/24/outline";
import { Post } from "@lens-protocol/react-web";
import { useRouter } from "next/router";

import { Button } from "@components/basic/button";
import { Spinner } from "@components/basic/spinner";
import { DislikeComponent } from "@components/icons/dislike-component";
import { LikeComponent } from "@components/icons/like-component";
import { PublicationForum } from "@components/publication/publication-forum";
import { useGetPublication } from "@lib/use-get-publication";
import { getIpfsUrl } from "@utils/ipfs";

const CourseInfo = ({ publication }: { publication: Post }) => {
  const fileUri = publication.metadata.attributes.find(
    (attr) => attr.traitType === "fileUri",
  )?.value;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-2">
      <h1 className="my-4 text-3xl font-bold">{publication.metadata.name}</h1>
      <div className="flex items-center justify-between">
        {fileUri && (
          <a
            className="rounded-btn flex items-center gap-2 bg-base-200 p-3 hover:bg-base-300"
            href={getIpfsUrl(fileUri)}
            target="_blank"
            rel="nofererrer noreferrer"
          >
            <DocumentIcon className="h-5 w-5" />
            Leaked Document
          </a>
        )}
        <div className="flex items-center gap-3">
          <LikeComponent />
          <DislikeComponent />
          <Button>Donate</Button>
        </div>
      </div>
      <p className="mt-4">{publication.metadata.description}</p>
      <PublicationForum publicationId={publication.id} className="mt-6" />
    </div>
  );
};

const PublicationPageInner = ({ publicationId }: { publicationId: string }) => {
  const { data: publication, loading } = useGetPublication(publicationId);

  if (loading || !publication) {
    return (
      <div className="flex justify-center">
        <Spinner />
      </div>
    );
  }

  return <CourseInfo publication={publication as Post} />;
};

const PublicationPage = () => {
  const router = useRouter();
  const publicationId = router.query["publication-id"]?.toString();

  if (!publicationId) return null;

  return <PublicationPageInner publicationId={publicationId} />;
};

export default PublicationPage;
