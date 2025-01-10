import Spinner from "@components/ui/spinner/Spinner";
import { useGetDevices } from "@services/hooks/device/useGetDevices";
import { useMemo, useState } from "react";
import Select from "@components/ui/Select";

const AddDeviceForm = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const { data, isLoading, isError, error } = useGetDevices();

  const options = useMemo(() => data?.data, [data]);

  if (isLoading) return <Spinner />;
  if (isError) return <div>Error: {error?.response?.data.error}</div>;

  return (
    <form>
      <Select
        label="Selecciona un dispositivo"
        options={options ?? []}
        value={selectedOption}
        onChange={(value) => setSelectedOption(value)}
        required
        placeholder="dispositivo"
        key={"devices-select"}
      ></Select>
    </form>
  );
};
AddDeviceForm.displayname = "AddDeviceForm";

export default AddDeviceForm;
