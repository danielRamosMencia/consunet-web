import { useGetUserProjects } from "@services/hooks/project/useGetUserProjects";

const Projects = () => {
  const { data, isLoading, isError, error } = useGetUserProjects();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.response?.data.error}</div>;

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {data?.data.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
