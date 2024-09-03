import LocationButton from "./LocationButton"

const StatusButton = ({ bg, status } : {
    bg:string,
    status:string
}) => {
  return (
    <LocationButton bg={bg} location={status} />
  )
}

export default StatusButton