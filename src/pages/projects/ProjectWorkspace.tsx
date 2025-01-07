import { Link, useParams } from "react-router";
import Button from "@components/ui/button/Button";
import { useGetProjectDevices } from "@services/hooks/project/useGetProjectDevices";
import Spinner from "@components/ui/spinner/Spinner";

const ProjectWorkspace = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetProjectDevices(id!);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error?.response?.data.error}</div>;

  return (
    <div className="p-4">
      {/* Title and Link */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-semibold">
          Project: <span className="text-blue-500">{id}</span>
        </h1>
        <Button key={id} type="button" variant="secondary">
          <Link to="/projects" className="w-full h-full">
            Volver
          </Link>
        </Button>
      </div>

      {/* Info and Devices */}
      <div className="flex flex-col lg:flex-row border border-gray-300 rounded-md overflow-hidden">
        <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
          <h2 className="text-lg font-medium mb-2">Connection Information</h2>
          <p className="text-gray-600">Info about connections will go here.</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-medium mb-2">Devices List</h2>
          <p className="text-gray-600">Details about devices will go here.</p>
          {data?.data ? (
            <ul>
              {data.data.map((item) => (
                <p>{item.device}</p>
              ))}
            </ul>
          ) : (
            <h2>{data?.message}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

ProjectWorkspace.displayname = "ProjectWorkspace";

export default ProjectWorkspace;
