const LAUNCHES_QUERY = `
{
  launchesPast(limit: 10){
    id
    mission_name
  }
}
`

export default LAUNCHES_QUERY;