import { ProjectDevice } from "@api/project"

type WorkspaceProps = {
  connection?: string
  devices?: ProjectDevice[]
}

const Workspace = ({connection, devices} : WorkspaceProps) => {
  return (
    <div className="flex flex-col lg:flex-row border border-gray-300 rounded-md overflow-hidden">
        <div className="flex-1 p-4 border-b lg:border-b-0 lg:border-r border-gray-300">
          <h2 className="text-lg font-medium mb-2">Connection Information</h2>
          <p className="text-gray-600">{connection}</p>
        </div>
        <div className="flex-1 p-4">
          <h2 className="text-lg font-medium mb-2">Devices List</h2>
          <p className="text-gray-600">Details about devices will go here.</p>
          {devices ? (
            <ul>
              {devices.map((device, index) => (
                <p key={index}>{device.device} - {device.activity}</p>
              ))}
            </ul>
          ): (
            <p>No devices</p>
          )}
        </div>
      </div>
  )
}
Workspace.displayname = "Workspace"

export default Workspace