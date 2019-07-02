import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import CONFIG from './config'

class Firebase {
  constructor() {
    app.initializeApp(CONFIG)
    this.auth = app.auth()
    this.db = app.database()
  }

  // signOut = () => this.auth.signOut()

  config = () => this.db.ref('config')
  teams = () => this.db.ref('teams').orderByChild('nameLowercased')
  team = uid => this.db.ref(`teams/${uid}`)
  teamData = uid => this.db.ref(`team-data/${uid}`)
  leagues = () => this.db.ref('leagues').orderByChild('nameLowercased')
  league = uid => this.db.ref(`leagues/${uid}`)
}

const firebase = new Firebase()

export default firebase
