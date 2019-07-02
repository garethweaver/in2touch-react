const REFRESH_SELECTED_LEAGUE = payload => {
  return {
    type: 'REFRESH_SELECTED_LEAGUE',
    payload: payload,
  }
}

export default leagues => {
  return (dispatch, getState, fb) => {
    for (let l of leagues) {
      fb()
        .league(l.id)
        .once('value', snapshot => {
          if (snapshot.val()) {
            JSON.stringify(snapshot.val()) !== JSON.stringify(l)
              ? dispatch(REFRESH_SELECTED_LEAGUE(snapshot.val()))
              : console.log(`no updates for league ${l.id}`)
          } else {
            console.log('no league data')
          }
        })
    }
  }
}
