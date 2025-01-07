import { Link, useParams } from "react-router";
import Button from "@components/ui/button/Button";

const ProjectWorkspace = () => {
  const { id } = useParams<{ id: string }>();

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
          <p className="text-gray-600">
            Details about the connection will go here.
          </p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-medium mb-2">Devices List</h2>
          <p className="text-gray-600">Details about devices will go here.</p>
        </div>
      </div>
    </div>
  );
};

ProjectWorkspace.displayname = "ProjectWorkspace";

export default ProjectWorkspace;
