import Realm from 'realm'

const PersistSchema = {
  name: 'PersistSchema',
  primaryKey: 'name',
  properties: {
    name: 'string',
    content: 'string'
  }
}

class ReduxPersistRealm {
  constructor() {
    this.realm = new Realm({ schema: [PersistSchema] })
    this.items = this.realm.objects('PersistSchema')
  }

  setItem = (key, value) => {
    return (
      new Promise((resolve, reject) => {
        try {
          this.realm.write(() => {
            this.realm.create('PersistSchema', { name: key, content: value }, true)
          })
          resolve()
        } catch (e) {
          reject(e)
        }
      })
    )
  }

  getItem = async (key) => {
    const promise = new Promise((resolve, reject) => {
      try {
        resolve(this.realm.objectForPrimaryKey('PersistSchema', key).content)
      } catch (e) {
        reject(e)
      }
    })

    const result = await promise
    return result
  }

  removeItem = (key) => {
    return (new Promise((resolve, reject) => {
      try {
        const item = this.realm.objectForPrimaryKey('PersistSchema', key)
        this.realm.write(() => {
          this.realm.delete(item)
          this.setItems()
        })
        resolve()
      } catch (e) {
        reject(e)
      }
    })
    )
  }
}

export default new ReduxPersistRealm()
