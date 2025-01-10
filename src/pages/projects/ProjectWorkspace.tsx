import { Link, useParams } from "react-router";
import Button from "@components/ui/button/Button";
import { useGetProjectDevices } from "@services/hooks/project/useGetProjectDevices";
import { useGetProject } from "@services/hooks/project/useGetProject";
import Workspace from "@components/Workspace";
import Spinner from "@components/ui/spinner/Spinner";
import Modal from "@components/ui/Modal";
import { useState } from "react";
import AddDeviceForm from "@components/forms/AddDeviceForm";

const ProjectWorkspace = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = (): void => {
    setOpenModal(!openModal);
  };

  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError, error } = useGetProjectDevices(id!);
  const {
    data: detailData,
    isLoading: detailLoading,
    isError: detailIsError,
    error: detailError,
  } = useGetProject(id!);

  if (isLoading && detailLoading) return <Spinner />;
  if (isError) return <div>Error: {error?.response?.data.error}</div>;
  if (detailIsError)
    return <div>Error: {detailError?.response?.data.error}</div>;

  return (
    <div className="p-4">
      {/* Title and Link */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-4">
        <h1 className="text-2xl font-semibold flex-1 min-w-[200px]">
          {detailData?.data.name}
        </h1>

        <div className="flex gap-2">
          <Button key={id + "return"} type="button" variant="secondary">
            <Link to="/projects" className="w-full h-full">
              Volver
            </Link>
          </Button>
          <Button
            key={id + "add-device"}
            type="button"
            variant="primary"
            onClick={handleModal}
          >
            Agregar
          </Button>
        </div>
      </div>

      {/* Info and Devices */}
      <Workspace
        connection={detailData?.data.connection_name}
        devices={data?.data}
      />

      <Modal
        isOpen={openModal}
        onClose={handleModal}
        closeButtonLabel="Cerrar"
        title="Agregar Dispositivo"
      >
        <AddDeviceForm></AddDeviceForm>
      </Modal>
    </div>
  );
};

ProjectWorkspace.displayname = "ProjectWorkspace";

export default ProjectWorkspace;
