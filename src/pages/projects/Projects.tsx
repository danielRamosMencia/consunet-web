import { useGetUserProjects } from "@services/hooks/project/useGetUserProjects";
import Card from "@components/ui/card/Card";

const Projects = () => {
  const { data, isLoading, isError, error } = useGetUserProjects();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.response?.data.error}</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {data?.data.map((project) => (
        <Card
          key={project.id}
          title={project.name}
          label={project.code}
          link={`/projects/${project.id}`}
          linkText="Ir a proyecto"
        />
      ))}
    </div>
  );
};

export default Projects;
