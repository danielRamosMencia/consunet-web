const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
      <img
        src="/loading.svg"
        alt="Loading..."
        className="animate-spin w-16 h-16"
      />
    </div>
  );
};
Spinner.displayname = "Spinner";

export default Spinner;
