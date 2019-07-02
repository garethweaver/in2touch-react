const REFRESH_SELECTED_TEAM = payload => {
  return {
    type: 'REFRESH_SELECTED_TEAM',
    payload: payload,
  }
}

export default teams => {
  return (dispatch, getState, fb) => {
    for (let t of teams) {
      fb()
        .teamData(t.id)
        .once('value', snapshot => {
          if (snapshot.val()) {
            snapshot.val().fixturesHash !== t.fixturesHash
              ? dispatch(REFRESH_SELECTED_TEAM(snapshot.val()))
              : console.log(`no updates for team ${t.id}`)
          } else {
            console.log('no team data')
          }
        })
    }
  }
}
